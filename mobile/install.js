const adb = require('adbkit');

async function install(apkPath) {
    console.log(`Installing apk: ${apkPath}`);
    try {

        const client = adb.createClient();
        console.log('ADB client created');

        const devices = await client.listDevices();
        if (!devices || !devices.length)
            throw new Error('Could not find USB devices');
        console.log(`Found ${devices.length} devices`);

        const device = devices[0];
        console.log('Installing to device: ', JSON.stringify(device));

        client.install(device.id, apkPath);

        console.log('Apk installed');

    } catch (e) {
        console.error('Failed to install', e)
    }
}

install('mobile-build/platforms/android/build/outputs/apk/android-debug.apk');