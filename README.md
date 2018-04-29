# Metal Perf Demo

This demo shows Metal rendering a Sierpinski triangle that constantly decreases and grows, and whose node has a value that increases by one every second.

The goal is for Metal.js to make smooth animations while updating 729 nodes of text every second. Only one property is updated on the root node, which is then transmitted through more than 1,700 nodes every second.

> Demo adapted from https://github.com/ionic-team/stencil-fiber-demo for Metal.js

**What's inside?**
* `parcel-bundler`
* `metal-jsx`
* `metal-web-component`
* `babel-preset-metal-jsx`
* `babel-preset-env`
* `transform-object-rest-spread`

## Getting started

1. Git clone
```
git clone git@github.com:matuzalemsteles/metal-perf.git
```

2. Enter the folder
```
cd metal-perf
```

3. Install local dependencies:
```
npm install
```

4. Start the demo server:
```
npm run start
```

Then open `http://localhost:1234`.

## Building for Production
```
npm run build
```

This will compile your JS and copy your index.html to the **dist** folder.
