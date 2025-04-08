import jwt from 'jsonwebtoken';
// import ApiError from '../utils/ApiError';
import httpStatus from 'http-status';
import ApiError from '../error/handleApiError.js';
// import ApiError from '../error/handleApiError.js';

// Middleware to verify token and set req.user
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token

console.log(token);


    if (!token) {
        return next(new ApiError(httpStatus.UNAUTHORIZED, 'Authentication token is missing'));
    }

    try {

        const decoded = jwt.verify(token, 'key123');
        console.log(decoded,
            'asdfg'
        );
        
        req.user = decoded;
        next();
    } catch (error) {
        next(new ApiError(httpStatus.UNAUTHORIZED, 'Invalid or expired token'));
    }
};

export default authMiddleware;
