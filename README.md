[![Build Status](https://travis-ci.org/donejs/autorender.svg?branch=master)](https://travis-ci.org/donejs/autorender)
[![npm version](https://badge.fury.io/js/done-autorender.svg)](http://badge.fury.io/js/done-autorender)
[![Greenkeeper badge](https://badges.greenkeeper.io/donejs/autorender.svg)](https://greenkeeper.io/)

# done-autorender

Automatically renders a template, either to the `<html>` or `<body>` elements.

## Install

Install with NPM and use with StealJS:

```
npm install done-autorender --save
```

## Use

done-autorender enables you to use a [Stache](https://canjs.com/doc/can-stache.html) template as your application entry-point (the main). done-autorender will wait for your page to be fully loaded (including all dependencies) and then will insert the template into the `<head>` and `<body>`.  For example:

### index.stache

```handlebars
<html>
<head>
  <title>My Site</title>
</head>
<body>
  <can-import from="~/main.css"/>
  <can-import from="~/routes"/>
  <can-import from="~/state" export-as="viewModel"/>

  {{#eq page "home"}}

    <can-dynamic-import from="~/home/">
      {{#if isResolved}}
        <home-page></home-page>
      {{/if}}
    </can-dynamic-import>

  {{/eq}}
</body>
</html>
```

### index.html

```html
<script src="node_modules/steal/steal.js"
	main="app/index.stache!done-autorender"></script>
```

Then load *index.html* in a browser. After all dependencies are loaded your *index.stache* will be rendered and inserted into the page.

#### No Zone option

If you do not use SSR but still want to use `done-autorender` to bootstrap your application you can use the `no-zone` module:
```html
<script src="node_modules/steal/steal.js"
	main="app/index.stache!done-autorender/no-zone"></script>
```

## API

### ViewModel

Each done-autorender application is backed by a View Model (such as a [DefineMap](https://canjs.com/doc/can-define/map/map.html)) that represents the state of the entire application.

To import this View Model into your application use a [can-import](https://canjs.com/doc/can-view-import.html#_can_importfrom__MODULE_NAME___) tag like so:

```html
<can-import from="app/state" export-as="viewModel" />
```

This tells done-autorender that the module *app/state* is the ViewModel.

#### Debugging

In development mode, [can-zone/debug](https://canjs.com/doc/can-zone/debug.html) is enabled to provide debugging information in the case where the Zone times out and the app is never attached to the page.

You can control the timeout by setting the `data-autorender-timeout` attribute on the steal script tag (note that `data-` is optional here) like so:

```html
<script src="./node_modules/steal/steal.js"
	data-autorender-timeout="1000"></script>
```

The __timeout__ is specified in milliseconds; in the above example it is 1 second. By default the zone will timeout after __5000 milliseconds__ (5 seconds).

After the Zone has timed out the console will print out stack traces of code that failed to complete. Use these stack traces to figure out what caused reattachment to fail and fix anything that can be fixed (by, for example, using [Zone.ignore](https://canjs.com/doc/can-zone.ignore.html)). These information looks like:

![debug stack traces](https://user-images.githubusercontent.com/361671/33093932-62001f4a-cecc-11e7-8cbc-376789a43781.png)

##### Break on timeout

Additionally you can choose to have a `debugger;` breakpoint that is hit *after* the Zone times out. This allows you to more easily figure out which code is still running and see if something can be done about it.

Enable this by setting the `data-autorender-debug-break` option on the steal script tag like so:

```html
<script src="./node_modules/steal/steal.js"
	data-autorender-debug-break></script>
```

This is a boolean attribute and doesn't need a value. Instead of logging stack traces you will get a breakpoint from which you can look back in the call stack and inspect the reason why the code continued to run past the timeout.

![break on timeout](https://user-images.githubusercontent.com/361671/33095278-1628ab46-ced1-11e7-96e7-bf25e9cc2853.png)


##### can-view-model

If you install [can-view-model](https://github.com/canjs/can-view-model) you can use it to access the Application ViewModel like so:

```js
var canViewModel = require("can-view-model");

var appVM = canViewModel(document.documentElement);
```
