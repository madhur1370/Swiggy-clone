import java.io.*;
import javax.net.ssl.*;
import java.security.KeyStore;
public class SslSmtpServer extends Thread{

    SSLSocket client;

    @Override public void run()
    {
        try(BufferedReader data=new BufferedReader(new InputStreamReader(client.getInputStream()));
        BufferedWriter out = new BufferedWriter(new OutputStreamWriter(client.getOutputStream()))){
            String s="";
            StringBuilder message=new StringBuilder("");
            while((s=data.readLine())!=null)
            {
                if(s.startsWith("HELO"))
                {
                    out.write("250 Swiggy.com\r\n");
                }
                else if(s.startsWith("MAIL FROM:"))
                out.write("250 OK \r\n");
                else if(s.startsWith("RCPT TO:"))
                out.write("250 OK\r\n");
                else if(s.startsWith("DATA"))
                {
                    
                    out.write("354 End Data With <CRLF>.<CRLF>\r\n");
                    while(!(s=data.readLine()).equals("."))
                    {
                        message.append(s);
                    }        
                    out.write("250 OK: message recieved\r\n");        
                }
                else if(s.startsWith("QUIT"))
                {
                    out.write("221 Bye\r\n");
                    break;
                }
                else
                {
                    out.write("500 unrecognized Command\r\n");
                }
                out.flush();
                System.out.println(s);
            }
            out.close();
            data.close();
            client.close();
        }
        catch(Exception e)
        {
            System.out.println("client stream reading failed in smtp");
        }
    }

    public void sendEmail()
    {
    }

    public static void main(String []args) throws Exception{
        KeyStore keystore=KeyStore.getInstance("JKS");
        keystore.load(new FileInputStream("keystore.jks"), "madhur123@".toCharArray());
        KeyManagerFactory kmf=KeyManagerFactory.getInstance(KeyManagerFactory.getDefaultAlgorithm());
        kmf.init(keystore,"madhur123@".toCharArray());
        SSLContext sslcontext=SSLContext.getInstance("TLS");
        sslcontext.init(kmf.getKeyManagers(), null, null);

        SSLServerSocketFactory ssf=sslcontext.getServerSocketFactory();
        SSLServerSocket sslsmtp=(SSLServerSocket)ssf.createServerSocket(465);
        while(true)
        {
            SSLSocket client = (SSLSocket)sslsmtp.accept();
            if(client.isConnected())
            {
                SslSmtpServer obj = new SslSmtpServer();
                obj.client=client;
                obj.start();
            }
        }
    }
}
