function Article(article) {
  this.article = article
}

Article.prototype.render = function() {
  return `<article><div>${this.article.headline}</div></article>`
}
