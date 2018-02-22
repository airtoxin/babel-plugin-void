module.exports = function (babel) {
  const { types: t } = babel;

  return {
    name: "babel-plugin-void",
    visitor: {
      Statement(path) {
        path.remove();
      }
    }
  };
}
