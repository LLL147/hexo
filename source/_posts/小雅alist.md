---
title: 小雅alist
swiper_index: 10
top_group_index: 10
background: '#fff'
date: 2025-01-04 21:02:31
updated:
tags:
categories:
keywords:
description:
top:
top_img: https://xn--wcso9ov62a1tx.luyao.us.kg/1737122213971.svg
comments:
cover:
toc:
toc_number:
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink: 
aside:
ai:
---

<!-- div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
	<iframe
		src="//player.bilibili.com/player.html?aid=777262777&bvid=BV1E14y1g7tG&cid=951767237&page=1&high_quality=1"
		scrolling="no"
		border="0"
		frameborder="no"
		framespacing="0"
		allowfullscreen="true"
		style="position: absolute; width: 100%; height: 100%; Left: 0; top: 0;" >
	</iframe>
</div!--> 



<div class="video-container">
<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=919378706&bvid=BV1ku4y137JL&cid=1357482972&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
</div>

<style>
.video-container {
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio (height/width = 9/16 * 100%) */
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>


# 小雅ALIST
# [官方预览](https://alist.xiaoya.pro/)
安装命令：

 {% note warning simple %} 注意 
 整合安装脚本，内置所有相关软件的安装。{% endnote %}

# 使用方法
**常用（主要）地址**

```shell
bash -c "$(curl --insecure -fsSL https://ddsrem.com/xiaoya_install.sh)"
```

**备用地址**

```shell
bash <(curl --insecure -fsSL https://ddsrem.com/xiaoya/all_in_one.sh)
```

```shell
bash <(curl --insecure -fsSL https://fastly.jsdelivr.net/gh/DDS-Derek/xiaoya-alist@latest/all_in_one.sh)
```

```shell
bash <(curl --insecure -fsSL https://raw.githubusercontent.com/DDS-Derek/xiaoya-alist/master/all_in_one.sh)
```

```shell
bash -c "$(curl --insecure -fsSL https://fastly.jsdelivr.net/gh/DDS-Derek/xiaoya-alist@latest/main.sh)"
```

```shell
bash -c "$(curl --insecure -fsSL https://raw.githubusercontent.com/DDS-Derek/xiaoya-alist/master/main.sh)"
```
# 官方使用方法
官方安装指令
```shell
一键安装和更新容器，标准模式，打开端口 5678

bash -c "$(curl http://docker.xiaoya.pro/update_new.sh)"

一键安装和更新容器，host模式（推荐，软路由和NAS上更少网络故障，打开端口 5678）

bash -c "$(curl http://docker.xiaoya.pro/update_new.sh)" -s host

webdav 账号密码

用户: guest 密码: guest_Api789

重启就会自动更新数据库及搜索索引文件

docker restart xiaoya
```
[官方数据](https://github.com/xiaoyaliu00/data)

[官方仓库](https://github.com/xiaoyaliu00)

[安装命令博客](https://blog.ddsrem.com/)

[安装命令负责人](https://github.com/DDS-Derek)

[安装命令地址](https://github.com/DDS-Derek/xiaoya-alist)

[官方使用教程](https://xiaoyaliu.notion.site/xiaoya-docker-69404af849504fa5bcf9f2dd5ecaa75f)

不会上网查，看文档实在不会在问

小雅官方[Telegram](https://t.me/xiaoyaliu00)交流群

自行下载docker来使用，网站的阿里分享资源不提供在线播放，如果没有docker环境，或者不愿意折腾的，可以联系我 tg: t.me/liuxiaoya00 邮箱: xiaoyaliu00@gmail.com 代建托管，18元/月

小雅全家桶安装脚本（支持AI老G版小雅Alist安装，Jellyfin安装，快速Emby安装）:
    
```shell
bash <(curl -sSLf https://xy.ggbond.org/xy/xy_install.sh)
```

[玩客云刷casaos小雅emby全家桶](https://b23.tv/KTIHxyT):
    
```shell
bash <(curl -sSLf https://xy.ggbond.org/xy/wky_xy_emby_ailg.sh)
```
## 通用兼容性测试报告

{% note warning simple %} 注意 
 ✅代表测试通过且兼容；❌代表不兼容；🚧代表未经过充分测试兼容性不确定！{% endnote %}


|             软件名称             | x86-64  \| amd64 | arm64 \| arm64v8 | armhf \| armv7 |
| :------------------------------: | :--------------: | :---------------: | :-------------: |
|          小雅Alist           |        ✅         |         ✅         |        ✅        |
|        小雅Emby全家桶        |        ✅         |         ✅         |        ❌        |
|      小雅Jellyfin全家桶      |        ✅         |         ✅         |        ❌        |
|   小雅助手（xiaoyahelper）   |        ✅         |         ✅         |        ✅        |
|       小雅Alist-TVBox        |        ✅         |         ✅         |        ❌        |
|           Onelist            |        ✅         |         ✅         |        ✅        |
| 小雅元数据爬虫（xiaoya-emd） |        ✅         |         ✅         |        ✅        |
| 小雅Cron容器（xiaoya-cron）  |        ✅         |         ✅         |        ✅        |
| 小雅代理容器（xiaoya-proxy）  |        ✅         |         ✅         |        ✅        |
| 115清理助手（xiaoya-115cleaner）  |        ✅         |         ✅         |        ✅        |
| xiaoya-glue（官方 python） |        ✅         |         ✅         |        ❌        |
| xiaoya-glue（官方 latest） |        ✅         |         ✅         |        ❌        |
| xiaoya-glue（DDSRem python） |        ✅         |         ✅         |        ❌        |
| xiaoya-glue（DDSRem aliyuntvtoken_connector） |        ✅         |         ✅         |        ❌        |

|    系统名称     | all_in_one.sh | emby_config_editor.sh | xiaoya_notify.sh |
| :-------------: | :-----: | :-------------------: | :-------------: |
|   CentOS 7.9    |    ✅    |           ✅           | ✅ |
|   CentOS 8.4    |    ✅    |           ✅           | ✅ |
| CentOS 8 Stream |    ✅    |           ✅           | ✅ |
| CentOS 9 Stream |    ✅    |           ✅           | ✅ |
|   Debian 10.3   |    ✅    |           ✅           | ✅ |
|   Debian 11.3   |    ✅    |           ✅           | ✅ |
|   Debian 12.0   |    ✅    |           ✅           | ✅ |
|  Ubuntu 18.04   |    ✅    |           ✅           | ✅ |
|  Ubuntu 20.04   |    ✅    |           ✅           | ✅ |
|  Ubuntu 22.04   |    ✅    |           ✅           | ✅ |
|    Fedora 31    |    ✅    |           ✅           | ✅ |
|    Fedora 32    |    ✅    |           ✅           | ✅ |
|   AlmaLinux 9   |    ✅    |           ✅           | ✅ |
| RockyLinux 8.6  |    ✅    |           ✅           | ✅ |
|   Arch Linux    |    ✅    |           ✅           | ✅ |
|  openSUSE 15.4  |    ✅    |           ✅           | ✅ |
|     FreeBSD     |    ✅    |           ✅           | ✅ |
|     EulerOS     |    ✅    |           ✅           | ✅ |
|  Amazon Linux   |    ✅    |           ✅           | ✅ |
|     Alpine      |    ✅    |           ✅           | ✅ |
|      MacOS      |    ✅    |           🚧           | 🚧 |
|     UnRaid      |    ✅    |           ✅           | ✅ |
| OpenMediaVault  |    ✅    |           ✅           | ✅ |
|      QNAP（威联通）      |    ✅    |           ✅           | ✅ |
|     OpenWRT     |    ✅    |           ✅           | ✅ |
|    Synology（群晖）    |    ✅    |           ✅           | ✅ |
|  TrueNAS CORE   |    🚧    |           🚧           | 🚧 |
|  TrueNAS SCALE  |    🚧    |           🚧           | 🚧 |
|      UGOS（绿联云）      |    ✅    |           ✅           | ✅ |
|    UGOS Pro（绿联云 Pro）    |    ✅    |           ✅           | ✅ |
|   LibreELEC     |    ❌    |           ❌           | ❌ |
|  Windows WSL Docker  |    ❌    |           ❌           | ❌ |
| ZSpace（极空间） | 🚧 | 🚧 | 🚧 |
| fnOS (飞牛私有云) | ✅ | ✅ | ✅ |
    
小雅alist配置令牌

# 工具
|科学工具 | 下载地址 |
|--------|---------|
|v2rayN| https://github.com/2dust/v2rayN/releases|
|clash-verge|https://github.com/Clash-Verge-rev/clash-verge-rev/releases|
|GUI.for.SingBox |https://github.com/GUI-for-Cores/GUI.for.SingBox|
|hiddify| https://github.com/hiddify/hiddify-app/releases|
|mihomo-party|https://github.com/mihomo-party-org/mihomo-party|
|FlClash|https://github.com/chen08209/FlClash/releases|
# 机场

| 名称 | 链接 |
|--------|---------|
|M2网络 |           https://m2net.pw/#/dashboard/store |            
一分机场 |         https://xn--4gqx1hgtfdmt.com/#/profile |
星雨机场 |          https://xyjc.xyz/#/profile |                                     
ECY Cloud  |      https://owo.ecycloud.com/user/shop |             
雨薪云   |         https://mkl.cnmsbb.cn/#/node |
闪电⚡ |           https://shandianpro.com/#/login  |                            
山水云  |           https://sy.wgkzg.com/#/login |
idcn   |             https://idcn.link/console |
马铃薯  |           https://cn.mlshu.com/#/plan |
影视云机场|          https://ysjc.us.kg/#/login |
漏网之鱼 |          https://ch.louwangzhiyu.xyz/#/dashboard|

## 操作方法

**普通功能**

```shell
———————————————————————————————————————安装———————————————————————————————————————
安装 小雅Alist -> 1 1
安装 小雅Alist-TVBox -> 5 1
安装/更新 小雅助手（xiaoyahelper）-> 4 1
安装 115清理助手 -> 6 1
安装 Onelist -> 8 3 1
安装 Portainer -> 8 1 1
安装 Emby全家桶（一键） -> 2 1
安装 Jellyfin全家桶（一键） -> 3 1
安装 Resilio-Sync（单独） -> 2 5 1
安装 Auto_Symlink -> 8 2 1
安装 CasaOS -> 8 7 1
安装 小雅元数据定时爬虫 -> 2 9 1
安装 Xiaoya Proxy -> 8 4 1
安装 Xiaoya aliyuntvtoken_connector -> 8 5 1
——————————————————————————————Emby手动全家桶配置————————————————————————————————————
单独 下载并解压 全部元数据 -> 2 2 1
单独 解压 全部元数据 -> 2 2 2
单独 下载 all.mp4 -> 2 2 3
单独 解压 all.mp4 -> 2 2 4
解压 all.mp4 的指定元数据目录【非全部解压】-> 2 2 5
单独 下载 config.mp4 -> 2 2 6
单独 解压 config.mp4 -> 2 2 7
单独 下载 pikpak.mp4 -> 2 2 8
单独 解压 pikpak.mp4 -> 2 2 9
单独 下载 115.mp4 -> 2 2 10
单独 解压 115.mp4 -> 2 2 11
解压 115.mp4 的指定元数据目录【非全部解压】-> 2 2 12
单独 下载并解压 config.new.mp4 -> 2 2 101
选择 下载器【aria2/wget】-> 2 2 13
单独 安装Emby（可选择版本，支持官方，amilys，lovechen）-> 2 3
立即 同步小雅Emby的config目录 -> 2 6
单独 创建/删除 同步定时更新任务 -> 2 7
图形化编辑 emby_config.txt -> 2 8
一键升级Emby容器（可选择镜像版本） -> 2 10
小雅爬虫 立刻爬取指定目录 -> 2 9 4
小雅爬虫 容器定时爬取目录单独配置 -> 2 9 5
小雅爬虫 清理爬虫进程锁 -> 2 9 6
小雅爬虫 重置爬虫数据库 -> 2 9 7
————————————————————————————Jellyfin手动全家桶配置——————————————————————————————————

注意：目前官方 Jellyfin 安装方案已经长久未维护！
如果您需要安装 小雅Jellyfin 全家桶，请使用 AI老G 的脚本安装，风险自担。
脚本命令：bash <(curl -sSLf https://xy.ggbond.org/xy/xy_install.sh)

单独 下载并解压 全部元数据 -> 3 2 1
单独 解压 全部元数据 -> 3 2 2
单独 下载 all_jf.mp4 -> 3 2 3
单独 解压 all_jf.mp4 -> 3 2 4
解压 all_jf.mp4 的指定元数据目录【非全部解压】-> 3 2 5
单独 下载 config_jf.mp4 -> 3 2 6
单独 解压 config_jf.mp4 -> 3 2 7
单独 下载 PikPak_jf.mp4 -> 3 2 8
单独 解压 PikPak_jf.mp4 -> 3 2 9
选择 下载器【aria2/wget】-> 3 2 10
单独 安装Jellyfin-> 3 3
———————————————————————————————————————更新———————————————————————————————————————
更新 小雅Alist-TVBox -> 5 2
更新 小雅Alist -> 1 2
更新 Resilio-Sync（单独） -> 2 5 2
更新 115清理助手 -> 6 2
更新 Onelist -> 8 3 2
更新 Portainer -> 8 1 2
更新 Auto_Symlink -> 8 2 2
更新 小雅元数据定时爬虫 -> 2 9 2
更新 Xiaoya Proxy -> 8 4 2
更新 Xiaoya aliyuntvtoken_connector -> 8 5 1
———————————————————————————————————————卸载———————————————————————————————————————
卸载 小雅Alist -> 1 3
卸载 Emby全家桶 -> 2 11
卸载 卸载Jellyfin全家桶 -> 3 4
卸载 Resilio-Sync（单独） -> 2 5 3
卸载 小雅助手（xiaoyahelper）-> 4 3
卸载 小雅Alist-TVBox -> 5 3
卸载 115清理助手 -> 6 3
卸载 Onelist -> 8 3 3
卸载 Portainer -> 8 1 3
卸载 Auto_Symlink -> 8 2 3
卸载 CasaOS -> 8 7 2
卸载 小雅元数据定时爬虫 -> 2 9 3
卸载 Xiaoya Proxy -> 8 4 3
卸载 Xiaoya aliyuntvtoken_connector -> 8 5 1
————————————————————————————————Docker Compose—————————————————————————————————————
安装 小雅及全家桶 -> 7 1
卸载 小雅及全家桶 -> 7 2
——————————————————————————————————————系统工具——————————————————————————————————————
查看系统磁盘挂载 -> 8 6
———————————————————————————————————————其他———————————————————————————————————————
一次性运行 小雅助手（xiaoyahelper）-> 4 2
创建/删除 定时同步更新数据（小雅alist启动时拉取的数据）-> 1 4
AI老G 安装脚本 -> 8 8
账号管理 -> 1 5
```

**高级功能**

```shell
Docker启动容器名称设置 -> 9 1
是否开启容器运行额外参数添加 -> 9 2
重置脚本配置 -> 9 3
开启/关闭 磁盘容量检测 -> 9 4
开启/关闭 小雅连通性检测 -> 9 5
Docker镜像源选择 -> 9 6
非可选网络模式容器默认网络模式 -> 9 7
```

 *作者：鹿耀*

