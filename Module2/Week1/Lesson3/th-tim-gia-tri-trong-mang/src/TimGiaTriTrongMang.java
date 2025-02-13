import java.util.Scanner;

public class TimGiaTriTrongMang {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] arr = new String[]{"Cuong", "Quan", "Duc", "Nhat", "Dat", "Huy"};

        System.out.print("Nhập vào tên học viên cần tìm: ");
        String name = sc.nextLine();

        String result = "Không tìm thấy học viên " + name;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(name)) {
                result = "Học viên " + name + " ở vị trí số: " + i;
                break;
            }
        }
        System.out.println(result);
    }
}
