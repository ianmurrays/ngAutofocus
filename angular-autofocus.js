'use strict';

angular
  .module('ngAutofocus', [])
  .directive('autofocus', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element) {
        $timeout(function () {
          element[0].focus();
        });
      }
    };
  });
