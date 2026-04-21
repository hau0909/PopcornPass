const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");

const register = async (name, email, password) => {
    // Validate inputs
    if (!name || name.trim().length === 0 || name.length > 20) {
        throw new Error("Name must be less than 20 characters");
    }
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email || !emailRegex.test(email)) {
        throw new Error("Please enter a valid email address (gmail)");
    }
    if (!password || password.length < 6) {
        throw new Error("Password must be at least 6 characters");
    }

    // Check if user exists
    const existUser = await User.findOne({ email });
    if (existUser) {
        throw new Error("User already exists");
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({ name, email, password: hashPassword });
    return user;
};

const login = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return {
        user: { id: user._id, name: user.name, email: user.email },
        token
    };
};

module.exports = { register, login };