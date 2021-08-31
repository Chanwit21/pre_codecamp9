import axios from 'axios';
import localStorageService from '../services/localStorageService';
import { notification } from 'antd';

axios.defaults.baseURL = 'http://localhost:8000';

axios.interceptors.request.use(
  (config) => {
    if (config.url.includes('/login') || config.url.includes('/register')) return config;

    const token = localStorageService.getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

axios.interceptors.request.use(
  (response) => response,
  (err) => {
    if (err.response?.status === 401) {
      localStorageService.removeToken();
      //reload เพื่อให้หน้า App มันไป check role ใหม่อีกทีแล้ว เอามาใช้ reload ไม่เหมือน refresh หน้า
      window.location.reload();

      notification.error({
        message: 'กรุณาเข้าสู่ระบบใหม่',
      });
    }
    return Promise.reject(err);
  }
);

export default axios;
