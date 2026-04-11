import java.util.Scanner;

public class IdadeemDias {
    public static void main(String[] args){
        
        Scanner num1 = new Scanner(System.in);
        
        System.out.println("Digite os anos: ");
        int anos = num1.nextInt();
        
        System.out.println("Digite os meses: ");
        int meses = num1.nextInt();
        
        System.out.println("Digite os dias: ");
        int dias = num1.nextInt();
        
        int totalDias = (anos * 365) + (meses * 30) + dias;
        System.out.println("Total em dias: " + totalDias);
    }
}
