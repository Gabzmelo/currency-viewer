<template>
  <TradingTable :coins="coins"/>
</template>

<script>
import TradingTable from './components/TradingTable.vue';
import api from '@/server/api.js';
import { onMounted, reactive, toRefs } from 'vue';

export default {
  name: 'App',
  components: {
    TradingTable
  },

  setup() {

    const data = reactive ({
      coins: { }
      // chartData: { }
    });

    onMounted(async() => {
      const response = await api.getCoins();
      data.coins = response.data;

      //populate chart with api data
      // const getChartData = {
      //   labels: [ '08:15:17', '09:14:13', '10:07:17', '11:23:03', '12:14:27', '13:14:09', '14:18:14' ],
      //   datasets: [
      //     {
      //       label: data.coins.USDBRL.code,
      //       backgroundColor: '#f25e3d',
      //       data: data.coins.USDBRL.ask,
      //       borderColor: "#f25e3d"
      //     },
      //     {
      //       label: data.coins.EURBRL.code,
      //       backgroundColor: '#f6c95b',
      //       data: data.coins.EURBRL.ask,
      //       borderColor: "#f6c95b"
      //     },
      //     {
      //       label: data.coins.BTCBRL.code,
      //       backgroundColor: '#8c6dd6',
      //       data: data.coins.EURBRL.ask,
      //       borderColor: "#8c6dd6"
      //     } 
      //   ],
      // }
      // this.chartData.datasets = getChartData.datasets
    })

    return { ...toRefs(data) }
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style>
@import './assets/css/styles.min.css';
#app {
  width: 100%;
}
</style>
