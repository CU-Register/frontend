;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [9677],
  {
    25421: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            hr: {
              categories: { cardinal: ['one', 'few', 'other'], ordinal: ['other'] },
              fn: function (l, a) {
                var e = String(l).split('.'),
                  t = e[0],
                  i = e[1] || '',
                  n = !e[1],
                  o = t.slice(-1),
                  r = t.slice(-2),
                  c = i.slice(-1),
                  s = i.slice(-2)
                return a
                  ? 'other'
                  : (n && 1 == o && 11 != r) || (1 == c && 11 != s)
                  ? 'one'
                  : (n && o >= 2 && o <= 4 && (r < 12 || r > 14)) || (c >= 2 && c <= 4 && (s < 12 || s > 14))
                  ? 'few'
                  : 'other'
              },
            },
          },
          availableLocales: ['hr'],
        })
    },
  },
])