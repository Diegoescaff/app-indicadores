const { IndicadorService } = require("../src/services");
describe("Indicador Controller  Tests", () => { 

    beforeEach(() => {

    });

    it("Validando status controller", async () => {
        const _indicadorService = new IndicadorService();
        const response = await _indicadorService.index()
        expect(response.estatus).toEqual(200);
    });

    it("Validando message controller", async () => {
        const _indicadorService = new IndicadorService();
        const response = await _indicadorService.index()
        expect(response.message).toEqual('ok');
    });

});