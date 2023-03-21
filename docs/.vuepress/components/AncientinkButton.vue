<template>
  <div
    class="aui-button-outter"
    @click="clickBtn"
    :style="{
      width: height,
      height: height,
      lineHeight: height,
      fontSize: fontSize,
      pointerEvents: disabled ? 'none' : 'auto',
      cursor: disabled || !clickReact ? 'default' : 'pointer',
      opacity: disabled || !clickReact ? 0.6 : 1,
    }"
  >
    <div :class="buttonClass"></div>
    <div class="aui-button-inner">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "AncientinkButton",
  data() {
    return {
      clickReact: true,
    };
  },
  computed: {
    fontSize() {
      return parseInt(this.height) / 2.5 + "px";
    },
    buttonClass() {
      var rtn = "aui-button";
      if (this.danger) {
        rtn += "-danger";
      }
      if (this.fill) {
        rtn += "-fill";
      }
      if (this.loading) {
        rtn += " button-loading";
      }
      return rtn;
    },
  },
  methods: {
    clickBtn() {
      if (this.preventClick && this.clickReact) {
        this.clickHandler();
        this.clickReact = false;
        setTimeout(() => {
          this.clickReact = true;
        }, 1000);
      } else if (!this.preventClick) {
        this.clickHandler();
      }
    },
  },
  props: {
    text: {
      require: true,
      type: String,
    },
    height: {
      type: String,
      default: "50px",
    },
    danger: {
      type: Boolean,
      default: false,
    },
    fill: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    preventClick: {
      type: Boolean,
      default: false,
    },
    clickHandler: {
      type: Function,
      default: function () {},
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
@font-face {
    font-family: "ygq";
    src: url('../assets/font/Aa阳关曲.ttf');
    font-weight: normal;
    font-style: normal;
}
.aui-button-outter {
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  font-family: "ygq";
  overflow: hidden;
}
.aui-button-outter:hover {
  transform: scale(1.5, 1.5);
}
.aui-button {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  background-image: url(../assets/images/button.png);
  background-size: cover;
}
.aui-button:hover {
  animation: 3s roate ease-in-out;
}
.aui-button:active {
  animation: 0.1s roateBack ease-in-out;
}

.aui-button-fill:hover {
  animation: 3s roate ease-in-out;
}
.aui-button-fill:active {
  animation: 0.1s roateBack ease-in-out;
}

.aui-button-danger:hover {
  animation: 3s roate ease-in-out;
}
.aui-button-danger:active {
  animation: 0.1s roateBack ease-in-out;
}

.aui-button-danger-fill:hover {
  animation: 3s roate ease-in-out;
}
.aui-button-danger-fill:active {
  animation: 0.1s roateBack ease-in-out;
}

.aui-button-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  background-image: url(../assets/images/button-fill.png);
  background-size: cover;
}
.aui-button-danger {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  background-image: url(../assets/images/button-danger.png);
  background-size: cover;
  opacity: 0.7;
}
.aui-button-danger-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 1;
  background-size: cover;
  opacity: 0.7;
  background-image: url(../assets/images/button-fill-danger.png);
}
.button-loading {
  animation: 1.5s roate ease-in-out infinite;
}
.aui-button-inner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  pointer-events: none;
  color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 0);
}
@keyframes roate {
  0% {
    transform: rotateZ(0);
    -ms-transform: rotateZ(0);
    -moz-transform: rotateZ(0);
    -webkit-transform: rotateZ(0);
    -o-transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
    -ms-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -o-transform: rotateZ(360deg);
  }
}
@keyframes roateBack {
  0% {
    transform: rotateZ(0);
    -ms-transform: rotateZ(0);
    -moz-transform: rotateZ(0);
    -webkit-transform: rotateZ(0);
    -o-transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(-360deg);
    -ms-transform: rotateZ(-360deg);
    -moz-transform: rotateZ(-360deg);
    -webkit-transform: rotateZ(-360deg);
    -o-transform: rotateZ(-360deg);
  }
}
</style>