;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [9384],
  {
    23773: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            tr: {
              categories: { cardinal: ['one', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                return l ? 'other' : 1 == a ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['tr'],
        })
    },
  },
])
