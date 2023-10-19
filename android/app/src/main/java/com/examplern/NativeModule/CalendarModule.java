package com.examplern.NativeModule;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    public CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

//    @ReactMethod(isBlockingSynchronousMethod = true) to make the method Synchronous
//    @ReactMethod for asyn function
//    @ReactMethod(isBlockingSynchronousMethod = true)
    @ReactMethod
    public String createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
        return "Hi "+name+", I have received your message";
    }
}
