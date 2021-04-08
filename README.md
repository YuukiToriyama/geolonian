# geolonia-nja-cli
[@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)をコンソール上で簡単にテストするためのモジュール

```bash
$ node main.js 
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
