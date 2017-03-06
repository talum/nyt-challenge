function Article(article, renderStyle, state) {
  this.byline = article.byline
  this.url = article.url
  this.dateline = article.dateline
  this.desk = article.desk
  this.headline = article.headline
  this.images = article.images
  this.kicker = article.kicker
  this.summary = article.summary
  this.type = article.type
  this.renderStyle = renderStyle
  this.shouldMartianize = state.shouldMartianize
}

Article.prototype = Object.create(NYTD.prototype)

Article.prototype.shouldShowProperty = function(property, string) {
  // Returns the property or the martianized version if it exists.
  if (!!string) {
    if (this.shouldMartianize) {
      return '<div class="heading heading--' + property + '">' + this.martianize(string) + '</div>'
    } else {
      return '<div class="heading heading--' + property + '">' + string + '</div>'
    }
  } else {
    return ""
  }
}

Article.prototype.shouldHideImage = function() {
  // ASSUMPTION: That I am allowed to selectively hide elements 
  var hiddenElements = ["Headline Only", "InteractiveGraphics", "WideThumb", "SingleAd"]
  return hiddenElements.includes(this.renderStyle)
}

Article.prototype.renderImage = function() {
  // This function finds the corresponding image type based on the content
  // type. I am assuming that all content of the same type will have these
  // image types available.
  var imageLookup = {
    "Article": "hpMedium",
    "BlogPost": "thumb",
    "Video": "thumbStandard",
    "InteractiveGraphics": "thumb"
  }

  if (!this.shouldHideImage() && !!this.images && !!this.images[0]) {
    var baseURL = "http://www.nytimes.com/"
    var imageType = imageLookup[this.type]
    // For the purposes of this exercise, I decided to use only the first
    // image if multiple images were provided.
    var image = this.images[0].types.find(function(image) { return image.type.match(imageType) }) 

    var imageMarkup = `
      <img src=${"'" + baseURL + image.content + "'"}/> 
      <div class="heading heading--credit">
        ${this.shouldMartianize ? this.martianize(this.images[0].credit) : this.images[0].credit}
      </div>`
    return imageMarkup
  } else {
    return ""
  }
}

Article.prototype.shouldShow = function() {
  // Conditionally hide any content that shouldn't be shown
  return (this.headline != "Only rank in summary collections" && this.headline != "undefined" && !!this.headline)
}

Article.prototype.render = function() {
  if (this.shouldShow()) {
    return (
      `<article class="article">
        <div class="article__inner">
          <div class="image-container">${ this.renderImage() }</div>
          ${ this.shouldShowProperty('desk', this.desk) }
          <h3 class="heading heading--level-3"><a href=${"'" + this.url + "'"}}>${ this.shouldMartianize ? this.martianize(this.headline) : this.headline}</a></h3>
          ${ this.shouldShowProperty('byline', this.byline) }
          <p>${ this.shouldMartianize ? this.martianize(this.summary) : this.summary}</p>
          ${ this.shouldShowProperty('kicker', this.kicker) }
        </div>
      </article>`
    )
  }
}

