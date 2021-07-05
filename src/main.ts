import readline from 'readline';
import chalk from 'chalk';
import * as geolonia from '@geolonia/normalize-japanese-addresses';

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
		geolonia.normalize(input).then(result => {
			console.log(chalk.green(JSON.stringify(result, null, "\t")));
		}).catch(error => {
			console.error(chalk.red(error));
		}).then(() => {
			rl.setPrompt(">>> ");
			rl.prompt();
		});
	}).on("close", () => {
		console.log("Thanks to Geolonia Inc. for @geolonia/normalize-japanese-addresses");
		process.exit(0);
	});
}

startRepl();