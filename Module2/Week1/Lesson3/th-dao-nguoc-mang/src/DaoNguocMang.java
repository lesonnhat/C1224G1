import java.util.Arrays;
import java.util.Scanner;

public class DaoNguocMang {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào độ dài mảng: ");
        int n = sc.nextInt();

        // Nhập giá trị cho phần tử
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Nhập phần tử " + (i + 1) + ": ");
            arr[i] = sc.nextInt();
        }
        System.out.println("Mảng bạn đã nhập: " + Arrays.toString(arr));

        // Đảo ngược vị trí phần tử mảng
//        for (int i = 0; i < n; i++, n--) {
//            int temp = arr[i];
//            arr[i] = arr[n - 1];
//            arr[n - 1] = temp;
//        }

        // Cách này cũng hay
        for (int i = 0; i < n / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[n - 1 - i];
            arr[n - 1 - i] = temp;
        }
        System.out.print("Mảng sau khi đảo ngược: " + Arrays.toString(arr));

        sc.close();
    }
}
