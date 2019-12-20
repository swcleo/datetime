# datetime

日期時間小工具，對應時區的概念([TIMEZONE](https://www.timeanddate.com/time/map/))，忽略日光節約時間的時差，。

## Quick Start
``` javascript
import DateTime from 'datetime'

const time = new DateTime();

// get Japan time
time.setTimezoneOffset(-540); 

// get tomorrow time
time.setTime(time.getTime() + 60 * 60 * 24 * 1000);
```