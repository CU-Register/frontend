;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [3424],
  {
    71409: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            it: {
              categories: { cardinal: ['one', 'other'], ordinal: ['many', 'other'] },
              fn: function (a, l) {
                var t = !String(a).split('.')[1]
                return l ? (11 == a || 8 == a || 80 == a || 800 == a ? 'many' : 'other') : 1 == a && t ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['it'],
        })
    },
  },
])
