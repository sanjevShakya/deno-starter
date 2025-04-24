import { Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts';

const userRouter = new Router({ prefix: '/users' });

userRouter
  .get('/', (ctx) => {
    ctx.response.body = { message: 'List all users' };
  })
  .get('/:id', (ctx) => {
    const { id } = ctx.params;
    ctx.response.body = { message: `Get user with id ${id}` };
  })
  .post('/', async (ctx) => {
    const body = await ctx.request.body().value;
    ctx.response.body = { message: 'User created', data: body };
  });

export default userRouter;
