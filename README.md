# YUUKIToriyama/geolonian

便利なオープンソースの GIS ライブラリ群をコマンドライン上でも使えるようにしました。

- 住所正規化ツール
  - [@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)
  - [Geolonia 住所データ](https://geolonia.github.io/japanese-addresses/)に基づいて住所の正規化を行なうライブラリです。
  - 表記のゆらぎの修正だけでなく、住所から緯度経度を求めるジオコーダーとしても使うことができます。
- 逆ジオコーダー - [@geolonia/open-reverse-geocoder](https://github.com/geolonia/open-reverse-geocoder) - オープンソースの逆ジオコーダーです。緯度経度から都道府県名および市町村名を取得することができます。
  をコンソール上で簡単にテストするためのモジュール

## Usage

### Installation

```bash
npm install -g @toriyama/geolonian
```

### Command

#### 住所正規化ツール

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

#### 逆ジオコーダー

```bash
geolonian reverse-geocoder 135.195444 34.690167
```

```javascript
{
	"code": "28110",
	"prefecture": "兵庫県",
	"city": "神戸市中央区"
}
```

```bash
geolonian reverse-geocoder --lat 135 --lng 35
```

```javascript
{
	"code": "28213",
	"prefecture": "兵庫県",
	"city": "西脇市"
}
```

## Development

```bash
git clone git@github.com:YUUKIToriyama/geolonian.git
cd geolonian
npm install
npm run build
node dist/main.js
```
