public class Fan {

    private static final int SLOW = 1;
    private static final int MEDIUM = 2;
    private static final int FAST = 3;

    private int speed = SLOW;
    private boolean on = false;
    private double radius = 5;
    private String color = "blue";

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        if (speed >= SLOW && speed <= FAST) { // Kiểm tra giá trị hợp lệ
            this.speed = speed;
        } else {
            System.out.println("Tốc độ không hợp lệ!");
        }
    }

    public void turnOn() {
        this.on = true;
    }

    public void turnOff() {
        this.on = false;
    }

    public boolean isOn() {
        return on;
    }

    public double getRadius() {
        return radius;
    }

    public void setRadius(double radius) {
        if (radius > 0) { // Kiểm tra giá trị hợp lệ
            this.radius = radius;
        } else {
            System.out.println("Bán kính không hợp lệ!");
        }
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Fan() {
    }

    @Override
    public String toString() {
        if (isOn()) {
            return "Fan on, speed: " + speed + ", radius: " + radius + ", color: " + color;
        } else {
            return "Fan off, radius: " + radius + ", color: " + color; // Đảm bảo có return cho trường hợp này
        }
    }
}