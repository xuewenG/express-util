import express from 'express'

const cors = (app: express.Application, allowOrigin: string[]): void => {
  app.all('*', (req, res, next) => {
    let origin = req.get('origin') || ''
    if (allowOrigin.indexOf(origin) < 0) {
      origin = ''
    }
    res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, OPTIONS'
    )
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Content-Length, Authorization, Accept, X-Requested-With'
    )
    if (req.method === 'OPTIONS') res.sendStatus(200)
    else next()
  })
}

export { cors }
