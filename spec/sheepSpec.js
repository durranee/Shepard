describe("Sheep", function(){
  beforeEach(function(){
    sheep = new Sheep("Penny");
  });

  it ("should return name of sheep", function(){
    expect(sheep.get()).toEqual("Penny");
  });

  it ("should change name of sheep", function(){
    sheep.set("Pound");
    expect(sheep.get()).toEqual("Pound");
  });

});
