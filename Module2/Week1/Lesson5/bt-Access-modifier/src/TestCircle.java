public class TestCircle {
    public static void main(String[] args) {
        Circle circle = new Circle(3.5, "yellow");

        System.out.println("Bán kính = " + circle.getRadius());
        System.out.print("Diện tích = " + circle.getArea());
    }
}