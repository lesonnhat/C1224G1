public class TimGTNhoNhat {
    public static void main(String[] args) {
        int[] arr = {12,3,24,16,9};
        int result = timMin(arr);
        System.out.println("Giá trị nhỏ nhất trong mảng là: " + result);
    }

    // Phương thức tìm giá trị nhỏ nhất trong mảng
    public static int timMin(int[] array) {
        int min = array[0];
        for (int i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        return min;
    }
}
