package com.crud.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.project.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{
	User findByEmail(String email);
}
