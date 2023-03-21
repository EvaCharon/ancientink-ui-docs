<template>
  <div
    class="aui-selector"
    :style="{
      '--sizeNorm': height,
      width: parseInt(height) * 4 + 'px',
      fontSize: parseInt(height) / 3 + 'px',
    }"
  >
    <div class="aui-selector-top" @click="showBox">
      <div :class="arrowName"></div>
      {{ content }}
    </div>
    <div :class="className">
      <ul>
        <li
          v-for="(item, index) in options"
          :key="index"
          @click="chooseList(index)"
          :class="chooseIndex === index ? 'li-show' : ''"
        >
          {{ item }}
        </li>
      </ul>
      <div class="aui-selector-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AncientinkSelector",
  data() {
    return {
      className: "aui-selector-box",
      arrowName: "aui-selector-arrow",
      open: true,
      content: "",
      chooseIndex: -1,
    };
  },
  props: {
    options: {
      type: Array,
      default: function(){return ['选项1','选项2','选项3']},
    },
    height: {
      type: String,
      default: "40px",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    showBox() {
      if (!this.open) {
        this.className = "aui-selector-box-show";
        this.arrowName = "aui-selector-arrow-show";
      } else {
        this.className = "aui-selector-box";
        this.arrowName = "aui-selector-arrow";
      }
      this.open = !this.open;
    },
    chooseList(index) {
      this.chooseIndex = index;
      this.content = this.options[index];
      this.$emit("update:modelValue", this.content);
    },
  },
};
</script>

<style scoped>
.aui-selector {
  --sizeNorm: 30px;
  width: 120px;
  height: var(--sizeNorm);
  position: relative;
  font-size: 15px;
  font-family: "ygq";
  color: black;
}
.aui-selector-box {
  position: absolute;
  top: 100%;
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  color: white;
  background-image: url("../assets/images/longbox3.png");
  background-size: 100% 50%;
  background-repeat: no-repeat;
}
ul {
  background-image: url("../assets/images/longbox3.png");
  background-size: 100% 100%;
  padding-inline-start: 0;
  margin-bottom: 0%;
}
li {
  list-style: none;
  margin: 0;
  padding: 3%;
  text-align: center;
}
li:hover {
  background-image: url("../assets/images/li.png");
  background-size: 90% 120%;
  background-repeat: no-repeat;
  background-position: center;
  color: black;
}
.aui-selector-box .li-show {
  background-image: url("../assets/images/li.png");
  background-size: 90% 120%;
  background-repeat: no-repeat;
  background-position: center;
  color: black;
}
.aui-selector-box-show {
  position: absolute;
  top: 100%;
  width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  color: white;
  background-image: url("../assets/images/longbox3.png");
  background-size: 100% 50%;
  background-repeat: no-repeat;
  animation: dropdown 0.8s ease-in-out forwards;
}
.aui-selector-top {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-image: url("../assets/images/labe12.png");
  background-size: 100% 100%;
  text-align: center;
  vertical-align: middle;
  line-height: var(--sizeNorm);
}
.aui-selector-bottom {
  position: relative;
  top: 100%;
  background-image: url("../assets/images/banb00.png");
  background-size: 100% 100%;
  width: 100%;
  height: var(--sizeNorm);
  transform: scaleY(1.5);
  transform-origin: top;
}
.aui-selector-arrow {
  position: absolute;
  top: -25%;
  left: 75%;
  float: right;
  height: 250%;
  width: 25%;
  margin-right: 5%;
  background-image: url("../assets/images/array.png");
  background-size: 100% 100%;
  background-position: center;
  z-index: 100;
}
.aui-selector-arrow-show {
  position: absolute;
  top: -25%;
  left: 75%;
  float: right;
  height: 250%;
  width: 25%;
  margin-right: 5%;
  background-image: url("../assets/images/array.png");
  background-size: 100% 100%;
  background-position: center;
  z-index: 100;
  background-size: 100% 120%;
  background-position: center;
  transform: translateY(13%);
}
@keyframes dropdown {
  from {
    transform: scaleY(0);
    transform-origin: top;
  }
  to {
    transform: scaleY(100%);
    transform-origin: top;
  }
}
</style>