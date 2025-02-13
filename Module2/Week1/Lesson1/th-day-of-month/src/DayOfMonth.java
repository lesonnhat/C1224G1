import java.util.Scanner;

public class DayOfMonth {
    public static void main(String[] args) {
        System.out.println("Chương trình tính ngày trong tháng");
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập tháng bất kỳ (1 - 12): ");
        int n = sc.nextInt();

        if (n < 1 || n > 12) {
            System.out.print("Tháng bạn nhập vào không hợp lệ");
        }
        else {
            switch (n) {
                case 2:
                    System.out.print("Tháng 2 có 28 hoặc 29 ngày");
                    break;
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    System.out.print("Tháng " + n + " có 31 ngày");
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    System.out.print("Tháng " + n + " có 30 ngày");
                    break;
            }
        }
    }
}
