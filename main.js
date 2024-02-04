const { createApp } = Vue;
const VueApp = createApp({
  data() {
    return {
      message: "Benvenuto Vue",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvuejs.org%2Fimages%2Flogo.png&f=1&nofb=1&ipt=8ed860ceab18d6186ef78d8d058a054349fc528db77ca1a18fe42955ceb7ebd1&ipo=images",
    };
  },
});

VueApp.mount("#VueApp");
