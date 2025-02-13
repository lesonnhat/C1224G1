import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // Tạo mảng ngẫu nhiên với 100,000 số
        int n = 100000;
        int[] array = new int[n];
        Random random = new Random();

        for (int i = 0; i < n; i++) {
            array[i] = random.nextInt(1000000); // Số ngẫu nhiên từ 0 đến 999,999
        }

        StopWatch stopWatch = new StopWatch();
        stopWatch.start();

        // Thực hiện thuật toán sắp xếp chọn
        selectionSort(array);

        stopWatch.stop();

        // In thời gian thực thi
        System.out.print("Thời gian đã trôi qua = " + stopWatch.getElapsedTime() + " mili giây");
    }
    // Phương thức sắp xếp chọn
    public static void selectionSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            // Đổi chỗ phần tử nhỏ nhất với phần tử đầu tiên
            int temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }
}