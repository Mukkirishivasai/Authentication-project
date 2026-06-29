package com.codegnan.repository.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codegnan.entity.User;
import com.codegnan.repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserRepository repo;

    @PostMapping("/register")
    public String register(@RequestBody User user){

        repo.save(user);

        return "Registration Successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User u = repo.findByUsername(user.getUsername());

        if(u != null && u.getPassword().equals(user.getPassword())){
            return "Login Successful";
        }

        return "Invalid Username or Password";
    }
}
