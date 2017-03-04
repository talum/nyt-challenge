function Collection(collection) {
  this.collection = collection
}

Collection.prototype.render = function() {
  var articlesHTML = this.collection.assets.map(function(articleInfo) {
    var article = new Article(articleInfo)
    return article.render()
  })
  return articlesHTML.join("")
}
