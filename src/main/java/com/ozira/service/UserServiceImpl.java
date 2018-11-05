package com.ozira.service;


import com.ozira.domain.User;
import com.ozira.repository.UserRepository;
import com.ozira.util.exceptions.UsernameExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements  UserService{

    //== FIELDS ==
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    //== CONSTRUCTORS ==
    @Autowired
    public UserServiceImpl(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder){
       this.userRepository = userRepository;
       this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    //== PUBLIC METHODS ==

    @Override
    public User saveUser(User newUser) {
        try {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));

            //Username has to be unique(Custom Exception)
            newUser.setUsername(newUser.getUsername());

            //Make sure that we don't persist the String version of Password to DB
            newUser.setConfirmPassword("");

            return userRepository.save(newUser);
        } catch (Exception e) {
            throw new UsernameExistsException("Username '" + newUser.getUsername() + "' already exists");
        }

    }
}
