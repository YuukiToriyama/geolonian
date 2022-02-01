import { normalize, config } from '@geolonia/normalize-japanese-addresses';
import chalk from 'chalk';

export const normalizeAddress = (args: { address: string, level: number, useLocalSource: boolean }) => {
	// useLocalSourceフラグがtrueになっている場合、`geolonian update`で取得したデータを用いる
	if (args.useLocalSource) {
		config.japaneseAddressesApi = "file:///tmp/geolonian/ja"
	}
	// 正規化
	normalize(args.address, {
		level: args.level || 3
	}).then(result => {
		console.log(chalk.green(JSON.stringify(result, null, "\t")));
	}).catch(error => {
		console.log(chalk.red(error));
	});
}