public class Circle {
    private double radius = 1.0;
    private String color = "red";

    public Circle(){
    }

    public Circle(double radius, String color){
        this.radius = radius;
        this.color = color;
    }

    // Public
//    public double getRadius() {
//        return radius;
//    }
//    public double getArea() {
//        return Math.PI * radius * radius;
//    }

    // Protected
//    protected double getRadius() {
//        return radius;
//    }
//    protected double getArea() {
//        return Math.PI * radius * radius;
//    }

    // Default
//    double getRadius() {
//        return radius;
//    }
//    double getArea() {
//        return Math.PI * radius * radius;
//    }

    // Private
    private double getRadius() {
        return radius;
    }
    private double getArea() {
        return Math.PI * radius * radius;
    }
}
