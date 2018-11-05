package com.ozira.security;

import com.ozira.domain.User;
import com.ozira.util.constants.SecurityConstants;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
@Slf4j
public class JwtTokenProvider {

    //== PUBLIC METHODS ==
    /**
     * Generates the JWT token whenever we get a valid username/password combo
     * @param authentication the successful authentication of a user
     * @return the JWT Token
     */
    public String generateToken(Authentication authentication){
        User user = (User) authentication.getPrincipal();

        Date nowDate = new Date(System.currentTimeMillis());
        Date expireDate = new Date(nowDate.getTime() + SecurityConstants.EXPIRATION_TIME);

        String userId = Long.toString(user.getId());

        Map<String, Object> claims = new HashMap<>(); //In rhe future if adding role based access add roles to claims
        claims.put("id", userId);
        claims.put("username", user.getUsername());
        claims.put("firstName", user.getFirstName());
        claims.put("lastName", user.getLastName());

        return Jwts.builder()
                .setSubject(userId)
                .setClaims(claims)
                .setIssuedAt(nowDate)
                .setExpiration(expireDate)
                .signWith(SignatureAlgorithm.HS512, SecurityConstants.SECRET)
                .compact();
    }

    /**
     * Validates the JWT Token
     * @param token the token that needs to be validated
     * @return true if the token is valid, false if it is invalid
     */
    public boolean validateToken(String token){
        try{
            Jwts.parser().setSigningKey(SecurityConstants.SECRET).parseClaimsJws(token);
            return true;
        }
        catch(SignatureException ex){
            log.warn("Invalid JWT Signature");
        }
        catch(MalformedJwtException ex){
            log.warn("Invalid JWT Token");
        }
        catch(ExpiredJwtException ex){
            log.warn("Expired JWT Token");
        }
        catch(UnsupportedJwtException ex){
            log.warn("Unsupported JWT Token");
        }
        catch(IllegalArgumentException ex){
            log.warn("JWT Claims String is Empty");
        }

        return false;
    }

    /**
     * Extracts the ID of the User from the JWT
     * @param token the users JWT
     * @return the id of the user for the JWT
     */
    public Long getUserIdFromJWT(String token){
        Claims claims = Jwts.parser().setSigningKey(SecurityConstants.SECRET).parseClaimsJws(token).getBody();
        String id = (String) claims.get("id");
        return Long.parseLong(id);
    }
}