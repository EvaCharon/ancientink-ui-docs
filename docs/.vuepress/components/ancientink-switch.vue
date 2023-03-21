<template>
  <div
    class="aui-switch-outer"
    :style="{
      fontSize: parseInt(height) / 2 + 'px',
      pointerEvents: disabled ? 'none' : 'auto',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }"
  >
    <span
      :style="{
        color: open ? 'grey' : 'black',
        display: textLeft === '' ? 'none' : '',
      }"
      >{{ textLeft }}</span
    >
    <div
      class="aui-switch"
      :style="{
        height: parseInt(height) + 'px',
        width: parseInt(height) * 2 + 'px',
      }"
    >
      <div :class="classNameBox" @click="handleClick">
        <div :class="classNameTaiji"></div>
      </div>
    </div>
    <span
      :style="{
        color: !open ? 'grey' : 'black',
        display: textRight === '' ? 'none' : '',
      }"
      >{{ textRight }}</span
    >
  </div>
</template>

<script>
export default {
  name: "AncientinkSwitch",
  data() {
    return {
      classNameTaiji: "aui-switch-taiji",
      classNameBox: "aui-switch-bg",
      open: false,
    };
  },
  methods: {
    changeClass() {
      this.open = !this.open
      if (this.open) {
        this.classNameTaiji = "aui-switch-taiji moveRightRotate";
        this.classNameBox = "aui-switch-bg moveRight";
      } else {
        this.classNameTaiji = "aui-switch-taiji moveLeftRotate";
        this.classNameBox = "aui-switch-bg moveLeft";
      }
    },
    handleClick() {
      this.changeClass();
    },
  },
  props: {
    modelValue: {
      type: Boolean,
      default:true
    },
    textLeft: {
      type: String,
      default: "",
    },
    textRight: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "30px",
    },
  },
};
</script>

<style>
.aui-switch {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  width: 100px;
  height: 50px;
  vertical-align: middle;
  background-image: url("../assets//images/labe12.png");
  background-size: 100% 100%;
  overflow: hidden;
}
.moveRightRotate {
  animation: roateRight 1s ease-in-out forwards;
}
.moveRight {
  background-image: url("../assets//images/label13.png");
  background-size: 100% 100%;
  animation: moveRight 1s ease-in-out forwards;
}
.moveLeftRotate {
  animation: roateLeft 1s ease-in-out forwards;
}
.moveLeft {
  background-image: url("../assets//images/label13.png");
  background-size: 100% 100%;
  animation: moveLeft 1s ease-in-out forwards;
}
.aui-switch-outer {
  display: inline-block;
  font-family: "ygq";
  vertical-align: middle;
}
.aui-switch-taiji {
  float: right;
  width: 50%;
  height: 100%;
  background-image: url("../assets/images/taiji.png");
  background-size: 100% 100%;
}
.aui-switch-bg {
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
}
@keyframes roateRight {
  from {
    transform: rotateZ(0);
    -ms-transform: rotateZ(0);
    -moz-transform: rotateZ(0);
    -webkit-transform: rotateZ(0);
    -o-transform: rotateZ(0);
  }
  to {
    transform: rotateZ(180deg);
    -ms-transform: rotateZ(180deg);
    -moz-transform: rotateZ(180deg);
    -webkit-transform: rotateZ(180deg);
    -o-transform: rotateZ(180deg);
  }
}
@keyframes moveRight {
  from {
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
    -ms-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    -o-transform: translateX(0%);
  }
}

@keyframes roateLeft {
  from {
    transform: rotateZ(180deg);
    -ms-transform: rotateZ(180deg);
    -moz-transform: rotateZ(180deg);
    -webkit-transform: rotateZ(180deg);
    -o-transform: rotateZ(180deg);
  }
  to {
    transform: rotateZ(0);
    -ms-transform: rotateZ(0);
    -moz-transform: rotateZ(0);
    -webkit-transform: rotateZ(0);
    -o-transform: rotateZ(0);
  }
}
@keyframes moveLeft {
  from {
    transform: translateX(0%);
    -ms-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    -o-transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
  }
}
</style>>