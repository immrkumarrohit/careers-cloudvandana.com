public class RomanToInteger {
    public static int romanToInt(String s) {
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            char currentChar = s.charAt(i);
            int curValue = romanCharToInt(currentChar);

            if (curValue < prevValue) {
                result -= curValue;
            } else {
                result += curValue;
            }
            
            prevValue = curValue;
        }

        return result;
    }

    public static int romanCharToInt(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0; // Invalid character
        }
    }

    public static void main(String[] args) {
        String romanNumeral = "XIV"; 
        int integerEquivalent = romanToInt(romanNumeral);
        System.out.println("Integer equivalent: " + integerEquivalent);
    }
}