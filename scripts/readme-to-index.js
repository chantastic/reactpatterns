const cons = require("consolidate")
const fs = require("fs")
const marked = require("marked")
const pygmentize = require("pygmentize-bundled")

const readme = fs.readFileSync("./README.markdown", "utf8")

const writeFile = (err, html) => {
  if (err) throw err;
  fs.writeFile("index.html", html, () => {})
}

const consTemplate = (err, content) => {
  if (err) throw err
  cons["lodash"](
    "scripts/_index.html",
    {content: content},
    writeFile
  )
}

marked.setOptions({
  smartypants: true,
  highlight: (code, lang, callback) => (
    pygmentize(
      { lang: lang, format: 'html' },
      code,
      (err, result) => callback(err, result.toString())
    )
  )
})

marked(readme, consTemplate)
