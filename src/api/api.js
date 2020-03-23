import { fetchPost, fetchGet} from '@/utils/http.js'

export function getList (params){
    return fetchGet(url, params)
}