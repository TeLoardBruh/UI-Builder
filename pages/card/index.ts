import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      typeOfCard: [
        {
          id: 0,
          elm: "Default",
        },
        {
          id: 1,
          elm: "With Image",
        },
        {
          id: 1,
          elm: "With Image and Action Button",
        },
      ],
    };
  },
});
