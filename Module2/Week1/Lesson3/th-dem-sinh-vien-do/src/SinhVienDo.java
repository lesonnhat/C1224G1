import java.util.Random;
import java.util.Scanner;

public class SinhVienDo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập số lượng sinh viên: ");
        int n = sc.nextInt();

        Random random = new Random();

        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = random.nextInt(11);
            System.out.println("Điểm sinh viên " + (i + 1) + ": " + arr[i]);
        }

        int num = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] >= 5) {
                num++;
            }
        }

        System.out.print("Số sinh viên đỗ: " + num);
        sc.close();
    }
}
