;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [4932],
  {
    99494: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            pt: {
              categories: { cardinal: ['one', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var t = String(a).split('.')[0]
                return l ? 'other' : 0 == t || 1 == t ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['pt'],
        })
    },
  },
])
