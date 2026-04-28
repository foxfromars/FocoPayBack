import jwt from "jsonwebtoken";

class AuthenticateMiddleware {
  validateToken(req, res, next) {
    try {
      if (!req.headers.authorization)
        throw new Error("Authorization header not found");
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET).data;
      req.userInfo = decodedToken;
      next();
    } catch (err) {
      res.status(err.status ? err.status : 401).send(err?.message);
    }
  }
}

export default new AuthenticateMiddleware();
