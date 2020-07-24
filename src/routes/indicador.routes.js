const { Router } = require("express");
const {
  CacheMiddleware
} = require("../middlewares");
const { CACHE_TIME } = require("../helpers");
module.exports = function({ IndicadorController }) {
  const router = Router();
  router.get("/", CacheMiddleware(CACHE_TIME.ONE_HOUR),IndicadorController.index);

  return router;
};
