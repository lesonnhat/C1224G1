import java.util.Random;
import java.util.Scanner;

public class TinhTongCot {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Bạn muốn tính tổng ở cột nào (0 - 9): ");
        int n = sc.nextInt();

        int[][] arr = new int[10][10];
        Random random = new Random();

        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                arr[i][j] = random.nextInt(11);
            }
        }

        int sum = 0;
        for (int i = 0; i < 10; i++) {
            sum += arr[i][n];
        }

        System.out.println("Tổng các số ở cột " + n + "= " + sum);
    }
}
