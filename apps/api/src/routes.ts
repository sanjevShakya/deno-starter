import { Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts';
import userRouter from '@api/user/user.routes.ts';

const apiRouter = new Router({ prefix: '/api' });

apiRouter
  .get('/', (ctx) => {
    ctx.response.body = { message: 'Welcome to the API root. Hello world' };
  })
  .use(userRouter.routes(), userRouter.allowedMethods());

export default apiRouter;
