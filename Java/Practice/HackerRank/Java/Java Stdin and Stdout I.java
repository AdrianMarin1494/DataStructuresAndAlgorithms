// https://www.hackerrank.com/challenges/java-stdin-and-stdout-1/problem?isFullScreen=true

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);
        int firstInteger = scanner.nextInt();
        int secondInteger = scanner.nextInt();
        int thirdInteger = scanner.nextInt();
        scanner.close();
        System.out.println(firstInteger);
        System.out.println(secondInteger);
        System.out.println(thirdInteger);
    }
}