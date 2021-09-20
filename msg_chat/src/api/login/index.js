/*
 * @Author: proyzplus
 * @Date: 2021-09-11 00:22:09
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-20 18:34:49
 * @Description: Description
 */
import axios from 'axios';

const login = {
    async loginUser(data) {
        return axios.get('/api/login', {
            params: data
        });
    }
};

export default login;