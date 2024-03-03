const assert = require('chai').assert
const { MovieDb } = require('../dist')

const apiKey = process.env.MOVIEDB_API_KEY
let api = new MovieDb(apiKey)

test('should search for Zoolander', async () => {
  const res = await api.searchKeyword('The')
  console.log(JSON.stringify(res, null, 2))
})

it(`should allow to set timeout`, async () => {
  const res = await api.moviePopular({ timeout: 1000 })
  // haveValidGenericResponse(res)
  //1
  console.log(res)
})
