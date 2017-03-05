function Page(data, state) {
  this.details = data.page.parameters
  this.contents = data.page.content
  this.state = state
}

Page.prototype.render = function(state) {
  var pageHTMLStart = `<div class="site-layout">`
  var pageHTMLEnd = `</div>`
  var detailHTML = `<div class="heading heading--level-1">${this.details.title}</div>
    <div class="heading heading--level-2">${this.details.description}</div>
    <button class="button button--color-black util--margin-lm" onclick="NYTD.toggleLanguage()">Toggle Language</button>`
  var self = this
  var contentHTML = this.contents.map(function(sectionContent) {
    var section = new Section(sectionContent, self.state)
    return section.render()
  })
  return pageHTMLStart + detailHTML + contentHTML.join("") + pageHTMLEnd
}
