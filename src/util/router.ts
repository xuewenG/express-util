import express from 'express'

let contextPath = ''

const urlWithContextPath = (url: string): string => {
  return contextPath + url
}

const setContextPath = (path: string): void => {
  contextPath = path
}

const bindWithContextPath = (
  app: express.Application,
  url: string,
  router: express.Router
): void => {
  app.use(urlWithContextPath(url), router)
}

export { setContextPath, bindWithContextPath }
