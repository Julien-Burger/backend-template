const rateLimit = require("express-rate-limit");

/**
 * Empêche les attaques de force brute en limitant le nombre de requêtes par IP
 * @param {number} windowMs - Le temps de fenêtre en minutes
 * @param {number} limit - Le maximum de requêtes par IP
 * @returns {rateLimit} - Middleware de limitation de requêtes
 */
module.exports.limiter = (limit = 100, windowMs = 15) => {
    return rateLimit({
        windowMs: windowMs * 60 * 1000,
        limit,
        message: "ERR_TOO_MANY_REQUESTS",
    });
};
