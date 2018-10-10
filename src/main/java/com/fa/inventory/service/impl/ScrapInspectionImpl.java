package com.fa.inventory.service.impl;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.fa.inventory.common.util.MasterDateUtil;
import com.fa.inventory.constants.InventoryConstant;
import com.fa.inventory.dto.ProjectDto;
import com.fa.inventory.dto.ScrapInspectionDto;
import com.fa.inventory.entity.DispatcherLog;
import com.fa.inventory.entity.InventoryAssign;
import com.fa.inventory.entity.Scrap;
import com.fa.inventory.entity.ScrapInspection;
import com.fa.inventory.repository.DispatchLogRepository;
import com.fa.inventory.repository.ScrapInspectionRepository;
import com.fa.inventory.repository.ScrapRepository;
import com.fa.inventory.service.InventoryManagementService;
import com.fa.inventory.service.ScrapInspectionService;

@Service
public class ScrapInspectionImpl implements ScrapInspectionService {
	
	protected final Logger logger = Logger.getLogger(ScrapInspectionImpl.class);
	
	@Resource
	ScrapInspectionRepository scrapInspectionRepository;
	
	@Resource
	DispatchLogRepository dispatchLogRepository;
	
	@Resource
	ScrapRepository scrapRepository;
	
	@Resource
	InventoryManagementService inventoryManagementService;
	
	@Override
	public List<ScrapInspectionDto> getAllScrapInspection(Principal principal) throws Exception {

		logger.info("<--ScrapServiceImpl-------------getAllScrapInspection--------------------started-->");
		List<ScrapInspectionDto> scrapInspectionDtoList = new ArrayList<>();
		List<ProjectDto> projectsDtoList = null;
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

		boolean hasUserRole = authentication.getAuthorities().stream()
		          .anyMatch(r -> r.getAuthority().equals(InventoryConstant.SUPER_USER) || r.getAuthority().equals(InventoryConstant.USER));
		
		try {

			//List<ScrapInspection> scrapInspectionsEntityList = scrapInspectionRepository.findAll();
			
			
			if(hasUserRole)
			{
				projectsDtoList = inventoryManagementService.getCurrentUserProjectDtoList(principal);
				
				if(projectsDtoList != null)
				{
					//projectsDtoList = new ArrayList<>();
					
					for(int j=0;j<projectsDtoList.size();j++)
					{
						ProjectDto project = projectsDtoList.get(j);
						
						if(project != null)
						{
							List<ScrapInspection> scrapInspectionsEntityList = scrapInspectionRepository.findByRequestedFrom(project.getName());
							
							if (scrapInspectionsEntityList != null) {

								for (int i = 0; i < scrapInspectionsEntityList.size(); i++) {

									ScrapInspection scrapInspectionEntity = scrapInspectionsEntityList.get(i);

									if (scrapInspectionEntity != null) {

										if (scrapInspectionEntity.getStatus().equals(InventoryConstant.MOVETOSCRAPREQUESTED)) {
											ScrapInspectionDto scrapInspectionDto = new ScrapInspectionDto();
											
											scrapInspectionDto = mapScrapInspection(scrapInspectionDto, principal, scrapInspectionEntity);
											scrapInspectionDtoList.add(scrapInspectionDto);

										}

									}
								}
							}
						}
					}
				}
			}
			else
			{
				List<ScrapInspection> scrapInspectionsEntityList = scrapInspectionRepository.findAll();
				
				if (scrapInspectionsEntityList != null) {

					for (int i = 0; i < scrapInspectionsEntityList.size(); i++) {

						ScrapInspection scrapInspectionEntity = scrapInspectionsEntityList.get(i);

						if (scrapInspectionEntity != null) {

							if (scrapInspectionEntity.getStatus().equals(InventoryConstant.MOVETOSCRAPREQUESTED)) {
								ScrapInspectionDto scrapInspectionDto = new ScrapInspectionDto();
								scrapInspectionDto = mapScrapInspection(scrapInspectionDto, principal, scrapInspectionEntity);
								scrapInspectionDtoList.add(scrapInspectionDto);
							}
						}
					}
				}
			}
		

		} catch (Exception e) {

			e.printStackTrace();

		}

		logger.info("<--ScrapServiceImpl-------------getAllScrapInspection--------------------Ended-->");
		return scrapInspectionDtoList;
	}

