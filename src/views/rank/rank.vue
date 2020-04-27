<template>
  <div>
    rank:
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      options: [{
        value: 'dish',
        label: '菜品'
      }, {
        value: 'windows ',
        label: '窗口'
      }, {
        value: 'taste',
        label: '口味'
      }],
      value: 'taste'
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('http://172.16.8.174:9876/rank/data', {
        headers: {
          kind: 'taste'
        }
      }).then(response => {
        if (response.status === 200) {
          console.log(response.data)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    // margin-bottom: 32px;
  }

  .myHeader {
    height: 40px;
    line-height: 40px;
    background-color: white;
    border-bottom: 1px solid #d6cfcf;
    padding-left: 30px;
    border-left: 5px solid #1890ff;
    font-family: PingFang SC;
    font-weight: 400;
    font-style: normal;
    font-size: 15px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
