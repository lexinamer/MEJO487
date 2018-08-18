# Day 2	 | CSS Layouts

**Slideshow: http://bit.ly/487class2**

## CSS Layout Types
- Floats
- Flexbox
- Grid Systems
- CSS Grid

## Floats
- Don't forget to add overflow to parent or else it will collapse
- Add `clear:both` to children
- Good for single elements

## CSS Grid
- Can be unsupported on older browsers
- Honestly, I've never used CSS Grid in my practice because I often need old versions of IE. I also rely a lot on Flexbox.
- Introduce Caniuse.com

## Grid Systems
- Bootstrap review
- Skeleton is another great one (we will discuss)

## Skeleton
- Three parts
  1. Container
  2. Row
  3. Columns

- Your columns must equal to 12
- Column syntax is `one column` or `six columns`
- Offset columns `offset-by-two`
- Skeleton uses a mobile first approach so it uses min width instead of max width

## Flexbox
- Parent properties
- Children properties
- Note that children means direct items
- Flexbox is good for single layers of elements but you can always nest if needed

## Media queries
- Does anyone need a refresher?
- Review max v min width

## Project 1: CSS Bootcamp
- Go through basics
- Promise this is a worthy albeit sometimes painful exercise. Its the best way to get really good really fast
- We will review the submission policy and practice it once we get to terminal and github
- Your grade will also depend on how clean your code is. If I can't read your code, I will dock points
- Tips and tricks
  - No need to include the table or get the slideshow functional
  - You can use any variation of grid and layout systems we've talked about. This include Bootstrap, Skeleton, Flexbox, Grid, and Floats
  - Embed the maps using an iframe (https://www.maps.ie/create-google-map/)
  - Use dead links (#)
  - Object fit and background images are your best friend
  - Sketch it out first
  - Since we haven't learned Javascript, no need to do the dropdown menu. Bonus points if you can figure out a solution.
  - Don't forget hover states.
  - Inspect element will be your best friend for getting the widths, heights, and images
  - Start general and work to specific
  - Prototype v Production code

## Homework
- Using anything but a grid system, code the 6 cards below the main video on the homepage of the News and Observer https://www.newsobserver.com/. Don't forget the box shadows and hover states.
- Tip. Layout 1 card and then duplicate it. No need to reinvent the wheel.
- Submit this by having it pulled up at the start of class on Tuesday.
