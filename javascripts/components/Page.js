function Page(data, state) {
  this.details = data.page.parameters
  this.contents = data.page.content
  this.state = state
  this.shouldMartianize = this.state.shouldMartianize
}

// Explicitly prototype-linking to NYTD in order to port over the martianize
// function
Page.prototype = Object.create(NYTD.prototype)

Page.prototype.render = function(state) {
  var pageHTMLStart = `<div class="site-layout">`
  var pageHTMLEnd = `</div>`
  var buttonText = "Toggle Language"
  var detailHTML = `
    <div class="heading heading--level-1">
      ${this.shouldMartianize ? this.martianize(this.details.title) : this.details.title}
    </div>
    <div class="heading heading--level-2">
      ${this.shouldMartianize ? this.martianize(this.details.description) : this.details.description}
    </div>
    <button class="button button--color-black util--margin-lm" onclick="NYTD.toggleLanguage()">
      ${this.shouldMartianize ? this.martianize(buttonText) : buttonText}
    </button>`
  var self = this
  var contentHTML = this.contents.map(function(sectionContent) {
    var section = new Section(sectionContent, self.state)
    return section.render()
  })
  return pageHTMLStart + detailHTML + contentHTML.join("") + pageHTMLEnd
}
