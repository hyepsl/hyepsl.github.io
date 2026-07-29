(function () {
  const data = window.SITE_DATA;

  const icons = {
    location: '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.1 7-13A7 7 0 1 0 5 8c0 6.9 7 13 7 13Zm0-9.5A3.5 3.5 0 1 1 12 4a3.5 3.5 0 0 1 0 7.5Z"/></svg>',
    building: '<svg viewBox="0 0 24 24"><path d="M4 21V3h10v5h6v13h-2v-2H6v2H4Zm2-4h2v-2H6v2Zm0-4h2v-2H6v2Zm0-4h2V7H6v2Zm0-4h2V3H6v2Zm4 12h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2V7h-2v2Zm0-4h2V3h-2v2Zm4 12h2v-2h-2v2Zm0-4h2v-2h-2v2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3V5Zm9 7 7-5H5l7 5Zm0 2.5L5 9.6V17h14V9.6l-7 4.9Z"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2A11 11 0 0 1 12 6.8c1 0 2 .1 2.9.4C17.1 5.7 18 6 18 6c.7 1.6.3 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.1v3.1c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .8Z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24"><path d="m12 2 10 6-10 6L2 8l10-6Zm-6 9.5V16c0 2 2.7 4 6 4s6-2 6-4v-4.5l-6 3.6-6-3.6Z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24"><path d="M12 1.2A10.8 10.8 0 1 0 12 22.8 10.8 10.8 0 0 0 12 1.2ZM7.2 6.7a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Zm1 10.7H6.3V8.3h1.9v9.1Zm3.1 0H9.4V4.8h4.1c4.6 0 6.6 3.3 6.6 6.3 0 3.2-2.1 6.3-6.6 6.3h-2.2Zm0-10.8v9h2.1c3.2 0 4.7-2.2 4.7-4.5 0-2.2-1.5-4.5-4.7-4.5h-2.1Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="m5.6 4.2 14.2 14.2-1.4 1.4L4.2 5.6l1.4-1.4Zm12.8 0 1.4 1.4L5.6 19.8l-1.4-1.4L18.4 4.2Z"/></svg>',
    search: '<svg viewBox="0 0 24 24"><path d="M10.5 3a7.5 7.5 0 1 0 4.7 13.3l4.2 4.2 1.4-1.4-4.2-4.2A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z"/></svg>'
  };

  function relative(path) {
    return path;
  }

  function navHtml(active) {
    const items = [
      ["Home", "index.html", "home"],
      ["Publications", "publications.html", "publications"],
      ["Blog", "blog.html", "blog"],
      ["Gallery", "gallery.html", "gallery"],
      ["CV", "cv.html", "cv"]
    ];
    return `
      <header class="site-header">
        <div class="header-inner">
          <a class="site-title" href="index.html">${data.profile.name}</a>
          <button class="nav-toggle" aria-label="Open navigation" aria-expanded="false">${icons.menu}</button>
          <nav class="top-nav" aria-label="Primary navigation">
            ${items.map(([label, url, key]) => `<a href="${url}" ${key === active ? 'aria-current="page"' : ''}>${label}</a>`).join("")}
          </nav>
        </div>
      </header>`;
  }

  function sidebarHtml() {
    const p = data.profile;
    return `
      <aside class="profile-sidebar">
        <img class="avatar" src="${p.avatar}" alt="Profile image for ${p.name}">
        <div class="profile-names">
          <h2>${p.name}</h2>
          <p class="name-zh">${p.nameZh}</p>
        </div>
        <p class="profile-title">${p.title}</p>
        <p class="profile-bio">${p.bio}</p>
        <ul class="profile-meta">
          <li>${icons.location}<span>${p.location}</span></li>
          <li>${icons.building}<span>${p.affiliation}</span></li>
          ${p.links.map(link => `<li>${icons[link.icon] || icons.mail}<a href="${link.url}" ${link.url.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ''}>${link.label}</a></li>`).join("")}
        </ul>
      </aside>`;
  }

  function footerHtml() {
    return `
      <footer class="site-footer">
        <p>© ${new Date().getFullYear()} ${data.profile.name}. Academic profile and technical notes.</p>
      </footer>`;
  }

  function mountShell(active, title) {
    document.title = `${title} | ${data.profile.name}`;
    document.body.innerHTML = `
      ${navHtml(active)}
      <div class="page-shell">
        ${sidebarHtml()}
        <main id="main-content" class="main-content"></main>
      </div>
      ${footerHtml()}`;
    bindNavigation();
    return document.getElementById("main-content");
  }

  function bindNavigation() {
    const btn = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".top-nav");
    if (!btn || !nav) return;
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.innerHTML = open ? icons.close : icons.menu;
    });
  }

  function groupBy(items, keyFn) {
    return items.reduce((groups, item) => {
      const key = keyFn(item);
      (groups[key] ||= []).push(item);
      return groups;
    }, {});
  }

  function formatDate(value) {
    const date = new Date(`${value}T00:00:00`);
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "2-digit" }).format(date);
  }


  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeUrl(value) {
    const url = String(value || "").trim();
    if (/^(https?:|mailto:|#|\/|\.\/|\.\.\/|assets\/)/i.test(url)) return url;
    return "#";
  }

  function inlineMarkdown(source) {
    const tokens = [];
    const keep = html => {
      const key = `@@MDTOKEN${tokens.length}@@`;
      tokens.push(html);
      return key;
    };

    let text = String(source || "");
    text = text.replace(/`([^`\n]+)`/g, (_, code) => keep(`<code>${escapeHtml(code)}</code>`));
    text = text.replace(/\$([^$\n]+)\$/g, match => keep(match));
    text = text.replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+["']([^"']*)["'])?\)/g,
      (_, alt, url, title) => keep(`<img src="${escapeHtml(safeUrl(url))}" alt="${escapeHtml(alt)}"${title ? ` title="${escapeHtml(title)}"` : ""}>`));
    text = text.replace(/\[([^\]]+)\]\(([^\s)]+)(?:\s+["']([^"']*)["'])?\)/g,
      (_, label, url, title) => {
        const safe = safeUrl(url);
        const external = /^https?:/i.test(safe) ? ' target="_blank" rel="noreferrer"' : "";
        return keep(`<a href="${escapeHtml(safe)}"${title ? ` title="${escapeHtml(title)}"` : ""}${external}>${escapeHtml(label)}</a>`);
      });

    text = escapeHtml(text);
    text = text
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/__([^_]+)__/g, "<strong>$1</strong>")
      .replace(/~~([^~]+)~~/g, "<del>$1</del>")
      .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
      .replace(/(^|[^_])_([^_\n]+)_/g, "$1<em>$2</em>");

    tokens.forEach((html, index) => {
      text = text.replace(`@@MDTOKEN${index}@@`, html);
    });
    return text;
  }

  function splitTableRow(line) {
    return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim());
  }

  function markdownToHtml(markdown) {
    const lines = String(markdown || "").replace(/\r\n?/g, "\n").split("\n");
    const html = [];
    let index = 0;

    const isBlank = line => !line || !line.trim();
    const isFence = line => /^\s*```/.test(line);
    const isHeading = line => /^\s{0,3}#{1,6}\s+/.test(line);
    const isQuote = line => /^\s*>\s?/.test(line);
    const isList = line => /^\s*([-+*]|\d+\.)\s+/.test(line);
    const isRule = line => /^\s{0,3}((\*\s*){3,}|(-\s*){3,}|(_\s*){3,})\s*$/.test(line);
    const isDisplayMath = line => /^\s*\$\$/.test(line);
    const isTableSeparator = line => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
    const startsBlock = (line, next) => isBlank(line) || isFence(line) || isHeading(line) || isQuote(line) || isList(line) || isRule(line) || isDisplayMath(line) || (line.includes("|") && next && isTableSeparator(next));

    while (index < lines.length) {
      const line = lines[index];
      if (isBlank(line)) { index += 1; continue; }

      if (isFence(line)) {
        const language = line.trim().slice(3).trim().replace(/[^a-zA-Z0-9_-]/g, "");
        const code = [];
        index += 1;
        while (index < lines.length && !isFence(lines[index])) {
          code.push(lines[index]);
          index += 1;
        }
        if (index < lines.length) index += 1;
        html.push(`<pre><code${language ? ` class="language-${language}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`);
        continue;
      }

      if (isDisplayMath(line)) {
        const math = [line.trim()];
        index += 1;
        if (math[0] !== "$$" && math[0].endsWith("$$") && math[0].length > 4) {
          html.push(`<div class="math-display">${escapeHtml(math[0])}</div>`);
          continue;
        }
        while (index < lines.length) {
          math.push(lines[index]);
          const closed = lines[index].trim().endsWith("$$");
          index += 1;
          if (closed) break;
        }
        html.push(`<div class="math-display">${escapeHtml(math.join("\n"))}</div>`);
        continue;
      }

      const heading = line.match(/^\s{0,3}(#{1,6})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        html.push(`<h${level}>${inlineMarkdown(heading[2].replace(/\s+#+\s*$/, ""))}</h${level}>`);
        index += 1;
        continue;
      }

      if (isRule(line)) {
        html.push("<hr>");
        index += 1;
        continue;
      }

      if (line.includes("|") && index + 1 < lines.length && isTableSeparator(lines[index + 1])) {
        const headers = splitTableRow(line);
        index += 2;
        const rows = [];
        while (index < lines.length && lines[index].includes("|") && !isBlank(lines[index])) {
          rows.push(splitTableRow(lines[index]));
          index += 1;
        }
        html.push(`<div class="table-wrap"><table><thead><tr>${headers.map(cell => `<th>${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map(row => `<tr>${headers.map((_, i) => `<td>${inlineMarkdown(row[i] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
        continue;
      }

      if (isQuote(line)) {
        const quote = [];
        while (index < lines.length && isQuote(lines[index])) {
          quote.push(lines[index].replace(/^\s*>\s?/, ""));
          index += 1;
        }
        html.push(`<blockquote><p>${inlineMarkdown(quote.join(" "))}</p></blockquote>`);
        continue;
      }

      if (isList(line)) {
        const ordered = /^\s*\d+\.\s+/.test(line);
        const tag = ordered ? "ol" : "ul";
        const items = [];
        while (index < lines.length) {
          const match = ordered
            ? lines[index].match(/^\s*\d+\.\s+(.+)$/)
            : lines[index].match(/^\s*[-+*]\s+(.+)$/);
          if (!match) break;
          items.push(match[1]);
          index += 1;
        }
        html.push(`<${tag}>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join("")}</${tag}>`);
        continue;
      }

      const paragraph = [line.trim()];
      index += 1;
      while (index < lines.length && !startsBlock(lines[index], lines[index + 1])) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    }

    return html.join("\n");
  }

  function readingTime(post) {
    const text = post.content.replace(/```[\s\S]*?```/g, " ").replace(/[#>*_`~|$\\-]/g, " ").trim();
    return Math.max(1, Math.ceil(text.split(/\s+/).length / 210));
  }

  function renderHome() {
    const main = mountShell("home", "Home");
    const latest = [...data.posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);
    main.innerHTML = `
      <section class="intro-section">
        <p class="eyebrow">Mechanical engineering · Intelligent energy systems</p>
        <h1>Micro-grid with artificial intelligence.</h1>
        <p class="lead">I am a Ph.D. candidate at CNU working on the renewable energy system and hybrid power system.</p>
        <div class="profile-stats" aria-label="Academic profile summary">
          <div><strong>6</strong><span>Published journal articles</span></div>
          <div><strong>3</strong><span>Conference contributions</span></div>
        </div>
        <div class="button-row">
          <a class="button primary" href="cv.html">View CV</a>
          <a class="button" href="publications.html">View publications</a>
        </div>
      </section>

      <section class="content-section two-column-section">
        <div>
          <div class="section-heading"><h2>News</h2></div>
          <div class="news-list">${data.news.map(n => `<div class="news-item"><time>${n.date}</time><p>${n.text}</p></div>`).join("")}</div>
        </div>
        <div>
          <div class="section-heading"><h2>Latest Posts</h2><a href="blog.html">Archive</a></div>
          <div class="compact-post-list">${latest.map(p => `<article><time>${formatDate(p.date)}</time><h3><a href="post.html?slug=${p.slug}">${p.title}</a></h3></article>`).join("")}</div>
        </div>
      </section>`;
  }

  function renderPublications() {
    const main = mountShell("publications", "Publications");
    const grouped = groupBy(data.publications, p => p.year);
    const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
    main.innerHTML = `
      <header class="page-header"><p class="eyebrow">Academic output</p><h1>Publications</h1><p class="lead">Journal articles, manuscripts under review, and international conference contributions in intelligent energy systems and advanced control.</p></header>
      ${years.map(year => `<section class="archive-year"><h2 class="year-title">${year}</h2>${grouped[year].map(p => `<article class="publication-item"><span class="pub-type">${p.type}</span><h3>${p.title}</h3><p class="authors">${p.authors}</p><p>${p.venue}</p></article>`).join("")}</section>`).join("")}`;
  }

  function archiveMarkup(posts) {
    const grouped = groupBy(posts, post => post.date.slice(0, 4));
    return Object.keys(grouped).sort((a, b) => b.localeCompare(a)).map(year => `
      <section class="archive-year" data-year="${year}">
        <h2 class="year-title">${year}</h2>
        ${grouped[year].sort((a, b) => b.date.localeCompare(a.date)).map(post => `
          <article class="archive-post" data-search="${[post.title, post.category, post.excerpt].join(" ").toLowerCase()}">
            <h3><a href="post.html?slug=${post.slug}">${post.title}</a></h3>
            <p class="post-meta">${readingTime(post)} min read · Published: ${formatDate(post.date)} · ${post.category}</p>
            <p>${post.excerpt}</p>
          </article>`).join("")}
      </section>`).join("");
  }

  function renderBlog() {
    const main = mountShell("blog", "Blog posts");
    main.innerHTML = `
      <header class="page-header blog-header"><p class="eyebrow">Technical notes</p><h1>Blog posts</h1><p class="lead">Notes on power electronics, advanced control, reinforcement learning, microgrids, and embedded deployment.</p>
        <label class="search-box">${icons.search}<input id="post-search" type="search" placeholder="Search posts or categories" aria-label="Search posts"></label>
      </header>
      <div id="blog-archive">${archiveMarkup(data.posts)}</div>
      <p id="empty-search" class="empty-state" hidden>No matching posts found.</p>`;

    const input = document.getElementById("post-search");
    input.addEventListener("input", () => {
      const term = input.value.trim().toLowerCase();
      let visibleCount = 0;
      document.querySelectorAll(".archive-year").forEach(section => {
        let sectionVisible = 0;
        section.querySelectorAll(".archive-post").forEach(post => {
          const visible = !term || post.dataset.search.includes(term);
          post.hidden = !visible;
          if (visible) { sectionVisible += 1; visibleCount += 1; }
        });
        section.hidden = sectionVisible === 0;
      });
      document.getElementById("empty-search").hidden = visibleCount !== 0;
    });
  }

  function renderPost() {
    const params = new URLSearchParams(location.search);
    const slug = params.get("slug");
    const post = data.posts.find(p => p.slug === slug);
    const main = mountShell("blog", post ? post.title : "Post not found");
    if (!post) {
      main.innerHTML = `<header class="page-header"><h1>Post not found</h1><p>The requested article does not exist.</p><a class="button" href="blog.html">Back to blog</a></header>`;
      return;
    }
    main.innerHTML = `
      <article class="article-page">
        <header class="article-header"><a class="back-link" href="blog.html">← Blog archive</a><p class="eyebrow">${post.category}</p><h1>${post.title}</h1><p class="post-meta">${readingTime(post)} min read · Published: ${formatDate(post.date)}</p></header>
        <div class="article-body">${markdownToHtml(post.content)}</div>
      </article>`;
  }

  function renderGallery() {
    const main = mountShell("gallery", "Gallery");
    const photos = [...(data.gallery || [])].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    const groupedPhotos = groupBy(photos.map((photo, index) => ({ photo, index })), item => (item.photo.date || "").slice(0, 4) || "Undated");
    const galleryYears = Object.keys(groupedPhotos).sort((a, b) => {
      if (a === "Undated") return 1;
      if (b === "Undated") return -1;
      return b.localeCompare(a);
    });
    main.innerHTML = `
      <header class="page-header"><p class="eyebrow">Photo journal</p><h1>Gallery</h1><p class="lead">A chronological visual record of conferences, academic life, travel, and memorable moments along the way.</p></header>
      ${photos.length ? `
        <div class="gallery-timeline">
          ${galleryYears.map(year => `
            <section class="gallery-year">
              <div class="gallery-year-label"><span>${escapeHtml(year)}</span></div>
              <div class="gallery-year-content">
                <div class="gallery-grid">
                  ${groupedPhotos[year].map(({ photo, index }) => `
                    <article class="gallery-card">
                      <button class="gallery-open" type="button" data-gallery-index="${index}" aria-label="View ${escapeHtml(photo.title || "photo")}">
                        <img src="${escapeHtml(safeUrl(photo.src))}" alt="${escapeHtml(photo.alt || photo.title || "Gallery photo")}" loading="lazy">
                      </button>
                      <div class="gallery-caption">
                        <h2>${escapeHtml(photo.title || "Untitled")}</h2>
                        ${(photo.date || photo.location) ? `<p class="gallery-meta">${[photo.date, photo.location].filter(Boolean).map(escapeHtml).join(" · ")}</p>` : ""}
                        ${photo.caption ? `<p>${escapeHtml(photo.caption)}</p>` : ""}
                      </div>
                    </article>`).join("")}
                </div>
              </div>
            </section>`).join("")}
        </div>
        <dialog id="gallery-lightbox" class="gallery-lightbox" aria-label="Photo viewer">
          <button class="gallery-close" type="button" aria-label="Close photo viewer">×</button>
          <img alt="">
          <div class="gallery-lightbox-caption"></div>
        </dialog>` : `<div class="gallery-empty"><p class="eyebrow">Collection in progress</p><h2>Photos will appear here soon.</h2><p>This space is ready for conferences, academic milestones, travels, and everyday memories.</p></div>`}`;

    if (!photos.length) return;
    const dialog = document.getElementById("gallery-lightbox");
    const lightboxImage = dialog.querySelector("img");
    const lightboxCaption = dialog.querySelector(".gallery-lightbox-caption");
    const closeDialog = () => dialog.close ? dialog.close() : dialog.removeAttribute("open");

    document.querySelectorAll(".gallery-open").forEach(button => {
      button.addEventListener("click", () => {
        const photo = photos[Number(button.dataset.galleryIndex)];
        lightboxImage.src = safeUrl(photo.src);
        lightboxImage.alt = photo.alt || photo.title || "Gallery photo";
        lightboxCaption.textContent = [photo.title, photo.date, photo.location].filter(Boolean).join(" · ");
        dialog.showModal ? dialog.showModal() : dialog.setAttribute("open", "");
      });
    });
    dialog.querySelector(".gallery-close").addEventListener("click", closeDialog);
    dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(); });
  }

  function renderCV() {
    const main = mountShell("cv", "CV");
    main.innerHTML = `
      <header class="page-header cv-header"><div><p class="eyebrow">Curriculum vitae</p><h1>${data.profile.name}</h1><p class="lead">Green hydrogen microgrids · Deep reinforcement learning control · Fuel-cell hybrid energy management</p><p class="cv-contact">${data.profile.affiliation} · ${data.profile.location} · <a href="mailto:${data.profile.email}">${data.profile.email}</a></p></div><button class="button" onclick="window.print()">Print / Save PDF</button></header>
      <section class="cv-section"><h2>Profile</h2><p>${data.profile.bio}</p></section>
      <section class="cv-section"><h2>Education</h2>${data.education.map(item => `<div class="cv-entry"><div><strong>${item.degree}</strong><p>${item.institution}</p><p>${item.detail}</p></div><time>${item.period}</time></div>`).join("")}</section>
      <section class="cv-section"><h2>Technical Skills</h2>${data.skills.map(skill => `<div class="cv-skill"><strong>${skill.category}</strong><p>${skill.items}</p></div>`).join("")}</section>
      <section class="cv-section"><h2>Publications and Presentations</h2>${data.publications.map(p => `<div class="cv-entry cv-publication"><div><span class="pub-type">${p.type}</span><strong>${p.title}</strong><p>${p.authors}. ${p.venue}.</p></div><time>${p.year}</time></div>`).join("")}</section>
      <section class="cv-section"><h2>Honors and Awards</h2><div class="award-grid">${data.awards.map(award => `<div class="award-item"><time>${award.year}</time><div><strong>${award.title}</strong><p>${award.detail}</p></div></div>`).join("")}</div></section>
      <section class="cv-section"><h2>Academic Service</h2>${data.academicService.map(item => `<div class="cv-entry"><div><strong>${item.role}</strong><p>${item.organization}</p></div></div>`).join("")}</section>`;
  }

  const page = document.body.dataset.page;
  const renderers = { home: renderHome, publications: renderPublications, blog: renderBlog, post: renderPost, gallery: renderGallery, cv: renderCV };
  (renderers[page] || renderHome)();
})();
