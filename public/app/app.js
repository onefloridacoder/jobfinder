angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Accountant',
        description: 'You will use a keyboard'
    }, {
        title: 'Sales Person',
        description: 'You will fight dragons'
    }];
});