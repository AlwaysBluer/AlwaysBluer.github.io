---
title: Hexo搭建个人博客
description: 本文介绍了如何使用 Hexo 在 GitHub 上搭建个人博客。
publishedAt: 2024-01-19
path: 2024/01/19/Build-Blog-Site-with-Hexo
category: Hexo
tags:
  - Configuration
  - pictures bed
draft: false
---

## **什么是hexo**

> Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 <a href="http://daringfireball.net/projects/markdown/" target="_blank" rel="noopener">Markdown</a>（或其他标记语言）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

简单来说，hexo是一个规范化的博客框架，应用hexo，博客作者只需要编写博客内容，并可以自由选择UI风格。部署好站点配置文件后，可通过几行简单命令轻松将内容更新到个人网站或者github上。

## hexo的常用命令

### init

``` bash
$ hexo init [folder]                                                                                       
```

本命令相当于执行了以下几步，创建了博客网站的项目文件：

1.  Git clone hexo-starter 和 hexo-theme-landscape 主题到当前目录或指定目录。
2.  使用 Yarn 1、pnpm 或 npm 包管理器下载依赖（如有已安装多个，则列在前面的优先）。npm 默认随 Node.js 安装。

当执行成功后，进入 \[folder\]，会得到指定文件夹的目录如下：

``` bash
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes  
```

- `_config.yml`为站点配置文件，与之区分的是主题配置文件，详见后文； source目录下是本地编写的博客文件，默认为markdown格式；

- `scaffolds`是模板文件所在目录，可通过指定使用的模板创建对应的博客，博客文件和模板中内容一致，因此可以当有较多重复内容时，编写模板，创建时指定即可；一开始保存有`page` 、`draft`、 `post`三种基本模板；

- `source` 博客作者编写的文件所在目录；

- `themes` 博客主题所在目录，通过github下载的themes主题保存在此，通过选择不同主题即可选择不同的ui界面

- `node_modules` npm局部下载时，创建的目录，在项目根路径下使用npm下载的包均在此目录下

- `public` hexo根据source内容，站点配置文件，主题配置生成的网站文件，也是最终推送部署到github page上的目录

### new

``` bash
$ hexo new [layout] <title>
```

本命令用于创建页面，文章，草稿，`title`为创建的文件名称，后缀默认为md即markdown格式

`layout`为Hexo默认的布局格式，或者说文章类型

| layout | 路径 | 效果 |
|:--:|:--:|:--:|
| page | source/ | 创建新的网页页面，例如创建tags和categories时会在source/下创建对应文件夹和index.html |
| draft | source/\_drafts | 创建草稿，通过`hexo publish [layout] <title>`发布为post |
| post | source/\_posts | 创建一般博客页面，默认选项 |
| scaffold_type | source/ | 根据自定义模板创建博客 |

其他参数

| 参数              | 描述                                          |
|-------------------|-----------------------------------------------|
| `-p`, `--path`    | 自定义新文章的路径                            |
| `-r`, `--replace` | 如果存在同名文章，将其替换                    |
| `-s`, `--slug`    | 文章的 Slug，作为新文章的文件名和发布后的 URL |

### generate

``` bash
$ hexo generate
## or
$ hexo g        
```

该命令用于hexo生成静态文件即public目录下的内容

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th style="text-align: left;">选项</th>
<th style="text-align: left;">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;"><code>d</code>, <code>--deploy</code></td>
<td style="text-align: left;">文件生成后立即部署网站</td>
</tr>
<tr>
<td style="text-align: left;"><code>-w</code>, <code>--watch</code></td>
<td style="text-align: left;">监视文件变动</td>
</tr>
<tr>
<td style="text-align: left;"><code>-b</code>, <code>--bail</code></td>
<td style="text-align: left;">生成过程中如果发生任何未处理的异常则抛出异常</td>
</tr>
<tr>
<td style="text-align: left;"><code>-f</code>, <code>--force</code></td>
<td style="text-align: left;">强制重新生成文件 ，如果 <code>public</code> 目录存在，那么 <code>hexo g</code> 只会重新生成改动的文件。<br />
使用该参数的效果接近 <code>hexo clean &amp;&amp; hexo generate</code></td>
</tr>
</tbody>
</table>

