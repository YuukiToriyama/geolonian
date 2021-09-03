# geolonia-nja-cli

[@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)をコンソール上で簡単にテストするためのモジュール

## Usage

### Preparation

```bash
git clone https://github.com/YUUKIToriyama/geolonia-nja-cli.git
cd geolonia-nja-cli
npm install
npm run build
```

### Command

```bash
node dist/main.js normalize --address 東京都港区芝公園４丁目２−８
```
```javascript
{
        "pref": "東京都",
        "city": "港区",
        "town": "芝公園四丁目",
        "addr": "2-8",
        "level": 3
}
```

```bash
node dist/main.js normalize --address 東京都港区芝公園４丁目２−８ --level 1
```
```javascript
{
        "pref": "東京都",
        "city": "",
        "town": "",
        "addr": "港区芝公園4丁目2-8",
        "level": 1
}
```

### REPL

```bash
$ node dist/main.js normalize
>>> 北海道札幌市西区24-2-2-3-3
{
	"pref": "北海道",
	"city": "札幌市西区",
	"town": "24軒2条2丁目",
	"addr": "3-3"
}
>>> 大阪府堺市北区新金岡町４丁１ー８
{
	"pref": "大阪府",
	"city": "堺市北区",
	"town": "新金岡町4丁",
	"addr": "1-8"
}
>>> 
```

## Development

```bash
git clone git@github.com:YUUKIToriyama/geolonia-nja-cli.git
cd geolonia-nja-cli
npm install
npm run build
node dist/main.js
```