	@Override
	public String VerifyandApproveScrapInspection(ScrapInspectionDto scrapInspectionDto, Principal principal) throws Exception{
		
		logger.info("<--ScrapServiceImpl-------------VerifyandApproveScrapInspection--------------------Started-->");
		String status = null;
		ScrapInspection scrapInspection = new ScrapInspection();
		
		scrapInspection = scrapInspectionRepository.findOne(scrapInspectionDto.getId());
		
		if (scrapInspectionDto != null && scrapInspectionDto.getId() != null) {
			
			
			if (scrapInspection != null && scrapInspectionDto.getSubStatus().equals(InventoryConstant.QC_VERIFIED)) {
					scrapInspection.setSubStatus(scrapInspectionDto.getSubStatus());
					scrapInspection.setComments(scrapInspectionDto.getComments());
					scrapInspection.setActionBy(principal.getName());
					scrapInspection = scrapInspectionRepository.save(scrapInspection);
					if (scrapInspection != null) {
						status = InventoryConstant.SUCCESS;
					}
			}
			else if(scrapInspection != null && scrapInspectionDto.getSubStatus().equals(InventoryConstant.QC_APPROVED))
			{
				if(scrapInspection.getChallanStatus().equals(InventoryConstant.YES))
				{
					DispatcherLog dispatcherLog=dispatchLogRepository.save(mapDispatchLogEntity(scrapInspectionDto, principal, scrapInspection));
					if(dispatcherLog!=null)
					{
						scrapInspection.setSubStatus(scrapInspectionDto.getSubStatus());
						scrapInspection.setComments(scrapInspectionDto.getComments());
						scrapInspection.setActionBy(principal.getName());

						scrapInspection = scrapInspectionRepository.save(scrapInspection);
						
						if (scrapInspection != null) {
							status = InventoryConstant.SUCCESS;
						}
					}
				}
				else if(scrapInspection.getChallanStatus().equals(InventoryConstant.NO))
				{
					if(scrapInspection.getStatus().equals(InventoryConstant.MOVETOSCRAPREQUESTED))
					{
						mapScrapEntity(scrapInspectionDto,scrapInspection,principal);
					}
					scrapInspection.setSubStatus(scrapInspectionDto.getSubStatus());
					scrapInspection.setComments(scrapInspectionDto.getComments());
					scrapInspection.setActionBy(principal.getName());
					scrapInspection = scrapInspectionRepository.save(scrapInspection);
					if (scrapInspection != null) {
						status = InventoryConstant.SUCCESS;
					}
				}
			}
			else
			{
					scrapInspection.setSubStatus(scrapInspectionDto.getSubStatus());
					scrapInspection.setComments(scrapInspectionDto.getComments());
					scrapInspection.setActionBy(principal.getName());
					if (scrapInspection.getInventoryAssign()!= null) {
						InventoryAssign inventoryAssign=scrapInspection.getInventoryAssign();
						inventoryAssign
								.setAvailableQty(inventoryAssign.getAvailableQty() + scrapInspection.getQuantity());
						scrapInspection.setInventoryAssign(inventoryAssign);
					}
					scrapInspection = scrapInspectionRepository.save(scrapInspection);
					if(scrapInspection != null)
					{
						status = InventoryConstant.SUCCESS;
					}
			}
			
			
		}
		
		logger.info("<--ScrapServiceImpl-------------VerifyandApproveScrapInspection--------------------Ended-->");
		return status;
	}
	
	
	public DispatcherLog mapDispatchLogEntity(ScrapInspectionDto scrapInspectionDto,Principal principal,ScrapInspection scrapInspection)
	{
		logger.info("<--InventoryRequestServiceImpl-------------mapDispatchLogEntity--------------------started-->");
		DispatcherLog dispatcherLog = new DispatcherLog();
		dispatcherLog.setComments(scrapInspectionDto.getComments());
		dispatcherLog.setLocation(scrapInspection.getLocation());
		dispatcherLog.setModelCode(scrapInspection.getModelCode());
		dispatcherLog.setQuantity(scrapInspection.getQuantity());
		dispatcherLog.setQuantityInTransferProcess(scrapInspection.getQuantity());
		dispatcherLog.setRaisedBy(scrapInspection.getRaisedBy());
		dispatcherLog.setActionBy(principal.getName());
		dispatcherLog.setActionDate(new Date());
		dispatcherLog.setAvailableQuantity(scrapInspection.getQuantity());
		dispatcherLog.setAcceptedQuantity(scrapInspection.getQuantity());
		dispatcherLog.setDispatchedQuantity(0);
		dispatcherLog.setDispatchDate(new Date());
		dispatcherLog.setRequiredDays(0);
		dispatcherLog.setRaisedDate(new Date());
		dispatcherLog.setReferenceNo(scrapInspection.getReferenceNo());
		dispatcherLog.setInventoryNumber(scrapInspection.getInventoryNumber());
		dispatcherLog.setRequestedFrom(scrapInspection.getRequestedFrom());
		dispatcherLog.setRequestedTo(scrapInspection.getRequestedTo());
		dispatcherLog.setStatus(scrapInspection.getStatus());
		dispatcherLog.setSubStatus(scrapInspectionDto.getSubStatus());
		dispatcherLog.setPurpose(InventoryConstant.MOVETOSCRAPREQUESTED);
		dispatcherLog.setReason(InventoryConstant.SCRAP);
		dispatcherLog.setCategory(scrapInspection.getCategory());
		dispatcherLog.setSubCategory(scrapInspection.getSubCategory());
		dispatcherLog.setInventoryAssign(scrapInspection.getInventoryAssign());
		logger.info("<--InventoryRequestServiceImpl-------------mapDispatchLogEntity--------------------started-->");
		return dispatcherLog;
	}
	
	
	public Scrap mapScrapEntity(ScrapInspectionDto scrapInspectionDto, ScrapInspection scrapInspection,Principal principal)
	{
		logger.info("<--InventoryRequestServiceImpl-------------approveInspection--------------------started-->");
		Scrap scrap = new Scrap();
		scrap.setComments(scrapInspectionDto.getComments());
		scrap.setSubStatus(scrapInspectionDto.getSubStatus());
		scrap.setFromLocation(scrapInspection.getRequestedFrom());
		scrap.setLastModifiedBy(principal.getName());
		scrap.setLastModifiedDate(new Date());
		scrap.setQuantity(scrapInspection.getQuantity());
		scrap.setRaisedBy(scrapInspection.getRaisedBy());
		scrap.setRaisedDate(new Date());
		scrap.setLevel1Approver(InventoryConstant.QC_APPROVED);
		scrap.setLevel2Approver(InventoryConstant.QC_APPROVED);
		scrap.setStatus(InventoryConstant.ACTIVE);
		scrap.setWarehouseSiteName(scrapInspection.getRequestedTo());
		scrap.setInventoryNumber(scrapInspection.getInventoryNumber());
		scrap.setCategory(scrapInspection.getCategory());
		scrap.setSubCategory(scrapInspection.getSubCategory());
		scrap.setInventoryAssign(scrapInspection.getInventoryAssign());
		scrap = scrapRepository.save(scrap);		
		logger.info("<--InventoryRequestServiceImpl-------------approveInspection--------------------Ended-->");
		return scrap;
		
	}
	
