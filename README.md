[![Build Status](https://travis-ci.org/donejs/autorender.svg?branch=master)](https://travis-ci.org/donejs/autorender)
[![npm version](https://badge.fury.io/js/done-autorender.svg)](http://badge.fury.io/js/done-autorender)

# done-autorender

Automatically renders a template, either to the `<html>` or `<body>` elements.

## Install

Install with NPM and use with StealJS:

```
npm install done-autorender --save
```

## Use

done-autorender enables you to use a Stache template as your application entry-point (the main). done-autorender will wait for your page to be fully loaded (including all dependencies) and then will insert the template into the `<head>` and `<body>`.  For example:

### index.stache

```mustache
<html>
<head>
  <title>My Site</title>
</head>
<body>
  <can-import from="main.css"/>
  <can-import from="routes"/>
  <can-import from="state" export-as="viewModel"/>

  {{#eq page "home"}}

    <can-import from="home/">
      {{#if isResolved}}
        <home-page></home-page>
      {{/if}}
    </can-import>

  {{/eq}}
</body>
</html>
```

### index.html

```html
<script src="node_modules/steal/steal.js" main="index.stache!done-autorender"></script>
```

Then load `index.html` in a browser. After all dependencies are loaded your `index.stache` will be rendered and inserted into the page.

## API

### ViewModel

Each done-autorender application is backed by a [viewModel](http://canjs.com/docs/can.Component.prototype.viewModel.html) that represents the state of the entire application.

This viewModel is an instance of a can.Map. To import this ViewModel into your application use a can-import tag like so:

```handlebars
<can-import from="app/state" export-as="viewModel"/>
```

This tells done-autorender that the module **app/state** is the ViewModel.

#### Debugging

Often in development (such as in your dev tools console) you will want to have access to the Application ViewModel to inspect it's values.  You can access it with:

```js
$("html").viewModel(); // -> AppViewModel
```

## Server Rendering

When rendering from the server using [done-ssr](https://github.com/donejs/done-ssr) done-autorender will add an attribute to the root HTML element like so:

```html
<html data-detached>
  ...
</html>
```

When done-autorender runs on the client it **reattaches** your interactive app to the DOM. After reattachment is complete the `data-detached` attribute is removed. This means you can use this attribute in your CSS to style things a certain way while reattachment is happening:

```css
html[data-detached] input {
  background: grey;
  /* other stuff to make it look disabled */
}
```
