const fs = require('fs')

module.exports = async (filePath, message) => {
  
  if (message.member.voice.channel) {
    try{
			const connection = await message.member.voice.channel.join();
			// Create a dispatcher
		
			const dispatcher = connection.play(fs.createReadStream(filePath))

			dispatcher.on('start', () => {
				console.log(`${filePath} is now playing!`);
			});

			dispatcher.on('finish', () => {
				console.log(`${filePath} is finished playing!`);
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
    }
		catch(err) {console.log(err)}
	}
}
