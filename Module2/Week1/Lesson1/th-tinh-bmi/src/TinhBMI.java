import java.util.Scanner;

public class TinhBMI {
    public static void main(String[] args) {
        System.out.println("Tính chỉ số BMI");
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào cân nặng (đơn vị: kg): ");
        float kg = sc.nextFloat();

        System.out.print("Nhập vào chiều cao (đơn vị: m): ");
        float m = sc.nextFloat();

        float bmi = kg / (m * m);

        if (bmi < 18.5) {
            System.out.print("QUÁ GẦY");
        }
        else if (18.5 <= bmi && bmi < 25) {
            System.out.print("BÌNH THƯỜNG");
        }
        else if (25 <= bmi && bmi < 30) {
            System.out.print("THỪA CÂN");
        }
        else {
            System.out.print("BÉO PHÌ");
        }
    }
}
