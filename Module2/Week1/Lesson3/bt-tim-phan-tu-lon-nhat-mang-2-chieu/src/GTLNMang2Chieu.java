import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class GTLNMang2Chieu {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Nhập độ dài mảng arr1: ");
        int n1 = sc.nextInt();
        System.out.println("Nhập độ dài mảng arr2: ");
        int n2 = sc.nextInt();

        Random random = new Random();
        int[][] arr = new int[n1][n2];
        for (int i = 0; i < n1; i++) {
            for (int j = 0; j < n2; j++) {
                arr[i][j] = random.nextInt(100);
            }
        }
        int max = arr[0][0];
        for (int i = 0; i < n1; i++) {
            for (int j = 0; j < n2; j++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                }
            }
        }
        System.out.println("In ra mảng 2 chiều:");
        System.out.println(Arrays.deepToString(arr));
        System.out.println("Phần tử lớn nhất của mảng là: " + max);

        sc.close();
    }
}
