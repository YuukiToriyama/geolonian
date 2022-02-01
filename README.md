# YUUKIToriyama/geolonian

便利なオープンソースの GIS ライブラリ群をコマンドライン上でも使えるようにしました。

- 住所正規化ツール
  - [@geolonia/normalize-japanese-addresses](https://github.com/geolonia/normalize-japanese-addresses)
  - [Geolonia 住所データ](https://geolonia.github.io/japanese-addresses/)に基づいて住所の正規化を行なうライブラリです。
  - 表記のゆらぎの修正だけでなく、住所から緯度経度を求めるジオコーダーとしても使うことができます。
- 逆ジオコーダー
  - [@geolonia/open-reverse-geocoder](https://github.com/geolonia/open-reverse-geocoder)
  - オープンソースの逆ジオコーダーです。緯度経度から都道府県名および市町村名を取得することができます。

## Usage

### Installation

```bash
npm install -g @toriyama/geolonian
```

### Command

#### 住所正規化ツール

`geolonian normalize`コマンドを使って日本の住所の正規化を行なうことが出来ます。

```bash
geolonian normalize --address <address> --level <level>
```

<!-- prettier-ignore -->
| 引数 | 説明 | 例 |
| - | - | - |
| -a --address | 正規化したい住所を指定します(required) | 東京都墨田区押上１丁目１−２ |
| -l --level | 正規化の深度を指定します(optional) | [本家ライブラリのREADME](https://github.com/geolonia/normalize-japanese-addresses#normalizeaddress-string)を参照ください |
| --use-local | 事前にダウンロードしたデータベースをもとに正規化を行ないます(optional) | true(デフォルトではfalse) |

実行すると次のように JSON データが表示されます。

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

また、v0.3.0 からオフライン時の実行にも対応しました。
インターネットの接続が不安定な環境や、大量なデータを処理する場合オフラインモードを利用することが出来ます。  
オフラインモードを用いる場合は、まず[Geolonia 住所データ](https://geolonia.github.io/japanese-addresses/)をローカルにダウンロードする必要があります。

```bash
geolonian update
```

```text
downloading [====================] /tmp/geolonian/ja/福島県/福島市.json (1894/1894)
1894個のファイルが /tmp/geolonian にダウンロードされました。
```

コマンドを実行すると`/tmp/geolonian`以下に必要なデータセットがダウンロードされます。
その上で、`--use-local`フラグを有効にしてコマンドを実行すると、ダウンロード済みのファイルをもとに正規化が行われます。

```bash
geolonian normalize --use-local --address 東京都墨田区押上１丁目１−２
```

```javascript
{
	"pref": "東京都",
	"city": "墨田区",
	"town": "押上一丁目",
	"addr": "1-2",
	"lat": 35.710776,
	"lng": 139.813826,
	"level": 3
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

## Please help me

バグや改善点などありましたら Issues でご教授ください。
今後の開発の参考にさせていただきます。

## Author

Torichan([@CoconMap](https://twitter.com/CoconMap))
