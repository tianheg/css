const { createApp } = Vue;
createApp({
  data() {
    function returnDays(day) {
      let days = [];
      const first30 = './days/first-30-days/';
      for (let i = 1; i <= day; i++) {
        let dayX = {};
        dayX.url = first30 + i;
        dayX.day = i;
        days.push(dayX);
      }
      return days;
    }
    return {
      msg: 'Hello Vue!',
      days: returnDays(4),
      dates: ['0727', '0729', '0803', '0811'],
    };
  },
}).mount('#app');
