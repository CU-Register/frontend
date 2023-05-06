;(globalThis.webpackChunkPSPDFKit = globalThis.webpackChunkPSPDFKit || []).push([
  [3610],
  {
    72098: (e, t, n) => {
      'use strict'
      n.d(t, { Z: () => d })
      var r = n(35369),
        o = n(35712),
        s = n(42876),
        i = n.n(s),
        a = n(63880)
      const c = () => {}
      class d {
        _worker = new (i())()
        _requests = (0, r.D5)()
        _nextRequestId = 1
        _isLoading = !0
        _loadPromise = null
        _initPromise = null
        _hasOpenedDocument = !1
        _hasLoadedCertificates = !1
        constructor() {
          this._worker.onmessage = this._handleMessage
        }
        loadNativeModule(e, t) {
          let {
            mainThreadOrigin: n,
            disableWebAssemblyStreaming: r,
            enableAutomaticLinkExtraction: s,
            overrideMemoryLimit: i,
          } = t
          return (
            (0, o.kG)(
              !this._hasOpenedDocument,
              'cannot invoke `loadNativeModule` while an instance is still in use. Please call `recycle` first.',
            ),
            this._loadPromise
              ? this._loadPromise.then(() => {})
              : (this._initPromise ||
                  (this._initPromise = this._sendRequest('loadNativeModule', [
                    e,
                    {
                      mainThreadOrigin: n,
                      disableWebAssemblyStreaming: r,
                      enableAutomaticLinkExtraction: s,
                      overrideMemoryLimit: i,
                    },
                  ])
                    .then((e) => e)
                    .catch((e) => {
                      throw ((this._isLoading = !1), this._worker.terminate(), e)
                    })),
                this._initPromise)
          )
        }
        load(e, t, n) {
          let { mainThreadOrigin: r, customFonts: s, productId: i } = n
          return (
            (0, o.kG)(
              !this._hasOpenedDocument,
              'cannot invoke `load` while an instance is still in use. Please call `recycle` first.',
            ),
            this._loadPromise ||
              (this._loadPromise = this._sendRequest('load', [
                e,
                t,
                { mainThreadOrigin: r, customFonts: s, productId: i },
              ])
                .then((e) => ((this._isLoading = !1), e))
                .catch((e) => {
                  throw ((this._isLoading = !1), this._worker.terminate(), e)
                })),
            this._loadPromise
          )
        }
        version() {
          return this._assertLoaded(), this._sendRequest('version')
        }
        openDocument(e, t, n) {
          return (
            this._assertLoaded(),
            (this._hasOpenedDocument = !0),
            this._sendRequest('openDocument', [e, t, n]).catch((e) => {
              throw ((this._hasOpenedDocument = !1), e)
            })
          )
        }
        async openDocumentAt() {
          throw new Error('Should never be called')
        }
        async getAllPageInfos(e) {
          return this._assertLoaded(), this._sendRequest('getAllPageInfos', [e])
        }
        async enablePDFJavaScriptSupport() {
          return this._assertLoaded(), this._sendRequest('enablePDFJavaScriptSupport')
        }
        async runPDFFormattingScripts(e, t) {
          return this._assertLoaded(), this._sendRequest('runPDFFormattingScripts', [e, t])
        }
        getBookmarks() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getBookmarks')
        }
        getFormJSON() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getFormJSON')
        }
        evalFormValuesActions(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('evalFormValuesActions', [e])
        }
        evalScript(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('evalScript', [e, t])
        }
        setFormJSONUpdateBatchMode(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('setFormJSONUpdateBatchMode', [e])
        }
        getFormValues() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getFormValues')
        }
        closeDocument() {
          return this._assertLoaded(), (this._hasOpenedDocument = !1), this._sendRequest('closeDocument')
        }
        renderTile(e, t, n, r, o, s, i, a) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('renderTile', [e, t, n, r, o, s, i, a])
          )
        }
        renderAnnotation(e, t, n, r, o, s) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('renderAnnotation', [e, t, n, r, o, s])
          )
        }
        renderPageAnnotations(e, t, n, r, o) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('renderPageAnnotations', [e, t, n, r, o])
          )
        }
        renderDetachedAnnotation(e, t, n, r, o) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('renderDetachedAnnotation', [e, t, n, r, o])
          )
        }
        onKeystrokeEvent(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('onKeystrokeEvent', [e])
        }
        getAttachment(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getAttachment', [e])
        }
        textForPageIndex(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('textForPageIndex', [e])
        }
        annotationsForPageIndex(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('annotationsForPageIndex', [e])
        }
        createAnnotation(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('createAnnotation', [e, t])
        }
        updateAnnotation(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('updateAnnotation', [e])
        }
        deleteAnnotation(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('deleteAnnotation', [e])
        }
        createFormField(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('createFormField', [e, t])
        }
        updateFormField(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('updateFormField', [e, t])
        }
        deleteFormField(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('deleteFormField', [e])
        }
        setFormFieldValue(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('setFormFieldValue', [e])
        }
        deleteFormFieldValue(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('deleteFormFieldValue', [e])
        }
        createBookmark(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('createBookmark', [e])
        }
        updateBookmark(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('updateBookmark', [e])
        }
        deleteBookmark(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('deleteBookmark', [e])
        }
        getTextFromRects(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getTextFromRects', [e, t])
        }
        search(e, t, n, r) {
          let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.S.TEXT
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('search', [e, t, n, r, o])
        }
        getMeasurementSnappingPoints(e) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getMeasurementSnappingPoints', [e])
          )
        }
        parseXFDF(e) {
          return this._sendRequest('parseXFDF', [e])
        }
        getEmbeddedFilesList() {
          return this._sendRequest('getEmbeddedFilesList')
        }
        exportFile() {
          let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'pdf',
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = arguments.length > 5 ? arguments[5] : void 0
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('exportFile', [e, t, n, r, o, s])
        }
        importXFDF(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('importXFDF', [e, t])
        }
        exportXFDF() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('exportXFDF', [])
        }
        importInstantJSON(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('importInstantJSON', [e])
        }
        exportInstantJSON(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('exportInstantJSON', [e])
        }
        getDocumentOutline() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getDocumentOutline')
        }
        applyOperations(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('applyOperations', [e, t])
        }
        reloadDocument() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('reloadDocument')
        }
        exportPDFWithOperations(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('exportPDFWithOperations', [e, t])
        }
        loadCertificates(e) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            (this._hasLoadedCertificates = Boolean(e.length)),
            this._sendRequest('loadCertificates', [e]).catch((e) => {
              throw ((this._hasLoadedCertificates = !1), e)
            })
          )
        }
        getSignaturesInfo() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('getSignaturesInfo', [])
        }
        prepareSignInvisible(e, t) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('prepareSignInvisible', [e, t])
        }
        sign(e, t, n) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('sign', [e, t, n])
        }
        restoreToOriginalState() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('restoreToOriginalState')
        }
        applyRedactions() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('applyRedactions', [])
        }
        readFormJSONObjects() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('readFormJSONObjects')
        }
        clearAPStreamCache() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('clearAPStreamCache')
        }
        setComparisonDocument(e, t) {
          return (
            this._assertLoaded(), t || this._assertDocumentOpen(), this._sendRequest('setComparisonDocument', [e, t])
          )
        }
        openComparisonDocument(e) {
          return (
            this._assertLoaded(),
            (this._hasOpenedDocument = !0),
            this._sendRequest('openComparisonDocument', [e]).catch((e) => {
              throw ((this._hasOpenedDocument = !1), e)
            })
          )
        }
        documentCompareAndOpen(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('documentCompareAndOpen', [e])
        }
        persistOpenDocument(e) {
          return this._assertLoaded(), e || this._assertDocumentOpen(), this._sendRequest('persistOpenDocument', [e])
        }
        cleanupDocumentComparison() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('cleanupDocumentComparison')
        }
        contentEditorEnter() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorEnter', [])
        }
        contentEditorExit() {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorExit', [])
        }
        contentEditorGetTextBlocks(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorGetTextBlocks', [e])
        }
        contentEditorDetectParagraphs(e) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorDetectParagraphs', [e])
          )
        }
        contentEditorRenderTextBlock(e, t, n) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorRenderTextBlock', [e, t, n])
          )
        }
        contentEditorSetTextBlockCursor(e, t, n, r) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorSetTextBlockCursor', [e, t, n, r])
          )
        }
        contentEditorMoveTextBlockCursor(e, t, n, r) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorMoveTextBlockCursor', [e, t, n, r])
          )
        }
        contentEditorInsertTextBlockString(e, t, n, r) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorInsertTextBlockString', [e, t, n, r])
          )
        }
        contentEditorInsertTextBlockContentRef(e, t, n, r) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorInsertTextBlockContentRef', [e, t, n, r])
          )
        }
        contentEditorCreateTextBlock(e) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorCreateTextBlock', [e])
          )
        }
        contentEditorLayoutTextBlock(e, t, n, r) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorLayoutTextBlock', [e, t, n, r])
          )
        }
        contentEditorDeleteTextBlockRange(e, t, n) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorDeleteTextBlockRange', [e, t, n])
          )
        }
        contentEditorDeleteTextBlockString(e, t, n) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorDeleteTextBlockString', [e, t, n])
          )
        }
        contentEditorSetTextBlockSelection(e, t, n) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorSetTextBlockSelection', [e, t, n])
          )
        }
        contentEditorSetTextBlockSelectionRange(e, t, n, r, o) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorSetTextBlockSelectionRange', [e, t, n, r, o])
          )
        }
        contentEditorTextBlockUndo(e, t) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorTextBlockUndo', [e, t])
          )
        }
        contentEditorTextBlockRedo(e, t) {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorTextBlockRedo', [e, t])
          )
        }
        contentEditorTextBlockRestore(e, t, n) {
          return (
            this._assertLoaded(),
            this._assertDocumentOpen(),
            this._sendRequest('contentEditorTextBlockRestore', [e, t, n])
          )
        }
        contentEditorTextBlockApplyFormat(e, t, n, r) {
          return this._sendRequest('contentEditorTextBlockApplyFormat', [e, t, n, r])
        }
        contentEditorGetAvailableFaces() {
          return (
            this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorGetAvailableFaces', [])
          )
        }
        contentEditorSave(e) {
          return this._assertLoaded(), this._assertDocumentOpen(), this._sendRequest('contentEditorSave', [e])
        }
        recycle() {
          this._hasLoadedCertificates && this.loadCertificates([]),
            this._hasOpenedDocument && this.closeDocument(),
            this._isLoading || (this._requests = this._requests.map(() => ({ resolve: c, reject: c })))
        }
        destroy() {
          ;(this._loadPromise = null), this._worker.terminate()
        }
        _assertLoaded() {
          if (this._isLoading) throw new o.p2('CoreClient not yet initialized')
        }
        _assertDocumentOpen() {
          if (!this._hasOpenedDocument)
            throw new o.p2(
              'This method can not be called since there is no open document. Have you run PSPDFKit.unload()?',
            )
        }
        _handleMessage = (e) => {
          const t = e.data,
            n = this._requests.get(t.id)
          ;(0, o.kG)(n, `No request was made for id ${t.id}.`)
          const { resolve: r, reject: s } = n
          if (((this._requests = this._requests.delete(t.id)), t.error)) {
            const e = new o.p2(t.error)
            ;(e.callArgs = t.callArgs), s(e)
          } else r(t.result)
        }
        _sendRequest(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
          return new Promise((n, r) => {
            const o = this._assignId(),
              s = [...t].filter((e) => e instanceof ArrayBuffer)
            this._worker.postMessage({ id: o, action: e, args: t }, s),
              (this._requests = this._requests.set(o, { resolve: n, reject: r }))
          })
        }
        _assignId() {
          const e = this._nextRequestId
          return (this._nextRequestId = this._nextRequestId + 1), e
        }
      }
    },
    46777: (e, t, n) => {
      'use strict'
      n.r(t),
        n.d(t, {
          corePool: () => G,
          customFontsPromiseRef: () => Y,
          default: () => Q,
          loadModule: () => ee,
          normalizeCoreOptions: () => W,
          validateStandaloneConfiguration: () => z,
        })
      var r = n(35369),
        o = n(35712),
        s = n(14968),
        i = n(34997),
        a = n(24956),
        c = n(19491),
        d = n(50893),
        l = n(29412),
        u = n(89595),
        h = n(80614),
        p = n(89777),
        m = n(81487),
        f = n(67366),
        g = n(81928),
        y = n(57106),
        b = n(10163),
        _ = n(51983)
      class v extends (0, r.WV)({ alreadyLoadedPages: (0, r.D5)(), isLoaded: !1, isDestroyed: !1 }) {}
      const w = {
        skippedPdfObjectIds: [],
        skippedPdfBookmarkIds: [],
        annotations: [],
        bookmarks: [],
        formFieldValues: [],
        formFields: [],
        attachments: {},
      }
      class F {
        _state = new v()
        _formFieldsLoadedPromise = null
        _objectCreationPromises = (0, r.D5)()
        _loadBookmarksPromise = null
        canCreateBackendOrphanWidgets = !1
        constructor(e, t) {
          ;(this._core = e),
            (this._json = t ? k(t) : null),
            (this._setReadStateCallbacksPromise = new Promise((e) => {
              this._setReadStateCallbacksPromiseResolve = e
            }))
        }
        async load() {
          if (
            ((this._state = this._state.set('isLoaded', !0)),
            !this._formFieldCallbacks && (await this._loadFormFieldValues()),
            !this._json)
          )
            return this
          await this._core.importInstantJSON({ ...w, ...this._json }), (0, o.kG)(this._json)
          const { annotations: e, attachments: t } = this._json
          if (this._isDestroyed() || !t || 0 === Object.entries(t).length) return this
          if (e)
            for (let n = 0; n < e.length; n++) {
              let r = null
              const s = e[n]
              if ('imageAttachmentId' in s && s.imageAttachmentId) {
                const e = t ? t[s.imageAttachmentId] : null
                if (e)
                  try {
                    ;(r = (0, y.Jc)(atob(e.binary), e.contentType)),
                      (0, o.kG)(this._annotationCallbacks),
                      this._annotationCallbacks.createAttachment(s.imageAttachmentId, r)
                  } catch (e) {
                    ;(0, o.um)(
                      `Skipped attachment with id ${s.imageAttachmentId} from payload because an error occurred while converting the binary image to blob.`,
                    ),
                      (0, o.um)(e)
                  }
              }
            }
          return this
        }
        destroy() {
          ;(this._state = this._state.set('isDestroyed', !0)),
            (this._annotationCallbacks = null),
            (this._readStateCallbacks = null),
            (this._bookmarkCallbacks = null),
            (this._formFieldCallbacks = null),
            (this._formFieldValueCallbacks = null)
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
        setCommentCallbacks() {}
        createComment() {
          return Promise.reject('Comments are not supported in Standalone.')
        }
        deleteComment() {
          return Promise.reject('Comments are not supported in Standalone.')
        }
        updateComment() {
          return Promise.reject('Comments are not supported in Standalone.')
        }
        createAnnotation(e, t) {
          this._verifyLoaded()
          const n = t.find((t, n) => n === e.imageAttachmentId)
          return this._core.createAnnotation((0, m.Hs)(e), n ? n.data : null).then((t) => {
            'number' != typeof t ||
              'number' != typeof e.pdfObjectId ||
              e.pdfObjectId === t ||
              this._isDestroyed() ||
              ((0, o.kG)(this._annotationCallbacks),
              this._annotationCallbacks.updateAnnotations((0, r.aV)([e.set('pdfObjectId', t)])))
          })
        }
        updateAnnotation(e) {
          return this._verifyLoaded(), this._core.updateAnnotation((0, m.Hs)(e))
        }
        deleteAnnotation(e) {
          return this._verifyLoaded(), this._core.deleteAnnotation((0, m.Hs)(e))
        }
        createBookmark(e) {
          return this._verifyLoaded(), this._core.createBookmark((0, g.a)(e))
        }
        updateBookmark(e) {
          return this._verifyLoaded(), this._core.updateBookmark((0, g.a)(e))
        }
        deleteBookmark(e) {
          return this._verifyLoaded(), this._core.deleteBookmark(e)
        }
        createFormField(e) {
          this._verifyLoaded(), (0, o.kG)(this._readStateCallbacks)
          const t = this._readStateCallbacks.getFormFieldWidgets(e)
          return this._core.createFormField((0, m.vD)(e), t.map((e) => (0, m.Hs)(e)).toArray())
        }
        updateFormField(e) {
          this._verifyLoaded(), (0, o.kG)(this._readStateCallbacks)
          const t = this._readStateCallbacks.getFormFieldWidgets(e)
          return this._core.updateFormField((0, m.vD)(e), t.map((e) => (0, m.Hs)(e)).toArray())
        }
        deleteFormField(e) {
          return this._verifyLoaded(), this._core.deleteFormField((0, m.vD)(e))
        }
        loadFormFields() {
          return (
            this._formFieldsLoadedPromise || (this._formFieldsLoadedPromise = this._loadFormFields()),
            this._formFieldsLoadedPromise
          )
        }
        async _loadFormFields() {
          this._verifyLoaded()
          const e = await this._core.readFormJSONObjects()
          if (this._isDestroyed()) return
          let t = (0, r.aV)(),
            n = (0, r.aV)().withMutations((n) => {
              e.forEach((e) => {
                const { formField: r, widgets: s, value: i } = e
                try {
                  let e
                  e = r.pdfObjectId ? r.pdfObjectId.toString() : (0, d.xc)()
                  const a = (0, m.IN)(e, r)
                  ;(0, o.kG)(this._readStateCallbacks),
                    this._readStateCallbacks.isFormFieldInState(a.name) || n.push(a.set('value', i)),
                    s.forEach((e) => {
                      let n
                      ;(n = e.pdfObjectId ? e.id || e.pdfObjectId.toString() : (0, d.xc)()),
                        (0, o.kG)(this._readStateCallbacks),
                        (t = t.push((0, m.vH)(n, e)))
                    })
                } catch (e) {
                  ;(0, o.um)(
                    `Skipped creating form field #${r.pdfObjectId} from payload because an error occurred while deserializing.`,
                  ),
                    (0, o.um)(e)
                }
              })
            })
          const s = {}
          ;(t = t.map((e) => {
            if (
              t.find((t) => t.pdfObjectId !== e.pdfObjectId && t.id === e.id && e.pdfObjectId?.toString() !== e.id) ||
              this._readStateCallbacks?.isAnnotationInState(e.id)
            ) {
              const t = (0, d.xc)()
              return (
                s[e.formFieldName] ? s[e.formFieldName].push({ [e.id]: t }) : (s[e.formFieldName] = [{ [e.id]: t }]),
                (n = n.map((n) =>
                  n.name === e.formFieldName
                    ? n.update('annotationIds', (n) => n?.map((n) => (n === e.id ? t : n)))
                    : n,
                )),
                e.set('id', t)
              )
            }
            return e
          })),
            Object.keys(s).forEach((e) => {
              const r = n.find((t) => t.name === e)
              ;(0, o.kG)(r)
              const s = t
                .filter((t) => t.formFieldName === e)
                .toArray()
                .map((e) => (0, m.Hs)(e))
              this._core.updateFormField((0, m.vD)(r), s)
            }),
            n.size > 0 &&
              !this._isDestroyed() &&
              ((0, o.kG)(this._formFieldCallbacks), this._formFieldCallbacks.createFormFields(n, _.y)),
            await this._loadFormFieldValues(),
            t.size > 0 &&
              !this._isDestroyed() &&
              ((0, o.kG)(this._annotationCallbacks), this._annotationCallbacks.createAnnotations(t, (0, r.D5)(), _.y)),
            (this._formFieldsLoadedPromise = Promise.resolve())
        }
        createFormFieldValue(e) {
          return this._verifyLoaded(), this.setFormFieldValue(e)
        }
        setFormFieldValue(e) {
          return this._verifyLoaded(), this._core.setFormFieldValue((0, m.kr)(e))
        }
        deleteFormFieldValue(e) {
          return this._verifyLoaded(), this._core.deleteFormFieldValue(e.replace('form-field-value/', ''))
        }
        loadAnnotationsForPageIndex(e) {
          this._verifyLoaded()
          const t = this._state.alreadyLoadedPages.get(e)
          if (t) return t
          const n = this._loadAnnotationsForPageIndex(e)
          return (this._state = this._state.setIn(['alreadyLoadedPages', e], n)), n
        }
        async _loadAnnotationsForPageIndex(e) {
          const t = await this._core.annotationsForPageIndex(e)
          if (this._isDestroyed()) return
          const n = [],
            s = [],
            i = t
              .map((e) => {
                let { rollover: t, down: r, ...o } = e
                return (
                  t && 'number' == typeof o.pdfObjectId && n.push(o.pdfObjectId),
                  r && 'number' == typeof o.pdfObjectId && s.push(o.pdfObjectId),
                  o
                )
              })
              .filter((e) => 'number' == typeof e.pageIndex)
          this._formFieldCallbacks && (await this.loadFormFields())
          const a = (0, r.aV)().withMutations((e) => {
            i.filter(
              (e) => !e.id || (this._readStateCallbacks && !this._readStateCallbacks.isAnnotationInState(e.id)),
            ).forEach((t) => {
              t.pdfObjectId
              try {
                let n =
                  t.id ||
                  ((function (e) {
                    return 'pspdfkit/link' === e.type && 0 === e.pdfObjectId
                  })(t)
                    ? (0, d.xc)()
                    : t.pdfObjectId.toString())
                e.some((e) => e.id === n) && ((n = (0, d.xc)()), (t.id = n), this._core.updateAnnotation(t))
                const r = (0, m.vH)(n, t)
                e.push(r)
              } catch (e) {
                ;(0, o.um)(
                  `Skipped creating annotation #${t.pdfObjectId} from payload because an error occurred while deserializing.`,
                ),
                  (0, o.um)(e)
              }
            })
          })
          ;(0, f.dC)(() => {
            a.size > 0 &&
              ((0, o.kG)(this._annotationCallbacks), this._annotationCallbacks.createAnnotations(a, (0, r.D5)(), _.y)),
              n.length > 0 &&
                ((0, o.kG)(this._annotationCallbacks), this._annotationCallbacks.addAnnotationVariants('rollover', n)),
              s.length > 0 &&
                ((0, o.kG)(this._annotationCallbacks), this._annotationCallbacks.addAnnotationVariants('down', s))
          }),
            (this._state = this._state.setIn(['alreadyLoadedPages', e], Promise.resolve()))
        }
        async _loadFormFieldValues() {
          this._verifyLoaded()
          const e = await this._core.getFormValues()
          if (this._isDestroyed()) return
          const t = (0, r.aV)().withMutations((t) => {
            e.forEach((e) => {
              try {
                t.push((0, m.u9)(e))
              } catch (t) {
                ;(0, o.um)(
                  `Skipped creating form field value #${e.pdfObjectId} from payload because an error occurred while deserializing.`,
                ),
                  (0, o.um)(t)
              }
            })
          })
          t.size > 0 &&
            !this._isDestroyed() &&
            ((0, o.kG)(this._formFieldValueCallbacks), this._formFieldValueCallbacks.setFormFieldValues(t))
        }
        async loadBookmarks() {
          this._verifyLoaded()
          const e = await this._core.getBookmarks()
          if (this._isDestroyed()) return
          const t = (0, r.aV)().withMutations((t) => {
            e.forEach((e) => {
              let n
              n = e.id ? e.id : e.pdfBookmarkId ? e.pdfBookmarkId : (0, b.A)()
              try {
                t.push((0, g.i)(n, e))
              } catch (e) {
                ;(0, o.um)(
                  `Skipped creating bookmark #${n} from payload because an error occurred while deserializing.`,
                ),
                  (0, o.um)(e)
              }
            })
          })
          t.size > 0 &&
            !this._isDestroyed() &&
            ((0, o.kG)(this._bookmarkCallbacks), this._bookmarkCallbacks.createBookmarks(t, _.y))
        }
        _verifyLoaded() {
          ;(0, o.kG)(this._state.isLoaded, 'StandaloneProvider not properly initialized.')
        }
        _isDestroyed() {
          return this._state.isDestroyed
        }
        async syncChanges() {}
      }
      function k(e) {
        const t = {}
        return (
          Object.keys(e).forEach((n) => {
            Array.isArray(e[n])
              ? (t[n] = e[n].filter(Boolean))
              : 'object' == typeof e[n] && null !== e[n]
              ? (t[n] = k(e[n]))
              : (t[n] = e[n])
          }),
          t
        )
      }
      class S {
        constructor(e, t) {
          ;(this.identifier = e), (this.callback = t)
        }
        request() {
          return this.callback()
        }
      }
      var x = n(1367),
        O = n(97921),
        D = n(49029)
      class I extends r.WV({
        baseUrl: null,
        baseCoreUrl: null,
        licenseKey: null,
        document: null,
        backendPermissions: new O.Z(),
        documentResponse: null,
        disableWebAssemblyStreaming: !1,
        enableAutomaticLinkExtraction: !1,
        overrideMemoryLimit: null,
        features: (0, r.aV)(),
        signatureFeatureAvailability: D.H.NONE,
        documentHandle: null,
        trustedCAsCallback: null,
        signaturesInfoPromise: null,
        customFonts: null,
        forceLegacySignaturesFeature: !1,
        forceAnnotationsRender: !1,
        electronAppName: null,
        lazyLoadedPages: null,
        productId: null,
      }) {}
      var A = n(96233),
        P = n(5164),
        E = n(52701),
        B = n(94290),
        C = n(55),
        T = n(11278),
        R = n(85596),
        j = n(63880),
        L = n(50809),
        J = n(68582),
        N = n(42457),
        q = n(33502),
        U = n(14651),
        M = n(51483)
      let $
      $ = n(72098).Z
      const G = new (class {
        size = 1
        _freeObjects = []
        constructor(e) {
          this._constructor = e
        }
        checkOut() {
          let e
          return (
            (e = this._freeObjects.length > 0 ? this._freeObjects.shift() : new this._constructor()),
            {
              object: e,
              checkIn: () => {
                this._freeObjects.length >= this.size ? e.destroy() : (e.recycle(), this._freeObjects.push(e))
              },
            }
          )
        }
      })($)
      class V extends l.W {
        type = 'STANDALONE'
        _XFDF = null
        constructor(e) {
          super(), z(e)
          const {
            baseUrl: t,
            baseCoreUrl: n,
            instantJSON: r,
            XFDF: o,
            enableAutomaticLinkExtraction: s,
            overrideMemoryLimit: i,
            trustedCAsCallback: a,
            electronAppName: c,
            isSharePoint: d,
            isSalesforce: l,
            productId: u,
          } = e
          'string' == typeof o &&
            (this._XFDF = { source: o, keepCurrentAnnotations: !0 === e.XFDFKeepCurrentAnnotations }),
            r && r.annotations && (r.annotations = r.annotations.map((e) => ((e.id = e.id.toString()), e))),
            (this._instantJSON = r),
            'function' == typeof a && (this._trustedCAsCallback = a)
          const { disableWebAssemblyStreaming: p, customFonts: m } = e,
            { standaloneInstancesPoolSize: f } = e
          void 0 !== f && (G.size = f)
          const g = !!e.electronicSignatures && Boolean(e.electronicSignatures.forceLegacySignaturesFeature)
          let y = u || null
          ;(!d && !l) || y || (y = d ? M.x.SharePoint : M.x.Salesforce),
            (this._state = new I(
              W({
                baseUrl: t,
                baseCoreUrl: n,
                licenseKey: e.licenseKey,
                document: e.document,
                disableWebAssemblyStreaming: p,
                enableAutomaticLinkExtraction: s,
                overrideMemoryLimit: i,
                documentHandle: '0',
                customFonts: m,
                forceLegacySignaturesFeature: g,
                electronAppName: c,
                productId: y,
              }),
            )),
            (this._requestQueue = new x.Z(h.gZ))
          const { object: b, checkIn: _ } = G.checkOut()
          ;(this.client = b), (this.checkIn = _)
          const v = r
            ? {
                annotations: r.annotations || [],
                formFields: r.formFields || [],
                formFieldValues: r.formFieldValues || [],
                skippedPdfObjectIds: r.skippedPdfObjectIds || [],
                skippedPdfFormFieldIds: r.skippedPdfFormFieldIds || [],
                attachments: r.attachments || {},
                bookmarks: r.bookmarks || [],
                skippedPdfBookmarkIds: r.skippedPdfBookmarkIds || [],
                format: r.format,
                ...(r.pdfId ? { pdfId: r.pdfId } : null),
              }
            : null
          this.provider = new F(this.client, v)
        }
        isUsingInstantProvider() {
          return !1
        }
        hasClientsPresence() {
          return !1
        }
        async load() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return (
            (this._isPDFJavaScriptEnabled = e.isPDFJavaScriptEnabled),
            {
              features: this._state.features,
              signatureFeatureAvailability: this._state.signatureFeatureAvailability,
              hasPassword: !!e.password,
              allowedTileScales: 'all',
            }
          )
        }
        destroy() {
          this.provider && this.provider.destroy(), this._requestQueue && this._requestQueue.destroy(), this.checkIn()
        }
        async documentInfo() {
          return this._state.documentResponse
        }
        async lazyLoadPages() {
          if (!this._state.lazyLoadedPages) {
            const e = await this.client.getAllPageInfos(this._state.documentResponse.pageCount)
            this._state = this._state.set('lazyLoadedPages', e)
          }
          return this._state.lazyLoadedPages
        }
        getDocumentHandle() {
          return this._state.documentHandle
        }
        getFormJSON() {
          return this.client.getFormJSON()
        }
        permissions() {
          return Promise.resolve(this._state.backendPermissions)
        }
        textForPageIndex(e) {
          let t = !1
          const n = new S(`${e}-text`, () =>
              t
                ? Promise.reject({ aborted: !0 })
                : this.client
                    .textForPageIndex(e)
                    .then((n) => (t ? Promise.reject({ aborted: !0 }) : (0, u.T)({ textLines: n }, e))),
            ),
            { promise: r, cancel: o } = this._requestQueue.enqueue(n)
          return {
            promise: r,
            cancel: () => {
              ;(t = !0), o()
            },
          }
        }
        getTextFromRects(e, t) {
          return this.client.getTextFromRects(e, t.toJS())
        }
        renderTile(e, t, n, r, s, i) {
          const c = `${e}-${t.width}-${t.height}-${n.top}-${n.left}-${n.width}-${n.height}-${this.getDocumentHandle()}`,
            l = new S(c, () => {
              const c = i ? i.annotations.filter(d.d).map(m.Hs).toJS() : null,
                l = i ? i.formFieldValues.map(m.kr).toJS() : null
              return this.client
                .renderTile(
                  e,
                  t.toObject(),
                  n.toObject(),
                  r,
                  s,
                  c || (this._state.forceAnnotationsRender ? [] : null),
                  l,
                  (0, L.aV)({ width: n.width, height: n.height }),
                )
                .then((r) =>
                  r
                    ? 'string' == typeof r
                      ? (0, a.ar)(r)
                      : (0, a.R9)({ buffer: r, width: n.width, height: n.height })
                    : ((0, o.ZK)(
                        'The image buffer or URL is null, the tile cannot be rendered:',
                        `page: ${e}, page size: ${t.toObject()}, tile rect: ${n.toObject()}`,
                      ),
                      Promise.resolve(null)),
                )
            }),
            u = t.width === n.width && t.height === n.height,
            { promise: h, cancel: p } = this._requestQueue.enqueue(l, u)
          return { promise: h, cancel: p }
        }
        renderAnnotation(e, t, n, r, s, i) {
          const c = e.id,
            d = new S(c, () =>
              this.client
                .renderAnnotation((0, m.Hs)(e), n, r, s, (0, L.aV)({ width: r, height: s }), i)
                .then((t) =>
                  t
                    ? (0, a.R9)({ buffer: t, width: r, height: s })
                    : ((0, o.ZK)('The image buffer is null, the annotation cannot be rendered', e.toJS()),
                      Promise.resolve(null)),
                ),
            )
          return this._requestQueue.enqueue(d, !1)
        }
        async getMeasurementSnappingPoints(e) {
          return this.client, this.client.getMeasurementSnappingPoints(e)
        }
        async renderPageAnnotations(e, t, n) {
          const r = this.provider,
            s = [],
            i = [],
            c = t.some((e) => e instanceof q.x_)
          c && (await r._setReadStateCallbacksPromise)
          const l = t.filter((e) => {
            const t = (c ? r._readStateCallbacks.getAnnotationWithFormField(e.id) : null)?.formField,
              n = (0, d._R)(e, t)
            if (n && t) {
              s.find((e) => e.name === t.name) || (s.push((0, m.kr)((0, P.CH)(t))), i.push(t))
            }
            return n
          })
          function u(e, t) {
            if (e?.formFieldName) {
              const n = i.find((t) => t.name === e.formFieldName),
                r = t.find((t) => t.name === e.formFieldName)
              if (!(0, P.BT)(n, r)) return !1
            }
            return !0
          }
          const h = new Promise((t, s) => {
            this.client
              .renderPageAnnotations(
                e,
                l.map((e) => e.pdfObjectId).toArray(),
                l.map((e) => e.boundingBox.width * n).toArray(),
                l.map((e) => e.boundingBox.height * n).toArray(),
                (0, L.zP)(),
              )
              .then((e) => {
                const s = i.map((e) => r._readStateCallbacks?.getFormFieldByName(e.name)).filter(Boolean),
                  c = e.map((e, t) => {
                    const r = l.get(t)
                    return u(r, s) && r
                      ? e
                        ? (0, a.R9)({ buffer: e, width: r.boundingBox.width * n, height: r.boundingBox.height * n })
                        : ((0, o.ZK)('The image buffer is null, the annotation cannot be rendered', r.toJS()),
                          Promise.resolve(null))
                      : Promise.resolve(null)
                  })
                Promise.all(c).then((e) => {
                  const o = i.map((e) => r._readStateCallbacks?.getFormFieldByName(e.name)).filter(Boolean)
                  e.forEach((e, t) => {
                    const r = l.get(t)
                    if (r) {
                      const { formFieldValue: t } = this.getAnnotationFormFieldAndValue(r),
                        s = this.getAnnotationAvailableVariants(r),
                        i = this.annotationAPStreamPromises.get(r.id),
                        a = u(r, o)
                      if (
                        (i &&
                          ((this.annotationAPStreamPromises = this.annotationAPStreamPromises.delete(r.id)),
                          i(a ? e : null)),
                        s.length > 1)
                      ) {
                        const o = { normal: e }
                        e && a && this.cacheAPStream(o, r)
                        const { promise: i } = this.renderAPStream(
                          r,
                          t,
                          null,
                          r.boundingBox.width * n,
                          r.boundingBox.height * n,
                          s,
                        )
                        Promise.all(i.map((e) => e.promise)).then((e) => {
                          e.some(Boolean) &&
                            s.forEach((t, n) => {
                              'normal' !== t && e[n] && (o[t] = e[n])
                            })
                        })
                      } else e && a && this.cacheAPStream(e, r)
                    }
                  }),
                    t()
                })
              })
              .catch(s)
          })
          return (this.pageAPStreamsPromises = this.pageAPStreamsPromises.set(e, h)), h
        }
        renderDetachedAnnotation(e, t, n, r) {
          if (e.id) throw new o.p2(`Detached annotations should not have an \`id\`: ${e.id}`)
          const s = (0, i.SK)(),
            c = new S(s, () =>
              this.client
                .renderDetachedAnnotation((0, m.Hs)(e), t, n, r, (0, L.aV)({ width: n, height: r }))
                .then((t) =>
                  t
                    ? (0, a.R9)({ buffer: t, width: n, height: r })
                    : ((0, o.ZK)('The image buffer is null, the annotation cannot be rendered', e.toJS()),
                      Promise.resolve(null)),
                ),
            ),
            { promise: d, cancel: l } = this._requestQueue.enqueue(c, !1)
          return { promise: d, cancel: l }
        }
        async getAttachment(e) {
          const [t, n] = await this.client.getAttachment(e)
          return new Blob([t], { type: n })
        }
        async parseXFDF(e) {
          this.client
          const { errors: t, formFieldValues: n, annotations: o } = await this.client.parseXFDF(e)
          return {
            errors: t?.map((e) => ({ errorMessage: e.error_message, type: e.type })),
            formFieldValues: n?.reduce((e, t) => ((e[t.fqdn] = t.values), e), {}),
            annotations: (0, r.aV)(o?.map((e) => (0, m.vH)((0, d.xc)(), e)) || []),
          }
        }
        async search(e, t, n, r) {
          let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : j.S.TEXT
          const i = await this.client.search(e, t, n, r, s)
          return (0, p.E)(i.filter((e) => o || !e.isAnnotation))
        }
        async searchAndRedact(e, t, n) {
          const { totalPages: s } = n,
            i = await this.client.search(e, 0, s, t.caseSensitive, t.searchType)
          return (0, r.aV)(
            i
              .filter((e) => t.searchInAnnotations || !e.isAnnotation)
              .map((e) => {
                const s = e.isAnnotation ? [e.annotationRect] : e.rectsOnPage,
                  i = (0, r.aV)(s).map((e) => ((0, o.kG)(e), (0, R.k)(e)))
                return new C.Z({
                  ...(0, d.lx)(n),
                  ...t.annotationPreset,
                  pageIndex: e.pageIndex,
                  rects: i,
                  boundingBox: E.Z.union(i),
                })
              }),
          )
        }
        async exportPDF() {
          let {
            flatten: e = !1,
            incremental: t,
            saveForPrinting: n = !1,
            format: r = 'pdf',
            excludeAnnotations: o = !1,
            preserveInstantJSONChanges: s = !0,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          if (void 0 === t && this._state.features.includes(U.q.DIGITAL_SIGNATURES)) {
            const e = await this.getSignaturesInfo()
            t = Boolean('not_signed' !== e.status)
          } else t = !1
          return this.client.exportFile(e, t, n, r, o, s).then((e) => {
            let [t, n] = e
            return (t.mimeType = n.mimeType), (t.extension = n.extension), t
          })
        }
        exportXFDF() {
          return this.client.exportXFDF()
        }
        exportInstantJSON(e) {
          return this.client.exportInstantJSON(e)
        }
        getPDFURL() {
          let {
            includeComments: e = !0,
            saveForPrinting: t,
            excludeAnnotations: n,
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          return this.generatePDFObjectURL({ includeComments: e, saveForPrinting: t, excludeAnnotations: n })
        }
        generatePDFObjectURL() {
          let e,
            {
              includeComments: t = !0,
              saveForPrinting: n,
              excludeAnnotations: r = !1,
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            o = !1
          return {
            promise: new Promise((s) => {
              this.exportPDF({ flatten: !0, includeComments: t, saveForPrinting: n, excludeAnnotations: r }).then(
                (t) => {
                  if (o) return
                  const n = new Blob([t], { type: t.mimeType })
                  ;(e = window.URL.createObjectURL(n)), s(e)
                },
              )
            }),
            revoke: () => {
              e && window.URL.revokeObjectURL(e), (o = !0)
            },
          }
        }
        async getDocumentOutline() {
          const e = await this.client.getDocumentOutline()
          return (0, r.aV)(e.map(c.i))
        }
        async onKeystrokeEvent(e) {
          return await this.client.onKeystrokeEvent(e)
        }
        async evalFormValuesActions(e) {
          return this.client.evalFormValuesActions(e.map(m.kr).toJS())
        }
        async evalScript(e, t) {
          return this.client.evalScript(e, t)
        }
        async setFormJSONUpdateBatchMode(e) {
          return this.client.setFormJSONUpdateBatchMode(e)
        }
        async applyOperationsAndReload(e) {
          try {
            let t, n
            ;({ processedOperations: t, operationsDocuments: n } = await K(e)), await this.client.applyOperations(t, n)
          } catch (e) {
            throw new o.p2(`Applying operations failed: ${e}`)
          }
          return (
            (this.provider._state = this.provider._state.set('alreadyLoadedPages', (0, r.D5)())), this.reloadDocument()
          )
        }
        async applyRedactionsAndReload() {
          try {
            await this.client.applyRedactions()
          } catch (e) {
            throw new o.p2(`Applying redactions failed: ${e}`)
          }
          return this.reloadDocument()
        }
        async reloadDocument() {
          try {
            this.provider?.destroy(),
              (this.provider = new F(this.client, null)),
              (this._state = this._state.set('lazyLoadedPages', null))
            const e = await this.client.reloadDocument()
            return (
              (this._state = this._state
                .set('documentResponse', e)
                .set('documentHandle', (parseInt(this._state.documentHandle) + 1).toString())
                .set('signaturesInfoPromise', null)),
              {
                features: this._state.features,
                signatureFeatureAvailability: this._state.signatureFeatureAvailability,
                hasPassword: !1,
                allowedTileScales: 'all',
              }
            )
          } catch (e) {
            throw new o.p2(`Reloading failed: ${e}`)
          }
        }
        async getEmbeddedFiles() {
          this.client
          const e = await this.client.getEmbeddedFilesList()
          return (0, r.aV)(
            e.map((e) => {
              let { id: t, ...n } = e
              return (0, N.i)(t, n, !0)
            }),
          )
        }
        async exportPDFWithOperations(e) {
          try {
            let t, n
            return (
              ({ processedOperations: t, operationsDocuments: n } = await K(e)),
              this.client.exportPDFWithOperations(t, n)
            )
          } catch (e) {
            throw new o.p2(`Exporting PDF with operations failed: ${e}`)
          }
        }
        getSignaturesInfo() {
          try {
            if (this._state.signaturesInfoPromise) return this._state.signaturesInfoPromise
            const e = this.client.getSignaturesInfo().then((e) => (0, m.rS)(e))
            return (this._state = this._state.set('signaturesInfoPromise', e)), e
          } catch (e) {
            throw new o.p2(`Getting document signatures info: ${e}`)
          }
        }
        async refreshSignaturesInfo() {
          this._state = this._state.set('signaturesInfoPromise', null)
        }
        async loadCertificates(e) {
          return this.client.loadCertificates(e)
        }
        async signDocumentAndReload(e, t) {
          ;(0, o.kG)('function' == typeof t, 'Signing document failed: twoStepSignatureCallback must be a function')
          const n = e && e.placeholderSize ? { estimatedSize: e.placeholderSize } : null
          try {
            const {
              hash: r,
              signatureFormFieldName: s,
              file: i,
              fileContents: a,
            } = await this.client.prepareSignInvisible(n, !!e && Boolean(e.flatten))
            ;(0, o.kG)('function' == typeof t, 'twoStepSignatureCallback must be a function')
            const c = await t({ hash: r, fileContents: a })
            let d
            if (!(c instanceof ArrayBuffer))
              throw new o.p2(
                'Resolved value from twoStepSignatureCallback is of type ' +
                  typeof c +
                  ' and it must be an ArrayBuffer instead.',
              )
            ;(d = c), await this.client.sign(i, s, (0, A.sM)(d)), await this.reloadDocument()
          } catch (e) {
            throw (await this.client.restoreToOriginalState(), e)
          }
        }
        cancelRequests() {
          this._requestQueue.cancelAll()
        }
        async syncChanges() {}
        getDefaultGroup() {}
        isCollaborationPermissionsEnabled() {
          return !1
        }
        async clearAPStreamCache() {
          return this.client.clearAPStreamCache()
        }
        async setComparisonDocument(e, t) {
          return this.client, this.client.setComparisonDocument(e, t)
        }
        async openComparisonDocument(e) {
          return (
            this.client,
            (this._state = this._state.set('forceAnnotationsRender', !1)),
            await this.client.closeDocument(),
            (this._state = this._state.set('forceAnnotationsRender', !0)),
            (await this.client.openComparisonDocument(e)) || this._state.documentResponse
          )
        }
        async documentCompareAndOpen(e) {
          return this.client, this.client.documentCompareAndOpen(e)
        }
        async persistOpenDocument(e) {
          return this.client, this.client.persistOpenDocument(e)
        }
        async cleanupDocumentComparison() {
          return this.client, this.client.cleanupDocumentComparison()
        }
        async runPDFFormattingScripts(e, t) {
          let n = []
          if (this._isPDFJavaScriptEnabled) {
            const r = await this.client.enablePDFJavaScriptSupport(),
              { withAPStream: o, withoutAPStream: s } = e.reduce(
                (e, n) => (t?.(n) ? e.withAPStream.push(n.formFieldName) : e.withoutAPStream.push(n.formFieldName), e),
                { withAPStream: [], withoutAPStream: [] },
              )
            let i = []
            if (o.length && !s.length) i = await this.client.runPDFFormattingScripts(o, !0)
            else if (!o.length && s.length) i = await this.client.runPDFFormattingScripts(s, !1)
            else if (o.length && s.length) {
              const [e, t] = await Promise.all([
                this.client.runPDFFormattingScripts(o, !0),
                this.client.runPDFFormattingScripts(s, !1),
              ])
              i = e.concat(t)
            }
            n = (0, P.gE)(r, i)
          }
          return n
        }
        contentEditorEnter() {
          return this.client, this.client.contentEditorEnter()
        }
        contentEditorExit() {
          return this.client, this.client.contentEditorExit()
        }
        contentEditorGetTextBlocks(e) {
          return this.client, this.client.contentEditorGetTextBlocks(e)
        }
        contentEditorDetectParagraphs(e) {
          return this.client, this.client.contentEditorDetectParagraphs(e)
        }
        contentEditorRenderTextBlock(e, t, n) {
          return this.client, this.client.contentEditorRenderTextBlock(e, t, n)
        }
        contentEditorSetTextBlockCursor(e, t, n, r) {
          return this.client, this.client.contentEditorSetTextBlockCursor(e, t, n, r)
        }
        contentEditorMoveTextBlockCursor(e, t, n, r) {
          return this.client, this.client.contentEditorMoveTextBlockCursor(e, t, n, r)
        }
        contentEditorInsertTextBlockString(e, t, n, r) {
          return this.client, this.client.contentEditorInsertTextBlockString(e, t, n, r)
        }
        contentEditorInsertTextBlockContentRef(e, t, n, r) {
          return this.client, this.client.contentEditorInsertTextBlockContentRef(e, t, n, r)
        }
        contentEditorCreateTextBlock(e) {
          return this.client, this.client.contentEditorCreateTextBlock(e)
        }
        contentEditorLayoutTextBlock(e, t, n, r) {
          return this.client, this.client.contentEditorLayoutTextBlock(e, t, n, r)
        }
        contentEditorDeleteTextBlockRange(e, t, n) {
          return this.client, this.client.contentEditorDeleteTextBlockRange(e, t, n)
        }
        contentEditorDeleteTextBlockString(e, t, n) {
          return this.client, this.client.contentEditorDeleteTextBlockString(e, t, n)
        }
        contentEditorSetTextBlockSelection(e, t, n) {
          return this.client, this.client.contentEditorSetTextBlockSelection(e, t, n)
        }
        contentEditorSetTextBlockSelectionRange(e, t, n, r, o) {
          return this.client, this.client.contentEditorSetTextBlockSelectionRange(e, t, n, r, o)
        }
        contentEditorTextBlockUndo(e, t) {
          return this.client, this.client.contentEditorTextBlockUndo(e, t)
        }
        contentEditorTextBlockRedo(e, t) {
          return this.client, this.client.contentEditorTextBlockRedo(e, t)
        }
        contentEditorTextBlockRestore(e, t, n) {
          return this.client, this.client.contentEditorTextBlockRestore(e, t, n)
        }
        contentEditorTextBlockApplyFormat(e, t, n, r) {
          return this.client, this.client.contentEditorTextBlockApplyFormat(e, t, n, r)
        }
        async contentEditorGetAvailableFaces() {
          return this.client, this.client.contentEditorGetAvailableFaces()
        }
        async contentEditorSaveAndReload(e) {
          return (
            (0, o.kG)(this.provider instanceof F, 'Standalone can only use standalone annotation provider'),
            this.client,
            await this.client.contentEditorSave(e),
            (this.provider._state = this.provider._state.set('alreadyLoadedPages', (0, r.D5)())),
            this.reloadDocument()
          )
        }
      }
      function W(e) {
        return {
          baseUrl: e.baseUrl,
          baseCoreUrl: e.baseCoreUrl,
          licenseKey: e.licenseKey,
          document: e.document,
          disableWebAssemblyStreaming: !!e.disableWebAssemblyStreaming,
          enableAutomaticLinkExtraction: !!e.enableAutomaticLinkExtraction,
          overrideMemoryLimit: 'number' == typeof e.overrideMemoryLimit ? e.overrideMemoryLimit : null,
          documentHandle: 'number' == typeof e.documentHandle ? e.documentHandle : '0',
          trustedCAsCallback: 'function' == typeof e.trustedCAsCallback ? e.trustedCAsCallback : null,
          customFonts: Array.isArray(e.customFonts) ? e.customFonts.filter((e) => e instanceof J.Z) : null,
          forceLegacySignaturesFeature: Boolean(e.forceLegacySignaturesFeature),
          electronAppName: 'string' == typeof e.electronAppName ? e.electronAppName : null,
          productId: e.productId,
        }
      }
      function z(e) {
        const {
          licenseKey: t,
          instantJSON: n,
          XFDF: r,
          disableWebAssemblyStreaming: s,
          disableIndexedDBCaching: i,
          enableAutomaticLinkExtraction: a,
          overrideMemoryLimit: c,
          standaloneInstancesPoolSize: d,
          trustedCAsCallback: l,
          baseUrl: u,
          baseCoreUrl: h,
          customFonts: p,
          isSharePoint: m,
          isSalesforce: f,
        } = e
        if (
          ((0, o.kG)(
            'string' == typeof u,
            '`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/',
          ),
          (0, T.Pn)(u),
          (0, o.kG)(!h || 'string' == typeof h, '`baseCoreUrl` must be a valid URL if set, e.g. `https://example.com/'),
          h && (0, T.rH)(h),
          (0, o.kG)(
            null == t || 'string' == typeof t,
            'licenseKey must be a string value if provided. Please obtain yours from https://customers.pspdfkit.com.',
          ),
          'string' == typeof t &&
            (0, o.kG)(
              !t.startsWith('TRIAL-'),
              "You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.",
            ),
          (0, o.kG)(void 0 === r || 'string' == typeof r, 'XFDF must be a string'),
          n)
        ) {
          ;(0, o.kG)('object' == typeof n && null !== n, 'instantJSON must be an Object'),
            (0, o.kG)(void 0 === r, 'Cannot import from both instantJSON and XFDF'),
            (0, o.kG)(
              'https://pspdfkit.com/instant-json/v1' === n.format,
              "instantJSON has an invalid format, please use 'https://pspdfkit.com/instant-json/v1",
            )
          const { pdfId: e } = n
          e &&
            (0, o.kG)(
              'object' == typeof e &&
                null !== e &&
                (('string' == typeof e.permanent && 'string' == typeof e.changing) ||
                  ('string' != typeof e.permanent && 'string' != typeof e.changing)),
              'instantJSON has an invalid pdfId',
            ),
            (0, o.kG)(
              void 0 === n.skippedPdfObjectIds || Array.isArray(n.skippedPdfObjectIds),
              'instantJSON has invalid skippedPdfObjectIds',
            ),
            (0, o.kG)(
              void 0 === n.annotations ||
                (Array.isArray(n.annotations) && n.annotations.every((e) => 'object' == typeof e && null !== e)),
              'instantJSON has invalid annotations',
            ),
            (0, o.kG)(
              void 0 === n.formFieldValues ||
                (Array.isArray(n.formFieldValues) &&
                  n.formFieldValues.every((e) => 'object' == typeof e && null !== e)),
              'instantJSON has invalid form field values',
            ),
            (0, o.kG)(
              void 0 === n.skippedPdfBookmarkIds || Array.isArray(n.skippedPdfBookmarkIds),
              'instantJSON has invalid skippedPdfBookmarkIds',
            ),
            (0, o.kG)(
              void 0 === n.bookmarks ||
                (Array.isArray(n.bookmarks) && n.bookmarks.every((e) => 'object' == typeof e && null !== e)),
              'instantJSON has invalid bookmarks',
            )
        }
        ;(0, o.kG)(void 0 === s || 'boolean' == typeof s, 'disableWebAssemblyStreaming must be a boolean'),
          (0, o.kG)(void 0 === a || 'boolean' == typeof a, 'enableAutomaticLinkExtraction must be a boolean'),
          (0, o.kG)(void 0 === c || 'number' == typeof c, 'overrideMemoryLimit must be a number'),
          (0, o.kG)(
            void 0 === d || ('number' == typeof d && d >= 0),
            'standaloneInstancesPoolSize must be a non-negative number',
          ),
          (0, o.kG)(void 0 === l || 'function' == typeof l, 'trustedCAsCallback must be a function'),
          (0, o.kG)(
            void 0 === p || (Array.isArray(p) && p.every((e) => e instanceof J.Z)),
            'customFonts must be an array of PSPDFKit.Font instances',
          ),
          (0, o.kG)(
            void 0 === p || p.every((e) => e.callback),
            'All PSPDFKit.Font instances specified on customFonts must have its callback property defined',
          ),
          void 0 !== i &&
            (0, o.a1)(
              'disableIndexedDbCaching has been deprecated and it no longer has effect. It will be removed in a later version.\nBrowsers dropped IndexedDB serialization of Wasm modules in favor of regular HTTP caching.',
            ),
          (m || f) &&
            (0, o.a1)(
              'isSharePoint and isSalesforce configuration properties are deprecated and will be removed in the next major release. Please use the new Configuration#productId property instead. For more information, please check the migration guide.',
            ),
          (0, o.kG)(
            !(m && f),
            'You cannot enable both SharePoint and Salesforce integrations at the same time. Please set either isSharePoint or isSalesforce to true, but not both.',
          )
      }
      async function K(e) {
        const t = new WeakMap(),
          n = {}
        return {
          processedOperations: await Promise.all(
            e.map(async (e, r) => {
              if ('importDocument' === e.type) {
                const { document: s } = e
                return (
                  (0, o.kG)(
                    s instanceof File || s instanceof Blob,
                    'Wrong `importDocument` operation `document` value: it must be a File or a Blob',
                  ),
                  (0, B.M)(t, n, s, e, r, 'document')
                )
              }
              if ('applyInstantJson' === e.type) {
                const s = e.instantJson
                ;(0, o.kG)(
                  'object' == typeof s && null !== s,
                  'Wrong `applyInstantJson` operation `instantJson` value: it must be an object',
                )
                const i = JSON.stringify(s),
                  a = new Blob([i], { type: 'application/json' })
                return (0, B.M)(t, n, a, e, r, 'dataFilePath')
              }
              if ('applyXfdf' === e.type) {
                const s = e.xfdf
                ;(0, o.kG)('string' == typeof s, 'Wrong `applyXfdf` operation `xfdf` value: it must be a string')
                const i = new Blob([s], { type: 'application/vnd.adobe.xfdf' })
                return (0, B.M)(t, n, i, e, r, 'dataFilePath')
              }
              return e
            }),
          ),
          operationsDocuments: n,
        }
      }
      var H = n(95453),
        X = n(36091)
      let Z
      class Q extends V {
        constructor(e) {
          const t = e.baseUrl || (0, s.SV)(window.document),
            n = e.baseCoreUrl || t,
            r = { ...e, baseUrl: t, baseCoreUrl: n }
          if ('string' != typeof r.baseUrl)
            throw new o.p2('`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`')
          if ('string' != typeof r.document && !(r.document instanceof ArrayBuffer))
            throw new o.p2(
              'document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`',
            )
          if (Z && Z !== r.licenseKey)
            throw new o.p2(
              'Trying to re-use PSPDFKit for Web with a different licenseKey than the previous one.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.',
            )
          if ('string' == typeof r.licenseKey && r.licenseKey.startsWith('TRIAL-'))
            throw new o.p2(
              "You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nLeave out the license key to activate as a trial.",
            )
          super(r), (this.destroyed = !1)
        }
        async load() {
          let e,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = 0.2
          if (
            (t.progressCallback && t.progressCallback('loading', n),
            (this._isPDFJavaScriptEnabled = t.isPDFJavaScriptEnabled),
            'string' == typeof this._state.document)
          ) {
            if (this._state.productId === M.x.SharePoint) {
              const e = new URL(this._state.document, this._state.baseUrl),
                [t, n] = e.hostname.split('.').reverse()
              if ('sharepoint' !== n || 'com' !== t)
                throw new o.p2(
                  `When using SharePoint, the document URL must be a sharepoint.com URL: it's ${n}.${t} instead.`,
                )
            }
            if (this._state.productId === M.x.Salesforce) {
              const e = new URL(this._state.baseUrl),
                [t, n] = e.hostname.split('.').reverse()
              if (('salesforce' !== n && 'force' !== n && 'visualforce' !== n) || 'com' !== t)
                throw new o.p2(
                  `When using Salesforce, the SDK must be loaded from a Salesforce URL: it's ${n}.${t} instead.`,
                )
            }
            e = fetch(this._state.document, { credentials: 'same-origin' })
              .then((e) => e.arrayBuffer())
              .finally(() => {
                ;(n += 0.3), t.progressCallback && t.progressCallback('loading', n)
              })
          } else e = this._state.document
          const s = await ee(this.client, this._state).finally(() => {
            ;(n += 0.3), t.progressCallback && t.progressCallback('loading', n)
          })
          ;(0, o.kG)(s)
          const { features: i, signatureFeatureAvailability: a } = s
          if (
            this._state.productId === M.x.SharePoint &&
            'string' == typeof this._state.document &&
            Array.isArray(s.afu)
          ) {
            const e = new URL(this._state.document, this._state.baseUrl)
            if (!s.afu.some((t) => e.hostname.match(t)))
              throw new o.p2(`The document origin ${e.hostname} is not authorized.`)
          }
          const c =
            a === D.H.ELECTRONIC_SIGNATURES && (0, X.Vz)(i) && this._state.forceLegacySignaturesFeature
              ? D.H.LEGACY_SIGNATURES
              : a
          ;(this._state = this._state.set('features', (0, r.aV)(i)).set('signatureFeatureAvailability', c)),
            (Z = this._state.licenseKey)
          const d = await e
          let l
          try {
            l = this.destroyed
              ? await new Promise(() => {})
              : await this.client.openDocument(
                  d,
                  t.password,
                  'number' == typeof t.initialPageIndex ? t.initialPageIndex : 0,
                )
          } catch (e) {
            throw (
              ('INVALID_PASSWORD' === e.message &&
                this._state.document instanceof ArrayBuffer &&
                (this._state = this._state.set('document', e.callArgs[0])),
              'IMAGE_DOCUMENTS_NOT_LICENSED' === e.message &&
                (e.message =
                  'The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for PSPDFKit for Web.'),
              e)
            )
          }
          if (
            (this._XFDF && (await this.client.importXFDF(this._XFDF.source, this._XFDF.keepCurrentAnnotations)),
            this._instantJSON && this._instantJSON.pdfId && l.ID.permanent)
          ) {
            const e = this._instantJSON.pdfId,
              t = l.ID
            if (e.permanent !== t.permanent)
              throw new o.p2(
                'Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/',
              )
            if (e.changing !== t.changing)
              throw new o.p2(
                'Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/',
              )
          }
          if (this._trustedCAsCallback)
            try {
              const e = await this._trustedCAsCallback()
              if (!Array.isArray(e)) throw new o.p2('Certificates response must be an array')
              if (e.some((e) => !(e instanceof ArrayBuffer) && 'string' != typeof e))
                throw new o.p2('All certificates must be passed as ArrayBuffer (DER) or string (PEM)')
              await this.client.loadCertificates(e.map(A.uF))
            } catch (e) {
              throw new o.p2(`Could not retrieve certificates for digital signatures validation: ${e.message}.`)
            }
          return (
            (this._state = this._state.set('documentResponse', l)),
            {
              features: this._state.features,
              signatureFeatureAvailability: this._state.signatureFeatureAvailability,
              hasPassword: !!t.password,
              allowedTileScales: 'all',
            }
          )
        }
        destroy() {
          ;(this.destroyed = !0), super.destroy()
        }
      }
      const Y = { current: void 0 }
      function ee(e, t) {
        var n
        Y.current =
          Y.current ||
          (t.customFonts
            ? ((n = t.customFonts),
              Promise.all(
                n.map(
                  (e) =>
                    new Promise((t) => {
                      ;(0, o.kG)(e.name),
                        e
                          ?.callback?.(e.name)
                          .then((n) => {
                            ;(0, o.kG)(e.name),
                              n instanceof Blob
                                ? t({ name: e.name, data: n })
                                : ((0, o.vU)(
                                    `Callback for retrieving font ${
                                      e.name
                                    } didn't returned a Blob. It returned ${typeof n}`,
                                  ),
                                  t())
                          })
                          .catch((n) => {
                            ;(0, o.vU)(`Error returned by callback for retrieving font ${e.name}. ${n}`), t()
                          })
                    }),
                ),
              ).then((e) => e.filter(Boolean)))
            : void 0)
        const r = t.electronAppName || (0, H.$u)() || window.location.origin
        return e
          .loadNativeModule(t.baseCoreUrl, {
            mainThreadOrigin: r,
            disableWebAssemblyStreaming: t.disableWebAssemblyStreaming,
            enableAutomaticLinkExtraction: t.enableAutomaticLinkExtraction,
            overrideMemoryLimit: t.overrideMemoryLimit,
          })
          .then(async () =>
            Y.current
              ? e.load(t.baseCoreUrl, t.licenseKey, {
                  mainThreadOrigin: r,
                  customFonts: await Y.current,
                  productId: t.productId,
                })
              : e.load(t.baseCoreUrl, t.licenseKey, { mainThreadOrigin: r, productId: t.productId }),
          )
      }
    },
    42876: (e, t, n) => {
      e.exports = function () {
        return n(69855)(
          '(()=>{var e={9662:(e,t,n)=>{var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},9670:(e,t,n)=>{var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:(e,t,n)=>{var r=n(5656),o=n(1400),i=n(6244),s=function(e){return function(t,n,s){var a,c=r(t),l=i(c),d=o(s,l);if(e&&n!=n){for(;l>d;)if((a=c[d++])!=a)return!0}else for(;l>d;d++)if((e||d in c)&&c[d]===n)return e||d||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},206:(e,t,n)=>{var r=n(1702);e.exports=r([].slice)},4326:(e,t,n)=>{var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},9920:(e,t,n)=>{var r=n(2597),o=n(3887),i=n(1236),s=n(3070);e.exports=function(e,t,n){for(var a=o(t),c=s.f,l=i.f,d=0;d<a.length;d++){var u=a[d];r(e,u)||n&&r(n,u)||c(e,u,l(t,u))}}},8880:(e,t,n)=>{var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},7045:(e,t,n)=>{var r=n(6339),o=n(3070);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},8052:(e,t,n)=>{var r=n(614),o=n(3070),i=n(6339),s=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,l=void 0!==a.name?a.name:t;if(r(n)&&i(n,l,a),a.global)c?e[t]=n:s(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(e){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:(e,t,n)=>{var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:(e,t,n)=>{var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:e=>{var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:(e,t,n)=>{var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},9363:e=>{e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},6833:(e,t,n)=>{var r=n(8113);e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:(e,t,n)=>{var r=n(4326),o=n(7854);e.exports="process"==r(o.process)},8113:(e,t,n)=>{var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:(e,t,n)=>{var r,o,i=n(7854),s=n(8113),a=i.process,c=i.Deno,l=a&&a.versions||c&&c.version,d=l&&l.v8;d&&(o=(r=d.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\\/(\\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\\/(\\d+)/))&&(o=+r[1]),e.exports=o},748:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(e,t,n)=>{var r=n(7854),o=n(1236).f,i=n(8880),s=n(8052),a=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,d,u,p,f,h=e.target,m=e.global,y=e.stat;if(n=m?r:y?r[h]||a(h,{}):(r[h]||{}).prototype)for(d in t){if(p=t[d],u=e.dontCallGetSet?(f=o(n,d))&&f.value:n[d],!l(m?d:h+(y?".":"#")+d,e.forced)&&void 0!==u){if(typeof p==typeof u)continue;c(p,u)}(e.sham||u&&u.sham)&&i(p,"sham",!0),s(n,d,p,e)}}},7293:e=>{e.exports=function(e){try{return!!e()}catch(e){return!0}}},2104:(e,t,n)=>{var r=n(4374),o=Function.prototype,i=o.apply,s=o.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?s.bind(i):function(){return s.apply(i,arguments)})},9974:(e,t,n)=>{var r=n(1470),o=n(9662),i=n(4374),s=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:i?s(e,t):function(){return e.apply(t,arguments)}}},4374:(e,t,n)=>{var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:(e,t,n)=>{var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:(e,t,n)=>{var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,l=a&&(!r||r&&s(i,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1470:(e,t,n)=>{var r=n(4326),o=n(1702);e.exports=function(e){if("Function"===r(e))return o(e)}},1702:(e,t,n)=>{var r=n(4374),o=Function.prototype,i=o.call,s=r&&o.bind.bind(i,i);e.exports=r?s:function(e){return function(){return i.apply(e,arguments)}}},5005:(e,t,n)=>{var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:(e,t,n)=>{var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:(e,t,n)=>{var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:e=>{e.exports={}},490:(e,t,n)=>{var r=n(5005);e.exports=r("document","documentElement")},4664:(e,t,n)=>{var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(e,t,n)=>{var r=n(1702),o=n(7293),i=n(4326),s=Object,a=r("".split);e.exports=o((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?a(e,""):s(e)}:s},2788:(e,t,n)=>{var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return s(e)}),e.exports=i.inspectSource},9909:(e,t,n)=>{var r,o,i,s=n(4811),a=n(7854),c=n(111),l=n(8880),d=n(2597),u=n(5465),p=n(6200),f=n(3501),h="Object already initialized",m=a.TypeError,y=a.WeakMap;if(s||u.state){var g=u.state||(u.state=new y);g.get=g.get,g.has=g.has,g.set=g.set,r=function(e,t){if(g.has(e))throw m(h);return t.facade=e,g.set(e,t),t},o=function(e){return g.get(e)||{}},i=function(e){return g.has(e)}}else{var b=p("state");f[b]=!0,r=function(e,t){if(d(e,b))throw m(h);return t.facade=e,l(e,b,t),t},o=function(e){return d(e,b)?e[b]:{}},i=function(e){return d(e,b)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!c(t)||(n=o(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}}}},614:(e,t,n)=>{var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},4705:(e,t,n)=>{var r=n(7293),o=n(614),i=/#|\\.prototype\\./,s=function(e,t){var n=c[a(e)];return n==d||n!=l&&(o(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",d=s.POLYFILL="P";e.exports=s},8554:e=>{e.exports=function(e){return null==e}},111:(e,t,n)=>{var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:e=>{e.exports=!1},2190:(e,t,n)=>{var r=n(5005),o=n(614),i=n(7976),s=n(3307),a=Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,a(e))}},6244:(e,t,n)=>{var r=n(7466);e.exports=function(e){return r(e.length)}},6339:(e,t,n)=>{var r=n(7293),o=n(614),i=n(2597),s=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),d=l.enforce,u=l.get,p=Object.defineProperty,f=s&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),h=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\\(([^)]*)\\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||a&&e.name!==t)&&(s?p(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&i(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?s&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=d(e);return i(r,"source")||(r.source=h.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return o(this)&&u(this).source||c(this)}),"toString")},4758:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},3070:(e,t,n)=>{var r=n(9781),o=n(4664),i=n(3353),s=n(9670),a=n(4948),c=TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,u="enumerable",p="configurable",f="writable";t.f=r?i?function(e,t,n){if(s(e),t=a(t),s(n),"function"==typeof e&&"prototype"===t&&"value"in n&&f in n&&!n.writable){var r=d(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:p in n?n.configurable:r.configurable,enumerable:u in n?n.enumerable:r.enumerable,writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(s(e),t=a(t),s(n),o)try{return l(e,t,n)}catch(e){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:(e,t,n)=>{var r=n(9781),o=n(6916),i=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),d=n(4664),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=a(e),t=c(t),d)try{return u(e,t)}catch(e){}if(l(e,t))return s(!o(i.f,e,t),e[t])}},8006:(e,t,n)=>{var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:(e,t)=>{t.f=Object.getOwnPropertySymbols},7976:(e,t,n)=>{var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:(e,t,n)=>{var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,d=[];for(n in r)!o(a,n)&&o(r,n)&&c(d,n);for(;t.length>l;)o(r,n=t[l++])&&(~s(d,n)||c(d,n));return d}},5296:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:(e,t,n)=>{var r=n(6916),o=n(614),i=n(111),s=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&o(n=e.toString)&&!i(a=r(n,e)))return a;if(o(n=e.valueOf)&&!i(a=r(n,e)))return a;if("string"!==t&&o(n=e.toString)&&!i(a=r(n,e)))return a;throw s("Can\'t convert object to primitive value")}},3887:(e,t,n)=>{var r=n(5005),o=n(1702),i=n(8006),s=n(5181),a=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(a(e)),n=s.f;return n?c(t,n(e)):t}},7066:(e,t,n)=>{"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4488:(e,t,n)=>{var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can\'t call method on "+e);return e}},7152:(e,t,n)=>{"use strict";var r,o=n(7854),i=n(2104),s=n(614),a=n(9363),c=n(8113),l=n(206),d=n(8053),u=o.Function,p=/MSIE .\\./.test(c)||a&&((r=o.Bun.version.split(".")).length<3||0==r[0]&&(r[1]<3||3==r[1]&&0==r[2]));e.exports=function(e,t){var n=t?2:1;return p?function(r,o){var a=d(arguments.length,1)>n,c=s(r)?r:u(r),p=a?l(arguments,n):[],f=a?function(){i(c,this,p)}:c;return t?e(f,o):e(f)}:e}},6200:(e,t,n)=>{var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:(e,t,n)=>{var r=n(7854),o=n(3072),i="__core-js_shared__",s=r[i]||o(i,{});e.exports=s},2309:(e,t,n)=>{var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.27.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:(e,t,n)=>{var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},261:(e,t,n)=>{var r,o,i,s,a=n(7854),c=n(2104),l=n(9974),d=n(614),u=n(2597),p=n(7293),f=n(490),h=n(206),m=n(317),y=n(8053),g=n(6833),b=n(5268),v=a.setImmediate,w=a.clearImmediate,x=a.process,_=a.Dispatch,O=a.Function,S=a.MessageChannel,F=a.String,I=0,E={},k="onreadystatechange";try{r=a.location}catch(e){}var j=function(e){if(u(E,e)){var t=E[e];delete E[e],t()}},D=function(e){return function(){j(e)}},B=function(e){j(e.data)},A=function(e){a.postMessage(F(e),r.protocol+"//"+r.host)};v&&w||(v=function(e){y(arguments.length,1);var t=d(e)?e:O(e),n=h(arguments,1);return E[++I]=function(){c(t,void 0,n)},o(I),I},w=function(e){delete E[e]},b?o=function(e){x.nextTick(D(e))}:_&&_.now?o=function(e){_.now(D(e))}:S&&!g?(s=(i=new S).port2,i.port1.onmessage=B,o=l(s.postMessage,s)):a.addEventListener&&d(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!p(A)?(o=A,a.addEventListener("message",B,!1)):o=k in m("script")?function(e){f.appendChild(m("script")).onreadystatechange=function(){f.removeChild(this),j(e)}}:function(e){setTimeout(D(e),0)}),e.exports={set:v,clear:w}},1400:(e,t,n)=>{var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:(e,t,n)=>{var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:(e,t,n)=>{var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:(e,t,n)=>{var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:(e,t,n)=>{var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:(e,t,n)=>{var r=n(6916),o=n(111),i=n(2190),s=n(8173),a=n(2140),c=n(5112),l=TypeError,d=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=s(e,d);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw l("Can\'t convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:(e,t,n)=>{var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(e){return"Object"}}},9711:(e,t,n)=>{var r=n(1702),o=0,i=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++o+i,36)}},3307:(e,t,n)=>{var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:(e,t,n)=>{var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:e=>{var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},4811:(e,t,n)=>{var r=n(7854),o=n(614),i=r.WeakMap;e.exports=o(i)&&/native code/.test(String(i))},5112:(e,t,n)=>{var r=n(7854),o=n(2309),i=n(2597),s=n(9711),a=n(6293),c=n(3307),l=o("wks"),d=r.Symbol,u=d&&d.for,p=c?d:d&&d.withoutSetter||s;e.exports=function(e){if(!i(l,e)||!a&&"string"!=typeof l[e]){var t="Symbol."+e;a&&i(d,e)?l[e]=d[e]:l[e]=c&&u?u(t):p(t)}return l[e]}},2087:(e,t,n)=>{var r=n(7854),o=n(9781),i=n(7045),s=n(7066),a=n(7293),c=r.RegExp,l=c.prototype;o&&a((function(){var e=!0;try{c(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var s in e&&(i.hasIndices="d"),i)o(s,i[s]);return Object.getOwnPropertyDescriptor(l,"flags").get.call(t)!==r||n!==r}))&&i(l,"flags",{configurable:!0,get:s})},1091:(e,t,n)=>{var r=n(2109),o=n(7854),i=n(261).clear;r({global:!0,bind:!0,enumerable:!0,forced:o.clearImmediate!==i},{clearImmediate:i})},4633:(e,t,n)=>{n(1091),n(2986)},2986:(e,t,n)=>{var r=n(2109),o=n(7854),i=n(261).set,s=n(7152),a=o.setImmediate?s(i,!1):i;r({global:!0,bind:!0,enumerable:!0,forced:o.setImmediate!==a},{setImmediate:a})},4301:(e,t,n)=>{n(7147),e.exports=self.fetch.bind(self)},7147:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DOMException:()=>F,Headers:()=>h,Request:()=>x,Response:()=>O,fetch:()=>I});var r="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==r&&r,o="URLSearchParams"in r,i="Symbol"in r&&"iterator"in Symbol,s="FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(e){return!1}}(),a="FormData"in r,c="ArrayBuffer"in r;if(c)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],d=ArrayBuffer.isView||function(e){return e&&l.indexOf(Object.prototype.toString.call(e))>-1};function u(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\\-#$%&\'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError(\'Invalid character in header field name: "\'+e+\'"\');return e.toLowerCase()}function p(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return i&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function m(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function y(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function g(e){var t=new FileReader,n=y(t);return t.readAsArrayBuffer(e),n}function b(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function v(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:s&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:a&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():c&&s&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=b(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(e)||d(e))?this._bodyArrayBuffer=b(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var e=m(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=m(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(g)}),this.text=function(){var e,t,n,r=m(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=y(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(_)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=u(e),t=p(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},h.prototype.delete=function(e){delete this.map[u(e)]},h.prototype.get=function(e){return e=u(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(u(e))},h.prototype.set=function(e,t){this.map[u(e)]=p(t)},h.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),f(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),f(e)},i&&(h.prototype[Symbol.iterator]=h.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function x(e,t){if(!(this instanceof x))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');var n,r,o=(t=t||{}).body;if(e instanceof x){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),w.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==t.cache&&"no-cache"!==t.cache)){var i=/([?&])_=[^&]*/;if(i.test(this.url))this.url=this.url.replace(i,"$1_="+(new Date).getTime());else{this.url+=(/\\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function _(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\\+/g," "),o=n.join("=").replace(/\\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function O(e,t){if(!(this instanceof O))throw new TypeError(\'Please use the "new" operator, this DOM object constructor cannot be called as a function.\');t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}x.prototype.clone=function(){return new x(this,{body:this._bodyInit})},v.call(x.prototype),v.call(O.prototype),O.prototype.clone=function(){return new O(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},O.error=function(){var e=new O(null,{status:0,statusText:""});return e.type="error",e};var S=[301,302,303,307,308];O.redirect=function(e,t){if(-1===S.indexOf(t))throw new RangeError("Invalid status code");return new O(null,{status:t,headers:{location:e}})};var F=r.DOMException;try{new F}catch(e){(F=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),F.prototype.constructor=F}function I(e,t){return new Promise((function(n,o){var i=new x(e,t);if(i.signal&&i.signal.aborted)return o(new F("Aborted","AbortError"));var a=new XMLHttpRequest;function l(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new h,e.replace(/\\r?\\n[\\t ]+/g," ").split("\\r").map((function(e){return 0===e.indexOf("\\n")?e.substr(1,e.length):e})).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;setTimeout((function(){n(new O(o,r))}),0)},a.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){o(new F("Aborted","AbortError"))}),0)},a.open(i.method,function(e){try{return""===e&&r.location.href?r.location.href:e}catch(t){return e}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":c&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!t||"object"!=typeof t.headers||t.headers instanceof h?i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})):Object.getOwnPropertyNames(t.headers).forEach((function(e){a.setRequestHeader(e,p(t.headers[e]))})),i.signal&&(i.signal.addEventListener("abort",l),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",l)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}I.polyfill=!0,r.fetch||(r.fetch=I,r.Headers=h,r.Request=x,r.Response=O)},1117:e=>{e.exports="281d5049847fc4c1"},5349:e=>{e.exports="02b817d1148461ea"},2380:e=>{function t(e){var t=new Error("Cannot find module \'"+e+"\'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=2380,e.exports=t}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";n(2087),n(4633),n(4301);"object"==typeof window&&(window._babelPolyfill=!1);const e=function e(t){let n;return n=t instanceof Error?t:new Error(t),Object.setPrototypeOf(n,e.prototype),n};e.prototype=Object.create(Error.prototype,{name:{value:"PSPDFKitError",enumerable:!1}});const t=e;function r(e,n){if(!e)throw new t(`Assertion failed: ${n||"Condition not met"}\\n\\nFor further assistance, please go to: https://pspdfkit.com/support/request`)}function o(e){console.log(e)}function i(e){console.warn(e)}function s(e){console.error(e)}["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",\'[tabindex]:not([tabindex^="-"])\'].join(",");new WeakMap;var a=n(1117),c=n.n(a),l=n(5349);const d="pspdfkit-lib/",u=`${d}pspdfkit${"-"+n.n(l)()}.wasm.js`,p=`${d}pspdfkit${"-"+c()}.wasm`;function f(e,t){const n={wasmBinaryFile:e+p,locateFile:e=>e,wasmBinary:undefined};{const e=fetch(n.wasmBinaryFile,{credentials:"same-origin"});e.then((e=>{const t=e.headers.get("content-length");return t&&parseInt(t)>=12143123&&i("The WASM binary file is being served without compression. Due to its size, it\'s recommended to configure the server so application/wasm files are served with compression.\\n\\nFind more details in our Standalone performance guides: https://pspdfkit.com/guides/web/best-practices/performance/#standalone-performance"),e})).catch((e=>{throw new Error(`Failed to load WASM binary file: ${e}`)})),n.instantiateWasm=(r,i)=>((async()=>{o(`Start ${n.wasmBinaryFile} download.`);const a=Date.now();let c,l;const d=!t&&"function"==typeof WebAssembly.instantiateStreaming;function u(){return e.then((e=>{if(!e.ok)throw new Error(`Error loading ${n.wasmBinaryFile}: ${e.statusText}`);return e.arrayBuffer()})).then((e=>(l=Date.now(),o(`Download complete, took: ${l-a}ms`),WebAssembly.instantiate(new Uint8Array(e),r))))}c=d?WebAssembly.instantiateStreaming(e,r).then((e=>(l=Date.now(),o(`Download and Instantiation complete, took: ${Date.now()-a}ms`),e))).catch((e=>{if(/mime.*type/i.test(e.message))return s(e.message),null;throw e})):u();let p=await c;null===p&&(s("Streaming instantiation failed! Falling back to classic instantiation. This might result in slower initialization time therefore we highly recommend to follow the troubleshooting instructions in our guides to fix this error: https://pspdfkit.com/guides/web/current/troubleshooting/common-issues/#response-has-unsupported-mime-type-error."),p=await u()),!d&&l&&o(`Compilation and Instantiation complete, took: ${Date.now()-l}ms`),i(p.instance,p.module)})(),{})}return n}function h(e){e.PSPDFLoggingServices={error(e,t){s(`[${e}] ${t}`)},warn(e,t){i(`[${e}] ${t}`)},info(e,t){0},debug(e,t){0},trace(e,t){0}}}function m(e){return"object"==typeof process&&"object"==typeof process.versions&&void 0!==process.versions.node?Promise.resolve(n(2380)(e)):"object"==typeof window?new Promise(((t,n)=>{const o=document.createElement("script");o.type="text/javascript",o.async=!0,o.onload=()=>t(window.PSPDFModuleInit),o.onerror=n,o.src=e;const{documentElement:i}=document;r(i),i.appendChild(o)})):(self.importScripts(e),Promise.resolve(self.PSPDFModuleInit))}function y(e){const t=new FileReader;return new Promise(((n,r)=>{t.onerror=e=>{r(new Error(e))},t.onload=e=>{n(new Uint8Array(e.target?.result))},t.readAsArrayBuffer(e)}))}const g="text",b="documentA",v="documentB",w="result",x="/create.pdf",_="/save.pdf",O="/embedded.pdf",S="WebAssembly module not loaded.";let F=null,I=!1,E=!1,k=null,j=[],D=null,B=null;function A(e){return null!=e&&null!=e.length&&0===e.length}const P=["configurePDFJavaScriptSupport","closeDocument","setFormValues","openDocument","saveDocument","importXFDF","importInstantDocumentJSON"];function T(e){r(F,"WebAssembly module not loaded.");for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];const i=n.map((e=>A(e)?JSON.stringify(e):e));P.includes(e)&&H();const s=F[e](...i)||\'{ "success": true }\',a=JSON.parse(s);if(!a.success)throw new Error(a.error);return a}function C(e){r(F,"WebAssembly module not loaded.");for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];P.includes(e)&&H();const i=n.map((e=>A(e)?JSON.stringify(e):e)),s=F[e](...i);return s}const R=["run_pdf_formatting_scripts","run_pdf_javascript","set_form_values_get_script_changes","edit_document","prepare_sign_invisible","sign","on_keystroke_event","save_document"];function N(e){const t=new ArrayBuffer(2*e.length),n=new Uint16Array(t);for(let t=0,r=e.length;t<r;t++)n[t]=e.charCodeAt(t);return t}function J(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;r(F,"WebAssembly module not loaded.");const o=JSON.stringify({type:e,...t});let i;if(R.includes(e)&&H(),n){const e=new F.VectorUint8;try{const t=new Uint8Array(N(n));for(let n=0;n<t.byteLength;n++)e.push_back(t[n]);i=F.dispatchCommandWithBinary(o,e)}catch(e){throw e}}else i=F.dispatchCommand(o);if(i.hasError()){const t=new Error(i.getErrorMessage()||"There was an error while executing the command: "+e);throw i.delete(),t}const s=[];for(let e=0;e<i.getRepliesCount();e++)i.hasJSONReply(e)&&s.push(JSON.parse(i.getJSONReply(e))),i.hasBinaryReply(e)&&s.push(i.getBinaryReply(e).slice(0));return i.delete(),s}function $(e){return JSON.parse(function(e){let t="";const n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return t}(e.buffer))}function M(e,t){return`${e}/${t}.pdf`}async function U(e,t){const n=Math.random().toString(36).slice(-5),o=await Promise.all(Object.entries(t).map((async t=>{let[r,o]=t;return e.forEach((e=>{"document"in e&&e.document===r&&"importDocument"===e.type?(!1===e.treatImportedDocumentAsOnePage&&(e.treatImportedDocumentAsOnePage=void 0),e.document=M(n,r)):("dataFilePath"in e&&e.dataFilePath===r&&"applyInstantJson"===e.type||"dataFilePath"in e&&e.dataFilePath===r&&"applyXfdf"===e.type)&&(e.dataFilePath=M(n,r))})),{basename:r,buffer:await y(o)}})));return o.forEach((e=>{!function(e,t,n){r(F,S),F.FS.analyzePath(e).exists||F.FS.mkdir(e),F.FS.writeFile(M(e,t),n)}(n,e.basename,e.buffer)})),function(){o.forEach((e=>{!function(e,t){r(F,S),F.FS.unlink(M(e,t))}(n,e.basename)}))}}function L(){E=!0;const e=T("configurePDFJavaScriptSupport",!0);return r(e.success,"An error occurred while executing the document level JavaScript."),e.changes||[]}function q(e,t){let n;try{n=J("edit_document",{save_path:t,operations:e})}catch(e){throw new Error(`Error applying operations to document: ${e.message}`)}return n}let V,W=null,z=!1;function H(){z||(W=null,V=!1)}function X(e){z&&!e&&(z=!1,W&&K(W)),z=e}function G(){return null===W&&(W=J("read_form_json_objects"),V=!1),W}function K(e){if(z){if(null===e)throw z=!1,new Error("Error enqueuing form JSON objects: form fields JSON is null.");return W&&!V&&(V=!0),void(W=e)}if(V||!z)try{H(),J("apply_form_json_objects",{form_fields_with_widgets:e})}catch(e){throw new Error("Error applying form JSON objects to /create.pdf: "+e.message)}}function Y(e,t,n,o,s,a){let c,l;r("number"==typeof e.pageIndex,"Annotation must have a pageIndex");try{if(r("number"==typeof e.pdfObjectId,"Cannot call renderAnnotation() for an annotation without pdfObjectId."),l=C("renderAnnotation",s,e.pdfObjectId,e.pageIndex,0,n,o,a||"normal"),l.hasError()||1!==l.getRepliesCount()){const e=l.getErrorMessage(),t=l.getErrorReason();throw new Error(t+": "+e)}c=l.getBinaryReply(0).slice(0)}catch(e){i(e.message)}finally{l&&l.delete()}return c}const Q={SharePoint:"SPO",Salesforce:"SF"};function Z(e,t){let{width:n,height:r}=t;return"webp"===e&&(n>16383||r>16383)?"png":e}function ee(e,t){return e.pdfObjectId===t.pdfObjectId}const te=new class{_pdfObjectIdsForIds={};loadNativeModule(e,t){let{disableWebAssemblyStreaming:n,enableAutomaticLinkExtraction:r,overrideMemoryLimit:i}=t;return B=Date.now(),I=r,k=i,function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:self;return new Promise((async r=>{const i=f(e,t),s=await m(`${e}${u}`);o("Using WASM method"),h(n),r({nativeModule:await s(i)})}))}(e,n).then((e=>{let{nativeModule:t}=e;F=t;const n=T("PSPDFKitVersion").version;if(1!==n)throw new Error(`Native version mismatch. Please update the dependencies. Expected 1 but got ${n}.`)}))}async load(e,t,n){let i,{mainThreadOrigin:s,customFonts:a,productId:c}=n;r(F,S);try{const e=a?"/fonts":"";a&&!F.FS.analyzePath(e).exists&&function(e,t){r(F,S),F.FS.mkdir(t),F.FS.mount(F.FS.filesystems.WORKERFS,{blobs:e},t)}(a,e),i=F.initPSPDFKit(null==t?"":t,s,e,"",c?Q[c]:"")}catch(e){throw e}const l=JSON.parse(i);if(B&&o(`Native initialization complete, took: ${Date.now()-B}ms`),!l.success)throw new Error("Failed to initialize PSPDFKit: "+l.error);return l}async openDocument(e,t,n){try{return r(F,S),null!==k&&T("overrideMemoryLimit",k),D=t,F.FS.writeFile(x,new Uint8Array(e)),this.openAndReturnDocumentInfo(n)}finally{this._pdfObjectIdsForIds={}}}async reloadDocument(){try{return X(!1),T("closeDocument"),this.openAndReturnDocumentInfo()}finally{this._pdfObjectIdsForIds={}}}async openAndReturnDocumentInfo(e){T("openDocument",x,JSON.stringify({password:D})),E&&L(),T("automaticLinkExtraction",I);const t=T("getDocumentInfo").documentInfo;if(t.pageCount<=0)return t;let n=[];if("number"==typeof e){const r=await this.getPageInfo(e);for(let o=0;o<t.pageCount;o++){const t={...r,pageIndex:o,pageLabel:e===o?r.pageLabel:String(o+1)};n.push(t)}}else n=await this.getAllPageInfos(t.pageCount);return t.pages=n,t}async getPageInfo(e){try{const t=J("page_info",{query:"page_info",page:e});r(1===t.length,"expected page_info result to return 1 result when specifying index.");const n=(new TextDecoder).decode(t[0]);return JSON.parse(n).pageInfo}catch(t){return s(`Dimensional information for page ${e} unavailable, page will not be displayed.`),{height:0,matrix:[0,0,0,0,0,0],pageLabel:"",reverseMatrix:[0,0,0,0,0,0],transformedBBox:[0,0,0,0],untransformedBBox:[0,0,0,0],width:0,pageIndex:e,rawPdfBoxes:{bleedBox:null,cropBox:null,mediaBox:null,trimBox:null}}}}async getAllPageInfos(e){const t=[];try{const n=J("page_info",{query:"page_info",page:"all"});r(n.length===e,"expected the same length of page info response to page count.");for(let e=0;e<n.length;e++){const r=(new TextDecoder).decode(n[e]),o=JSON.parse(r);t.push(o.pageInfo)}}catch(n){s("There was an error retrieving page information for all pages from core. Reverting to individual queries.");for(let n=0;n<e;n++)try{const e=J("page_info",{query:"page_info",page:n});r(1===e.length,"expected page_info result to return 1 result when specifying index.");const o=(new TextDecoder).decode(e[0]),i=JSON.parse(o);t.push(i.pageInfo)}catch(e){s(`Dimensional information for page ${n} unavailable, page will not be displayed.`);const r={height:0,matrix:[0,0,0,0,0,0],pageLabel:"",reverseMatrix:[0,0,0,0,0,0],transformedBBox:[0,0,0,0],untransformedBBox:[0,0,0,0],width:0,pageIndex:n,rawPdfBoxes:{bleedBox:null,cropBox:null,mediaBox:null,trimBox:null}};t.push(r)}}return t}async enablePDFJavaScriptSupport(){return L()}async runPDFFormattingScripts(e,t){let n;r(E,"PDF Formatting Scripts can only run after JavaScript is enabled.");try{n=J("run_pdf_formatting_scripts",{form_fields:e,only_if_no_ap_stream:t})}catch(e){throw new Error("An error occurred while executing the document level JavaScript formatting.\\n\\n"+e.message)}return n[0].changes||[]}async openDocumentAt(){throw new Error("Should never be called")}async getBookmarks(){const e=J("get_bookmarks");return r(1===e.length,"expected only one response for getBookmarks"),e[0].bookmarks||[]}async getFormJSON(){return T("getFormJSON").formJSON}async getFormValues(){return T("getFormValues").formValues}async setFormValues(e){const t=G();let n=!1;const r=t.map((t=>{const r=e.find((e=>e.name===t.formField.name));return r?r.value===t.value||Array.isArray(r.value)&&Array.isArray(t.value)&&r.value.every(((e,n)=>e===t.value[n]))?t:(n=!0,{...t,value:r.value}):t}));n&&K(r)}async setFormFieldValue(e){await this.setFormValues([e])}async applyOperations(e,t){const n=await U(e,t);q(e,x),n()}async exportPDFWithOperations(e,t){const n=await U(e,t);let o;r(F,S);try{q(e,_),o=F.FS.readFile(_).buffer}catch(e){throw new Error("Error applying operations: "+e.message)}return n(),o}async getSignaturesInfo(){try{return J("get_signatures",{certificate_check_time:"current_time"})[0]}catch(e){throw new Error(`Error getting signatures info: ${e.message}`)}}async prepareSignInvisible(e,t){let n;try{n=J("get_signatures",{certificate_check_time:"current_time"})[0];const e="not_signed"!==n.status;T("saveDocument",_,!1,e,false,false,"pdf",!1),T("openDocument",_,JSON.stringify({password:D}))}catch(e){throw new Error(`Error saving document backup for invisible signing: ${e}`)}try{const e=!t&&"not_signed"!==n.status;T("saveDocument",x,t,e,false,false,"pdf",!1),t&&(T("openDocument",x,JSON.stringify({password:D})),E&&L())}catch(e){throw new Error(`Error saving document for invisible signing: ${e}`)}let o;try{o=J("prepare_sign_invisible",{signer_data_source:{...e,type:"pspdfkit/signer-data-source"},signature_metadata:{type:"pspdfkit/signature-metadata"}})}catch(e){throw new Error(`Error preparing document for invisible signing: ${e}`)}r(F,S);const i=F.FS.readFile(o[0].result.file_contents).buffer;return F.FS.unlink(o[0].result.file_contents),{file:o[0].result.file,hash:o[0].result.hash,signatureFormFieldName:o[0].result.signature_form_fqn,dataToBeSigned:o[0].result.data_to_be_signed,fileContents:i}}async sign(e,t,n){let r;try{r=J("sign",{password:D,save_path:x,file_path:e,signature_form_fqn:t,pkcs7_container:n}),T("openDocument",x,JSON.stringify({password:D})),E&&L()}catch(e){throw new Error(`Error signing document: ${e}`)}return r[0].result}async restoreToOriginalState(){try{T("openDocument",_,JSON.stringify({password:D})),E&&L();const e="not_signed"!==J("get_signatures",{certificate_check_time:"current_time"})[0].status;T("saveDocument",x,!1,e,!1,!1,"pdf",!1),T("openDocument",x,JSON.stringify({password:D})),E&&L()}catch(e){throw new Error(`Could not restore backup document: ${e}`)}}async evalFormValuesActions(e){const t=J("set_form_values_get_script_changes",{form_values:e});return r(1===t.length,"expected only one response for evalFormValuesActions"),t[0].changes}async readFormJSONObjects(){return G()}async setFormJSONUpdateBatchMode(e){await X(e)}async evalScript(e,t){const n=J("run_pdf_javascript",{pdf_javascript_contents:e,pdf_javascript_form_fqn:t});return r(1===n.length,"expected only one response for evalScript"),n[0].changes}async closeDocument(){try{return j=[],D=null,E=!1,W=null,z=!1,V=!1,T("closeDocument")}finally{this._pdfObjectIdsForIds={}}}async renderTile(e,t,n,o,i,s,a,c){r(F,S);const l=J("render_tile",{render_annotations:Boolean(s||a),print_rendering:o,page:e,bitmap_width:n.width,bitmap_height:n.height,bitmap_x:n.left,bitmap_y:n.top,page_width:t.width,page_height:t.height,format:Z(c,{width:n.width,height:n.height}),render_text:i});if("bitmap"===c)return l[0];const d=new Blob([l[0]],{type:`image/${c}`});return URL.createObjectURL(d)}async renderAnnotation(e,t,n,r,o,i){return Y({...e,pdfObjectId:this._getPdfObjectIdForObject(e)},t&&await y(t),n,r,o,i)}async renderPageAnnotations(e,t,n,r,o){return t.map(((t,i)=>Y({pdfObjectId:t,pageIndex:e},0,n[i],r[i],Z(o,{width:n[i],height:r[i]}))))}async renderDetachedAnnotation(e,t,n,o,i){r(F,S);const s=t?await y(t):null,a=t?t.type:null;let c,l;const d=new F.VectorUint8;try{if(null!=s)for(let e=0;e<s.byteLength;e++)d.push_back(s[e]);if(l=C("renderDetachedAnnotation",i,JSON.stringify({...e,pdfObjectId:this._getPdfObjectIdForObject(e),pageIndex:0}),0,n,o,d,a||""),l.hasError()||1!==l.getRepliesCount()){const e=l.getErrorMessage(),t=l.getErrorReason();throw new Error(t+": "+e)}c=l.getBinaryReply(0).slice(0)}finally{d&&d.delete(),l&&l.delete()}return c}async loadCertificates(e){if(J("load_certificates",{certificates:e}).length>0)throw new t("Internal error while loading certificates")}async getAttachment(e){let t,n,r;const o=(await this.getEmbeddedFilesList())?.map((e=>e.id)),i=o?.includes(e);try{if(i)J("extract_embedded_file",{id:e,file_path:O}),t=F.FS.readFile(O).buffer;else{if(n=C("getAnnotationAttachment",e),n.hasError()||1!==n.getRepliesCount()){const e=n.getErrorMessage(),t=n.getErrorReason();throw new Error("Error fetching attachment: "+t+", "+e)}r=JSON.parse(n.getJSONReply(0)).encoding,t=n.getBinaryReply(0).slice(0)}}finally{F.FS.analyzePath(O)?.exists&&F.FS.unlink(O),n&&n.delete()}return[t,r]}async textForPageIndex(e){return T("textForPageIndex",e).textBlocks}async annotationsForPageIndex(e){const t=T("annotationsForPageIndex",e);return["rollover","down"].forEach((e=>{t.apstream_variants?.[e]?.forEach((n=>{const r=t.annotations.find((e=>e.pdfObjectId===n));r?r[e]=!0:t.annotations.push({pdfObjectId:n,[e]:!0})}))})),t.annotations}async createAnnotation(e,t){r(F,S),r("number"==typeof e.pageIndex,"Annotation must have a pageIndex");const n=e.pdfObjectId,o=t?await y(t):null;let i;const s=new F.VectorUint8;try{if(null!=o)for(let e=0;e<o.byteLength;e++)s.push_back(o[e]);"pspdfkit/widget"===e.type&&(X(!1),H()),i=T("createAnnotation",JSON.stringify({...e,pdfObjectId:null}),s)}finally{s&&s.delete()}return"number"==typeof n&&"number"==typeof this._pdfObjectIdsForIds[n.toString()]&&delete this._pdfObjectIdsForIds[n.toString()],this._pdfObjectIdsForIds[e.id||i.pdfObjectId.toString()]=i.pdfObjectId,i.pdfObjectId}async updateAnnotation(e){const t={...e,pdfObjectId:this._getPdfObjectIdForObject(e)};if(r(t.id,"Annotation must have an ID"),r("number"==typeof t.pageIndex,"Annotation must have a pageIndex"),"pspdfkit/widget"===t.type){const e=G(),n="number"==typeof t.pdfObjectId?t.pdfObjectId.toString():t.id;K(e.map((e=>e.formField.annotationIds.includes(n)||e.formField.annotationIds.includes(String(t.pdfObjectId))?{...e,widgets:e.widgets.map((e=>e.id===n||String(e.pdfObjectId)===n?t:e))}:e)))}else T("updateAnnotation",JSON.stringify(t),0,0)}async deleteAnnotation(e){if(e.APStreamCache&&await this.updateAnnotation(e),"pspdfkit/widget"===e.type)try{const t=e.id;K(G().map((n=>{if(n.formField.annotationIds.includes(t)||n.formField.annotationIds.includes(String(e.pdfObjectId))){let e;if(("pspdfkit/form-field/checkbox"===n.formField.type||"pspdfkit/form-field/radio"===n.formField.type)&&n.formField.options.length===n.formField.annotationIds.length){const r=n.formField.annotationIds.indexOf(t);e=n.formField.options.filter(((e,t)=>t!==r))}const r=n.widgets.filter((e=>t!==(e.id||String(e.pdfObjectId)))),o=n.formField.annotationIds.filter((e=>e!==t));return r.length>0&&o.length>0?{...n,formField:{...n.formField,annotationIds:o,...e?{options:e}:null},widgets:r}:null}return n})).filter(Boolean))}catch(e){throw e}else try{J("remove_annotations",{annotation_ids:[this._getPdfObjectIdForObject(e)]})}catch(t){i(`Removing annotation failed for annotation: ${JSON.stringify(e)}`)}delete this._pdfObjectIdsForIds[e.id||e.pdfObjectId?.toString()]}async createFormField(e,t){const n=G().concat([{type:"pspdfkit/form-field-with-widgets",formField:e,widgets:t}]),r=z;z&&X(!1),K(n);const o=G();r&&X(!0);const i=o.find((t=>t.formField.name===e.name));if(!i)throw new Error(`Error creating new form field in /create.pdf: created form field not found. ${JSON.stringify({type:"pspdfkit/form-field-with-widgets",formField:e,widgets:t})}`);i.widgets.forEach((e=>{this._pdfObjectIdsForIds[e.id]=e.pdfObjectId})),"number"==typeof e.pdfObjectId&&"number"==typeof this._pdfObjectIdsForIds[e.pdfObjectId.toString()]&&delete this._pdfObjectIdsForIds[e.pdfObjectId.toString()],this._pdfObjectIdsForIds[e.id||i.formField.pdfObjectId.toString()]=i.formField.pdfObjectId}async updateFormField(e,t){let n={...e,pdfObjectId:this._pdfObjectIdsForIds[e.id]||this._getPdfObjectIdForObject(e)};const r=G(),o=r.find((e=>ee(e.formField,n)));if(!o)throw new Error(`Error updating form field with name "${e.name}" in /create.pdf: form field not found. ${JSON.stringify(r)}`);const i=o.formField.name!==e.name;let s=null;if(i&&"pspdfkit/form-field/radio"===n.type){const o=e.name,i=r.find((e=>e.formField.name===o));i&&"pspdfkit/form-field/radio"===i.formField.type&&(n={...n,annotationIds:[...n.annotationIds,...i.formField.annotationIds],options:[...n.options,...i.formField.options]},t=[...t,...i.widgets],s=i)}K(r.map((r=>{if(s&&s.formField.pdfObjectId===r.formField.pdfObjectId)return null;if(ee(r.formField,n)){const o={type:"pspdfkit/form-field-with-widgets",formField:{...r.formField,...n},widgets:t.reduce(((e,t)=>[...e,{...r.widgets.find((e=>e.id===t.id||e.pdfObjectId===t.pdfObjectId)),...t}]),[]),...void 0!==r.value?{value:r.value}:null};return e.flags||delete o.formField.flags,o}return r})).filter(Boolean));const a=G().find((t=>t.formField.name===e.name));if(!a)throw new Error(`Error updating form field "${e.name}" in /create.pdf: updated form field not found. ${JSON.stringify({type:"pspdfkit/form-field-with-widgets",formField:e,widgets:t})}`);a.formField.pdfObjectId!==n.pdfObjectId&&(this._pdfObjectIdsForIds[n.id]=a.formField.pdfObjectId),o?.widgets.forEach((e=>{t.some((t=>t.id===e.id))||delete this._pdfObjectIdsForIds[e.id]}))}async deleteFormField(e){const t=G(),n=t.find((t=>t.formField.name===e.name));if(!n)return;K(t.filter((t=>t.formField.name!==e.name)));const r=G().find((t=>t.formField.name===e.name));if(r)throw new Error(`Error deleting form field with name "${e.name}" in /create.pdf: form field still present. ${JSON.stringify(r)}`);n.widgets.forEach((e=>{delete this._pdfObjectIdsForIds[e.id]}))}async deleteFormFieldValue(e){K(G().map((t=>t.formField.name===e?{formField:t.formField,widgets:t.widgets,type:t.type}:t)))}async createBookmark(e){try{J("append_bookmarks",{bookmarks:[e]})}catch(e){throw new Error(`Error creating new bookmark in /create.pdf: ${e.message}`)}}async updateBookmark(e){try{J("remove_bookmarks",{bookmarkIds:[e.id??e.pdfBookmarkId]}),J("append_bookmarks",{bookmarks:[e]})}catch(e){throw new Error(`Error updating bookmark in /create.pdf: ${e.message}`)}}async deleteBookmark(e){try{J("remove_bookmarks",{bookmarkIds:[e]})}catch(e){throw new Error(`Error deleting bookmark in /create.pdf: ${e.message}`)}}async getTextFromRects(e,t){return T("getTextFromRects",e,JSON.stringify(t.map((e=>[e.left,e.top,e.width,e.height])))).text}async search(e,t,n,r){return J("search",{query:e,start_index:t,limit:n,case_sensitive:r,search_type:arguments.length>4&&void 0!==arguments[4]?arguments[4]:g})}async parseXFDF(e){try{return $(J("convert_xfdf_to_instant_json",void 0,e)[0])}catch(e){throw e}}async getEmbeddedFilesList(){return J("list_embedded_files")[0].embeddedFiles||null}async getMeasurementSnappingPoints(e){const t=J("get_snapping_points",{page:e});return t[0].snappingPoints?function(e){const t=[...e.endpoints,...e.intersections,...e.midpoints],n=[];for(let e=0;e<t.length;e+=2){const r=[t[e],t[e+1]];n.push(r)}return n.sort(((e,t)=>e[0]==t[0]?e[1]-t[1]:e[0]-t[0]))}(t[0].snappingPoints):null}async exportFile(e,t,n,o,i,s){let a={mimeType:"application/pdf",extension:"pdf"};try{const r=J("save_document",{file_path:_,format:o,flatten_annotations:e,save_incrementally:t,apply_redactions:!1,save_for_printing:n,remove_all_annotations:i,preserve_change_tracker_state:s})[0];r.format&&(a={mimeType:r.format.mime_type,extension:r.format.extension})}catch(e){throw new Error(`Error saving to /save.pdf: ${e.message}`)}r(F,S);return[F.FS.readFile(_).buffer,a]}async importXFDF(e,t){j.push({source:e,keepCurrentAnnotations:t}),t||function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];e.push("pspdfkit/widget"),T("removeAllAnnotations",JSON.stringify(e),JSON.stringify(t))}(),T("importXFDF",e)}async exportXFDF(){return T("exportXFDF",[],[]).XFDF}async importInstantJSON(e){T("importInstantDocumentJSON",JSON.stringify(e))}async exportInstantJSON(e){const t=z;z&&X(!1);const n=J("export_document_json","number"==typeof e?{version:{annotations:e}}:void 0);return t&&X(!0),$(n[0])}async getDocumentOutline(){const e=J("get_outline");return r(1===e.length,"expected only one response for getDocumentOutline"),e[0].outline||[]}async onKeystrokeEvent(e){const t=J("on_keystroke_event",{pdf_javascript_event:e});r(1===t.length,"expected only one response for onKeystrokeEvent");const n=t[0].changes||[];return r(n.length>0&&4===n[0].change_type,"expected onKeystrokeEvent to return at least one JavaScript Event change."),n}async version(){return T("PSPDFKitVersion").version}getImportedXFDF(){return j}async applyRedactions(){try{T("saveDocument",x,!1,!1,!0,!1,"pdf",!1)}catch(e){throw new Error(`Error applying redactions and saving to /create.pdf: ${e.message}`)}}async clearAPStreamCache(){T("clearAPStreamCache")}comparisonDocuments={};lastOpenedComparisonDocument=null;async setComparisonDocument(e,t){this.comparisonDocuments[e]=t||(await this.exportFile(!1,!1,!1,"pdf",!1,!1))[0]}async openComparisonDocument(e){return r(this.comparisonDocuments[e]),e===this.lastOpenedComparisonDocument||e===b&&null===this.lastOpenedComparisonDocument&&this.persistedOpenDocument instanceof ArrayBuffer?null:(this.lastOpenedComparisonDocument=e,this.openDocument(this.comparisonDocuments[e],this.persistedOpenDocument===e?this.persistedOpenDocumentPassword:void 0))}async documentCompareAndOpen(e){r(this.comparisonDocuments[b]&&this.comparisonDocuments[v],"One or both comparison input documents are missing.");const t=`${b}.pdf`,n=`${v}.pdf`;F.FS.writeFile(t,new Uint8Array(this.comparisonDocuments[b])),F.FS.writeFile(n,new Uint8Array(this.comparisonDocuments[v]));return J("comparison",{documentA:{strokeColor:e.documentA.strokeColor,pageIndex:e.documentA.pageIndex,filePath:t},documentB:{strokeColor:e.documentB.strokeColor,pageIndex:e.documentB.pageIndex,filePath:n},options:{...e.options,outputFilePath:"output.pdf"}}),await this.closeDocument(),this.comparisonDocuments[w]=F.FS.readFile("output.pdf").buffer,this.lastOpenedComparisonDocument=w,this.openDocument(this.comparisonDocuments[w],void 0)}persistedOpenDocument=null;async persistOpenDocument(e){if(e)this.persistedOpenDocument=e;else try{this.persistedOpenDocument=(await this.exportFile(!1,!1,!1,"pdf",!1,!0))[0]}catch(e){throw new Error(`Error trying to persist a copy of the currently opened document: ${e.message}`)}this.persistedOpenDocumentPassword=D}async cleanupDocumentComparison(){r(this.persistedOpenDocument,"No persisted previous document key or array buffer is available.");const e=this.persistedOpenDocument instanceof ArrayBuffer?this.persistedOpenDocument:this.comparisonDocuments[this.persistedOpenDocument];r(e,"No persisted previous array buffer is available.");try{await this.closeDocument()}catch(e){throw new Error(`Error trying to close the current document: ${e.message}`)}const t=this.openDocument(e,this.persistedOpenDocumentPassword);return this.persistedOpenDocument=null,this.persistedOpenDocumentPassword=null,this.lastOpenedComparisonDocument=null,this.comparisonDocuments={},t}_getPdfObjectIdForObject(e){return"number"==typeof e.pdfObjectId?e.pdfObjectId:this._pdfObjectIdsForIds[e.id]}async contentEditorEnter(){J("content_editing/enter")}async contentEditorExit(){J("content_editing/exit")}async contentEditorGetTextBlocks(e){const t=J("content_editing/get_text_blocks",{pageIndex:e});return r(1===t.length,"expected only one response for getTextBlocks"),t[0]}async contentEditorDetectParagraphs(e){const t=J("content_editing/detect_paragraphs",{pageIndex:e});return r(1===t.length,"expected only one response for detectParagraphs"),t[0]}async contentEditorRenderTextBlock(e,t,n){const o=J("content_editing/render_text_block",{textBlockId:e,renderTextBlockParams:t,externalControlState:n});return r(2===o.length,"expected only two responses for renderTextBlock. ArrayBuffer and Size info."),{imageBuffer:o[1],displayRect:o[0].displayRect}}async contentEditorSetTextBlockCursor(e,t,n,o){const i=J("content_editing/set_cursor",{textBlockId:e,offset:t,selectText:n,externalControlState:o});return r(1===i.length,"expected only one response for setTextBlockCursor"),i[0]}async contentEditorMoveTextBlockCursor(e,t,n,o){const i=J("content_editing/move_cursor",{textBlockId:e,movement:t,selectText:n,externalControlState:o});return r(1===i.length,"expected only one response for moveTextBlockCursor"),i[0]}async contentEditorInsertTextBlockString(e,t,n,o){const i=J("content_editing/insert_text",{textBlockId:e,cluster:t,text:n,externalControlState:o});return r(1===i.length,"expected only one response for insertTextBlockString"),i[0]}async contentEditorInsertTextBlockContentRef(e,t,n,o){const i=J("content_editing/insert_content_ref",{textBlockId:e,cluster:t,contentRef:n,externalControlState:o});return r(1===i.length,"expected only one response for contentEditorInsertTextBlockContentRef"),i[0]}async contentEditorCreateTextBlock(e){const t=J("content_editing/create_text_block",{pageIndex:e});return r(1===t.length,"expected only one response for contentEditorCreateTextBlock"),t[0]}async contentEditorDeleteTextBlockRange(e,t,n){const o=J("content_editing/delete_range",{textBlockId:e,range:t,externalControlState:n});return r(1===o.length,"expected only one response for deleteTextBlockRange"),o[0]}async contentEditorLayoutTextBlock(e,t,n,o){const i=J("content_editing/layout",{textBlockId:e,cursor:t,selection:n,externalControlState:o});return r(1===i.length,"expected only one response for layoutTextBlock"),i[0]}async contentEditorDeleteTextBlockString(e,t,n){const o=J("content_editing/delete_cluster",{textBlockId:e,direction:t,externalControlState:n});return r(1===o.length,"expected only one response for deleteTextBlockString"),o[0]}async contentEditorSetTextBlockSelection(e,t,n){const o=J("content_editing/set_selection",{textBlockId:e,mode:t,externalControlState:n});return r(1===o.length,"expected only one response for setTextBlockSelection"),o[0]}async contentEditorSetTextBlockSelectionRange(e,t,n,o,i){const s=J("content_editing/set_selection_range",{textBlockId:e,begin:t,end:n,mode:o,externalControlState:i});return r(1===s.length,"expected only one response for setTextBlockSelection"),s[0]}async contentEditorTextBlockUndo(e,t){const n=J("content_editing/undo",{textBlockId:e,externalControlState:t});return r(1===n.length,"expected only one response for textBlockUndo"),n[0]}async contentEditorTextBlockRedo(e,t){const n=J("content_editing/redo",{textBlockId:e,externalControlState:t});return r(1===n.length,"expected only one response for textBlockRedo"),n[0]}async contentEditorTextBlockRestore(e,t,n){const o=J("content_editing/restore",{textBlockId:e,version:t,externalControlState:n});return r(1===o.length,"expected only one response for textBlockRestore"),o[0]}async contentEditorTextBlockApplyFormat(e,t,n,o){const i=J("content_editing/apply_format",{textBlockId:e,range:t,formatModifications:n,externalControlState:o});return r(1===i.length,"expected only one response for textBlockApplyFormat"),i[0]}async contentEditorGetAvailableFaces(){const e=J("content_editing/available_faces");return r(1===e.length,"expected only one response for available_faces"),e[0]}async contentEditorSave(e){let t;try{t=J("content_editing/save_to_document",{path:x,textBlockSaveInfos:e})}catch(e){throw new Error(`Error saving to /save.pdf: ${e.message}`)}return t}recycle(){}destroy(){}},ne=self;ne.global=ne,ne.module={},ne.onmessage=async e=>{let t,n,{data:r}=e;try{const e=await te[r.action](...r.args);if(t={id:r.id,result:e},Array.isArray(e)){const t=e.filter((e=>e instanceof ArrayBuffer));t.length>0&&(n=t)}e instanceof ArrayBuffer&&(n=[e])}catch(e){const o=[...r.args].filter((e=>e instanceof ArrayBuffer));o.length>0&&(n=o),t={id:r.id,error:e.message||e.toString(),callArgs:r.args}}ne.postMessage(t,n)}})()})();',
          null,
        )
      }
    },
    69855: (e) => {
      'use strict'
      var t = window.URL || window.webkitURL
      e.exports = function (e, n) {
        try {
          try {
            var r
            try {
              ;(r = new (window.BlobBuilder ||
                window.WebKitBlobBuilder ||
                window.MozBlobBuilder ||
                window.MSBlobBuilder)()).append(e),
                (r = r.getBlob())
            } catch (t) {
              r = new Blob([e])
            }
            return new Worker(t.createObjectURL(r))
          } catch (t) {
            return new Worker('data:application/javascript,' + encodeURIComponent(e))
          }
        } catch (e) {
          if (!n) throw Error('Inline worker is not supported')
          return new Worker(n)
        }
      }
    },
  },
])
