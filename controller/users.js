class UsersController {
  static async index(ctx) {
    // ctx.validateQuery('name').required()

    const result = await ctx.mongo
      .collection('col3')
      .find({ grade: '大一' })
      .toArray();
    ctx.body = result;
  }

  static async send(ctx) {
    ctx
      .validateBody('email')
      .required()
      .isEmail();

    ctx
      .validateBody('content')
      .required()
      .isString();
    // const info = await mail(options)
    ctx.body = {
      message: '发送成功',
      // info
    };
  }
}

module.exports = UsersController;
