# Accessibility
Web accessibility means that people with disabilities can use the Web.

At the end of the day, we can conclude that people with disabilities can perceive, understand, navigate, and interact with the Web, and that they can contribute to the Web. Web accessibility also benefit those with temporary or conditional disabilities which in some cases maybe aging, slow internet connection, broken arm, e.t.c.

## How do we achieve this?
### Alt Tags
- The alt-tag or alternative (alt) html attribute is basically used to describe an image. In HTML, it looks the same thing like this:

`<img src =”image-location” alt=”this is where your image description goes”>`

Assuming you were blind, what would you need to know about the image? “Woman” isn’t much help, but maybe “Woman drawing design flow chart” would be better.

### Keyboard Navigation
By default anything you put on your website should be something that could be conceivably carried out using a keyboard only. Which means you shouldn’t mess with your navigation buttons. For instance don’t animate navigation buttons as dropdown buttons if you can’t use them with a screen reader.

## Title tag
Always include a title tag in your head. Its good for SEO and accessibility

```html
<head>
  <title>NPR.org Homepage</title>
</head>
```

## HTML Tags
Please for web accessibility, don’t mess with the default html tags. Use buttons for buttons (actual form submission) while you can use anchors for links (even if they look like buttons). Use clean code, `table, tbody, td, th` for tables, `h1, h2, h3, …` for titles and so on.

Messing up with them will confuse screen readers entirely because all screen readers follows a particular way to read the elements on a web page.

## ARIA
Accessible Rich Internet Applications (ARIA) is a simple set of HTML attributes that define ways to make Web content and Web applications more accessible to people with disabilities.For instance, ARIA enables accessible navigation landmarks, JavaScript widgets, form hints and error messages, live content updates, and more.

### ARIA Roles
ARIA roles are added to HTML markup like an attribute. They define the type of element and suggest what purpose it serves. Your element can only have one role. The following example identifies the element as some kind of banner:

`<header role="banner">`

### ARIA Attributes
ARIA attributes are slightly different from roles. They are added to markup in the same way, but there is a range of ARIA attributes available for use. All ARIA attributes are prefixed with `aria-`. There are two types of attributes, states value is likely to change) and properties (value is less likely to change).

`<input aria-checked="true" aria-errormessage="required field" />`

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques

## Optimizing Images  
- Always make the file as small as possible
- Standard size is 1920x1080 px
- http://tinyjpg.com is a great place to compress images
- Make sure you are using the proper format for the type of image
  - PNG has a transparent background
  - JPG is usually smaller
  - SVG is scalable (and awesome)

## Resources:
- [Color Blindness Check (website)](http://colorfilter.wickline.org/)
- [Color Contrast Check](http://webaim.org/resources/contrastchecker/)
- [Web Accessibility with Google](https://webaccessibility.withgoogle.com/unit?unit=1)
- [ARIA Labels](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Web_applications_and_ARIA_FAQ)
- [Web Page Test](http://www.webpagetest.org/)
