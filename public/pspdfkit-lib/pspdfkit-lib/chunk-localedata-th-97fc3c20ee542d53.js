;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1063],
  {
    33234: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            th: {
              categories: { cardinal: ['other'], ordinal: ['other'] },
              fn: function (a, l) {
                return 'other'
              },
            },
          },
          availableLocales: ['th'],
        })
    },
  },
])
