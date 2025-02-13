public class DemSoLan {
    public static void main(String[] args) {
        String str = "Tôi là Sơn Nhất đẹp trai nhát gái";

        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == 't') {
                count++;
            }
        }
        System.out.println("Ký tự 't' xuất hiện " + count + " lần");
    }
}
