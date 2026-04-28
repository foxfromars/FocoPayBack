import tokenService from "../services/token.service.js";

class tokenController {
  async get(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const tokenContent = await tokenService.get(token);
      res.json(tokenContent);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error validating token");
    }
  }
}

export default new tokenController();
