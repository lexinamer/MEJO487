# Day 11	| UI/UX Part 1

## Understanding User Experience
- Intro to UX > ux.md
- Basics of a Usability Test > usabilitytest.md

## Accessibility
- Why do we need to be accessible?
- Lets discuss some web stuff to do > accessibility.md

## HTML5 Video
HTML5 video refers to a new HTML element `<video>` that was added to HTML5. Browsers that support the HTML5 `<video>` element can play video files natively, while previously they would have required a plugin like Flash to play video content.

### Example Code
``` html
<video poster="path/to/screenshot.jpg">
	<source src="path/to/video.webm" type="video/webm">
	<source src="path/to/video.ogg" type="video/ogg">
	<source src="path/to/video.mp4" type="video/mp4">
</video>
```
Note: to improve performance, you should always include the type attribute on your `<source>` elements. This allows the browser decide which file to use without first loading each file.

### Why do I need multiple formats for HTML5 video?
The HTML5 `<video>` element does not require multiple video formats, however different browsers (and browser versions) support different video container formats and codecs, so for maximum cross-compatibility we add multiple file formats in their own `<source>` elements as children of the `<video>` element.

### What are the best video formats for HTML5 video
For maximum browser compatibility you should include three formats in your HTML5 `<video>` elements:
- Webm: Webm (with VP8 video codec and Vorbis audio codec) is the preferred format for Chrome, Opera and Firefox 4+ as it provides the best compression to quality ratio of the available formats.
- Ogg: Ogg (with Theora video codec and Vorbis audio codec) is also fully supported in Chrome but has even earlier support in Firefox (supported since v3.5).
- Mp4: Mp4 (with H.264 video codec and AAC audio codec) is supported by most other browsers. Including the Mp4 format adds support for Internet Explorer 9+, Safari, iOS Safari, Android Browser, Opera and Chrome for Android.

### Fullscreen video
- See fullscreenvideo folder
- http://www.coverr.co/

## Homework (starting in class)
### Critiquing Media Presentations
The goal of this assignment is to begin to find, critique, and explore different interactive pieces and websites.

**In class today**
1. Group up in pairs
2. Each pair should find an interactive website or piece that you like.
  - https://www.nytimes.com/interactive/2017/12/21/us/2017-year-in-graphics.html
  - http://blog.apps.npr.org/
  - https://features.propublica.org/2017-year-in-review/visual-storytelling-interactive-data-journalism/
  - https://www.awwwards.com/websites/web-interactive/
3. Each group should email me (lexinamer@gmail.com) the URL to the site before the end of class today

**Over the weekend**
4. Go through the site thoroughly
5. At the start of the next class, each group is going to present for 5 minutes on their chosen site. Keep in mind that you should cover the following:
  - Summary of the piece
  - Why you chose this piece
  - Who the target audience(s)/users might be
  - Successes and limitations of the piece (particularly from a usability perspective)
  - What you might do the improve the piece
