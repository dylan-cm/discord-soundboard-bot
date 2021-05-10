const player = require('../providers/player');
module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {player('./assets/sub_ping.mp3', message)},
};