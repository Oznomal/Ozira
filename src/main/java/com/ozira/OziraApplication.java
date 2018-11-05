package com.ozira;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class OziraApplication {

    //== PASSWORD ENCODER BEAN CREATION ==
    @Bean
    BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    //== MAIN METHOD ==
    public static void main(String[] args) {
        SpringApplication.run(OziraApplication.class, args);
    }
}
