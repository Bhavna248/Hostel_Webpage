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

const body = [
  "{\\rtf1\\ansi\\deff0",
  "\\b Hostel Webpage Practical\\b0\\par",
  "Assignment: Create a hostel webpage using HTML, CSS, and JavaScript with background image, leave form, hostel fee details, map location, and login page.\\par\\par",
  "\\b GitHub Repository Link:\\b0 https://github.com/Bhavna248/Hostel_Webpage_Practical\\par",
  "\\b Deployment Link (GitHub Pages):\\b0 https://bhavna248.github.io/Hostel_Webpage_Practical/\\par",
  "Note: If the deployment page is not visible yet, enable GitHub Pages from repository settings (Deploy from branch: main / root).\\par\\par",
  "\\b index.html\\b0\\par",
  escapeRtf(html),
  "\\par\\par\\b styles.css\\b0\\par",
  escapeRtf(css),
  "\\par\\par\\b script.js\\b0\\par",
  escapeRtf(js),
  "\\par}",
].join("\n");

const outPath = path.join(__dirname, "Hostel_Webpage_Practical.doc");
fs.writeFileSync(outPath, body, "utf8");
console.log(`Created ${outPath}`);
