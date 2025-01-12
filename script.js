// Complete the js code
function Car(make, model) {
	this.make = make;
	this.model = model;
	Car.prototype.getMakeModel=(){
		return `${this.make},${this.model}`;
	}
}

function SportsCar(make, model, topSpeed) {
	Car.call(this,make,model){
		this.topSeed =topSeed;
	}
}

// Inherit the Car prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
