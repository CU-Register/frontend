;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [9486],
  {
    93349: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            nl: {
              categories: { cardinal: ['one', 'other'], ordinal: ['other'] },
              fn: function (a, l) {
                var e = !String(a).split('.')[1]
                return l ? 'other' : 1 == a && e ? 'one' : 'other'
              },
            },
          },
          availableLocales: ['nl'],
        })
    },
  },
])
