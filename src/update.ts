import fs from 'fs/promises';
import ProgressBar from 'progress';
import * as LoadersGL from '@loaders.gl/core';
import { ZipLoader } from '@loaders.gl/zip';
import '@loaders.gl/polyfills';

export const updateDatabase = async () => {
	// 古いデータは削除する
	await fs.rm("/tmp/geolonian", {
		recursive: true
	});
	// geolonia/japanese-addressesの最新版をダウンロードする
	const url = "https://github.com/geolonia/japanese-addresses/archive/refs/heads/master.zip";
	// ダウンロードしたzipファイルを解凍する
	const zipFile = LoadersGL.fetchFile(url);
	const fileMap = await LoadersGL.parse(zipFile, ZipLoader);
	// ファイルのパスを取得
	const filePaths = Object.keys(fileMap).filter(filePath => filePath.match(/^japanese-addresses-master\/api\/ja\/.*\.json$/));

	// 進捗バーを設定
	const progress = new ProgressBar('downloading [:bar] :fileName (:current/:total)', {
		total: filePaths.length,
		width: 20
	});

	// ファイル一つ一つについて処理
	for (let filePath of filePaths) {
		const [pref, city] = filePath.split("/").slice(-2);
		// 都道府県ごとのフォルダを作成
		await fs.mkdir(`/tmp/geolonian/ja/${pref}`, {
			recursive: true
		});
		// JSONファイルを作成
		await fs.writeFile(`/tmp/geolonian/ja/${pref}/${city}`, Buffer.from(fileMap[filePath])).catch(error => {
			console.error(error);
		});
		progress.tick({
			fileName: `/tmp/geolonian/ja/${pref}/${city}`
		});
	}

	// 都道府県と市町村名を紐付けるファイルをコピー
	await fs.writeFile(`/tmp/geolonian/ja.json`, Buffer.from(fileMap["japanese-addresses-master/api/ja.json"])).catch(error => {
		console.error(error);
	});

	console.log(`${progress.curr}個のファイルが /tmp/geolonian にダウンロードされました。`);
}