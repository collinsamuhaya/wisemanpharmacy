import {createStore} from "vuex";

const tmpServices=[
  {
     id:1,
     name:"Kitchen Items",
     description:"We sell the best kitchen items",
     categoryimage:
     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      created_at:"2021-12-20 18:00:00",
     created_by:"Collins",
     deleted_at:"2021-12-20 18:00:00",
     deleted_by:"Collins",
  },
  {
    id:2,
    name:"Beddings",
    description:"For the best bedding come to shebuShop",
    categoryimage:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     created_at:"2021-12-20 18:00:00",
    created_by:"Collins",
    deleted_at:"2021-12-20 18:00:00",
    deleted_by:"Collins",
 },
 {
  id:3,
  name:"Seats",
  description:"We offer a wide range of seats",
  categoryimage:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   created_at:"2021-12-20 18:00:00",
  created_by:"Collins",
  deleted_at:"2021-12-20 18:00:00",
  deleted_by:"Collins",
},
{
  id:4,
  name:"Electic Equipments",
  description:"check out our electrocals",
  categoryimage:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   created_at:"2021-12-20 18:00:00",
  created_by:"Collins",
  deleted_at:"2021-12-20 18:00:00",
  deleted_by:"Collins",
}
]
const store = createStore({
    state:{
       user: {
         data:{name:"Zura",
          userimage:"",
          email:"",
         },
         token:null
            },
        services: {tmpServices}  ,
          },
    getters:{},
    actions:{},
    mutations:{},
    modules:{}
    })
    export default store;
    