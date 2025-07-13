const moduleAlias = require("module-alias");
moduleAlias.addAliases({
    "@config": __dirname + "/config",
    "@controllers": __dirname + "/controllers",
    "@middlewares": __dirname + "/middlewares",
    "@routes": __dirname + "/routes",
});
