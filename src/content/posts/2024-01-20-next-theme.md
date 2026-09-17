---
title: Next主题定制优化
description: Hexo 个人博客基于 NexT 主题的基本配置和定制优化。
publishedAt: 2024-01-20
path: 2024/01/20/Next主题定制优化
category: Hexo
tags:
  - Configuration
  - Next
draft: false
---

博客内容主要参考 <a href="https://choubin.site/2019/12/30/CustomBlogTheme/" target="_blank" rel="noopener">Next主题定制优化</a>

## 站点优化

### 生成标签、分类、归档页面

主题首页的默认页面中是没有标签、分类、归档页面的，需要手动生成一下。先在博客根目录下打开`git-bash`或终端，然后键入以下命令

```
hexo new page tags && hexo new page categories && hexo new page archives
```

然后打开新增的`source/tags/index.md`，修改如下

``` markdown
  title: 标签
  date: 2018-10-19 22:57:00
+ type: tags
```

同理再修改另外两个新增文件夹下的`index.md`。

最后修改主题配置文件的`menu`字段

``` markdown
menu:
  home: / || home
  about: /about/ || user
+ tags: /tags/ || tags
+ categories: /categories/ || th
+ archives: /archives/ || archive
```

### 文章摘要显示

默认的主题配置里，首页会显示每一篇文章的全文，如果想只显示文章摘要，对主题配置文件做如下更改

``` markdown
excerpt_description: true
```

用户可以在文章中通过`<!-- more -->`标记来精确划分摘要信息，标记之前的段落将作为摘要显示在首页。

如果在文章的 Front-Matter 中有非空的 `description` 字段，则该字段的内容会被作为摘要显示在首页。

### 修改网站 Favicon

Favicon 即浏览器标签左侧的图标。下载自己喜欢的图标置于 `themes\next\source\images\` 目录下，命名方式参考主题配置文件中的 `favicon` 字段。 这里介绍一个<a href="https://tool.lu/favicon/" target="_blank" rel="noopener">在线制作 <code>favicon</code>的网站</a>，可以上传喜欢的图片制作成`favicon`。

```
small: /images/favicon-16x16-next.png  # 小图标
medium: /images/favicon-32x32-next.png  # 大图标
apple_touch_icon: /images/apple-touch-icon-next.png  # 苹果图标
safari_pinned_tab: /images/logo.svg  # safari浏览器标签页图标
 
```

### 添加版权协议

在主题配置文件中开启相关字段

```
creative_commons: by-nc-sa
```

## 主题优化

### 取消文章目录的数字编号

主题配置文件中修改

``` markdown
toc:
  number: false  # 关闭目录中的数字编号
```

### 修改文章 meta 信息

默认主题下， 标题下方会显示文章的创建时间、文章的修改时间、文章分类信息等元数据，用户可以在主题配置文件中自定义设置需要显示的 meta 元信息：

```
post_meta:
  item_text: true  # 显示文字说明
  created_at: true  # 显示文章创建时间
  updated_at:
    enabled: false  # 隐藏文章修改时间
    another_day: true  # 只有当修改时间和创建时间不是同一天的时候才显示
  categories: false  # 隐藏分类信息
```

### 页面加载进度条

当网络不好的时候可能会在打开站点或跳转文章时出现短暂的白屏，此时如果能有加载进度提示将会提高用户操作体验。

在NexT根目录下执行以下命令安装相关依赖：

```
$ git clone https://github.com/theme-next/theme-next-pace themes/next/source/lib/pace
```

在主题配置文件中设置 `pace: true`。
