const assert = require('chai').assert
const apiKey = process.env.MOVIEDB_API_KEY || process.env.npm_config_key
const { MovieDb } = require('../dist')

test('should search for Zoolander', async () => {
  const res = await api.searchMovie({ query: 'Zoolander' })
  haveValidGenericResponse(res)
})
