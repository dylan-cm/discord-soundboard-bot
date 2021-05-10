const player = require('../providers/player');
module.exports = {
	name: 'dundundun',
	description: 'dun dun DUN!',
	execute(message, args) {player('./assets/dun_dun_dun.mp3', message)},
};