;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [8869],
  {
    21084: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            de: {
              categories: { cardinal: ['one', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var e = !String(a).split('.')[1]
                return l ? 'other' : 1 == a && e ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['de'],
        })
    },
  },
])
