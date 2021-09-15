# YUUKIToriyama/geolonian

[@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)をコンソール上で簡単にテストするためのモジュール

## Usage

### Installation

```bash
npm install -g @toriyama/geolonian
```

### Command

```bash
geolonian normalize --address 東京都港区芝公園４丁目２−８
```
```javascript
{
	"pref": "東京都",
	"city": "港区",
	"town": "芝公園四丁目",
	"addr": "2-8",
	"lat": 35.656459,
	"lng": 139.74764,
	"level": 3
}
```

```bash
geolonian normalize --address 東京都港区芝公園４丁目２−８ --level 1
```
```javascript
{
	"pref": "東京都",
	"city": "",
	"town": "",
	"addr": "港区芝公園4丁目2-8",
	"lat": null,
	"lng": null,
	"level": 1
}
```

### REPL

```bash
$ geolonian normalize
>>> 北海道札幌市西区24-2-2-3-3
{
	"pref": "北海道",
	"city": "札幌市西区",
	"town": "二十四軒二条二丁目",
	"addr": "3-3",
	"lat": 43.074273,
	"lng": 141.315099,
	"level": 3
}
>>> 大阪府堺市北区新金岡町４丁１ー８
{
	"pref": "大阪府",
	"city": "堺市北区",
	"town": "新金岡町四丁",
	"addr": "1-8",
	"lat": 34.568184,
	"lng": 135.519409,
	"level": 3
}
>>> 
```

## Development

```bash
git clone git@github.com:YUUKIToriyama/geolonian.git
cd geolonian
npm install
npm run build
node dist/main.js
```
