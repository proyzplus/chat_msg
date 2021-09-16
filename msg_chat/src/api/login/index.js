/*
 * @Author: proyzplus
 * @Date: 2021-09-11 00:22:09
 * @LastEditors: proyzplus
 * @LastEditTime: 2021-09-11 01:06:34
 * @Description: Description
 */
import axios from 'axios';

const login = {
    async getData() {
        return axios.get('/api', {
            params: { limit: 0, size: 10 }
        });
    }
};

export default login;