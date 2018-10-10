package com.fa.inventory.dto;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class InventoryEntranceDto implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@JsonProperty("id")
	private Long id;

	@JsonProperty("categoryType")
	private String categoryType;
	
	@JsonProperty("type")
	private String type;

	@JsonProperty("subCategory")
	private String subCategory;

	@JsonProperty("modelCode")
	private String modelCode;

	@JsonProperty("quantity")
	private Integer quantity;

	@JsonProperty("manufacturerName")
	private String manufacturerName;

	@JsonProperty("supplierName")
	private String supplierName;

	@JsonProperty("warrantyPeriod")
	private String warrantyPeriod;

	@JsonProperty("isWarrantyPeriodApplicable")
	private String isWarrantyPeriodApplicable;
	
	@JsonProperty("isServicePeriodApplicable")
	private String isServicePeriodApplicable;

	@JsonProperty("location")
	private String location;

	@JsonProperty("purchaseCost")
	private String purchaseCost;

	@JsonProperty("purchaseDate")
	private String purchaseDate;

	@JsonProperty("assetTracking")
	private String assetTracking;

	@JsonProperty("inventoryNumber")
	private String inventoryNumber;

	@JsonProperty("categoryCode")
	private String categoryCode;

	@JsonProperty("site")
	private String site;

	@JsonProperty("requestedFrom")
	private String requestedFrom;

	@JsonProperty("requestedTo")
	private String requestedTo;

	@JsonProperty("categoryDto")
	private CategoryDto categoryDto;

	@JsonProperty("status")
	private String status;

	@JsonProperty("quantityToBeMoved")
	private Integer quantityToBeMoved;

	@JsonProperty("exceptdate")
	private String exceptdate;

	@JsonProperty("action")
	private String action;

	@JsonProperty("button")
	private String button;

	@JsonProperty("allocatableQuantity")
	private Integer allocatableQuantity;

	@JsonProperty("reportMenu")
	private String reportMenu;

	@JsonProperty("fromDate")
	private String fromDate;

	@JsonProperty("toDate")
	private String toDate;

	@JsonProperty("selected")
	private Boolean selected;

	@JsonProperty("leftOverQuantity")
	private String leftOverQuantity;

	@JsonProperty("wareHouseBlockName")
	private String wareHouseBlockName;

	@JsonProperty("availableQuantity")
	private Integer availableQuantity;

	@JsonProperty("referenceNo")
	private String referenceNo;

	@JsonProperty("challanNo")
	private String challanNo;

	@JsonProperty("year")
	private Integer year;

	@JsonProperty("month")
	private Integer month;

	@JsonProperty("makeName")
	private String makeName;

	@JsonProperty("modelName")
	private String modelName;

	@JsonProperty("vehicleNumber")
	private String vehicleNumber;

	@JsonProperty("serviceDueDate")
	private String serviceDueDate;

	@JsonProperty("assignedLocation")
	private String assignedLocation;

	@JsonProperty("warehouseOrSitename")
	private String warehouseOrSitename;

	@JsonProperty("inventoryLocation")
	private String inventoryLocation;

	@JsonProperty("workingCondition")
	private String workingCondition;

	@JsonProperty("purpose")
	private String purpose;

	@JsonProperty("reason")
	private String reason;
	
	@JsonProperty("due_month")
	private String due_month;

	private List<WareHouseDto> wareHouseDto;

	private List<ProjectDto> projectItemDto;

	public String getCategoryType() {
		return categoryType;
	}

	public void setCategoryType(String categoryType) {
		this.categoryType = categoryType;
	}
	

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(String subCategory) {
		this.subCategory = subCategory;
	}

	public String getModelCode() {
		return modelCode;
	}

	public void setModelCode(String modelCode) {
		this.modelCode = modelCode;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public String getManufacturerName() {
		return manufacturerName;
	}

	public void setManufacturerName(String manufacturerName) {
		this.manufacturerName = manufacturerName;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getIsWarrantyPeriodApplicable() {
		return isWarrantyPeriodApplicable;
	}

	public void setIsWarrantyPeriodApplicable(String isWarrantyPeriodApplicable) {
		this.isWarrantyPeriodApplicable = isWarrantyPeriodApplicable;
	}
	

	public String getIsServicePeriodApplicable() {
		return isServicePeriodApplicable;
	}

	public void setIsServicePeriodApplicable(String isServicePeriodApplicable) {
		this.isServicePeriodApplicable = isServicePeriodApplicable;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getPurchaseCost() {
		return purchaseCost;
	}

	public void setPurchaseCost(String purchaseCost) {
		this.purchaseCost = purchaseCost;
	}

	public String getWarrantyPeriod() {
		return warrantyPeriod;
	}

	public void setWarrantyPeriod(String warrantyPeriod) {
		this.warrantyPeriod = warrantyPeriod;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public void setPurchaseDate(String purchaseDate) {
		this.purchaseDate = purchaseDate;
	}

	public String getAssetTracking() {
		return assetTracking;
	}

	public void setAssetTracking(String assetTracking) {
		this.assetTracking = assetTracking;
	}

	public String getInventoryNumber() {
		return inventoryNumber;
	}

	public void setInventoryNumber(String inventoryNumber) {
		this.inventoryNumber = inventoryNumber;
	}

	public String getCategoryCode() {
		return categoryCode;
	}

	public void setCategoryCode(String categoryCode) {
		this.categoryCode = categoryCode;
	}

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CategoryDto getCategoryDto() {
		return categoryDto;
	}

	public void setCategoryDto(CategoryDto categoryDto) {
		this.categoryDto = categoryDto;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getExceptdate() {
		return exceptdate;
	}

	public void setExceptdate(String exceptdate) {
		this.exceptdate = exceptdate;
	}

	public List<ProjectDto> getProjectItemDto() {
		return projectItemDto;
	}

	public void setProjectItemDto(List<ProjectDto> projectItemDto) {
		this.projectItemDto = projectItemDto;
	}

	public Integer getQuantityToBeMoved() {
		return quantityToBeMoved;
	}

	public void setQuantityToBeMoved(Integer quantityToBeMoved) {
		this.quantityToBeMoved = quantityToBeMoved;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public List<WareHouseDto> getWareHouseDto() {
		return wareHouseDto;
	}

	public void setWareHouseDto(List<WareHouseDto> wareHouseDto) {
		this.wareHouseDto = wareHouseDto;
	}

	public Integer getAllocatableQuantity() {
		return allocatableQuantity;
	}

	public void setAllocatableQuantity(Integer allocatableQuantity) {
		this.allocatableQuantity = allocatableQuantity;
	}

	public String getButton() {
		return button;
	}

	public void setButton(String button) {
		this.button = button;
	}

	public String getReportMenu() {
		return reportMenu;
	}

	public void setReportMenu(String reportMenu) {
		this.reportMenu = reportMenu;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getLeftOverQuantity() {
		return leftOverQuantity;
	}

	public void setLeftOverQuantity(String leftOverQuantity) {
		this.leftOverQuantity = leftOverQuantity;
	}

	public Boolean getSelected() {
		return selected;
	}

	public void setSelected(Boolean selected) {
		this.selected = selected;
	}

	public Integer getAvailableQuantity() {
		return availableQuantity;
	}

	public void setAvailableQuantity(Integer availableQuantity) {
		this.availableQuantity = availableQuantity;
	}

	public String getWareHouseBlockName() {
		return wareHouseBlockName;
	}

	public void setWareHouseBlockName(String wareHouseBlockName) {
		this.wareHouseBlockName = wareHouseBlockName;
	}

	public String getReferenceNo() {
		return referenceNo;
	}

	public void setReferenceNo(String referenceNo) {
		this.referenceNo = referenceNo;
	}

	public String getChallanNo() {
		return challanNo;
	}

	public void setChallanNo(String challanNo) {
		this.challanNo = challanNo;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public Integer getMonth() {
		return month;
	}

	public void setMonth(Integer month) {
		this.month = month;
	}

	public String getMakeName() {
		return makeName;
	}

	public void setMakeName(String makeName) {
		this.makeName = makeName;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getVehicleNumber() {
		return vehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}

	public String getServiceDueDate() {
		return serviceDueDate;
	}

	public void setServiceDueDate(String serviceDueDate) {
		this.serviceDueDate = serviceDueDate;
	}

	public String getRequestedFrom() {
		return requestedFrom;
	}

	public void setRequestedFrom(String requestedFrom) {
		this.requestedFrom = requestedFrom;
	}

	public String getRequestedTo() {
		return requestedTo;
	}

	public void setRequestedTo(String requestedTo) {
		this.requestedTo = requestedTo;
	}

	public String getAssignedLocation() {
		return assignedLocation;
	}

	public void setAssignedLocation(String assignedLocation) {
		this.assignedLocation = assignedLocation;
	}

	public String getWarehouseOrSitename() {
		return warehouseOrSitename;
	}

	public void setWarehouseOrSitename(String warehouseOrSitename) {
		this.warehouseOrSitename = warehouseOrSitename;
	}

	public String getInventoryLocation() {
		return inventoryLocation;
	}

	public void setInventoryLocation(String inventoryLocation) {
		this.inventoryLocation = inventoryLocation;
	}

	public String getWorkingCondition() {
		return workingCondition;
	}

	public void setWorkingCondition(String workingCondition) {
		this.workingCondition = workingCondition;
	}

	public String getPurpose() {
		return purpose;
	}

	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getDue_month() {
		return due_month;
	}

	public void setDue_month(String due_month) {
		this.due_month = due_month;
	}
	
	

}
