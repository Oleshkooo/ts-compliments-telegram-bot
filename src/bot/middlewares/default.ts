import { MiddlewareFn, Context, deunionize } from 'telegraf'

export const defaultMiddleware: MiddlewareFn<Context> = (ctx, next) => {
    const messageText = deunionize(ctx.message)?.text

    next()
}
