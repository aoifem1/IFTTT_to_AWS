# IFTTT to AWS (POST Request)
How to send information from a 3rd party app to your AWS account using IFTTT webhooks. 

# Background 
IFTTT is a service which allows you to connect any two IFTTT registered apps (called IFTTT services) together.
Webhooks in an IFTTT service to send a receive HTTP requests to a destination of your choice (endpoint). 
https://ifttt.com/maker_webhooks

The following example shows you how to send a HTTP POST request to your AWS account at specific times everyday, and log this information to AWS DynamoDB. 
The setup involves the following steps: 

1. AWS RESTful API Development 
2. AWS Lambda Development 
3. AWS DynamoDB Development 
4. IFTTT Setup 

＃4. IFTTT Setup 
See Instructions on how to create IFTTT Applets 
https://help.ifttt.com/hc/en-us/articles/115010361388-How-do-I-create-an-Applet-

In this case we will use the Date+Time service as the trigger:

![alt text](IFTTT_to_AWS/IFTTT Trigger 1.PNG)






