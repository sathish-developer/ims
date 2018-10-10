ims.controller('ReportsController', function($scope,$http,InsertService,FetchService,DTOptionsBuilder,$filter) { 
	
	$scope.stock_report_view = false;
	$scope.scrap_view = false;  
	$scope.tools_Request_view = false;
	$scope.Inventory_Service = false;
	$scope.ELCB = false;
	$scope.Workmen_details = false;
	
	$scope.reportDto ={};  
	
	$scope.reportDtoList=[];
	
	
	$scope.search = function(reportsDto)
	{
		if ($scope.reportForm.$valid) 
		{
		
		console.log("reports"+JSON.stringify($scope.reportDto));
		
			FetchService.getReport($scope.reportDto).then(function(response){
				
				
				if($scope.reportDto.reportMenu == "INVENTORY DETAILS")
					{
					
					$scope.scrap_view = false;  
					$scope.tools_Request_view = false;
					$scope.Inventory_Service = false;
					$scope.ELCB = false;
					$scope.Workmen_details = false;
					$scope.stock_report_view= true;
					}
				if($scope.reportDto.reportMenu == "INVENTORY SCRAP")
				{
					$scope.stock_report_view = false;
					
					$scope.tools_Request_view = false;
					$scope.Inventory_Service = false;
					$scope.ELCB = false;
					$scope.Workmen_details = false;
				$scope.scrap_view = true;
				}
				if($scope.reportDto.reportMenu == "INVENTORY REQUESTS")
				{
					$scope.stock_report_view = false;
					$scope.scrap_view = false;  
					
					$scope.Inventory_Service = false;
					$scope.ELCB = false;
					$scope.Workmen_details = false;
				$scope.tools_Request_view = true;
				}
				if($scope.reportDto.reportMenu == "INVENTORY SERVICE")
				{
					$scope.stock_report_view = false;
					$scope.scrap_view = false;  
					$scope.tools_Request_view = false;
					
					$scope.ELCB = false;
					$scope.Workmen_details = false;
				$scope.Inventory_Service = true;
				}
				if($scope.reportDto.reportMenu == "ELCB")
				{
					$scope.stock_report_view = false;
					$scope.scrap_view = false;  
					$scope.tools_Request_view = false;
					$scope.Inventory_Service = false;
					
					$scope.Workmen_details = false;
				$scope.ELCB = true;
				}
				if($scope.reportDto.reportMenu == "WORKMEN DETAILS")
				{
					$scope.stock_report_view = false;
					$scope.scrap_view = false;  
					$scope.tools_Request_view = false;
					$scope.Inventory_Service = false;
					$scope.ELCB = false;
					
				$scope.Workmen_details = true;
				}
				
				
	    		console.log("ReportsList"+JSON.stringify(response));
	    		$scope.reportDtoList=response;
	    		
	    	
		});
	}
	}
		
		
		
    $scope.dtOptions = DTOptionsBuilder.newOptions()
    .withDOM('<"top"lrf><"bottom"tip>')
    .withButtons([            
    	{extend:'excel',text:'EXCEL'}
]);	
    	
	
    
    $scope.validateToDate = function()
	{
    	
    	var dateAr = $scope.reportDto.fromDate.split('-');
    	var startDate = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0].slice(-2);
    	
    	var dateAr1 = $scope.reportDto.toDate.split('-');
    	var endDate = dateAr1[2] + '-' + dateAr1[1] + '-' + dateAr1[0].slice(-2);
	
//		var startDate =   $filter('date')($scope.reportDto.fromDate, "dd-mm-yyyy");
//		var endDate =   $filter('date')($scope.reportDto.toDate, "dd-mm-yyyy");
		
	
		
		if(startDate > endDate)
			{
			$scope.reportDto.toDate="";
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

	
});