const { createContainer, asClass, asValue, asFunction } = require("awilix");

//  config
const config = require("../config");
const app = require(".");

// services
const {
  HomeService,
  IndicadorService
} = require("../services");

// controllers
const {
  HomeController,
  IndicadorController
} = require("../controllers");

// routes
const {
  HomeRoutes,
  IndicadorRoutes} = require("../routes/index.routes");
const Routes = require("../routes");



const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    IndicadorService: asClass(IndicadorService).singleton(),

  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    IndicadorController: asClass(IndicadorController.bind(IndicadorController)).singleton(),

  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    IndicadorRoutes: asFunction(IndicadorRoutes).singleton(),

  });

module.exports = container;
