ims.controller('categoryManagementController',function($scope,$http,InsertService,FetchService,DTOptionsBuilder,$location,UrlConstants) {
	
	$scope.CategoryMgt = true;
	$scope.categoryDto={};
	$scope.catgoryDtoList=[];
	$scope.categoryDto.status = "ACTIVE";
	
	/*$scope.activeWareHouseList=[];*/
	
	
	
     FetchService.getAllCategoryList().then(function(response){
		
		$scope.categoryDtoList=response;
	});
	
    FetchService.getAllActiveWareHouse().then(function(response){
		
		$scope.activeWareHouseList=response;
	});
	
	
	
	
	
	/*$scope.edit = function(categoryDto) {
		var req = {id : categoryDto.id};		
		$('<form action="editCategory" method="post"><input type="text" name="id" value="'+categoryDto.id+'"></form>').appendTo('body').submit();
	}*/
	
	
	/*FOR SAVE THE CATEGORY*/
	$scope.saveCategory=function() 
	{
		if($scope.new_category.$valid||$scope.editcategory.$valid)
			{
		InsertService.saveCategory($scope.categoryDto).then(function(response)
				{
			       if(response.status=="success")
			    	   {
			    	   
			    	   
			    	   if($scope.categoryDto.id)
		    		   {
		    		   $scope.SuccessMsg = "Category Updated";
		    		   }
		    	   else
		    		   {
		    		   $scope.SuccessMsg = "Category Saved";
		    		   }
			    	   
			    	   
			    	   swal(
			    			     ''+$scope.SuccessMsg,
			                     '',
			                     'success'
								 ).then(function(isConfirm) {
			                  		if (isConfirm) {
			                  		location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"CategoryManagement";	
			                 		}
			                      });
			    	   
			    	   }else if(angular.isDefined(response.exceptionMessage))
			    	   {
					    	 swal(
								      'Not Saved!',
								      response.exceptionMessage,
								      'warning'
								    )
					    	}
				});
	}
	}
	
	
var absurl = $location.absUrl();

	
	$scope.cancel=function()
	{
		if(absurl == UrlConstants.REDIRECTOFFICEADMINIMS_URL+CURRENT_PAGENAME)
		{
			location.href=UrlConstants.REDIRECTOFFICEADMINIMS_URL+"CategoryManagement";
		}
		else if(absurl == UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+CURRENT_PAGENAME)
		{
			location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"CategoryManagement";
		}
		else
		{
			location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"CategoryManagement";
		}		
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
	
	 
	 $scope.view = function(inventoryManagementDto) {   	
	    	$("#myModal").modal('show');
	    	$scope.inventoryManagementDetailsDto = inventoryManagementDto;    	
	    	
	    	
	    }

	 $scope.edit = function(Category_details)
		{
		 console.log(JSON.stringify(Category_details));
		 
			$scope.CategoryMgt = false;
			$scope.editCategory= true;
			$scope.addnewCategory= false;
			$scope.categoryDto = Category_details;
		}
		$scope.newCategory= function()
		{
			$scope.categoryDto={};
			$scope.CategoryMgt = false;
			$scope.editCategory = false;
			$scope.addnewCategory = true;
			
	 
		}
		
	 
	 
	 
	
});