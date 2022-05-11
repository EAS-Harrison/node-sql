var expect = require("chai").expect;
var request = require("request");

describe("Items", function () {

    var url = "http://localhost:4000/api/items";

    it("returns status 200", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })

});