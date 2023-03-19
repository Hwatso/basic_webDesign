# Class 1: Intro to CSS
CSS stands for Cascading Style Sheets. You may think it as ways to describe and decorate the HTML structures.

There are three ways of writing CSS:

- Inline CSS.

    _Write CSS inside a signle HTML elements using style-attribute._ <br>

    ```html
    <div style="width: 100px;height: 100px;"></div>
    ```


- Internal CSS.

    _It is defined in the `<head>` section of an HTML document. It can style the whole webpage._ <br>
    ***Notice that you would need class or ID names.*** <br>

    ```html
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 100px;
            height: 100px;
        }
        #para {
            color: brown;
            size: 16px;
        }
    </style>
    </head>
    ```


- External CSS

    _An external CSS sheet is used, and link is used inside HTMl document to build connection. The format is same as internal CSS._ <br>
    _Developer love to use external because it is more organized (e.g. header.css, main.css, footer.css), think about you have a ton of code and css to work with._ <br>

    ```css
    /* Here is external CSS sheet */
    /* See the class1.css file */
    .box {
        width: 100px;
        height: 100px;
    }

    #para {
        color: aquamarine;
        size: 30px;
    }
    ```

    ```html
    <!-- external css link inside head -->
    <link rel="stylesheet" href="./class1.css">
    ```


### Common Types of CSS 
_Well I would suggest just go google for the kind of CSS code that might exist you want because it is just about memory thing._

For example, I want to know how shadowing a box looks like: <br>
And I found the [link](shadow-MDN) here explaining so well: <br>
<img scr=".shadow-css.png" alt="shadow-syntax-html" style="width:40%; height:40%;"> <br>



[shadow-MDN]:https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow