;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [2279],
  {
    29799: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            nb: {
              categories: { cardinal: ['one', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                return l ? 'other' : 1 == a ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['nb'],
        })
    },
  },
])
