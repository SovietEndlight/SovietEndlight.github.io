var posts=["2025/11/20/hello-world/","2025/11/20/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };