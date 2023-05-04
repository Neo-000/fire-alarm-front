import {api} from '@/api/api.js'

export const TestApi = {
    async getTest(){
        // try{
            const result = await api.get('test');
            return [null, result];
        // } catch (err){
        //     return [err,null]
        // }
    }
}

// export default {
//     fetchPosts() {
//         return api().get('test')
//     }
// }