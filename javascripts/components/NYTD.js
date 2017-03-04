var NYTD = new Object()

NYTD.render_section_front = function(data) {
  var page = new Page(data)
  var template = page.render()
  document.getElementById("root").innerHTML = template
}


