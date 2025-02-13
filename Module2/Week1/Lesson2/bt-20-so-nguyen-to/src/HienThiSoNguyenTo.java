import java.util.Scanner;

public class HienThiSoNguyenTo {
    public static void main(String[] args) {
        System.out.println("HIỂN THỊ SỐ NGUYÊN TỐ");
        Scanner sc = new Scanner(System.in);

        System.out.print("Số lượng bạn muốn hiển thị: ");
        int number = sc.nextInt();

        int count = 0;
        if (number < 1) {
            System.out.print("Số bạn nhập vào không hợp lệ");
        } else {
            String result = "";
            for (int n = 2; count < number; n++) {
                boolean isPrime = true;

                for (int i = 2; i <= Math.sqrt(n); i++) {
                    if (n % i == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    result += n + " ";
                    count++;
                }
            }
            System.out.println(number + " số nguyên tố đầu tiên là: " + result);
        }
        sc.close();
    }
}
