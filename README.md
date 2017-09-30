# load-me-lazy

This small script loads images after a user scrolls past a certain point to reduce laoding times and bandwith.

## Installing

To install simply run

```
npm install load-me-lazy
```

### Usage

To use this simply require the package in your .js file.

```
var LazyLoad = require("load-me-lazy");
```

The package listens for any img that has the data-img-src attribute and then puts the content of that attribute as the image src, so i would simply look like this:

```
<img data-img-src="SOURCE_OF_IMAGE">
```

Then call the function in your .js file:

```
var lazy = new LazyLoad();
```

You can add a Class name which should be added, if the image is loaded, default is "loaded";

```
var lazy = new LazyLoad({addClass: "loaded"});
```
