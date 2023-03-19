## Height Issue Caused by FLOAT Element
A typical error occurs that the position of blocks is not consistant on one horizontal/vertical line, even if you properly define all the attributes that can align elements, like

```
vertical-align: middle;
```

The issue is that FLOAT property takes the corresponding blocks out of **the normal flow of document**. They will be shifted until touching the edge of its containing box or other floating elements. 

### To solve this problem:

1. For the blocks that above or beneath the floated element, apply **clear:both** in its CSS style. This method is used more commonly.
    "Both" means regions both above and below, "clear" means the no float feature will be allowed to show. Alternatively speaking, it now takes the whole stuff as if normal flow of document. 

    ```
    .box {
        clear:both;
    }
    ```

2. For the floated element, apply **display:block** in CSS style code to force the way to display this element. 

    ```
    .box {
        float:left;
        display:block;
    }



## Animation with Pure CSS
This method applies if the image has a long length. Try using **background-position** and **@keyframes** to move picture and make animation.

```
@keyframes move-bg {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 100% 0;
    }
}

.box {
    width: 60px;
    height: 60px;
    
    animation: move-bg 5s linear infinite;
    background-image: url('yourImage.png');
    background-repeat: no-repeat;
}

```

The image acts as background because most likely you will have text or other cover above the animation or picture. Background does easier. But in case you just want <image>:

```
@keyframes slide {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(20%);
    }
    100% {
        transform: translateX(100%);
    }
}

.box {
    animation: slide 2s ease-in-out infinite;
}

```