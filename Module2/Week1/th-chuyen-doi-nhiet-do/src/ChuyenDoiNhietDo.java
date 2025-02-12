import java.util.Scanner;

public class ChuyenDoiNhietDo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("MENU");
        System.out.println("1. Chuyển độ F sang độ C");
        System.out.println("2. Chuyển độ C sang độ F");
        System.out.println("0. Thoát");

        System.out.println("Nhập lựa chọn: ");
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                System.out.println("Nhập vào độ F:");
                double f1 = sc.nextDouble();
                double c1 = (f1 - 32) / 1.8;
                System.out.print("Kết quả sau khi chuyển đổi độ F sang độ C: " + c1);
                break;
            case 2:
                System.out.println("Nhập vào độ C:");
                double c2 = sc.nextDouble();
                double f2 = c2 * 1.8 + 32;
                System.out.print("Kết quả sau khi chuyển đổi độ C sang độ F: " + f2);
                break;
            case 0:
                break;
            default:
                System.out.print("Không hợp lệ");
                break;
        }
        sc.close();
    }
}
