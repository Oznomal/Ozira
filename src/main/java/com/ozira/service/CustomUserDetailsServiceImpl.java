package com.ozira.service;

import com.ozira.domain.User;
import com.ozira.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CustomUserDetailsServiceImpl implements CustomUserDetailsService{

    //== FIELDS ==
    private final UserRepository userRepository;

    //== CONSTRUCTORS ==
    public CustomUserDetailsServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    //== PUBLIC METHODS ==
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if(user == null) new UsernameNotFoundException("User not found");
        return user;
    }

    @Override
    @Transactional
    public User loadUserById(Long id){
        User user = userRepository.getById(id);
        if(user == null) new UsernameNotFoundException("User not found");
        return user;
    }
}
