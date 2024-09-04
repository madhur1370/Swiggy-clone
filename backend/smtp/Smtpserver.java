import java.net.*;
import java.io.*;
public class Smtpserver extends Thread{
    Socket client;

    @Override 
    public void run()
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

    public static void main(String []args)
    {
        try(ServerSocket smtp=new ServerSocket(25))
        {
            while(true)
            {
                Socket client=smtp.accept();
                if(client.isConnected())
                {
                    Smtpserver mailserver=new Smtpserver();
                    mailserver.client=client;
                    mailserver.start();
                }
            }
        }
        catch(Exception e)
        {
            e.printStackTrace();
            System.out.println("smtp server creation failed");
        }
    }
} 