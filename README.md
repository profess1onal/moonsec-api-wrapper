# MoonSec API Wrapper

Install packages via `npm i --save`.

## Contribution

If you find a way that is faster than what I've made, please contribute by making a pull request! Any issues may be addressed to me via Discord (PolicePocholo#0067) or the issues tab.

Name|Contributed|Date
---|---|---
PolicePocholo|Made the project|1/3/2021


### config.js Use

```js
module.exports = {
  api_key: "API Key Here",
  options: {
    "StringEncryption": false,
    "ConstantEncyrption": false,
    "AntiDump": false,
    "SmallerOutput": false
  },
  bytecode: "1",
  platform: "Lua",
};
```

The API Key is the key you recieve.

The options are:

```
1: StringEncryption: Secures your strings, doesn't cause performance loss.
2: ConstantEncryption: Encrypts constants in the bytecode.
3: AntiDump: Stops common constant dumping methods. (Works on executors only)
4: SmallerOutput: Gives super minified output - this might decrease security
```

Self-Explanatory on how to use.

Bytecode options:

```
0:  Arabic
1:  Letters 1
2:  Symbols 1   (?^+%&/()€#)
3:  Russian
4:  Whitespace
5:  Chinese
6:  Emoji
```

Choose the number and put it in the bytecode option.

Platforms:

```
lua:  Runs on all platforms except roblox.
roblox:  Runs only on roblox.
csgo:  Runs on CS:GO executors.
```
