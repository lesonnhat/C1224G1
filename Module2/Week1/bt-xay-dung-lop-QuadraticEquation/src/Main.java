import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Nhập a: ");
        int a = sc.nextInt();
        System.out.println("Nhập b: ");
        int b = sc.nextInt();
        System.out.println("Nhập c: ");
        int c = sc.nextInt();

        QuadraticEquation equation = new QuadraticEquation(a, b, c);

        if (equation.getDiscriminant() == 0) {
            System.out.print("Phương trình có 1 nghiệm duy nhất " + equation.getRoot1());
        } else if (equation.getDiscriminant() < 1) {
            System.out.print("Phương trình vô nghiệm");
        } else {
            System.out.print("Phương trình có 2 nghiệm " + equation.getRoot1() + " và " + equation.getRoot2());
        }

        sc.close();
    }
}