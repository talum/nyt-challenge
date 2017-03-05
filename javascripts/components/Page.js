function Page(data) {
  this.details = data.page.parameters
  this.contents = data.page.content
}

Page.prototype.render = function() {
  var pageHTMLStart = `<div class="site-layout">`
  var pageHTMLEnd = `</div>`
  var detailHTML = `<div class="heading heading--level-1">${this.details.title}</div><div>${this.details.description}</div>`
  var contentHTML = this.contents.map(function(sectionContent) {
    var section = new Section(sectionContent)
    return section.render()
  })
  return pageHTMLStart + detailHTML + contentHTML.join("") + pageHTMLEnd
}
