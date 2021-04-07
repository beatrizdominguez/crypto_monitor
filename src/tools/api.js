const axios = require('axios');

const API_URL = 'https://api.coingecko.com/api/v3'


const API_ENDPOINTS = {
    PING: '/ping',
    COIN_LIST: '/coins/list',
    COIN_DETAIL: '/coins/${coinId}',
}

class ApiClient {
    //   constructor () {
    //     this.client = API_URL
    //   }

    async pingConnection() {
        return await axiosCall(API_ENDPOINTS['PING'])
    }

    async getAllCoins() {
        const endpoint = API_ENDPOINTS['COIN_LIST']
        return await axiosCall(endpoint)
    }

    async getCoin(coinId) {
        const endpoint = API_ENDPOINTS['COIN_DETAIL'].replace('${coinId}', coinId)
        return await axiosCall(endpoint)
    }
}

async function axiosCall(endpoint, params, callType = 'get') {
    try {
        const url = API_URL + endpoint
        console.log({ url })

        const response = await axios.get(url)
        return response.data
    } catch (error) {
        throw error
    }
}

module.exports = new ApiClient()
