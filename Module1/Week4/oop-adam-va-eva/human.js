function Human(name, gender, weight) {

    this.name = name;
    this.gender = gender;
    this.weight = parseInt(weight);

    this.isMale = function() {
        if (this.gender) {
            return true;
        }
        return false;
    };

    this.setGender = function(gender) {
        this.gender = gender;
    };

    this.checkApple = function(Apple) {
        if (!Apple.isEmpty()) {
            return true;
        }
        return false;
    };

    this.eat = function(Apple) {
        Apple.decrease();
    };

    this.say = function(str) {
        console.log(str);
    };

    this.getName = function() {
        return this.name;
    };

    this.setName = function(name) {
        this.name = name;
    }

    this.getWeight = function() {
        return this.weight;
    };

    this.setWeight = function(weight) {
        this.weight = weight;
    }
}