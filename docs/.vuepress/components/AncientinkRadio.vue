<template>
  <div class="aui-radio">
    <span v-for="(item, index) in options" :key="index" @click="handleCheck(index)">
      <ancientink-radio-item
        :color="color"
        :value="checkedArray[index]"
        :message="item" />
    </span>
  </div>
</template>

<script>
import AncientinkRadioItem from './AncientinkRadioItem.vue'
export default {
  name: "AncientinkRadio",
  components:{
    AncientinkRadioItem
  },
  data() {
    return {
      checkedArray: Array(this.options.length).fill(false),
      span: 24 / this.options.length > 2 ? 24 / this.options.length : 2,
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "black",
    },
  },
  methods: {
    handleCheck(index) {
      this.checkedArray = Array(this.options.length).fill(false);
      this.checkedArray[index] = true
      this.$emit("update:modelValue", this.options[index]);
    },
    initialChecked() {
      if (this.checkedArray.length !== this.options.length) {
        this.checkedArray = Array(this.options.length).fill(false);
      }
    },
  },
  mounted: function () {
    this.initialChecked();
  },
};
</script>

<style>
</style>