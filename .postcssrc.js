// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    "postcss-url": {}
  }
}
