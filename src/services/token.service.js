import jwt from "jsonwebtoken";

class TokenService {
  async get(token) {
    const tokenContent = jwt.verify(token, process.env.JWT_SECRET);
    //@ts-ignore
    return tokenContent;
  }
}

export default new TokenService();
