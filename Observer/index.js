// Example created by Addy Osmani

var pubsub = {};

(function(q) {
    // the topics object contains the messages that will publishers will send topics to, and subscribers can read from.
    // subUid is basically a way to number the topic objects. We start at -1 so that the first one (which will be ++SubUid) starts at a zero index.
    let topics = {},
    subUid = -1;

    // let's write a publisher, shall we?
    q.publish = function( topic, args ) {
        let subscribers = topics[topic];
        
        // if there are no subscribers, we have no one to publish to, so we won't publish
        if (!subscribers) return false;

        let subscriberPosition = subscribers ? subscribers.length : 0;

        // As long as we have subscribers...
        while (subscriberPosition--) {
            subscribers[subscriberPosition].func(topic,args);
            //func is a callback we pass to the subscriber, which it executes whenever a topic happens/is observed
        }

        return this;
        
    }

    q.subscribe = function(topic, func) {
        //if there are no topics to observe, create an empty topic
        if(!topic[topic]) {
            topics[topic] = [];
        }
        let token = ( ++subUid ).toString();
            topics[topic].push({
            token: token,
            func: func
        });
            return token;
    };

    q.unsubscribe = function ( token ) {
        for (let t in topics ) {
            if(topics[t]) {
                for (let i=0, j=topics[t].length; i<j; i++) {
                    if (topics[t][i].token == token) {
                        topics[t].splice(i,1);
                        return token
                    }
                }
            }
            else {
                console.log('Unsubscribed!')
            }
        };
        return this;
    }
}(pubsub));


// Testing the pubsub
let testHandler = function ( topics, data) {
    console.log(topics + ": " + data);
};

let testSusbscription = pubsub.subscribe("example1", testHandler);

pubsub.publish('example', 'hello world');
pubsub.unsubscribe(testSusbscription);
pubsub.publish('example1', "Hello world again");

