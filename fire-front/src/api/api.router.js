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
        all:MainAPI.services + 'getall',
        getById:MainAPI.services + 'get_by_id',
        getByCategoryId:MainAPI.services + 'get_by_category_id'
    },
    bid:{
        create:MainAPI.bid + 'create',
        all:MainAPI.bid + 'all',
        delete:MainAPI.bid + 'delete',
        delete_all:MainAPI.bid + 'delete_all',
        create:MainAPI.bid + 'create'
        
    },
    order:{
        create:MainAPI.order + 'create',
        all:MainAPI.order + 'all',
        delete:MainAPI.order + 'delete',
        delete_all:MainAPI.order + 'delete_all',
        update:MainAPI.order + 'update',
    }
}

export {api_router}