### publish

``` bash
$ hexo publish [layout] <filename>
```

发表草稿。

### server

``` bash
$ hexo server
## or
$ hexo s        
```

启动本地服务器。默认情况下，访问网址为： <a href="http://localhost:4000/%E3%80%82" target="_blank" rel="noopener">http://localhost:4000/。</a>

| 选项             | 描述                           |
|:-----------------|:-------------------------------|
| `-p`, `--port`   | 重设端口                       |
| `-s`, `--static` | 只使用静态文件                 |
| `-l`, `--log`    | 启动日记记录，使用覆盖记录格式 |

### deploy

``` bash
$ hexo deploy
## or
$ hexo d    
```

部署网站到目标仓库

### clean

``` bash
$ hexo clean
```

清除缓存文件 (`db.json`) 和已生成的静态文件 (`public`)。

在某些情况（尤其是更换主题后），如果发现对站点的更改无论如何也不生效，需要运行该命令。

### 其他选项

**安全模式**

``` bash
$ hexo --safe
```

在安全模式下，不会加载插件和脚本。当您在安装新插件遭遇问题时，可以尝试以安全模式重新执行。

**调试模式**

``` bash
$ hexo --debug
```

在终端中显示调试信息并记录到 `debug.log`

**简洁模式**

``` bash
$ hexo --silent
```

隐藏终端信息。

## 站点部署与配置

### prerequisite：

- github 创建和账户同名的仓库，仓库名必须为`<username>.github.io`，必须为public
- 安装好Node.js
- 安装好Git

<a href="https://blog.csdn.net/Small_Yogurt/article/details/104968169" target="_blank" rel="noopener">Node.js安装教程</a>

### hexo使用流程

npm安装hexo

``` bash
$  npm install -g hexo-cli 
```

hexo初始化目录

``` bash
$  hexo init blog
```

发布测试文章并访问<a href="http://localhost:4000/%E6%9F%A5%E7%9C%8B%E7%BD%91%E7%AB%99%E6%95%88%E6%9E%9C" target="_blank" rel="noopener">http://localhost:4000/查看网站效果</a>

``` bash
$  hexo new test_my_site
$  hexo g
$  hexo s
```

编辑根目录下站点配置文件`_config.yml`，翻到最后修改为刚才创建的仓库地址

![pic1](https://pic1.zhimg.com/80/v2-279ac5149b577f04dc099defbb12eaa8_720w.webp)

安装Git部署插件

``` bash
npm install hexo-deployer-git --save
```

安装成功后输入

``` bash
hexo clean 
hexo g 
hexo d
```

这三条命令将刚才测试生成的静态文件删除，并生成新的文件，部署到github仓库页面，这时可以通过访问 `username.github.io`访问博客主页，部署后要等几分钟才会生效。

## NEXT主题配置

- 在终端窗口下，定位到 Hexo 站点目录下。使用 `Git` checkout 代码：

``` bash
$ cd your-hexo-site
$ git clone https://github.com/iissnan/hexo-theme-next themes/next
```

or

``` bash
$ npm install hexo-theme-next
```

- 当 克隆/下载 完成后，打开 **站点配置文件**， 找到 `theme` 字段，并将其值更改为 `next`以启用 NexT 主题

```
theme: next
```

- Next以及其他主题的配置都需要到配置目录下的`_config.yml`修改，或者可以通过在站点根目录下创建` _config.[theme_name].yml`，并将原`_config.yml`内容拷贝进该文件，使得hexo优先使用该配置文件内容，例如，使用npm下载的next配置文件拷贝到根目录下的_config.next.yml

```
cp /node_modules/hexo-theme-next/_config.yml _config.next.yml
```

- 需要将next配置文件中语言设置更改为`zh-CN`使得hexo能读取menu翻译文本

其他更详细的第三方设置可参考 <a href="https://theme-next.iissnan.com/getting-started.html" target="_blank" rel="noopener">Next中文文档</a>

## 图床

当博文中有图片时，若是少量图片，可以直接把图片存放在source文件夹中，但这显然不合理的，因为图片会占据大量的存储的空间，加载的时候相对缓慢 ，这时考虑把博文里的图片上传到某一网站，然后获得外部链接，使用Markdown语法，完成图片的插入，这种网站就被成为图床。

阿里云是目前中国最大的云服务提供商，其提供的OSS服务可以满足我们的需求。

PicGo能快速上传图片并获取图片URL，结合Typora图像设置可以使得本地图片插入到文档后立刻上传并保存到OSS bucket中

PicGo中，我们需要设置KeyId, KeySecret，Bucket等信息，这些都是在阿里云获得

![image-20240120005232538](https://alwaysbluer-picture-bed.oss-cn-shenzhen.aliyuncs.com/img/image-20240120005232538.png)

### OSS bucket创建

在注册好阿里云账号后，打开侧边栏，选择对象存储OSS，如下图：

![img](https://pic4.zhimg.com/80/v2-ef5d5dad46a425e56d3962b59c21789f_720w.webp)

点击创建bucket，编辑配置，如图，读写权限改成公共读，其余默认，计费方式默认是按量计费，适合访问量不大的个人播客主页使用

![img](https://pic1.zhimg.com/80/v2-c14c4bd3fac73482baf17ea0ef76fa3c_720w.webp)

### 用户权限管理

添加用户，推荐最好是单独创建一个用户来单独操作OSS（用户的定义就是需要访问云资源的人员或应用程序），这样给这个用户赋予单独的访问 OSS的权限，更加安全方便。

添加用户步骤为：点击自己头像，然后选择访问控制，如下图所示：

![img](https://pic2.zhimg.com/80/v2-9ccc8cf6cf89bb8b576072b628af1df5_720w.webp)

点击用户，选择新建用户，如下图所示

![img](https://pic2.zhimg.com/80/v2-5b89c296409eb60471e78d35ef0cb521_720w.webp)

之后进行用户配置，注意要勾选编程访问，控制台密码登录可以不选择，登录名称，显示名称自己设定。

确定后得到创建用户的信息，这里要记下AccessKey ID 和 AccessKeySecret，之后配置PICGO用到，因为这个界面关掉之后就不好找了，所以最好 记在记事本里，如下图所示：

![img](https://pic4.zhimg.com/80/v2-eaffad6786361f0bd708e81d053bacc7_720w.webp)

设置用户权限，使得用户只能访问OSS的服务。点击添加权限，如下图所示：

![img](https://pic2.zhimg.com/80/v2-5fdbd5cad58546b004bb68586aa67e11_720w.webp)

选择管理对象存储服务权限，点击确定，如下图所示：

![img](https://pic2.zhimg.com/80/v2-258655e47718594fd0c5c72083dfa2a5_720w.webp)

上述过程完成后，将信息填入PicGo的设置中，即可启用阿里云OSS服务，可以上传几张图片验证效果

### Typora配置PicGo

启动Typora，菜单栏中，点击 文件-\>偏好设置-\>图像，设置为如下

![image-20240120010528310](https://alwaysbluer-picture-bed.oss-cn-shenzhen.aliyuncs.com/img/image-20240120010528310.png)

这样博客编辑时，选择上传图像，URL会自动转化成OSS的URL。

------------------------------------------------------------------------

参考链接：

<a href="https://hexo.io/zh-cn/docs/setup" target="_blank" rel="noopener">hexo中文文档</a>

<a href="https://theme-next.iissnan.com/getting-started.html" target="_blank" rel="noopener">NexT中文文档</a>

<a href="https://juejin.cn/post/7154719695261106189" target="_blank" rel="noopener">Hexo图床搭建</a>

<a href="https://zhuanlan.zhihu.com/p/104152479" target="_blank" rel="noopener">阿里云 PicGo图床配置教程</a>
