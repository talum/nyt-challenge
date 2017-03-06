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

    var imageMarkup = `
      <img src="` + baseURL + image.content + `" /> 
      <div class="heading heading--credit">${this.shouldMartianize ? this.martianize(this.images[0].credit) : this.images[0].credit}</div>
    `
    return imageMarkup
  } else {
    return ""
  }

}

Article.prototype.shouldShow = function() {
  return (this.headline != "Only rank in summary collections" && this.headline != "undefined" && !!this.headline)
}

Article.prototype.render = function() {
  if (this.shouldShow()) {
    return (`<article class="article"><div class="article__inner">
        <div class="image-container">${ this.renderImage() }</div>
        ${ this.shouldShowProperty('desk', this.desk) }
        <h3 class="heading heading--level-3"><a href=${"'" + this.url + "'"}}>${ this.shouldMartianize ? this.martianize(this.headline) : this.headline}</a></h3>
        <div class="heading heading--byline">${ this.shouldMartianize ? this.martianize(this.byline) : this.byline }</div>
        <p>${ this.shouldMartianize ? this.martianize(this.summary) : this.summary}</p>
        ${ this.shouldShowProperty('kicker', this.kicker) }
      </div>
      </article>`
    )
  }
}

