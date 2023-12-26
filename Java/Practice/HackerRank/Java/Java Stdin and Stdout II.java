// https://www.hackerrank.com/challenges/java-stdin-stdout/problem?isFullScreen=true

import java.io.*;
import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner scan = new Scanner(System.in);
    int integerInput = Integer.parseInt(scan.nextLine());
    double doubleInput = Double.parseDouble(scan.nextLine());
    String stringInput = scan.nextLine();
    scan.close();

    System.out.println("String: " + stringInput);
    System.out.println("Double: " + doubleInput);
    System.out.println("Int: " + integerInput);
    }
    
}
