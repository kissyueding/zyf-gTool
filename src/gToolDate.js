/**gTool.js
 * 常用方法工具
 * @author Gao Jin
 * @update 2018/03/16 17:53
 */
 ;(function(G){
	//工具类 扩展插件、静态方法
	G.extend({
        errorFunction: function() {
            if(Array.from(arguments).some(item=> !item && item!==0 && item!=='0')) throw new Error('arguments is need');
        },
        // 格式转换
        dateFormat: function(date, type) {
            const newDate = G.symbolChange(date)
            const year = newDate.getFullYear()
            let month = G.paddingZero(newDate.getMonth() + 1)
            let dates = G.paddingZero(newDate.getDate())
            let hours = G.paddingZero(newDate.getHours())
            let minutes = G.paddingZero(newDate.getMinutes())
            let seconds = G.paddingZero(newDate.getSeconds())
            let dateValue = ''
            const dateValuea = year + '-' + month + '-' + dates
            const dateValueb = year + '/' + month + '/' + dates
            const dateHourValuea = hours + ':' + minutes + ':' + seconds
            const dateHourValueb = hours + ':' + minutes
            switch (type) {
                // 格式 2022/01/12
                case 'yyyy/mm/dd':
                    dateValue = dateValueb
                    break;
                case 'yyyy-mm-dd hh:mm:ss':
                    dateValue = dateValuea + ' ' + dateHourValuea
                    break;
                case 'yyyy-mm-dd hh:mm':
                    dateValue = dateValuea + ' ' + dateHourValueb
                    break;
                // 格式 2022-01-12
                case 'yyyy-mm-dd':
                    dateValue = dateValuea
                    break;
                case 'yyyy/mm/dd hh:mm:ss':
                    dateValue = dateValueb + ' ' + dateHourValuea
                    break;
                case 'yyyy/mm/dd hh:mm':
                    dateValue = dateValueb + ' ' + dateHourValueb
                    break;
                case 'hh':
                    dateValue = hours
                    break;
                case 'mm':
                    dateValue = minutes
                    break;
                case 'ss':
                    dateValue = seconds
                    break;
                default:
                    dateValue = dateValuea
                    break;
            }
            return dateValue
        },
        // 补0
        paddingZero: function(value) {
            G.errorFunction(value)
            return value<10 ? '0' + value : value
        },
        // 符号转换
        symbolChange: function(date) {
            // 日期横杠和斜杠兼容处理
            return date && typeof date === 'string' ? (date.indexOf('-')>-1 ? new Date(date.replace(/-/g, '/')): new Date(date) ) : (date ? date : new Date())
        },
        // 获取天数间的日期
        getBetweenDate: function(start, end) {
            G.errorFunction(start, end)
            let startTime = new Date(G.symbolChange(start)).getTime()
            const endTime = new Date(G.symbolChange(end)).getTime()
            const array = []
            while(startTime<endTime){
                array.push(G.dateFormat(new Date(startTime)))
                startTime = startTime + (24 * 60 * 60 * 1000)
            }
            return array
        },
        // 获取最近几天的日期
        getRecentDayDate: function(days) {
           G.errorFunction(days)
           const start = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - days)
           const end = new Date()
           return G.getBetweenDate(start, end)
        },
        // 获取最近几年的日期
        getRecentYearDate: function(years) {
            G.errorFunction(years)
            const start = new Date(new Date().getFullYear() - years, new Date().getMonth(), new Date().getDate())
            const end = new Date()
            return G.getBetweenDate(start, end)
        },
        // 获取最近几月的日期
        getRecentMonthsDate: function(months) {
            G.errorFunction(months)
            const start = new Date(new Date().getFullYear(), new Date().getMonth() - months, new Date().getDate())
            const end = new Date()
            return G.getBetweenDate(start, end)
        },
        // 获取两个日期之间的天数
        getDayDiff: function(start, end) {
            G.errorFunction(start, end)
            const starts = Date.parse(new Date(G.symbolChange(start)))
            const ends = Date.parse(new Date(G.symbolChange(end)))
            return parseInt(Math.abs(starts - ends) / 1000 / 60 / 60 / 24) // 把相差的毫秒数转换为天数
        }
	});
 })(gTool)