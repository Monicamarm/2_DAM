package daywa;


import java.awt.Color;
import java.awt.GradientPaint;
import java.awt.Graphics;
import java.awt.Graphics2D;
import javax.swing.JFrame;




public class Fakebook4 extends javax.swing.JFrame {

     private Color color1 = new Color(
            255,
            255,
            255);
    private Color color2 = Color.getHSBColor(
            288,
            0,
            100);
    
    public void paint(Graphics g){
        super.paint(g);
        
        Graphics2D G2D = (Graphics2D) g;
        
        int w = getWidth();
        int h = getHeight();
        
        GradientPaint gp = new GradientPaint(0,0,color1,0,h,color2);
        
        G2D.setPaint(gp);
        G2D.fillRect(0,0,w,h);
        
    }
    
    public Fakebook4() {
        initComponents();
    }

    
    
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 813, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 783, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

   
    public static void main(String args[]) {
       
        JFrame frame = new JFrame();
    
    frame.setSize(500,500);
    frame.setLocationRelativeTo(null);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(false);
    
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Fakebook4().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    // End of variables declaration//GEN-END:variables
}
