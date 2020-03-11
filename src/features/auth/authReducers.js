const login = (state, action) => {
    return {
        ...state,
        token: ' test token',
        expires: 1000000,
        role: {
            type_id: 1,
            description: 'Administrator'
        }
    }
};

const logout = (state, action) => {
    return {
        ...state,
        token: null,
        expires: null,
        role: null
    }
};

const initApp = (state, action) => {
    console.log('Auth Controller => ', action);
};

export default {
    login,
    logout,
    initApp
}
