<template>
  <div
    class="aui-input-outter"
    :style="{
      pointerEvents: disabled ? 'none' : 'auto',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.6 : 1,
    }"
  >
    <div class="aui-input" :style="{ height: height, width: width }">
      <div class="aui-input-bg"></div>
      <input type="text" v-model="content" @input="changeContent" />
    </div>
    <ancientink-button :text="buttonValue" :height="height" @click="submit" />
  </div>
</template>

<script>
import AncientinkButton from './AncientinkButton.vue'
export default {
  name: "AncientinkInput",
  components:{
    AncientinkButton,
  },
  data() {
    return {
      content: this.placeholder,
    };
  },
  computed: {
    width() {
      return parseInt(this.height) * 6 + "px";
    },
    fontSize() {
      return parseInt(this.height) / 2 + "px";
    },
  },
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    height: {
      type: String,
      default: "30px",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    submit: {
      type: Function,
      default: function(){},
    },
    buttonValue: {
      type: String,
      default: "提交",
    },
  },
  methods: {
    changeContent() {
      this.$emit("update:modelValue", this.content);
    },
  },
  mounted() {
    this.$emit("update:modelValue", this.content);
  },
};
</script>

<style scoped>
.aui-input {
    display:inline-block;
    position:relative;
    height:30px;
    width:180px;
    vertical-align: middle;
}
.aui-input-bg {
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        height:100%;
        width:100%;
        background-image: url('../assets/images/label11.png');
        background-size:100% 100%;
        opacity:0.6;
    }    
.aui-input input {
    border:none;
    outline:none;
    position:relative;
    top:15%;
    left:1%;
    height:60%;
    width:87%;
    border:transparent;
    font-family: 'ygq';
    color:white;
    background-color:rgba(255,255,255,0);

}
input:focus{
    border:none;
    outline:none;
    position:relative;
    top:10%;
    left:3%;
    height:60%;
    width:90%;
    border:transparent;
    font-family: 'ygq';
  background-color:rgba(255,255,255,0.5);
  color:black;
}
</style>