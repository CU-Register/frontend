;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [752],
  {
    99680: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            da: {
              categories: { cardinal: ['one', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var e = String(a).split('.'),
                  t = e[0],
                  n = Number(e[0]) == a
                return l || (1 != a && (n || (0 != t && 1 != t))) ? 'other' : 'one'
              },
            },
          },
          availableLocales: ['da'],
        })
    },
  },
])
