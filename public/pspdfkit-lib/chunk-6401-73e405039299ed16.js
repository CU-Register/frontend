'use strict'
;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [6401],
  {
    29412: (e, t, i) => {
      i.d(t, { W: () => l })
      var s = i(35369),
        n = i(35712),
        a = i(33502),
        r = i(50893),
        o = i(16396)
      class l {
        attachmentsCache = (0, s.D5)()
        cachedAPStreams = (0, s.D5)()
        pageAPStreamsPromises = (0, s.D5)()
        annotationAPStreamPromises = (0, s.D5)()
        getAnnotationFormFieldAndValue(e) {
          const t = this.provider
          ;(0, n.kG)(t instanceof t.constructor, 'Backend can only use backend annotation provider')
          const i = e instanceof a.x_ ? t._readStateCallbacks?.getFormFieldByName(e.formFieldName) : null
          return {
            formField: i,
            formFieldValue:
              !i || i instanceof a.Yo
                ? null
                : new a.KD({
                    name: i.name,
                    value:
                      void 0 !== i.formattedValue ? i.formattedValue : 'string' == typeof i.value ? i.value : i.values,
                  }),
          }
        }
        getAnnotationAvailableVariants(e) {
          const t = this.provider
          ;(0, n.kG)(t instanceof t.constructor, 'Backend can only use backend annotation provider')
          return [...(t._readStateCallbacks?.getAvailableVariants(e) || []), 'normal']
        }
        cachedRenderAnnotation(e, t, i, s, a) {
          const o = this.provider
          ;(0, n.kG)(o instanceof o.constructor, 'Backend can only use backend annotation provider')
          const { formField: l, formFieldValue: h } = this.getAnnotationFormFieldAndValue(e)
          if (!(0, r._R)(e, l)) return this.renderAnnotation(e, h, t, i, s, a)
          const c = this.getAnnotationAvailableVariants(e)
          let u = !1,
            d = () => {
              u = !0
            }
          return {
            promise: new Promise(async (n, r) => {
              const o = (t) => {
                  const i = this.annotationAPStreamPromises.get(e.id)
                  i && ((this.annotationAPStreamPromises = this.annotationAPStreamPromises.delete(e.id)), i(t))
                },
                l = this.annotationAPStreamPromises.get(e.id)
              ;(this.annotationAPStreamPromises = this.annotationAPStreamPromises.set(e.id, n)), l && l(null)
              try {
                const r = this.pageAPStreamsPromises.get(e.pageIndex)
                if (!r) {
                  const t = new Promise((t) => {
                    this.annotationAPStreamPromises = this.annotationAPStreamPromises.set(e.id, t)
                  })
                  return void n(await t)
                }
                await r
                const l = this.cachedAPStreams.get(e.pageIndex)
                if (l) {
                  const t = l ? l.get(e.id) : null
                  if (t) return void o(this.getAPStream(t, a))
                }
                const { promise: m, cancel: g } = this.renderAPStream(e, h, t, i, s, c, a)
                if (u) o(null)
                else if (((d = g), c.length > 1)) {
                  const t = await Promise.all(m.map((e) => e.promise))
                  o(t[c.indexOf(a || 'normal')]),
                    t.some(Boolean) &&
                      this.cacheAPStream(
                        c.reduce((e, i, s) => ({ ...e, [i]: t[s] }), {}),
                        e,
                      )
                } else {
                  const t = await m,
                    i = this.getAPStream(t, a)
                  o(i), i && this.cacheAPStream(t, e)
                }
              } catch (e) {
                r(e)
              }
            }),
            cancel: d,
          }
        }
        cacheAPStream(e, t) {
          let i = this.cachedAPStreams.get(t.pageIndex)
          i ||
            ((this.cachedAPStreams = this.cachedAPStreams.set(t.pageIndex, (0, s.D5)())),
            (i = this.cachedAPStreams.get(t.pageIndex))),
            (this.cachedAPStreams = this.cachedAPStreams.setIn([t.pageIndex, t.id], e))
        }
        clearAllPageAPStreams(e) {
          const t = this.cachedAPStreams.get(e)
          t &&
            (t.forEach((e) => {
              this.releaseAPStream(e)
            }),
            (this.cachedAPStreams = this.cachedAPStreams.delete(e))),
            (this.pageAPStreamsPromises = this.pageAPStreamsPromises.delete(e))
        }
        clearPageAPStreams(e, t) {
          const i = this.cachedAPStreams.get(e)
          i &&
            (i
              .filter((e, i) => t.has(i))
              .forEach((e) => {
                this.releaseAPStream(e)
              }),
            (this.cachedAPStreams = this.cachedAPStreams.updateIn([e], (e) => e.filter((e, i) => !t.has(i)))))
        }
        getAPStream(e, t) {
          return e instanceof o.Z ? e : e[t || 'normal']
        }
        renderAPStream(e, t, i, s, n, a, r) {
          if (a.length > 1) {
            const r = a.map((a) => this.renderAnnotation(e, t, i, s, n, 'normal' !== a ? a : void 0))
            return {
              promise: r,
              cancel: () => {
                r.forEach((e) => {
                  e.cancel()
                })
              },
            }
          }
          return this.renderAnnotation(e, t, i, s, n, r)
        }
        releaseAPStream(e) {
          e instanceof o.Z
            ? e.release()
            : Object.values(e).forEach((e) => {
                e.release()
              })
        }
      }
    },
    1367: (e, t, i) => {
      i.d(t, { Z: () => r })
      var s = i(35369),
        n = i(46232)
      function a() {
        return !0
      }
      class r {
        constructor(e) {
          ;(this.queue = (0, s.zN)()),
            (this.priorityQueue = (0, s.zN)()),
            (this.inFlightRequests = (0, s.D5)()),
            (this.inflightRequestLimit = e),
            (this.isDestroyed = !1)
        }
        enqueue(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          if (this.isDestroyed) return { promise: new Promise(() => {}), cancel: () => {} }
          let i = null,
            n = null
          const a = new Promise((e, t) => {
              ;(i = e), (n = t)
            }),
            r = t ? this.priorityQueue : this.queue,
            o = (0, s.t8)(r, e, { promise: a, resolve: i, reject: n })
          return (
            t ? (this.priorityQueue = o) : (this.queue = o),
            t ? this.next() : setTimeout(() => this.next(), 35),
            { promise: a, cancel: () => this._cancel(e) }
          )
        }
        _cancel(e) {
          this.queue.has(e) && (this.queue = this.queue.delete(e)),
            this.priorityQueue.has(e) && (this.priorityQueue = this.priorityQueue.delete(e)),
            this.inFlightRequests.has(e) && (this.inFlightRequests = this.inFlightRequests.delete(e))
        }
        cancelAll() {
          ;(this.queue = (0, s.zN)()), (this.priorityQueue = (0, s.zN)()), (this.inFlightRequests = (0, s.D5)())
        }
        _requestFinished(e, t) {
          if (this.isDestroyed) return
          const i = this.inFlightRequests.get(e)
          i && (i.resolve(t), (this.inFlightRequests = this.inFlightRequests.delete(e))), this.next()
        }
        _requestFailed(e, t) {
          if (this.isDestroyed) return
          const i = this.inFlightRequests.get(e)
          i && (i.reject(t), (this.inFlightRequests = this.inFlightRequests.delete(e))), this.next()
        }
        next() {
          if (!(this.isDestroyed || this.inFlightRequests.size >= this.inflightRequestLimit)) {
            if (this.priorityQueue.size >= 1) {
              const e = this.priorityQueue.findLastEntry(a)
              ;(0, n.k)(e)
              const [t, i] = e
              return (
                (this.priorityQueue = this.priorityQueue.delete(t)),
                (this.inFlightRequests = this.inFlightRequests.set(t, i)),
                void t
                  .request()
                  .then((e) => this._requestFinished(t, e))
                  .catch((e) => this._requestFailed(t, e))
              )
            }
            if (this.queue.size >= 1) {
              const e = this.queue.findEntry(a)
              ;(0, n.k)(e)
              const [t, i] = e
              ;(this.queue = this.queue.delete(t)),
                (this.inFlightRequests = this.inFlightRequests.set(t, i)),
                t
                  .request()
                  .then((e) => this._requestFinished(t, e))
                  .catch((e) => this._requestFailed(t, e))
            }
          }
        }
        destroy() {
          this.isDestroyed = !0
        }
      }
    },
    42457: (e, t, i) => {
      i.d(t, { i: () => o })
      var s = i(35369)
      class n extends s.WV({
        id: '',
        attachmentId: '',
        description: null,
        fileName: null,
        fileSize: null,
        updatedAt: null,
      }) {}
      var a = i(55090)
      function r(e, t) {
        return t
      }
      function o(e, t) {
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
        return r(0, i)
          ? new n({
              id: (0, a.C)(),
              description: t.fileDescription,
              attachmentId: e,
              fileName: t.fileName || null,
              fileSize: t.fileSize || null,
              updatedAt: t.modificationDate ? new Date(t.modificationDate) : null,
            })
          : new n({
              id: e,
              description: t.description,
              attachmentId: t.fileAttachmentId,
              fileName: t.fileName || null,
              fileSize: t.fileSize || null,
              updatedAt: new Date(t.updatedAt) || null,
            })
      }
    },
    94290: (e, t, i) => {
      function s(e, t, i, s, n, a) {
        let r
        return e.has(i) ? (r = e.get(i)) : ((r = n.toString()), (t[r] = i), e.set(i, r)), { ...s, [a]: r }
      }
      i.d(t, { M: () => s })
    },
    89777: (e, t, i) => {
      i.d(t, { E: () => o })
      var s = i(35369),
        n = i(35712),
        a = i(85596),
        r = i(51908)
      function o(e) {
        return (
          (0, n.kG)(Array.isArray(e), 'Wrong `json` field'),
          (0, s.aV)(
            e
              .map(
                (e) => (
                  (0, n.kG)('number' == typeof e.pageIndex, 'Wrong `pageIndex` field'),
                  (0, n.kG)('string' == typeof e.previewText, 'Wrong `previewText` field'),
                  (0, n.kG)(Array.isArray(e.rangeInPreview), 'Wrong `rangeInPreview` field'),
                  (0, n.kG)(Array.isArray(e.rectsOnPage), 'Wrong `rectsOnPage` field'),
                  new r.Z({
                    pageIndex: e.pageIndex,
                    previewText: e.previewText,
                    locationInPreview: e.rangeInPreview[0],
                    lengthInPreview: e.rangeInPreview[1],
                    rectsOnPage: (0, s.aV)(e.rectsOnPage).map((e) => (0, a.k)(e)),
                    isAnnotation: !!e.isAnnotation,
                    annotationRect: e.annotationRect ? (0, a.k)(e.annotationRect) : null,
                  })
                ),
              )
              .filter(Boolean),
          )
        )
      }
    },
  },
])