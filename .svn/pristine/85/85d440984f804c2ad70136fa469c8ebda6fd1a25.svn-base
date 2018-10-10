package com.fa.inventory.service.impl;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

import com.fa.inventory.common.util.MasterDateUtil;
import com.fa.inventory.dto.ELCPDto;
import com.fa.inventory.dto.InventoryEntranceDto;
import com.fa.inventory.dto.InventoryRequestDto;
import com.fa.inventory.dto.ScrapDto;
import com.fa.inventory.dto.ServiceTrackerDto;
import com.fa.inventory.dto.WorksMenDetailsDto;
import com.fa.inventory.entity.ELCB;
import com.fa.inventory.entity.InventoryEntrance;
import com.fa.inventory.entity.InventoryRequest;
import com.fa.inventory.entity.Scrap;
import com.fa.inventory.entity.ServiceTracker;
import com.fa.inventory.entity.WorksMenDetails;
import com.fa.inventory.repository.ELCBRepository;
import com.fa.inventory.repository.InventoryRequestRepository;
import com.fa.inventory.repository.InventoryStockRepository;
import com.fa.inventory.repository.ScrapRepository;
import com.fa.inventory.repository.ServiceTrackerRepository;
import com.fa.inventory.repository.UserRepository;
import com.fa.inventory.service.ELCBService;
import com.fa.inventory.service.InventoryManagementService;
import com.fa.inventory.service.ReportService;
import com.fa.inventory.service.ScrapService;
import com.fa.inventory.service.ServiceTrackerService;
import com.fa.inventory.service.ToolsRequestService;
import com.fa.inventory.service.WorksMenService;


@Service
public class ReportServiceImpl implements ReportService {
	private Logger logger = Logger.getLogger(getClass());
	@Resource
	UserRepository userRepository;		
	@Resource
	InventoryStockRepository inventoryStockRepository;
	
	@Resource
	InventoryManagementService inventoryManagementService;
	@Resource
	ScrapRepository scrapRepository;
	@Resource
	InventoryRequestRepository inventoryRequestRepository;
	@Resource
	ToolsRequestService toolsRequestService;
	@Resource
	ELCBRepository eLCBRepository;
	@Resource
	ELCBService eLCBService;
	@Resource
	ServiceTrackerRepository serviceTrackerRepository;
	@Resource
	ServiceTrackerService  serviceTrackerService; 
	@Resource
	WorksMenService worksMenService;
	@Resource
	ScrapService scrapService;

	
	@PersistenceContext
	@Resource
	EntityManager entityManager;
	
