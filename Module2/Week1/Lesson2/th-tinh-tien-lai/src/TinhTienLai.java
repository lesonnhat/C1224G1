import java.text.DecimalFormat;
import java.util.Scanner;

public class TinhTienLai {
    public static void main(String[] args) {
        System.out.println("ỨNG DỤNG TÍNH TIỀN LÃI");
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào số tiền cho vay: ");
        int tienGui = sc.nextInt();

        System.out.print("Lãi suất theo năm (%): ");
        float laiSuatNam = sc.nextFloat();

        System.out.print("Số tháng cho vay: ");
        int thangGui = sc.nextInt();

        float tienLai;
        tienLai = tienGui * laiSuatNam / 100 / 12 * thangGui;

        float tienNhan;
        tienNhan = tienGui + tienLai;

        DecimalFormat df = new DecimalFormat("#,###.##");

        System.out.println("Tiền lãi sau " + thangGui + " tháng là: " + df.format(tienLai) + " VNĐ");
        System.out.print("Tổng số tiền nhận về là: " + df.format(tienNhan) + " VNĐ");
    }
}
