;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1077],
  {
    84870: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            sk: {
              categories: { cardinal: ['one', 'few', 'many', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var e = String(a).split('.'),
                  t = e[0],
                  n = !e[1]
                return l ? 'other' : 1 == a && n ? 'one' : t >= 2 && t <= 4 && n ? 'few' : n ? 'other' : 'many'
              },
            },
          },
          availableLocales: ['sk'],
        })
    },
  },
])
