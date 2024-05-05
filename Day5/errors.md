<!-- Create a thorough document, named errors.md, provide a detailed description of all error codes. -->

Common Error Codes and Descriptions

1. 404 Not Found
Description: The requested resource could not be found on the server.
Common Causes:
Incorrect URL or route.
Deleted or moved resource.
Example: When a user tries to access a non-existent page.


2. 400 Bad Request
Description: The server cannot process the request due to malformed syntax or invalid parameters.
Common Causes:
Missing or incorrect request parameters.
Invalid data format.
Example: Sending an incomplete form submission.


3. 500 Internal Server Error
Description: A generic error indicating that something went wrong on the server.
Common Causes:
Code bugs or exceptions.
Misconfigured server settings.
Example: When an unhandled exception occurs during server-side processing.


4. 403 Forbidden
Description: The client does not have permission to access the requested resource.
Common Causes:
Insufficient permissions.
IP blocking.
Example: Accessing a restricted admin page without proper credentials.



5. 401 Unauthorized
Description: The client must authenticate itself to get the requested response.
Common Causes:
Missing or invalid authentication token.
Expired session.
Example: Trying to access a protected API endpoint without a valid token.



6. 429 Too Many Requests
Description: The client has exceeded the rate limit for requests.
Common Causes:
Sending too many requests in a short time.
API rate limiting.
Example: When an API user exceeds the allowed request frequency.



7. 503 Service Unavailable
Description: The server is temporarily unable to handle the request due to maintenance or overload.
Common Causes:
Server maintenance.
High traffic causing overload.
Example: During scheduled server maintenance.


8. 502 Bad Gateway
Description: The server, while acting as a gateway or proxy, received an invalid response from an upstream server.
Common Causes:
Backend server issues.
Misconfigured proxy.
Example: When a reverse proxy fails to communicate with the application server.
