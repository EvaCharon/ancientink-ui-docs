<template>
    <div class="aui-checkbox" @click="handleCheck" 
        :style="{color:color==='red'?'rgb(136,0,27)':color,
                pointerEvents:disabled?'none':'auto',
                cursor:disabled?'default':'pointer',
                opacity:disabled?0.6:1}">
        <div :class="checkboxClass"></div>
        <div class='aui-checkbox-label'>{{message}}</div>
    </div>
</template>

<script>
export default {
    name:'AncientinkCheckbox',
    computed:{
        checkboxClass(){
            var rtn='aui-checkbox-input '
            if(this.color==='red'){
                rtn+='bgRed'
            }else if(this.color==='black'){
                rtn+='bgBlack'
            }
            if(this.value){
                rtn+= '-checked'
            }
            return rtn
        }
    },
    props:{
        message:{
            type:String,
            default:'多选框'
        },
        modelValue: {
            type:Boolean,
            default:false
        },
        color: {
            type: String,
            default:"black"
        },
        disabled: {
            type: Boolean,
            default:false
        },
        value:{
            type: Boolean,
            default:false
        }
        
    },
    methods:{
        handleCheck(){
            this.$emit('update:modelValue',!this.modelValue)
        }
    }
}
</script>

<style>
.aui-checkbox {
    display: inline-block;
    height:50px;
    line-height:50px;
    padding: 5px 5px 5px 5px;
    font-family:'ygq';
    
    
}
.aui-checkbox-input {
        float:left;
        width:15px; 
        height:15px;
        margin-top:17px;
        margin-right:10px;
    }
    .aui-checkbox-label {
        height:50px;
        float:left;
        line-height: 50px;
    }
.bgBlack {
    background-image: url('../assets/images/label5.png');
    background-size:100% 100%;
    
}
.bgBlack-checked {
        background-image: url('../assets/images/label8.png');
        background-size:100% 100%;
    }
.bgRed {
    background-image: url('../assets/images/label4.png');
    background-size:100% 100%;

}
    .bgRed-checked {
        background-image: url('../assets/images/label7.png');
        background-size:100% 100%;
    }
</style>