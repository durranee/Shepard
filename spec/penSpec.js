
describe("Pen", function(){

  beforeEach(function(){
    pen = new Pen();

  });

  it ("it should return an array of pens",function(){
    expect(pen.get()).toBeArrayOfObjects();
  });

});
