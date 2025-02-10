import java.util.Scanner;

public class ChuyenSoThanhChu {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Nhập số cần đọc (0-999): ");
        int number = sc.nextInt();

        if (number < 0 || number > 999) {
            System.out.println("Out of ability");
        } else if (number < 10) {
            // Bước 2: Đọc số có một chữ số
            switch (number) {
                case 0: System.out.println("zero"); break;
                case 1: System.out.println("one"); break;
                case 2: System.out.println("two"); break;
                case 3: System.out.println("three"); break;
                case 4: System.out.println("four"); break;
                case 5: System.out.println("five"); break;
                case 6: System.out.println("six"); break;
                case 7: System.out.println("seven"); break;
                case 8: System.out.println("eight"); break;
                case 9: System.out.println("nine"); break;
            }
        } else if (number < 20) {
            // Bước 3: Đọc số có hai chữ số nhỏ hơn 20
            switch (number) {
                case 10: System.out.println("ten"); break;
                case 11: System.out.println("eleven"); break;
                case 12: System.out.println("twelve"); break;
                case 13: System.out.println("thirteen"); break;
                case 14: System.out.println("fourteen"); break;
                case 15: System.out.println("fifteen"); break;
                case 16: System.out.println("sixteen"); break;
                case 17: System.out.println("seventeen"); break;
                case 18: System.out.println("eighteen"); break;
                case 19: System.out.println("nineteen"); break;
            }
        } else if (number < 100) {
            // Bước 4: Đọc số có hai chữ số lớn hơn hoặc bằng 20
            int tens = number / 10;
            int ones = number % 10;
            StringBuilder result = new StringBuilder();

            switch (tens) {
                case 2: result.append("twenty"); break;
                case 3: result.append("thirty"); break;
                case 4: result.append("forty"); break;
                case 5: result.append("fifty"); break;
                case 6: result.append("sixty"); break;
                case 7: result.append("seventy"); break;
                case 8: result.append("eighty"); break;
                case 9: result.append("ninety"); break;
            }

            if (ones > 0) {
                result.append(" ").append(readOnes(ones));
            }

            System.out.println(result.toString().trim());
        } else {
            // Bước 5: Đọc số có ba chữ số
            int hundreds = number / 100;
            int remainder = number % 100;
            StringBuilder result = new StringBuilder();

            result.append(readOnes(hundreds)).append(" hundred");

            if (remainder > 0) {
                result.append(" and ");
                if (remainder < 10) {
                    result.append(readOnes(remainder));
                } else if (remainder < 20) {
                    switch (remainder) {
                        case 10: result.append("ten"); break;
                        case 11: result.append("eleven"); break;
                        case 12: result.append("twelve"); break;
                        case 13: result.append("thirteen"); break;
                        case 14: result.append("fourteen"); break;
                        case 15: result.append("fifteen"); break;
                        case 16: result.append("sixteen"); break;
                        case 17: result.append("seventeen"); break;
                        case 18: result.append("eighteen"); break;
                        case 19: result.append("nineteen"); break;
                    }
                } else {
                    int tens = remainder / 10;
                    int ones = remainder % 10;

                    switch (tens) {
                        case 2: result.append("twenty"); break;
                        case 3: result.append("thirty"); break;
                        case 4: result.append("forty"); break;
                        case 5: result.append("fifty"); break;
                        case 6: result.append("sixty"); break;
                        case 7: result.append("seventy"); break;
                        case 8: result.append("eighty"); break;
                        case 9: result.append("ninety"); break;
                    }

                    if (ones > 0) {
                        result.append(" ").append(readOnes(ones));
                    }
                }
            }

            System.out.println(result.toString());
        }

        sc.close(); // Đóng Scanner
    }

    private static String readOnes(int number) {
        switch (number) {
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            default: return "";
        }
    }
}