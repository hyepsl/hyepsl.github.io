#!/usr/bin/env python3
"""Build blog data from Markdown files using only the Python standard library."""
from __future__ import annotations

import json
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent
POSTS_DIR = ROOT / "posts"
OUTPUT = ROOT / "assets" / "js" / "blog-posts.js"


def parse_front_matter(text: str, source: Path) -> tuple[dict[str, str], str]:
    normalized = text.replace("\r\n", "\n")
    if not normalized.startswith("---\n"):
        raise ValueError(f"{source.name}: missing YAML-style front matter starting with ---")
    end = normalized.find("\n---\n", 4)
    if end < 0:
        raise ValueError(f"{source.name}: missing closing --- in front matter")

    header = normalized[4:end]
    body = normalized[end + 5:].strip()
    metadata: dict[str, str] = {}
    for line_number, line in enumerate(header.splitlines(), start=2):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        if ":" not in line:
            raise ValueError(f"{source.name}:{line_number}: expected key: value")
        key, value = line.split(":", 1)
        key = key.strip().lower()
        value = value.strip().strip('"').strip("'")
        metadata[key] = value
    return metadata, body


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9\u4e00-\u9fff]+", "-", value)
    return value.strip("-") or "post"


def plain_excerpt(markdown: str, length: int = 180) -> str:
    text = re.sub(r"```.*?```", " ", markdown, flags=re.S)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)
    text = re.sub(r"[#>*_`~|$\\-]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text if len(text) <= length else text[: length - 1].rstrip() + "…"


def build() -> int:
    if not POSTS_DIR.exists():
        POSTS_DIR.mkdir(parents=True)

    records: list[dict[str, str]] = []
    seen_slugs: set[str] = set()
    errors: list[str] = []

    for path in sorted(POSTS_DIR.glob("*.md")):
        if path.name.startswith("_"):
            continue
        try:
            metadata, body = parse_front_matter(path.read_text(encoding="utf-8"), path)
            title = metadata.get("title", "").strip()
            date = metadata.get("date", "").strip()
            category = metadata.get("category", "Notes").strip() or "Notes"
            slug = metadata.get("slug", "").strip() or slugify(path.stem)
            excerpt = metadata.get("excerpt", "").strip() or plain_excerpt(body)

            if not title:
                raise ValueError(f"{path.name}: title is required")
            try:
                datetime.strptime(date, "%Y-%m-%d")
            except ValueError as exc:
                raise ValueError(f"{path.name}: date must use YYYY-MM-DD") from exc
            if slug in seen_slugs:
                raise ValueError(f"{path.name}: duplicate slug '{slug}'")
            seen_slugs.add(slug)

            records.append({
                "slug": slug,
                "title": title,
                "date": date,
                "category": category,
                "excerpt": excerpt,
                "content": body,
                "source": f"posts/{path.name}",
            })
        except Exception as exc:
            errors.append(str(exc))

    if errors:
        print("Blog build failed:", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1

    records.sort(key=lambda item: item["date"], reverse=True)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    payload = "window.BLOG_POSTS = " + json.dumps(records, ensure_ascii=False, indent=2) + ";\n"
    OUTPUT.write_text(payload, encoding="utf-8")
    print(f"Built {len(records)} Markdown post(s) -> {OUTPUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(build())
