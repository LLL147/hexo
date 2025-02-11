var posts=["2025/01/16/alist/安装/一键脚本/","2025/01/16/alist/主页/","2025/01/12/alist/安装/alist安装Windows/","2025/01/12/alist/安装/alist安卓/","2025/01/12/alist/常见问题/为什么/","2025/01/05/Hexo使用/","2025/01/04/小雅alist/","2025/01/04/alist/安装/手动安装/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };