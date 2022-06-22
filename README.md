# zyf-gTool
My favorite tools JavaScript, including (date)
# install

```
npm install zyf-gtool

```
# use

```
import gTool from "zyf-gtool";  //var gTool = require("gTool");

<script type="text/javascript" src="../node_modules/zyf-gtool/dist/gTool.js"></script>
```

# api

# date（日期类型）

#### dateFormat

desc: 日期格式转换

use: gTool.dateFormat(date, type)

type: 

|column0|result|desc|
|-|-|-|
|hh|01|时|
|mm|11|分|
|ss|23|秒|
|yyyy-mm-dd|2021-01-02|年月日|
|yyyy-mm-dd hh:mm|2021-01-02 14:01|年-月-日 时:分|
|yyyy-mm-dd hh:mm:ss|2021-01-02 14:01:23|年-月-日 时:分:秒|
|yyyy/mm/dd|2021/01/02|年/月/日|
|yyyy/mm/dd hh:mm|2021/01/02 14:01|年/月/日 时:分|
|yyyy/mm/dd hh:mm:ss|2021/01/02 14:01:23|年/月/日 时:分:秒|

#### paddingZero

desc: 补0

use: gTool.paddingZero(date, type)

#### symbolChange

desc: 转换为Date对象，这里面的date可以是任何

use: gTool.symbolChange(date)

### getBetweenDate

desc: 获取两个日期之间的所有日期

use: gTool.getBetweenDate(start, end)

### getRecentDayDate

desc: 获取最近几天的日期

use: gTool.getRecentDayDate(天数)

### getRecentDayDate

desc: 获取最近几年的日期

use: gTool.getRecentYearDate(年数)

### getRecentMonthsDate

desc: 获取最近几月的日期

use: gTool.getRecentMonthsDate(月数)

### getDayDiff

desc: 获取两个日期之间的天数

use: gTool.getDayDiff(start, end)

### getDayDiffDayHourMinutesSecond

desc: 获取两个日期之间的天数/小时/分钟/秒数

use: gTool.getDayDiffDayHourMinutesSecond(start, end)

callback: {day:'', hour:'', minutes:'', sec: ''}

