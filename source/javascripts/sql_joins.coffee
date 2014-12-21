class SqlJoins
  constructor: (@svgControl) ->
    # appcache
    @_initAppcache()
    # init foundation
    try
      $(document).foundation()
    catch e
      console.warn "Too old browser :(" if console.warn?

  # appcache
  _initAppcache: =>
    return unless Modernizr.applicationcache is true
    window.applicationCache.addEventListener 'updateready', @_appCacheUpdated, false
  # new assets available
  _appCacheUpdated: (e) =>
    return unless window.applicationCache.status is window.applicationCache.UPDATEREADY
    window.location.reload() if confirm('A new version of this app is available. Load it?')



$ -> new SqlJoins($('#sqlJoinControl')) if $('#sqlJoinControl').length
