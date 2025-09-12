package com.crud.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import com.crud.project.entity.User;
import com.crud.project.repository.UserRepository;
@Service
@RequestMapping("/uses")
public class Userservice {
	@Autowired
	private UserRepository us;
	
	public List<User> getalluser()
	{
		return us.findAll();
	}

}
