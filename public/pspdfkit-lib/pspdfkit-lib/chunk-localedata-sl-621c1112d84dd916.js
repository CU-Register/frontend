;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1277],
  {
    50230: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            sl: {
              categories: { cardinal: ['one', 'two', 'few', 'other'], ordinal: ['other'] },
              fn: function (l, a) {
                var e = String(l).split('.'),
                  t = e[0],
                  o = !e[1],
                  n = t.slice(-2)
                return a
                  ? 'other'
                  : o && 1 == n
                  ? 'one'
                  : o && 2 == n
                  ? 'two'
                  : (o && (3 == n || 4 == n)) || !o
                  ? 'few'
                  : 'other'
              },
            },
          },
          availableLocales: ['sl'],
        })
    },
  },
])
