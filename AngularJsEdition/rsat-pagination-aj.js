var app = angular.module('rsat-pagination',[]);
app.directive('rsatPagination', function () {
    return {
        restrict: 'E',
        scope: {
            totalcount: '=',
            rpp: '=',
            currentpage: '=',
            theme: '=',
            pagechange: '&',

        },
        link:function(scope, element, attrs,){

        },
        controller: function ($scope, $element) {
            
            $scope.gotoPage = function (pn) {
                $scope.currentpage = pn;
            }

            $scope.$watch('currentpage', function (newValue, oldValue) {
                $scope.currentpage = newValue;
                $scope.setUpUI();
            }, true);

            $scope.$watch('theme', function (newValue, oldValue) {
                $scope.theme = newValue;
                var styleElement = document.getElementById("rsatPaginationstyleG");
                if(styleElement){
                    styleElement.innerHTML = ' .rsatpaginaionpagenodes:disabled, .rsatpaginaionpagenodes[disabled] { background:'+$scope.theme+'; color: #fff; cursor: not-allowed; }';
                }
            }, true);





            $scope.addPageNumbers = function (pn) {
                if (pn > 0 && pn <= $scope.totalPages && $scope.pageNumbers.indexOf(pn) < 0) {
                    $scope.pageNumbers.push(pn);
                }
            }
            $scope.setUpUI = function () {
                $scope.totalPages = Math.ceil($scope.totalcount / $scope.rpp);
                $scope.pageNumbers = [];
                $scope.b1 = [];
                $scope.b2 = [];
                $scope.b3 = [];
                $scope.addPageNumbers(1);
                $scope.addPageNumbers(2);
                $scope.addPageNumbers($scope.currentpage - 1);
                $scope.addPageNumbers($scope.currentpage);
                $scope.addPageNumbers($scope.currentpage + 1);
                $scope.addPageNumbers($scope.totalPages - 1);
                $scope.addPageNumbers($scope.totalPages);

                for (var i = 0; i < $scope.pageNumbers.length; i++) {
                    if (i < 2) {
                        $scope.b1.push($scope.pageNumbers[i]);
                    }
                    if (i >= 2 && i < $scope.pageNumbers.length - 2) {
                        $scope.b2.push($scope.pageNumbers[i]);
                    }
                    if (i >= $scope.pageNumbers.length - 2) {
                        $scope.b3.push($scope.pageNumbers[i]);
                    }
                }

                $scope.dot1 = true;
                $scope.dot2 = true;

                if (($scope.b1[$scope.b1.length - 1] + 1) == $scope.b2[0]) {
                    $scope.dot1 = false;
                }
                if ($scope.b2.length == 0) {
                    $scope.dot2 = false;
                }
                if (($scope.b2[$scope.b2.length - 1] + 1) == $scope.b3[0]) {
                    $scope.dot2 = false;
                }
                $scope.pagechange({'pageNumber':$scope.currentpage});

            }


        },
        template: '<div class="rsatPaginationpageHeader"><style id="rsatPaginationstyleG"></style><style>rsat-pagination{float: left;} .rsatPaginationpageHeader{float: left;} .rsatpaginaionpagenodes { float: left; padding: 10px; float: left; padding: 10px; height: 45px; width: 45px; border-radius: 50%; background-color: white; border-width: 0; margin: 3px; font-size: 14px; box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12); outline: none; cursor: pointer; } .rsatpaginaiondotnode { float: left; padding: 10px; float: left; padding: 10px; } </style> <button data-number="1" ng-disabled="f==currentpage" ng-click="gotoPage(f)" class="rsatpaginaionpagenodes" ng-repeat="f in b1">{{f}}</button> <div class="rsatpaginaiondotnode" ng-if="dot1">...</div> <button data-number="1" ng-disabled="m==currentpage" ng-click="gotoPage(m)" class="rsatpaginaionpagenodes" ng-repeat="m in b2">{{m}}</button> <div class="rsatpaginaiondotnode" ng-if="dot2">...</div> <button data-number="1" ng-disabled="l==currentpage" ng-click="gotoPage(l)" class="rsatpaginaionpagenodes" ng-repeat="l in b3">{{l}}</button> </div>',
        replace: false
    }
})