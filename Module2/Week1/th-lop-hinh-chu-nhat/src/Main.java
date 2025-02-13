import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập width: ");
        double width = sc.nextDouble();

        System.out.print("Nhập height: ");
        double height = sc.nextDouble();

        Rectangle rectangle = new Rectangle(width, height);
        System.out.println("Diện tích = " + rectangle.GetArea());
        System.out.println("Chu vi = " + rectangle.GetPerimeter());
        System.out.println(rectangle.display());

        sc.close();
    }
}