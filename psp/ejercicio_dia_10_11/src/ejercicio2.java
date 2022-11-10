import java.util.Scanner;
import java.lang.StringBuilder;


public class ejercicio2 {
    public static void main(String[] args) {
        String cadena = "";
        String cadenainversa = "";
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Introduce una cadena: ");
        cadena = sc.nextLine();
        cadena.replace(" ","");

        StringBuilder sb= new StringBuilder(cadena);
        cadenainversa= sb.reverse().toString();

        if (cadena.isEmpty()) {
            System.out.println("La cadena esta vacia");
        }
        
    }
}
