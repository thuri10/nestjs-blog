+++
title = 'ByteCTF - Mediumdroid'
date = 2024-02-01T01:17:14+03:00
draft = true
tags = ['android', 'ctf', 'bytectf', 'appsec']
+++

## Manifest File analysis

This is to do a manifest analysis of the application

```xml
    <activity android:name="com.bytectf.mediumdroid.MainActivity" android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN"/>
            <category android:name="android.intent.category.LAUNCHER"/>
        </intent-filter>
    </activity>
    <activity android:name="com.bytectf.mediumdroid.TestActivity" android:exported="false"/>
    <receiver android:name="com.bytectf.mediumdroid.FlagReceiver" android:exported="false">
        <intent-filter>
            <action android:name="com.bytectf.SET_FLAG"/>
        </intent-filter>
    </receiver>
    <provider android:name="androidx.core.content.FileProvider" android:exported="false" android:authorities="androidx.core.content.FileProvider" android:grantUriPermissions="true">
        <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/file_paths"/>
    </provider>
```

The application has one exported activity and provider with `android:grantUriPermissions="true"` enabled

## MainActivity Analysis

```java
public class MainActivity extends AppCompatActivity {
    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(C0518R.layout.activity_main);
        Uri data = getIntent().getData();
        if (data == null) {
            data = Uri.parse("http://app.toutiao.com/");
        }
        if (data.getAuthority().contains("toutiao.com") && data.getScheme().equals("http")) {
            WebView webView = new WebView(getApplicationContext());
            webView.setWebViewClient(new WebViewClient() { // from class: com.bytectf.mediumdroid.MainActivity.1
                @Override // android.webkit.WebViewClient
                public boolean shouldOverrideUrlLoading(WebView view, String url) {
                    Uri uri = Uri.parse(url);
                    if (uri.getScheme().equals("intent")) {
                        try {
                            MainActivity.this.startActivity(Intent.parseUri(url, 1));
                        } catch (URISyntaxException e) {
                            e.printStackTrace();
                        }
                        return true;
                    }
                    return super.shouldOverrideUrlLoading(view, url);
                }
            });
            setContentView(webView);
            webView.getSettings().setJavaScriptEnabled(true);
            webView.loadUrl(data.toString());
        }
    }
```

## TestActivity Analysis

```java
public class TestActivity extends Activity {
    @Override // android.app.Activity
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        String url = getIntent().getStringExtra("url");
        WebView webView = new WebView(getApplicationContext());
        setContentView(webView);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.addJavascriptInterface(this, "jsi");
        webView.loadUrl(url);
    }

    @JavascriptInterface
    public void Te3t(String title, String content) {
        if (Build.VERSION.SDK_INT >= 26) {
            NotificationChannel channel = new NotificationChannel("CHANNEL_ID", "CHANNEL_NAME", 4);
            NotificationManager notificationManager = (NotificationManager) getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
        NotificationCompat.Builder builder = new NotificationCompat.Builder(this, "CHANNEL_ID").setContentTitle(title).setContentText(content).setSmallIcon(C0518R.mipmap.ic_launcher).setContentIntent(PendingIntent.getBroadcast(this, 0, new Intent(), 0)).setAutoCancel(true).setPriority(1);
        NotificationManagerCompat nm = NotificationManagerCompat.from(this);
        nm.notify(100, builder.build());
    }
}
```

## FlagReceiver Analysis

```java
public class FlagReceiver extends BroadcastReceiver {
    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        String flag = intent.getStringExtra("flag");
        if (flag != null) {
            File file = new File(context.getFilesDir(), "flag");
            writeFile(file, flag);
            Log.e("FlagReceiver", "received flag.");
        }
    }
```

## FileProvider

```xml
<?xml version="1.0" encoding="utf-8"?>
<paths>
    <root-path name="root" path=""/>
</paths>
```
