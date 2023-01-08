import axios from 'axios';
// import configureAppStore from 'Store/store';

export default function axiosClient(args = {}) {
    // const store = configureAppStore()
    // args.url = `${process.env.REACT_APP_BASE_URL}${args.url}`;
    //   const token = localStorage.getItem('access_token');
    //     const authToken = store.getState().auth.user?.token || token;
    const headers = args.headers ? args.headers : {};
    args.headers = {
        // authorization: authToken,
        ...headers,
    };
    return axios(args);
}
