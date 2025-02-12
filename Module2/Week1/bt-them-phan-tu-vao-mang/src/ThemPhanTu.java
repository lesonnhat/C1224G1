import java.util.Arrays;
import java.util.Scanner;

public class ThemPhanTu {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5,6,7,8,9};
        Scanner sc = new Scanner(System.in);

        System.out.println();
        System.out.print("Nhập số muốn thêm vào mảng: ");
        int num = sc.nextInt();

        System.out.println();
        System.out.print("Vị trí muốn chèn: ");
        int n = sc.nextInt();

        System.out.println("Mảng gốc: " + Arrays.toString(arr));

        if (n < 0 || n >= arr.length) {
            System.out.print("Không hợp lệ");
        } else {
            for (int i = arr.length - 1; i > n; i--) {
                arr[i] = arr[i - 1];
            }
            arr[n] = num;
        }
        System.out.print("Mảng sau khi chèn: " + Arrays.toString(arr));
    }
}
