
describe("Pen", function(){

  beforeEach(function(){
    pen = new Pen();
    penny = new Sheep("Penny");
    fluff = new Sheep("Fluff");
  });

  it ("it should return an array of sheep",function(){
    expect(pen.get()).toBeArrayOfObjects();
  });

  it ("should add the sheep to pen", function(){
    pen.add(fluff);
    pen.add(penny);
    expect(pen.get()).toEqual(jasmine.arrayContaining([penny, fluff]));
  });

  it ("should return size of pen", function(){
    pen.add(penny);
    pen.add(fluff);
    expect(pen.headCount()).toEqual(2);
  });


});
