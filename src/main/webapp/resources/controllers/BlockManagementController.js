ims.controller('BlockManagementController', function($scope, $http, TestService, $window, FetchService,InsertService,DTOptionsBuilder,$location,UrlConstants,$timeout) {


	var absurl = $location.absUrl();
	
	$scope.BlockMgt = true;
	
	$scope.blockDtoMaster = [];

	
	$scope.test=[];
	function getAllWareHouseBlocks()
	{
		FetchService.getAllWareHouseBlocks().then(function(response) {
			
			$scope.blockDtoMaster = response;
			console.log(JSON.stringify(response));
			
			
			angular.forEach($scope.blockDtoMaster,function(value,key){
				if(value.wareHouseBlocksDto)
					{
					angular.forEach(value.wareHouseBlocksDto,function(v,k){
						var obj={
								id:value.id,
								wareHouseName:value.wareHouseName,
								blockNames:v.blocksNames,
								code:v.code,
								status:v.status,
						}
						$scope.test.push(obj);
					});
					
					}
			});
			console.log("test===>"+JSON.stringify($scope.test));
		});
		
		
		
		
	}
	
	
	        if(absurl == UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+CURRENT_PAGENAME)
			{
	        	getAllUserWareHouseBlock();
			}
	        else
	        	{
	        	getAllWareHouseBlocks();
	        	}
	
	
	function getAllUserWareHouseBlock()
	{
	
		FetchService.getAllUserWareHouseBlock().then(function(response) {
			
			$scope.blockDtoMaster = response;
			console.log(JSON.stringify(response));
			
		});
	
	}

	FetchService.getCurrentUserWareHouseDropDown().then(function(response){
		$scope.activeWareHouseList=response;
	});
	
	
	$scope.saveBlock = function()
	{
		if($scope.addBlock.$valid)
			{
			InsertService.saveBlock($scope.blockDto).then(function(response)
					{
				if(response.status == 'success')
				{
					
			    	   if($scope.blockDto.id)
		    		   {
		    		   $scope.SuccessMsg = "Block Updated";
		    		   }
		    	   else
		    		   {
		    		   $scope.SuccessMsg = "Block Saved";
		    		   }
					
					 swal(
					''+$scope.SuccessMsg,
                     '',
                     'success'
					 ).then(function(isConfirm) {
                  		if (isConfirm) {
                  			location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"BlockManagement";
                 		}
                      });
				}
			else
				{
	 		  		swal(
						''+response.exceptionMessage+'',
	                    '',
	                    'warning'
		 		  	  )
				}
					});
			
			}
	}
	
	
	$scope.edit = function(block_details)
	{
		
		$scope.BlockMgt = false;
		$scope.editBlock = true;
		$scope.blockDto = {
				"id":block_details.wareHouseBlocksDto[0].id,
				"blocksNames":block_details.wareHouseBlocksDto[0].blocksNames,
				"code":block_details.wareHouseBlocksDto[0].code,
				"status":block_details.wareHouseBlocksDto[0].status,
				"wareHouseDto":{"wareHouseName":block_details.wareHouseName},
				};
		
		$timeout(function() {
			$('#wareHouseName').val($scope.blockDto.wareHouseDto.wareHouseName).trigger('change');
		}, 1);
	}
		
		
	
	$scope.cancel = function()
	{
        if(absurl == UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+CURRENT_PAGENAME)
		{
        	getAllUserWareHouseBlock();
		}
        else
        	{
        	getAllWareHouseBlocks();
        	}
		$scope.BlockMgt = true;
		$scope.editBlock = false;
	}
	
	$scope.back = function()
	{
		location.href=UrlConstants.REDIRECTWAREHOUSEADMINIMS_URL+"BlockManagement";
	}
	
	
	 $scope.view = function(blockManagementDto) {   	
	    	$("#myModal").modal('show');
	    	$scope.blockManagementDetails = blockManagementDto;    	
	    }
	 
	 $scope.view1 = function(blockManagementDto) {   	
	    	$("#myModal1").modal('show');
	    	$scope.blockManagementDetails = blockManagementDto;    	
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