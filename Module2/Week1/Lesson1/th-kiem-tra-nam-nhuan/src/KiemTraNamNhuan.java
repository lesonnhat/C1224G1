import java.util.Scanner;

public class KiemTraNamNhuan {
    public static void main(String[] args) {
        System.out.println("Kiểm Tra Năm Nhuận");
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào số năm muốn kiểm tra: ");
        int n = sc.nextInt();

        if ((n % 4 == 0 && n % 100 != 0) || (n % 400 == 0 && n % 100 == 0)) {
            System.out.print(n + " là năm nhuận");
        }
        else {
            System.out.print(n + " không phải năm nhuận");
        }
    }
}
