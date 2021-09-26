import readline from 'readline';
import chalk from 'chalk';
import * as geolonia from '@geolonia/normalize-japanese-addresses';
import { openReverseGeocoder } from '@geolonia/open-reverse-geocoder';

const reverseGeocoder = (latitude: number, longitude: number) => {
	openReverseGeocoder([latitude, longitude]).then(result => {
		console.log(chalk.green(JSON.stringify(result, null, "\t")));
	});
}

const stdin: NodeJS.ReadableStream = process.stdin;
const stdout: NodeJS.WritableStream = process.stdout;

const startRepl = () => {
	const rl = readline.createInterface({
		input: stdin,
		output: stdout,
		prompt: ">>> "
	});

	rl.prompt();
	rl.on("line", (input) => {
		callGeolonia(input, {
			level: 3,
			onEnd: () => {
				rl.setPrompt(">>> ");
				rl.prompt();
			}
		});
	}).on("close", () => {
		console.log("Thanks to Geolonia Inc. for @geolonia/normalize-japanese-addresses");
		process.exit(0);
	});
}

const callGeolonia = (address: string, options: { level?: number, onEnd?: Function }): Promise<geolonia.NormalizeResult> => {
	return new Promise((resolve, reject) => {
		geolonia.normalize(address, { level: options.level || 3 }).then(result => {
			console.log(chalk.green(JSON.stringify(result, null, "\t")));
			resolve(result);
		}).catch(error => {
			console.error(chalk.red(error));
			reject(error);
		}).finally(() => {
			if (options.onEnd !== undefined) {
				options.onEnd();
			}
		});
	})
}

export {
	startRepl,
	callGeolonia,
	reverseGeocoder
};