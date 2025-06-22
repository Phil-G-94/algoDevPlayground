// run.js
const { execSync } = require("child_process");
const path = require("path");

const [, , lang, topic, file] = process.argv;

if (!lang || !topic || !file) {
  console.error("Usage: node run.js <js|ts> <topic> <file>");
  process.exit(1);
}

const filePath = path.resolve(__dirname, lang, topic, file + (lang === "ts" ? ".ts" : ".js"));

try {
  if (lang === "ts") {
    execSync(`npx ts-node "${filePath}"`, { stdio: "inherit" });
  } else {
    execSync(`node "${filePath}"`, { stdio: "inherit" });
  }
} catch (err) {
  console.error("Error running the file:", err.message);
}
