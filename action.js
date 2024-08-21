function showName() {
    var url = document.getElementById("url").value;
    var new_url = 'https://jx.xmflv.cc/?url=' + url;
    console.log("新的链接是：" + new_url);
    window.open(new_url);
  }