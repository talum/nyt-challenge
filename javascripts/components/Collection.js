function Collection(collection) {
  this.collection = collection
}

Collection.prototype.render = function() {
  var collectionWrapperStart = "<div class='collection " + this.collection.renderStyle + "'>"
  var collectionWrapperEnd = "</div>"
  var self = this
  var articlesHTML = this.collection.assets.map(function(articleInfo) {
    var article = new Article(articleInfo, self.collection.renderStyle)
    return article.render()
  })
  return collectionWrapperStart + articlesHTML.join("") + collectionWrapperEnd
}
