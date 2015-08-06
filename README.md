# Angular Autofocus

An extremely simple directive to autofocus input fields in angular. Due to how views are rendered in angular, the autofocus directive doesn't always work. This directive makes sure fields are focused after being rendered.

## How to use

Install:

```shell
bower install --save ngAutofocus
```

Add the module to your app:

```javascript
angular.module('myApp', ['ngAutofocus']);
```

Use the autofocus attribute like you've always done:

```html
<input type="text" ng-model="my.model" autofocus>
```

## Minimizing

Closure Compiler is used to minimize the code. It is minimized using this command

```bash
closure-compiler --js_output_file=angular-autofocus.min.js --compilation_level SIMPLE angular-autofocus.js
```

Advanced optimizations are not used because as of now the AngularJS codebase does not support it.

## Issues

Please file issues using GitHub's issue tracker.

## Contributing

Pull requests are more than welcome!
