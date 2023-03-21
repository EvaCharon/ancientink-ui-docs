<template>
  <div
    class="aui-radio-item"
    @click="handleCheck"
    :style="{
      color: color === 'red' ? 'rgb(136,0,27)' : color,
      pointerEvents: disabled ? 'none' : 'auto',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }"
  >
    <div :class="radioClass"></div>
    <div class="aui-radio-item-label">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "AncientinkRadioItem",
  computed: {
    radioClass() {
      var rtn = "aui-radio-item-input ";
      if (this.color === "red") {
        rtn += "bgRed-radio";
      } else if (this.color === "black") {
        rtn += "bgBlack-radio";
      }

      if (this.value) {
        rtn += "-checked";
      }
      return rtn;
    },
  },
  props: {
    message: {
      type: String,
      default: "单选框",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "black",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleCheck() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style>
.aui-radio-item {
    display: inline-block;
    height:50px;
    line-height:50px;
    padding: 5px 5px 5px 5px;
    font-family:'ygq';
}
 .aui-radio-item-input {
        float:left;
        width:15px; 
        height:15px;
        margin-top:17px;
        margin-right:10px;
    }
    .aui-radio-item-label {
        height:50px;
        float:left;
        line-height: 50px;
    }
.bgBlack-radio {
    background-image: url('../assets/images/button.png');
    background-size:100% 100%;
}
.bgBlack-radio-checked {
        background-image: url('../assets/images/button-fill.png');
        background-size:100% 100%;
    }
.bgRed-radio {
    background-image: url('../assets/images/button-danger.png');
    background-size:100% 100%;
}
    .bgRed-radio-checked {
        background-image: url('../assets/images/button-fill-danger.png');
        background-size:100% 100%;
    }

</style>