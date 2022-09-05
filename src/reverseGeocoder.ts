import { openReverseGeocoder } from '@geolonia/open-reverse-geocoder'
import chalk from 'chalk'

export const reverseGeocoder = (latitude: number, longitude: number) => {
	openReverseGeocoder([latitude, longitude]).then(result => {
		console.log(chalk.green(JSON.stringify(result, null, "\t")))
	})
}