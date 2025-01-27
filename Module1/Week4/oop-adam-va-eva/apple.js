function Apple(weight) {
    this.weight = weight;

    this.decrease = function() {
        this.weight--;
    };

    this.isEmpty = function() {
        if (this.weight <= 0) {
            return true;
        }
        return false;
    };

    this.getWeight = function() {
        return this.weight;
    }
}