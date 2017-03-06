function Collection(collection, state) {
  this.collection = collection
  this.state = state
}

Collection.prototype = Object.create(NYTD.prototype)

Collection.prototype.shouldShow = function() {
  return (this.collection.assets.length > 0)
}

Collection.prototype.render = function() {
  if (this.shouldShow()) {
    var collectionWrapperStart = "<div class='collection " + this.collection.renderStyle + "'>"
    var collectionWrapperEnd = "</div>"
    var self = this
    var articlesHTML = this.collection.assets.map(function(articleInfo) {
      var article = new Article(articleInfo, self.collection.renderStyle, self.state)
      return article.render()
    })
    return collectionWrapperStart + articlesHTML.join("") + collectionWrapperEnd
  }
}
