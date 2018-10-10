var ims = angular.module('ims', ['datatables', 'datatables.buttons']);

ims.controller('MainController', function($scope, $http, FetchService,InsertService) {


	FetchService.getProfileDetails().then(function(response){
		
		$scope.MyTheme=response.theme;
		
	});
	
	$scope.emailFormat = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	
});

	
ims.directive('mobileno', function () {
	var regex,result;
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(value) {
            	regexp = /^([7-9])([0-9]){0,9}$/;
            	var space = /\s/g;
                if (!regexp.test(value)) {
                    result = value.replace(/[^\d]/gi,'');
                    if(/\d/gi.test(result) && !regexp.test(result))
                    	{
	                    	result = value.replace(/[\d\s]/gi,'');
	                    	ngModelCtrl.$setViewValue(result);
	                    	ngModelCtrl.$render();
                    	}
                    ngModelCtrl.$setViewValue(result);
                	ngModelCtrl.$render();
                    return result;
                }else{
                	ngModelCtrl.$setViewValue(value);
                	result=value;
                }
                ngModelCtrl.$render();
                return result;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


ims.directive('numbersonly', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs, ctrl) {
            ctrl.$parsers.push(function (input) {
                if (input == undefined) return ''
                var inputNumber = input.toString().replace(/[^0-9]/g, '');
                if (inputNumber != input) {
                    ctrl.$setViewValue(inputNumber);
                    ctrl.$render();
                }
                return inputNumber;
            });
        }
    };
});


ims.directive('onlystring', function () {
    var regex,result,transformedText;
    return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
        function fromUser(value) {
                regexp = /^[A-Za-z]+$/;
                
            if (!regexp.test(value)) {
                result = value.replace(/[^a-zA-Z]/g, '');
                ngModelCtrl.$setViewValue(result);
                    ngModelCtrl.$render();
                return result;
            }else{
                    if(value.length<=50){
                            ngModelCtrl.$setViewValue(value);
                            result=value;
                    }
                    else{
                            result = value.substr(0,50);
                            ngModelCtrl.$setViewValue(result);
                    }
                    
                    
            }
            
            ngModelCtrl.$render();
            return result;
        }            
        ngModelCtrl.$parsers.push(fromUser);
    }
};
});



ims.directive('bloodGroup', function () {
    var regex,result,transformedText;
    return {
    require: 'ngModel',
    link: function (scope, element, attr, ngModelCtrl) {
        function fromUser(value) {
                regexp = /^(A|B|AB|O)[+-]$/;
                
            if (!regexp.test(value)) {
                result = value.replace(/[^a-zA-Z]/g, '');
                ngModelCtrl.$setViewValue(result);
                    ngModelCtrl.$render();
                return result;
            }else{
                    if(value.length<=50){
                            ngModelCtrl.$setViewValue(value);
                            result=value;
                    }
                    else{
                            result = value.substr(0,50);
                            ngModelCtrl.$setViewValue(result);
                    }
                    
                    
            }
            
            ngModelCtrl.$render();
            return result;
        }            
        ngModelCtrl.$parsers.push(fromUser);
    }
};
});




ims.directive('capitalize', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, modelCtrl) {
        var capitalize = function(inputValue) {
          if (inputValue == undefined) inputValue = '';
          var capitalized = inputValue.toUpperCase();
          if (capitalized !== inputValue) {
            // see where the cursor is before the update so that we can set it back
            var selection = element[0].selectionStart;
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
            // set back the cursor after rendering
            element[0].selectionStart = selection;
            element[0].selectionEnd = selection;
          }
          return capitalized;
        }
        modelCtrl.$parsers.push(capitalize);
        capitalize(scope[attrs.ngModel]); // capitalize initial value
      }
    };
  });


ims.directive('restrictField', function () {
    return {
        restrict: 'AE',
        scope: {
            restrictField: '='
        },
        link: function (scope) {
          // this will match spaces, tabs, line feeds etc
          // you can change this regex as you want
          var regex = /\s/g;

          scope.$watch('restrictField', function (newValue, oldValue) {
              if (newValue != oldValue && regex.test(newValue)) {
                scope.restrictField = newValue.replace(regex, '');
              }
          });
        }
    };
  });

ims.directive('nospecialchar', function() {
	return {
	    require: 'ngModel',
	    restrict: 'A',
	    link: function(scope, element, attrs, modelCtrl) {
	        modelCtrl.$parsers.push(function(inputValue) {
	            if (inputValue == null)
	                return ''
	            let cleanInputValue = inputValue.replace(/[^\w]|_/gi, '');
	            if (cleanInputValue != inputValue) {
	                modelCtrl.$setViewValue(cleanInputValue);
	                modelCtrl.$render();
	            }
	            return cleanInputValue;
	        });
	    }
	}
	});


// uppercase
ims.directive('formControl', function() {
  
	return {
    require: 'ngModel',
    restrict : "C",
    link: function(scope, element, attrs, modelCtrl) {
    	var caret = Number(attrs.capitalize);
    	
      var capitalize = function(inputValue) {
        if (inputValue == undefined) inputValue = '';
        var capitalized = inputValue.toUpperCase();
        if (capitalized !== inputValue) {
        	var selection = element[0].selectionStart;
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
    		element[0].selectionStart = selection; 
    		element[0].selectionEnd = selection;
        }
        return capitalized;
      }
      
      modelCtrl.$parsers.push(capitalize);
      capitalize(scope[attrs.ngModel]);
    }
  };
});


ims.directive('wbSelect2', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.select2({
                width: "100%",
                placeholder: "",
            });
            scope.$watch('ngModel', function(newVal, oldVal){
                window.setTimeout(function(){
                    element.select2("val", newVal);
                });
            });
        }
    };
});




//address validate
ims.directive('addressvalid', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^a-zA-Z0-9&/,.]/g, '');
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
                    }
                    return transformedInput;
                }
                else{
                }
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});


ims.directive("panvalid", function() {

    var regexp;
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            regexp = /^([a-zA-Z]([a-zA-Z]([a-zA-Z]([a-zA-Z]([a-zA-Z]([0-9]([0-9]([0-9]([0-9]([a-zA-Z])?)?)?)?)?)?)?)?)?)?$/;
            var char;
            elem.bind("keypress", function(event) {
                char = String.fromCharCode(event.which)
                if(!regexp.test(elem.val() + char))
                    event.preventDefault();
            })
        }
    }

});


