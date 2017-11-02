(function() {
    var controllerId = 'app.views.events.index';
    angular.module('app').controller(controllerId, [
        '$scope', '$modal', 'abp.services.app.event',
        function ($scope, $modal, eventService) {
            var vm = this;

            vm.events = [];
            vm.filters = {
                includeCanceledEvents: false,
                searchEventTitle: ''
            };

            function loadEvents() {
                console.log("LoadEvents");
                eventService.getList(vm.filters).success(function (result) {
                    vm.events = result.items;
                });
            };

            vm.search = function () {
                console.log("paspausta");
                    loadEvents();
            };

            vm.openNewEventDialog = function() {
                var modalInstance = $modal.open({
                    templateUrl: abp.appPath + 'App/Main/views/events/createDialog.cshtml',
                    controller: 'app.views.events.createDialog as vm',
                    size: 'md'
                });

                modalInstance.result.then(function () {
                    loadEvents();
                });
            };

            $scope.$watch('vm.filters.includeCanceledEvents', function (newValue, oldValue) {
                if (newValue != oldValue) {
                    loadEvents();
                }
            });

            $scope.$watch('vm.filters.searchEventTitle', function (newValue, oldValue) {
                if (newValue != oldValue) {
                    loadEvents();
                }
                loadEvents();
            });

            loadEvents();
        }
    ]);
})();