const im = require('imagemagick');

module.exports.TinyPlanetToFile = (from, to) => {
    return new Promise((resolve, reject) => {
        im.convert([from, "-distort", "Arc", "360", to], (err, stdout) => {
            if (err) throw reject(err);
            resolve();
        });
    });
}
