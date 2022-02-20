export const todayDate = () => {
    const today = new Date()
    const month = (val) => {
        let monthVal
        switch(val){
            case 0:
                monthVal = 'Jan'
                break
            case 1:
                monthVal = 'Feb'
                break
            case 2:
                monthVal = 'Mar'
                break
            case 3:
                monthVal = 'Apr'
                break
            case 4:
                monthVal = 'May'
                break
            case 5:
                monthVal = 'Jun'
                break
            case 6:
                monthVal = 'Jul'
                break
            case 7:
                monthVal = 'Aug'
                break
            case 8:
                monthVal = 'Sep'
                break
            case 9:
                monthVal = 'Oct'
                break
            case 10:
                monthVal = 'Nov'
                break
            case 11:
                monthVal = 'Dec'
                break
            default:
                break
        }
        return monthVal
    }
    
    return `${today.getDate()}-${month(today.getMonth())}-${today.getFullYear()}`
}

export const todayMonth = () => {
    const today = new Date()
    const month = (val) => {
        let monthVal
        switch(val){
            case 0:
                monthVal = 'Jan'
                break
            case 1:
                monthVal = 'Feb'
                break
            case 2:
                monthVal = 'Mar'
                break
            case 3:
                monthVal = 'Apr'
                break
            case 4:
                monthVal = 'May'
                break
            case 5:
                monthVal = 'Jun'
                break
            case 6:
                monthVal = 'Jul'
                break
            case 7:
                monthVal = 'Aug'
                break
            case 8:
                monthVal = 'Sep'
                break
            case 9:
                monthVal = 'Oct'
                break
            case 10:
                monthVal = 'Nov'
                break
            case 11:
                monthVal = 'Dec'
                break
            default:
                break
        }
        return monthVal
    }
    
    return `${month(today.getMonth())}-${today.getFullYear()}`
}