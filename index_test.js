import { default as test } from 'tape'
import port from './index.js'

test('verify port', async t => {
  const adapter = {
    echo: function (s) {
      return Promise.resolve(`Hello ${s}`)
    }
  }

  const a = port(adapter)
  const res = await a.echo('World')
  t.equal(res, 'Hello World')
  t.end()
})

test('throw error', async t => {
  const adapter = {
    ehco: s => Promise.resolve('Hello ' + s)
  }

  try {
    let a = port(adapter)
  } catch (e) {
    t.ok(true)
  }
  t.end()
})
