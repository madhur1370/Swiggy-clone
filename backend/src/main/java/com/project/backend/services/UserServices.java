package com.project.backend.services;

import com.project.backend.User;
import com.project.backend.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserServices implements IUserService{
    private final UserRepository userRepository;

    @Override
    public User getUserByIdAndPassword(String name, String password) {
        return userRepository.findByUsernameAndPassword(name,password).orElse(null);
    }
    @Override
    public String addUser(String username, String password, String name, String phone, String email)
    {
        User user=userRepository.findByUsernameOrPhoneOrEmail(username,phone,email);
        if(user==null)
        {
            userRepository.save(new User(username,name,password,email,phone));
            return "ok";
        }
        return "user already exists!!";
    }
}
