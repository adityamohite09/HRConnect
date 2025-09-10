package com.crud.project.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.project.entity.Employee;
import com.crud.project.service.EmployeeService;

import jakarta.persistence.EntityNotFoundException;


@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmployeeController {
	@Autowired
    private EmployeeService employeeService;

    @PostMapping("/employee")
    @CrossOrigin("*")
    public Employee postEmployee(@RequestBody Employee employee) {
        return employeeService.postEmployee(employee);
    }

    @GetMapping("/employees")
    @CrossOrigin("*")
	public List<Employee> getAllemployee()
	{
		return employeeService.getAllemployee();
	}
    
    @DeleteMapping("/employee/{id}")
    @CrossOrigin("*")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id)
    {
    	try {
    	employeeService.deleteEmp(id);
    	System.out.println("Employee deleted successfully!");
    	return new ResponseEntity<>("deleted employee successfully .....!",HttpStatus.OK);
    }catch(EntityNotFoundException e)
    	{
    	return new ResponseEntity<>("employee Not deleted.....!",HttpStatus.NOT_FOUND);
    	}
    	
    }
    	// get by id
    	@GetMapping("/employee/{id}")
    	public ResponseEntity<?> getbyidemppp(@PathVariable Long id)
    	{
    		Employee emp = employeeService.getbyidemp(id);
    		if(emp == null) return ResponseEntity.notFound().build();
    		return ResponseEntity.ok(emp);
    	}
    	
    	//
    	@PatchMapping("/employee/{id}")
    	public ResponseEntity<?> updateemployee(@PathVariable Long id, @RequestBody Employee employee)
    	{
    		Employee updateemp = employeeService.updateEmployee(id, employee);
    		
    		if(updateemp == null) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    		return ResponseEntity.ok(updateemp);
    		
    	}
    	
}