	@SuppressWarnings("unchecked")
	@Override
	public List<InventoryEntranceDto> inventoryReport(InventoryEntranceDto reportsDto, Principal principal) {
		
		logger.info("<--Report serviceImpl-------------inventoryReport--------------------started-->");
		
		List<InventoryEntrance> inventoryEntranceList = new  ArrayList<>();
		List<InventoryEntranceDto> inventoryEntranceDtoList = new ArrayList<>();

		//inventoryEntranceList=inventoryStockRepository.getInventoryReport(reportsDto.getFromDate(),reportsDto.getToDate());
		 /*.setParameter("startDate",MasterDateUtil.convertStringToTimeStampDate(reportsDto.getFromDate())  
		  .setParameter("endDate",MasterDateUtil.convertStringToTimeStampDate(reportsDto.getToDate())
		  .getResultList()));*/
		
		 Query query = entityManager.createQuery("SELECT e FROM InventoryEntrance e WHERE e.creationDate BETWEEN :startDate AND :endDate");
		 
	 query.setParameter("startDate", MasterDateUtil.converTimeStamp(reportsDto.getFromDate()+" 00:00:00"));
		 query.setParameter("endDate", MasterDateUtil.converTimeStamp(reportsDto.getToDate()+" 23:59:59"));
		 inventoryEntranceList= query.getResultList();
		for(int i=0;i<inventoryEntranceList.size();i++)
		{
			InventoryEntrance inventoryEntrance=inventoryEntranceList.get(i);
			
			if(inventoryEntrance!=null)
			{
				if(inventoryEntrance.getAvailableQuantity()>0 )
				{
					inventoryEntranceDtoList.add(inventoryManagementService.mapInventoryDto(inventoryEntrance));
				}
			}
		}
		
			
		
		logger.info("<--Report serviceImpl-------------inventoryReport--------------------ended-->");
		
		
     return inventoryEntranceDtoList;
     
     
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ScrapDto> scrapReport(InventoryEntranceDto reportsDto, Principal principal) {
		logger.info("<--Report serviceImpl-------------scrapReport--------------------started-->");
		
		List<Scrap> scarpList =new ArrayList<>();
		List<ScrapDto> scrapDtoList=new ArrayList<>();
		try{
		//scarpList=scrapRepository.getScrapReport(reportsDto.getFromDate(),reportsDto.getToDate());

			 Query query = entityManager.createQuery(
				    "SELECT e FROM Scrap e WHERE e.lastModifiedDate BETWEEN :startDate AND :endDate");
			 
			 query.setParameter("startDate", MasterDateUtil.converTimeStamp(reportsDto.getFromDate()+" 00:00:00"));
			 query.setParameter("endDate", MasterDateUtil.converTimeStamp(reportsDto.getToDate()+" 23:59:59"));
			 scarpList= query.getResultList();
		for(int i=0;i<scarpList.size();i++)
		{
			Scrap scrap=scarpList.get(i);
			if(scrap!=null)
			{
				
				scrapDtoList.add(scrapService.mapScrapDto(scrap));
					} 
		}
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		logger.info("<--Report serviceImpl-------------scrapReport--------------------Ended-->");
		return scrapDtoList;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<InventoryRequestDto> requestsReport(InventoryEntranceDto reportsDto, Principal principal) {
		logger.info("<--Report serviceImpl-------------getRequestReport--------------------started-->");
		
		List<InventoryRequest> inventoryRequestList =new ArrayList<>();
		List<InventoryRequestDto> inventoryRequestDtoList=new ArrayList<>();
		try{
			
		
		//inventoryRequestList=inventoryRequestRepository.getRequestReport(reportsDto.getFromDate(),reportsDto.getToDate());
			Query query = entityManager.createQuery(
				    "SELECT e FROM InventoryRequest e WHERE e.raisedDate BETWEEN :startDate AND :endDate");
			 
			 query.setParameter("startDate", MasterDateUtil.converTimeStamp(reportsDto.getFromDate()+" 00:00:00"));
			 query.setParameter("endDate", MasterDateUtil.converTimeStamp(reportsDto.getToDate()+" 23:59:59"));
			 inventoryRequestList= query.getResultList();
		for(int i=0;i<inventoryRequestList.size();i++)
		{
			InventoryRequest inventoryRequest=inventoryRequestList.get(i);
			if(inventoryRequest!=null)
			{
				
				inventoryRequestDtoList.add(toolsRequestService.mapInventoryRequestDtoById(inventoryRequest));
				
			}
		}
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		logger.info("<--Report serviceImpl-------------getRequestReport--------------------Ended-->");
		
		return inventoryRequestDtoList;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<?> serviceReport(InventoryEntranceDto reportsDto, Principal principal) {
		logger.info("<--Report serviceImpl-------------serviceReport--------------------started-->");
		List<ServiceTracker> serviceList =new ArrayList<>();
		List<ServiceTrackerDto> serviceTrackerDtoList=new ArrayList<>();
		try{
			
		
			//serviceList=serviceTrackerRepository.getServiceReport(reportsDto.getFromDate(),reportsDto.getToDate());
			Query query = entityManager.createQuery(
				    "SELECT e FROM ServiceTracker e WHERE e.lastModifiedDate BETWEEN :startDate AND :endDate");
			 
			 query.setParameter("startDate", MasterDateUtil.converTimeStamp(reportsDto.getFromDate()+" 00:00:00"));
			 query.setParameter("endDate", MasterDateUtil.converTimeStamp(reportsDto.getToDate()+" 23:59:59"));
			 serviceList= query.getResultList();
			
		for(int i=0;i<serviceList.size();i++)
		{
			ServiceTracker serviceTracker=serviceList.get(i);
			if(serviceTracker!=null)
			{
				
				serviceTrackerDtoList.add(serviceTrackerService.mapServiceTrackerDtoById(serviceTracker));
				
			}
		}
		}catch (Exception e) {
			e.printStackTrace();
	}
		logger.info("<--Report serviceImpl-------------serviceReport--------------------Ended-->");
		return serviceTrackerDtoList;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<ELCPDto> elcbReport(InventoryEntranceDto reportsDto, Principal principal) {
		
		logger.info("<--Report serviceImpl-------------elcbReport--------------------started-->");
		
		List<ELCB> ELCBList =new ArrayList<>();
		List<ELCPDto> ELCPDtoList=new ArrayList<>();
		try{
			
		
			//ELCBList=eLCBRepository.getElcpReport(reportsDto.getFromDate(),reportsDto.getToDate());
			Query query = entityManager.createQuery(
				    "SELECT e FROM ELCB e WHERE e.updatedTime BETWEEN :startDate AND :endDate");
			 
			 query.setParameter("startDate", MasterDateUtil.converTimeStamp(reportsDto.getFromDate()+" 00:00:00"));
			 query.setParameter("endDate", MasterDateUtil.converTimeStamp(reportsDto.getToDate()+" 23:59:59"));
			 ELCBList= query.getResultList();
			
			
		for(int i=0;i<ELCBList.size();i++)
		{
			ELCB elcb=ELCBList.get(i);
			if(elcb!=null)
			{
				
				ELCPDtoList.add(eLCBService.mapELCBDto(elcb));
				
			}
		}
		}catch (Exception e) {
			e.printStackTrace();     
		}
		
		logger.info("<--Report serviceImpl-------------elcbReport--------------------Ended-->");
		return ELCPDtoList;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<?> worksMenDetailsReport(InventoryEntranceDto reportsDto, Principal principal) {
		logger.info("<--Report serviceImpl-------------worksMenDetailsReport--------------------started-->");
		
		List<WorksMenDetails> worksMenDetailsList =new ArrayList<>();
		List<WorksMenDetailsDto> worksMenDetailsDtoList=new ArrayList<>();
		try{
			
		
			//ELCBList=eLCBRepository.getElcpReport(reportsDto.getFromDate(),reportsDto.getToDate());
			Query query = entityManager.createQuery(
				    "SELECT e FROM WorksMenDetails e WHERE e.lastModifiedDate BETWEEN :startDate AND :endDate");
			 
			 query.setParameter("startDate", MasterDateUtil.converTimeStamp(reportsDto.getFromDate()+" 00:00:00"));
			 query.setParameter("endDate", MasterDateUtil.converTimeStamp(reportsDto.getToDate()+" 23:59:59"));
			 worksMenDetailsList= query.getResultList();
		for(int i=0;i<worksMenDetailsList.size();i++)
		{
			WorksMenDetails worksMenDetails=worksMenDetailsList.get(i);
			if(worksMenDetails!=null)
			{
				
				worksMenDetailsDtoList.add(worksMenService.mapWorksMenDto(worksMenDetails));
				
			}
		}
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		logger.info("<--Report serviceImpl-------------worksMenDetailsReport--------------------Ended-->");
		return worksMenDetailsDtoList;
	}
	
	
}
