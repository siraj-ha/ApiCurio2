
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log("request",request)
    const user = request.user;
    return data ? user?.[data] : user;
},
);