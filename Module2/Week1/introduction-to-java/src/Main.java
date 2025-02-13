import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

//        System.out.println("Nhap vao 1 so: ");
//        Scanner scanner = new Scanner(System.in);
//        int number = scanner.nextInt();
//        System.out.println("Number: " + number);

//        Scanner sc = new Scanner(System.in);
//        String password;
//        do {
//            System.out.print("Enter your password: ");
//            password = sc.nextLine();
//        } while (!password.equals("vung oi mo ra"));

//        int[][] arr = new int[10][10];
//
//        // Gán giá trị ngẫu nhiên cho các phần tử
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr[i].length; j++) {
//                arr[i][j] = (int) (Math.random() * 100);
//            }
//        }
//
//        // In ra mảng
//        System.out.println("Mảng 2 chiều vừa tạo là: ");
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr[i].length; j++) {
//                System.out.print(arr[i][j] + " ");
//            }
//            System.out.println();
//        }
//
//        System.out.println("--------------------------------------");
//        // Tính tổng từng cột
//        for (int i = 0; i < arr.length; i++) {
//            int result = 0;
//            for (int j = 0; j < arr[i].length; j++) {
//                result += arr[j][i];
//            }
//            System.out.println("Tổng cột " + i + " = " + result);
//        }
//
//        System.out.println("--------------------------------------");
//        // Tính tổng tất cả các phần tử
//        int resultAll = 0;
//        for (int i = 0; i < arr.length; i++) {
//            for (int j = 0; j < arr[i].length; j++) {
//                resultAll += arr[i][j];
//            }
//        }
//        System.out.print("Tổng tất cả các phần tử = " + resultAll);
//
//        System.out.println();
//        System.out.println("--------------------------------------");
//        // Tìm ra dòng có tổng lớn nhất
//        int max = 0;
//        int dong = 0;
//        for (int i = 0; i < arr.length; i++) {
//            int resultDong = 0;
//            for (int j = 0; j < arr[i].length; j++) {
//                resultDong += arr[i][j];
//            }
//            if (resultDong > max) {
//                max = resultDong;
//                dong = i;
//            }
//        }
//        System.out.print("Dòng " + dong + " có tổng lớn nhất = " + max);

//        System.out.print("Tổng các số liên tiếp từ 11 đến 30 = " + sum(11, 30));
//    }
//    public static int sum(int i1, int i2) {
//        int result = 0;
//        for (int i = i1; i <= i2; i++) {
//            result += i;
//        }
//        return result;

//            int x = 1;
//            System.out.println("Before the call, x is:"+ x);
//            increment(x);
//            System.out.println("After the call, x is:"+ x);

        int x = 1; // x represents an int value
//        int[] y = new int[10]; // y represents an array of int values
        int[] y = new int[]{10, 20, 30, 40, 50}; // Nhất tự định nghĩa
        m(x, y); // Invoke m with arguments x and y
        System.out.println("x is " + x);
        System.out.println("y[0] is " + y[0]);

    }

//    public static void increment(int n) {
//        n++;
//        System.out.println("n inside the method is "+ n);
//    }

    public static void m(int number, int[] numbers) {
        number = 1001; // Assign a new value to number
        numbers[0] = 5555; // Assign a new value to numbers[0]
    }
}