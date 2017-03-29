const hyTP = require('../index.js');

describe('Hei Yuki Tiny Planet Module', function () {
    describe('TinyPlanet(): Will Timeout at 20 Seconds', function () {
        it('Generating Image', function (done) {
            hyTP.TinyPlanetToFile('./test/testImage.png', 'generatedImage.png').then(() => {
                done();
            }, (err) => {
                console.log("An Error has Occured In Module Tiny Planet");
                console.log(err);
            });
            this.timeout(20000);
        });
    });
});