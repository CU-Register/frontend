;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [1518],
  {
    89723: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            ms: {
              categories: { cardinal: ['other'], ordinal: ['one', 'other'] },
              fn: function (a, l) {
                return l && 1 == a ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['ms'],
        })
    },
  },
])
