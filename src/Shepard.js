function Pen() {
  this._pen = [];

  Pen.prototype.get = function () {
    return this._pen;
  };

  Pen.prototype.add = function(sheep) {
    this._pen.push(sheep)
  };

  Pen.prototype.headCount = function () {
    return this._pen.length;
  };

  Pen.prototype.listAll = function () {
    for (var i = 0; i < this._pen.length; i++) {
      console.log(this._pen[i].get());
    }
  };
};


function Sheep(name){
  this._name = name;

  Sheep.prototype.get = function () {
    return this._name;
  };

// to change name otherwise constructor
// does the job of setting name anyway
  Sheep.prototype.set = function (name) {
    this._name = name;
  };

}
