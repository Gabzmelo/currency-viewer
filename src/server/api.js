import axios from 'axios'

const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json'
});

export default {
    getCoins() {
        return api.get('/last/USD-BRL,EUR-BRL,BTC-BRL')
    }
};