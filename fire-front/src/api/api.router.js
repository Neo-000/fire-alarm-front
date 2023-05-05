const MainAPI = {
    services:'services/',
    category:'category/',
    order:'order/',
    bid:'bid/'

}

const api_router ={
    category:{
        add:MainAPI.category + 'add',
        update:MainAPI.category +'update',
        delete:MainAPI.category +'delete',
        name:MainAPI.category +'getname',
        get_services:MainAPI.category +'getservices',
        all:MainAPI.category +'getall'

    },
    services:{
        add:MainAPI.services + 'add',
        update:MainAPI.services + 'update',
        update_category:MainAPI.services + 'update/category',
        delete:MainAPI.services + 'delete',
        all:MainAPI.services + 'getall'
    }
}

export {api_router}