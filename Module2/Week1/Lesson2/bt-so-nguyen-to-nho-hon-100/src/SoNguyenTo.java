public class SoNguyenTo {
    public static void main(String[] args) {
        StringBuilder result = new StringBuilder(); // Sử dụng StringBuilder
        for (int n = 2; n <= 100; n++) {
            boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(n); i++) {
                if (n % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                result.append(n).append(", "); // Thêm số nguyên tố vào kết quả
            }
        }
        if (result.length() > 0) {
            result.setLength(result.length() - 2); // Xóa 2 ký tự cuối (dấu phẩy và khoảng trắng)
        }
        System.out.println("Các số nguyên tố nhỏ hơn 100 là: " + result.toString().trim()); // In kết quả
    }
}