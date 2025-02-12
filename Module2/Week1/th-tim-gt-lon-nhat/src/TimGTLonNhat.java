import java.util.Arrays;
import java.util.Scanner;

public class TimGTLonNhat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào độ dài mảng: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Nhập phần tử " + (i + 1) + " : ");
            arr[i] = sc.nextInt();
        }

        System.out.println("Mảng của bạn là: " + Arrays.toString(arr));

        int max = arr[0];
        for (int i = 0; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.print("Phần tử lớn nhất trong mảng = " + max);

        sc.close();
    }
}
