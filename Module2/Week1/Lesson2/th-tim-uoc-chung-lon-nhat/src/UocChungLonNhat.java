import java.util.Scanner;

public class UocChungLonNhat {
    // Hàm tìm UCLN
    public static int ucln(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Nhập hai số
        System.out.print("Nhập số thứ nhất: ");
        int num1 = sc.nextInt();
        System.out.print("Nhập số thứ hai: ");
        int num2 = sc.nextInt();

        // Gọi hàm tìm UCLN
        int result = ucln(num1, num2);

        // Hiển thị kết quả
        System.out.println("Ước chung lớn nhất của " + num1 + " và " + num2 + " là: " + result);
    }
}