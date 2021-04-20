package org.reso.service.servlet.util;


import com.fasterxml.jackson.annotation.JsonProperty;

public class Token
{
   // One must conform to the snake case naming convention for JSON representation of these properties
   @JsonProperty("access_token")
   private String accessToken;
   @JsonProperty("token_type")
   private String tokenType;
   private String scope;


   public Token(String authBearerToken, String tokenType, String scope)
   {
      this.accessToken = authBearerToken;
      this.tokenType = tokenType;
      this.scope = scope;
   }


   /**
    * Set the attribute with the name that corresponds to this method name.
    *
    * @param accessToken The value to set the attribute to.
    */
   public void setAccessToken(String accessToken)
   {
      this.accessToken = accessToken;
   }


   /**
    * Set the attribute with the name that corresponds to this method name.
    *
    * @param tokenType The value to set the attribute to.
    */
   public void setTokenType(String tokenType)
   {
      this.tokenType = tokenType;
   }


   /**
    * Set the attribute with the name that corresponds to this method name.
    *
    * @param scope The value to set the attribute to.
    */
   public void setScope(String scope)
   {
      this.scope = scope;
   }


   // Accessors, used by ObjectMapper to serialize the token.

   public String getAccessToken()
   {
      return accessToken;
   }


   public String getTokenType()
   {
      return tokenType;
   }


   public String getScope()
   {
      return scope;
   }
}