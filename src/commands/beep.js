module.exports = {
	name: 'beep',
	description: 'BeepBoop!',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};