public class Rectangle {
    double width, height;

    public Rectangle(){
    }

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double GetArea() {
        return this.width * this.height;
    }

    public double GetPerimeter() {
        return (this.width + this.height) * 2;
    }

    public String display() {
        return "Rectangle: width = " + this.width + ", height = " + this.height;
    }
}
