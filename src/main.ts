#!/usr/bin/env node
import * as Caporal from '@caporal/core';
import { startRepl, callGeolonia } from './lib';

import fs from "fs";
const { version } = JSON.parse(fs.readFileSync(__dirname + "/../package.json").toString("utf8"));

Caporal.program
	.name("geolonia-nja-cli")
	.version(version)
	.description("@geolonia/normalize-japanese-addressesをコンソール上で簡単にテストするためのモジュール");

Caporal.program
	.command("normalize", "Normalize an address")
	.option("-a, --address <address>", "Address")
	.option("-l, --level <depth>", "Depth of normalization", {
		default: 3
	})
	.action(({ options }) => {
		if (options.address != undefined) {
			// 引数が指定されている場合
			// その住所について正規化を行なう
			callGeolonia(options.address as string, {
				level: options.level as number
			})
		} else {
			// 引数がない場合
			// REPLを起動する
			startRepl();
		}
	});

Caporal.program.run();
