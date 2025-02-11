import java.util.Scanner;

public class HienThiHinh {
    public static void main(String[] args) {
        System.out.println("HIỂN THỊ CÁC LOẠI HÌNH");
        Scanner sc = new Scanner(System.in);

        System.out.println("1. Print the rectangle");
        System.out.println("2. Print the square triangle");
        System.out.println("3. Print isosceles triangle");
        System.out.println("4. Exit");

        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();

        switch (choice) {
            case 1:
                for (int i = 1; i <= 3; i++) {
                    for (int j = 1; j <= 8; j++) {
                        System.out.print("*");
                    }
                    System.out.println();
                }
                break;
            case 2:
                System.out.println("*");
                System.out.println("**");
                System.out.println("***");
                System.out.println("****");
                System.out.println("*****");
                break;
            case 3:
                System.out.println("    *");
                System.out.println("   ***");
                System.out.println("  *****");
                System.out.println(" *******");
                System.out.println("*********");
                break;
            case 4:
                break;
        }
    }
}
