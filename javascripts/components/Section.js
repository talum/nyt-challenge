function Section(section) {
  this.section = section
}

Section.prototype.render = function() {
  var sectionWrapperStart = "<section><div class='section " + this.section.name + "'>"
  var sectionWrapperEnd = "</div></section>"
  var collectionsHTML = this.section.collections.map(function(collectionData) {
    var collection = new Collection(collectionData)
    return collection.render()
  })
  return sectionWrapperStart + collectionsHTML.join("") + sectionWrapperEnd
}
