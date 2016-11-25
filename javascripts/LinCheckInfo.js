window.LinCheckInfo = (function () {
    var checkinfo = function () {

        this.ifNodeExist = function (selector) {
            if (typeof selector == 'string') {
                if (document.querySelector(selector)) {
                    return true;
                } else {
                    console.log('找不到节点' + selector);
                    return false;
                }
            }
            if (selector instanceof Array) {
                for (var i = selector.length; i--;) {
                    if (!document.querySelector(selector[i])) {
                        console.log('找不到节点' + selector[i]);
                        return false;
                    }
                }
                return true;
            }
        }
        this.init = function (info) {
            if (!this.ifNodeExist([info.trigger, info.form])) {
                return false;
            }

            this.body = document.querySelector('body'),
            this.submit = document.querySelector(info.trigger),
            this.form = document.querySelector(info.form);

            this.submit.addEventListener('click', this.checkInfo.bind(this));
            this.form.addEventListener('click', this.removeWarn.bind(this));
        }
    };
    checkinfo.prototype = {
        checkInfo: function (event) {

            if (!this.ifNodeExist(['.js-input'])) {
                return false;
            }

            var form = this.form,
                inputs = form.querySelectorAll('.js-input'),
                i = 0,
                len = inputs.length,
                checkResult = true,
                pattern,
                inputValue;


            for (; i < len; i++) {
                pattern = '';
                inputValue = '';
                if (inputs[i].dataset.pattern) {
                    pattern = eval(inputs[i].dataset.pattern);
                }
                inputValue = inputs[i].value;
                if (inputValue == '' || (pattern != '' && !pattern.test(inputValue))) {
                    inputs[i].parentNode.classList.add('warn');
                    checkResult = false;
                }
            }
            if (checkResult) {
                this.senAjax(inputs);
            }
        },
        removeWarn: function (e) {
            var targetNode = e.target.parentNode;
            if (targetNode.classList.contains('warn')) {
                targetNode.classList.remove('warn');
            }
        },
        senAjax: function (inputs) {
            console.log(this.getInfo(inputs));
            console.log('验证成功');
        },
        getInfo: function (inputs) {
            var infoObject = {}, index = 0, len;
            for (len = inputs.length; index < len; index++) {
                infoObject[inputs[index].dataset.personinfo] = inputs[index].value;
            }
            return infoObject;
        }
    };
    return checkinfo;
})();


var checkinfo = new LinCheckInfo();
checkinfo.init({
    trigger: '#js-personinfo-submit',
    form: '#js-myinfo-ul'
});








