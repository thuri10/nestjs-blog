+++
title = 'ByteCTF - Babydroid'
date = 2024-02-01T01:16:23+03:00
draft = true
tags = ['android', 'ctf', 'bytectf', 'appsec']
summary =" Vulnerable android content providers"
+++

## Android Manifest

```xml
    <activity android:name="com.bytectf.babydroid.MainActivity" android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN"/>
            <category android:name="android.intent.category.LAUNCHER"/>
        </intent-filter>
    </activity>
    <activity android:name="com.bytectf.babydroid.Vulnerable">
        <intent-filter>
            <action android:name="com.bytectf.TEST"/>
        </intent-filter>
    </activity>
    <receiver android:name="com.bytectf.babydroid.FlagReceiver" android:exported="false">
        <intent-filter>
            <action android:name="com.bytectf.SET_FLAG"/>
        </intent-filter>
    </receiver>
    <provider android:name="androidx.core.content.FileProvider" android:exported="false" android:authorities="androidx.core.content.FileProvider" android:grantUriPermissions="true">
        <meta-data android:name="android.support.FILE_PROVIDER_PATHS" android:resource="@xml/file_paths"/>
    </provider>
</application>
```

## File providers

File paths analysis

```xml
<?xml version="1.0" encoding="utf-8"?>
<paths>
    <root-path name="root" path=""/>
</paths>
```

## MainActivity

`MainActivity` analysis

```java
public class MainActivity extends AppCompatActivity {
    /* JADX INFO: Access modifiers changed from: protected */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(C0517R.layout.activity_main);
    }
}
```

## FlagReceiver

`FlagReceiver` analysis

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

## Vulnerable

`Vulnerable` Activity

```java
public class Vulnerable extends Activity {
    @Override // android.app.Activity
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Intent intent = (Intent) getIntent().getParcelableExtra("intent");
        startActivity(intent);
    }
}
```

## Exploitation