	public ScrapInspectionDto mapScrapInspection(ScrapInspectionDto scrapInspectionDto,Principal principal,ScrapInspection scrapInspectionEntity) throws Exception
	{
		scrapInspectionDto.setId(scrapInspectionEntity.getId());
		scrapInspectionDto.setAcceptedQuantity(scrapInspectionEntity.getAcceptedQuantity());
		scrapInspectionDto.setActionBy(scrapInspectionEntity.getActionBy());
		scrapInspectionDto.setActionDate(
				MasterDateUtil.convertDateToString(scrapInspectionEntity.getActionDate()));
		scrapInspectionDto.setComments(scrapInspectionEntity.getComments());
		scrapInspectionDto.setDispatchDate(
				MasterDateUtil.convertDateToString(scrapInspectionEntity.getDispatchDate()));
		scrapInspectionDto.setExpectedDateToReach(MasterDateUtil
				.convertDateToString(scrapInspectionEntity.getExpectedDateToReach()));
		scrapInspectionDto.setLocation(scrapInspectionEntity.getLocation());
		scrapInspectionDto.setModelCode(scrapInspectionEntity.getModelCode());
		scrapInspectionDto.setQuantity(scrapInspectionEntity.getQuantity());
		scrapInspectionDto.setRaisedBy(scrapInspectionEntity.getRaisedBy());
		scrapInspectionDto.setRaisedDate(
				MasterDateUtil.convertDateToString(scrapInspectionEntity.getRaisedDate()));
		scrapInspectionDto.setReferenceNo(scrapInspectionEntity.getReferenceNo());
		scrapInspectionDto.setRequestedTo(scrapInspectionEntity.getRequestedTo());
		scrapInspectionDto.setRequiredDays(scrapInspectionEntity.getRequiredDays());
		scrapInspectionDto.setStatus(scrapInspectionEntity.getStatus());
		scrapInspectionDto.setSubStatus(scrapInspectionEntity.getSubStatus());
		scrapInspectionDto.setRequestedFrom(scrapInspectionEntity.getRequestedFrom());

		scrapInspectionDto.setCategoryType(scrapInspectionEntity.getCategory().getCategoryType());
		scrapInspectionDto
				.setSubCategory(scrapInspectionEntity.getSubCategory().getSubCategory());
		return scrapInspectionDto;
		
	}

}
