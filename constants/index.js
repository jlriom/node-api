module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
        PRODUCT_CREATED: 'Product created successfully',
        PRODUCT_FETCHED: 'Product fetched successfully',
        PRODUCT_UPDATED: 'Product updated successfully',
        PRODUCT_DELETED: 'Product deleted successfully',
        PRODUCT_NOT_FOUND : 'Product not found'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Login Success',
        DUPLICATED_EMAIL: 'User already exsit with given email',
        USER_NOT_FOUND: 'User not found',
        INVALID_PASSWORD: 'Incorrect Password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Bad Request',
        TOKEN_MISSING: 'Token missing from header'
    },
    databaseMessage: {
        INVALID_ID: 'Invalid Id'
    }
}