function Section(section, state) {
  this.section = section
  this.state = state
}

Section.prototype = Object.create(NYTD.prototype)

Section.prototype.shouldShow = function() {
  // Assuming that I can selectively hide this content as well
  return (this.section.name != "SpanABTop" && this.section.name !="cColumn" && this.section.name != "LiveMobileResults")
}

Section.prototype.render = function() {
  if (this.shouldShow()) {
    var sectionWrapperStart = "<section><div class='section " + this.section.name + "'>"
    var sectionWrapperEnd = "</div></section>"
    var self = this
    var collectionsHTML = this.section.collections.map(function(collectionData) {
      var collection = new Collection(collectionData, self.state)
      return collection.render()
    })
    return sectionWrapperStart + collectionsHTML.join("") + sectionWrapperEnd
  }
}
