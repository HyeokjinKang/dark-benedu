const url = window.location.href;

const inject = css => {
  let link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", chrome.extension.getURL(css));
  document.getElementsByTagName("head")[0].appendChild(link);
}

if(url.includes("benedu.co.kr")) {
  if(url.includes("/StudentHome")) {
    inject("css/studentHome.css");
  }
}