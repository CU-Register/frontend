;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [5014],
  {
    41262: () => {
      Intl.PluralRules &&
        'function' == typeof Intl.PluralRules.__addLocaleData &&
        Intl.PluralRules.__addLocaleData({
          data: {
            en: {
              categories: { cardinal: ['one', 'other'], ordinal: ['one', 'two', 'few', 'other'] },
              fn: function (e, a) {
                var l = String(e).split('.'),
                  t = !l[1],
                  n = Number(l[0]) == e,
                  o = n && l[0].slice(-1),
                  r = n && l[0].slice(-2)
                return a
                  ? 1 == o && 11 != r
                    ? 'one'
                    : 2 == o && 12 != r
                    ? 'two'
                    : 3 == o && 13 != r
                    ? 'few'
                    : 'other'
                  : 1 == e && t
                  ? 'one'
                  : 'other'
              },
            },
          },
          availableLocales: ['en'],
        })
    },
  },
])
