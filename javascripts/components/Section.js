function Section(section) {
  this.section = section
}

Section.prototype.render = function() {
  var collectionsHTML = this.section.collections.map(function(collectionData) {
    var collection = new Collection(collectionData)
    return collection.render()
  })
  return collectionsHTML.join("")
}
