;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [2727],
  {
    62469: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            sv: {
              categories: { cardinal: ['one', 'other'], ordinal: ['one', 'other'] },
              fn: function (a, l) {
                var e = String(a).split('.'),
                  t = !e[1],
                  n = Number(e[0]) == a,
                  o = n && e[0].slice(-1),
                  r = n && e[0].slice(-2)
                return l ? ((1 != o && 2 != o) || 11 == r || 12 == r ? 'other' : 'one') : 1 == a && t ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['sv'],
        })
    },
  },
])
