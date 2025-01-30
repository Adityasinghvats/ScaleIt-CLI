#!/usr/bin/env node

/**
 * cli-image
 * CLI to resize and optimise images
 *
 * @author Aditya Kumar <https://adityasinghvats.github.io/adix/>
 */

import cli from './utils/cli.js';
import init from './utils/init.js';
import log from './utils/log.js';
import resizeOptimizeImages from 'resize-optimize-images';
import {globby} from 'globby';
import alert from 'cli-alerts';
import ora from 'ora';
import chalk from 'chalk';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { readFileSync, writeFile, writeFileSync } from 'fs';

const { flags, input, showHelp } = cli;
const { clear, debug } = flags;
const { source, width, quality , destination} = flags;
const spinner = ora({ text: `` });

(async () => {
	await init({ clear });
	input.includes(`help`) && showHelp(0);

	//give a array of file path for images
	const images = await globby(source);

	// const __filename = fileURLToPath(import.meta.url);
    // const __dirname = dirname(__filename);
	// const destinationPath = path.join(__dirname, destination);

	if(source){
		//option for image
		const options = {
			images,
			width : width ? width : 1920,
			quality : quality ? quality : 90,
			// destination: destinationPath
		}
		// console.log(destinationPath);
		spinner.start(`${images.length} ${chalk.yellow(`IMAGES`)} are getting resized & optimised_`);
		await resizeOptimizeImages(options);
		// images.map(async (image) => {
		// 	const outputFilePath = path.join(destinationPath, path.basename(image));
		// 	console.log(outputFilePath);
		// 	const imageData = readFileSync(image);
		// 	writeFileSync(outputFilePath, imageData);
		// });
		spinner.succeed(`${chalk.green(`IMAGES`)} resized & optimised_`);

		alert({
			type: `success`,
			msg: `Resized and optimised ${images.length}`
		})
	}else{
		alert({
			type: `error`, msg: `You forgot to specify --source flag`
		})
	}
	console.log()
	debug && log(flags);
})();
