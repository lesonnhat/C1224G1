function SwitchButton() {
    this.status = true;

    this.connectToLamp = function(ElectricLamp) {
        this.lamp = ElectricLamp;
    };

    this.switchOff = function() {
        this.lamp.turnOff();
    };

    this.switchOn = function() {
        this.lamp.turnOn();
    }
}