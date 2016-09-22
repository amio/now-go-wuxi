const go = require('now-go')
const fetch = require('node-fetch')
const configLocation = 'https://amio.github.io/now-go-wuxi/config.json'

go(configLocation)

function ping () {
  return fetch(configLocation)
  .then(res => res.json())
  .then(cfg => {
    if (cfg.deployment) {
      return fetch(cfg.deployment) // ping deployment url to keep alive
    }
  })
}

setInterval(ping, 60 * 60 * 1000)
