const fs = require('fs')

module.exports = async (filePath, message) => {
  
  if (message.member.voice.channel) {
    const connection = await message.member.voice.channel.join();
			// Create a dispatcher
			const dispatcher = connection.play(fs.createReadStream(filePath));

			dispatcher.on('start', () => {
				console.log('audio.mp3 is now playing!');
			});

			dispatcher.on('finish', () => {
				console.log('audio.mp3 has finished playing!');
			});

			// Always remember to handle errors appropriately!
			dispatcher.on('error', console.error);
    }
}
