# check-person-enter-info
检查用户输入的内容是否合法

原生js写的用于检查用户输入的一个对象，只需要新建一个对象然后init方法传入要检查的form和触发检查时机的按钮id就可以。

使用方法：
```
var checkinfo = new LinCheckInfo();
checkinfo.init({
    trigger: '#js-personinfo-submit',
    form: '#js-myinfo-ul'
});
```

html结构
```
<ul id="js-myinfo-ul">
    <li >
        <span >QQ号码：</span>
        <input type="text" class="js-input"  data-pattern="/^[0-9]{5,11}$/" data-personinfo="QQ" />
    </li>
    <li>
        <span>电话号码：</span>
        <input type="text" class="js-input" data-personinfo="tel" data-pattern="/^[0-9]{11}$/"/>
    </li>
    <li>
        <span>邮寄地址：</span>
        <input type="text" class="js-input" data-personinfo="address"/>
    </li>
    <li>
        <span>姓名：</span>
        <input type="text" class="js-input" data-personinfo="name"/>
    </li>
</ul>
<a  data-formid="#js-myinfo-ul" id="js-personinfo-submit">确认</a>
```

首先，包裹input的y父元素或祖先元素以及提交按钮需要一个id, 这两个id提供给js用于找到dom节点；
每一个需要检测内容的input都需要一个class ‘js-input’,固定名字，否则你就要修改js里的调用名字；
input都需要提供一个名字data-personinfo,这个名字配合input的value组成键值对，用来给后面的ajax的data对象赋值；
input的data-pattern用来声明要检测的内容需要符合的条件

引入js：
```
<script src="javascripts/LinCheckInfo.js"></script>
```

如果检测的input内容不符合提供的正则或者为空，js会在input的父元素加上一个class ‘warn’，点击input将移除这个class，样式自己定义。




















