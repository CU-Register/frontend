;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1385],
  {
    88821: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            ru: {
              categories: { cardinal: ['one', 'few', 'many', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var e = String(a).split('.'),
                  t = e[0],
                  n = !e[1],
                  o = t.slice(-1),
                  r = t.slice(-2)
                return l
                  ? 'other'
                  : n && 1 == o && 11 != r
                  ? 'one'
                  : n && o >= 2 && o <= 4 && (r < 12 || r > 14)
                  ? 'few'
                  : (n && 0 == o) || (n && o >= 5 && o <= 9) || (n && r >= 11 && r <= 14)
                  ? 'many'
                  : 'other'
              },
            },
          },
          availableLocales: ['ru'],
        })
    },
  },
])
