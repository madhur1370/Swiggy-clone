package com.project.backend.requests;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoginBodyParams {
    String password;
    String username;
}
