const UserRepository = require('../repository/user-repository');


class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(data) {
        try {
            const response = await this.userRepository.create(data);
            return response;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await this.userRepository.destroy(id);
            return response;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw error;
        }
    }

    async getAllUser(){
            try {
                const response = await this.userRepository.getAllUser();
                return response;
            } catch (error) {
                console.log('something went wrong in service layer');
                throw error;
            }
        }

        async get(shortid){
            try {
                const response = await this.userRepository.get(shortid);
                return response;
            } catch (error) {
                console.log('something went wrong in service layer');
                throw error;
            }
        }
}

module.exports = UserService;