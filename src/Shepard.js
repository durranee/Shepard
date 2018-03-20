function Pen() {
  this._pen = [];

  Pen.prototype.get = function () {
    return this._pen;
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
