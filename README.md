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
  <can-import from="main.css!"/>
  <can-import from="routes"/>

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

Then load `index.html` in a browser. After all depends are loaded your `index.stache` will be rendered and inserted into the page.
