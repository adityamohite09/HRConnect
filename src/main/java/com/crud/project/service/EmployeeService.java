package com.crud.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ResponseBody;

import com.crud.project.entity.Employee;
import com.crud.project.entity.User;
import com.crud.project.repository.EmployeeRepository;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmployeeService {
	@Autowired
	private EmployeeRepository employeeRepository;

	public Employee postEmployee(Employee employee) {
		return employeeRepository.save(employee);

	}

	// get all employee
	public List<Employee> getAllemployee() {
		return employeeRepository.findAll();
	}

	// delete employee using id
	public void deleteEmp(Long id) {
		if (!employeeRepository.existsById(id)) {

			throw new EntityNotFoundException("user not  found / deleted");
		} else {

			employeeRepository.deleteById(id);
		}
	}
	
	// get by id
	public Employee getbyidemp(Long id)
	{
		return employeeRepository.findById(id).orElse(null);
	}
	
	public Employee updateEmployee(Long id,Employee employee)
	{
		Optional<Employee> optionalemployee= employeeRepository.findById(id);
		if(optionalemployee.isPresent())
		{
			Employee existingemployee = optionalemployee.get();
			existingemployee.setName(employee.getName());
			existingemployee.setEmail(employee.getEmail());
			existingemployee.setPhone(employee.getPhone());
			existingemployee.setDepartment(employee.getDepartment());
			return employeeRepository.save(existingemployee);
		}
		return null;
		
	}
	//count employee
	public long getcount()
	{
		return employeeRepository.count();
	}
	
}
