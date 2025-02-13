import java.util.Scanner;

public class ChuyenDoiTienTe {
    public static void main(String[] args) {
        System.out.println("ỨNG DỤNG CHUYỂN ĐỔI TIỀN TỆ");
        Scanner sc = new Scanner(System.in);

        System.out.print("Nhập vào số USD cần đổi: ");
        int usd = sc.nextInt();

        int vnd = usd * 23000;

        System.out.print("Sau quy đổi, $ " + usd + " = " + vnd + " VNĐ ");
    }
}
