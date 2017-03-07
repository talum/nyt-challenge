var NYTD = new Object()
NYTD.prototype = {}

NYTD.state = {
  shouldMartianize: false
}

NYTD.render_section_front = function(data) {
  this.data = data
  var page = new Page(data, this.state)
  var template = page.render()
  this.render(template)
}

NYTD.toggleLanguage = function() {
  var shouldMartianize = this.state.shouldMartianize
  this.state.shouldMartianize = !shouldMartianize
  var page = new Page(this.data, this.state)
  var template = page.render()
  this.render(template)
}

NYTD.render = function(template) {
  document.getElementById("root").innerHTML = template
}

NYTD.prototype.martianize = function(phrase) {
  if (phrase === undefined) {
    return "undefined"
  } else {
    // Regex from http://stackoverflow.com/questions/24718348/how-to-parse-string-into-words-and-punctuation-marks-using-javascript
    // ASSUMPTION: Words with apostrophes and hyphens are a single word
    // ASSUMPTION: Initialisms are not a single word
    // ASSUMPTION: Numbers are not words
    var splitPhrase = phrase.trim().match(/[\w-'’]+|[^\w]+/g)
    if (!!splitPhrase) {
        var martianizedPhrase = splitPhrase.map(function(word) {
          if (isNaN(word) && word.length > 3) {
            if (word === word.toUpperCase()) {
              return "BOINGA"
            } else if (word.charAt(0) === word.charAt(0).toUpperCase()) {
              return "Boinga"
            } else {
              return "boinga"
            }
          } else {
            return word
          }
        })
        return martianizedPhrase.join("")
      }
    }
}
