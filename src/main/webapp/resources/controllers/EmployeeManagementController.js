ims.controller('employeeManagementController',function($scope,$http,InsertService,$filter,FetchService,$location,$timeout,DTOptionsBuilder,UrlConstants) {
	
	//$scope.employeeDto={"nationality":"INDIAN","subStatus":"WORKING","firstName":"SHANKAR","lastName":"KUMAR","gender":"TRANSGENDER","dateOfBirth":"29/07/1891","guardianName":"HUSBAND","husbandName":"RAMESH","religion":"HINDU","maritalStatus":"MARRIED","bloodGroup":"AB+","proof":"AADHAR CARD","drivingLicenseNumber":"","voterIdNumber":"","passportNumber":"","aadhaarNumber":"879878979798","panCardNumber":"FDSFS4343F","department":"ENGINEER","designation":"SUPERVISOR","dateOfJoin":"16/07/2018","confirmationDate":"16/07/2018","companyEmailId":"FSDF@GMAIL.COM","employeeId":"EMP102","mobileNumber":"8797897897","alternateMobileNumber":"9877897897","emailId":"FSDFS@GMAIL.COM","alternateEmailId":"SDFSD@GMAIL.COM","taddress1":"FSDFSFSDJF","isAddressSame":true,"paddress1":"FSDFSFSDJF","ppinCode":"789797","tstate":"TAMILNADU","tcity":"COVAI","pstate":"TAMILNADU","pcity":"COVAI","tpinCode":"789797"};
	$scope.employeeDto={};
	$scope.read=false;
	$scope.employeeDtoList=[];
	$scope.departmentDtoList=[];
	$scope.designationDtoList=[];
	$scope.idProofDtoList=[];
	$scope.idProofMasterEntityDtoList=[];
	$scope.stateEntityList=[];
	$scope.length="";
	$scope.EditView=false;
	$scope.EmployeeListView=true;
	$scope.employeeDetails={};
	//$scope.emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	$scope.firstletter='';
	$scope.secondletter='';
	$scope.panCardFormat = "[A-Z]{3}([CHFATBLJGP])(?:(?<=P)" + $scope.firstletter + "|(?<!P)" + $scope.secondletter + ")[0-9]{4}[A-Z]";
	$scope.showHusband=false;
	$scope.showFather=false;
	
	$scope.showaadhaar=true;
	$scope.showdrivingLicense=false;
	$scope.showvoterId=false;
	$scope.showpassportNumber=false;
	 $scope.proofRequired=false;
	 $scope.addedProofList=[];
	
	
	$scope.bloodGroupDtoList=["A+","O+","B+","AB+","A-","O-","B-","AB-"];
	
	
	
	
	
	$scope.employeeStatusList=["WORKING","RESIGNED"];
	
	$scope.religionDtoList=["HINDU","MUSLIM","CHRISTIAN","BUDDHISM","ISLAM","JAINISM","SIKHISM","ZOROASTRIAN","GURU NANAK DEV","LORD MAHAVIRA","ADI SHANKARACHARYA"];
	
	$scope.maritalStatusList=["MARRIED","UNMARRIED","DIVORCE","WIDOWED","SEPARATED"];
	
	$scope.employeeNewStatusList=["WORKING"];
    $scope.regex="^(A|B|AB|O)[+-]$";	
	
	$scope.saveEmployee=function(Employee)
	{
		var count=0;
		console.log("employee"+Employee);
		console.log("before validation"+JSON.stringify($scope.employeeDto));
		if(Employee)
			{
			$scope.employeeDto['idProofMasterDtoList']=$scope.addedProofList;
			
			if($scope.addedProofList.length===0)
				{
				 alert("please add proof details");
				 return false;
				}
			console.log("inside after validation"+JSON.stringify($scope.employeeDto));
			if(angular.isDefined($scope.employeeDto.id))
				{
				
                  InsertService.editEmployee($scope.employeeDto).then(function(response){
					
					if(response.status=='success')
						{
						swal(
							      'Employee Updated Successfully',
							      '',
							      'success'
							    ).then(function(isConfirm) {
			                  		if (isConfirm) {
			                  			location.href=UrlConstants.REDIRECTOFFICEADMINIMS_URL+"EmployeeManagement";
			                 		}
			                      });	
						}
					else if(angular.isDefined(response.exceptionMessage))
						{
						   swal(
							      'Not Saved!',
							      response.exceptionMessage,
							      'warning'
							    )
							    return false;
						}
				});
				}
			else{
				InsertService.saveNewEmployee($scope.employeeDto).then(function(response){
					
					if(response.status=='success')
						{
						swal(
							      'Employee Saved Successfully!',
							      '',
							      'success'
							    ).then(function(isConfirm) {
			                  		if (isConfirm) {
			                  			location.href=UrlConstants.REDIRECTOFFICEADMINIMS_URL+"EmployeeManagement";
			                 		}
			                      });	
						}
					else if(angular.isDefined(response.exceptionMessage))
						{
						   swal(
							      'Not Saved!',
							      response.exceptionMessage,
							      'warning'
							    )
							    return false;
						}
				});
			}
			}
	}
	
	
	$scope.editEmployee=function(employeeDto)
	{
		$scope.employeeDto={};
		console.log(employeeDto);
		$scope.EditView=true;
		$scope.EmployeeListView=false;
		$scope.employeeDto=employeeDto;
		
		console.log("before"+JSON.stringify($scope.employeeDto));
		
		$scope.getGuardian(employeeDto.guardianName);
		
		$scope.addedProofList=[];
		if(employeeDto.idProofMasterDtoList!=null)
			{
			angular.forEach(employeeDto.idProofMasterDtoList,function(value,key){
				
				if(value.selected && value.name=='AADHAR CARD')
					{
					 value.number=employeeDto.aadhaarNumber;
					 $scope.addedProofList.push(value);
					 $scope.showaadhaar=true;
					 $scope.showdrivingLicense=false;
					 $scope.showvoterId=false;
					 $scope.showpassportNumber=false;
					 
					}
				else if(value.selected && value.name=='DRIVING LICENSE')
					{
					 value.number=employeeDto.drivingLicenseNumber;
					 $scope.addedProofList.push(value);
					 $scope.showaadhaar=false;
					 $scope.showdrivingLicense=true;
					 $scope.showvoterId=false;
					 $scope.showpassportNumber=false;
					}
				else if(value.selected && value.name=='VOTER ID')
				{
					 value.number=employeeDto.voterIdNumber;
					 $scope.addedProofList.push(value);
					 $scope.showaadhaar=false;
					 $scope.showdrivingLicense=false;
					 $scope.showvoterId=true;
					 $scope.showpassportNumber=false;
				}
				else if(value.selected && value.name=='PASSPORT')
				{
					 value.number=employeeDto.passportNumber;
					 $scope.addedProofList.push(value);
					 $scope.showaadhaar=false;
					 $scope.showdrivingLicense=false;
					 $scope.showvoterId=false;
					 $scope.showpassportNumber=true;
				}
				
			});
			}
		if(employeeDto.tstate != null)
		{
			$scope.getCity(employeeDto.tstate);
			$scope.employeeDto.tcity = employeeDto.tcity;
		}
		
		if(employeeDto.pstate != null)
		{
			$scope.getCity(employeeDto.pstate);
			$scope.employeeDto.pcity = employeeDto.pcity;
		}
		

		console.log("after edit option"+JSON.stringify($scope.idProofDtoList));
		$scope.employeeDto.aadhaarNumber='';
		$scope.employeeDto.drivingLicenseNumber='';
		$scope.employeeDto.voterIdNumber='';
		$scope.employeeDto.passportNumber='';
		$scope.showaadhaar=false;
		$scope.showdrivingLicense=false;
		$scope.showvoterId=false;
		$scope.showpassportNumber=false;
		console.log("after"+JSON.stringify($scope.employeeDto));
	}
	
	
	
	
	FetchService.getAllDepartment().then(function(response){
		$scope.departmentDtoList=response;
	});
	
	FetchService.getDesignation().then(function(response)
			{
		$scope.designationDtoList=response;
			});
	
	
	FetchService.getAllEmployee().then(function(response){
		$scope.employeeDtoList=response;
		console.log("All Employee==>"+JSON.stringify($scope.employeeDtoList));
	});
	
	
	FetchService.getAllIdProofList().then(function(response){
		$scope.idProofDtoList=response;
	});
	
	 FetchService.getAllCountryAndStatesAndProject().then(function(response){
	    	$scope.countryDtoList=response;
	    	getAllStates();
	   });
	
	$scope.isCommunicationAddressSame=function(same)
	{
		console.log(same);
		if(same)
			{
			$scope.employeeDto.paddress1=$scope.employeeDto.taddress1;
			$scope.employeeDto.paddress2=$scope.employeeDto.taddress2;
			$scope.employeeDto.paddress3=$scope.employeeDto.taddress3;
			$scope.employeeDto.paddress4=$scope.employeeDto.taddress4;
			$timeout(function() {
				$('#pstate').val($scope.employeeDto.tstate).trigger('change');
			}, 1);
			$timeout(function() {
				$('#pcity').val($scope.employeeDto.tcity).trigger('change');
			}, 1);
			/*$scope.employeeDto.pstate=$scope.employeeDto.tstate;
			$scope.employeeDto.pcity=$scope.employeeDto.tcity;*/
			$scope.employeeDto.ppinCode=$scope.employeeDto.tpinCode;
			$scope.read=true;
			}
		else{
			$scope.employeeDto.paddress1='';
			$scope.employeeDto.paddress2='';
			$scope.employeeDto.paddress3='';
			$scope.employeeDto.paddress4='';
			$timeout(function() {
				$('#pstate').val(null).trigger('change');
				//$('#tstate').val(null).trigger('change');
				$('#pcity').val(null).trigger('change');
				//$('#tcity').val(null).trigger('change');
			}, 1);
			$scope.employeeDto.ppinCode='';
			$scope.read=false;
		}
	}
	
	function getAllStates()
	{
		console.log("getAllCountryAndStatesAndProject"+JSON.stringify($scope.countryDtoList));
		angular.forEach($scope.countryDtoList,function(value,key)
				{
				if(value.countryName=='INDIA')
		    	 {
		    	  $scope.stateEntityList=$scope.countryDtoList[key].stateItem;
		    	 }
				});
	}
	
	
	$scope.getCity=function(stateName)
	{
		console.log(stateName);
		//$scope.employeeDto.tcity="";
		//$scope.employeeDto.pcity="";
		//console.log($scope.countryDtoList);
		angular.forEach($scope.countryDtoList,function(value,key)
				{
			     if(value.countryName=='INDIA')
			    	 {
			    	  $scope.TempCityList=$scope.countryDtoList[key].stateItem;
			    	  angular.forEach($scope.TempCityList,function(value,key){
			    		  if(value.stateName==stateName)
			    			  {
			    			  $scope.cityEntityList=$scope.TempCityList[key].cityItem;
			    			  }
			    	  });
			    	 }
				});		
		console.log("cityList==>"+JSON.stringify($scope.cityEntityList));
	}
	
	
	$scope.getProofNumber=function(proof)
	{
		$scope.employeeDto.proofNumber="";
		if(proof=='AADHAR CARD')
			{
			$scope.length="12";
			}
		else if(proof=='DRIVING LICENSE')
			{
			$scope.length="16";
			}
		else if(proof=='VOTER ID')
		{
			$scope.length="10";
		}
		else if(proof=='PASSPORT')
		{
			$scope.length="8";
		}
	}
	
	$scope.editCancel=function()
	{
		/*$scope.EditView=false;
		$scope.EmployeeListView=true;
		$scope.addedProofList=[];
		*/
		location.href=UrlConstants.REDIRECTOFFICEADMINIMS_URL+"EmployeeManagement";
	}
	
	$scope.NewSavecancel=function()
	{
		location.href=UrlConstants.REDIRECTOFFICEADMINIMS_URL+"EmployeeManagement";
	}
	
	
	 $scope.viewEmployee = function(employee) {   	
	    	$("#myModal").modal('show');
	    	$scope.employeeDetails = employee;    	
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
	   
	    
	    
	    $scope.getGuardian=function(guardianName)
	    {
	    	if(guardianName=='FATHER')
	    		{
	    		$scope.employeeDto.husbandName='';
	    		$scope.showFather=true;
	    		$scope.showHusband=false;
	    		}
	    	else if(guardianName=='HUSBAND')
	    		{
	    		$scope.employeeDto.fatherName='';
	    		$scope.showHusband=true;
	    		$scope.showFather=false;
	    		}
	    }
	
	    $scope.checkAge=function(val)
		{
			var dateAr = val.split('/');
			var selected_date = dateAr[2] + '-' + dateAr[1] + '-' + dateAr[0].slice(-2);
			
			dob = new Date(selected_date);
			var today = new Date();
			var age = Math.floor((today-dob) / (365.25 * 24 * 60 * 60 * 1000));
			
			if(age <= 18)
				{
				swal(
					      '',
					      'Date of Birth should be above 18 years old',
					      'warning'
					    )
					    $scope.employeeDto.dateOfBirth='';
				}
		}
	
	    
	    $scope.getInputBoxByProof=function(flag,proofName)
	    {
	    	console.log("flag "+flag," proofName "+proofName);
	    	
	    	if(flag)
	    		{
	    		if(proofName=='AADHAR CARD')
	    			{
	    			$scope.showaadhaar=true;
	    			}
	    		else if(proofName=='DRIVING LICENSE')
	    			{
	    			$scope.showdrivingLicense=true;
	    			}
	    		else if(proofName=='VOTER ID')
    			{
	    			$scope.showvoterId=true;
    			}
	    		else if(proofName=='PASSPORT')
    			{
	    			$scope.showpassportNumber=true;
    			}
	    		}
	    	else{
	    		if(proofName=='AADHAR CARD')
    			{
    			$scope.showaadhaar=false;
    			$scope.employeeDto.aadhaarNumber='';
    			}
    		else if(proofName=='DRIVING LICENSE')
    			{
    			$scope.showdrivingLicense=false;
    			$scope.employeeDto.drivingLicenseNumber='';
    			}
    		else if(proofName=='VOTER ID')
			{
    			$scope.showvoterId=false;
    			$scope.employeeDto.voterIdNumber='';
			}
    		else if(proofName=='PASSPORT')
			{
    			$scope.showpassportNumber=false;
    			$scope.employeeDto.passportNumber='';
			}
	    	}
	    	if(flag)
	    		{
	    		angular.forEach($scope.idProofDtoList,function(value,key){
		    		
		    		if(value.name==proofName)
		    			{
		    			$scope.idProofMasterEntityDtoList.push(value);
		    			$scope.proofRequired=false;
		    			}
		    	});
	    		}
	    	else{
                   angular.forEach($scope.idProofDtoList,function(value,key){
		    		if(value.name==proofName)
		    			{
		    			$scope.idProofMasterEntityDtoList.splice(key,1);
		    			}
	    	});
	    	}
	    	console.log("added proof==>"+JSON.stringify($scope.idProofMasterEntityDtoList));
	    }
	    
	    
	    /*$scope.isChecked=function(proofObject)
	    {
	    	$scope.loop=true;
	    	console.log("running is checked==>"+JSON.stringify(proofObject));
	    	angular.forEach($scope.idProofMasterEntityDtoList,function(value,key){
	    		if(value.id==proofObject.id)
	    			{
	    			console.log("running inside==>"+JSON.stringify(proofObject));
	    			$scope.loop=false;
	    			return true;
	    			}
	    	});
	    	console.log("running outside==>"+JSON.stringify(proofObject));
	    	return false;
	    }*/
	
	    
	    $scope.AddProof=function(proof,proofValid)
	    {
	    	var number='';
	    	if(proof)
	    		{
	    		 if(proof=='AADHAR CARD' &&  proofValid)
	    			 {
	    			 number=$scope.employeeDto.aadhaarNumber;
	    			 addEmployeeProofInList(proof,number);
	    			 }
	    		 else if(proof=='DRIVING LICENSE' &&  proofValid)
	    			 {
	    			 number=$scope.employeeDto.drivingLicenseNumber;
	    			 addEmployeeProofInList(proof,number);
	    			 }
	    		 else if(proof=='VOTER ID' &&  proofValid)
    			 {
	    			 number=$scope.employeeDto.voterIdNumber;
	    			 addEmployeeProofInList(proof,number);
    			 }
	    		 else if(proof=='PASSPORT' &&  proofValid)
    			 {
	    			 number=$scope.employeeDto.passportNumber;
	    			 addEmployeeProofInList(proof,number);
    			 }
	    		}
	    }
	    
	    
	    $scope.AddProofEdit=function(proof,proofValid)
	    {
	    	var number='';
	    	if(proof)
	    		{
	    		 if(proof=='AADHAR CARD' &&  proofValid)
	    			 {
	    			 number=$scope.employeeDto.aadhaarNumber;
	    			 addEmployeeProofInList(proof,number);
	    			 }
	    		 else if(proof=='DRIVING LICENSE' &&  proofValid)
	    			 {
	    			 number=$scope.employeeDto.drivingLicenseNumber;
	    			 addEmployeeProofInList(proof,number);
	    			 }
	    		 else if(proof=='VOTER ID' &&  proofValid)
    			 {
	    			 number=$scope.employeeDto.voterIdNumber;
	    			 addEmployeeProofInList(proof,number);
    			 }
	    		 else if(proof=='PASSPORT' &&  proofValid)
    			 {
	    			 number=$scope.employeeDto.passportNumber;
	    			 addEmployeeProofInList(proof,number);
    			 }
	    		}
	    }
	
	    $scope.removeRow=function(id)
	    {
	    	angular.forEach($scope.addedProofList,function(value,key){
	    		
	    		if(value.id==id)
	    			{
	    			$scope.addedProofList.splice(key,1);
	    			}
	    	});
	    }
	    
	    $scope.showaadhaar=false;
		$scope.showdrivingLicense=false;
		$scope.showvoterId=false;
		$scope.showpassportNumber=false;
	    $scope.applyProofCondition=function(selectedProof)
	    {
	    	 if(selectedProof=='AADHAR CARD')
			 {
	         $scope.showaadhaar=true;
	         $scope.showdrivingLicense=false;
	 		 $scope.showvoterId=false;
	 		 $scope.showpassportNumber=false;
			 $scope.employeeDto.drivingLicenseNumber='';
			 $scope.employeeDto.voterIdNumber='';
			 $scope.employeeDto.passportNumber='';
			 }
		 else if(selectedProof=='DRIVING LICENSE')
			 {
			     $scope.showaadhaar=false;
		         $scope.showdrivingLicense=true;
		 		 $scope.showvoterId=false;
		 		 $scope.showpassportNumber=false;
			 $scope.employeeDto.aadhaarNumber='';
			 $scope.employeeDto.voterIdNumber='';
			 $scope.employeeDto.passportNumber='';
			 }
		 else if(selectedProof=='VOTER ID')
		 {
			 $scope.showaadhaar=false;
	         $scope.showdrivingLicense=false;
	 		 $scope.showvoterId=true;
	 		 $scope.showpassportNumber=false;
			 $scope.employeeDto.drivingLicenseNumber='';
			 $scope.employeeDto.aadhaarNumber='';
			 $scope.employeeDto.passportNumber='';
		 }
		 else if(selectedProof=='PASSPORT')
		 {
			 $scope.showaadhaar=false;
	         $scope.showdrivingLicense=false;
	 		 $scope.showvoterId=false;
	 		 $scope.showpassportNumber=true;
			 $scope.employeeDto.drivingLicenseNumber='';
			 $scope.employeeDto.aadhaarNumber='';
			 $scope.employeeDto.voterIdNumber='';
		 }
	    }
	
	    
	    function addEmployeeProofInList(proof,number)
	    {
	    	var count=0;
	    	 if($scope.addedProofList.length===0)
			 {
			 angular.forEach($scope.idProofDtoList,function(value,key){
		    		if(value.name==proof)
		    			{
		    			value.number=number;
		    			value.selected=true;
		    			$scope.addedProofList.push(value);
		    			}
		    	});
			 }
		 else {
			 angular.forEach($scope.addedProofList,function(value,key){
				 if(value.name==proof)
					 {
					  count++;
					 }
			 });
			 if(count==0)
				 {
				 angular.forEach($scope.idProofDtoList,function(value,key){
			    		if(value.name==proof)
			    			{
			    			value.number=number;
			    			value.selected=true;
			    			$scope.addedProofList.push(value);
			    			}
			    	});
				 count=0;
				 }
			 else{
				 swal(
					      '',
					      'Already Added',
					      'warning'
					    )
			 }
		 }
	    }
	    
});