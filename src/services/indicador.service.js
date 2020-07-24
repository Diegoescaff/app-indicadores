const axios = require("axios");
const { URL_INDICADORES } = require("../config");

class IndicadorService {
  async index() {
    try {
      let response = await axios.get(URL_INDICADORES);
      let data =  Object.values(response.data);
      const res  = {estatus : 200, message: 'ok',  data : data}
      return res;
    } catch (error) {
      console.log(error)
      const res  = {estatus : 500 , message: 'error',  data : error}
      return res;
    }
  }
}

module.exports = IndicadorService;
