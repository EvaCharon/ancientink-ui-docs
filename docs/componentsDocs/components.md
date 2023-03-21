---
sidebar:auto
---
# 组件总览
## 按钮 Button  

  常规按钮  

  <AncientinkButton text="按钮" height="50px" fill preventClick/>
  <AncientinkButton text="按钮" height="50px" danger fill  />
  <AncientinkButton text="按钮" height="50px" danger  />
  <AncientinkButton text="按钮" height="50px"/>
    


  不可用按钮  

  <AncientinkButton text="按钮"  height="50px" fill disabled  />
  <AncientinkButton text="按钮"  height="50px" danger fill disabled  />
  <AncientinkButton text="按钮"  height="50px" danger disabled  />
  <AncientinkButton text="按钮"  height="50px" disabled  />
    

  加载中的按钮  

  <AncientinkButton text="确定" height="50px" loading fill preventClick  />
  <AncientinkButton text="取消" height="50px" loading danger fill  />
  <AncientinkButton text="取消" height="50px" loading danger  />
  <AncientinkButton text="按钮" height="50px" loading  />
    

  不可用的加载按钮  

  <AncientinkButton text="按钮" height="50px" loading fill disabled  />
  <AncientinkButton text="按钮" height="50px" loading danger fill disabled  />
  <AncientinkButton text="按钮" height="50px" loading danger disabled  />
  <AncientinkButton text="按钮" height="50px" loading disabled />



## 开关 Switch  

  常规开关  

  <ancientink-switch textLeft="选项1" textRight="选项2"/>
    
  不可用开关  

  <ancientink-switch  textLeft="选项1" disabled/>



## 标签 Label

  常规标签

  <AncientinkLabel color="red" fill/>
  <AncientinkLabel color="red" />
  <AncientinkLabel color="black" fill/>
  <AncientinkLabel color="black" /> 


## 输入框 Input
  常规输入框
  <AncientinkInput buttonValue="提交" />
  不可用输入框
  <AncientinkInput  disabled/>
  
  
## 单选框 Input
  红色单选框
  <AncientinkRadio :options="['选项1','选项2','选项3']" color="red"/>
  黑色单选框
  <AncientinkRadio :options="['选项1','选项2','选项3']"/>

## 多选框 CheckBox 
  红色多选框
  <AncientinkCheckboxGroup  :options="['选项1','选项2','选项3']" color="red"/>
  黑色多选框
  <AncientinkCheckboxGroup  :options="['选项1','选项2','选项3']"/>

## 下拉框 Selector
  点击选择
   <ancientink-selector />
      
