const test = require('tape')
const randomAgent = require('..')

test('secure-random-user-agent sanity checks', t => {
  const agents = []
  for (let i = 0; i < 10000; ++i) {
    agents.push(randomAgent())
  }
  t.equal(agents.every(a => typeof a === 'string'), true, 'all are strings')
  t.end()
})
