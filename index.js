const agents = require('user-agent-array')
const slump = require('slump')
const assert = require('assert')
const length = agents.length

module.exports = () => {
  const index = slump.integer() % length
  assert(index >= 0 && index < length)
  return agents[index]
}
