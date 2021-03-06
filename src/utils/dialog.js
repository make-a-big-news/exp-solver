/**
 * dialog 会话框插件
 *
 * 使用: this.$dialog(title, content, positive, close, onPositive, onClose)
 */

import dialog from '@/components/common/dialog';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
}

plugin.installed = false;
export default function plugin(Vue) {
    if (plugin.installed) {
        return
    }
    // 创建一个子类挂载在div上
    let component = Vue.extend(dialog);
    let vm = new component({ el: document.createElement('div') });
    // 添加到body尾部
    document.body.appendChild(vm.$el);
    function showDialog({ title = '提示', content = '', positiveTxt = '确定', closeTxt = '', onPositive }) {
        vm.title = title;
        vm.content = content;
        vm.positiveTxt = positiveTxt;
        vm.closeTxt = closeTxt;
        vm.onPositive = onPositive || function () {
            };
        vm.visible = true
    }

    window.addEventListener('hashchange', () => {
        if (vm.visible) {
            vm.visible = false
        }
    }, false);

    Vue.prototype.$showDialog = showDialog;
    plugin.installed = true;
}


