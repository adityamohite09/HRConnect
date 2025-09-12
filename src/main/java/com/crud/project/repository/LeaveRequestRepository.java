package com.crud.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.project.entity.LeaveRequest;

public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {

}

