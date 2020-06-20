const url = window.location.href;

const inject = path => {
  let link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", chrome.extension.getURL(path));
  document.getElementsByTagName("head")[0].appendChild(link);
}

if(url.includes("benedu.co.kr")) {
  inject("css/global.css");
  if(url.includes("/StudentHome")) {
    inject("css/studentHome.css");
  }
}