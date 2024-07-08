import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Contact from '../views/Contact.vue';
import Offers from '../views/Offers.vue';
import ProductOverview from '../views/ProductOverview.vue';
import ShopByCategory from '../views/ShopByCategory.vue';
import ShopByCondition from '../views/ShopByCondition.vue';
import SubmitPrescription from '../views/SubmitPrescription.vue';

import HelloWorld from '../components/HelloWorld.vue';
const routes=[ {
            path:'/',
            name:'Dashboard',
            component:HelloWorld,
            children:[{path:'/',name:'Dashboard',component:Dashboard},
                {path:'/Contact',name:'Contact',component:Contact},
                {path:'/Offers',name:'Offers',component:Offers},
                {path:'/ProductOverview',name:'ProductOverview',component:ProductOverview},
                {path:'/ShopByCategory',name:'ShopByCategory',component:ShopByCategory},
                {path:'/ShopByCondition',name:'ShopByCondition',component:ShopByCondition},
                {path:'/SubmitPrescription',name:'SubmitPrescription',component:SubmitPrescription},

              
                ]
        },
    ];
const router=createRouter({
    history:createWebHistory(),
    routes

})
export default router;
