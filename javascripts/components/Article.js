function Article(article, renderStyle) {
  this.byline = article.byline
  this.dateline = article.dateline
  this.desk = article.desk
  this.headline = article.headline
  this.images = article.images
  this.kicker = article.kicker
  this.summary = article.summary
  this.type = article.type
  this.renderStyle = renderStyle
  this.shouldMartianize = false
}

Article.prototype.shouldShowDesk = function() {
  if (!!this.desk) {
    if (this.shouldMartianize) {
      return this.martianize(this.desk)
    } else {
      return this.desk
    }
  } else {
    return ""
  }
}

Article.prototype.renderImage = function() {
  var imageLookup = {
    "Article": "hpMedium",
    "BlogPost": "thumb",
    "Video": "thumbStandard",
    "InteractiveGraphics": "thumb"
  }

  if (this.renderStyle != "HeadlineOnly" && this.renderStyle != "InteractiveGraphics" && this.renderStyle != "WideThumb" && this.renderStyle != "SingleAd" && !!this.images && !!this.images[0]) {
    //display select images based on class and show/hide depending on viewport?
    var baseURL = "http://www.nytimes.com/"
    // Pre-defined image types
    // ASSUMPTION: All articles with images woill have all sizes of images
    // available
    var imageType = imageLookup[this.type]
    var image = this.images[0].types.find(function(image) { return image.type.match(imageType) }) 
    console.log(image + " " + this.headline)
    var imageMarkup = `
      <img src="` + baseURL + image.content + `" /> 
      <div class="credit">${this.images.credit}</div>
      <caption>${this.images[0].caption}</caption>
    `
    return imageMarkup
  } else {
    return ""
  }

}

Article.prototype.render = function() {
  return (`<article class="article">
      <div class="">${ this.renderImage() }</div>
      <div class="">${ this.shouldShowDesk() }</div>
      <h3 class="heading">${ this.shouldMartianize ? this.martianize(this.headline) : this.headline}</h3>
      <div class="">${ this.shouldMartianize ? this.martianize(this.byline) : this.byline }</div>
      <div class="">${ this.shouldMartianize ? this.martianize(this.dateline) : this.dateline }</div>
      <div class="">${ this.shouldMartianize ? this.martianize(this.summary) : this.summary}</div>
      <div class="">${ this.shouldMartianize ? this.martianize(this.kicker) : this.kicker }</div>
    </article>`
  )
}

Article.prototype.martianize = function(phrase) {
  if (phrase === undefined) {
    return "undefined"
  } else {
    // Regex from http://stackoverflow.com/questions/24718348/how-to-parse-string-into-words-and-punctuation-marks-using-javascript
    // ASSUMPTION: Words with apostrophes and hyphens are a single word
    // ASSUMPTION: Initialisms are not a single word
    // ASSUMPTION: Numbers are not words
    // TODO: Account for all caps (bylines)
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
