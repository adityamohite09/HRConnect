package com.crud.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.project.entity.LeaveRequest;
import com.crud.project.service.LeaveRequestService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") 
public class LeaveRequestController {
	
	@Autowired
	private LeaveRequestService leaverequestservice;
	
	@PostMapping("/leaverequest")
	public LeaveRequest saveall(@RequestBody LeaveRequest leavereq)
	{
		return leaverequestservice.saveall(leavereq);
	}
	
	@GetMapping("/getreq")
	public List<LeaveRequest> getreq()
	{
		return leaverequestservice.getallrequest();
	}


}
