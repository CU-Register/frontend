'use strict'
;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [2333],
  {
    5773: (e, t, s) => {
      s.r(t), s.d(t, { InstantProvider: () => H })
      var n = s(35369),
        i = s(35712),
        o = s(81487),
        a = s(81928),
        r = s(51983)
      class c extends n.WV({ clientId: '', userId: null, presenceContent: {} }) {}
      class l extends n.WV({ status: 'offline', currentClient: null, clients: (0, n.D5)() }) {}
      var d = s(14968),
        h = s(34415)
      class u {
        constructor(e, t) {
          ;(this.callback = e), (this.timerCalc = t), (this.timer = null), (this.tries = 0)
        }
        reset() {
          ;(this.tries = 0), this.timer && clearTimeout(this.timer)
        }
        scheduleTimeout() {
          this.timer && clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              ;(this.tries = this.tries + 1), this.callback()
            }, this.timerCalc(this.tries + 1)))
        }
      }
      var m = s(46232)
      const p = '0.0.1',
        k = 0,
        f = 1,
        _ = 2,
        g = { name: 'PSPDFKit-Web' },
        C = (e) => [1e3, 2e3][e - 1] || 5e3
      class b {
        constructor(e, t) {
          let {
            reconnectTimerCalc: s = C,
            enableReconnect: i = !0,
            events: o = [],
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          ;(this.eventEmitter = new h.Z(['connect', 'disconnect', 'error'].concat(o))),
            (this.serverURL = e),
            (this.authPayload = t),
            (this.socket = null),
            (this.lastRequestId = 0),
            (this.requestsWaitingForAnswers = (0, n.D5)()),
            i &&
              (this.reconnectTimer = new u(() => {
                this.socket && (this.socket.close(), (this.socket = null)), this.connect()
              }, s)),
            this.clearAuthenticationInformation()
        }
        registerEvents(e) {
          this.eventEmitter.events.push(...e)
        }
        connect() {
          if (this.socket) return
          const e = new WebSocket(this.serverURL)
          ;(e.onopen = this.onOpen.bind(this)),
            (e.onmessage = this.onMessage.bind(this)),
            (e.onerror = () => {
              ;(this.socket = null),
                this.eventEmitter.emit(
                  'error',
                  `Failed to create the WebSocket connection to ${this.serverURL}. Please check your firewall or proxy settings.`,
                )
            }),
            (this.socket = e)
        }
        disconnect() {
          this.socket &&
            ((this.socket.onclose = () => {}),
            this.socket.close(),
            this.clearAuthenticationInformation(),
            this.abortOpenRequests(),
            this.eventEmitter.emit('disconnect'))
        }
        get connectionState() {
          switch (this.socket && this.socket.readyState) {
            case k:
              return 'connecting'
            case f:
              return 'open'
            case _:
              return 'closing'
            default:
              return 'closed'
          }
        }
        get isAuthenticated() {
          return '' !== this.clientId
        }
        sendRequest(e, t) {
          return new Promise((s, n) => {
            if (!this.isAuthenticated || !this.socket)
              return void n(new i.p2('Cannot send request when the connection is not authenticated'))
            const o = this.nextRequestId(),
              a = JSON.stringify(t)
            this.requestsWaitingForAnswers = this.requestsWaitingForAnswers.set(o, { resolve: s, reject: n })
            this.socket.send(`${o}:${e}:${a}`)
          })
        }
        on(e, t) {
          this.eventEmitter.on(e, t)
        }
        off(e, t) {
          this.eventEmitter.off(e, t)
        }
        onOpen() {
          const e = this.socket
          e && ((e.onerror = this.onError.bind(this)), (e.onclose = this.onClose.bind(this)))
        }
        onMessage(e) {
          const t = e.data
          if (this.isAuthenticated) {
            const e = this.parseFrame(t)
            if (e.requestId) {
              const t = e.requestId
              ;(0, m.k)(this.requestsWaitingForAnswers.has(t), 'Received a reply with an unknown request ID.')
              const s = this.requestsWaitingForAnswers.get(t)
              switch (((0, m.k)(s), e.action)) {
                case 'ok':
                  s.resolve(e.payload)
                  break
                case 'error':
                  s.reject(new i.p2(e.payload.reason || 'Unknown error'))
                  break
                default:
                  ;(0, m.k)(!1, `${e.action} is not a valid request reply`)
              }
              this.requestsWaitingForAnswers = this.requestsWaitingForAnswers.delete(t)
            } else
              this.eventEmitter.events.includes(e.action) && this.eventEmitter.emit(e.action, e.payload),
                this.log('incoming info message', e)
          } else {
            const e = this.parseUnauthenticatedFrame(t)
            switch (e.action) {
              case 'hello':
                this.onHello(e.payload)
                break
              case 'authenticated':
                this.onAuthenticated(e.payload)
                break
              case 'error':
                this.eventEmitter.emit('error', e.payload.reason || 'Unknown error')
            }
          }
        }
        onClose(e) {
          this.clearAuthenticationInformation(),
            this.abortOpenRequests(),
            this.reconnectTimer && this.reconnectTimer.scheduleTimeout(),
            this.eventEmitter.emit('disconnect'),
            this.log('close', e)
        }
        onError(e) {
          this.reconnectTimer && this.reconnectTimer.scheduleTimeout(), this.log('error', e)
        }
        nextRequestId() {
          const e = this.lastRequestId + 1
          return (this.lastRequestId = e), e
        }
        onHello(e) {
          const t = this.socket
          if (2 === e.protocol_version) {
            const e = { protocol_version: 2, client_version: p, client_info: g, auth_payload: this.authPayload }
            t.send(`hello_web:${JSON.stringify(e)}`)
          } else
            t.send(
              `handshake_failed:${JSON.stringify({
                reason: 'protocol_mismatch',
                protocol_version: 2,
                client_version: p,
                client_info: g,
              })}`,
            ),
              this.eventEmitter.emit('error', 'protocol_mismatch')
        }
        onAuthenticated(e) {
          ;(0, m.k)(e.client_id, '`authenticated` message has no `client_id`'),
            (this.clientId = e.client_id),
            (this.userId = e.user_id || null),
            this.eventEmitter.emit('connect', { clientId: this.clientId, userId: this.userId })
        }
        log() {
          if ('development' === (0, d.zj)()) {
            for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s]
            console.log('SYNCConnection', ...t)
          }
        }
        parseFrame(e) {
          const [, t, s, n] = /^(\d+|info):([a-zA-Z-_]+):(.+)$/.exec(e.toString())
          let i = null
          'info' !== t && (i = parseInt(t))
          return { requestId: i, action: s, payload: JSON.parse(n) }
        }
        parseUnauthenticatedFrame(e) {
          const [, t, s] = /^(hello|authenticated|error):(.+)$/.exec(e.toString())
          return { action: t, payload: JSON.parse(s) }
        }
        abortOpenRequests() {
          this.requestsWaitingForAnswers.forEach((e) => {
            e.reject(new i.p2('request aborted'))
          }),
            (this.requestsWaitingForAnswers = (0, n.D5)())
        }
        clearAuthenticationInformation() {
          ;(this.clientId = ''), (this.userId = null)
        }
      }
      function y(e) {
        return (
          (0, i.kG)('string' == typeof e.client_id, 'The client payload must have a `client_id`'),
          (0, i.kG)('object' == typeof e.presence, 'The client payload must have a `presence`'),
          new c({ clientId: e.client_id, userId: e.user_id, presenceContent: e.presence })
        )
      }
      class F {
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new l(),
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b
          ;(this.state = e), (this.connectionClass = t)
        }
        load(e, t, s) {
          return new Promise((n, o) => {
            ;(this.setState = (e) => {
              this.state = e
            }),
              (this.connection = new this.connectionClass(e, t, { events: ['client_presence'] })),
              this.connection.on('connect', (e) => {
                const t = new c({ clientId: e.clientId, userId: e.userId, presenceContent: s })
                this.setState(this.state.set('status', 'online').set('currentClient', t)),
                  this.populateClients(s)
                    .then(() => {
                      n(this)
                    })
                    .catch(o)
              }),
              this.connection.on('error', (e) => {
                o(new i.p2(e.toString()))
              }),
              this.connection.on('client_presence', (e) => this.onInfoClientPresence(e)),
              this.connection.connect()
          })
        }
        populateClients(e) {
          return new Promise((t, s) => {
            this.connection
              .sendRequest('enter_layer', { presence: e })
              .then((e) => {
                this.setState(
                  (function (e, t) {
                    return (
                      (0, m.k)(t.clients, 'The payload must have a `clients` list'),
                      e.withMutations((s) => {
                        const i = (0, n.D5)(t.clients.map((e) => y(e)).map((e) => [e.clientId, e])).set(
                          e.currentClient?.clientId,
                          e.currentClient,
                        )
                        s.set('clients', i)
                      })
                    )
                  })(this.state, e),
                ),
                  t()
              })
              .catch(s)
          })
        }
        onInfoClientPresence(e) {
          if (
            (this.setState(
              (function (e, t) {
                ;(0, m.k)('object' == typeof t.clients, 'The payload must have `clients`')
                const s = e.clients.withMutations((s) => {
                  if (t.clients.entered)
                    for (const n of t.clients.entered) {
                      if (e.clients.has(n.client_id)) throw new i.p2('The client marked as entered is already known')
                      const t = y(n)
                      s.set(t.clientId, t)
                    }
                  if (t.clients.updated)
                    for (const n of t.clients.updated) {
                      ;(0, m.k)('string' == typeof n.client_id, 'The client payload must have a `client_id`'),
                        (0, m.k)('object' == typeof n.presence, 'The client payload must have a `presence`')
                      const t = e.clients.get(n.client_id)
                      if (!t) throw new i.p2('The client marked as updated is not known')
                      s.set(t.clientId, t.set('presenceContent', n.presence))
                    }
                  if (t.clients.left)
                    for (const n of t.clients.left) {
                      if (!e.clients.has(n)) throw new i.p2('The client marked as left is not known')
                      s.delete(n)
                    }
                })
                return e.set('clients', s)
              })(this.state, e),
            ),
            this.shouldFireClientUpdatesCallback)
          ) {
            let t = (0, n.D5)()
            if (e.clients.entered) {
              const s = e.clients.entered.map((e) => e.client_id)
              t = this.state.clients.filter((e) => -1 !== s.indexOf(e.clientId)).toMap()
            }
            let s = (0, n.D5)()
            if (e.clients.updated) {
              const t = e.clients.updated.map((e) => e.client_id)
              s = this.state.clients.filter((e) => -1 !== t.indexOf(e.clientId)).toMap()
            }
            let i = (0, n.aV)()
            e.clients.updated && (i = (0, n.aV)(e.clients.left)), this.clientUpdatesCallback(t, s, i)
          }
        }
        disconnect() {
          'offline' !== this.getStatus() &&
            (this.setState(this.state.set('status', 'offline')), this.connection.disconnect())
        }
        getStatus() {
          return this.state.status
        }
        getCurrentClient() {
          return this.state.currentClient
        }
        getClients() {
          return (this.shouldFireClientUpdatesCallback = !0), this.state.clients
        }
        updatePresence(e) {
          return new Promise((t, s) => {
            if ('online' !== this.getStatus()) return s(new i.p2('ClientsPresence is not connected'))
            this.connection.sendRequest('update_client_presence', { presence: e }).then(
              () => {
                this.setState(
                  (function (e, t) {
                    return e
                      .setIn(['currentClient', 'presenceContent'], t)
                      .setIn(['clients', e.currentClient?.clientId, 'presenceContent'], t)
                  })(this.state, e),
                ),
                  t(!0)
              },
              () => {
                s(new i.p2('Unable to update presence'))
              },
            )
          })
        }
        onClientUpdates(e) {
          if ('function' != typeof e) throw new TypeError('callback must be a function')
          this.clientUpdatesCallback = e
        }
      }
      var I = s(52376)
      class v extends n.WV({
        content: null,
        attachments: null,
        id: null,
        type: null,
        isAnonymous: void 0,
        group: void 0,
        resolve: () => {},
        reject: () => {},
      }) {}
      var w = s(32289)
      class R extends n.WV({
        requestInfo: null,
        status: 'offline',
        currentClient: null,
        localRecordsContents: (0, n.zN)(),
        localRecordsChanges: (0, n.aV)(),
        stagedRecordsChanges: (0, n.aV)(),
        localRecordsRev: 0,
        requiredAttachmentIds: (0, n.l4)(),
        clients: (0, n.D5)(),
      }) {}
      var x = s(14295)
      class A {
        getRecords() {
          return (
            (this._shouldFireRecordsUpdateCallback = !0),
            this._state.localRecordsContents
              .map((e, t) => {
                const { content: s, permissions: n, group: i, isAnonymous: o } = e
                return { content: s, permissions: n, group: i, id: t, isAnonymous: o }
              })
              .toList()
          )
        }
        createRecord(e, t, s, n, i) {
          return new Promise((o, a) => {
            const r = new v({
              id: e,
              content: t,
              attachments: s,
              group: n,
              type: 'created',
              isAnonymous: i,
              resolve: o,
              reject: a,
            })
            this.enqueueChangeRequest(r)
          })
        }
        updateRecord(e, t, s, n) {
          return new Promise((o, a) => {
            if (!this.isKnownRecordId(e)) return a(new i.p2(`Record with ID: ${e} not found.`))
            const r = new v({ id: e, content: t, group: s, type: 'updated', isAnonymous: n, resolve: o, reject: a })
            this.enqueueChangeRequest(r)
          })
        }
        deleteRecord(e) {
          return new Promise((t, s) => {
            if (!this.isKnownRecordId(e)) return s(new i.p2(`Record with ID: ${e} not found.`))
            const n = new v({ id: e, type: 'deleted', resolve: t, reject: s })
            this.enqueueChangeRequest(n)
          })
        }
        onRecordsUpdates(e, t) {
          if ('function' != typeof e) throw new TypeError('recordsUpdateCallback must be a function')
          if ('function' != typeof t) throw new TypeError('acceptedRecordsCallback must be a function')
          ;(this._recordsUpdatesCallback = e), (this._acceptedRecordsResponseCallback = t)
        }
        destroy() {
          this._cycle && this._cycle.destroy()
        }
        _recordsUpdatesCallback = () => {}
        _acceptedRecordsResponseCallback = () => {}
        _shouldFireRecordsUpdateCallback = !1
        constructor() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new R(),
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : w.ZP
          ;(this._state = e), (this._CycleClass = t)
        }
        load(e, t) {
          let s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          return new Promise((n, i) => {
            const o = this.setState.bind(this)
            this.setState(this._state.set('requestInfo', { serverURL: e, authPayload: t })),
              (this._cycle = new this._CycleClass({
                getState: () => this._state,
                setState: o,
                onChanges: this.onChanges,
                onAcceptedRecords: this.onAcceptedRecords,
                longPollingTimeout: s ? w.mH : 0,
              })),
              this._cycle
                .nextCycle(0)
                .then(() => {
                  n(this)
                })
                .catch(i)
          })
        }
        setState(e) {
          this._state = e
        }
        onChanges = (e) => {
          if (this._shouldFireRecordsUpdateCallback) {
            const { created: t, updated: s, deleted: i } = e
            this._recordsUpdatesCallback((0, n.aV)(t), (0, n.aV)(s), (0, n.aV)(i))
          }
        }
        onAcceptedRecords = (e) => {
          if (this._shouldFireRecordsUpdateCallback) {
            const { created: t, updated: s, deleted: i } = e
            this._acceptedRecordsResponseCallback((0, n.aV)(t), (0, n.aV)(s), (0, n.aV)(i))
          }
        }
        setOnDocumentHandleConflictCallback = (e) => {
          if ('function' != typeof e) throw new TypeError('callback must be a function')
          this._cycle.setOnDocumentHandleConflictCallback(e)
        }
        enqueueChangeRequest(e) {
          const t = (0, I.n)({ oldChanges: this._state.localRecordsChanges, newChanges: (0, n.aV)([e]) })
          this.setState(this._state.set('localRecordsChanges', t))
        }
        syncChanges = (0, x.k)(() => this._cycle.nextCycle())
        isKnownRecordId(e) {
          function t(t) {
            return 'created' === t.type && t.id === e
          }
          const s = this._state.localRecordsContents.has(e),
            n = !!this._state.localRecordsChanges.find(t),
            i = !!this._state.stagedRecordsChanges.find(t)
          return s || n || i
        }
      }
      var S = s(47291),
        V = s(11171)
      function P(e, t) {
        const s = e.get('annotations'),
          n = e.get('formFields'),
          i = e.get('comments'),
          o = e.get('formattedFormFieldValues')
        let a
        return (
          t.id.startsWith('form-field-value/') && (a = t.id.split('/')[1]),
          s.get(t.id) || n.find((e) => e.id === t.id) || i.get(t.id) || (a ? o.get(a) : void 0)
        )
      }
      function G(e, t) {
        return Boolean(P(e, t))
      }
      var q = s(44006),
        D = s(91002),
        T = s(16105),
        E = s(81172),
        U = s(36091),
        O = s(72706),
        z = s(33502)
      function B(e) {
        return {
          id: e.id,
          type: 'pspdfkit/comment',
          v: 2,
          rootId: e.rootId,
          pageIndex: e.pageIndex,
          pdfObjectId: e.pdfObjectId,
          creatorName: e.creatorName,
          createdAt: e.createdAt.toISOString(),
          updatedAt: e.updatedAt.toISOString(),
          text: e.text,
          customData: e.customData,
          isAnonymous: e.isAnonymous,
          ...(0, E.Ut)(e),
        }
      }
      function j(e, t, s) {
        return (
          (0, i.kG)(2 === t.v, 'Unknown comment version'),
          (0, i.kG)('pspdfkit/comment' === t.type, 'Invalid comment type'),
          (0, i.kG)('string' == typeof t.rootId, '`rootId` must be of type `string`'),
          (0, i.kG)('number' == typeof t.pageIndex, '`pageIndex` must be of type `number`'),
          (0, i.kG)(
            null == t.pdfObjectId || 'number' == typeof t.pdfObjectId,
            '`pdfObjectId` must be of type `number`',
          ),
          (0, i.kG)(
            null == t.creatorName || 'string' == typeof t.creatorName,
            '`creatorName` must be of type `string`',
          ),
          (0, i.kG)('object' == typeof t.text, '`text` must be of type `object`'),
          (0, i.kG)('string' == typeof t.text.value, '`text.value` must be of type `string`'),
          (0, i.kG)('plain' === t.text.format || 'xhtml' === t.text.format, '`text.format` must be `plain` or `xhtml`'),
          (0, i.kG)(null == t.customData || (0, i.PO)(t.customData), '`customData` must be a JSON-serializable object'),
          (0, i.kG)(
            void 0 === s?.isAnonymous || 'boolean' == typeof s?.isAnonymous || null === s?.isAnonymous,
            '`isAnonymous` should be `undefined` or `boolean`.',
          ),
          (0, E.G)(s),
          new z.sv({
            id: e,
            rootId: t.rootId,
            pageIndex: t.pageIndex,
            pdfObjectId: t.pdfObjectId,
            creatorName: t.creatorName,
            createdAt: t.createdAt ? new Date(t.createdAt) : new Date(0),
            updatedAt: t.updatedAt ? new Date(t.updatedAt) : new Date(0),
            text: t.text,
            customData: t.customData,
            isAnonymous: s?.isAnonymous,
            ...(0, E.a5)(s),
          })
        )
      }
      class H {
        _existingBookmarksIds = (0, n.l4)()
        _existingFormFieldsIds = (0, n.l4)()
        _existingFormFieldValuesIds = (0, n.l4)()
        _existingCommentIds = (0, n.l4)()
        _documentHandleConflictCallback = () => {}
        canCreateBackendOrphanWidgets = !0
        constructor(e, t, s) {
          let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : S.q
          ;(this._serverURL = e),
            (this._documentURL = t),
            (this._authPayload = s),
            (this._settings = n),
            (this._hasLoadedInitialRecords = !1),
            (this._setReadStateCallbacksPromise = new Promise((e) => {
              this._setReadStateCallbacksPromiseResolve = e
            }))
        }
        load() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : F
          const s = []
          return (
            (this._sync = new e()),
            s.push(
              this._sync
                .load(`${this._documentURL}/sync`, this._authPayload, this._settings.listenToServerChangesEnabled)
                .catch(i.vU),
            ),
            this._sync.setOnDocumentHandleConflictCallback(this.onDocumentHandleConflict),
            this._settings.clientsPresenceEnabled &&
              ((this._clients = new t()),
              s.push(
                this._clients
                  .load(`${this._serverURL.replace(/^http/i, 'ws')}/websocket`, this._authPayload, {})
                  .then(() => {
                    const e = this._clients
                    null != e &&
                      (e.onClientUpdates(() => this._onClientsChange(e.getClients())),
                      this._onClientsChange(e.getClients()))
                  })
                  .catch((e) => {
                    ;(0, i.ZK)(
                      'PSPDFKit: An error occurred while initializing the connected clients module. This might be due to a lack of support for WebSockets or a related failure.\n\nFailure details:\n\n' +
                        e.message,
                    )
                  }),
              )),
            Promise.all(s)
              .then(() => this)
              .catch((e) => {
                throw new i.p2(`Initialization of PSPDFKit Instant failed:\n${e.message}`)
              })
          )
        }
        destroy() {
          this._sync && this._sync.destroy()
        }
        setFormsEnabledInConfig(e) {
          this._formsEnabledInConfig = e
        }
        setReadStateCallbacks(e) {
          ;(this._readStateCallbacks = e), this._setReadStateCallbacksPromiseResolve?.()
        }
        setAnnotationCallbacks(e) {
          this._annotationCallbacks = e
        }
        setBookmarkCallbacks(e) {
          this._bookmarkCallbacks = e
        }
        setFormFieldCallbacks(e) {
          this._formFieldCallbacks = e
        }
        setFormFieldValueCallbacks(e) {
          this._formFieldValueCallbacks = e
        }
        setCommentCallbacks(e) {
          this._commentCallbacks = e
        }
        createAnnotation(e, t) {
          const { id: s, ...n } = (0, o.Hs)(e),
            { group: a, permissions: r, ...c } = n
          return (0, i.kG)(s, 'Annotation id must be defined.'), this._sync.createRecord(s, c, (0, o.Lw)(t), a)
        }
        createComment(e) {
          const { id: t, ...s } = B(e),
            { group: n, permissions: o, isAnonymous: a, ...r } = s
          return (
            (0, i.kG)(t, 'Comment id must be defined.'),
            (this._existingCommentIds = this._existingCommentIds.add(t)),
            this._sync.createRecord(t, r, {}, n, !!a)
          )
        }
        async updateComment(e) {
          try {
            await this.updateRecord(B(e))
          } catch (e) {
            if (!(e instanceof i.p2)) throw e
          }
        }
        deleteComment(e) {
          return (
            (this._existingCommentIds = this._existingCommentIds.delete(e)), this._sync.deleteRecord(e).then(() => {})
          )
        }
        setStateGetter(e) {
          this._getState = e
        }
        async updateRecord(e) {
          const {
            id: t,
            permissions: s,
            isAnonymous: n,
            group: o,
            ...a
          } = 'pspdfkit/comment' === e.type ? e : { ...e, isAnonymous: void 0 }
          return (
            (0, i.kG)(t, 'Record id must be defined.'),
            this._getState?.()?.backend?.isCollaborationPermissionsEnabled()
              ? ((0, i.kG)(s, 'Permissions must be defined.'),
                this._sync.updateRecord(t, s.edit ? a : void 0, s.setGroup ? o ?? void 0 : void 0, n ?? void 0))
              : this._sync.updateRecord(t, a, o ?? void 0, n ?? void 0)
          )
        }
        async updateAnnotation(e) {
          try {
            await this.updateRecord((0, o.Hs)(e))
          } catch (e) {
            if (!(e instanceof i.p2)) throw e
          }
        }
        deleteAnnotation(e) {
          return this._sync.deleteRecord(e.id).then(() => {})
        }
        createBookmark(e) {
          const { id: t, ...s } = (0, a.a)(e)
          return (this._existingBookmarksIds = this._existingBookmarksIds.add(t)), this._sync.createRecord(t, s, {})
        }
        async updateBookmark(e) {
          const { id: t, ...s } = (0, a.a)(e)
          try {
            await this._sync.updateRecord(t, s)
          } catch (e) {
            if (!(e instanceof i.p2)) throw e
          }
        }
        deleteBookmark(e) {
          return this._sync.deleteRecord(e).then(() => {
            this._existingBookmarksIds = this._existingBookmarksIds.delete(e)
          })
        }
        createFormField(e) {
          const { group: t, permissions: s, id: n, ...i } = (0, o.vD)(e)
          return (
            (this._existingFormFieldsIds = this._existingFormFieldsIds.add(n)), this._sync.createRecord(n, i, {}, t)
          )
        }
        async updateFormField(e) {
          try {
            await this.updateRecord((0, o.vD)(e))
          } catch (e) {
            if (!(e instanceof i.p2)) throw e
          }
        }
        deleteFormField(e) {
          return this._sync.deleteRecord(e.id).then(() => {
            this._existingFormFieldsIds = this._existingFormFieldsIds.delete(e.id)
          })
        }
        loadFormFields() {
          return this.loadAnnotationsForPageIndex()
        }
        createFormFieldValue(e) {
          const t = (0, o.kr)(e),
            s = (0, V.X)(e)
          return (
            (this._existingFormFieldValuesIds = this._existingFormFieldValuesIds.add(s)),
            this._sync.createRecord(s, t, {})
          )
        }
        async setFormFieldValue(e) {
          const t = (0, o.kr)(e)
          try {
            await this._sync.updateRecord((0, V.X)(e), t)
          } catch (e) {
            if (!(e instanceof i.p2)) throw e
          }
        }
        deleteFormFieldValue(e) {
          return this._sync.deleteRecord(e).then(() => {
            this._existingFormFieldValuesIds = this._existingFormFieldValuesIds.delete(e)
          })
        }
        loadAnnotationsForPageIndex() {
          return (
            this._loadPromise ||
              (this._loadPromise = new Promise((e) => setTimeout(e, 0)).then(() => {
                this._hasLoadedInitialRecords ||
                  (this._sync.onRecordsUpdates(
                    (e, t, s) => this._onRecordsUpdates(e, t, s, r.z),
                    (e, t, s) => this._onAcceptedRecords(e, t, s),
                  ),
                  this._onRecordsUpdates(this._sync.getRecords(), (0, n.aV)(), (0, n.aV)(), r.y),
                  (this._hasLoadedInitialRecords = !0))
              })),
            this._loadPromise
          )
        }
        async loadBookmarks() {}
        syncChanges() {
          return this._sync.syncChanges()
        }
        _filterRecords(e) {
          return e.filter((e) => {
            let { content: t } = e
            return this._formsEnabledInConfig || !(0, o._Q)(t)
          })
        }
        _onRecordsUpdates(e, t, s, r) {
          let c = (0, n.aV)()
          const l = []
          let d = (0, n.aV)(),
            h = (0, n.aV)(),
            u = (0, n.l4)(),
            m = (0, n.l4)(),
            p = (0, n.l4)(),
            k = (0, n.l4)(),
            f = (0, n.l4)()
          const _ = this._getState ? this._getState() : void 0
          let g = e,
            C = t,
            b = s
          if (_ && _.backend && _.backend.isCollaborationPermissionsEnabled()) {
            g = g.filter((e) => {
              let { content: t } = e
              return !!t
            })
            const e = []
            t.forEach((t, s) => {
              t.content
                ? G(_, t) || ((g = g.push(t)), e.push(s))
                : G(_, t)
                ? ((b = b.push(t.id)), e.push(s))
                : e.push(s)
            }),
              (C = C.filter((t, s) => !e.includes(s))),
              (b = b.filter(
                (e) =>
                  _.annotations.has(e) ||
                  this._existingFormFieldValuesIds.has(e) ||
                  this._existingFormFieldsIds.has(e) ||
                  this._existingCommentIds.has(e) ||
                  this._existingBookmarksIds.has(e),
              ))
          }
          let y = (0, n.aV)().withMutations((e) => {
            this._filterRecords(g).forEach((t) => {
              let { id: s, content: n, permissions: r, group: u, isAnonymous: m } = t
              const p = { permissions: r, group: u, isAnonymous: m }
              try {
                ;(0, o._Q)(n)
                  ? (l.push((0, o.IN)(s, n, p)), (this._existingFormFieldsIds = this._existingFormFieldsIds.add(s)))
                  : (0, o.Qp)(n)
                  ? ((d = d.push((0, o.u9)(n))),
                    (this._existingFormFieldValuesIds = this._existingFormFieldValuesIds.add(s)))
                  : (0, o.l9)(n)
                  ? ((c = c.push((0, a.i)(s, n))), (this._existingBookmarksIds = this._existingBookmarksIds.add(s)))
                  : (0, o.Fd)(n)
                  ? ((this._existingCommentIds = this._existingCommentIds.add(s)), (h = h.push(j(s, n, p))))
                  : (0, o.$T)(n) || (0, o._o)(n) || e.push((0, o.vH)(s, n, p))
              } catch (e) {
                ;(0, i.um)(
                  `Skipped creating record #${s} from payload because an error occurred while deserializing.`,
                  n,
                ),
                  (0, i.um)(e)
              }
            })
          })
          const F = !_ || (0, U.xW)(_.features, _.signatureFeatureAvailability)
          l.length > 0 &&
            ((0, i.kG)(this._formFieldCallbacks),
            _ && !F
              ? this._formFieldCallbacks.createFormFields((0, n.aV)(l.filter((e) => !(e instanceof O.Yo))), r)
              : this._formFieldCallbacks.createFormFields((0, n.aV)(l), r)),
            y.size > 0 &&
              ((0, i.kG)(this._annotationCallbacks),
              _ &&
                !F &&
                (y = y.filter((e) => {
                  if (!(e instanceof z.x_)) return e
                  const t = l.find((t) => t.name === e.formFieldName) || _.formFields.get(e.formFieldName)
                  return !(t && t instanceof O.Yo)
                })),
              this._annotationCallbacks.createAnnotations(y, (0, n.D5)(), r)),
            d.size > 0 &&
              ((0, i.kG)(this._formFieldValueCallbacks),
              _ &&
                !F &&
                (d = d.filter((e) => {
                  const t = l.find((t) => t.name === e.name) || _.formFields.get(e.formFieldName)
                  return !(t && t instanceof O.Yo)
                })),
              this._formFieldValueCallbacks.createFormFieldValues((0, n.aV)(d), r)),
            h.size > 0 && ((0, i.kG)(this._commentCallbacks), this._commentCallbacks.createComments(h, r)),
            c.size > 0 && ((0, i.kG)(this._bookmarkCallbacks), this._bookmarkCallbacks.createBookmarks(c, r))
          const I = (0, n.aV)().asMutable(),
            v = [],
            w = [],
            R = [],
            x = (0, n.aV)().withMutations((e) => {
              this._filterRecords(C).forEach((t) => {
                let { id: s, content: n, group: r, permissions: c, isAnonymous: l } = t
                const d = { permissions: c, group: r, isAnonymous: l }
                try {
                  if ((0, o._Q)(n))
                    try {
                      v.push((0, o.IN)(s, n, d))
                    } catch (e) {
                      ;(p = p.add(s)),
                        (0, i.um)(
                          `Skipped updating form field #${s} from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.`,
                          n,
                        ),
                        (0, i.um)(e)
                    }
                  else if ((0, o.Qp)(n))
                    try {
                      w.push((0, o.u9)(n))
                    } catch (e) {
                      ;(k = k.add(s)),
                        (0, i.um)(
                          `Skipped updating form field value #${s} from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.`,
                          n,
                        ),
                        (0, i.um)(e)
                    }
                  else if ((0, o.l9)(n))
                    try {
                      I.push((0, a.i)(s, n))
                    } catch (e) {
                      ;(m = m.add(s)),
                        (0, i.um)(
                          `Skipped updating bookmark #${s} from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.`,
                          n,
                        ),
                        (0, i.um)(e)
                    }
                  else if ((0, o.Fd)(n))
                    try {
                      R.push(j(s, n, d))
                    } catch (e) {
                      ;(f = f.add(s)),
                        (0, i.um)(
                          `Skipped updating comment #${s} from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.`,
                          n,
                          e,
                        )
                    }
                  else e.push((0, o.vH)(s, n, d))
                } catch (e) {
                  ;(u = u.add(s)),
                    (0, i.um)(
                      `Skipped updating annotation #${s} from payload because an error occurred while deserializing. To avoid issues, we have removed the previous version from the application state.`,
                      n,
                    ),
                    (0, i.um)(e)
                }
              })
            })
          x.size > 0 && ((0, i.kG)(this._annotationCallbacks), this._annotationCallbacks.updateAnnotations(x)),
            I.size > 0 && ((0, i.kG)(this._bookmarkCallbacks), this._bookmarkCallbacks.updateBookmarks(I)),
            v.length > 0 &&
              ((0, i.kG)(this._formFieldCallbacks), this._formFieldCallbacks.updateFormFields((0, n.aV)(v))),
            w.length > 0 &&
              ((0, i.kG)(this._formFieldValueCallbacks),
              this._formFieldValueCallbacks.setFormFieldValues((0, n.aV)(w))),
            R.length > 0 && ((0, i.kG)(this._commentCallbacks), this._commentCallbacks.updateComments((0, n.aV)(R))),
            (u = u.concat(
              b
                .filter(
                  (e) =>
                    !(
                      this._existingBookmarksIds.has(e) ||
                      this._existingFormFieldsIds.has(e) ||
                      this._existingFormFieldValuesIds.has(e) ||
                      this._existingCommentIds.has(e)
                    ),
                )
                .toSet(),
            )),
            u.size > 0 && ((0, i.kG)(this._annotationCallbacks), this._annotationCallbacks.deleteAnnotations(u)),
            (m = m.concat(
              b
                .filter((e) => {
                  const t = this._existingBookmarksIds.has(e)
                  return t && (this._existingBookmarksIds = this._existingBookmarksIds.delete(e)), t
                })
                .toSet(),
            )),
            m.size > 0 && ((0, i.kG)(this._bookmarkCallbacks), this._bookmarkCallbacks.deleteBookmarks(m)),
            (p = p.concat(
              b
                .filter((e) => {
                  const t = this._existingFormFieldsIds.has(e)
                  return t && (this._existingFormFieldsIds = this._existingFormFieldsIds.delete(e)), t
                })
                .toSet(),
            )),
            p.size > 0 && ((0, i.kG)(this._formFieldCallbacks), this._formFieldCallbacks.deleteFormFields(p)),
            (k = k.concat(
              b
                .filter((e) => {
                  const t = this._existingFormFieldValuesIds.has(e)
                  return t && (this._existingFormFieldValuesIds = this._existingFormFieldValuesIds.delete(e)), t
                })
                .toSet(),
            )),
            k.size > 0 &&
              ((0, i.kG)(this._formFieldValueCallbacks), this._formFieldValueCallbacks.deleteFormFieldValues(k)),
            (f = f.concat(
              b
                .filter((e) => {
                  const t = this._existingCommentIds.has(e)
                  return t && (this._existingCommentIds = this._existingCommentIds.delete(e)), t
                })
                .toSet(),
            )),
            f.size > 0 && ((0, i.kG)(this._commentCallbacks), this._commentCallbacks.deleteComments(f))
        }
        _onAcceptedRecords(e, t) {
          const s = this._getState ? this._getState() : void 0
          if (!s || !s.backend || !s.backend.isCollaborationPermissionsEnabled()) return
          const o = [],
            a = [],
            r = [],
            c = [],
            l = [],
            d = []
          function h(e) {
            const t = { permissions: e.permissions, group: e.group }
            let n = P(s, e)
            if (n && 'string' != typeof n) {
              ;(0, E.G)(t)
              const e = (0, E.a5)(t)
              ;(n = n.merge(e)),
                n instanceof q.Z
                  ? t.permissions && t.permissions.view
                    ? o.push(n)
                    : c.push(n.id)
                  : n instanceof D.ZP
                  ? t.permissions && t.permissions.view
                    ? a.push(n)
                    : ((0, i.kG)(n.id), l.push(n.id))
                  : n instanceof T.ZP && (t.permissions && t.permissions.view ? r.push(n) : d.push(n.id))
            }
          }
          e.isEmpty() || e.forEach(h),
            t.isEmpty() || t.forEach(h),
            o.length > 0 &&
              ((0, i.kG)(this._annotationCallbacks), this._annotationCallbacks.updateAnnotations((0, n.aV)(o), !0)),
            a.length > 0 && ((0, i.kG)(this._commentCallbacks), this._commentCallbacks.updateComments((0, n.aV)(a))),
            r.length > 0 &&
              ((0, i.kG)(this._formFieldCallbacks), this._formFieldCallbacks.updateFormFields((0, n.aV)(r))),
            c.length > 0 &&
              ((0, i.kG)(this._annotationCallbacks), this._annotationCallbacks.deleteAnnotations((0, n.l4)(c), !0)),
            l.length > 0 && ((0, i.kG)(this._commentCallbacks), this._commentCallbacks.deleteComments((0, n.l4)(l))),
            d.length > 0 &&
              ((0, i.kG)(this._formFieldCallbacks), this._formFieldCallbacks.deleteFormFields((0, n.l4)(d)))
        }
        onClientsChange(e) {
          if ('function' != typeof e) throw new TypeError('Callback must be a function')
          this.onClientsChangeCallback = e
        }
        _onClientsChange(e) {
          this.onClientsChangeCallback.call(null, e)
        }
        setDocumentHandleConflictCallback = (e) => {
          this._documentHandleConflictCallback = e
        }
        setDocumentHandleOutdated = (e) => {
          this._setDocumentHandleOutdatedCallback = e
        }
        onDocumentHandleConflict = () => {
          this._documentHandleConflictCallback && this._documentHandleConflictCallback(),
            this._setDocumentHandleOutdatedCallback && this._setDocumentHandleOutdatedCallback(!0)
        }
      }
    },
  },
])
