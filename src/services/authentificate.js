import Api  from '@/servive/api/api'
export default {
    authentificate (credentials){
        return Api().post('authentificate',credentials)
    }
}




