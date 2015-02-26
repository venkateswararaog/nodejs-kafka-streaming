var Kafka = require('kafka-node'),
    client = new Kafka.Client(),
    consumer = new Kafka.Consumer(
		        client,
			[
			  { topic: 'test', partition: 0 }
		        ],
		        { autoCommit: false }
		     );

  consumer.on('message', onMessage);


  function onMessage(msg) {
    console.log(msg);
    io.sockets.emit('newData', msg.value);
  }
