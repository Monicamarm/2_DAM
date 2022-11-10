import java.lang.ProcessBuilder;
import java.lang.Process;
import java.lang.Runtime;
import java.util.Scanner;

public class ejercicio {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Scanner sc1 = new Scanner(System.in);
        String Alumnomayor = "";
        String Alumnomenor = "";
        String nombre = "";
        int edad = 0;
        int edadmayor = 0;
        int edadmenor = 99;
        int cont = 0;
        boolean edadMal = false;
        do {
            do {
                System.out.print("Nombre del alumno: ");
                nombre = sc.nextLine();
                if (nombre.length() <= 0) {
                    System.out.println("No es valido esta vacio");

                }
            } while (nombre.length() <= 0 || nombre.replace(" ","").length()==0);

            
        
        
        if (!nombre.equals("*")) {
            edadMal = false;
            do {
                try {
                    
                    System.out.print((edadMal)?"Dime tu edad entre 1 y 99: ":"Dime su edad: ");
                    edad = sc1.nextInt();
                    if (edad > edadmayor) {
                        Alumnomayor = nombre;
                        edadmayor=edad;
                    }
                    if (edad < edadmenor) {
                        Alumnomenor = nombre;
                        edadmenor=edad;
                    }
                    edadMal = true;
                } catch (Exception e) {
                    System.out.println("eso es una letra");
                    sc1.next();
                }
                
            } while (edad < 1 || edad > 99);
        }
        cont++;
    } while (!nombre.equals("*"));
    cont--;
        System.out.println();
        System.out.println("Hay " + cont + " alumnos, el mayor es: " + Alumnomayor + " y el menor: " + Alumnomenor);
    }
}