;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1145],
  {
    74114: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            fr: {
              categories: { cardinal: ['one', 'other'], ordinal: ['one', 'other'] },
              fn: function (a, l) {
                return l ? (1 == a ? 'one' : 'other') : a >= 0 && a < 2 ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['fr'],
        })
    },
  },
])
