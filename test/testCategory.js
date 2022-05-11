var expect = require("chai").expect;
var request = require("request");

describe("Categories", function () {

    var url = "http://localhost:4000/api/categories";

    it("returns status 200", function (done) {
        request(url, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    })

});