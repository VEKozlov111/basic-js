function getDNSStats(domains) {
    if (domains.length == 0) {
        return {}
    }
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (let i = 0; i < domains.length; i++) {
        if (domains[i].includes('.com')) {
            count1++
        }
        if (domains[i].includes('epam.')) {
            count2++
        }
        if (domains[i].includes('info.')) {
            count3++
        }
    }


    let obj = {
        ['.com']: count1,
        ['.com.epam']: count2,
        ['.com.epam.info']: count3
    }
    if (count3 == 0) {
        delete obj['.com.epam.info']
    }
    return obj
}
console.log(getDNSStats(['epam.com']))  