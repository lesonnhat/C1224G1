import java.util.Arrays;
import java.util.Scanner;

public class XoaPhanTuKhoiMang {
    public static void main(String[] args) {
        int[] arr = {10, 4, 6, 7, 8, 6, 1, 3, 0};
        Scanner sc = new Scanner(System.in);

        System.out.println("Nhập số bất kỳ để kiểm tra: ");
        int num = sc.nextInt();

        System.out.println("Mảng ban đầu: " + Arrays.toString(arr));

        boolean check = false;
        for (int i = 0; i < arr.length; i++) {
            if (num == arr[i]) {
                check = true;
                for (int j = i; j < arr.length - 1; j++) {
                    arr[j] = arr[j + 1];
                }
            }
        }

        if (check) {
            System.out.print("Mảng mới: " + Arrays.toString(arr));
        }
        else {
            System.out.print("Không tìm thấy giá trị " + num + " trong mảng");
        }
    }
}
