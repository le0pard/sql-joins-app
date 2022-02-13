export const SQL_MAP = {
  '0.0.0': {
    sql: '',
    description: 'Please select how do you want to do SQL JOIN between two table'
  },
  '1.0.0': {
    sql: `
SELECT * FROM TableA A
LEFT JOIN TableB B ON
A.key = B.key WHERE B.key IS NULL
    `,
    description:
      "To produce the set of records only in Table A, but not in Table B, we perform the left (outer) join, then exclude the records we don't want from the right side via a where clause"
  },
  '1.1.0': {
    sql: `
SELECT * FROM TableA A
LEFT JOIN TableB B ON
A.key = B.key
    `,
    description:
      'Left (outer) join produces a complete set of records from Table A, with the matching records (where available) in Table B. If there is no match, the right side will contain null'
  },
  '1.1.1': {
    sql: `
SELECT * FROM TableA A
FULL OUTER JOIN TableB B ON
A.key = B.key
    `,
    description:
      'Full outer join produces the set of all records in Table A and Table B, with matching records from both sides where available. If there is no match, the missing side will contain null'
  },
  '0.1.0': {
    sql: `
SELECT * FROM TableA A
INNER JOIN TableB B ON
A.key = B.key
    `,
    description:
      'Inner join produces only the set of records that match in both Table A and Table B'
  },
  '0.1.1': {
    sql: `
SELECT * FROM TableA A
RIGHT JOIN TableB B ON
A.key = B.key
    `,
    description:
      'Right (outer) join produces a complete set of records from Table B, with the matching records (where available) in Table A. If there is no match, the left side will contain null'
  },
  '0.0.1': {
    sql: `
SELECT * FROM TableA A
RIGHT JOIN TableB B ON
A.key = B.key WHERE A.key IS NULL
    `,
    description:
      "To produce the set of records only in Table B, but not in Table A, we perform the right (outer) join, then exclude the records we don't want from the right side via a where clause"
  },
  '1.0.1': {
    sql: `
SELECT * FROM TableA A
FULL OUTER JOIN TableB B ON
A.key = B.key WHERE A.key IS NULL
OR B.key IS NULL
    `,
    description:
      "To produce the set of records unique to Table A and Table B, we perform the full outer join, then exclude the records we don't want from both sides via a where clause"
  }
}
