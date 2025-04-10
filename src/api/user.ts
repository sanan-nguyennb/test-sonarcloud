import axiosInstance from './axiosInstance';

const getUser = async () => {
    try {
        const response = await axiosInstance.get('/user');
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
        // Error is already handled by the interceptor
    }
};

const doSomething = () => {
    try {
console.log('do something')
    } catch(e) {

    }
}

export { getUser };
