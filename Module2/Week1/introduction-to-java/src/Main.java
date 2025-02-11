import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

//        System.out.println("Nhap vao 1 so: ");
//        Scanner scanner = new Scanner(System.in);
//        int number = scanner.nextInt();
//        System.out.println("Number: " + number);

        Scanner sc = new Scanner(System.in);
        String password;
        do {
            System.out.print("Enter your password: ");
            password = sc.nextLine();
        } while (!password.equals("vung oi mo ra"));
    }
}