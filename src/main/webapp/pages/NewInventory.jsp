- <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
    <%@ page isELIgnored="false" %>
<jsp:include page="header.jsp" />



            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid user-top" data-ng-controller="inventoryManagementController">
                <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <div class="row page-titles">
                    <div class="col-md-5 align-self-center">
                        <h3 class="text-themecolor">INVENTORY MANAGEMENT</h3>
                    </div>


                </div>
                <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- Row -->
					<div class="form_section">
							<div class="form-content create_form">
								<h4 class="form_content_title">Create New Inventory</h4>
								<form class="form-inline" name="NewInventory" id="NewInventory" novalidate>
								<div class="row">
									<div class="col-md-6 col_md text-center">
										<div class="add_icon_asterisk">
											<label for="email">Category Type</label>
											 <div class="new-select-option">
								             <select name="categoryType" id="categoryType"
									data-ng-model="inventoryManagementDto.categoryType"
									data-ng-change="getSubCategoryByCategory(inventoryManagementDto.categoryType)"
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									<option value="" selected></option>
									<option
										data-ng-repeat="x in categoryMasterDtoList track by x.categoryType" data-ng-if="x.status=='ACTIVE'"
										value="{{x.categoryType}}">{{x.categoryType}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											<!-- <input
											list="category" class="form-control" 
											id="category_List"  data-ng-readonly="datareadonly" required
											data-ng-model="inventoryManagementDto.categoryType" name="categoryType" data-ng-blur="getSubCategoryByCategory(inventoryManagementDto.categoryType)" autocomplete="off"  >
											<i class="fa fa-asterisk" ></i>
										<datalist id="category">
											<option
												data-ng-repeat="x in categoryMasterDtoList track by x.categoryType"
												value="{{x.categoryType}}">{{x.categoryType}}</option>
										</datalist> -->
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.categoryType.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.categoryType.$error.required" class="error_msg">Please choose CategoryType</div>
					                  </div>
					                  
					                  
					                  
					                  
					                  <span class=""  data-ng-if="inventoryManagementDto.categoryType==='VEHICLE'">
					                    <div class="add_icon_asterisk">
											<label for="pwd">Make Name </label>
											<input type="text" class="form-control" id="makeName" name="makeName" data-ng-model="inventoryManagementDto.makeName" autocomplete="off" required="mandatory" >
											<i class="fa fa-asterisk" ></i>
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.makeName.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.makeName.$error.required" class="error_msg">Please enter makeName</div>
					                    </div>
					                    
					                    <div class="add_icon_asterisk" >
											<label for="pwd">model Name </label>
											<input type="text" class="form-control" id="modelName" name="modelName" data-ng-model="inventoryManagementDto.modelName" autocomplete="off"  required="mandatory">
											<i class="fa fa-asterisk" ></i>
										 </div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.modelName.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.modelName.$error.required" class="error_msg">Please enter model Name</div>
					                    </div>
					                   
					                    <div class="add_icon_asterisk" >
											<label for="pwd">vehicle Number </label>
											<input type="text" class="form-control" id="vehicleNumber" name="vehicleNumber" data-ng-model="inventoryManagementDto.vehicleNumber"  autocomplete="off" required="mandatory">
											<i class="fa fa-asterisk" ></i>
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.vehicleNumber.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.vehicleNumber.$error.required" class="error_msg">Please enter vehicle Number</div>
					                    </div>
					                  	
					                  	</span>
					                  	
					                  	<div class="add_icon_asterisk">
											<label for="email">Type</label>
											 <div class="new-select-option">
								             <select name="type" id="address1"
									data-ng-model="inventoryManagementDto.type"
									
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									 <option value="" selected></option> 
									<option
										data-ng-repeat="x in typeDtoList track by x.type" 
										value="{{x.type}}">{{x.type}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											
										</div>
										
										<div data-ng-show="NewInventory.$submitted || NewInventory.type.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.type.$error.required" class="error_msg">Please choose type</div>
					                  </div>
					                  	
										<div class="add_icon_asterisk">
											<label for="pwd">Sub Category</label>
											 <div class="new-select-option">
								             <select name="subCategory" id="subCategory"
									data-ng-model="inventoryManagementDto.subCategory"
									data-ng-change="getModelBySubCategoryName(inventoryManagementDto.subCategory)"
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									 <option></option> 
									<option
										data-ng-repeat="x in subCategoryMasterDtoList track by x.subCategory" data-ng-if="x.status=='ACTIVE'"
										value="{{x.subCategory}}">{{x.subCategory}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											
											
											
											<!--  <input
											list="subCategory" class="form-control" 
											id="subCategory_List"  data-ng-readonly="datareadonly" required
											data-ng-model="inventoryManagementDto.subCategory" name="subCategory" data-ng-blur="getModelBySubCategoryName(inventoryManagementDto.subCategory)" autocomplete="off">
											<i class="fa fa-asterisk" ></i>
										<datalist id="subCategory">
											<option
												data-ng-repeat="x in subCategoryMasterDtoList track by x.subCategory"
												value="{{x.subCategory}}">{{x.subCategory}}</option>
										</datalist> -->
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.subCategory.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.subCategory.$error.required" class="error_msg">Please choose subCategoryType</div>
					                  </div>
										<div class="add_icon_asterisk">
											<label for="pwd">Model Code </label>
											<input type="text" class="form-control" id="address1" name="modelCode" data-ng-model="inventoryManagementDto.modelCode" readonly>
											<i class="fa fa-asterisk" ></i>
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.modelCode.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.modelCode.$error.required" class="error_msg">Please enter modelCode</div>
					                    </div>
					                    <div class="add_icon_asterisk">
											<label for="pwd">Asset Tracking</label>
											<input type="text" class="form-control" id="assetTracking" name="assetTracking" data-ng-model="assetTracking" readonly>
											<i class="fa fa-asterisk" ></i>
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.assetTracking.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.assetTracking.$error.required" class="error_msg">Please enter asset Tracking</div>
					                    </div>
										<div class="add_icon_asterisk">
											<label for="pwd">supplier Name</label>
											
											 <div class="new-select-option">
								             <select name="supplierName" id="supplierName"
									data-ng-model="inventoryManagementDto.supplierName"
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									<option value="" selected></option>
									<option
										data-ng-repeat="x in supplierMaster track by x.supplierName"
										value="{{x.supplierName}}">{{x.supplierName}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											
											
											<!-- <input
											list="supplier" class="form-control" 
											id="supplier_list"  data-ng-readonly="datareadonly" required name="supplierName"
											data-ng-model="inventoryManagementDto.supplierName" autocomplete="off">
											<i class="fa fa-asterisk" ></i>
										<datalist id="supplier">
											<option
												data-ng-repeat="x in supplierMaster track by x.supplierName" data-ng-if="x.status=='ACTIVE'"
												value="{{x.supplierName}}">{{x.supplierName}}</option>
										</datalist> -->
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.supplierName.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.supplierName.$error.required" class="error_msg">Please choose supplierName</div>
					                    </div>
										<div class="add_icon_asterisk">
											<label for="pwd">Manufacturer Name</label>
											 <div class="new-select-option">
								             <select name="manufacturerName" id="manufacturerName"
									data-ng-model="inventoryManagementDto.manufacturerName"
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									<option value="" selected></option>
									<option
										data-ng-repeat="x in activeManufacturerList track by x.name"
										value="{{x.name}}">{{x.name}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											
											
											
											<!-- <input
											list="manufacturer" class="form-control" 
											id="manufacturer_list"  data-ng-readonly="datareadonly" required name="manufacturerName"
											data-ng-model="inventoryManagementDto.manufacturerName" autocomplete="off">
											<i class="fa fa-asterisk" ></i>
										<datalist id="manufacturer">
											<option
												data-ng-repeat="x in activeManufacturerList track by x.name"
												value="{{x.name}}">{{x.name}}</option>
										</datalist> -->
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.manufacturerName.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.manufacturerName.$error.required" class="error_msg">Please choose manufacturerName</div>
					                    </div>

									</div>
									<div class="col-md-6 col_md text-center">
										<div class="add_icon_asterisk">
												<label for="pwd"> Quantity</label>
												<input type="text" class="form-control" id="address2" name="quantity"   numbersonly autocomplete="off" data-ng-model="inventoryManagementDto.quantity" data-ng-blur="checkQuantityForNewInventory(inventoryManagementDto.quantity)" required>
												 <i class="fa fa-asterisk" ></i>
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.quantity.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.quantity.$error.required" class="error_msg">Please enter quantity</div>
					                    </div>									
									<div class="add_icon_asterisk">
												<label for="pwd"> purchase Cost INR</label>
												<input type="text" class="form-control" id="state" name="purchaseCost"  autocomplete="off" required numbersonly data-ng-model="inventoryManagementDto.purchaseCost">
												<i class="fa fa-asterisk" ></i>
										</div>
										 <div data-ng-show="NewInventory.$submitted || NewInventory.purchaseCost.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.purchaseCost.$error.required" class="error_msg">Please enter purchaseCost</div> 
					                    </div>
									
											<div class="add_icon_asterisk">
												<label for="email">purchase Date</label>
										<div class="input-group date" data-date-format="dd/mm/yyyy" data-date-today-highlight="true" data-date-autoclose="true" data-date-end-date="0d" data-provide="datepicker">
                                            <div class="input-group-addon inner-addon right-addon ">
                                                <i class="fa fa-calendar"></i>
                                                <input type="text" class="form-control" placeholder="" id="purchaseDate" name="purchaseDate" autocomplete="off" data-ng-model="inventoryManagementDto.purchaseDate"  readonly required>
                                            </div>
                                        </div>
                                        <i class="fa fa-asterisk" ></i>
											</div>
											<div data-ng-show="NewInventory.$submitted || NewInventory.purchaseDate.$touched" class="error_msg">
						                    <div data-ng-show="NewInventory.purchaseDate.$error.required" class="error_msg">Please enter purchaseCost</div>
					                        </div>
					                        
					                        
					                        <div class="add_icon_asterisk">
												<label for="email">is Serviceapplicable</label>
												
												
									<div class="new-radio-button-inline">
										<input type="radio" data-ng-model="inventoryManagementDto.isServicePeriodApplicable" data-ng-change="isServiceSelected(inventoryManagementDto.isServicePeriodApplicable)" required class="with-gap" autocomplete="off" name="isServicePeriodApplicable" id="YES1" value="YES" >
										<label for="YES1" >YES</label>
										<input type="radio" data-ng-model="inventoryManagementDto.isServicePeriodApplicable" data-ng-change="isServiceSelected(inventoryManagementDto.isServicePeriodApplicable)" required class="with-gap" autocomplete="off" name="isServicePeriodApplicable" id="NO1" value="NO" >
										<label for="NO1">NO</label>
									</div>
									
									<i class="fa fa-asterisk" ></i>
											</div>
											<div data-ng-show="NewInventory.$submitted || NewInventory.isServicePeriodApplicable.$touched" class="error_msg">
						                    <div data-ng-show="NewInventory.isservicePeriodApplicable.$error.required" class="error_msg">Please choose isServicePeriodApplicable</div>
					                        </div>
					                        
					                       <!--  <div class="add_icon_asterisk"> -->
					                       
					                        <div class="single_select_box add_icon_asterisk" data-ng-if="enableServicePeriod">
												<label for="email">service Due Date</label>
<!-- 										<div class="input-group date" data-date-format="dd/mm/yyyy" data-date-today-highlight="true"  data-date-start-date="0d"  data-date-autoclose="true"  data-provide="datepicker"> -->
<!--                                             <div class="input-group-addon inner-addon right-addon "> -->
<!--                                                 <i class="fa fa-calendar"></i> -->
<!--                                                 <input type="text" class="form-control" placeholder="" id="serviceDueDate" name="serviceDueDate"    autocomplete="off" data-ng-model="inventoryManagementDto.serviceDueDate"  readonly required> -->
<!--                                             </div> -->
<!--                                         </div> -->
<!--                                         <i class="fa fa-asterisk" ></i> -->
											 <div class="new-select-option">
								             <select name="serviceDueDate" id="serviceDueDate"
									data-ng-model="inventoryManagementDto.serviceDueDate"
									required class="wbSelect2 form-control"
									style="width: 100%; height: 36px;">
									<option value="" selected></option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
							 </div>
											<div data-ng-show="NewInventory.$submitted || NewInventory.serviceDueDate.$touched" class="error_msg">
						                    <div data-ng-show="NewInventory.serviceDueDate.$error.required" class="error_msg">Please enter serviceDueDate</div>
					                        </div>
					                       
					                        
					                        
											<div class="add_icon_asterisk">
												<label for="email">is Warranty applicable</label>
												
												
									<div class="new-radio-button-inline">
										<input type="radio" data-ng-model="inventoryManagementDto.isWarrantyPeriodApplicable" data-ng-change="isWarrantySelected(inventoryManagementDto.isWarrantyPeriodApplicable)" required class="with-gap" autocomplete="off" name="isWarrantyPeriodApplicable" id="YES" value="YES" >
										<label for="YES" >YES</label>
										<input type="radio" data-ng-model="inventoryManagementDto.isWarrantyPeriodApplicable" data-ng-change="isWarrantySelected(inventoryManagementDto.isWarrantyPeriodApplicable)" required class="with-gap" autocomplete="off" name="isWarrantyPeriodApplicable" id="NO" value="NO" >
										<label for="NO">NO</label>
									</div>
									<i class="fa fa-asterisk" ></i>
											</div>
											<div data-ng-show="NewInventory.$submitted || NewInventory.isWarrantyPeriodApplicable.$touched" class="error_msg">
						                    <div data-ng-show="NewInventory.isWarrantyPeriodApplicable.$error.required" class="error_msg">Please choose isWarrantyPeriodApplicable</div>
					                        </div>
					                        
											
											
											
                                    <div class="single_select_box" data-ng-if="enableWarrantyPeriod">
                                            <label for="email">Warranty period</label>
                                            <div class="select_box_two">
                                                                                   
                                                  <select class="selectpicker1" data-style="form-control" name="year" data-ng-model="inventoryManagementDto.year"  required style="padding: 7px;width: 85%;margin-right: 12px;">
                                                        <option value="">Year</option>                                                        
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                    </select><b>YY</b>
                                          <span data-ng-show="inventoryManagementDto.isWarrantyPeriodApplicable=='YES'"> 
											<span data-ng-show="NewInventory.$submitted || NewInventory.year.$touched" class="error_msg"> 
						                    <span data-ng-show="NewInventory.year.$error.required" class="error_msg">Please choose year</span> 
					                        </span>
					                        </span>
                                                    <select class="selectpicker1" data-style="form-control" name="month" data-ng-model="inventoryManagementDto.month" required style="padding: 7px;width: 85%;margin-right: 5px;">
                                                            <option value="">Month</option>
                                                        <option value="0">0</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        </select><b>MM</b>
                                                        <span data-ng-show="inventoryManagementDto.isWarrantyPeriodApplicable=='YES'"> 
                                                         <span data-ng-show="NewInventory.$submitted || NewInventory.month.$touched" class="error_msg"> 
						                    <span data-ng-show="NewInventory.month.$error.required" class="error_msg">Please choose month</span> 
					                        </span>
                                           </span>
                                                </div>
                                        </div>
                                        
										<div class="add_icon_asterisk">
											<label for="email">WareHouse</label>
											
											 <div class="new-select-option">
								             <select name="site" id="site"
									data-ng-model="inventoryManagementDto.site"
									data-ng-change="getWareHouseBlocks(inventoryManagementDto.site)"
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									<option value="" selected></option>
									<option
										data-ng-repeat="x in wareHouseDtoList track by x.wareHouseName"
										value="{{x.wareHouseName}}">{{x.wareHouseName}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											
											
											<!-- <input
											list="wareHouse" class="form-control" 
											id="wareHouse_List" data-ng-readonly="datareadonly" required name="site" data-ng-blur="getWareHouseBlocks(inventoryManagementDto.site)"
											data-ng-model="inventoryManagementDto.site" autocomplete="off">
											<i class="fa fa-asterisk" ></i>
										<datalist id="wareHouse">
											<option
												data-ng-repeat="x in activeWareHouseList track by x.wareHouseName"
												value="{{x.wareHouseName}}">{{x.wareHouseName}}</option>
										</datalist> -->
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.site.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.site.$error.required" class="error_msg">Please choose wareHouse</div>
					                    </div>
					                    <div class="add_icon_asterisk">
											<label for="email">Blocks</label>
											
											<div class="new-select-option">
								             <select name="blockName" id="blockName"
									data-ng-model="inventoryManagementDto.wareHouseBlockName"
									required class="select2 form-control"
									style="width: 100%; height: 36px;">
									<option value="" selected></option>
									<option
										data-ng-repeat="x in wareHouseBlockEntityList track by x.blocksNames"
										value="{{x.blocksNames}}">{{x.blocksNames}}</option>
								</select>
								<i class="fa fa-asterisk" ></i>
							</div>
											
											
											<!-- <input
											list="wareHouseBlock" class="form-control" 
											id="wareHouseBlock_List"  data-ng-readonly="datareadonly" required name="blockName"
											data-ng-model="inventoryManagementDto.wareHouseBlockName" autocomplete="off">
											<i class="fa fa-asterisk" ></i>
										<datalist id="wareHouseBlock">
											<option
												data-ng-repeat="x in wareHouseBlockEntityList track by x.blocksNames"
												value="{{x.blocksNames}}">{{x.blocksNames}}</option>
										</datalist> -->
										</div>
										<div data-ng-show="NewInventory.$submitted || NewInventory.blockName.$touched" class="error_msg">
						                <div data-ng-show="NewInventory.blockName.$error.required" class="error_msg">Please choose Block</div>
					                    </div>
					                    
					                    
										</div>
										</div>
										<div class="col-12 submit_col text-center">
                                            <button class="btn btn-primary" data-ng-click="saveInventory()"><i class="fa fa-check"></i> SAVE</button>
											<span class="btn btn-warning" data-ng-click="cancel()"><i class="fa fa-close"></i> CANCEL</span>
										</div>
										<br/>
										
								
								</form>
							</div>
					</div>
            </div>

            <!-- Row -->
            <!-- ============================================================== -->







<jsp:include page="footer.jsp" />