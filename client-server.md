<!-- Generate a file named 'client-server.md' and provide an explanation specifically focusing on the client-server architecture. -->

Client-Server Architecture:

The Client-server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters called clients. In the client-server architecture, when the client computer sends a request for data to the server through the internet, the server accepts the requested process and delivers the data packets requested back to the client. Clients do not share any of their resources. Examples of the Client-Server Model are Email, World Wide Web, etc.


How Does the Client-Server Model Work?

Client: When we say the word Client, it means to talk of a person or an organization using a particular service. Similarly in the digital world, a Client is a computer (Host) i.e. capable of receiving information or using a particular service from the service providers (Servers).

Servers: Similarly, when we talk about the word Servers, It means a person or medium that serves something. Similarly in this digital world, a Server is a remote computer that provides information (data) or access to particular services.



How the Browser Interacts With the Servers?

There are a few steps to follow to interacts with the servers of a client.

1.User enters the URL(Uniform Resource Locator) of the website or file. The Browser then requests the DNS(DOMAIN NAME SYSTEM) Server.

2.DNS Server lookup for the address of the WEB Server.
The DNS Server responds with the IP address of the WEB Server.

3.The Browser sends over an HTTP/HTTPS request to the WEB Server’s IP (provided by the DNS server).

4.The Server sends over the necessary files for the website.
The Browser then renders the files and the website is displayed. This rendering is done with the help of DOM (Document Object Model) interpreter, CSS interpreter, and JS Engine collectively known as the JIT or (Just in Time) Compilers.


Advantages of Client-Server Model:

1.Centralized system with all data in a single place.
2.Cost efficient requires less maintenance cost and Data recovery is possible.
3.The capacity of the Client and Servers can be changed separately.


Disadvantages of Client-Server Model:

1.Clients are prone to viruses, Trojans, and worms if present in the Server or uploaded into the Server.

2.Servers are prone to Denial of Service (DOS) attacks.
Data packets may be spoofed or modified during transmission.

3.Phishing or capturing login credentials or other useful information of the user are common and MITM(Man in the Middle) attacks are common.



Conclusion:

The client-server architecture consolidates resources on servers for greater control and security, allows for flexible client options, and relies on a robust network for scalability and efficiency. While there are cost implications, the client-server model remains fundamental and has been shaped by trends such as cloud computing.




