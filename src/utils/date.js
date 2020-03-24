export const calcDate = (date1, date2) => {
    let date3 = date2 - date1;

    let days = Math.floor(date3 / (24 * 3600 * 1000))

    let leave1 = date3 % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))

    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))

    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(date3 / 1000)
    return {
        leave1,
        leave2,
        leave3, 
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
}