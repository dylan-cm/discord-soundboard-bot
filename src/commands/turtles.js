const player = require('../providers/player');
module.exports = {
	name: 'turtles',
	description: 'I like turtles.',
	execute(message, args) {player('./assets/i_like_turtles.mp3', message)},
};