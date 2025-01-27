function ElectricLamp() {
    this.status = true;

    this.turnOn = function() {
        this.status = true;
    };

    this.turnOff = function() {
        this.status = false;
    };

    this.getStatus = function() {
        return this.status;
    }
}