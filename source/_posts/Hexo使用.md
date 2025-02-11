---
title: Hexo使用及安知鱼主题
top_img: https://xn--wcso9ov62a1tx.luyao.us.kg/1735696477420.jpg

---
欢迎来到[Hexo](https://hexo.io/)! 这是您的第一篇文章。查看 [文档](https://hexo.io/docs/) 以获取更多信息。如果你在使用 Hexo 时遇到任何问题，你可以在 [故障排除 ](https://hexo.io/docs/troubleshooting.html) 中找到答案，也可以在[GitHub](https://github.com/hexojs/hexo)上看到源码以及安装方法。
|作者|地址|
|-----------|-----------|
|安知鱼主题 | https://docs.anheyu.com|
|CM美化|https://vercel.blog.cmliussss.com/p/HexoBlogNo2 |
|CM安装|https://vercel.blog.cmliussss.com/p/HexoBlogNo1 |
|第三方|https://xuanyabulema.github.io/posts/Hexo-Posts-Links|
|Hexo|https://hexo.io/zh-cn|
|Markdown|https://markdown.com.cn|
|Markdown表格|https://blog.csdn.net/dream_summer/article/details/110822636|
|Markdown教程|https://m.imooc.com/wiki/markdownlesson-markdowncolor|
## 快速开始使用

### 创建新帖子

``` shell
 hexo new "My New Post"
 hexo new post -p diaries/test  #改变存放位置
 # 创建草稿的命令
hexo new draft -p diaries/test
# 新建草稿
hexo new draft b
# 发布草稿成为文章
hexo publish b
# 发布关于
hexo new page c

```

更多信息： [写作](https://hexo.io/docs/writing.html)

### 运行服务器

``` shell
 hexo server
```

详细信息：[服务器](https://hexo.io/docs/server.html)

### 运行服务器

``` shell
 hexo generate
```

详细信息：[生成](https://hexo.io/docs/generating.html)

### 部署到远程站点
### CMD窗口使用 '&&'
``` shell
 hexo deploy
```

详细信息：[部署](https://hexo.io/docs/one-command-deployment.html)

本地预览

``` shell
hexo cl; hexo s
# hexo 预览草稿的命令
hexo S --draft
```

推送更新上线

``` shell
hexo cl; hexo g; hexo d
```
``` shell
# Windows PowerShell、Git BASH终端
hexo clean ; hexo generate ; hexo deploy  
# 或者
# VSCODE终端
hexo cl; hexo g; hexo d
``` 

本地启动 hexo

``` shell

hexo cl ; hexo s
# 或者
# VSCODE终端
hexo cl; hexo s

hexo cl && hexo g && hexo s 
# 分离
hexo cl
hexo g
hexo s
# hexo 预览草稿的命令
hexo S --draft
```

`hexo clean`：删除之前生成的文件，可以用`hexo cl`缩写。
`hexo generate`：生成静态文章，可以用`hexo g`缩写
`hexo deploy`：部署文章，可以用`hexo d`缩写

#### 升级

``` shell
# 主题
npm update --save hexo-theme-anzhiyu
# hexo博客
npm install -g hexo-cli
# 确认 hexo 已经更新
hexo -v

# 方法2
# 使用淘宝源的 cnpm 替换 npm
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install -g cnpm                 # 升级 npm
cnpm cache clean -f                 # 清除 npm 缓存
===更新 hexo: 进入 blog 目录，执行如下命令=== 
# 更新 package.json 中的 hexo 及个插件版本
cnpm install -g npm-check           # 检查之前安装的插件，都有哪些是可以升级的 
cnpm install -g npm-upgrade         # 升级系统中的插件
npm-check
npm-upgrade

# 更新 hexo 及所有插件
cnpm update
# 确认 hexo 已经更新
hexo -v

# 方法3
# 以下指令均在Hexo目录下操作，先定位到Hexo目录
# 查看当前版本，判断是否需要升级
 hexo version
# 全局升级hexo-cli
 npm i hexo-cli -g
# 再次查看版本，看hexo-cli是否升级成功
 hexo version
# 安装npm-check，若已安装可以跳过
 npm install -g npm-check
# 检查系统插件是否需要升级
 npm-check
# 安装npm-upgrade，若已安装可以跳过
 npm install -g npm-upgrade
# 更新package.json
 npm-upgrade
# 更新全局插件
 npm update -g
# 更新系统插件
 npm update --save
# 再次查看版本，判断是否升级成功
hexo version
```


