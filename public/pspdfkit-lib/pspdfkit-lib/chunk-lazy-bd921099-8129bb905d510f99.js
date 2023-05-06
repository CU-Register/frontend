;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [5747],
  {
    88609: (e, t, a) => {
      'use strict'
      a.r(t), a.d(t, { default: () => B })
      var s = a(67294),
        n = a(94184),
        o = a.n(n),
        r = a(35369),
        l = a(78509),
        i = a(67366),
        c = a(35712),
        d = a(13417),
        m = a(49477),
        u = a(80614),
        g = a(46525),
        p = a(24956),
        f = a(33502),
        P = a(81487),
        v = a(2316),
        y = a(49332),
        b = a(96456),
        h = a(15435),
        I = a(65827),
        k = a(8891),
        E = a(22122),
        w = a(88594)
      const N = s.memo((e) => {
          let {
            items: t,
            builtInItems: n,
            moveDialog: r,
            CSS_HACK: {
              components: { ToolbarButtonComponent: l },
              styles: i,
            },
          } = e
          return t.map((e, t) => {
            const c = n.find((t) => t.type === e.type)
            if ('spacer' === e.type)
              return s.createElement('div', { style: { flex: 1 }, className: e.className, key: `spacer-${t}` })
            if ('move' === e.type && c)
              return s.createElement(
                'div',
                { key: c.type, className: i.moveButtonContainer },
                s.createElement(
                  l,
                  (0, E.Z)({}, c, {
                    icon: a(72303),
                    className: o()(c.className, e.className),
                    onPress: (e) => {
                      c && c.onPress && c.onPress(e)
                    },
                  }),
                ),
                r,
              )
            if (c) {
              const n = (0, w.zW)(c.type)
              return s.createElement(
                l,
                (0, E.Z)({}, c, {
                  key: c.type || t,
                  icon: a(33720)(`./${n}.svg`),
                  onPress: (e) => {
                    c && c.onPress && c.onPress(e)
                  },
                  className: o()(c.className, e.className),
                }),
              )
            }
            if ('custom' === e.type && e.node) {
              const { type: a, ...n } = e
              return s.createElement(
                k.Z,
                (0, E.Z)({}, n, { onPress: (t) => e.onPress && e.onPress(t, e.id), key: e.id || t }),
              )
            }
            return s.createElement(
              l,
              (0, E.Z)({}, e, { key: (c && c.type) || t, onPress: (t) => e.onPress && e.onPress(t, e.id) }),
            )
          })
        }),
        D = s.memo((e) => {
          let {
            items: t,
            builtInItems: n,
            CSS_HACK: {
              components: { ToolbarDropdownGroupComponent: r, ToolbarButtonComponent: l },
              styles: i,
            },
            frameWindow: c,
          } = e
          const d = t.map((e) => {
            let { item: t, index: a } = e
            const s = n.find((e) => e.type === t.type)
            return s
              ? {
                  index: a,
                  item: {
                    ...s,
                    className: o()(s.className, t.className),
                    onPress: (e) => {
                      s.onPress && s.onPress(e)
                    },
                  },
                }
              : { item: t, index: a }
          })
          return (
            d.length > 0 &&
            s.createElement(
              s.Fragment,
              null,
              s.createElement('div', { style: { flex: 1 }, key: 'spacer-responsive' }),
              s.createElement(r, {
                icon: { type: 'more', size: { width: 20, height: 20 } },
                items: d,
                discreteDropdown: !0,
                caretDirection: 'down',
                role: 'menu',
                ItemComponent: (e) => {
                  let { item: t, isSelectedItem: r, state: c, itemComponentProps: d } = e
                  const m = !r && n.find((e) => e.type === t.item.type)
                  if (r) return null
                  const u = m && m.type ? (0, w.zW)(m.type) : ''
                  return t.item.node
                    ? s.createElement(
                        k.Z,
                        (0, E.Z)({}, t.item, {
                          onPress: t.item.onPress ? (e) => t.item.onPress(e, t.id) : void 0,
                          key: t.item.id || t.index,
                        }),
                      )
                    : s.createElement(
                        l,
                        (0, E.Z)({}, t.item, {
                          role: 'menuitem',
                          className: o()(
                            t.item.className,
                            i.toolbar.dropdownButton,
                            'Focused' === c && i.toolbar['dropdownButton' + c],
                          ),
                          icon: m ? a(33720)(`./${u}.svg`) : t.item.icon,
                          itemComponentProps: d,
                        }),
                      )
                },
                onSelect: (e, t) => {
                  const { onPress: a, disabled: s } = t.item
                  s || (a && a(e))
                },
                noInitialSelection: !0,
                frameWindow: c,
              }),
            )
          )
        })
      var x, C, S
      const M = new f.$u({ width: u.zA, height: u._2 }),
        z = (e) => {
          const { styles: t, formatMessage: n, movePreview: r } = e
          return s.createElement(
            'div',
            {
              style: { width: e.width, height: e.height },
              className: o()(t.importedDocument, { [t.importedDocumentMovePreview]: r }),
            },
            s.createElement(
              'div',
              { className: t.importedDocumentIconCircle },
              s.createElement(b.Z, { src: a(42900) }),
            ),
            s.createElement('span', { className: t.importedDocumentInfo }, n(F.documentMergedHere)),
          )
        },
        A = (e, t, a, s) => {
          const n = t.flatten()
          let o = e.map((e) => ({ type: 'page', page: e, rotation: 0, label: e.pageLabel }))
          const r = (e) => {
            const t = e.dupeOf || e.label
            let a = 0
            for (const e of o)
              'dupeOf' in e &&
                null != e.dupeOf &&
                e.dupeOf === t &&
                null != e.dupeNumber &&
                e.dupeNumber > a &&
                (a = e.dupeNumber)
            return a + 1
          }
          let l = 0
          for (const e of n)
            switch (e.type) {
              case 'addPage': {
                let t
                null != e.afterPageIndex
                  ? (t = e.afterPageIndex + 1)
                  : ((0, c.kG)(null != e.beforePageIndex), (t = e.beforePageIndex)),
                  ++l,
                  (o = o.insert(t, {
                    type: 'newPage',
                    label: `${a(F.newPage)} ${l}`,
                    rotation: 0,
                    size: new f.$u({ width: e.pageWidth, height: e.pageHeight }),
                  }))
                break
              }
              case 'removePages': {
                const t = e.pageIndexes.map((e) => o.get(e))
                for (const e of t) {
                  ;(0, c.kG)(null != e)
                  const t = o.indexOf(e)
                  o = o.delete(t)
                }
                break
              }
              case 'rotatePages':
                for (const t of e.pageIndexes) {
                  const a = o.get(t)
                  let s, n
                  ;(0, c.kG)(null != a), (0, c.kG)('page' === a.type || 'newPage' === a.type)
                  const r = a.rotation
                  if (
                    ((n =
                      90 === e.rotateBy
                        ? 270 === r
                          ? 0
                          : r + e.rotateBy
                        : 90 === r
                        ? 0
                        : 180 === r
                        ? 90
                        : 270 === r
                        ? 180
                        : r + e.rotateBy),
                    (0, c.kG)(0 === n || 90 === n || 180 === n || 270 === n),
                    'page' === a.type)
                  )
                    s = { ...a, rotation: n }
                  else {
                    if ('newPage' !== a.type) throw new c.p2('Rotation is not allowed on imported documents')
                    s = { ...a, rotation: n }
                  }
                  o = o.set(t, s)
                }
                break
              case 'duplicatePages': {
                const t = e.pageIndexes.map((e) => o.get(e))
                for (const e of t) {
                  ;(0, c.kG)(null != e), (0, c.kG)('page' === e.type)
                  const t = r(e),
                    a = e.dupeOf || e.label,
                    s = o.indexOf(e)
                  o = o.insert(s + 1, Object.assign({}, e, { label: `${a} (${t})`, dupeOf: a, dupeNumber: t }))
                }
                break
              }
              case 'movePages': {
                const t = e.pageIndexes
                if (1 === t.length) {
                  const a = t[0]
                  let s
                  null != e.beforePageIndex
                    ? (s = e.beforePageIndex)
                    : ((0, c.kG)(null != e.afterPageIndex), (s = e.afterPageIndex + 1))
                  const n = o.get(a)
                  ;(0, c.kG)(null != n)
                  const r = o.get(s),
                    l = o.size
                  ;(o = o.delete(a)),
                    s === l
                      ? (o = o.push(n))
                      : 0 === s
                      ? (o = o.unshift(n))
                      : ((0, c.kG)(null != r), (o = o.insert(o.indexOf(r), n)))
                } else {
                  const a = t.slice().sort()
                  if (null != e.beforePageIndex) {
                    ;(0, c.kG)(0 === e.beforePageIndex)
                    const t = a.map((e) => o.get(e)).reverse()
                    for (const e of t) (0, c.kG)(null != e), (o = o.delete(o.indexOf(e))), (o = o.unshift(e))
                  } else {
                    ;(0, c.kG)(null != e.afterPageIndex)
                    const t = o.get(e.afterPageIndex)
                    ;(0, c.kG)(null != t)
                    const s = a.map((e) => o.get(e)).reverse()
                    for (const e of s)
                      (0, c.kG)(null != e), (o = o.delete(o.indexOf(e))), (o = o.insert(o.indexOf(t) + 1, e))
                  }
                }
                break
              }
              case 'importDocument': {
                let t, a
                if (
                  ('beforePageIndex' in e && null != e.beforePageIndex
                    ? (t = e.beforePageIndex)
                    : ((0, c.kG)('afterPageIndex' in e && null != e.afterPageIndex), (t = e.afterPageIndex + 1)),
                  'string' == typeof e.document)
                ) {
                  const t = e.document
                  ;(0, c.kG)(s.has(t)), (a = s.get(t, 'Imported Document'))
                } else (0, c.kG)('string' == typeof e.document.name), (a = e.document.name)
                o = o.insert(t, { type: 'importedDocument', label: a })
                break
              }
              case 'keepPages':
              case 'applyInstantJson':
              case 'applyXfdf':
              case 'flattenAnnotations':
              case 'performOcr':
              case 'setPageLabel':
              case 'applyRedactions':
              case 'updateMetadata':
              case 'cropPages':
                throw Error('Unknown document operation')
              default:
                ;(0, c.Rz)(e.type)
            }
          return o
        },
        K = (e) => {
          const { pages: t, style: a, styles: n, previewCount: r } = e
          return s.createElement(
            'div',
            { className: n.movePreview },
            s.createElement(
              'div',
              { className: o()(n.movePreviewPages, { [n.movePreviewPagesLoose]: 'loose' === a }) },
              t,
            ),
            s.createElement('div', { className: n.movePreviewCount }, r || t.length),
          )
        },
        B = (e) => {
          const { onCancel: t, onDialog: n } = e,
            {
              pages: E,
              backend: w,
              frameWindow: B,
              footerItems: G,
              toolbarItems: T,
            } = (0, i.v9)((e) => {
              let {
                pages: t,
                backend: a,
                frameWindow: s,
                documentEditorFooterItems: n,
                documentEditorToolbarItems: o,
              } = e
              return { pages: t, backend: a, frameWindow: s, footerItems: n.toJS(), toolbarItems: o.toJS() }
            }, i.wU),
            L = (0, i.I0)(),
            { formatMessage: R } = (0, l.YB)(),
            { styles: O } = e.CSS_HACK,
            [H, Z] = s.useState((0, r.D5)()),
            [W, _] = s.useState((0, r.aV)()),
            [$, V] = s.useState(0),
            U = W.slice(0, W.size - $),
            Y = A(E, U, R, H),
            [J, X] = s.useState((0, r.l4)()),
            [j, q] = s.useState(!1),
            [Q, ee] = s.useState(!1),
            te = s.useRef(null),
            ae = s.useRef(null),
            [se, ne] = s.useState(!1),
            [oe, re] = s.useState(''),
            le = s.useCallback(() => {
              const e = ae.current
              null != e &&
                (se && e.ownerDocument.activeElement !== e
                  ? e.focus()
                  : se || e.ownerDocument.activeElement !== e || e.blur())
            }, [se]),
            ie = s.useCallback(
              (e) => {
                ne(e), le(), n(e)
              },
              [n, le],
            )
          s.useEffect(() => {
            le()
          }, [le])
          const ce = s.useCallback(
              (e) => {
                _(U.push(e)), V(0)
              },
              [U],
            ),
            de = s.useRef(!0)
          s.useLayoutEffect(
            () => () => {
              de.current && (de.current = !1)
            },
            [],
          )
          const me = s.useCallback(() => {
              const e = E.get(0),
                t = e ? e.pageSize : M,
                a = {
                  type: 'addPage',
                  backgroundColor: f.Il.WHITE,
                  pageWidth: t.width,
                  pageHeight: t.height,
                  rotateBy: 0,
                }
              1 === J.size ? (a.afterPageIndex = J.first()) : (a.beforePageIndex = 0), ce(a), X(J.clear())
            }, [E, J, ce]),
            ue = s.useCallback(() => {
              ce({ type: 'removePages', pageIndexes: J.toArray() }), X(J.clear())
            }, [ce, J]),
            ge = s.useCallback(() => {
              ce({ type: 'duplicatePages', pageIndexes: J.toArray() }), X(J.clear())
            }, [ce, J]),
            pe = s.useCallback(() => {
              ce({ type: 'rotatePages', pageIndexes: J.toArray(), rotateBy: 270 })
            }, [ce, J]),
            fe = s.useCallback(() => {
              ce({ type: 'rotatePages', pageIndexes: J.toArray(), rotateBy: 90 })
            }, [ce, J]),
            Pe = s.useCallback(() => {
              ie(!se)
            }, [se, ie]),
            ve = s.useCallback(
              (e) => {
                const t = e.target.value
                let a = t
                const s = parseInt(t, 10)
                isNaN(s) || (a = Math.min(Math.max(s, 0), Y.size).toString()), re(a)
              },
              [Y.size],
            ),
            ye = parseInt(oe, 10),
            be = s.useCallback((e) => {
              let t
              return (
                1 === e.size ||
                null ==
                  e.sort().find((e) => {
                    let a = !1
                    return null != t && (a = e !== t + 1), (t = e), a
                  })
              )
            }, []),
            he = s.useCallback(
              (e, t) => {
                const a = null != t ? t : J,
                  s = be(a)
                return !(a.includes(e - 1) || (0 === e && s && a.includes(0)) || (s && a.sort().first() === e))
              },
              [J, be],
            ),
            Ie = !isNaN(ye) && he(ye),
            ke = s.useCallback(
              (e, t) => {
                const a = null != t ? t : J,
                  s = e - 1
                ce({
                  type: 'movePages',
                  pageIndexes: a.toArray(),
                  ...(0 === e ? { beforePageIndex: 0 } : { afterPageIndex: s }),
                })
                let n = (0, r.l4)(),
                  o = 0
                0 !== e &&
                  ((o = s + 1),
                  a.forEach((e) => {
                    e < s && --o
                  }))
                let l = o
                a.forEach(() => {
                  ;(n = n.add(l)), ++l
                }),
                  X(n)
              },
              [J, ce, X],
            ),
            Ee = s.useCallback(
              (e) => {
                e.preventDefault(), Ie && (ke(ye), ie(!1))
              },
              [Ie, ye, ie, ke],
            ),
            we = s.useCallback(
              (e) => {
                const t = e.target
                if (!se || t.classList.contains(O.moveToolbarButton)) return
                const a = te.current
                ;(0, c.kG)(null != a), a.contains(t) || ie(!1)
              },
              [se, ie, O.moveToolbarButton],
            ),
            Ne = s.useCallback(() => {
              const e = J.sort()
                .toList()
                .map((e) => ({ type: 'movePages', pageIndexes: [e], beforePageIndex: e - 1 }))
              ce(e), X((0, r.l4)(J.toArray().map((e) => e - 1)))
            }, [ce, J]),
            De = s.useCallback(() => {
              const e = J.sort()
                .toList()
                .map((e) => ({ type: 'movePages', pageIndexes: [e], afterPageIndex: e + 1 }))
              ce(e), X((0, r.l4)(J.toArray().map((e) => e + 1)))
            }, [ce, J]),
            xe = s.useCallback(() => {
              X(J.clear()), V($ + 1)
            }, [J, $]),
            Ce = s.useCallback(() => {
              X(J.clear()), V($ - 1)
            }, [J, $]),
            Se = s.useCallback(async () => {
              const e = {}
              1 === J.size ? (e.afterPageIndex = J.first()) : (e.beforePageIndex = 0)
              {
                const t = document.createElement('input')
                ;(t.type = 'file'),
                  (t.accept = 'application/pdf'),
                  (t.onclick = (e) => {
                    ;(0, c.kG)(e.target instanceof HTMLInputElement), (e.target.value = '')
                  }),
                  (t.onchange = (t) => {
                    if (((0, c.kG)(t.target instanceof HTMLInputElement), 0 === t.target.files?.length)) return
                    let a = U
                    for (const s of t.target.files) {
                      if ('string' != typeof s.name || 0 === s.name.length) return
                      if ('application/pdf' !== s.type) return void (0, c.wp)('The uploaded file must be a PDF.')
                      if (-1 !== Y.findIndex((e) => 'importedDocument' === e.type && e.label === s.name)) return
                      a = a.push({ type: 'importDocument', treatImportedDocumentAsOnePage: !0, document: s, ...e })
                    }
                    _(a), V(0), X(J.clear())
                  }),
                  t.click()
              }
            }, [J, H, ce, U, Y]),
            Me = s.useCallback(() => {
              X(Y.keySeq().toSet())
            }, [Y, X]),
            ze = s.useCallback(() => {
              X(J.clear())
            }, [J, X]),
            Ae = s.useCallback(
              (e) => {
                J.has(e) ? X(J.delete(e)) : X(J.add(e))
              },
              [J, X],
            ),
            Ke = s.useCallback(() => {
              t()
            }, [t]),
            Be = s.useCallback(() => {
              q(!0),
                L(
                  (0, g.b_)(
                    U.flatten().toArray(),
                    () => {
                      de.current && q(!1)
                    },
                    (e) => {
                      throw (de.current && q(!1), e)
                    },
                  ),
                )
            }, [L, U]),
            Fe = s.useCallback(async () => {
              q(!0)
              try {
                const e = await w.exportPDFWithOperations(U.flatten().toArray().map(P.kg))
                ;(0, p.cR)(e, B)
              } catch (e) {
                throw e
              } finally {
                de.current && q(!1)
              }
            }, [w, U, B]),
            Ge = (e, t, a, n) => {
              const o = Y.get(e)
              let r
              switch (((0, c.kG)(null != o), o.type)) {
                case 'page':
                  r = s.createElement(m.Z, {
                    key: `page-${o.label}`,
                    page: o.page,
                    size: t,
                    maxSize: a,
                    rotation: o.rotation,
                  })
                  break
                case 'newPage': {
                  const { rotatedWidth: e, rotatedHeight: n } = (0, m.X)(o.size, o.rotation, t, a)
                  r = s.createElement('div', {
                    key: `newPage-${o.label}`,
                    className: O.newPage,
                    style: { width: e, height: n },
                  })
                  break
                }
                case 'importedDocument': {
                  const { containerWidth: e, containerHeight: l } = (0, m.X)(M, 0, t, a)
                  r = s.createElement(z, {
                    width: e,
                    height: l,
                    movePreview: n,
                    key: `importedDoc-${o.label}`,
                    styles: O,
                    formatMessage: R,
                  })
                  break
                }
                default:
                  ;(r = x || (x = s.createElement(s.Fragment, null))), (0, c.Rz)(o.type)
              }
              return {
                item: r,
                label: o.label,
                props: 'page' === o.type ? { 'data-original-page-index': o.page.pageIndex } : {},
              }
            },
            Te = J.size > 0 && J.size !== Y.size && !j,
            Le =
              J.size > 0 &&
              void 0 ===
                J.find((e) => {
                  const t = Y.get(e)
                  return (0, c.kG)(null != t), 'page' !== t.type && 'newPage' !== t.type
                }),
            Re =
              J.size > 0 &&
              void 0 ===
                J.find((e) => {
                  const t = Y.get(e)
                  return (0, c.kG)(null != t), 'page' !== t.type
                }),
            Oe = !J.isEmpty() && J.size !== Y.size && !j,
            He = !J.isEmpty() && !J.includes(0),
            Ze = !J.isEmpty() && !J.includes(Y.size - 1),
            We = $ < W.size,
            _e = $ > 0,
            $e = J.size < Y.size && !j,
            Ve = !J.isEmpty() && !j,
            Ue = s.useRef(null),
            Ye = s.useRef(!1)
          s.useLayoutEffect(() => {
            const e = Ue.current
            if (null == e) return
            Ye.current || (e.focus(), (Ye.current = !0))
            const t = (e) => {
              if (null != document.activeElement && 'INPUT' === document.activeElement.tagName) return
              if (j) return
              const t = e.key.toLowerCase(),
                a = e.metaKey || e.ctrlKey,
                s = a && !e.shiftKey && !e.altKey,
                n = e.altKey && !a && !e.shiftKey,
                o = !a && !e.shiftKey && !e.altKey
              if (e.altKey && e.shiftKey && !a && 'arrowleft' === t && Le) pe()
              else if (e.altKey && e.shiftKey && !a && 'arrowright' === t && Le) fe()
              else if (n && 'arrowleft' === t && He) Ne()
              else if (n && 'arrowright' === t && Ze) De()
              else if (a && e.shiftKey && !e.altKey && 'z' === t && _e) Ce()
              else if (s && 'z' === t && We) xe()
              else if (s && 'a' === t && $e) Me()
              else if (s && 'd' === t && Ve) ze()
              else if (o && 'n' === t) me()
              else if (o && 'd' === t && Te) ue()
              else if (o && 'c' === t && Re) ge()
              else if (o && 'l' === t && Le) pe()
              else if (o && 'r' === t && Le) fe()
              else if (o && 'm' === t && Oe) ie(!0)
              else {
                if (!o || 'i' !== t) return
                Se()
              }
              e.preventDefault()
            }
            return (
              e.addEventListener('keydown', t),
              () => {
                e.removeEventListener('keydown', t)
              }
            )
          }, [Re, Oe, He, Ze, _e, Te, Le, $e, Ve, We, me, ge, Se, Ne, De, Ce, ue, pe, fe, Me, ze, xe, j, ie])
          const Je = O.toolbar.toolbarButton,
            Xe = [
              { type: 'add', onPress: me, className: Je, disabled: j, children: R(F.newPage) },
              { type: 'remove', onPress: ue, className: Je, disabled: !Te, children: R(F.removePage) },
              { type: 'duplicate', onPress: ge, className: Je, children: R(F.duplicatePage), disabled: !Re || j },
              { type: 'rotate-left', onPress: pe, className: Je, children: R(F.rotatePageLeft), disabled: !Le || j },
              { type: 'rotate-right', onPress: fe, className: Je, children: R(F.rotatePageRight), disabled: !Le || j },
              {
                type: 'move',
                onPress: Pe,
                className: o()(Je, O.moveToolbarButton),
                children: R(F.openMoveDialog),
                disabled: !Oe,
              },
              {
                type: 'move-left',
                onPress: Ne,
                className: O.toolbar.toolbarButton,
                children: R(F.moveBefore),
                disabled: !He || j,
              },
              { type: 'move-right', onPress: De, className: Je, children: R(F.moveAfter), disabled: !Ze || j },
              { type: 'import-document', onPress: Se, className: Je, children: R(F.mergeDocument), disabled: j },
              { type: 'spacer' },
              { type: 'undo', onPress: xe, className: Je, children: R(v.Z.undo), disabled: !We || j },
              { type: 'redo', onPress: Ce, className: Je, children: R(v.Z.redo), disabled: !_e || j },
              { type: 'select-all', onPress: Me, className: Je, children: R(F.selectAll), disabled: !$e },
              { type: 'select-none', onPress: ze, className: Je, children: R(F.selectNone), disabled: !Ve },
            ],
            [je, qe] = s.useState(Number.POSITIVE_INFINITY),
            [Qe, et] = s.useMemo(
              () =>
                je === Number.POSITIVE_INFINITY
                  ? [T, []]
                  : [
                      T.slice(0, je),
                      T.slice(je)
                        .filter((e) => 'spacer' !== e.type)
                        .map((e, t) => ({ index: t, item: { ...e, dropdownGroup: 'documentEditor' } })),
                    ],
              [T, je],
            ),
            [tt, at] = s.useState(new f.$u()),
            st = s.useCallback(
              (e) => {
                at(
                  (t) => (
                    t.width !== e.width && qe(Number.POSITIVE_INFINITY), new f.$u({ width: e.width, height: e.height })
                  ),
                )
              },
              [at, qe],
            ),
            nt = s.useRef(null)
          s.useLayoutEffect(() => {
            const e = nt.current
            if (!e || 0 === tt.width) return
            const t = e.children
            if (t.length === je) return
            const a = e.ownerDocument.defaultView.getComputedStyle(e)
            let s =
              44 +
              (parseInt(a.getPropertyValue('padding-left')) || 0) +
              (parseInt(a.getPropertyValue('padding-right')) || 0)
            const n = [].findIndex.call(t, (e, t) => 'spacer' !== T[t].type && ((s += e.clientWidth), s > tt.width))
            qe(-1 === n ? Number.POSITIVE_INFINITY : n)
            e.ownerDocument.defaultView.innerWidth >= u.Fg ? ee(!0) : ee(!1)
          }, [tt, je, qe, T])
          const ot = s.useCallback(
              (e) => {
                'Escape' === e.key && se && (ie(!1), e.stopPropagation())
              },
              [se, ie],
            ),
            rt = s.useMemo(() => null != Qe.find((e) => 'move' === e.type), [Qe]),
            lt = s.createElement(
              'div',
              {
                className: o()(
                  O.moveDialog,
                  { [O.moveDialogShown]: se, [O.moveDialogDetached]: !rt },
                  'PSPDFKit-DocumentEditor-MoveDialog',
                ),
                ref: te,
              },
              s.createElement(
                'form',
                { onSubmit: Ee, className: O.moveDialogForm },
                s.createElement('span', { className: O.moveDialogFormLabel }, R(F.insertAfterPage)),
                s.createElement('input', {
                  className: O.moveDialogFormInput,
                  type: 'number',
                  min: '0',
                  max: Y.size,
                  value: oe,
                  onChange: ve,
                  ref: ae,
                }),
                s.createElement(d.zx, { type: 'submit', className: O.moveDialogMoveButton, disabled: !Ie }, R(F.move)),
              ),
              s.createElement(
                'div',
                { className: O.moveDialogHint },
                s.createElement('p', { className: O.moveDialogHintText }, R(F.docEditorMoveBeginningHint)),
              ),
            ),
            it = s.useCallback(
              (e, t) => {
                const a = (0, r.l4)(e)
                he(t, a) && ke(t, a)
              },
              [ke, he],
            )
          let ct
          const dt = se && !isNaN(ye)
          if (dt) {
            const e = J.toList()
                .sort()
                .map((e) => Ge(e, 160, 160, !0).item)
                .toArray(),
              t = s.createElement(K, { pages: e, style: 'straight', styles: O })
            dt &&
              ((ct =
                0 === ye
                  ? { previewContent: t, pageIndex: 0, position: 'left' }
                  : { previewContent: t, pageIndex: ye - 1, position: 'right' }),
              Ie || (ct.disabled = !0))
          }
          const mt = s.useMemo(
              () => ({
                cancel: {
                  element: s.createElement(d.zx, null, R(v.Z.cancel)),
                  onPress: Ke,
                  className: 'PSPDFKit-DocumentEditor-CancelButton',
                },
                'selected-pages': {
                  element: s.createElement(
                    'div',
                    null,
                    s.createElement('div', { className: O.pagesSelectedIcon }, s.createElement(b.Z, { src: a(17233) })),
                    R(F.pagesSelected, { arg0: J.size }),
                  ),
                  className: o()({
                    [O.pagesSelectedIndicator]: !0,
                    [O.pagesSelectedIndicatorShown]: J.size > 0,
                    'PSPDFKit-DocumentEditor-PagesSelectedIndicator': !0,
                  }),
                },
                spacer: {
                  element: C || (C = s.createElement('div', null)),
                  className: o()({ [O.spacer]: !0, 'PSPDFKit-DocumentEditor-Spacer': !0 }),
                },
                'loading-indicator': {
                  element: S || (S = s.createElement(h.Z, null)),
                  hide: !j,
                  className: 'PSPDFKit-DocumentEditor-LoadingIndicator',
                },
                'save-as': {
                  element: s.createElement(d.zx, null, R(v.Z.saveAs)),
                  onPress: Fe,
                  disabled: j,
                  className: 'PSPDFKit-DocumentEditor-SaveAsButton',
                },
                save: {
                  element: s.createElement(d.zx, { primary: !0 }, R(v.Z.save)),
                  disabled: U.isEmpty() || j,
                  onPress: Be,
                  className: 'PSPDFKit-DocumentEditor-SaveButton',
                },
              }),
              [O, R, Ke, Fe, Be, j, U, J],
            ),
            ut = s.useMemo(
              () =>
                G.map((e, t) => {
                  const { onPress: a, className: n, type: r, node: l, id: i } = e
                  if (((0, c.kG)(r), 'custom' === r))
                    return l
                      ? s.createElement(k.Z, {
                          className: n,
                          onPress: a ? (e) => a(e, i) : void 0,
                          key: i || t,
                          node: l,
                        })
                      : null
                  {
                    const e = mt[r]
                    return e.hide
                      ? null
                      : s.cloneElement(e.element, {
                          onClick: (t) => {
                            e.onPress && e.onPress(t)
                          },
                          key: r,
                          disabled: e.disabled,
                          className: o()(e.className, n),
                        })
                  }
                }),
              [G, mt],
            )
          return s.createElement(
            'div',
            {
              className: o()(O.docEditor, 'PSPDFKit-DocumentEditor'),
              onClick: we,
              onKeyDown: ot,
              tabIndex: '-1',
              ref: Ue,
            },
            s.createElement(
              'div',
              { className: o()(O.toolbar.root, O.toolbarRoot, 'PSPDFKit-DocumentEditor-Toolbar'), style: { flex: 0 } },
              s.createElement(
                'div',
                { ref: nt, className: O.toolbarContainer },
                s.createElement(N, { items: Qe, builtInItems: Xe, moveDialog: lt, CSS_HACK: e.CSS_HACK }),
              ),
              s.createElement(D, { builtInItems: Xe, items: et, CSS_HACK: e.CSS_HACK, frameWindow: B }),
            ),
            s.createElement(
              'div',
              { className: O.pagesView },
              s.createElement(I.Z, { onResize: st }),
              !rt && lt,
              s.createElement(
                'div',
                { className: o()(O.pagesGrid, { [O.pagesGridLargeThumbnails]: Q }) },
                s.createElement(y.Z, {
                  canInsert: (e, t) => he(t, (0, r.l4)(e)),
                  totalItems: Y.size,
                  width: tt.width,
                  height: tt.height,
                  itemScale: e.scale,
                  renderItemCallback: Ge,
                  renderDragPreviewCallback: (e, t, a, n) => {
                    const o = (0, r.aV)(e)
                      .filter((e) => e !== t)
                      .sort()
                      .push(t)
                      .slice(-5)
                      .map((e) => Ge(e, a, n, !0).item)
                      .toArray()
                    return s.createElement(K, { pages: o, style: 'straight', styles: O, previewCount: e.length })
                  },
                  onItemPress: Ae,
                  selectedItemIndexes: J,
                  cssPrefix: 'PSPDFKit-DocumentEditor',
                  moveCursor: null != ct ? ct : void 0,
                  onItemsMove: se ? void 0 : it,
                }),
              ),
            ),
            s.createElement('div', { className: o()(O.bottomBar, 'PSPDFKit-DocumentEditor-Footer') }, ut),
          )
        },
        F = (0, l.vU)({
          newPage: { id: 'newPage', defaultMessage: 'New Page', description: 'Add new page' },
          removePage: { id: 'removePage', defaultMessage: 'Remove Page', description: 'Remove page' },
          duplicatePage: { id: 'duplicatePage', defaultMessage: 'Duplicate Page', description: 'Duplicate page' },
          rotatePageLeft: { id: 'rotatePageLeft', defaultMessage: 'Rotate Page Left', description: 'Rotate Page Left' },
          rotatePageRight: {
            id: 'rotatePageRight',
            defaultMessage: 'Rotate Page Right',
            description: 'Rotate Page Right',
          },
          mergeDocument: { id: 'mergeDocument', defaultMessage: 'Merge Document', description: 'Merge Document' },
          selectAll: { id: 'selectAll', defaultMessage: 'Select All', description: 'Select All Pages' },
          selectNone: { id: 'selectNone', defaultMessage: 'Select None', description: 'Deselect All Pages' },
          openMoveDialog: {
            id: 'openMoveDialog',
            defaultMessage: 'Move…',
            description: 'Open dialog for moving pages to specific location in the document',
          },
          move: { id: 'move', defaultMessage: 'Move', description: 'Move pages to specific location in the document' },
          moveBefore: { id: 'moveBefore', defaultMessage: 'Move Before', description: 'Move page before previous one' },
          moveAfter: { id: 'moveAfter', defaultMessage: 'Move After', description: 'Move page after next one' },
          documentMergedHere: {
            id: 'documentMergedHere',
            defaultMessage: 'Document will be merged here',
            description: 'Placeholder for the imported document',
          },
          pagesSelected: {
            id: 'pagesSelected',
            defaultMessage:
              '{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }',
            description: 'Number of pages selected.',
          },
          insertAfterPage: {
            id: 'insertAfterPage',
            defaultMessage: 'Insert after page',
            description: 'Move selected pages after designated page index.',
          },
          docEditorMoveBeginningHint: {
            id: 'docEditorMoveBeginningHint',
            defaultMessage: 'Type “0” to move selected pages to the beginning of the document.',
            description:
              'Instructions for how to move pages to the beginning of the document when using the Move button in the Document Editor.',
          },
        })
    },
    33720: (e, t, a) => {
      var s = {
        './add.svg': 14809,
        './duplicate.svg': 89950,
        './extract.svg': 61030,
        './help.svg': 19774,
        './importDocument.svg': 42900,
        './move.svg': 72303,
        './moveLeft.svg': 40020,
        './moveRight.svg': 46716,
        './multiplePages.svg': 17233,
        './redo.svg': 68433,
        './remove.svg': 89316,
        './rotateLeft.svg': 10003,
        './rotateRight.svg': 17756,
        './selectAll.svg': 56070,
        './selectNone.svg': 48767,
        './undo.svg': 16751,
      }
      function n(e) {
        var t = o(e)
        return a(t)
      }
      function o(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return s[e]
      }
      ;(n.keys = function () {
        return Object.keys(s)
      }),
        (n.resolve = o),
        (e.exports = n),
        (n.id = 33720)
    },
  },
])
