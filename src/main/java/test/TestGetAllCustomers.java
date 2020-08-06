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

public class TestGetAllCustomers {
    @Test
    public void test1() throws IOException {

        try {
            URL url = new URL(TestConfig.URL + "customers");

            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";

            StringBuilder stringBuilder = new StringBuilder();

            while ((line = bufferedReader.readLine()) != null) {
                stringBuilder.append(line);
            }

            Gson gson = new Gson();

            String json = stringBuilder.toString();

            List<Customer> customers = gson.fromJson(json, new TypeToken<List<Customer>>() {
            }.getType());

            //String s = stringBuilder.toString();

            //Expecting first stored customer data object has attributes assigned to "test" value in db
            Assert.assertEquals(customers.get(0).getId(), 1);
            Assert.assertEquals(customers.get(0).getAccount_id(), "test");
            Assert.assertEquals(customers.get(0).getEmail(), "test");
            Assert.assertEquals(customers.get(0).getPassword(), "test");
            Assert.assertEquals(customers.get(0).getPhone(), "test");
            Assert.assertEquals(customers.get(0).getAddress(), "test");

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
