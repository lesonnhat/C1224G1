//public class Fan {
//
//    private static final int SLOW = 1;
//    private static final int MEDIUM = 2;
//    private static final int FAST = 3;
//
//    private int speed = SLOW;
//    private boolean isOn = false;
//    private double radius = 5;
//    private String color = "blue";
//
//    public int getSpeed() {
//        return speed;
//    }
//
//    public void setSpeed(int speed) {
//        if (speed >= SLOW && speed <= FAST) { // Kiểm tra giá trị hợp lệ
//            this.speed = speed;
//        } else {
//            System.out.println("Tốc độ không hợp lệ!");
//        }
//    }
//
//    public boolean isOn() {
//        return isOn;
//    }
//
//    public void setOn(boolean on) {
//        isOn = on;
//    }
//
//    public double getRadius() {
//        return radius;
//    }
//
//    public void setRadius(double radius) {
//        if (radius > 0) { // Kiểm tra giá trị hợp lệ
//            this.radius = radius;
//        } else {
//            System.out.println("Bán kính không hợp lệ!");
//        }
//    }
//
//    public String getColor() {
//        return color;
//    }
//
//    public void setColor(String color) {
//        this.color = color;
//    }
//
//    public Fan() {
//    }
//
//    @Override
//    public String toString() {
//        if (this.isOn()) {
//            return "Fan ON, speed: " + speed + ", radius: " + radius + ", color: " + color;
//        } else {
//            return "Fan OFF, radius: " + radius + ", color: " + color; // Đảm bảo có return cho trường hợp này
//        }
//    }
//}

class Fan {
    private static final int SLOW = 1;
    private static final int MEDIUM = 2;
    private static final int FAST = 3;

    private int speed = SLOW;
    private boolean isOn = false;
    private double radius = 5;
    private String color = "blue";

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        if (speed >= SLOW && speed <= FAST) {
            this.speed = speed;
        } else {
            throw new IllegalArgumentException("Tốc độ không hợp lệ!");
        }
    }

    public boolean isOn() {
        return isOn;
    }

    public void setOn(boolean on) {
        isOn = on;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        if (radius > 0) {
            this.radius = radius;
        } else {
            throw new IllegalArgumentException("Bán kính không hợp lệ!");
        }
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        if (isOn) {
            return "Fan ON, speed: " + speed + ", radius: " + radius + ", color: " + color;
        } else {
            return "Fan OFF, radius: " + radius + ", color: " + color;
        }
    }
}