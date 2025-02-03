
// OS module
const os=require('os');

    // current user info
    const user=os.userInfo();
    console.log(user)

    //system uptime in seconds
    console.log(`system uptime=${os.uptime()}`)

    const currentOs={
        name:os.type(),
        version:os.version(),
        release:os.release(),
        totalMem:os.totalmem(),
        freeMem:os.freemem()
    }
    console.log(currentOs);
