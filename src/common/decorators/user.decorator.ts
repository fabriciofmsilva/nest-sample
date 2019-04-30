import { createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator((data: string, req) => {
  console.log(data); // test
  return req.user;
});
