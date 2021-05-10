const player = require('../providers/player');
module.exports = {
	name: 'joke',
	description: 'Ba Dum Tss!',
	execute(message, args) {player('./assets/ba_dum_tss.mp3', message)},
};