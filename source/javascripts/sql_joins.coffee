class SqlJoins
  constructor: (@sqlControlID, @sqlDetails) ->
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

    # appcache
    @_initAppcache()
    # init control
    @_initSvgControl()
    # init foundation
    try
      $(document).foundation()
    catch e
      console.warn "Too old browser :(" if console.warn?


  _initSvgControl: =>
    @sqlControl = Snap(@sqlControlID)
    Snap.load "/images/sql_joins.svg", (sqlIcon) =>
      sqlIcon.select("#upper-head").click =>
        console.log '213123123'

      @sqlControl.append(sqlIcon)

  _selectJoinInfo: (state) =>
    sqlJoinInfo = @_findJoinData(state)
    return unless sqlJoinInfo?

    @sqlDetails.find('.sql_description').text(sqlJoinInfo.description)
    @sqlDetails.find('.sql_info').text(sqlJoinInfo.sql)
    @_hightlightCode()

  # highlight code
  _hightlightCode: =>
    @sqlDetails.find('.sql_info').each (i, e) ->
      $(e).removeClass('hljs')
      hljs.highlightBlock(e)

  _findJoinData: (state) => @_sqlJoinsData[state]

  # appcache
  _initAppcache: =>
    return unless Modernizr.applicationcache is true
    window.applicationCache.addEventListener 'updateready', @_appCacheUpdated, false
  # new assets available
  _appCacheUpdated: (e) =>
    return unless window.applicationCache.status is window.applicationCache.UPDATEREADY
    window.location.reload() if confirm('A new version of this app is available. Load it?')



$ -> new SqlJoins('#sqlJoinControl', $('#sqlJoinsInformation')) if $('#sqlJoinControl').length and $('#sqlJoinsInformation').length
