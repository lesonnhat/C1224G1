import java.util.Arrays;
import java.util.Scanner;

public class GopMang {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr1 = new int[4];
        int[] arr2 = new int[5];
        int[] arr3 = new int[arr1.length + arr2.length];

        System.out.println("NHẬP GIÁ TRỊ CHO MẢNG arr1");
        for (int i = 0; i < arr1.length; i++) {
            System.out.print("Giá trị thứ " + i + " : ");
            arr1[i] = sc.nextInt();
        }

        System.out.println("NHẬP GIÁ TRỊ CHO MẢNG arr2");
        for (int j = 0; j < arr2.length; j++) {
            System.out.print("Giá trị thứ " + j + " : ");
            arr2[j] = sc.nextInt();
        }

        for (int i = 0; i < arr1.length; i++) {
            arr3[i] = arr1[i];
        }

        for (int j = 0; j < arr2.length; j++) {
            arr3[arr1.length + j] = arr2[j];
        }

        System.out.print("arr3 sau khi gộp mảng là: " + Arrays.toString(arr3));
    }
}
