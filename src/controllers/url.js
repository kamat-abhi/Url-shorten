const UserService = require('../service/user-service');
const userService = new UserService();

const  generateNewShortUrl = async (req, res)  => {
    try {
        const user = await userService.create(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: 'short url created successfully',
            err: {}
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            err: error,
            message: 'not able to create short url',
            success: false
        })
    }
}
const getAll = async (req, res) => {
    try {
        const users = await userService.getAllUser();
        return res.status(201).json({
            data: users,
            success: true,
            message: 'successfully fetched all cities',
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            err: error,
            message: 'not able to find a city',
            success: false
        })
    }
}

const get = async (req, res) => {
    try {
        const users = await userService.get(req.params.shortid);
        console.log(users);
        return res.redirect(users.redirectUrl);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            err: error,
            message: 'not able to find a city',
            success: false
        })
    }
}

module.exports = {
    generateNewShortUrl,
    getAll,
    get
}