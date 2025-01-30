import meowHelp from 'cli-meow-help';
import meow from 'meow';

const flags = {
	source: {
		type: `string`,
		shortFlag: `i`,
		desc: `Input file or directory of images`
	},
	destination: {
		type: `string`,
		shortFlag: `s`,
		des: `Destination for your optimised image`
	},
	width: {
		type: `number`,
		shortFlag: `w`,
		desc: `Width of images in pixels`
	},
	quality: {
		type: `number`,
		shortFlag: `q`,
		desc: `Quality of images`
	},
	clear: {
		type: `boolean`,
		default: false,
		shortFlag: `c`,
		desc: `Clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		shortFlag: `d`,
		desc: `Print debug info`
	},

};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `calai`,
	flags,
	commands
});

const options = {
	importMeta: import.meta,
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

export default meow(helpText, options);
