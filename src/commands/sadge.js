const player = require('../providers/player');
module.exports = {
	name: 'sadge',
	description: 'Very Sadge Violin!',
	execute(message, args) {player('./assets/sad_violin.mp3', message)},
};