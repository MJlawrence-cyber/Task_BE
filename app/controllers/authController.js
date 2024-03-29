const authService = require('../services/authServices');

//login method
const login = async (req, res) => {
    try{
        const { email, password} = req.body
        const loginResp = await authService.loginUser(email, password);
        res.status(200).json({
            message: "User logged in successfully",
            status: true,
            token: loginResp.token,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            statuss: false,
        });
    }
}

//register method
const register = async (req, res) => {
    try{
        const {body} = req;
        const registerResp = await authService.registerUser(body);
        res.status(201).json({
            message: "User registered successfully",
            status: true,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            statuss: false,
        });
    }
}



module.exports ={register, login}