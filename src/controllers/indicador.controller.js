let _indicadorService = null;
class IndicadorController {
  constructor({ IndicadorService }) {
    _indicadorService = IndicadorService;
  }

  async index(req, res) {
    const response = await _indicadorService.index()
    return  res.send(response);
  }

}

module.exports = IndicadorController;
