import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home";
import Details from "../components/goods/Details";
import Goods_Display from "../components/goods/Goods_Display";
import Cart from "../components/Cart";
import Order from "../components/order/Order";
import Order_Cart from "../components/order/Order_Cart";
import Order_Address from "../components/order/Order_Address";
import Order_Ok from "../components/order/Order_Ok";
import User from "../components/user/User";
import User_Info from "../components/user/User_Info";
import Index from "../components/user/Index";
import User_Order from "../components/user/User_Order";
import User_Security from "../components/user/User_Security";
import User_Address from "../components/user/User_Address";
import User_Evaluate from "../components/user/User_Evaluate";
import User_Collection from "../components/user/User_Collection";
import User_Refund from "../components/user/User_Refund";
import Customer_Service from "../components/user/Customer_Service";
import Admin_Common from "../components/admin/Admin_Common";
import Admin_Index from "../components/admin/Admin_Index";
import System_Set from "../components/admin/system/System_Set";
import User_Manage from "../components/admin/users/User_Manage";
import Goods_Manage from "../components/admin/goods/Goods_Manage";
import Cate_Manage from "../components/admin/cate/Cate_Manage";
import Order_Manage from "../components/admin/order/Order_Manage";
import LunBo from "../components/admin/system/LunBo";
import Comment from "../components/admin/comment/Comment";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Admin_Security from "../components/admin/system/Admin_Security";
import User_Add from "../components/admin/users/User_Add";
import Login from "../components/Login";
import Register from "../components/register/Register";
import Commom from "../components/register/Commom";
import Register_Active from "../components/register/Register_Active";
import Register_Ok from "../components/register/Register_Ok";
import Goods_Add from "../components/admin/goods/Goods_Add";
import User_Update from "../components/admin/users/User_Update";
import Goods_Update from "../components/admin/goods/Goods_Update";
import Pay_Ok from "../components/pay/Pay_Ok";
import Order_Detail from "../components/admin/order/Order_Detail";
import Admin_Login from "../components/admin/Admin_Login";
import Search from "../components/common/Search";
import Mail_Set from "../components/admin/system/Mail_Set";
import Pay_Set from "../components/admin/system/Pay_Set";
import User_OrderDetails from "../components/user/User_OrderDetails";
import Error from "../components/common/Error";
import User_Logistics from "../components/user/User_Logistics";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/search',
      name: 'Search',
      component:Search,
      meta: { title: "????????????" }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: "????????????" }
    },
    {
      path: '/common',
      name: 'common',
      component: Commom,
     children:[
       {
         path: '/register',
         name: 'reg',
         component: Register,
         meta: { title: "????????????"
         }
       },
       {
         path: '/reg_active',
         name: 'reg_active',
         component: Register_Active,
         meta: { title: "????????????"
         }
       },
       {
         path: '/reg_ok',
         name: 'reg_ok',
         component: Register_Ok,
         meta: { title: "????????????"
         }
       },
     ]
    },

    //??????????????????
    {
      path: '/mobile/display',
      name: 'Display',
      component: Goods_Display,
      meta: { title: "????????????" }
    },
    //????????????
    {
      path: '/mobile/detail',
      name: 'detail',
      component: Details,
      meta: { title: "????????????" }
    },
    //?????????
    {
      path: '/user/cart',
      name: 'cart',
      component: Cart,
      meta: { requiresAuth:true ,title: "???????????????" }
    },
    // ????????????
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta: { requiresAuth:true },
      children:[
        {
          path: '/order_cart',
          component: Order_Cart,
          meta: { title: "????????????" }
        },
        {
          path: '/order_address',
          component: Order_Address,
          meta: { title: "??????????????????" }
        },
        {
          path: '/order_ok',
          component: Order_Ok,
          meta: { title: "??????????????????" }
        },
      ]
    },
    {
      path: '/pay_ok',
      component: Pay_Ok,
      meta: { title: "????????????" }
    },
    // ????????????
    {
      path: '/user_index',
      name: 'user',
      component: User,
       meta: {requiresAuth:true },
      children:[
        // ????????????
        {
          path: '/user',
          component: Index,
          meta: { title: "????????????" }
        },
        // ????????????
        {
          path: '/user/info',
          component: User_Info,
          meta: { title: "????????????" },
        },
        // ????????????
        {
          path: '/user/my_order',
          component: User_Order,
          meta: { title: "????????????" },
        },
        {
          path: '/user/order_detail',
          component: User_OrderDetails,
          meta: { title: "????????????"},
        },
        // ????????????
        {
          path: '/user/security',
          component: User_Security,
          meta: { title: "????????????"}
        },
        //????????????
        {
          path: '/user/address',
          component: User_Address,
          meta: { title: "????????????" },
        },
        //????????????
        {
          path: '/user/evaluate',
          component: User_Evaluate,
          meta: { title: "????????????" },
        },
        //????????????
        {
          path: '/user/collection',
          component: User_Collection,
          meta: { title: "????????????" },
        },
        {
          path: '/user/logistics',
          component: User_Logistics,
          meta: { title: "????????????" },
        },
        //??????
        {
          path: '/user/refund',
          component: User_Refund,
          meta: { title: "??????/??????"},
        },
        //????????????
        {
          path: '/user/service',
          component: Customer_Service,
          meta: { title: "????????????"},
        }
      ]
    },
    // ????????????
    {
      path: '/admin/login',
      component: Admin_Login,
      meta: { title: "????????????"  },
    },
    {
      path: '/ac',
      component: Admin_Common,
      children:[
        {
          path: '/admin',
          component: Admin_Index,
          meta: { title: "????????????"},
        },

        {
          path: '/admin/system_set',
          component: System_Set,
          meta: { title: "????????????" },
        },
        {
          path: '/admin/mail_set',
          component: Mail_Set,
          meta: { title: "????????????" },
        },
        {
          path: '/admin/pay_set',
          component: Pay_Set,
          meta: { title: "????????????" }
        },
        {
          path: '/admin/user_set',
          component: User_Manage,
          meta: { title: "????????????"},
        },
        {
          path: '/admin/user_add',
          component: User_Add,
          meta: { title: "??????????????????" },
        },
        {
          path: '/admin/user_update',
          component: User_Update,
          meta: { title: "??????????????????" },
        },
        {
          path: '/admin/goods_check',
          component: Goods_Manage,
          meta: { title: "??????????????????" },
        },
        {
          path: '/admin/goods_add',
          component: Goods_Add,
          meta: { title: "??????????????????" },
        },
        {
          path: '/admin/goods_update',
          component: Goods_Update,
          meta: { title: "??????????????????" },
        },
        {
          path: '/admin/cate_check',
          component: Cate_Manage,
          meta: { title: "??????????????????" },
        },
        {
          path: '/admin/order_manage',
          component: Order_Manage,
          meta: { title: "????????????" },
        },
        {
          path: '/admin/order_detail',
          component: Order_Detail,
          meta: { title: "????????????"},
        },
        {
          path: '/admin/carousel_manage',
          component: LunBo,
          meta: { title: "????????????"},
        },
        {
          path: '/admin/comment_manage',
          component: Comment,
          meta: { title: "????????????"},
        },
        {
          path: '/admin/security',
          component: Admin_Security,
          meta: { title: "????????????" }
        },
      ]
    },
    {
      path: "/404",
      name: "Error",
      component: Error
    }, {
      path: "*", // ????????????????????????????????????
      redirect: "/404"
    }
  ],
  scrollBehavior (to, from, savedPosition) { // ??????vue???????????????????????????????????????????????????
    return { x: 0, y: 0 }
  }

})

