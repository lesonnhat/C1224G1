import java.util.Arrays;
import java.util.Scanner;

public class GiaTriNhoNhat {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập độ dài mảng: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            System.out.print("Nhập phần tử " + i + " : ");
            arr[i] = sc.nextInt();
        }

        int min = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        System.out.println("Mảng đã tạo: " + Arrays.toString(arr));
        System.out.println("Giá trị nhỏ nhất của mảng là: " + min);

        sc.close();
    }
}
