class ApiError extends Error {
    constructor(status, message, token) {
        super();
        this.status = status;
        this.message = message;
        this.token = token;
    }

    static notFound(message, token = null) {
        return new ApiError(404, message, token);
    }

    static forbiden(message, token = null) {
        return new ApiError(403, message, token);
    }

    static badRequest(message, token = null) {
        return new ApiError(500, message, token);
    }
}

module.exports = ApiError;