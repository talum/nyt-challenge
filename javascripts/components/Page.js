function Page(data) {
  this.details = data.page.parameters
  this.contents = data.page.content
}

Page.prototype.render = function() {
  var detailHTML = `<div>${this.details.title}</div><div>${this.details.description}</div>`
  var contentHTML = this.contents.map(function(sectionContent) {
    var section = new Section(sectionContent)
    return section.render()
  })
  return detailHTML + contentHTML.join("")
}
