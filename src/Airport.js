function Airport(){
  this._hangar = [];
}

Airport.prototype.land = function (plane) {
  if(this.isStormy()) return 'Sorry, stormy weather';
  this._hangar.push(plane);
  return 'Plane landed';
};

Airport.prototype.takeOff = function (plane) {
  if(this.isStormy()) return 'Sorry, stormy weather';
  this._hangar.pop();
  return 'Plane took off' ;
};

Airport.prototype.isStormy = function () {
  var number = Math.random();
  if(number >= 0.5) return true;
  return false;
};
