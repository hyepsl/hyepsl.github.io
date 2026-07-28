# PowerAgent Academic Website — Markdown Blog Edition

这是一个纯静态学术主页。个人资料、研究方向、项目和论文仍在 JavaScript 数据文件中维护；技术博客改为独立 Markdown 文件。

## 在 VS Code 中打开

1. 解压网站文件夹。
2. 打开 VS Code。
3. 选择“文件 → 打开文件夹”。
4. 选择整个 `poweragent-academic-site` 文件夹。

## 修改个人资料

编辑：

```text
assets/js/site-data.js
```

主要内容：

- `profile`：姓名、简介、学校、邮箱、头像、学术链接
- `news`：首页动态
- `research`：研究方向
- `projects`：项目经历
- `publications`：论文成果

博客文章不要再写入 `site-data.js`。

## 添加或修改 Markdown 博客

所有文章放在：

```text
posts/
```

可以复制下面的模板：

```text
posts/_template.md
```

然后重命名，例如：

```text
posts/buck-mpc-control.md
```

每篇文章开头必须包含：

```markdown
---
title: Buck Converter MPC Control
date: 2026-08-01
category: Advanced Control
excerpt: 本文介绍 Buck 变换器直接占空比 MPC 的建模和实现。
slug: buck-mpc-control
---
```

其中：

- `title`：文章标题
- `date`：必须使用 `YYYY-MM-DD`
- `category`：文章分类
- `excerpt`：博客归档页显示的摘要；省略时会自动截取正文
- `slug`：文章网址标识，建议只使用英文小写字母、数字和连字符

`---` 下面就是普通 Markdown 正文。

## 让网页读取 Markdown

保存文章后，需要重新生成博客数据。

### 方法一：双击运行

Windows 中双击：

```text
build_blog.bat
```

### 方法二：VS Code 快捷构建

在 VS Code 中按：

```text
Ctrl + Shift + B
```

选择或直接运行：

```text
Build Markdown Blog
```

### 方法三：终端命令

```bash
python build_blog.py
```

构建成功后会生成：

```text
assets/js/blog-posts.js
```

不要手工修改这个生成文件。它会根据 `posts/*.md` 自动重建，并让博客按日期和年份归档。

## 预览网站

推荐安装 VS Code 扩展：

```text
Live Server
```

然后右键 `index.html`，选择：

```text
Open with Live Server
```

修改 Markdown 后：

1. 保存 `.md` 文件；
2. 按 `Ctrl + Shift + B` 重新构建；
3. Live Server 通常会自动刷新，必要时手动刷新浏览器。

也可以在网站文件夹中运行：

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## Markdown 支持

当前网页支持：

- 一级至六级标题
- 粗体、斜体、删除线
- 有序列表和无序列表
- 引用块
- 行内代码和代码块
- Markdown 链接
- Markdown 图片
- 表格
- 分隔线
- 行内 LaTeX 公式 `$...$`
- 独立 LaTeX 公式 `$$...$$`

公式使用 MathJax 渲染。首次打开含公式的文章时需要网络连接；其余博客内容不依赖外部库。

## 插入图片

把图片放在：

```text
assets/images/
```

Markdown 中写：

```markdown
![Buck converter structure](assets/images/buck-converter.png)
```

路径是相对于网站根目录，而不是相对于 `posts` 文件夹。

## 发布

完成构建后，将整个文件夹上传到静态托管平台即可，例如：

- GitHub Pages
- Netlify
- Cloudflare Pages
- Vercel
- 普通 Web 服务器

发布前必须确保已经运行过一次 `build_blog.py`，并把生成的 `assets/js/blog-posts.js` 一起上传。

## GitHub Pages 自动发布

本仓库已经包含：

```text
.github/workflows/deploy.yml
```

第一次上传全部文件后，在 GitHub 仓库中进入：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

以后只需在 `posts/` 中新增或修改 Markdown 文件并提交。工作流会自动运行 `build_blog.py`，然后发布网站。
