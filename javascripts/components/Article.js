function Article(article) {
  this.byline = article.byline
  this.dateline = article.dateline
  this.desk = article.desk
  this.headline = article.headline
  this.images = article.images
  this.kicker = article.kicker
  this.summary = article.summary
  this.shouldMartianize = false
}

Article.prototype.render = function() {
  return `<article><div>${ this.shouldMartianize ? this.martianize(this.headline) : this.headline}</div></article>`
}

Article.prototype.martianize = function(phrase) {
  if (phrase === undefined) {
    return "undefined"
  } else {
    // Regex from http://stackoverflow.com/questions/24718348/how-to-parse-string-into-words-and-punctuation-marks-using-javascript
    // ASSUMPTION: Words with apostrophes and hyphens are a single word
    // ASSUMPTION: Initialisms are not a single word
    // ASSUMPTION: Numbers are not words
    var splitPhrase = phrase.match(/[\w-']+|[^\w]+/g)
    if (!!splitPhrase) {
        var martianizedPhrase = splitPhrase.map(function(word) {
          if (isNaN(word) && word.length > 3) {
            if (word.charAt(0) === word.charAt(0).toUpperCase()) {
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
