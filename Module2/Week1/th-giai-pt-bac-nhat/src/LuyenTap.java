import java.util.Scanner;

public class LuyenTap {
    public static void main(String[] args) {
        System.out.println("Giải Phương Trình Bậc Nhất");
        System.out.println("Phương trình có dạng 'a * x + b = c', vui lòng nhập hệ số");

        Scanner scanner = new Scanner(System.in);

        System.out.print("a: ");
        double a = scanner.nextDouble();

        System.out.print("b: ");
        double b = scanner.nextDouble();

        System.out.print("c: ");
        double c = scanner.nextDouble();

        if (a != 0) {
            double x = (c - b) / a;
            System.out.print("x = " + x);
        } else {
            if (b == c) {
                System.out.print("Phương trình vô số nghiệm");
            } else {
                System.out.print("Phương trình vô nghiệm");
            }
        }
    }
}
