# Week 2 Notes

## CSS

### Advanced Selectors

#### Combined Selectors

By putting two selectors directly next to each other, you can select _only_ elements to which both selectors apply. That's how our `:hover` rules worked last week. 

This code applies special styling when an element has both the `big-font` class and the `red` class:

```css
.big-font {
	font-size: 50px;
}
	
.red {
	color: red;
}

.big-font.red {
	border: 1px solid red;
}
```

It would apply to this element:

```html
<h1 class="big-font red">
	Welcome to the text you are reading!
</h1>
```

[See live example](https://jsbin.com/lahite/1/edit?html,css,output)

#### Descendant Selectors

By putting selectors one after another, you can select an element's children. For example, `.special div` would select all `div` elements inside elements with the class `special`.

Given this CSS:

```css
.special div {
	background-color: purple;
}
```

And this markup:

```html
<div class="special">
	<div>There are several types of edible fruit.</div>
</div>
```

The div inside the div with the class `special` would have a purple background.

[See live example](https://jsbin.com/vemehu/1/edit?html,css,output)

#### Other Useful Selectors

We won't be going through these in depth, but they can be useful & it's good to know they exist.

Selector | Example | Function
-------- | ------- | --------
`:first-child` | `div:first-child` | Selects an element that is the first child element of its parent
`:last-child` | `div:last-child` | Selects an element that is the last child element of its parent
`:nth-child()` | `div:nth-child(3)` | Selects an element at a given position in its parent element's children. Value can also be `even` or `odd` to select alternating children.
`>` | `.special > div` | Selects only elements which are direct children of elements of a given type. This example would select only `div` elements whose parent element has the class `special`.
`*` | `*` | Selects all elements
`+` | `.special + div` | Selects elements that come after elements of a given type. This example would select `div` elements that follow elements that have the class `special`.

[More info about selectors](http://learn.shayhowe.com/advanced-html-css/complex-selectors/)

#### Dealing with Precedence

Often, multiple rules in your stylesheet will apply to a single element. The rules that CSS uses to determine which styles take precedence get a bit complex, but knowing the following rules should give you enough information to solve most styling problems you run into.

##### Class selectors take precedence over element selectors

`.my-div` takes precedence over `div`

##### Rules which use more selectors take precedence over rules which use fewer

`div.my-div` takes precedence over `.my-div`

##### Rules defined later in the stylesheet take precedence over rules defined earlier

These two chunks of CSS are equivalent:

```css
.my-div {
	font-size: 16px;
	color: red;
}

.my-div {
	color: green;
}
```

```css
.my-div {
	font-size: 16px;
	color: green;
}
```

### New Properties

Just to give you a bit more material to work with. Here's a chunk of CSS that uses properties we didn't discuss last week:

```css
.very-styled-thing {
	padding-top: 100px;
	padding-bottom: 50px;
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 10px;
	margin-bottom: 15px;
	margin-left: 12px;
	margin-right: 13px;
	text-align: center;
	font-weight: bold;
	font-style: italic;
	border: 3px dashed green;
	opacity: .5;
	width: 100px;
	height: 300px;
}
```
[Live very styled thing](https://jsbin.com/nabeya/edit?html,css,output)

### Color Units

We've been working with named colors so far, but you'll rarely use those in practice. Here's some CSS that uses other methods to define color:

```css
.redundant-colors {
	color: red;
	color: #FF0000;
	color: rgb(255, 0, 0);
	color: rgba(255, 0, 0, 1);
	color: hsl(0, 100%, 50%);
	color: hsla(0, 100%, 50%, 1);
}
```

The `a` in `rgba` and `hsla` stands for 'alpha'. It's a value between `0` and `1` (for example, `.175`) that defines the transparency of the color.

## Linking and External Resources

### Links

Links are very important!

You can create a link to another page or site using the `a` tag with its `href` attribute set to a url. Here's what that looks like:

```html
	<a href="http://www.dogs.com">A link to dogs.com</a>
```

Unlike typing a url into your browser, urls in the href attribute must always start with `http://` or `https://` — they won't work otherwise.

### External Resources

So far we've used only inline scripts and styles — ones that are contained within an html page, but that can get a bit messy. It's usually considered best practice to use external ones instead — scripts and stylesheets that are contained in separate files. 

#### Javascript

Javascript files use the extension `.js`. You can use the `script` tag to include an external javascript file on a page. Here's what that might look like:

```html
<script src="main.js"></script>
```

Notes:

- The example above requires that you have a file named `main.js` in the same folder as your html file.
- Be sure to remember to close your `script` tag!

#### CSS

CSS files use the extension `.css`. You can, somewhat confusingly, use the `link` tag with its `rel` and `href` attributes set to include an external css file on a page. Here's what that looks like:

```html
	<link rel="stylesheet" href="main.css">
```

Notes:

- The example above requires that you have a file named `main.css` in the same folder as your html file. 
- You should include css files in the `head` element of your page, so that the style starts loading before your page content does.
- `link` does not require a closing tag.

### Types of URLs

#### Absolute URLs

Absolute urls are the type of urls you'd type into a browser. They consist of a protocol (eg `http://`), a domain (eg `www.google.com`), and optionally a path (eg `/about`). Some examples:

`http://www.dogs.com`  
`https://kb.iu.edu/d/abwp`  
`http://www.amazon.com/Godinger-Dublin-Double-Old-Fashioned/dp/B000ZLF0AO/ref=sr_1_4?ie=UTF8&qid=1454519252&sr=8-4&keywords=crystal+glass`

#### Relative URLs

Relative urls describe the location of a resource _relative_ to the current page. This means that they're more portable than absolute urls. If you're working on a site locally that you intend to host on Github, the absolute urls of your pages will change, but the relative ones won't.

Relative URLs do not start with http:// or https://.

A simple example: If I have a page located at `http://www.dogs.com/types/spaniel.html` and I create a link with the `href` attribute set to `terrier.html`, the link will lead to  `http://www.dogs.com/types/terrier.html`

There are a couple of special characters you can use in relative urls:

- A url that begins with `/` will be relative to the site's domain (the part of the URL that ends with .com, .net, etc.)
- `..` can be used in a URL to refer to the parent directory.

Examples:

Current URL | Link | Resolves to 
----------- | ---- | -----------
http://www.dogs.com/types/spaniel/diet.html | temperament.html | http://www.dogs.com/types/spaniel/temperament.html
http://www.dogs.com/types/spaniel/diet.html | pics/cute.html | http://www.dogs.com/types/spaniel/pics/cute.html
http://www.dogs.com/types/spaniel/diet.html | ../index.html | http://www.dogs.com/types/index.html
http://www.dogs.com/types/spaniel/diet.html | /about.html | http://www.dogs.com/about.html

These rules stay the same whether you're linking to a remote page or including a remote resource on the current page!