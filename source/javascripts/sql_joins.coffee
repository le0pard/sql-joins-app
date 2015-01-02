class SqlJoins
  constructor: (@sqlDetails) ->
    @_sqlJoinsData =
      "0.0.0":
        sql: ''
        description: 'Please select how do you want to do SQL JOIN between two table'
      "1.0.0":
        sql: """
SELECT * FROM TableA A
LEFT JOIN TableB B ON
A.key = B.key WHERE B.key IS NULL
"""
        description: "To produce the set of records only in Table A, but not in Table B, we perform the left (outer) join, then exclude the records we don't want from the right side via a where clause"
      "1.1.0":
        sql: """
SELECT * FROM TableA A
LEFT JOIN TableB B ON
A.key = B.key"""
        description: "Left (outer) join produces a complete set of records from Table A, with the matching records (where available) in Table B. If there is no match, the right side will contain null"
      "1.1.1":
        sql: """
SELECT * FROM TableA A
FULL OUTER JOIN TableB B ON
A.key = B.key"""
        description: "Full outer join produces the set of all records in Table A and Table B, with matching records from both sides where available. If there is no match, the missing side will contain null"
      "0.1.0":
        sql: """
SELECT * FROM TableA A
INNER JOIN TableB B ON
A.key = B.key"""
        description: "Inner join produces only the set of records that match in both Table A and Table B"
      "0.1.1":
        sql: """
SELECT * FROM TableA A
RIGHT JOIN TableB B ON
A.key = B.key"""
        description: "Right (outer) join produces a complete set of records from Table B, with the matching records (where available) in Table A. If there is no match, the left side will contain null"
      "0.0.1":
        sql: """
SELECT * FROM TableA A
RIGHT JOIN TableB B ON
A.key = B.key WHERE A.key IS NULL"""
        description: "To produce the set of records only in Table B, but not in Table A, we perform the right (outer) join, then exclude the records we don't want from the right side via a where clause"
      "1.0.1":
        sql: """
SELECT * FROM TableA A
FULL OUTER JOIN TableB B ON
A.key = B.key WHERE A.key IS NULL
OR B.key IS NULL"""
        description: "To produce the set of records unique to Table A and Table B, we perform the full outer join, then exclude the records we don't want from both sides via a where clause"

    # init control
    @_initSvgControl()
    # appcache
    @_initAppcache()
    # init foundation
    try
      $(document).foundation()
    catch e
      console.warn "Too old browser :(" if console.warn?


  _initSvgControl: =>
    @leftCircle = Snap.select("#leftCircle")
    @leftCircle.click (h) => @_selectCircle(@leftCircle, 0)
    Snap.select("#leftCircleText").click (h) => @_selectCircle(@leftCircle, 0)

    @intersectOfCircle = Snap.select("#intersectOfCircle")
    @intersectOfCircle.click (h) => @_selectCircle(@intersectOfCircle, 1)

    @rightCircle = Snap.select("#rightCircle")
    @rightCircle.click (h) => @_selectCircle(@rightCircle, 2)
    Snap.select("#rightCircleText").click (h) => @_selectCircle(@rightCircle, 2)

  _selectCircle: (selectObj, selectObjPosition = 0) =>
    # selected circle
    isSelectedCircle = @_isSelectedCircle(selectObj)
    # animate
    states = if isSelectedCircle
      [
        {fill: 'rgb(255, 51, 51)'},
        {fill: 'rgb(255, 102, 102)'},
        {fill: 'rgb(255, 153, 153)'},
        {fill: 'rgb(255, 204, 204)'},
        {fill: 'rgb(255, 255, 255)'}
      ]
    else
      [
        {fill: 'rgb(255, 204, 204)'},
        {fill: 'rgb(255, 153, 153)'},
        {fill: 'rgb(255, 102, 102)'},
        {fill: 'rgb(255, 51, 51)'},
        {fill: 'rgb(255, 0, 0)'}
      ]
    (animateCircle = (states, i) =>
      selectObj.animate states[i], 50, =>
        i = i + 1
        animateCircle(states, i) if states.length >= i
    )(states, 0)
    # select data
    sqlState = for obj, i in [@leftCircle, @intersectOfCircle, @rightCircle]
      if selectObjPosition is i
        if !isSelectedCircle then '1' else '0'
      else
        if @_isSelectedCircle(obj) then '1' else '0'
    @_selectJoinInfo(sqlState.join('.'))

  _isSelectedCircle: (selectObj) => selectObj.attr('fill') is 'rgb(255, 0, 0)'

  _selectJoinInfo: (state) =>
    sqlJoinInfo = @_sqlJoinsData[state]
    return unless sqlJoinInfo?

    @sqlDetails.find('.sql_description').text(sqlJoinInfo.description)

    sqlInfo = @sqlDetails.find('.sql_info')
    sqlInfo.text(sqlJoinInfo.sql)
    if sqlJoinInfo.sql.length
      sqlInfo.show()
    else
      sqlInfo.hide()

    @_hightlightCode()

  # highlight code
  _hightlightCode: =>
    @sqlDetails.find('.sql_info').each (i, e) ->
      $(e).removeClass('hljs')
      hljs.highlightBlock(e)

  # appcache
  _initAppcache: =>
    return unless Modernizr.applicationcache is true
    window.applicationCache.addEventListener 'updateready', @_appCacheUpdated, false
  # new assets available
  _appCacheUpdated: (e) =>
    return unless window.applicationCache.status is window.applicationCache.UPDATEREADY
    window.location.reload() if confirm('A new version of this app is available. Load it?')



$ -> new SqlJoins($('#sqlJoinsInformation')) if $('#sqlJoinsInformation').length
