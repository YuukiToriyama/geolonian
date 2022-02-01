import chalk from 'chalk';
import { openReverseGeocoder } from '@geolonia/open-reverse-geocoder';

export const reverseGeocoder = (latitude: number, longitude: number) => {
	openReverseGeocoder([latitude, longitude]).then(result => {
		console.log(chalk.green(JSON.stringify(result, null, "\t")));
	});
}

// const stdin: NodeJS.ReadableStream = process.stdin;
// const stdout: NodeJS.WritableStream = process.stdout;

// const startRepl = () => {
// 	const rl = readline.createInterface({
// 		input: stdin,
// 		output: stdout,
// 		prompt: ">>> "
// 	});

// 	rl.prompt();
// 	rl.on("line", (input) => {
// 		callGeolonia(input, {
// 			level: 3,
// 			onEnd: () => {
// 				rl.setPrompt(">>> ");
// 				rl.prompt();
// 			}
// 		});
// 	}).on("close", () => {
// 		console.log("Thanks to Geolonia Inc. for @geolonia/normalize-japanese-addresses");
// 		process.exit(0);
// 	});
// }