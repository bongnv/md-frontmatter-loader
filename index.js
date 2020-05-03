const frontmatter = require("front-matter");

module.exports = function (source, map, meta) {
  const fm = frontmatter(source);
  const newMeta = Object.assign({}, meta, fm);
  this.callback(null, source, map, newMeta);
};
