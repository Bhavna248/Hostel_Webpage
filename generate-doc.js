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
  "\\b Hostel Webpage Practical - Shweta Sharma\\b0\\par",
  "Assignment: Create a hostel webpage using HTML, CSS, and JavaScript with background image, leave form, hostel fee details, map location, and login page.\\par\\par",
  "\\b Deployment Link (for verification):\\b0 https://DEPLOYMENT-LINK-PENDING\\par",
  "Note: Replace this placeholder with your live public deployment link after publishing.\\par\\par",
  "\\b index.html\\b0\\par",
  escapeRtf(html),
  "\\par\\par\\b styles.css\\b0\\par",
  escapeRtf(css),
  "\\par\\par\\b script.js\\b0\\par",
  escapeRtf(js),
  "\\par}",
].join("\n");

const outPath = path.join(__dirname, "Hostel_Webpage_Practical_Shweta_Sharma.doc");
fs.writeFileSync(outPath, body, "utf8");
console.log(`Created ${outPath}`);
