package com.fa.inventory.service;

import java.security.Principal;
import java.util.List;

import com.fa.inventory.dto.BulkRequestResponseDto;
import com.fa.inventory.dto.DispatcherLogDto;
import com.fa.inventory.dto.ResponseDto;

public interface DispatchLogService {

	
	List<DispatcherLogDto> getAllDispatchLog(Principal principal);
	
	ResponseDto addInventoryInDispatch(BulkRequestResponseDto bulkRequestResponseDto,Principal principal);
	
	ResponseDto addInventoryInDispatchForWareHouse(BulkRequestResponseDto bulkRequestResponseDto,String moveTowarehouse,String referenceNo,Principal principal);
	
	
	List<DispatcherLogDto> getAllDispatcherLogByCount(Principal principal);

	List<DispatcherLogDto> getDispatchLogBySiteName(DispatcherLogDto dispatcherLogDto, Principal principal);
	
	List<DispatcherLogDto> getDispatchLogByRequestedToAndRequestedFrom(DispatcherLogDto dispatcherLogDto, Principal principal);

	ResponseDto generateChallenNo(BulkRequestResponseDto bulkRequestResponseDto,Principal principal);

	ResponseDto acceptInventoryByChallaNo(BulkRequestResponseDto bulkRequestResponseDto,Principal principal);
	
	
	
}
