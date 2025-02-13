//public class Main {
//    public static void main(String[] args) {
//        Fan fan1 = new Fan();
//        fan1.setOn(true);
//        fan1.setSpeed(3);
//        fan1.setRadius(10);
//        fan1.setColor("yellow");
//
//        Fan fan2 = new Fan();
//        fan2.setOn(false);
//        fan2.setSpeed(2);
//        fan2.setRadius(5);
//        fan2.setColor("blue");
//
//        System.out.println(fan1.toString());
//        System.out.println(fan2.toString());
//    }
//}

public class Main {
    public static void main(String[] args) {
        Fan fan1 = createFan(true, 3, 10, "yellow");
        Fan fan2 = createFan(false, 2, 5, "blue");

        System.out.println(fan1);
        System.out.println(fan2);
    }

    private static Fan createFan(boolean isOn, int speed, double radius, String color) {
        Fan fan = new Fan();
        fan.setOn(isOn);
        fan.setSpeed(speed);
        fan.setRadius(radius);
        fan.setColor(color);
        return fan;
    }
}