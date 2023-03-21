<template>
  <div class="aui-checkbox-group">
    <span v-for="(item, index) in options" :key="index" @click="handleCheck(index)">
      <ancientink-checkbox
        :color="color"
        :value="checkedArray[index]" :message="item"/>
    </span>
  </div>
</template>

<script>
import AncientinkCheckBox from './AncientinkCheckBox'
export default {
  name: "AncientinkCheckboxGroup",
  components: {
    AncientinkCheckBox
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
      type: Array,
      default: function(){},
    },
    color: {
      type: String,
      default: "black",
    },
  },
  methods: {
    handleCheck(index) {
      let tmp = Array(this.options.length).fill(false)
      tmp.forEach((item,i)=>{
          tmp[i] = this.checkedArray[i]
      })
      tmp[index] = !tmp[index]
      this.checkedArray = tmp
      this.$emit("update:modelValue", this.checkedArray)
    },
    initialChecked() {
      if (this.checkedArray.length !== this.options.length) {
        this.checkedArray = Array(this.options.length).fill(false);
      }
      this.$emit("update:modelValue", this.checkedArray);
    },
  },
  mounted: function () {
    this.initialChecked();
  },
};
</script>

<style>
</style>