package com.crud.project.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.crud.project.entity.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
