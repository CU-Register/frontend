;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [6523],
  {
    64674: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            pl: {
              categories: { cardinal: ['one', 'few', 'many', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var e = String(a).split('.'),
                  t = e[0],
                  n = !e[1],
                  o = t.slice(-1),
                  i = t.slice(-2)
                return l
                  ? 'other'
                  : 1 == a && n
                  ? 'one'
                  : n && o >= 2 && o <= 4 && (i < 12 || i > 14)
                  ? 'few'
                  : (n && 1 != t && (0 == o || 1 == o)) || (n && o >= 5 && o <= 9) || (n && i >= 12 && i <= 14)
                  ? 'many'
                  : 'other'
              },
            },
          },
          availableLocales: ['pl'],
        })
    },
  },
])
