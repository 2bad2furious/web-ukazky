import { defineAppSetup } from '@slidev/types';
import { SlidevContext } from '@slidev/client/modules/context';
import { injectionSlidevContext} from '@slidev/client/constants';

import {Directive, DirectiveBinding, InjectionKey} from 'vue';

function inject<T = unknown>(dir: DirectiveBinding<any>, key: InjectionKey<T> | string): T | undefined {
    return (dir.instance?.$ as any).provides[key as any]
}

const hideInactiveClass = "hidden";

const showOn: Directive<HTMLElement> = {
    beforeUpdate: (el, binding: DirectiveBinding<number>, vnode) => {
        const slidev: SlidevContext = inject(binding, injectionSlidevContext);

        const showOnClicks = binding.value;
        const currentClicks = slidev.nav.clicks as any as number;

        const shouldShow = showOnClicks === currentClicks;
        el.classList.toggle(hideInactiveClass, !shouldShow);

        //commentNode(el, vnode)
    },
    unmounted: (el) => el.classList.toggle(hideInactiveClass, false)
}
/**
 * Create comment node
 *
 * @private
 * @author https://stackoverflow.com/questions/43003976/a-custom-directive-similar-to-v-if-in-vuejs#43543814
 */
function commentNode(el, vnode) {
    const comment = document.createComment(' ')

    Object.defineProperty(comment, 'setAttribute', {
        value: () => undefined
    })

    vnode.text = ' '
    vnode.elm = comment
    vnode.isComment = true
    vnode.context = undefined
    vnode.tag = undefined
    vnode.data.directives = undefined

    if (vnode.componentInstance) {
        vnode.componentInstance.$el = comment
    }

    if (el.parentNode) {
        el.parentNode.replaceChild(comment, el)
    }
}

export default defineAppSetup(({ app, router }) => {
    // Vue App
    app.directive(`show-on`, showOn)
})
