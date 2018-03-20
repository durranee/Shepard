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

}
