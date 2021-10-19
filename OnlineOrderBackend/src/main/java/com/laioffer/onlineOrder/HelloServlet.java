package com.laioffer.onlineOrder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.laioffer.onlineOrder.entity.Customer;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        ObjectMapper mapper = new JsonMapper();
        Customer customer = new Customer();
        customer.setEmail("sun@laioffer.com");
        customer.setPassword("1234");
        customer.setFirstName("rick");
        customer.setLastName("sun");
        customer.setEnabled(true);
        response.getWriter().print(mapper.writeValueAsString(customer));

//        JSONObject obj = new JSONObject();
//        obj.put("name", "rick sun");
//        obj.put("age", 50);
//        obj.put("gender", "male");
//        obj.put("email", "sun@laiOffer.com");
//
//        PrintWriter out = response.getWriter();
//        out.println(obj);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        JSONObject obj = new JSONObject(IOUtils.toString(request.getReader()));
        String name = obj.getString("name");
        int age = obj.getInt("age");
        String gender = obj.getString("gender");
        String email = obj.getString("email");

        System.out.println("email is " + email);
        System.out.println("name is " + name);
        System.out.println("age is " + age);
        System.out.println("gender is " + gender);

        response.setContentType("application/json");
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("status", "ok");
        response.getWriter().println(jsonResponse);
    }

        public void destroy() {
    }
}