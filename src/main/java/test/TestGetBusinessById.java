package test;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import model.Business;
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

public class TestGetBusinessById {
    @Test
    public void test1() throws IOException {

        try {
            URL url = new URL(TestConfig.URL + "businesses/1");

            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();

            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(httpURLConnection.getInputStream()));
            String line = "";

            StringBuilder stringBuilder = new StringBuilder();

            while ((line = bufferedReader.readLine()) != null) {
                stringBuilder.append(line);
            }

            Gson gson = new Gson();
            String jsonInString = stringBuilder.toString();
            Business business= gson.fromJson(jsonInString, Business.class);

            //String s = stringBuilder.toString();

            //Expecting first stored business data object has attributes assigned to "test" value in db
            Assert.assertEquals(business.getId(), 1);
            // Assert.assertEquals(business.getAccount_id(), "test");
            Assert.assertEquals(business.getEmail(), "test");
            Assert.assertEquals(business.getPassword(), "test");
            // Assert.assertEquals(business.getBusiness_services().size(), 2); //Expecting 2 objects are inserted into this array
            Assert.assertEquals(business.getDescription(), "test");
            Assert.assertEquals(business.getPhone(), "test");
            Assert.assertEquals(business.getAddress(), "test");


        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
