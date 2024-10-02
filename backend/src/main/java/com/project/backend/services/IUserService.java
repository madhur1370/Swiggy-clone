package com.project.backend.services;

import com.project.backend.User;


public interface IUserService{
    User getUserByIdAndPassword(String username,String password);
    String addUser(String username,String password,String name,String phone,String email);
}
