# nyt-challenge / code assignment

## Set Up 

Open up the `index.html` file in a browser.

## Approach

Because the instructions for this assignment stressed simplicity, I opted to
complete the challenge solely with vanilla JavaScript, though some parts
rely heavily on ES6. Although I didn't use Babel in this challenge, I would use it
in a production environment in conjunction with webpack to transpile the code so 
that older browsers (especially IE) wouldn't have compatibility issues.

I used a React-like approach to render components on the DOM, where
top-level components render smaller components or collections of components.

In addition, I used Sass and did a hybrid approach of mixing in CSS objects
with location-based styling. My reasoning for violating the principles of
OOCSS was that the style of elements did actually depend on location, so it
was difficult to separate out objects.

## Notes

In the assignment, I made several assumptions, many of which are documented
in the code. 

At a high level, though, I made the assumption that I could selectively hide
certain types of content, including ads and videos. I also made the
assumption that going forward, the API would consistently return the same
number and type of elements for each section.

## Tests

You'll find a small number of lightweight tests for my "martianize" function
in the `javascripts/spec` directory. Opening the `spec/index_test.html` in
the browser should run the tests and output the result. The idea here was to
provide a number of test cases, without having to import a library or
testing framework.
