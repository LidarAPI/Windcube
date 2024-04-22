define({ "api": [
  {
    "type": "get",
    "url": "/authentication/list_user_profiles",
    "title": "Get list of user profiles",
    "version": "1.0.0",
    "name": "GetListUserProfiles",
    "group": "Authentication",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Get the list of user profiles</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of user profiles</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_level",
            "description": "<p>Access Level of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[{\"user_id\": 5,\n\"name\": \"user\",\n\"access_level\": \"expert\",\n\"firstname\":\"Firstname\"\n\"lastname\": \"Lastname\", \n\"email\": \"my@email.com\",\n\"phone\": \"+33102030405\", \n\"company\": \"Vaisala\"},\n{\"user_id\": 6,\n\"name\": \"user\",\n\"access_level\": \"standard\",\n\"firstname\":\"Firstname\"\n\"lastname\": \"Lastname\", \n\"email\": \"my@email.com\",\n\"phone\": \"+33102030405\", \n\"company\": \"Leosphere\"}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/authentication/refresh_token",
    "title": "Refresh token request",
    "version": "1.0.0",
    "name": "GetRefreshToken",
    "group": "Authentication",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Returns a new valid token for 24 additional hours by default or the number of hours set by authentication/update_token_validity.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>The user's token to be used in all request for identification.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/authentication/token_validity",
    "title": "Get validity information",
    "version": "1.0.0",
    "name": "GetTokenValidity",
    "group": "Authentication",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "description": "<p>Refresh token</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/authentication/token_validity",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "validity",
            "description": "<p>The value set as token's validity</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "remaining",
            "description": "<p>Time remaining before end of token's validity. Use a refresh_token before the end if you want to extend validity.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n\"validity\": 24,\n\"remaining\": \"23:59:41\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "   HTTP/1.1 401 Unauthorized\n   {\n     \"error\": \"token_not_valid\"\n   }\n   HTTP/1.1 400 Bad Request\n   {\n\t \"error\": \"parameter_not_valid\",\n\t \"explanation\": \"'token_validity' should be an integer between 1 and 24\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "get",
    "url": "/authentication/user_profile",
    "title": "Get information from current user profile",
    "version": "1.0.0",
    "name": "GetUserProfile",
    "group": "Authentication",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Get information from current user profile</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>Id of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_level",
            "description": "<p>Access Level of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"user_id\": 5,\n\"name\": \"user\",\n\"access_level\": \"expert\",\n\"firstname\":\"Firstname\"\n\"lastname\": \"Lastname\", \n\"email\": \"my@email.com\",\n\"phone\": \"+33102030405\", \n\"company\": \"Vaisala\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/authentication/create_update_user_profile/:id?",
    "title": "Create or update a user profile",
    "version": "1.0.0",
    "name": "PostCreateUpdateUser",
    "group": "Authentication",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Allows to create or update a user (if optional id specified). Each user is able to update his own profile. Users with &quot;expert&quot; access level are able to create and update others users profiles.<br>WARNING! If an access level is changed, this will be taken into account when a new token for the involved user account will be issued.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id of the user to update. If not set, creates a new user (if access level is high enough)</p>"
          },
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "POST_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user. This parameter is optional when updating a user account, so password is only changed when provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_level",
            "description": "<p>Access Level of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>Company of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_access_right",
            "description": "<p>Error 403: Only expert users are able to create or update other user profiles.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": " HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}\nHTTP/1.1 403 Forbidden\n{\n  \"error\": \"no_access_right\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/authentication/delete_user_profile/:id",
    "title": "Delete a user profile",
    "version": "1.0.0",
    "name": "PostDeleteUser",
    "group": "Authentication",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Allows to delete a user profile<br>WARNING! A token issued before a user deletion remains valid until its expiration. A deleted user may be able to use the API up to some hours after its deletion.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Id of the user to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/authentication/update_token_validity",
    "title": "Set token's validity duration",
    "version": "1.0.0",
    "name": "PostUpdateValidity",
    "group": "Authentication",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>set the token's validity ( in hour )</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/authentication/update_token_validity",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "BODY_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "token_validity",
            "description": "<p>Token's validity duration (in hours)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Body example:",
          "content": "{\n \"token_validity\" : 12\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>results of the command</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: Parameter not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        },
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 400 Bad Request\n    {\n\t\t\"error\": \"parameter_not_valid\",\n\t\t\"explanation\": \"'token_validity' should be an integer between 1 and 24\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "post",
    "url": "/authentication/login",
    "title": "Connection request",
    "version": "1.0.0",
    "name": "PostUserLogin",
    "group": "Authentication",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Requests connection authorization. The token returned is valid during 24 hours by default or the number of hours set by authentication/update_token_validity. If the Lidar is restarted, this request has to be executed again to ask for a new token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>The user's token to be used in all request for identification.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_access_right",
            "description": "<p>Error 403: Only standard users or more are allowed to connect.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "wrong_user_name_or_pwd",
            "description": "<p>Error 401: Client's connection refused due to wrong credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"no_access_right\"\n}\nHTTP/1.1 401 Unauthorized\n{\n  \"error\": \"wrong_user_name_or_pwd\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "GET",
    "url": "/configuration/current_self_signed_certificate",
    "title": "Get the current self signed certificate applied to the system",
    "version": "1.0.0",
    "name": "GetCurrentCertificate",
    "group": "Configuration",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Get the current self signed certificate file applied to the system</p>",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/current_self_signed_certificate",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\t\"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/lidar",
    "title": "Get Lidar information",
    "version": "1.0.0",
    "name": "GetLidarInfo",
    "group": "Configuration",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Returns  information about the Lidar</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instrument_name",
            "description": "<p>Serial number of the Lidar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "windcube_os",
            "description": "<p>Windcube OS version</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "api",
            "description": "<p>API version</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "measurement_status",
            "description": "<p>Measurement status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\n  \"instrument_name\": \"WLS70000\",\n  \"windcube_os\": \"3.3.1\",\n  \"api\": \"1.2.1\",\n  \"measurement_status\": \"started\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "POST",
    "url": "/configuration/new_self_signed_certificate/:domains/:duration",
    "title": "Generates and returns self signed certificate",
    "version": "1.0.0",
    "name": "GetNewCertificate",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "description": "<p>Creates and returns a self signed certificate file valid for the domains specified. This is the only request with /configuration/current_self_signed_certificate  that can  be run  only in http.</p>",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/new_self_signed_certificate/192.168.3.5,mylidar.com/365",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "domains",
            "description": "<p>Domains on which to apply the certificate. Can be Ip address , or domain names. Should be separate by coma.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>validity's duration of the self signed certificate. To express in day.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n\"error\": \"token_not_valid\"\n}\nHTTP/1.1 400 Bad Request\n{\n\"error\": \"parameter_not_valid\",\n\"explanation\": \"'192.168.333' has not the right format.Should be an IP address or a fully qualified domain name.\"\n}\nHTTP/1.1 400 Bad Request\n{\n\"error\": \"parameter_not_valid\",\n\"explanation\": \"'duration' has not the right format.Should be an integer between 1 and 365.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "get",
    "url": "/configuration/settings",
    "title": "Get settings",
    "version": "1.0.0",
    "name": "GetSettings",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/settings",
        "type": "json"
      }
    ],
    "description": "<p>Returns the content of the settings currently applied to Lidar</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "measurement_height",
            "description": "<p>Measurement heights.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response: ",
          "content": "{\n\"measurement_height\": [40, 60, 80, 120, 200]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"'measurement_height' has not the right format. Should be an array of integer greater than or equal to 40\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "POST",
    "url": "/configuration/save_settings",
    "title": "Save settings",
    "version": "1.0.0",
    "name": "SaveSettings",
    "group": "Configuration",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/configuration/save_settings",
        "type": "json"
      }
    ],
    "description": "<p>Save new settings</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "measurement_height",
            "description": "<p>Measurement heights</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "body example:  ",
          "content": "{\n\"measurement_height\": [40, 60, 100, 160, 200]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Result of the configuration</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\": true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "    HTTP/1.1 401 Unauthorized\n    {\n      \"error\": \"token_not_valid\"\n    }\n     HTTP/1.1 400 Bad Request\n    {\n      \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"'measurement_height' has not the right format. Should be an array of integer greater than or equal to 40\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Configuration"
  },
  {
    "type": "post",
    "url": "/control/command/:action",
    "title": "Send a command to the Lidar",
    "version": "1.0.0",
    "name": "doAction",
    "group": "Control",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/control/command/start_acq\nhttp://192.168.3.5/lidar_api/v1/control/command/stop_acq",
        "type": "json"
      }
    ],
    "description": "<p>Sends a command to the Lidar.</p>",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"start_acq\"",
              "\"stop_acq\"",
              "\"reboot_pc\"",
              "\"wipe\""
            ],
            "optional": false,
            "field": "action",
            "description": "<p>Action to be done on the Lidar. Actions available are :</p> <ul> <li> <p>Starting an acquisition: &quot;start_acq&quot; (If Lidar is in CRITICAL status this command will be refused)</p> </li> <li> <p>Stopping an acquisition: &quot;stop_acq&quot;</p> </li> <li> <p>Rebooting the Lidar computer: &quot;reboot_pc&quot;</p> </li> <li> <p>Wipe once: &quot;wipe&quot;</p> </li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Returns true if action has been successfully executed. Otherwise error with explanation will be returned</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"success\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "no_action_done",
            "description": "<p>Error 412: State requested is the current one</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}\nHTTP/1.1 412 Precondition Failed\n{\n  \"error\": \"no_action_done\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Control"
  },
  {
    "type": "GET",
    "url": "/data/data_file/:filename",
    "title": "Get data file",
    "version": "1.0.0",
    "name": "GetDataFile",
    "group": "Data",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "description": "<p>Returns data file with specified filename (rtd or sta)</p>",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/data_file/WLS79995_2021_07_21__00_10_00.sta.7z",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>Data filename, to be retrieved by request &quot;data_files_list&quot;</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "\t\tHTTP/1.1 401 Unauthorized\n\t\t{\n\t\t\"error\": \"token_not_valid\"\n\t\t}\n\t\tHTTP/1.1 400 Bad Request\n    {\n     \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"start time not valid\"\n    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Data"
  },
  {
    "type": "GET",
    "url": "/data/data_files_archive/:extension/:start_time/:end_time",
    "title": "Get data files archive",
    "version": "1.0.0",
    "name": "GetDataFilesArchive",
    "group": "Data",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "description": "<p>Returns archive file with data files between two dates</p>",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/data_files_archive/rtd/2018-05-11T00:10:00/2018-05-12T00:00:00",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"sta\"",
              "\"rtd\""
            ],
            "optional": false,
            "field": "extension",
            "description": "<p>File extension requested</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>start time of the interval following ISO8601 format (example 2018-05-11T02:12:35)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>end time of the interval following ISO8601 format (example 2018-05-11T02:12:35)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "\t\tHTTP/1.1 401 Unauthorized\n\t\t{\n\t\t\"error\": \"token_not_valid\"\n\t\t}\n\t\tHTTP/1.1 400 Bad Request\n    {\n     \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"start time not valid\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Data"
  },
  {
    "type": "GET",
    "url": "/data/data_files_list/:extension/:start_time/:end_time",
    "title": "Get data files list",
    "version": "1.0.0",
    "name": "GetDataFilesList",
    "group": "Data",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "description": "<p>Returns data files list between two dates</p>",
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/data_files_list/sta/2018-05-11T00:10:00/2018-05-12T00:00:00",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"sta\"",
              "\"rtd\""
            ],
            "optional": false,
            "field": "extension",
            "description": "<p>File extension requested</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_time",
            "description": "<p>start time of the interval following ISO8601 format (example 2018-05-11T02:12:35)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_time",
            "description": "<p>end time of the interval following ISO8601 format (example 2018-05-11T02:12:35)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "-",
            "description": "<p>List of data files between start_time and end_time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "[\"WLS79995_2021_07_21__00_10_00.sta.7z\",\"WLS79995_2021_07_22__00_10_00.sta.7z\",\"WLS79995_2021_07_22__08_30_00.sta.7z\"]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "parameter_not_valid",
            "description": "<p>Error 400: One or several parameters are not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "\t\tHTTP/1.1 401 Unauthorized\n\t\t{\n\t\t\"error\": \"token_not_valid\"\n\t\t}\n\t\tHTTP/1.1 400 Bad Request\n    {\n     \"error\": \"parameter_not_valid\",\n\t\t \"explanation\": \"start time not valid\"\n    }\n\t\t}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/last_average",
    "title": "Get last line of current STA file",
    "version": "1.0.0",
    "name": "GetLastAverage",
    "group": "Data",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/last_average",
        "type": "json"
      }
    ],
    "description": "<p>Retrieves reconstruction wind data from the last average computed</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data",
            "description": "<p>Last line of current STA file</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"data\": \"data in sta file\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/data/timestamp_limits",
    "title": "Get interval of available data",
    "version": "1.0.0",
    "name": "GetTimestampLimits",
    "group": "Data",
    "permission": [
      {
        "name": "standard"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/data/timestamp_limits",
        "type": "json"
      }
    ],
    "description": "<p>Returns min and max timestamp of available data</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "min_timestamp",
            "description": "<p>Timestamp of the first data following ISO8601 format (example 2018-05-11T02:12:35.000)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "max_timestamp",
            "description": "<p>Timestamp of the last data following ISO8601 format (example 2018-05-11T02:12:35.000)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\n\"min_timestamp\": \"2019-11-18T10:40:51.510\",\n\"max_timestamp\": \"2020-01-31T14:32:09.055\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Data"
  },
  {
    "type": "get",
    "url": "/monitoring/autotests",
    "title": "Execute autotests",
    "version": "1.0.0",
    "name": "Autotests",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/monitoring/autotests",
        "type": "json"
      }
    ],
    "description": "<p>Execute autotests on Lidar and get results. Be careful, this action automatically stops the Lidar (and measurements) during autotests.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "results",
            "description": "<p>results of autotests</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:  ",
          "content": "{\"results\":\"autotests results\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "get",
    "url": "/monitoring/global_status",
    "title": "Get global status",
    "version": "1.0.0",
    "name": "GetGlobalStatus",
    "group": "Monitoring",
    "permission": [
      {
        "name": "viewer"
      }
    ],
    "description": "<p>Returns the global status of the Lidar.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the Lidar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"OK\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Monitoring"
  },
  {
    "type": "GET",
    "url": "/monitoring/logs/:start_date/:end_date",
    "title": "Get logs from the Lidar between two dates",
    "version": "1.0.0",
    "name": "GetLogsInterval",
    "group": "Monitoring",
    "permission": [
      {
        "name": "expert"
      }
    ],
    "examples": [
      {
        "title": "URL examples:",
        "content": "http://192.168.3.5/lidar_api/v1/monitoring/logs/2018-05-11/2018-05-12",
        "type": "json"
      }
    ],
    "description": "<p>Get logs archive from the Lidar. Sends to the user one zipped file with only files contains in the interval defined. Warning: This action can be long and cannot be stopped. Stop acquisition before.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>User unique access-key</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<hr>",
            "optional": false,
            "field": "URL_PARAMETERS:",
            "description": "<hr>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>start date of the interval</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>end date of the interval</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "token_not_valid",
            "description": "<p>Error 401: Access token not valid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error examples:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"error\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "v1/doc_1.0.js",
    "groupTitle": "Monitoring"
  }
] });
