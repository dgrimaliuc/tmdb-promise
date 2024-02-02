const assert = require('chai').assert
const { MovieDb } = require('../dist')
const apiKey = process.env.MOVIEDB_API_KEY

test('should search for Zoolander', async () => {
  let api = new MovieDb(apiKey)

  const res = await api.searchKeyword({ query: 'The' })
  // res.results.forEach((movie) => {
  //   assert.isString(movie.media_type)
  // })
  console.log(JSON.stringify(res, null, 2))
  //   haveValidGenericResponse(res)
})
