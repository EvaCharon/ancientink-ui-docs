<template>
  <div
    :class="labelClass"
    @click="clickHandler"
    :style="{
      height: height,
      lineHeight: height,
      fontSize: fontSize,
      '--hoverPadding': hover ? '0 25px 0 25px' : '0 20px 0 20px',
    }"
  >
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "AncientinkLabel",
  data() {
    return {};
  },
  computed: {
    fontSize() {
      return parseInt(this.height) / 2 + "px";
    },
    labelClass() {
      var rtn = "aui-label ";
      if (this.color === "red") {
        rtn += "label-red";
      } else if (this.color === "black") {
        rtn += "label-black";
      } else if (this.fill) {
        rtn += "label-black-fill";
        return rtn;
      }

      if (this.fill) {
        rtn += "-fill";
      }
      return rtn;
    },
  },
  props: {
    text: {
      type: String,
      default:"标签"
    },
    height: {
      type: String,
      default: "30px",
    },
    color: {
      type: String,
      default: "black",
    },
    fill: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: true,
    },
    clickHandler: {
      type: Function,
      default: function(){},
    },
  },
};
</script>

<style>
.aui-label {
    display:inline-block;
    text-align: center;
    padding:0 20px 0 20px;
    height:80px;
    line-height:80px;
    background-image:url(../assets/images/label5.png);
    background-size: 100% 100%;
    color:black;
    font-family:'ygq';
    font-size:40px;
    font-weight:normal;
    --hoverPadding:0 25px 0 25px;
}
.aui-label:hover {
        padding:var(--hoverPadding);
    }
.label-red {
    background-image:url(../assets/images/label4.png);
    color: rgb(136,0,27);
}
.label-black {
    background-image:url(../assets/images/label5.png);
    color: black;
}
.label-red-fill {
    background-image:url(../assets/images/label7.png);
    color: white;
}
.label-black-fill {
    background-image:url(../assets/images/label8.png);
    color: white;
}
</style>