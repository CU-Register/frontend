;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1089],
  {
    34861: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            ko: {
              categories: { cardinal: ['other'], ordinal: ['other'] },
              fn: function (a, l) {
                return 'other'
              },
            },
          },
          availableLocales: ['ko'],
        })
    },
  },
])
