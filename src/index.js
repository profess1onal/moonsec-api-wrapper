const fetch = require("node-fetch");
const fs = require("fs");
const term = require("terminal-kit").terminal;

const { api_key, options, bytecode, platform } = require("../config");
const script = fs.readFileSync("script.txt", "utf-8");

let optionsl;
let bytecodel;
let platforml;

if (options.AntiDump) {
  if (optionsl) {
    optionsl = optionsl + "+AntiDump";
  } else {
    optionsl = "AntiDump";
  }
}

if (options.ConstantEncyrption) {
  if (optionsl) {
    optionsl = optionsl + "+ConstantEncyrption";
  } else {
    optionsl = "ConstantEncyrption";
  }
}

if (options.SmallerOutput) {
  if (optionsl) {
    optionsl = optionsl + "+SmallerOutput";
  } else {
    optionsl = "SmallerOutput";
  }
}

if (options.StringEncryption) {
  if (optionsl) {
    optionsl = optionsl + "+StringEncryption";
  } else {
    optionsl = "StringEncryption";
  }
}

if (bytecode.Arabic) bytecodel = "0";
if (bytecode.Letters) bytecodel = "1";
if (bytecode.Symbols) bytecodel = "2";
if (bytecode.Russian) bytecodel = "3";
if (bytecode.Whitespace) bytecodel = "4";
if (bytecode.Chinese) bytecodel = "5";
if (bytecode.Emoji) bytecodel = "6";

if (platform.lua) platforml = "lua";
if (platform.roblox) platforml = "roblox";
if (platform.csgo) platforml = "csgo";

const link = `https://api.f3d.at/v1/obfuscate.php?key=${api_key}&options=${optionsl}&bytecode=${bytecodel}&platform=${platforml}`;

fetch(link, {
  method: "POST",
  headers: {
    "Content-Type": "text/html charset=utf-8",
  },
  body: script,
}).then((res) => {
  (async () => {
    const script = await res.text();
    if (res.status === 400) {
      return console.log(
        `You set the 'bytecode' parameter to something invalid. It must be an integer between 0 and 6.`
      );
    }

    if (res.status === 403) {
      return console.log(
        `You are probably missing the API key in query, or your API key is invalid`
      );
    }

    if (res.status === 413) {
      return console.log(
        `Your request entity too large, your script is either too small (even empty) or too big (over 8mb).`
      );
    }

    if (res.status === 429) {
      return console.log(
        `You are being ratelimited. You can obfuscate 1 file per 5 seconds, attempting to exceed this limit will result a 429.`
      );
    }

    if (res.status === 500) {
      if (script != "") {
        return console.log(`Obfuscation failed! Error: ${script}`);
      } else {
        return console.log(
          `Obfuscation failed! If this was a syntax error, you should have recieved your error.`
        );
      }
    }

    console.log(
      `Done sending data and we have recieved your obfuscated script!`
    );

    fs.open("output.lua", "w", function (err) {
      if (err) throw err;
      term.brightBlue("Opened file, saving content..\n");
    });

    fs.writeFile("output.lua", script, function (err) {
      if (err) throw err;
      term.brightGreen("Saved!\n");
    });
  })();
});
