 <%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
    <%@ page isELIgnored="false" %>
<jsp:include page="header.jsp" />



            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid user-top" data-ng-controller="DesignationController">
                <!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <div class="row page-titles">
                    <div class="col-md-6 align-self-center">
                        <h3 class="text-themecolor">DESIGNATION</h3>
                    </div>
                    
                   <div class="col-md-6 align-self-center">
                   
                   <div data-ng-show="DesignationMgt">
                   
                   	<security:authorize access="hasAuthority('OFFICE ADMINISTRATOR')">
                        <ol class="breadcrumb">
                        <li>
                            <a class="btn btn-primary waves-effect waves-light" href="officeAdmin?link=AddDesignation">ADD DESIGNATION</a>
                            </li>
                        </ol>
                        </security:authorize>
                    </div>
                    
                    
                    </div>

                </div>
                <!-- ============================================================== -->
                <!-- End Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <!-- Row -->


	<div data-ng-show="DesignationMgt">


		<div class="form_section">

			<div class="form-content">
				<h4 class="form_content_title">Search Designation</h4>

<div class="table-responsive">
				<table datatable="ng" dt-options="dtOptions"
					class="table table-striped table-bordered">
					<thead>
						<tr>
						<th>Id</th>
							<th>Designation Name</th>
							<th>Status</th>
							<th class="not-export-col">Action</th>

						</tr>
					</thead>
					<tbody>

						<tr
							data-ng-repeat="Designation_details in designationDtoList">
							<td>{{$index+1}}</td>
							<td>{{Designation_details.designation}}</td>
							<td>{{Designation_details.status}}</td>


							<td class="table_btn_group"><security:authorize
									access="hasAuthority('OFFICE ADMINISTRATOR')">
									<a href="" data-ng-click="edit(Designation_details)"
										class="btn btn-primary"><i class="fa fa-edit"></i> Edit</a>
								</security:authorize> <a href="" data-ng-click="view(Designation_details)"
								class="btn btn-primary"><i class="fa fa-drivers-license-o"></i> View</a></td>
						</tr>

					</tbody>
				</table>
</div>



			</div>
		</div>
	</div>






	<div data-ng-show="editDesignationCategory">
		
		
					<div class="form_section">
							<div class="form-content create_form">
								<h4 class="form_content_title"> Designation</h4>
								<form class="form-inline"  method="post" name="addDesignation" novalidate>
									<div class="col-md-6 col_md text-center">
										<div class="add_icon_asterisk">
											<label for="pwd"> Designation Name:</label>
											<input type="text" class="form-control" id="designation" name="designation" data-ng-model="DesignationDto.designation"  autocomplete="off"tabindex="1" required="required">
											<i class="fa fa-asterisk" ></i> 
											<input type="hidden" class="form-control" id="id" name="id" data-ng-model="DesignationDto.id" required>
										</div>	
										
					<div data-ng-show="addDesignation.$submitted || addDesignation.designation.$touched" class="error_msg">					
						<div data-ng-show="addDesignation.designation.$error.required" class="error_msg">Please Enter Designation </div>
					</div>																	

									

								
								<div class="">
											<label for="">Status:</label>
							<div class="new-radio-button-inline">
								<input type="radio" name="status" id="ACTIVE" value="ACTIVE"  data-ng-model="DesignationDto.status" class="with-gap" required>
								<label for="ACTIVE" >ACTIVE</label>
								<input type="radio" name="status" id="INACTIVE" value="INACTIVE" data-ng-model="DesignationDto.status" class="with-gap" required>
								<label for="INACTIVE">INACTIVE</label> 
								</div>											
			                    </div>
					<div data-ng-show="addDesignation.$submitted || addDesignation.status.$touched" class="error_msg">					
						<div data-ng-show="addDesignation.status.$error.required" class="error_msg">Please Select Status </div>
					</div>										
                     	</div>
                     <div class="col-md-6">
									</div>
										<div class="col-md-8 submit_col text-center">
											<button class="btn btn-primary" data-ng-click="saveDesignation()"><i class="fa fa-check"></i> SAVE</button>
											<button class="btn btn-warning" data-ng-click="back()"><i class="fa fa-close"></i> CANCEL</button>
										</div>
								</form>
							</div>
					</div>
		
		
		
		</div>
		
		
		
		
		  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Designation </h4>
        </div>
        <div class="modal-body">
        <table class="table table-bordered table-striped">
         					<tr><th>Designation Name </th><td>{{view_Designation_details.designation}}</td></tr>							
							<tr><th>Status</th><td>{{view_Designation_details.status}}</td></tr>
			</table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
		
		
		
		
            </div>

            <!-- Row -->
            <!-- ============================================================== -->







<jsp:include page="footer.jsp" />