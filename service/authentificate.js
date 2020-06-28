import Api from'@/service/api'
        export default {
    authentificate(credentials){
        return Api().post('authentificate',credentials)
    }
        }