const { User} = require('../models');
const shortid = require('shortid');


class UserRepository {
    async create(data){
        try {
            const shortId = shortid();
            const user = await User.create({
                shortUrl: shortId,
                redirectUrl: data.url
            });
            return user;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw error;
        }
    }

    async destroy(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw error;
        }
    }

    async getAllUser(){
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw error;
        }
    }

    async get(shortid){
        try {
            const users = await User.findByPk(shortid);
            return users;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw error;
        }
    }
}

module.exports = UserRepository;