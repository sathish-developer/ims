ims.controller('SupplierController',function($scope,$http,InsertService,FetchService,$filter,DTOptionsBuilder,$q,$location,UrlConstants,$timeout) {
	
	$scope.supplierMgt = true;
	
	$('#country').select2({
	    //minimumResultsForSearch: -1
	});
	
//    $(document).ready(function() {
//		if($scope.supplierDto.country != null)
//		{
//			var stateName = $scope.supplierDto.state;
//			var cityName = $scope.supplierDto.city;
//			$scope.getStates($scope.supplierDto.country);
//			$scope.getCity(stateName,$scope.supplierDto.country);
//			$scope.supplierDto.state = stateName;
//			$scope.supplierDto.city = cityName;
//		}    	
//    });
	
	$scope.cityDtoList=[];
	$scope.isDisabled=true;
	$scope.stateEntityList=[];
	$scope.cityEntityList=[];
	$scope.TempCityList =[];
	$scope.supplierDto = {};
	
    FetchService.getAllCity().then(function(response){
		
	console.log("cityEntityList"+JSON.stringify(response));
	$scope.cityDtoList=response;
		
	});
    
    
    
    FetchService.getAllCountryAndStatesAndProject().then(function(response){
		
    	console.log("getAllCountryAndStatesAndProject"+JSON.stringify(response));
    	$scope.countryDtoList=response;
    		
   });
	
	
	$scope.saveSupplier = function(event, add_supplier) {	
		if ($scope.add_supplier.$valid) {
			
			InsertService.saveNewSupplier($scope.supplierDto).then(function(response)
	    			{
				if(response.status=='success')
					{
					
					
			    	   if($scope.supplierDto.id)
		    		   {
		    		   $scope.SuccessMsg = "Supplier Updated";
		    		   }
		    	   else
		    		   {
		    		   $scope.SuccessMsg = "Supplier Saved";
		    		   }
					
					swal(
							''+$scope.SuccessMsg,
		                     '',
		                     'success'
		                       ).then(function(isConfirm) {
		                   		if (isConfirm) {
		                   			location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"SuppliersManagement";
		                  		}
		                       });
					}
				else if(angular.isDefined(response.exceptionMessage)){
					swal(
							 response.exceptionMessage,
		                     '',
		                     'warning'
		                       )
				}

	    			});
			
			
			
		};
	}
	
	$scope.isInValidCountry=false;
	$scope.getStates = function(country){
		$scope.supplierDto.state = '';
		$scope.stateEntityList = '';
		$scope.loop=true;
		angular.forEach($scope.countryDtoList,function(value,key)
				{
			if($scope.loop)
				{
				if(value.countryName==country)
		    	 {
		    	  $scope.stateEntityList=$scope.countryDtoList[key].stateItem;
		    	  $scope.isInValidCountry=false;
		    	  $scope.loop=false;
		    	 }
				}
			 else
	    	 {
	    	 }
			     
				});
	}
	
	$scope.getCity = function(state,country){
		$scope.supplierDto.city = '';
		$scope.cityEntityList = '';
		angular.forEach($scope.countryDtoList,function(value,key)
				{
			     if(value.countryName==country)
			    	 {
			    	  $scope.TempCityList=$scope.countryDtoList[key].stateItem;
			    	  angular.forEach($scope.TempCityList,function(value,key){
			    		  if(value.stateName==state)
			    			  {
			    			  $scope.cityEntityList=$scope.TempCityList[key].cityItem;
			    			  }
			    	  });
			    	 }
				});		
	}
	
	
	FetchService.getAllSupplierDetails().then(function(response){
		
		$scope.supplier_master=response;
		
	});
	
	
	$scope.edit = function(supplier_details) {
		
		//$('<form action="edit_supplier" method="post"><input type="text" name="idd" value="'+supplier_details.id+'"></form>').appendTo('body').submit();
		
		$scope.editSupplier = true;
		$scope.supplierMgt = false;
		
		$scope.supplierDto = supplier_details;
		
			if($scope.supplierDto.country != null)
			{
				
				$timeout(function() {
					$('#country').val(supplier_details.country).trigger('change');
				}, 1);
				
				var stateName = supplier_details.state;
				
				var cityName = supplier_details.city;
				
				$scope.getStates(supplier_details.country);
				
				$scope.getCity(stateName,supplier_details.country);
				
				$scope.supplierDto.state = stateName;
				
				$scope.supplierDto.city = cityName;
				
			}
	}
	
	
	   $scope.view = function(supplier_details) {   	
	    	
	   	
	    	$("#myModal").modal('show');
	    	
	    	$scope.view_supplier_details = supplier_details;    	
	    	
	    	
	    }
	
	$scope.cancel=function()
	{
		location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"SuppliersManagement";
	}
	
	
	$scope.getState = function()
	{
		alert();
	}
	
	
    $scope.dtOptions = DTOptionsBuilder.newOptions()
	    .withDOM('<"top"lrf><"bottom"tip>')
	    .withButtons([            
	    	{extend: 'excel',
	        exportOptions: {
	           columns: ':visible:not(.not-export-col)'
	        }
	    	},
	    	{
	    	extend:'colvis'
	    	}
	]);	
	
    
	
	
	
});