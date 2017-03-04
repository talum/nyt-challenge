"use strict"

document.addEventListener("DOMContentLoaded", function() {
  jsonp("http://np-ec2-nytimes-com.s3.amazonaws.com/dev/test/nyregion.js")
})

function jsonp(url) {
  var head = document.head
  var script = document.createElement("script")
  script.setAttribute("src", url)
  head.appendChild(script)
  head.removeChild(script)
}

