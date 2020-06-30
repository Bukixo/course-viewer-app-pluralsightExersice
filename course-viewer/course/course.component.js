(function () {
    'use strict';

    angular.module('courseViewer').component('course', {
        bindings: {
            courseId: '<'
        },
        controllerAs: 'vm',
        controller: function (){
            var vm = this;

            vm.$onInit = function () {
                vm.courseId = 200;
            }
        },
        templateUrl: 'course-viewer/course/course.component.html'
    });
})();