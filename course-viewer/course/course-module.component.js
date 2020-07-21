(function () {
    'use strict';

    angular.module('courseViewer').component('courseModules', {
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
        },
        templateUrl: 'course-viewer/course/course-module.component.html'
    });
})();