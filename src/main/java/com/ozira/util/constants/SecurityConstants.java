package com.ozira.util.constants;

public final class SecurityConstants {

    //== CONSTANTS ==
    public static final String SIGN_UP_URLS = "/api/users/**";
    public static final String H2_URL = "h2-console/**";
    public static final String SECRET = "SecretKeyToGenJWTs";
    public static final String TOKEN_PREFIX = "Bearer "; //<-- Space has to go at the end
    public static final String HEADER_STRING = "Authorization";
    public static final long EXPIRATION_TIME = 300_000; //30 Seconds

    //== CONSTRUCTOR ==
    private SecurityConstants(){}
}
