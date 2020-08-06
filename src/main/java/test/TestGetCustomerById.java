package test;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import model.Customer;
import org.junit.Assert;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;

public class TestGetCustomerById {
    @Test
    public void test1() throws IOException {

        try {
            URL url = new URL(TestConfig.URL + "customers/1");

            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";

            StringBuilder stringBuilder = new StringBuilder();

            while ((line = bufferedReader.readLine()) != null) {
                stringBuilder.append(line);
            }

            Gson gson = new Gson();
            String jsonInString = stringBuilder.toString();
            Customer customer= gson.fromJson(jsonInString, Customer.class);

            //String s = stringBuilder.toString();

            //Expecting first stored customer data object has attributes assigned to "test" value in db
            Assert.assertEquals(customer.getId(), 1);
            Assert.assertEquals(customer.getAccount_id(), "test");
            Assert.assertEquals(customer.getEmail(), "test");
            Assert.assertEquals(customer.getPassword(), "test");
            Assert.assertEquals(customer.getPhone(), "test");
            Assert.assertEquals(customer.getAddress(), "test");


        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
