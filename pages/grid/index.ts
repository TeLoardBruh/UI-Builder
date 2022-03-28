import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      itemColumns: 1 as any,
      itemRows: 1 as any,
      itemTuple: [] as any,
      itemClass: "" as any,
    };
  },
  methods: {
    reciveDataFromChild(recivedData: any) {
      console.log("On top : ", recivedData.name);
      // Do something with the data
      if (recivedData.name === "columns") {
        this.itemColumns = Number(recivedData.value)
          ? Number(recivedData.value)
          : this.itemColumns;
      } else if (recivedData.name === "rows") {
        this.itemRows = Number(recivedData.value)
          ? Number(recivedData.value)
          : this.itemRows;
      }
    },
  },
});
