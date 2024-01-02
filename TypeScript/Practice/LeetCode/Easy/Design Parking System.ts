// https://leetcode.com/problems/design-parking-system/description/

class ParkingSystem {
    places = [0, 0, 0];

    constructor(big: number, medium: number, small: number) {
        this.places = [big, medium, small];
    }

    addCar(carType: number): boolean {
       return this.places[carType - 1] > 0 ? (this.places[carType - 1]--, true) : false;
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */