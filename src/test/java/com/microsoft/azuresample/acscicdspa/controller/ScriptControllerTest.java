package com.microsoft.azuresample.acscicdspa.controller;

import org.junit.Assert;
import org.junit.Test;

public class ScriptControllerTest{
    
    @Test
    public void test_appInsights(){
        String ret = new ScriptController().appInsights();
    }
}