import java.util.Scanner;

public class KTSoNguyenTo {
    public static void main(String[] args) {
//        System.out.println("KIỂM TRA SỐ NGUYÊN TỐ");
//        Scanner sc = new Scanner(System.in);
//
//        System.out.print("Nhập vào số nguyên bất kỳ: ");
//        int n = sc.nextInt();
//
//        if (n < 2) {
//            System.out.println(n + " không phải số nguyên tố");
//        }
//        else {
//            String result = n + " là số nguyên tố";
//            for (int i = 2; i <= Math.sqrt(n); i++) {
//                if (n % i == 0) {
//                    result = n + " không phải số nguyên tố";
//                    break;
//                }
//            }
//            System.out.println(result);
//        }

        System.out.println("KIỂM TRA SỐ NGUYÊN TỐ");
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào số bất kỳ: ");
        int n = sc.nextInt();

        if (n < 2) {
            System.out.print(n + " không phải số nguyên tố");
        }
        else {
            int i = 2;
            boolean check = true;

            while (i <= Math.sqrt(n)) {
                if (n % i == 0) {
                    check = false;
                    break;
                }
                i++;
            }
            if (check) {
                System.out.print(n + " là số nguyên tố");
            }
            else {
                System.out.print(n + " không phải số nguyên tố");
            }
        }
    }
}
