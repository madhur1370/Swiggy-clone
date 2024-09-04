import java.net.*;
import java.sql.*;
import java.io.*;
import java.util.*;

//mysql connection for accessing 
//localhost database using jdbc driver  

class mysqlconnection{
    void con(){ 
    try{
        Class.forName("com.mysql.cj.jdbc.Driver");
        try(Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/Sizzle","debian-sys-maint","FvCJgT1SFbNZuDEP")){
            System.out.println("database connected succesfully");
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }

      } catch (ClassNotFoundException e) {
        e.printStackTrace();
        System.out.println("MySQL JDBC Driver is not installed or not found in the classpath!");
      }
    }
}

//this is simple converting string to json
//  (here i think json notation not possible) 
// so creating object using hash map 

class Parser {




    HashMap<String,String> toJSON(String data){

        HashMap<String,String> body=new HashMap<String,String>();
        data=data.substring(1,data.length()-1);
        int i=0,j=0,t=0;
        String key="",value="";
        while(i<data.length())
        {
            if(i!=j &&data.charAt(i)==data.charAt(j))
            {
                String s=data.substring(j+1,i);
                if(t==0)
                {
                    key=s;
                    t=1;
                }
                else
                {
                    t=0;
                    value=s;
                    body.put(key, value);
                }
                j=i+2;
                i=j;
            }
            else
            i++;
        }
        return body;
    }




    HashMap<String,String> parseQuery(String s){
        HashMap<String,String> query=new HashMap<String,String>();
        int i=0,j=0;
        String key="",value="";
        while(j<s.length())
        {
            if(i!=j)
            {
                if(s.charAt(j)=='?')
                {
                    key="path";
                    value=s.substring(i,j);
                    query.put(key, value);
                    i=j+1;
                    System.out.println(key+value);
                }
                else if(s.charAt(j)=='=')
                {
                    key=s.substring(i,j);
                    i=j+1;
                    j=j+1;
                    while(j<s.length()&&s.charAt(j)!='&') j++;
                    value=s.substring(i,j);
                    query.put(key, value);
                    i=j+1;
                    System.out.println(key+value);
                }

            }
            j++;
        }
        if(query.get("path")==null)
        {
            query.put("path",s);
        }
        return query;
    }

}

//this is http pareser  
// that extracts method
//  and body of request
//  made from client

class HttpParser{


    protected HashMap<String,String>body;
    protected String method;
    protected HashMap<String,String>ParsedQuery;
    Socket client;

    void parse(Socket cs){
        client=cs;
        try{
            int bodyLength=0;
            String s="",query="";
            BufferedReader data=new BufferedReader(new InputStreamReader(client.getInputStream()));
            while(!(s=data.readLine()).isBlank())
            {
                if(s.startsWith("POST")||s.startsWith("GET")||s.startsWith("DELETE"))
                {
                    int j=0;
                    for(j=0;j<s.length();j++) if(s.charAt(j)==' ') break;
                    method=new String(s.substring(0,j));
                    int k=j+1;
                    j+=1;
                    for(;j<s.length();j++) if(s.charAt(j)==' ') break;
                    query=new String(s.substring(k,j));
                }
                else if(s.startsWith("Content-Length: ")==true)
                {
                    bodyLength=Integer.parseInt(s.substring(16,s.length()));
                }
            }
            char[] c=new char[bodyLength];
            data.read(c);
            s=new String(c);
            Parser parse=new Parser();
            body=parse.toJSON(s);
            ParsedQuery=parse.parseQuery(query);
            this.HandleResponse();
            client.close();
            data.close();
        }
        catch(Exception e)
        {
            System.out.println("something wrong with input stream or client");
            e.printStackTrace();
        }
    }

    private void HandleResponse()
    {
        if(method.equals("POST"))
        {
            if(ParsedQuery.get("path").equals("/Login"))
            {
                this.send();
            }
            else if(ParsedQuery.get("path").equals("/create-account"))
            {
                this.send();
            }
        }
        else if(method.equals("GET"))
        {

        }
        else if(method.equals("DELETE"))
        {

        }
        else
        {

        }
    }

    void send()
    {
        String s="{\"message\": \"messages received\", \"server\": \"hello\"}";
        StringBuilder res=new StringBuilder("HTTP/1.1 200 OK\r\n"+
                    "Access-Control-Allow-Origin: http://localhost:5173\r\n" + 
                    "Access-Control-Allow-Methods: GET, POST, DELETE\r\n" + 
                    "Access-Control-Allow-Headers: *\r\n" + 
                    "Content-Type: application/json\r\n"+
                    "Content-Length: " + s.length()+"\r\n"+"\r\n"+s);
        try(BufferedOutputStream out = new BufferedOutputStream(client.getOutputStream())){
            out.write(res.toString().getBytes("UTF-8"));
            out.flush();
        }
        catch(Exception e)
        {
            System.out.println("sending problem");
            e.printStackTrace();
        }
    }
}


//server made by me 
// so this is simple 
// and my creations to 
// the best of my knowledge

public class Server{
    public static void main(String[] args)
    {
        mysqlconnection con =new mysqlconnection();
        con.con();
        try(ServerSocket server=new ServerSocket(4545))
        {
            while(true){
                Socket clientsocket=server.accept();
                if(clientsocket.isConnected())
                {
                    HttpParser http=new HttpParser();
                    http.parse(clientsocket);
                }
            }
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
          
    }
}