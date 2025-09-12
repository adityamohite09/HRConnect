package com.crud.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.project.entity.User;
import com.crud.project.repository.UserRepository;
import com.crud.project.service.Userservice;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private Userservice userservice;

	// register
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		return ResponseEntity.ok(userRepository.save(user));
	}
	

	// login
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {
	    User existinguser = userRepository.findByEmail(user.getEmail());

	    if (existinguser == null) {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
	    }

	    if (!existinguser.getPassword().equals(user.getPassword())) { 
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
	    }

	    return ResponseEntity.ok(existinguser);
	}
	@GetMapping("/all")
	List<User> getalluser()
	{
		return userservice.getalluser();
	}

}
