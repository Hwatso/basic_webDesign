# Class 1: Tags and Elements
The notes here are all in HTML5. Basically HTML5 has more functionalities than previous versions, more details can be looked up [here](HTML5-INFO). <br>

<br>
<br>

## What are tags?
HTML tag is defined as a piece of makeup language used to indicate the beginning and end of a type of HTML element in an HTML document, often you will see them wrapped in `<>` brakets. <br>

> The browsers use these to decide how to render or display the content contained inside onto screen. 

--- resource from [HERE](Tag-defi1)

_See the HTML5 code below:_ <br>

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

If you type `!` and hit `enter`, VS Code will automatically generate a basic structure of HTML form for you as shown above. Let's have a look at these tags there. <br>

tag | Description
--------- | ---------
`<!DOCTYPE html>` | As said, Document Type is html
`<html>` | root of HTML document
`<head>` | where non-visible data such as matadata and style (CSS can go here), link (external resources) tags are
`<body>` | where all visible contents you can see in webpage
`<script>` | inserted java code usually, preferrably put at the bottom of `<body>` because this ensures the parser isn't blocked until the very end. see more [here](script-location)


When you code your website, a lot of time you spend on `<body>` in HTML file because it intends to only construct the layout, not about functioning (script) or aesthetics (CSS). <br>
_You would like to see all the tags, see [link here](Tag-defi2)_ <br>
_The HTML file "index.html" is for this class 1._ <br>


_Some commonly used tags in `<body>` include:_ <br>

- `<h1> - <h6>` are heading tags used for titles.
- `<p>` tag stands for ***paragraph***. When using, different `<p>` elements will start a new line. 
- `<img>` tag stands for ***image***. When using, different pictures will jump to next line.

<br>
<br>
<br>

## What are elements?
In [stackOverflow](diff-ele-tag), there is a great answer to difference between elements and tags:

> HTML tag is just opening or closing entity. <br>
`<p>` and `</p>` : are called HTML tags. <br>
HTML element encompasses opening tag, closing tag, content (optional for content-less tags) <br>
`<p> This is paragraph content. </p>`: the whole thing is called HTML element. <br>

<br>
<br>

### Block and In-line Elements?

_W3School is a good place for fundamental knowledge._

> A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. <br>
A block-level element always takes up the full width available (stretches out to the left and right as far as it can). <br>
Two commonly used block elements are: `<p>` and `<div>` <br>

--- [W3School](blk-inline)

> An inline element does not start on a new line. <br>
An inline element only takes up as much width as necessary. <br>

_Try this in HTML file:_ <br>
`<span>Hello world!</span> <span>how's going!?</span>`

--- [W3School](blk-inline)




[HTML5-INFO]:https://www.javatpoint.com/html-vs-html5#:~:text=There%20are%20some%20differences%20between%20the%20two%20versions%3A,in%20HTML%20it%20is%20not%20possible.%20More%20items
[Tag-defi1]:https://www.bing.com/ck/a?!&&p=c97b0bbbc747b86dJmltdHM9MTY3OTE4NDAwMCZpZ3VpZD0wODllNzg4NS1kNGI4LTYwNmMtMzVlNi02YWUzZDUxMjYxYjgmaW5zaWQ9NTQ1NQ&ptn=3&hsh=3&fclid=089e7885-d4b8-606c-35e6-6ae3d51261b8&psq=what+are+tags+in+html&u=a1aHR0cHM6Ly93d3cuZGlnaXRhbG9jZWFuLmNvbS9jb21tdW5pdHkvdHV0b3JpYWxzL3doYXQtaXMtYW4taHRtbC10YWcjOn46dGV4dD1BbiUyMEhUTUwlMjB0YWclMjBpcyUyMGElMjBwaWVjZSUyMG9mJTIwbWFya3VwLCUzQ2ltZyUzRSUyMHRhZyUyMGlzJTIwdXNlZCUyMHRvJTIwZW1iZWQlMjBpbWFnZSUyMGVsZW1lbnRzLg&ntb=1
[Tag-defi2]:https://www.tutorialstonight.com/html-tags-list-with-examples#:~:text=HTML%20Tags%20List%20with%20Examples%201%201.%20Basic,...%208%208.%20Media%20tags%20...%20More%20items
[script-location]:https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup
[diff-ele-tag]:https://stackoverflow.com/questions/8937384/what-is-the-difference-between-html-tags-and-elements
[blk-inline]:https://www.w3schools.com/htmL/html_blocks.asp