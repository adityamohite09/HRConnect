package com.crud.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.project.entity.LeaveRequest;
import com.crud.project.repository.LeaveRequestRepository;

@Service
public class LeaveRequestService {
	@Autowired
	private LeaveRequestRepository leaveRequestrepo;
	
	public LeaveRequest saveall(LeaveRequest leavereq)
	{
		return leaveRequestrepo.save(leavereq);
	}
	
	public List<LeaveRequest> getallrequest()
	{
		return leaveRequestrepo.findAll();
	}

}