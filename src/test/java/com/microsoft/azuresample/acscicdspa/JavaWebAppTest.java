package com.microsoft.azuresample.acscicdspa;

import org.junit.Assert;
import org.junit.Test;

public class JavaWebAppTest{

    @Test
    public void test_app(){
        Assert.assertEquals(1,1);
    }

    @Test
    public void test_filterRegistrationBean(){
        new JavaWebApp().filterRegistrationBean();
    }
}