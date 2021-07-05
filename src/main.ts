#!/usr/bin/env node
import { cac } from 'cac';
import { startRepl, callGeolonia } from './lib';

import fs from "fs";
const { version } = JSON.parse(fs.readFileSync(__dirname + "/../package.json").toString("utf8"));

const cli = cac("geolonia-nja-cli");
cli.version(version, "-v, --version");
cli.help();
cli.option("-a, --address <string>", "住所を指定");
cli.option("-l, --level <number>", "「深さ」を指定", {
	default: 3
});

const parsed = cli.parse();
const level: number = parsed.options.level;
const address = parsed.options.address;

if (typeof address === "string") {
	// 引数が指定されている場合
	// その住所について正規化を行なう
	callGeolonia(address, {
		level: level
	});
} else {
	// 引数がない場合
	// REPLを起動する
	startRepl();
}