import { NextFunction } from 'express';

function authenticate(req: any, res: any, next: NextFunction) {
  next();
}

export default authenticate;
