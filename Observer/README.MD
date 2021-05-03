The Observer Pattern
Like the general concept of [[Message Queues]], Publish/Subscribe messaging patterns are a service-to-service communication pattern used in serverless and microservice architectures. 

Unlike messaging queues, however, the Publish/Subscribe pattern permits many consumers (called subscribers here) to 'listen' to and wait for messages from a single producer. 

This pattern is often found in event-driven architecture. 

**How it works**

The Publisher pushes a message to the topic. Unlike in the case of [[Message Queues]], where the messages are batched until they are retrieved, message topics transfer the messages with little or no queuing, sending them out immediately to all the subscribers. Everyone subscribed to the topic will receive every message broadcast from the subscriber (unless there's filtering on the part of the subscriber)

![pub/sub model](https://d1.awsstatic.com/product-marketing/Messaging/sns_img_topic.e024462ec88e79ed63d690a2eed6e050e33fb36f.png)

