import chalk from 'chalk';
import { openReverseGeocoder } from '@geolonia/open-reverse-geocoder';

export const reverseGeocoder = (latitude: number, longitude: number) => {
	openReverseGeocoder([latitude, longitude]).then(result => {
		console.log(chalk.green(JSON.stringify(result, null, "\t")));
	});
}
