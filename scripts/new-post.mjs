import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [title, requestedSlug] = process.argv.slice(2);

if (!title) {
  console.error('用法: npm run new -- "文章标题" "optional-slug"');
  process.exit(1);
}

const pad = (value) => String(value).padStart(2, '0');
const now = new Date();
const year = now.getFullYear();
const month = pad(now.getMonth() + 1);
const day = pad(now.getDate());
const fallbackSlug = title
  .trim()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\p{Letter}\p{Number}-]+/gu, '')
  .replace(/-+/g, '-');
const slug = (requestedSlug || fallbackSlug || 'untitled').replace(/^\/+|\/+$/g, '');
const filename = `${year}-${month}-${day}-${slug}.md`;
const targetDir = path.resolve('src/content/posts');
const target = path.join(targetDir, filename);
const body = `---
title: "${title.replaceAll('"', '\\"')}"
description: ""
publishedAt: ${year}-${month}-${day}
path: ${year}/${month}/${day}/${slug}
category: 随笔
tags: []
draft: true
---

从这里开始写正文。
`;

await mkdir(targetDir, { recursive: true });
await writeFile(target, body, { flag: 'wx' });
console.log(`已创建 ${path.relative(process.cwd(), target)}`);
console.log('写完后将 draft 改为 false，再运行 npm run build。');
