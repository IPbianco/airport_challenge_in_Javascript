function Airport(){
  this._hangar = [];
  this._capacity = 20;
}

Airport.prototype.land = function (plane) {
  if(this.isStormy()) return 'Sorry, stormy weather';
  if(this._hangar.length === this._capacity) return "Sorry, the airport is full";
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
  if(number >= 0.7) return true;
  return false;
};

Airport.prototype.changeCapacity = function(number) {
  this._capacity = number ;
};
