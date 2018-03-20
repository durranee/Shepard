describe("Sheep", function(){
  beforeEach(function(){
    sheep = new Sheep("First Sheep");
  });

  it ("should return name of sheep", function(){
    expect(sheep.get()).toEqual("First Sheep");

  });


});
