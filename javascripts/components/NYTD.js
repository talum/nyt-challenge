var NYTD = new Object()

NYTD.state = {
  shouldMartianize: false
}

NYTD.render_section_front = function(data) {
  this.data = data
  var page = new Page(data, this.state)
  var template = page.render()
  document.getElementById("root").innerHTML = template
}


NYTD.toggleLanguage = function() {
  var shouldMartianize = this.state.shouldMartianize
  this.state.shouldMartianize = !shouldMartianize
  var page = new Page(this.data, this.state)
  var template = page.render()
  document.getElementById("root").innerHTML = template
}
