const fs = require("fs");
const path = require("path");

function escapeRtf(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\n/g, "\\par\n");
}

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "styles.css"), "utf8");
const js = fs.readFileSync(path.join(__dirname, "script.js"), "utf8");

const repoLink = "https://github.com/Bhavna248/Hostel_Webpage_Practical";
const deployLink = "https://bhavna248.github.io/Hostel_Webpage_Practical/";

const body = [
  "{\\rtf1\\ansi\\deff0",
  "\\b Hostel Webpage Practical Submission\\b0\\par",
  "Practical: Create a hostel webpage using HTML, CSS, and JavaScript with background image, leave application form, hostel fee details, hostel location map, login page, and related information.\\par\\par",
  "\\b Open-source Repository Link:\\b0 " + repoLink + "\\par",
  "\\b Deployment Link (Verification):\\b0 " + deployLink + "\\par\\par",
  "\\b Project Files Included:\\b0 index.html, styles.css, script.js\\par\\par",
  "\\b index.html\\b0\\par",
  escapeRtf(html),
  "\\par\\par\\b styles.css\\b0\\par",
  escapeRtf(css),
  "\\par\\par\\b script.js\\b0\\par",
  escapeRtf(js),
  "\\par}",
].join("\n");

const outPath = path.join(__dirname, "Hostel_Webpage_Practical_Submission.doc");
fs.writeFileSync(outPath, body, "utf8");
console.log(`Created ${outPath}`);
