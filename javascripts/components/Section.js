function Section(section) {
  this.section = section
}

Section.prototype.shouldShow = function() {
  return (this.section.name != "SpanABTop" && this.section.name !="cColumn" && this.section.name != "LiveMobileResults")
}

Section.prototype.render = function() {
  if (this.shouldShow()) {
    var sectionWrapperStart = "<section><div class='section " + this.section.name + "'>"
    var sectionWrapperEnd = "</div></section>"
    var collectionsHTML = this.section.collections.map(function(collectionData) {
      var collection = new Collection(collectionData)
      return collection.render()
    })
    return sectionWrapperStart + collectionsHTML.join("") + sectionWrapperEnd
  }
}
