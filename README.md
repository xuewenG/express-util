# 介绍

这是一个适用于 [express 框架](https://expressjs.com/) 的工具包，提供了 express 开发中需要用到的一些常用方法。

## 用法

### 跨域配置

使用 `cors` 可以快速地配置跨域域名列表，**支持多个域名**：

```typescript
// index.ts
import express from 'express'
import { cors } from '@ixuewen/express-util'

const app = express()

cors(app, ['http://localhost', 'https://blog.xuewen.me'])

const port = 8080
app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}`)
```

### 带 Context Path 地路由绑定

在路由前面添加统一的前缀 (Context Path)，可以方便请求过滤、反向代理等操作。

```typescript
// router/index.ts
import express from 'express'
import videoRouter from './videoRouter'
import clientRouter from './clientRouter'
import { bindWithContextPath, setContextPath } from '@ixuewen/express-util'

// 先设置 Context Path
setContextPath('context-path')

// 绑定子路由
const bindRouter = (app: express.Application): void => {
  bindWithContextPath(app, '/video', videoRouter)
  bindWithContextPath(app, '/client', clientRouter)
}

export { bindRouter }

// index.ts
import express from 'express'
import { bindRouter } from './router'

const app = express()

// 绑定路由
bindRouter(app)

const port = 8080
app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}`)
```
