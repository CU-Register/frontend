'use strict'
;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [4099],
  {
    82450: (a, t, e) => {
      e.r(t), e.d(t, { RESTProvider: () => h })
      var s = e(35369),
        o = e(35712),
        i = e(81487),
        r = e(81928)
      class n extends s.WV({
        alreadyLoadedPages: (0, s.D5)(),
        serverURL: null,
        authPayload: null,
        isLoaded: !1,
        isFormsEnabled: !0,
        loadBookmarksPromise: null,
        ignoredFormFieldNames: null,
      }) {}
      var l = e(11171),
        d = e(51983),
        c = e(14968)
      class h {
        canCreateBackendOrphanWidgets = !0
        constructor(a, t, e) {
          let { isFormsEnabled: s } = e
          ;(this.state = new n({ serverURL: a, authPayload: t, isFormsEnabled: s })),
            (this._setReadStateCallbacksPromise = new Promise((a) => {
              this._setReadStateCallbacksPromiseResolve = a
            }))
        }
        async load() {
          return (
            (this.state = this.state.set('isLoaded', !0)),
            this.state.isFormsEnabled && (await this._initializeFormFieldValues()),
            this
          )
        }
        destroy() {}
        setReadStateCallbacks(a) {
          ;(this._readStateCallbacks = a), this._setReadStateCallbacksPromiseResolve?.()
        }
        setAnnotationCallbacks(a) {
          this.annotationCallbacks = a
        }
        setBookmarkCallbacks(a) {
          this.bookmarkCallbacks = a
        }
        setFormFieldValueCallbacks(a) {
          this.formFieldValueCallbacks = a
        }
        async createAnnotation(a, t) {
          this._verifyLoaded()
          const { id: e, ...s } = (0, i.Hs)(a),
            r = { id: e, content: s }
          await this._request('/annotations', 'POST', r).then((a) => {
            if (200 !== a.status) throw new o.p2('PSPDFKit Server returned an error, when saving an annotation.')
            a.json().then((a) => {
              if ('attachment_missing' === a.error) {
                const a = (function (a, t) {
                  const e = new FormData()
                  return (
                    e.append('annotation', JSON.stringify(a)),
                    t.forEach((a, t) => {
                      t && a.data && e.append(t, a.data)
                    }),
                    e
                  )
                })(r, t)
                return this._request('/annotations', 'POST', a).then((a) => a.json())
              }
              return a
            })
          })
        }
        async updateAnnotation(a) {
          this._verifyLoaded()
          const { id: t, ...e } = (0, i.Hs)(a)
          await this._request(`/annotations/${t}`, 'PUT', { id: t, content: e })
        }
        async deleteAnnotation(a) {
          this._verifyLoaded(), await this._request(`/annotations/${a.id}`, 'DELETE')
        }
        async createBookmark(a) {
          this._verifyLoaded(), await this.loadBookmarks()
          const { id: t, ...e } = (0, r.a)(a)
          if (200 !== (await this._request('/bookmarks', 'POST', { id: t, content: e })).status)
            throw new o.p2('PSPDFKit Server returned an error, when saving an bookmark.')
        }
        async updateBookmark(a) {
          this._verifyLoaded(), await this.loadBookmarks()
          const { id: t, ...e } = (0, r.a)(a)
          await this._request(`/bookmarks/${t}`, 'PUT', { id: t, content: e })
        }
        async deleteBookmark(a) {
          this._verifyLoaded(), await this.loadBookmarks(), await this._request(`/bookmarks/${a}`, 'DELETE')
        }
        async setFormFieldValue(a) {
          this._verifyLoaded()
          const t = { id: (0, l.X)(a), content: (0, i.kr)(a) }
          await this._request('/form-field-values', 'POST', { formFieldValues: [t] })
        }
        async createFormFieldValue() {}
        async deleteFormFieldValue() {}
        async loadAnnotationsForPageIndex(a) {
          if ((this._verifyLoaded(), this.state.alreadyLoadedPages.has(a))) await this.state.alreadyLoadedPages.get(a)
          else
            try {
              const t = this._request(`/page-${a}-annotations`, 'GET')
                .then((a) => a.json())
                .catch((a) => {
                  throw a
                })
              this.state = this.state.setIn(['alreadyLoadedPages', a], t)
              const e = await t
              this.state = this.state.setIn(['alreadyLoadedPages', a], Promise.resolve())
              const r = (0, s.aV)().withMutations((a) => {
                e.annotations.forEach((t) => {
                  try {
                    a.push((0, i.vH)(t.id, t.content))
                  } catch (a) {
                    ;(0, o.um)(
                      `Skipped creating annotation #${t.id} from payload because an error occurred while deserializing.`,
                      t.content,
                    ),
                      (0, o.um)(a)
                  }
                })
              })
              r.size > 0 &&
                ((0, o.kG)(this.annotationCallbacks), this.annotationCallbacks.createAnnotations(r, (0, s.D5)(), d.y))
            } catch (a) {
              this._handleError(a, 'annotations')
            }
        }
        async loadBookmarks() {
          if ((this._verifyLoaded(), this.state.loadBookmarksPromise)) await this.state.loadBookmarksPromise
          else
            try {
              const a = this._request('/bookmarks', 'GET')
                .then((a) => a.json())
                .then((a) => a.data)
                .catch((a) => {
                  throw a
                })
              this.state = this.state.set('loadBookmarksPromise', a)
              const t = await a
              ;(this.state = this.state.set('loadBookmarksPromise', Promise.resolve())),
                (0, o.kG)(Array.isArray(t.bookmarks), 'Unexpected reply from bookmarks endpoint.')
              const e = (0, s.aV)().withMutations((a) => {
                t.bookmarks.forEach((t) => {
                  try {
                    a.push((0, r.i)(t.id, t.content))
                  } catch (a) {
                    ;(0, o.um)(
                      `Skipped creating bookmark #${t.id} from payload because an error occurred while deserializing.`,
                      t,
                    ),
                      (0, o.um)(a)
                  }
                })
              })
              e.size > 0 && ((0, o.kG)(this.bookmarkCallbacks), this.bookmarkCallbacks.createBookmarks(e, d.y))
            } catch (a) {
              this._handleError(a, 'bookmarks')
            }
        }
        async syncChanges() {}
        async _initializeFormFieldValues() {
          const a = await this._request('/form-field-values', 'GET'),
            t = await a.json()
          ;(0, o.kG)(Array.isArray(t.formFieldValues), 'Unexpected reply from form-values endpoint.')
          const e = (0, s.aV)(
            t.formFieldValues
              .map((a) => {
                let { content: t } = a
                try {
                  return (0, i.u9)(t)
                } catch (a) {
                  return (
                    (0, o.um)(
                      `Skipped form field value ${t.name} from payload because an error occurred while deserializing.`,
                      t,
                    ),
                    (0, o.um)(a),
                    null
                  )
                }
              })
              .filter(Boolean),
          )
          ;(0, o.kG)(this.formFieldValueCallbacks),
            this.state.ignoredFormFieldNames && this.state.ignoredFormFieldNames.size
              ? this.formFieldValueCallbacks.setFormFieldValues(
                  e.filter((a) => !this.state.ignoredFormFieldNames?.includes(a.name)),
                )
              : this.formFieldValueCallbacks.setFormFieldValues(e)
        }
        _handleError(a, t) {
          ;(0, o.vU)(`Loading or updating ${t} failed:\n\n${a.message}`)
        }
        _request(a, t, e) {
          ;(0, o.kG)(null != this.state.authPayload, 'Cannot call request without authPayload')
          const s = e instanceof FormData || 'object' != typeof e ? null : { 'Content-Type': 'application/json' },
            i = {
              'X-PSPDFKit-Token': this.state.authPayload.token,
              'PSPDFKit-Platform': 'web',
              'PSPDFKit-Version': (0, c.oM)(),
              ...s,
            }
          return fetch(`${this.state.serverURL}${a}`, {
            method: t,
            headers: i,
            body: e instanceof FormData ? e : 'object' == typeof e ? JSON.stringify(e) : void 0,
            credentials: 'include',
          })
        }
        _verifyLoaded() {
          if (!this.state.isLoaded) throw new Error('not loaded')
        }
        setDocumentHandleConflictCallback = () => {}
        setIgnoredFormFieldNames(a) {
          this.state = this.state.set('ignoredFormFieldNames', a)
        }
      }
    },
  },
])
