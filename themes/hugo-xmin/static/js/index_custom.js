// 计算并填充当前时间
function displayCurrentTime() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const currentDateTime = currentDate.toLocaleString('zh-CN', options);
    document.getElementById('showTime').innerText = currentDateTime;
}

// 计算并填充今天是本年的第几周
function displayWeekNumber() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const diff = today - firstDayOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay) + 1;
    const weekOfYear = Math.ceil(dayOfYear / 7);
    document.getElementById('showWeek').innerText = weekOfYear;
}

// 计算并填充本年进度百分比
function displayYearProgress() {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 1);
    const endOfYear = new Date(today.getFullYear() + 1, 0, 1);
    const totalMilliseconds = endOfYear - startOfYear;
    const elapsedMilliseconds = today - startOfYear;
    const remainingMilliseconds = endOfYear - today;
    const progressPercentage = (elapsedMilliseconds / totalMilliseconds) * 100;
    document.getElementById('showRemain').innerText = progressPercentage.toFixed(2) + '%';
}

// 调用三个函数来填充对应的 div 元素
displayCurrentTime();
displayWeekNumber();
displayYearProgress();
