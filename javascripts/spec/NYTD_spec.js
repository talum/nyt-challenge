// test cases
function appendResult(test, result) {
  var root = document.getElementById("root")
  var div = document.createElement("div")
  div.innerText = test + ", " + result 
  root.appendChild(div)
}

function testWhitespace() {
  var description = "it handles phrases with extra white space"
  var test = "hello there   "
  var expectation = NYTD.prototype.martianize(test) === "boinga boinga"
  appendResult(description, expectation)
}

function testApostrophes() {
  var description = "it handles apostrophes"
  var test = "the katz's deli"
  var expectation = NYTD.prototype.martianize(test) === "the boinga boinga"
  appendResult(description, expectation)
}

function testAllCaps() {
  var description = "it handles all caps"
  var test = "a HELLO HELLO HELLO"
  var expectation = NYTD.prototype.martianize(test) === "a BOINGA BOINGA BOINGA"
  appendResult(description, expectation)
}

function testSomeCaps() {
  var description = "it handles some caps"
  var test = "The ice cream is Delicious"
  var expectation = NYTD.prototype.martianize(test) === "The ice boinga is Boinga"
  appendResult(description, expectation)
}

function testPunctuation() {
  var description = "it handles punctuation"
  var test = "Around the block, that's where the rainbow is."
  var expectation = NYTD.prototype.martianize(test) === "Boinga the boinga, boinga boinga the boinga is."
  appendResult(description, expectation)
}

function testSpecialApostrophes() {
  var description = "it handles the other type of apostrophe"
  var test = "Long Ago, a Pilot Landed on an Uptown Street. That’s Where the Bar Was."
  var expectation = NYTD.prototype.martianize(test) === "Boinga Ago, a Boinga Boinga on an Boinga Boinga. Boinga Boinga the Bar Was."
  appendResult(description, expectation)  
}

function testNumbers() {
  var description = "it handles numbers"
  var test = "Harry Potter, 27"
  var expectation = NYTD.prototype.martianize(test) === "Boinga Boinga, 27"
  appendResult(description, expectation)
}

function testUndefined() {
  var description = "it handles undefined"
  var test = undefined
  var expectation = NYTD.prototype.martianize(test) === "undefined"
  appendResult(description, expectation)
}

testWhitespace()
testApostrophes()
testAllCaps()
testSomeCaps()
testPunctuation()
testSpecialApostrophes()
testNumbers()
testUndefined()
