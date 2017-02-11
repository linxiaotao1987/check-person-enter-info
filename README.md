# check-person-enter-info
检查用户输入的内容是否合法

使用方法：先引入LinCheckInfo.js。然后new一个对象出来，调用它的init方法。
这个方法需要传入一个对象，对象的属性trigger是提交按钮的id，form是包裹input的祖先元素，你需要把input都放在这个元素里面。
这两个id提供给js用于找到dom节点；

引入js：
```
<script src="javascripts/LinCheckInfo.js"></script>
```

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

需要检测内容的input要给他一个class ‘js-input’；
input的data-personinfo和input的value组成键值对，用来给后面的ajax的data对象赋值；
input的data-pattern设置一个正则，用来要检测内容

如果检测的input内容不符合提供的正则或者为空，js会在input的父元素加上一个class ‘warn’，点击input将移除这个class，样式自己定义。




















