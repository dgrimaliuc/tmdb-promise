const assert = require('chai').assert
const { MovieDb } = require('../dist')

const apiKey = process.env.MOVIEDB_API_KEY
const authToken = process.env.MOVIEDB_AUTH_TOKEN
let api = new MovieDb({ apiKey })

test('should search for Zoolander', async () => {
  console.log('authToken', authToken)

  const res = await api.searchKeyword('anime')
  console.log(JSON.stringify(res, null, 2))
})

it(`should have media_aub_type`, async () => {
  const res = await api.tvInfo({ id: 37854 })
  // haveValidGenericResponse(res)
  //1
  console.log(res)
})

it(`should allow to set timeout`, async () => {
  const res = await api.moviePopular({ timeout: 1000 })
  // haveValidGenericResponse(res)
  //1
  console.log(res)
})
