const readline = require("readline");
const chalk = require("chalk");
const geolonia = require("@geolonia/normalize-japanese-addresses");

const startRepl = () => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
		prompt: true
	});

	rl.setPrompt(">>> ");
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
	})
}

startRepl();