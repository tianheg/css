const { createApp } = Vue;
createApp({
  data() {
    return {
      msg: 'Hello Vue!',
      days: [
        { url: './days/first-30-days/1', day: 1 },
        { url: './days/first-30-days/2', day: 2 },
        { url: './days/first-30-days/3', day: 3 },
        { url: './days/first-30-days/4', day: 4 },
      ],
    };
  },
}).mount('#app');
