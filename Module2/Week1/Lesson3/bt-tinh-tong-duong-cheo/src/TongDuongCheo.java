import java.util.Random;
import java.util.Scanner;

public class TongDuongCheo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập độ dài cạnh hình vuông: ");
        int n = sc.nextInt();

        int[][] array = new int[n][n];

        Random random = new Random();
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                array[i][j] = random.nextInt(100);
            }
        }

        int sum = 0;
        for (int i = 0; i < n; i++) {
            sum += array[i][i];
        }

        System.out.println("Tồng các số ở đường chéo chính = " + sum);
    }
}
