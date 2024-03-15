<template>
  <div class="container">
    <div class="input-select">
      <label>Moeda:</label>
      <select v-model="selected">
        <option class="list-options" v-for="(coin, key) in coins" :key="key" :value="coin.ask">
          {{ coin.name }} {{ coin.code }}
        </option>
      </select>
    </div>
    <span>
      <strong>Equivalente a {{ selected }} Real Brasileiro</strong>
    </span>
    <div class="table">
      <label>Últimas cotações</label>
      <table>
        <tr>
          <th>Moeda</th>
          <th>Valor</th>
          <th>Última atualização</th>
        </tr>
        <tr v-for="(coin, key) in coins" :key="key">
          <td>{{ coin.name }} {{ coin.code }}</td>
          <td>{{ coin.ask }}</td>
          <td>{{ coin.create_date }}</td>
        </tr>
      </table>
    </div>
    <div class="chart">
      <LineChart :chartData="chartData" :chartOptions="chartOptions" />
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';
export default {
  name: 'TradingTable',
  props: {
    coins: {
      type: Object,
      required: true
    }
  },
  components: {
    LineChart
  },
  data () {
    return {
      selected: 0,
      chartData: {
        labels: [ '08:15:17', '09:14:13', '10:07:17', '11:23:03', '12:14:27', '13:14:09', '14:18:14' ],
        datasets: [
          {
            label: 'Dólar',
            backgroundColor: '#f25e3d',
            data: [4.878, 3.834, 6.822, 9.976, 6.780, 4.822, 5.80],
            borderColor: "#f25e3d"
          },
          {
            label: 'Euro',
            backgroundColor: '#f6c95b',
            data: [9.822, 10.822, 9.74, 9.87, 9.65, 8.88, 9.99],
            borderColor: "#f6c95b"
          },
          {
            label: 'Bitcoin',
            backgroundColor: '#8c6dd6',
            data: [18.822, 20.878, 14.21, 22, 22.02, 24.07, 24.180],
            borderColor: "#8c6dd6"
          } 
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            ticks: {
              color: "#b6baca",
            },
            grid: {
              drawTicks: false,
            },
            border: {
              dash: [5, 10],
            },
          },
          x: {
            ticks: {
              color: "#b6baca",
            },
            grid: {
              display: false,
            },
            border: {
              display: false,
            }
          }
        }
      }
    }
  }
}
</script>

<style>

.input-select {
  margin: 15px 0;
  display: flex;
}

.input-select, span {
  margin: 10px 0;
  font-size: 20px;
}

label {
  font-size: 30px;
  font-weight: bold;
  color: #5abf9a;
}

select {
  font-size: 18px;
  color: #5abf9a;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-color: #bfbfbf;
  padding: 0 10px;
  background-color: transparent;
  height: 30px;
  flex: 1;
  cursor: pointer;
  margin-top: 20px;
}

select:hover {
  color: #5abf9a;
  border-color: #5abf9a;
  animation: bounce 0.5s infinite;
}

option:hover {
  color: #091da2;
  background-color: #fbfbfb;
}

table {
  min-width: 100%;
  margin: 15px 0;
  font-size: 18px;
}

th, td {
  padding: 20px;
}

.table, label {
  margin: 20px 0;
}

.chart {
  min-width: 650px !important;
}
</style>
