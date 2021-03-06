import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: r => require.ensure([], () => r(require('../components/Example')), 'test'),
            children: [
                {
                    path: '/',
                    name: 'aaa',
                    component: r => require.ensure([], () => r(require('../components/aaa')), 'test'),
                },
                {
                    path: '/test',
                    name: 'test',
                    component: r => require.ensure([], () => r(require('../components/test')), 'test')
                },
            ]
        },
    ]
})
