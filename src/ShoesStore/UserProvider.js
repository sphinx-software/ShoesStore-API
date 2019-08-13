export default class UserProvider {
    async provide({ payload }) {
        return {
            ...payload,
            by: 'custom IDP'
        }
    }
}
