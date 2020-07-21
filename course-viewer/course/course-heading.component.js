(function () {
    angular.module("courseViewer").component('courseHeading', {
        templateUrl: 'course-viewer/course/course-heading.component.html',
        bindings: {
            course: '<'
        },
        controllerAs: 'vm',
        controller: function () {
            var vm = this;

        }
    });
})();