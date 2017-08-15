[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/rohithsathya/rsat-pagination)

# &lt;rsat-pagination&gt;
`<rsat-pagination>` Is a pagination component based on web component v1 standards and also have support for Angular js.

## Demo

#### [Web Component Edition](https://rohithsathya.github.io/Examples/WCExample.html)
#### [Angular JS Edition](https://rohithsathya.github.io/Examples/AJExample.html)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install rsat-pagination --save
```

Or [download as ZIP](https://github.com/rohithsathya/rsat-pagination/archive/master.zip)

## Usage
### WebComponent Edition

1. Import Web Components' polyfill (if needed, for older browsers):

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/rsat-pagination/dist/rsat-pagination.html" />
    ```

3. Start using it!

	```html
	<rsat-pagination totalCount="1000" 
                    rpp="10" 
                    currentPage="1" 
                    theme="#3f51b5" 
                    id="paginationEle">
    </rsat-pagination>
	```
    ```js
        //register for page change Event
        document.getElementById("paginationEle").addEventListener("pageChange", function (e) {
             console.log("Current Page " + e.currentPage);
        });
    ```
### AngularJs Edition

1. Add reference to rsat-pagination file:

    ```html
    <link rel="import" href="bower_components/rsat-pagination/dist/rsat-pagination-aj.js" />
    ```

2. Add the dependecy of rsat-pagination on to your angular js application

	```js
	 var app = angular.module('myApp', ['rsat-pagination']);
	```
3. Start using it!
     ```html
    <rsat-pagination totalCount="totalRecordsCount" 
                    rpp="recordsPerPage" 
                    currentPage="currentPage" 
                    theme="theme" 
                    pagechange="pagechanged(pageNumber)">
    </rsat-pagination>
    ```
    ```js
    //options binding
     var app = angular.module('myApp', ['rsat-pagination']);
                app.controller('myCtrl', ['$scope', function ($scope) {
                $scope.totalRecordsCount = 26;
                $scope.recordsPerPage = 3;
                $scope.currentPage = 1;
                $scope.theme = "#3f51b5";
                $scope.pagechanged = function(pageNumber){
                    console.log("Current Page " + pageNumber)
                }
            }]);
    ```
#### options
| Options       | Explanation  | Type   |
| ------------- | ------------- |------------- |
| totalCount    |defines the total count of records |only Numbers|
| rpp           |defines records per page i.e. how many records per page to be displayed  | only Numbers|
| currentPage   |defines which is the current page being displayed | only Number|
| theme         |Defines the theme color,should be valid color value|text,Hexadecimal  |
| pagechange    |An Event that is triggred when a page change occurs|function |


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

[The MIT License (MIT)](https://opensource.org/licenses/MIT)

Copyright (c) 2017 RSAT


