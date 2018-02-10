const adb = require('adbkit');

async function install(apkPath) {
    console.log(`Installing apk: ${apkPath}`);
    
    const client = adb.createClient();
    const devices = await client.listDevices();
    if (!devices || !devices.length)
        throw new Error('Could not find USB devices');

    const device = devices[0];
    client.install(device.id, apkPath);
    
    console.log('Apk installed');
}

install('mobile-build/platforms/android/build/outputs/apk/android-debug.apk');