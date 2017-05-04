/**
 * dialog 会话框插件
 *
 * 使用: this.$dialog(title, content, positive, close, onPositive, onClose)
 */

import dialog from '@/components/dialog';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

export default function plugin(Vue) { // TODO: 有Vue参数？
    if (plugin.installed) {//？有这个判断，plugin.installed是什么
        return
    }
    let component = Vue.extend(dialog);//extend?
    let vm = new component({ el: document.createElement('div') });
    document.body.appendChild(vm.$el);//???vm.$el
                            // 为啥有"="
    function showDialog({ title = '提示', content = '', positiveTxt = '确定', closeTxt = '', onPositive }) {
        vm.title = title;
        vm.content = content;
        vm.positiveTxt = positiveTxt;
        vm.closeTxt = closeTxt;
        vm.onPositive = onPositive || function () {
            };
        vm.visible = true
    }

    window.addEventListener('hashchange', () => { //hashchange是啥
        if (vm.visible) {
            vm.visible = false
        }
    }, false);

    Vue.prototype.$showDialog = showDialog;
}
