var CURRENT_PAGENAME = document.location.href.match(/[^=\/]+$/)[0];

//local
var IPADDRESS = "http://localhost:8080";


//Server
//var IPADDRESS = "http://imstest.spanengineers.co.in";

//var PORT = "8080";

var PROJECTNAME = "ims";

var IMS_URL = IPADDRESS+"/"+PROJECTNAME+"/";

ims.constant('UrlConstants',
{
	
	REDIRECTPREFIXIMS_URL : IMS_URL+"common?link=",
	
	REDIRECTOFFICEADMINIMS_URL : IMS_URL+"officeAdmin?link=",
	
	REDIRECTWAREHOUSEADMINIMS_URL : IMS_URL+"wareHouseAdmin?link=",
	
	GETALLSUPPLIERS : IMS_URL + "GetAllSuppliers.json",
	
	GETALLINVENTORY : IMS_URL + "getAllInventoryManagement.json",	
	
	GETALLTYPE : IMS_URL + "getAllTypes.json",
	
	GETALLCATEGORYTYPE : IMS_URL + "getAllCategoryTypes.json",

	GETSUBCATEGORYBYCATEGOTY : IMS_URL + "getSubCategoryByCategory.json?categoryType=",	

	GETALLPROJECT : IMS_URL + "getAllProject.json",	
	
	GETALLPROJECTTYPELIST : IMS_URL + "getAllProjectType.json",
	
	GETALLPROJECTDTOLIST : IMS_URL + "getAllProjectDtoList.json",
	
	GETALLWAREHOUSEDTOLIST : IMS_URL + "getAllWareHouseDtoList.json",
	
	GETALLACTIVEWAREHOUSE : IMS_URL + "getAllActiveWareHouse.json",
	
	GETALLACTIVEMANUFACTURER : IMS_URL + "getAllActiveManufacturer.json",
	
	GETALLSCRAP : IMS_URL + "GetAllScrap.json",
	
	GETALLMANUFACTURERDTOLIST : IMS_URL + "getAllManufacturerDtoList.json",
	
	GETALLCATEGORYDTOLIST : IMS_URL + "getAllCategoryDtoList.json",
	
	GETALLTOOLS : IMS_URL + "getAllTools.json",
	
	GETALLTOOLSFORSCRAP : IMS_URL + "GetAllToolsforScrap.json",
	
	GETALLCOUNTRYANDSTATEANDPROJECT : IMS_URL + "getAllCountryAndStatesAndProject.json",

	GETALLROLES : IMS_URL + "getAllRoles.json",
	
	GETALLUSERS : IMS_URL + "getAllUsers.json",
	
	GETALLCITY : IMS_URL + "getAllCity.json",
	
	GETALLCOUNTRY : IMS_URL + "getAllCountry.json",
	
	GETALLSTATE : IMS_URL + "getAllState.json",
	
	GETALLTOOLSLIST : IMS_URL + "getAllToolsList.json",
	
	GETCURRENTUSERPROJECTDROPDOWN : IMS_URL + "getCurrentUserProjectDropDown.json",
	
	GETCURRENTUSERNONCLOSEDPROJECTDROPDOWN : IMS_URL + "getcurrentusernonclosedprojectdropdown.json",
	
	GETCURRENTUSERWAREHOUSEDROPDOWN : IMS_URL + "getCurrentUserWareHouseDropDown.json",
	
	GETUSERTOOLSREQUEST : IMS_URL + "getUserToolsRequest.json",

	GETCURRENTUSERINVENTORYASSIGN : IMS_URL + "getCurrentUserInventoryAssign.json",
	
	GETMOVEREQUESTNOTIFICATIONS : IMS_URL + "getMoveRequestNotifications.json",
	
	GETALLSECRETQUESTIONS : IMS_URL + "getAllSecretQuestions.json",
	
	GETCURRENTUSERPAGES : IMS_URL + "getCurrentUserPages.json",
	
	GETDESIGNATION : IMS_URL + "getDesignation.json",
	
	GETPROFILEDETAILS : IMS_URL + "getProfileDetails.json",
	
	SAVEINVENTORYMANAGEMENT : IMS_URL + "saveInventoryManagement.json",
	
	EDITINVENTORYMANAGEMENT : IMS_URL + "editInventoryManagement.json",

	SAVEPROJECT : IMS_URL + "saveProject.json",
	
	SAVEPROJECTSTATUS : IMS_URL + "saveProjectStatus.json",
	SAVEWAREHOUSE : IMS_URL + "saveWareHouse.json",
	
	ADDSUPPLIER : IMS_URL + "AddSupplier.json",
	
	EDITSCRAP : IMS_URL + "EditScrap.json",
	
	FORGOTPASSWORDDETAILS : IMS_URL + "ForgotPasswordDetails.json",
	
	SAVEMANUFACTURER : IMS_URL + "saveManufacturer.json",
	
	SAVECATEGORY : IMS_URL + "saveCategory.json",
	
	SAVETOOLSREQUEST : IMS_URL + "saveToolsRequest.json",
	
	SAVEACCEPTTOOLSREQUEST : IMS_URL + "saveAcceptToolsRequest.json",
	
	SAVEBULKREQUEST : IMS_URL + "saveBulkRequest.json",
	
	SAVEMOVESCRAP : IMS_URL + "EditScrap.json",
	
	SAVEUSER : IMS_URL + "saveUser.json",
	
	MOVEINVENTORY : IMS_URL + "moveInventory.json",
	
	CONFIRMMOVEINVENTORY : IMS_URL + "confirmMoveInventory.json",
	
	CHANGEPASSWORD : IMS_URL + "ChangePassword.json",
	
	UPDATEUSERPROFILE : IMS_URL + "updateUserProfile.json",
	
	GETALLACTIVEPROJECTTYPES : IMS_URL + "getAllActiveProjectTypes.json",
	
	GETALLINVENTORYCOUNTFROMALLPROJECT:IMS_URL+"getInventoryCountFromAllProject.json",	
	
	GETALLSUBCATEGORY:IMS_URL+"SubCategoryManagement.json",
	
	SAVESUBCATEGORY : IMS_URL + "saveSubCategory.json",
	
	ASSIGNINVENTORY : IMS_URL + "AssignInventory.json",
	
	GETALLINVENTORYMGMTFROMSTOCKFORASSIGN : IMS_URL + "getAllInventoryManagementFromStockForAssign.json",

	GETALLWORKSMENCATEGORY : IMS_URL + "getAllWorksmenCategory.json",
	
	SAVEWORKSMEN : IMS_URL + "saveWorksMenDetails.json",
	
	GETALLELCB : IMS_URL + "getAllELCB.json",
	
	SAVEELCB : IMS_URL + "saveelcb.json",
	
	SAVEWORKSMENCATEGORY : IMS_URL + "saveWorksMenCategory.json",
	SAVEPROJECTTYPE : IMS_URL + "saveProjectType.json",
	
	GETALLSAFETYSTATUS : IMS_URL + "getAllSafetyStatus.json",
	
	SAVEBLOCK : IMS_URL + "saveBlock.json",
	
	GETALLWAREHOUSEBLOCK : IMS_URL + "getAllWareHouseBlock.json", 
	GETALLPROJECTSTATUSLIST : IMS_URL + "getAllProjectStatus.json",
	GETALLWORKSMENDETAILS : IMS_URL + "getAllWorksmenDetails.json",
	
	GETINVENTORYCOUNTFROMSPECIFICUSERPROJECT : IMS_URL + "getInventoryCountFromSpecificUserProject.json",
	
	GETINVENTORYCOUNTFORWAREHOUSEADMINISTRATOR : IMS_URL + "getInventoryCountForSpecificWareHouseAdministrator.json",
	
	GETINVENTORYCOUNTFOROFFICEADMINISTRATORFROMSTOCK : IMS_URL +"getInventoryCountForOfficeAdministratorFromStock.json",
	
	GETINVENTORYCOUNTFOROFFICEADMINISTRATORFROMASSIGN : IMS_URL +"getInventoryCountForOfficeAdministratorFromAssign.json",
	
	GETWAREHOUSEBLOCKSBYWAREHOUSENAME : IMS_URL +"getAllWareHouseBlocksByWareHouseName.json",
	
	GETREPORT : IMS_URL + "getReport.json",
	
	GETALLHISTORYOFTASK : IMS_URL + "getallhistoryoftask.json",
	
	GETALLMYREQUEST : IMS_URL + "getAllMyRequest.json",
	
	GETACTIVEPROJECT_STATUS : IMS_URL+"getAllActiveProjectStatus.json",
	
	SAVESTATE : IMS_URL+"saveState.json",
	
	SAVECITY : IMS_URL+"saveCity.json",

	GETPASSWORDRULES : IMS_URL+"getPasswordRules.json",
	
	SAVENEWEMPLOYEE:IMS_URL+"saveNewEmployee.json",
	
	EDITEMPLOYEE:IMS_URL+"editEmployee.json",
	
	GETALLDELIVERYCHALLAN:IMS_URL+"getAllDeliveryChallan.json",
	
	GETALLEMPLOYEE: IMS_URL+"getAllEmployee.json",
	
	GETALLDEPARTMENT: IMS_URL+"getAllDepartment.json",
	
	GETALLIDPROOFLIST: IMS_URL+"getAllIdProofList.json",
	
	ADDINVENTORYINDISPATCH: IMS_URL+"addInventoryInDispatch.json",
	
	GETALLDISPATCHLOG: IMS_URL+"getAllDispatchLog.json",
	
	GETALLDISPATCHLOGBYCOUNT: IMS_URL+"getDispatchLogByCount.json",
	
	GETDISPATCHLOGBYSITENAME: IMS_URL+"getDispatchLogBySiteName.json",
	
	GETDISPATCHLOGBYREQUESTEDTO: IMS_URL+"getDispatchLogByRequestedTo.json",

	GENERATECHALLENNO: IMS_URL+"generateChallanNo.json",
	
	ACCEPTINVENTORYFROMWAREHOUSEORPROJECTSITE:IMS_URL+"acceptInventoryFromWarehouseorProjectSite.json",
	
	GETINVENTORYASSIGNBYCHALLANNO: IMS_URL+"getInventoryAssignByChallanNo.json",
	
	GETALLINSPECTIONDETAILS: IMS_URL+"getAllInspectionDetails.json",
	
	VERIFYINSPECTION : IMS_URL+"verifyInspection.json",
	
	APPROVEINSPECTION : IMS_URL+"approveInspection.json",
	
	SAVEUSERTHEME:IMS_URL+"saveUserTheme.json",
	
	SAVEDEPARTMENT:IMS_URL+"saveDepartment.json",
	
	SAVEDESIGNATION:IMS_URL+"saveDesignation.json",
	
	SAVESAFETYSTATUS:IMS_URL+"saveSafetyStatus.json",
	
	GETALLUSERWAREHOUSEBLOCK:IMS_URL+"getAllUserWareHouseBlock.json",
	
	GETALLSERVICE:IMS_URL+"getAllService.json",
	
	GETINVENTORYASSIGNBYID: IMS_URL+"getInventoryAssignById",
	
	GETALLEMPLOYEEID: IMS_URL+"getAllEmployeeId.json",

	GETALLSCRAPINSPECTION: IMS_URL+"getAllScrapInspection.json",
	
	GETALLSERVICEINSPECTION: IMS_URL+"getAllServiceInspection.json",

	VERIFYANDAPPROVESCRAPINSPECTION : IMS_URL+"VerifyandApproveScrapInspection.json",
	
	VERIFYANDAPPROVESERVICEINSPECTION : IMS_URL+"VerifyandApproveServiceInspection.json",
	
	GETNOTIFICATIONDATA : IMS_URL+"getNotificationData.json",
	
	UPDATENOTFICATIONSTATUS:IMS_URL+"updateNotificationStatus.json",
	
	GETALLUSERSCRAP: IMS_URL+"getAllUserScrap.json",
	
	GETALLWAREHOUSESCRAP: IMS_URL+"getAllWarehouseScrap.json",
	
	USERACTIVE: IMS_URL+"userActive.json",
	
	GETLASTONEMONTHUSERELCBSTATUS: IMS_URL+"getLastOneMonthUserElcbStatus.json",
	
	GETLASTONEMONTHOFFICEELCBSTATUS: IMS_URL+"getLastOneMonthOfficeElcbStatus.json",
	
	GETSERVICEDUEDATEUSER: IMS_URL+"getServiceDueDateUser.json",
	
	GETSERVICEDUEDATEWAREHOUSE: IMS_URL+"getServiceDueDateWareHouse.json",
	
	GETALLSERVICEDUEDATE: IMS_URL+"getAllServiceDueDate.json",
	
	MOVEINVENTORYFORWAREHOUSEADMIN :IMS_URL+"moveInventoryForWarehouseAdmin.json",
	
});