describe("Primitives creation", function () {
    var s;
    beforeEach(function () {
        s = Savage(100, 100);
    });
    afterEach(function () {
        s.remove();
    });
    it("creates a circle", function () {
        var c = s.circle(10, 20, 30);
        var C = document.querySelector("circle");
        expect(C).to.not.be(null);
        expect(C.getAttribute("cx")).to.be("10");
        expect(C.getAttribute("cy")).to.be("20");
        expect(C.getAttribute("r")).to.be("30");
    });
    it("creates a rect", function () {
        var c = s.rect(10, 20, 30, 40, 5);
        var C = document.querySelector("rect");
        expect(C).to.not.be(null);
        expect(C.getAttribute("x")).to.be("10");
        expect(C.getAttribute("y")).to.be("20");
        expect(C.getAttribute("width")).to.be("30");
        expect(C.getAttribute("height")).to.be("40");
        expect(C.getAttribute("rx")).to.be("5");
        expect(C.getAttribute("ry")).to.be("5");
    });
    it("creates a rect with different rx & ry", function () {
        var c = s.rect(10, 20, 30, 40, 5, 6);
        var C = document.querySelector("rect");
        expect(C).to.not.be(null);
        expect(C.getAttribute("x")).to.be("10");
        expect(C.getAttribute("y")).to.be("20");
        expect(C.getAttribute("width")).to.be("30");
        expect(C.getAttribute("height")).to.be("40");
        expect(C.getAttribute("rx")).to.be("5");
        expect(C.getAttribute("ry")).to.be("6");
    });
    it("creates a ellipse", function () {
        var c = s.ellipse(10, 20, 30, 40);
        var C = document.querySelector("ellipse");
        expect(C).to.not.be(null);
        expect(C.getAttribute("cx")).to.be("10");
        expect(C.getAttribute("cy")).to.be("20");
        expect(C.getAttribute("rx")).to.be("30");
        expect(C.getAttribute("ry")).to.be("40");
    });
    it("creates a ellipse", function () {
        var c = s.ellipse(10, 20, 30, 40);
        var C = document.querySelector("ellipse");
        expect(C).to.not.be(null);
        expect(C.getAttribute("cx")).to.be("10");
        expect(C.getAttribute("cy")).to.be("20");
        expect(C.getAttribute("rx")).to.be("30");
        expect(C.getAttribute("ry")).to.be("40");
    });
    it("creates a path", function () {
        var c = s.path("M10,10,50,60");
        var C = document.querySelector("path");
        expect(C).to.not.be(null);
        expect(C.getAttribute("d")).to.be("M10,10,50,60");
        expect(C.getBBox().width).to.be(40);
    });
    it("creates a line", function () {
        var c = s.line(10, 10, 50, 60);
        var C = document.querySelector("line");
        expect(C).to.not.be(null);
        expect(C.getAttribute("x1")).to.be("10");
        expect(C.getBBox().width).to.be(40);
    });
    it("creates a polyline", function () {
        var c = s.polyline(10, 10, 50, 60, 70, 80);
        var C = document.querySelector("polyline");
        expect(C).to.not.be(null);
        expect(C.getAttribute("points")).to.be("10,10,50,60,70,80");
    });
    it("creates a polygon", function () {
        var c = s.polygon(10, 10, 50, 60, 70, 80);
        var C = document.querySelector("polygon");
        expect(C).to.not.be(null);
        expect(C.getAttribute("points")).to.be("10,10,50,60,70,80");
    });
    it("creates a group", function () {
        var c = s.group();
        var C = document.querySelector("g");
        expect(C).to.not.be(null);
    });
    it("creates and fills a group", function () {
        var c = s.group(),
            a = s.circle(10, 10, 10),
            b = s.circle(20, 20, 10),
            C = document.querySelector("g");
        c.add(a, b);
        expect(C).to.not.be(null);
        expect(C.childNodes.length).to.be(2);
    });
    it("creates a text", function () {
        var c = s.text(10, 10, "test");
        var C = document.querySelector("text");
        expect(C).to.not.be(null);
        expect(C.getAttribute("x")).to.be("10");
        expect(C.textContent).to.be("test");
    });
});
