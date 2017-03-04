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

var NYTD = new Object()
NYTD.render_section_front = function(data) {
  var template = ""
  template += this.renderPageDetails(data.page.parameters)
  template += this.renderContent(data.page.content)

  document.getElementById("root").innerHTML = template
}

NYTD.renderPageDetails = function(details) {
  return `<div>${details.title}</div><div>${details.description}</div>`
}

NYTD.renderContent = function(contents) {
  var contentHTML = contents.map(function(section) {
    return NYTD.renderSection(section)
  })
  return contentHTML.join("")
}

NYTD.renderSection = function(section) {
  var collectionsHTML = section.collections.map(function(collection) {
    return NYTD.renderCollection(collection)
  })
  return collectionsHTML.join("")
}

NYTD.renderCollection = function(collection) {
  var articlesHTML = collection.assets.map(function(article) {
    return NYTD.renderArticle(article)
  })
  return articlesHTML.join("")
}

NYTD.renderArticle = function(article) {
  return `<article><div>${article.headline}</div></article>`
}
