'use strict'
;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [6377],
  {
    89930: (t, e, n) => {
      n.r(e), n.d(e, { default: () => C })
      var o = n(35369),
        s = n(35712),
        a = n(34997),
        r = n(89777),
        i = n(85596),
        d = n(81487),
        c = n(12130)
      var l = n(51534),
        h = n(1367),
        u = n(49029)
      class m extends o.WV({
        authPayload: null,
        serverUrl: null,
        hostedBaseUrl: null,
        documentId: null,
        backendPermissions: null,
        documentURL: null,
        imageToken: null,
        instantSettings: null,
        token: null,
        features: (0, o.aV)(),
        signatureFeatureAvailability: u.H.NONE,
        isFormsEnabled: !0,
        minSearchQueryLength: 1,
        documentHandle: null,
        isDocumentHandleOutdated: !1,
        digitalSignatures: null,
        defaultGroup: void 0,
        hasCollaborationPermissions: !1,
        forceLegacySignaturesFeature: !1,
      }) {}
      var p = n(11278),
        f = n(50809),
        w = n(16396),
        g = n(14968)
      const y = 'The image can not be rendered because of an unknown error.'
      class P {
        constructor(t) {
          let { identifier: e, url: n, token: o, payload: s, doNotRequestWebP: a = !1 } = t
          ;(this.identifier = e), (this.url = n), (this.token = o), (this.payload = s), (this.doNotRequestWebP = a)
        }
        abort() {
          this.httpRequest?.abort()
        }
        request() {
          return new Promise((t, e) => {
            const n = new XMLHttpRequest()
            ;(this.httpRequest = n),
              n.open(this.payload ? 'POST' : 'GET', this.url, !0),
              n.setRequestHeader('X-PSPDFKit-Image-Token', this.token),
              n.setRequestHeader('PSPDFKit-Platform', 'web'),
              n.setRequestHeader('PSPDFKit-Version', (0, g.oM)()),
              f.Zy && !this.doNotRequestWebP && n.setRequestHeader('Accept', 'image/webp,*/*'),
              (n.responseType = 'blob'),
              (n.onreadystatechange = (async () => {
                if (4 !== n.readyState) return
                if (n.response && n.response.type.startsWith('application/json')) {
                  const o = new FileReader()
                  return (
                    (o.onload = (n) => {
                      const o = JSON.parse(n.target?.result)
                      o.attachments_not_found
                        ? t({ attachmentsNotFound: o.attachments_not_found })
                        : o.error
                        ? e(new s.p2(`The server could not render the requested image (${o.error})`))
                        : e(new s.p2(y))
                    }),
                    (o.onerror = () => e(new s.p2(y))),
                    void o.readAsText(n.response)
                  )
                }
                if (!(0, p.vu)(n.status)) return void e(new s.p2(y))
                const o = n.response,
                  a = URL.createObjectURL(o),
                  r = new Image()
                ;(r.onerror = () => e(new s.p2(y))),
                  (r.src = a),
                  await r.decode(),
                  t(new w.Z(r, () => URL.revokeObjectURL(a)))
              }).bind(this)),
              n.send(this.payload)
          })
        }
      }
      var S = n(80614),
        _ = n(89595),
        b = n(50893),
        v = n(19491),
        k = n(47003),
        E = n(97921)
      var R = n(94290),
        F = n(47291),
        $ = n(67117),
        T = n(63880),
        x = n(29412),
        A = n(42457),
        U = n(24956),
        D = n(5164),
        I = n(14651),
        j = n(36091)
      class C extends x.W {
        _password = null
        type = 'SERVER'
        constructor(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window
          if ((super(), 'object' != typeof t.authPayload))
            throw new s.p2(
              "authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`",
            )
          const n = t.authPayload?.accessToken
          let o = null,
            a = null,
            r = null
          if (n)
            (r = t.hostedBaseUrl || 'https://api.pspdfkit.com/'),
              (0, p.sf)(r),
              (function (t) {
                if ('string' != typeof t) throw new s.p2('`accessToken` must be of type string.')
              })(n)
          else {
            if (
              ((o = (function (t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window
                const n = t.serverUrl || (0, g.SV)(e.document)
                if ('/' !== n.substr(-1))
                  throw new s.p2('`serverUrl` must have a slash at the end (e.g. `https://pspdfkit.example.com/`).')
                if (!t.serverUrl) {
                  if (n === `${e.location.protocol}//${e.location.host}/`)
                    throw new s.p2(
                      'PSPDFKit automatically infers the URL of PSPDFKit Server from the current `<script>` tag.\nIn the current case, this URL is set to the same as the current browser\'s location.\nThis can happen when you bundle pspdfkit.js with your custom JavaScript for example.\n\nTo make sure everything works as expected, please set the `serverUrl` to the URL of PSPDFKit Server:\n\nPSPDFKit.load({\n  serverUrl: "https://pspdfkit-server.example.com/",\n  ...,\n});',
                    )
                }
                return n
              })(t, e)),
              'string' != typeof t.documentId)
            )
              throw new s.p2('`documentId` must be of type string.')
            if (
              ((a = `${o}i/d/${t.documentId}`),
              'object' != typeof t.authPayload || !('jwt' in t.authPayload) || 'string' != typeof t.authPayload.jwt)
            )
              throw new s.p2(
                "authPayload must be an object that contains the `jwt`. For example: `authPayload: { jwt: 'xxx.xxx.xxx'}`",
              )
            !(function (t) {
              const e =
                'The supplied JWT is invalid. Please refer to our guides on how to set up authentication:\n  https://pspdfkit.com/guides/web/current/server-backed/client-authentication/'
              if (-1 !== t.indexOf('{"internal":')) return
              let n
              ;(0, s.kG)('string' == typeof t && 3 === t.split('.').length, e)
              try {
                const e = c.Base64.decode(t.split('.')[1])
                n = JSON.parse(e)
              } catch (t) {
                throw new s.p2(e)
              }
              ;(0, s.kG)(
                'string' == typeof n.document_id,
                "The supplied JWT is invalid. The field 'document_id' has to be a string value.\n  Please refer to our guides for further information: https://pspdfkit.com/guides/web/current/server-backed/client-authentication/",
              )
            })(t.authPayload.jwt)
          }
          !(function (t) {
            let e = ''
            if (
              'boolean' != typeof t &&
              ((0, s.PO)(t)
                ? (t.hasOwnProperty('clientsPresenceEnabled') &&
                    'boolean' != typeof t.clientsPresenceEnabled &&
                    (e += '`clientsPresenceEnabled` in instance settings is not valid. Must be `true` or `false`.\n'),
                  t.hasOwnProperty('listenToServerChangesEnabled') &&
                    'boolean' != typeof t.listenToServerChangesEnabled &&
                    (e +=
                      '`listenToServerChangesEnabled` in instance settings is not valid. Must be `true` or `false`.\n'))
                : (e = '`instant` flag must either be set to `true` or `false`\n'),
              e)
            )
              throw new s.p2(
                `${e}\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/`,
              )
          })(t.instant)
          let i = null
          if (t.instant)
            if ((0, s.PO)(t.instant)) {
              const e = t.instant
              i = {
                clientsPresenceEnabled: !1 !== e.clientsPresenceEnabled,
                listenToServerChangesEnabled: !1 !== e.listenToServerChangesEnabled,
              }
            } else i = F.q
          this._requestQueue = new h.Z(S.Qc)
          const d = !!t.electronicSignatures && Boolean(t.electronicSignatures.forceLegacySignaturesFeature)
          ;(this._state = new m({
            serverUrl: o,
            hostedBaseUrl: r,
            documentId: t.documentId,
            instantSettings: i,
            documentURL: a,
            authPayload: t.authPayload,
            isFormsEnabled: !t.disableForms,
            forceLegacySignaturesFeature: d,
          })),
            t.trustedCAsCallback &&
              (0, s.ZK)(
                'PSPDFKit.Configuration#trustedCAsCallback is only used on Standalone deployments. On a Server-backed deployment, please follow the instructions at https://pspdfkit.com/guides/web',
              )
        }
        isUsingInstantProvider() {
          return null != this._state.instantSettings
        }
        hasClientsPresence() {
          const t = this._state.instantSettings
          return null != t && !1 !== t.clientsPresenceEnabled
        }
        async load() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          await this.tryAuthenticateHostedViewer()
          const {
            imageToken: e,
            token: n,
            permissions: a,
            features: r,
            signatureFeatureAvailability: i,
            hasPassword: c,
            minSearchQueryLength: l,
            layerHandle: h,
            allowedTileScales: m,
            digitalSignatures: p,
            defaultGroup: f,
            collaborationPermissions: w,
            creatorName: y,
          } = await (async function (t, e, n) {
            const o = await fetch(`${t}/auth`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'PSPDFKit-Platform': 'web',
                'PSPDFKit-Version': (0, g.oM)(),
              },
              body: JSON.stringify({ jwt: e.jwt, origin: window.location.href, password: n }),
              credentials: 'include',
            })
            return o.ok
              ? o.json()
              : o.text().then((t) => {
                  throw 'INVALID_PASSWORD' === t
                    ? new s.p2(t)
                    : new s.p2(`An error occurred while connecting to PSPDFKit Server: ${t || o.statusText}`)
                })
          })(`${this._state.serverUrl}i/d/${this._state.documentId}`, this._state.authPayload, t.password)
          if (((this._password = t.password), this._state.instantSettings && !r.includes(I.q.INSTANT)))
            throw new s.p2(
              'Instant feature is not enabled on this server. Please set `instant` to `false`.\n\nFor more information about PSPDFKit Instant please visit:\nhttps://pspdfkit.com/guides/web/current/instant/overview/',
            )
          const P =
            i === u.H.ELECTRONIC_SIGNATURES && (0, j.Vz)(r) && this._state.forceLegacySignaturesFeature
              ? u.H.LEGACY_SIGNATURES
              : i
          if (
            ((this._state = this._state.withMutations((t) =>
              t
                .set('imageToken', e)
                .set('token', n)
                .set('features', (0, o.aV)(r))
                .set('signatureFeatureAvailability', P)
                .set(
                  'backendPermissions',
                  new E.Z({ readOnly: -1 === a.indexOf('write'), downloadingAllowed: a.indexOf('download') >= 0 }),
                )
                .set('documentURL', `${this._state.serverUrl}i/d/${this._state.documentId}/h/${h}`)
                .set('documentHandle', h)
                .set('isDocumentHandleOutdated', !1)
                .set('digitalSignatures', (0, d.rS)(p)),
            )),
            w && !this._state.instantSettings)
          )
            throw new s.p2(
              'Collaboration Permissions is not supported when `instant` is disabled. Please make sure `configuration#instant` is set to `true`.',
            )
          return (
            (this._state = this._state.withMutations((t) => {
              ;(t.defaultGroup = f), (t.hasCollaborationPermissions = Boolean(w))
            })),
            this.provider && this.provider.destroy(),
            (this.provider = await this._initProvider()),
            this._state.instantSettings &&
              this.provider.setDocumentHandleConflictCallback(this.handleDocumentHandleConflict),
            {
              features: this._state.features,
              signatureFeatureAvailability: this._state.signatureFeatureAvailability,
              hasPassword: c,
              minSearchQueryLength: l,
              allowedTileScales: m,
              creatorName: y,
              defaultGroup: f,
            }
          )
        }
        async tryAuthenticateHostedViewer() {
          if ('accessToken' in this._state.authPayload) {
            const { hostedBaseUrl: t } = this._state,
              e = this._state.authPayload.accessToken,
              {
                serverUrl: n,
                serverId: o,
                jwt: s,
              } = await (async function (t, e) {
                const n = await fetch(`${t}i/documents/auth`, {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'PSPDFKit-Platform': 'web',
                    'PSPDFKit-Version': 'cloud-protocol=1, server-protocol=5, client=2023.2.0, client-git=795b08f3be',
                  },
                  body: JSON.stringify({ accessToken: e }),
                })
                if (n.ok) return n.json()
                throw new Error(`An error occurred while connecting to PSPDFKit API: ${await n.text()}`)
              })(t, e)
            this._state = this._state.withMutations((t) => {
              t.set('serverUrl', n)
                .set('documentId', o)
                .set('documentURL', `${n}i/d/${o}`)
                .set('authPayload', { jwt: s })
            })
          }
        }
        async _initProvider() {
          if (this._state.instantSettings) {
            const t = `${this._state.serverUrl}i/d/${this._state.documentId}/h/${this._state.documentHandle}`,
              { InstantProvider: e } = await n.e(2333).then(n.bind(n, 5773))
            return new e(
              `${this._state.serverUrl}i/d/${this._state.documentId}`,
              t,
              { auth_token: this._state.token },
              this._state.instantSettings,
            )
          }
          {
            const t = this._state.isFormsEnabled && this._state.features.includes(I.q.FORMS),
              { RESTProvider: e } = await n.e(4099).then(n.bind(n, 82450))
            return new e(this._state.documentURL, { token: this._state.token }, { isFormsEnabled: t })
          }
        }
        destroy() {
          this._destroyProvider(), this._requestQueue && this._requestQueue.destroy()
        }
        documentInfo() {
          return this._fetch(`${this._state.documentURL}/document.json`)
            .then((t) => t.json())
            .then((t) => t.data)
        }
        getFormJSON() {
          return this._fetch(`${this._state.documentURL}/form.json`).then((t) =>
            403 === t.status
              ? { v: 1, type: 'pspdfkit/form', annotations: [], fields: [] }
              : t.json().then((t) => t.data),
          )
        }
        async evalFormValuesActions() {
          throw new Error('not implemented')
        }
        async evalScript() {
          throw new Error('not implemented')
        }
        async setFormJSONUpdateBatchMode() {
          throw new Error('not implemented')
        }
        permissions() {
          return Promise.resolve(this._state.backendPermissions)
        }
        getDefaultGroup() {
          return this._state.defaultGroup
        }
        isCollaborationPermissionsEnabled() {
          return this._state.hasCollaborationPermissions
        }
        textForPageIndex(t) {
          const e = `${this._state.documentURL}/page-${t}-text`,
            n = new (this._getJSONRequestHandler())(e, this._state.token),
            o = this._requestQueue.enqueue(n, !0)
          return {
            promise: o.promise.then((e) => (0, _.T)(e, t)),
            cancel: () => {
              o.cancel()
            },
          }
        }
        getTextFromRects(t, e) {
          const n = encodeURIComponent(JSON.stringify(e.map(i.u).toArray()))
          return this._fetch(`${this._state.documentURL}/page-${t}-highlighted?rects=${n}`)
            .then((t) => t.json())
            .then((t) => t.text)
        }
        _getJSONRequestHandler() {
          return l.Z
        }
        renderTile(t, e, n, o, a, r) {
          var i = this
          if (this._state.isDocumentHandleOutdated) return { promise: new Promise(() => {}), cancel: () => {} }
          const c = `${this._state.documentURL}/page-${t}-dimensions-${e.width}-${e.height}-tile-${n.left}-${n.top}-${
              n.width
            }-${n.height}${o ? '-print' : ''}`,
            l = e.width === n.width && e.height === n.height,
            h = n.width > S.pt || n.height > S.pt
          let u,
            m,
            p = !1,
            f = !1,
            w = [],
            g = []
          const y = new Promise((t, e) => {
              ;(u = t), (m = e)
            }),
            _ = function () {
              let t,
                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              if (r) {
                const n = new FormData()
                n.append(
                  'data',
                  JSON.stringify({
                    annotations: r.annotations
                      .filter(b.d)
                      .map(d.Hs)
                      .toJS()
                      .map((t) => ({ content: t })),
                    formFieldValues: r.formFieldValues.map(d.kr).toJS(),
                    formFields: r.formFields.map(d.vD).toJS(),
                    signatures: r.signatures || [],
                  }),
                ),
                  e.length > 0 &&
                    e.forEach((t) => {
                      const e = r.attachments.get(t)
                      ;(0, s.kG)(e && e.data, 'Attachment data could not be found.'), n.append(t, e.data)
                    }),
                  (t = new P({ identifier: c, url: c, token: i._state.imageToken, payload: n, doNotRequestWebP: h }))
              } else t = new P({ identifier: c, url: c, token: i._state.imageToken, doNotRequestWebP: h })
              g.push(t)
              const n = i._requestQueue.enqueue(t, l)
              n.promise
                .then((t) => {
                  if (!p)
                    return t.attachmentsNotFound && !f
                      ? ((f = !0), void _(t.attachmentsNotFound))
                      : void (t.attachmentsNotFound ? m(new s.p2('Attachment could not be found.')) : u(t))
                })
                .catch((t) => {
                  p || m(t)
                }),
                w.push(n)
            }
          return (
            _(),
            {
              promise: y,
              cancel: () => {
                ;(p = !0),
                  g.forEach((t) => {
                    t.abort && 'function' == typeof t.abort && t.abort()
                  }),
                  w.forEach((t) => {
                    t.cancel()
                  })
              },
            }
          )
        }
        _requestRenderAnnotation = (t, e, n, o, r, i) => {
          var c = this
          const l = `${this._state.documentURL}/render_annotation`,
            h = `render-annotation-${i ? (0, a.SK)() : t.id}`,
            u = JSON.stringify({
              data: (0, d.Hs)(t),
              width: o,
              height: r,
              detached: i || void 0,
              formFieldValue: e ? (0, d.kr)(e) : void 0,
            })
          let m,
            p,
            f = !1,
            w = []
          const g = new Promise((t, e) => {
              ;(m = t), (p = e)
            }),
            y = function () {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              const a = new FormData()
              a.append('render', u), e.length > 0 && t.imageAttachmentId && n && a.append(t.imageAttachmentId, n)
              const i = new P({
                  identifier: h,
                  url: l,
                  token: c._state.imageToken,
                  payload: a,
                  doNotRequestWebP: o > S.pt || r > S.pt,
                }),
                d = c._requestQueue.enqueue(i, !1)
              d.promise
                .then((t) => {
                  f ||
                    (t.attachmentsNotFound
                      ? y(t.attachmentsNotFound)
                      : t.attachmentsNotFound
                      ? p(new s.p2('Attachment could not be found.'))
                      : m(t))
                })
                .catch((t) => {
                  f || p(t)
                }),
                w.push(d)
            }
          return (
            y(),
            {
              promise: g,
              cancel: () => {
                ;(f = !0),
                  w.forEach((t) => {
                    t.cancel()
                  })
              },
            }
          )
        }
        _requestRenderAnnotations = (t, e, n, o, s) => {
          const a = `${this._state.documentURL}/render_annotations`,
            r = JSON.stringify({
              annotations: e.map((e, s) => ({ pageIndex: t, pdfObjectId: e, width: n[s], height: o[s] })),
              formFieldValues: s,
            })
          let i,
            d,
            c = !1
          const l = new Promise((t, e) => {
            ;(i = t), (d = e)
          })
          return (
            this._fetch(a, {
              method: 'post',
              body: r,
              credentials: 'include',
              headers: {
                'X-PSPDFKit-Image-Token': this._state.imageToken,
                'Content-Type': 'application/json',
                Accept: 'multipart/form-data',
              },
            })
              .then((t) => t.formData())
              .then((t) => {
                c || i(Array.from(t.values()))
              })
              .catch((t) => {
                c || d(t)
              }),
            {
              promise: l,
              cancel: () => {
                c = !0
              },
            }
          )
        }
        renderAnnotation(t, e, n, o, s) {
          return this._requestRenderAnnotation(t, e, n, o, s)
        }
        async renderPageAnnotations(t, e, n) {
          if (!f.Rh) {
            const e = Promise.resolve()
            return (this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(t, e)), e
          }
          const o = this.provider,
            s = e.some((t) => t instanceof k.Z)
          s && (await o._setReadStateCallbacksPromise)
          const a = [],
            r = e.filter((t) => {
              const e = (s ? o._readStateCallbacks.getAnnotationWithFormField(t.id) : null)?.formField,
                n = (0, b._R)(t, e)
              if (n && e && 'number' == typeof t.pdfObjectId) {
                a.find((t) => t.name === e.name) || a.push((0, d.kr)((0, D.CH)(e)))
              }
              return n && 'number' == typeof t.pdfObjectId
            })
          if (0 === r.size && 0 === a.length) return Promise.resolve()
          const i = new Promise((e, o) => {
            const { promise: s, cancel: i } = this._requestRenderAnnotations(
              t,
              r.map((t) => t.pdfObjectId).toArray(),
              r.map((t) => Math.floor(t.boundingBox.width * n)).toArray(),
              r.map((t) => Math.floor(t.boundingBox.height * n)).toArray(),
              a,
            )
            s.then((t) => {
              const n = t.map((t) => t && (0, U.R4)(t))
              n.forEach(async (t, e) => {
                const n = await t,
                  o = r.get(e)
                if (o) {
                  const t = this.annotationAPStreamPromises.get(o.id)
                  t && ((this.annotationAPStreamPromises = this.annotationAPStreamPromises.delete(o.id)), t(n)),
                    n && this.cacheAPStream(n, o)
                }
              }),
                Promise.all(n).then(() => e())
            }).catch((t) => {
              i(), o(t)
            })
          })
          return (this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(t, i)), i
        }
        renderDetachedAnnotation(t, e, n, o) {
          return this._requestRenderAnnotation(t, null, e, n, o, !0)
        }
        async getAttachment(t) {
          try {
            const e = await this._fetch(`${this._state.documentURL}/attachments/${t}`)
            switch (e.status) {
              case 404:
                throw new s.p2('Attachment not Found.')
              case 200:
                return await e.blob()
              default:
                throw new s.p2('Bad Request.')
            }
          } catch (t) {
            throw new s.p2(`Could not fetch attachment from PSPDFKit Server. ${t}`)
          }
        }
        async search(t, e, n, o) {
          let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : T.S.TEXT
          const i = `q=${
              a === T.S.PRESET ? t.replace(/_/g, '-') : encodeURIComponent(t)
            }&start=${e}&limit=${n}&type=${a}&include_annotations=${s.toString()}&case_sensitive=${o.toString()}`,
            d = `${this._state.documentURL}/search?${i}`,
            c = await new l.Z(d, this._state.token).request()
          return (0, r.E)(c.data)
        }
        async getMeasurementSnappingPoints(t) {}
        async searchAndRedact(t, e) {
          const { searchType: n, annotationPreset: s, searchInAnnotations: a, caseSensitive: r } = e,
            { color: i, fillColor: d, outlineColor: c, ...l } = s,
            h = await this._fetch(`${this._state.documentURL}/redactions`, {
              method: 'post',
              credentials: 'include',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                strategy: n,
                strategyOptions: {
                  [n]: n === T.S.PRESET ? t.replace(/_/g, '-') : t,
                  includeAnnotations: a,
                  caseSensitive: r,
                },
                content: { ...l, color: i && i.toHex(), fillColor: d && d.toHex(), outlineColor: c && c.toHex() },
              }),
            }),
            { data: u } = await h.json()
          return (0, o.aV)(u && u.annotations ? u.annotations.map((t) => $.Z.fromJSON(t.id, t.content)) : [])
        }
        exportPDF() {
          let {
            flatten: t = !1,
            includeComments: e = !0,
            excludeAnnotations: n = !1,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          const o = `${this._state.documentURL}/pdf?token=${this._state.token}&flatten=${String(t)}&comments=${String(
            e,
          )}&render_ap_streams=${String(!t)}&remove_annotations=${String(n)}`
          return fetch(o, { method: 'GET', credentials: 'include' }).then((t) => t.arrayBuffer())
        }
        exportXFDF() {
          return this._fetch(`${this._state.documentURL}/document.xfdf`).then((t) => t.text())
        }
        exportInstantJSON(t) {
          return this._fetch(
            `${this._state.documentURL}/instant.json${'number' == typeof t ? `?version=${t}` : ''}`,
          ).then((t) => t.json())
        }
        getPDFURL() {
          let { includeComments: t = !0, excludeAnnotations: e = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return {
            promise: Promise.resolve(
              `${this._state.documentURL}/pdf?token=${this._state.token}&flatten=true&comments=${String(
                t,
              )}&remove_annotations=${String(e)}`,
            ),
            revoke: () => {},
          }
        }
        generatePDFObjectURL() {
          let t,
            { includeComments: e = !0, excludeAnnotations: n = !1 } =
              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = !1
          return {
            promise: new Promise((s) => {
              this.exportPDF({ flatten: !0, includeComments: e, excludeAnnotations: n }).then((e) => {
                if (o) return
                const n = new Blob([e], { type: 'application/pdf' })
                ;(t = window.URL.createObjectURL(n)), s(t)
              })
            }),
            revoke: () => {
              t && window.URL.revokeObjectURL(t), (o = !0)
            },
          }
        }
        async getDocumentOutline() {
          let t
          try {
            t = (await this._fetch(`${this._state.documentURL}/outline.json`).then((t) => t.json())).data
          } catch (e) {
            t = {}
          }
          const e = Array.isArray(t.outline) ? t.outline : []
          return (0, o.aV)(e.map(v.i))
        }
        onKeystrokeEvent() {
          throw new Error('not implemented')
        }
        async applyOperationsAndReload(t) {
          try {
            const e = await L(t)
            this._destroyProvider(),
              await this._fetch(`${this._state.documentURL}/apply-operations`, {
                method: 'post',
                body: e,
                credentials: 'include',
              })
          } catch (t) {
            throw new s.p2(`Applying operations failed: ${t}`)
          }
          return this.reloadDocument()
        }
        async applyRedactionsAndReload() {
          try {
            return (
              this._destroyProvider(),
              await this._fetch(`${this._state.documentURL}/redact`, { method: 'post', credentials: 'include' }),
              this.reloadDocument()
            )
          } catch (t) {
            throw (this.provider.load(), new s.p2(`Applying redactions failed: ${t}`))
          }
        }
        async reloadDocument() {
          try {
            return await this.load({ password: this._password })
          } catch (t) {
            throw new s.p2(`Reloading the document failed: ${t}`)
          }
        }
        async exportPDFWithOperations(t) {
          try {
            const e = await L(t)
            return this._fetch(`${this._state.documentURL}/pdf-with-operations`, {
              method: 'post',
              body: e,
              credentials: 'include',
            }).then((t) => t.arrayBuffer())
          } catch (t) {
            throw new s.p2(`Exporting PDF with operations failed: ${t}`)
          }
        }
        async getSignaturesInfo() {
          return (
            this._refreshSignaturesInfoPromise && (await this._refreshSignaturesInfoPromise),
            this._state.digitalSignatures
          )
        }
        refreshSignaturesInfo() {
          return (
            this._refreshSignaturesInfoPromise ||
              (this._refreshSignaturesInfoPromise = new Promise((t, e) => {
                this._fetch(`${this._state.documentURL}/signatures`, { method: 'get', credentials: 'include' })
                  .then((t) => t.json())
                  .then((e) => {
                    let { data: n } = e
                    ;(this._state = this._state.set('digitalSignatures', (0, d.rS)(n))),
                      (this._refreshSignaturesInfoPromise = null),
                      t()
                  })
                  .catch((t) => {
                    ;(this._state = this._state.set('digitalSignatures', null)),
                      (this._refreshSignaturesInfoPromise = null),
                      e(t)
                  })
              })),
            this._refreshSignaturesInfoPromise
          )
        }
        async signDocumentAndReload(t, e) {
          try {
            if (void 0 !== e && 'object' != typeof e)
              throw new s.p2('Signing service data must be an object if specified.')
            const n = {}
            t && 'placeholderSize' in t && (n.signerDataSource = { estimatedSize: t.placeholderSize }),
              t && 'flatten' in t && (n.flatten = t.flatten)
            const o = { ...(e ? { signingToken: e.signingToken } : null), ...n }
            this._destroyProvider(),
              await this._fetch(`${this._state.documentURL}/sign`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(o),
                credentials: 'include',
              }),
              await this.reloadDocument()
          } catch (t) {
            throw (this.provider.load(), new s.p2(`Adding digital signature failed: ${t.message || t}`))
          }
        }
        handleDocumentHandleConflict = () => {
          ;(this._state = this._state.set('isDocumentHandleOutdated', !0)),
            this.cancelRequests(),
            this._destroyProvider()
        }
        getDocumentHandle() {
          return this._state.documentHandle
        }
        async getEmbeddedFiles() {
          const t = await this._fetch(`${this._state.documentURL}/embedded-files`, {
              method: 'get',
              credentials: 'include',
            }),
            e = await t.json()
          return (0, o.aV)(
            e?.data?.embeddedFiles?.length
              ? e.data.embeddedFiles.map((t) => {
                  let { id: e, content: n } = t
                  return (0, A.i)(e, n)
                })
              : [],
          )
        }
        cancelRequests() {
          this._requestQueue.cancelAll()
        }
        _destroyProvider() {
          this.provider && (this.provider._clients && this.provider._clients.disconnect(), this.provider.destroy())
        }
        async _fetch(t, e) {
          const n = await fetch(t, {
            ...e,
            headers: {
              ...e?.headers,
              'X-PSPDFKit-Token': this._state.token,
              'PSPDFKit-Platform': 'web',
              'PSPDFKit-Version': (0, g.oM)(),
            },
          })
          if (!n.ok) {
            let t = await (function (t) {
              return t
                .clone()
                .json()
                .catch(() => t.text())
            })(n)
            t = 'object' == typeof t ? t.reason : t
            const e = t || `${n.status} ${n.statusText}`
            throw new s.p2(e)
          }
          return n
        }
        syncChanges() {
          return this.provider.syncChanges()
        }
        async clearAPStreamCache() {}
        async runPDFFormattingScripts() {
          return []
        }
        async lazyLoadPages() {}
        async contentEditorEnter() {
          throw new Error('not implemented')
        }
        async contentEditorExit() {
          throw new Error('not implemented')
        }
        async contentEditorGetTextBlocks(t) {
          throw new Error('not implemented')
        }
        async contentEditorDetectParagraphs(t) {
          throw new Error('not implemented')
        }
        async contentEditorRenderTextBlock(t, e, n) {
          throw new Error('not implemented')
        }
        contentEditorSetTextBlockCursor(t, e, n, o) {
          throw new Error('not implemented')
        }
        contentEditorMoveTextBlockCursor(t, e, n, o) {
          throw new Error('not implemented')
        }
        contentEditorInsertTextBlockString(t, e, n, o) {
          throw new Error('not implemented')
        }
        contentEditorInsertTextBlockContentRef(t, e, n, o) {
          throw new Error('not implemented')
        }
        contentEditorCreateTextBlock(t) {
          throw new Error('not implemented')
        }
        contentEditorDeleteTextBlockRange(t, e, n) {
          throw new Error('not implemented')
        }
        contentEditorLayoutTextBlock(t, e, n, o) {
          throw new Error('not implemented')
        }
        async contentEditorDeleteTextBlockString(t, e, n) {
          throw new Error('not implemented')
        }
        contentEditorSetTextBlockSelection(t, e, n) {
          throw new Error('not implemented')
        }
        contentEditorSetTextBlockSelectionRange(t, e, n, o, s) {
          throw new Error('not implemented')
        }
        async contentEditorTextBlockUndo(t, e) {
          throw new Error('not implemented')
        }
        async contentEditorTextBlockRedo(t, e) {
          throw new Error('not implemented')
        }
        async contentEditorTextBlockRestore(t, e, n) {
          throw new Error('not implemented')
        }
        async contentEditorTextBlockApplyFormat(t, e, n, o) {
          throw new Error('not implemented')
        }
        async contentEditorSave(t) {
          throw new Error('not implemented')
        }
        async contentEditorGetAvailableFaces() {
          throw new Error('not implemented')
        }
        async contentEditorSaveAndReload(t) {
          throw new Error('not implemented')
        }
      }
      async function L(t) {
        const e = {},
          n = new WeakMap(),
          o = await Promise.all(
            t.map(async (t, o) => {
              if ('importDocument' === t.type) {
                const a = t.document
                return (
                  (0, s.kG)(
                    a instanceof File || a instanceof Blob,
                    'Wrong `importDocument` operation `document` value: it must be a File or a Blob',
                  ),
                  (0, R.M)(n, e, a, t, o, 'document')
                )
              }
              if ('applyInstantJson' === t.type) {
                const a = t.instantJson
                ;(0, s.kG)(
                  'object' == typeof a && null !== a,
                  'Wrong `applyInstantJson` operation `instantJson` value: it must be an object',
                )
                const r = JSON.stringify(a),
                  i = new Blob([r], { type: 'application/json' })
                return (0, R.M)(n, e, i, t, o, 'dataFilePath')
              }
              if ('applyXfdf' === t.type) {
                const a = t.xfdf
                ;(0, s.kG)('string' == typeof a, 'Wrong `applyXfdf` operation `xfdf` value: it must be a string')
                const r = new Blob([a], { type: 'application/vnd.adobe.xfdf' })
                return (0, R.M)(n, e, r, t, o, 'dataFilePath')
              }
              return t
            }),
          ),
          a = new FormData()
        a.append('operations', JSON.stringify({ operations: o }))
        for (const t in e) a.append(t, e[t])
        return a
      }
    },
    47291: (t, e, n) => {
      n.d(e, { q: () => o })
      const o = { clientsPresenceEnabled: !0, listenToServerChangesEnabled: !0 }
    },
  },
])
