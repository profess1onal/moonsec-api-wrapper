/*
Read README.md for more information on how to use this.
*/

module.exports = {
  api_key: "API KEY HERE",
  options: {
    "StringEncryption": true,
    "ConstantEncyrption": true,
    "AntiDump": true,
    "SmallerOutput": false
  },
  bytecode: {
    "Arabic": true,
    "Letters": false,
    "Symbols": false,
    "Russian" : false,
    "Whitespace": false,
    "Chinese": false,
    "Emoji": false
  },
  platform: {
    "lua": true,
    "roblox": false,
    "csgo": false
  },
};
