
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import SocialNetworkPostManager from "./components/listers/SocialNetworkPostCards"
import SocialNetworkPostDetail from "./components/listers/SocialNetworkPostDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/socialNetworks/posts',
                name: 'SocialNetworkPostManager',
                component: SocialNetworkPostManager
            },
            {
                path: '/socialNetworks/posts/:id',
                name: 'SocialNetworkPostDetail',
                component: SocialNetworkPostDetail
            },



    ]
})
