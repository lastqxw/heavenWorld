import Main from '@/views/Main.vue';
import Cookies from 'js-cookie';
import API from '@/views/API/API.js';
const api = new API();
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
var token=Cookies.get("token");
var app1= [
    {
        id:1,
        path: '/group',
        icon: 'ios-folder',
        name: 'group',
        title: '系统权限设置',
        component: Main,
        children: [
            {
                id:2,
                path: 'page1',
                icon: 'locked',
                name: 'page1',
                title: '权限管理',
                component: resolve => { require(['@/views/group/page1/page1.vue'], resolve); }
            },
            {
                id:3,
                path: 'page2',
                icon: 'person',
                name: 'page2',
                title: '角色管理',
                component: resolve => { require(['@/views/group/page2/page2.vue'], resolve); }
            },
            {
                id:4,
                path: 'page3',
                icon: 'network',
                name: 'page3',
                title: '组织管理',
                component: resolve => { require(['@/views/group/page3/page3.vue'], resolve); }
            }
        ]
    },
    {
        id:5,
        path: '/search',
        icon: 'ios-search',  
        title: '搜索管理',
        name: 'page',
        component: Main,
        children: [
            { 
                id:15,
                path: 'index',
                icon:"ios-search",
                title: '搜索管理', 
                name: 'search_index', 
                component: resolve => { require(['@/views/search/search.vue'], resolve); } 
            },
            {
                id:16,
                path: 'qushi',
                icon: 'network',
                name: 'qushi',
                title: '搜索统计',
                component: resolve => { require(['@/views/search/qushi/qushi.vue'], resolve); }
            },
            {
                id:17,
                path: 'pbc',
                icon: 'network',
                name: 'pbc',
                title: '搜索屏蔽词',
                component: resolve => { require(['@/views/search/pbc/pic.vue'], resolve); }
            }
        ]
    },
    {
        id:6,
        path: '/panorama',
        icon: 'ios-world',
        title: '全景管理',
        name: 'panorama',
        component: Main,
        children: [
            { path: 'index', title: 'Page', name: 'panorama_index', component: resolve => { require(['@/views/panorama/panorama.vue'], resolve); } }
        ]
    },
    {
        id:7,
        path: '/information',
        icon: 'ios-information',
        title: '资讯管理',
        name: 'information',
        component: Main,
        children: [
            { path: 'index', title: 'Page', name: 'information_index', component: resolve => { require(['@/views/information/information.vue'], resolve); } }
        ]
    },
    {
        id:8,
        path: '/user',
        icon: 'ios-people',
        title: '用户管理',
        name: 'user',
        component: Main,
        children: [
            { path: 'index', title: 'Page', name: 'user_index', component: resolve => { require(['@/views/user/user.vue'], resolve); } }
        ]
    },
    {
        id:9,
        path: '/third',
        icon: 'ios-cog',
        title: '第三方平台管理',
        name: 'third',
        component: Main,
        children: [
            { path: 'index', title: 'third', name: 'third_index', component: resolve => { require(['@/views/third/third.vue'], resolve); } }
        ]
    },
    {
        id:10,
        path: '/robot',
        icon: 'outlet',
        title: '机器人管理',
        name: 'robot',
        component: Main,
        children: [
            { path: 'index', title: 'robot', name: 'robot_index', component: resolve => { require(['@/views/robot/robot.vue'], resolve); } }
        ]
    },
    {
        id:11,
        path: '/festival',
        icon: 'calendar',
        title: '节日管理',
        name: 'festival',
        component: Main,
        children: [
            { path: 'index', title: 'festival', name: 'festival_index', component: resolve => { require(['@/views/festival/festival.vue'], resolve); } }
        ]
    },
    {
        id:12,
        path: '/temple',
        icon: 'gear-b',
        title: '讲堂管理',
        name: 'temple',
        component: Main,
        children: [
            { path: 'index', title: 'temple', name: 'temple_index', component: resolve => { require(['@/views/temple/temple.vue'], resolve); } }
        ]
    },
    {
        id:13,
        path: '/Illegal',
        icon: 'alert-circled',
        title: '违规管理',
        name: 'Illegal',
        component: Main,
        children: [
            { path: 'index', title: 'Illegal', name: 'Illegal_index', component: resolve => { require(['@/views/Illegal/Illegal.vue'], resolve); } }
        ]
    },
    {
        id:14,
        path: '/other',
        icon: 'ios-paper',
        title: '其他设置',
        name: 'other',
        component: Main,
        children: [
            { path: 'index', title: 'other', name: 'other_index', component: resolve => { require(['@/views/other/other.vue'], resolve); } }
        ]
    }
];
export const appRouter =app1;
// api.get(`banaworld/staff/userPerm?token=${token}`)
//     .then(function (res) {
//         console.dir(res);
//         if(res.data.code=="100000"){
//             var app2=res.data.data;
//             console.dir(app2);
//             console.dir(app1);
//             var id="";
//             var path="";
//             var icon="";
//             var name="";
//             var title="";
//             var children=[]; 
//             for(var i=0;i<app2.length;i++){
//                 for(var j=0;j<app1.length;j++){
//                     console.log(i,j)
//                     if(app1[j].id==app2[i].permId ){
//                         console.info(JSON.stringify(app1[j]))
//                         appRouter.push(app1[j])
//                     }
//                 }
                
//             }
            
//         }else{
//             alert(res.data.message);
//         }
//     })
//     .catch(function (error) {
//         console.dir(error);
//     });

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
