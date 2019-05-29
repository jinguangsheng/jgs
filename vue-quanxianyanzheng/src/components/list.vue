<template>
  <div id="list">
    <h1>list</h1>
    <button @click="to()">去</button>
    <table>
      <tr>
        <th>序号</th>
        <th>商品名</th>
        <th>价格</th>
        <th>图片</th>
      </tr>
      <tr v-for="(p,i) in list" :key="p._id">
        <td>{{i+1}}</td>
        <td>{{p.name}}</td>
        <td>{{p.price}}</td>
        <td>
          <img :src="'https://api.cat-shop.penkuoer.com/'+p.coverImg">
        </td>
      </tr>
    </table>
    <button @click="next">下一页</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "list",
  data() {
    return {
      list: [],
      currentPage: 1,
      pages: 1
    };
  },
  methods: {
    async loadData() {
      if (this.currentPage > this.pages) {
        return false;
      }
      try {
        const result = await axios.get(
          "https://api.cat-shop.penkuoer.com/api/v1/products",
          {
            params: {
              page: this.currentPage,
              per: 8
            }
          }
        );
        this.list = result.data.products;
        this.pages = result.totalpages;
      } catch (err) {
        console.log(err);
      }
    },
    to() {
      this.$router.go(-1);
    },
    next() {
      this.currentPage++;
      this.loadData();
    }
  },
  created() {
    this.loadData();
  }
};
</script>
<style scoped>
img {
  width: 100px;
}
</style>

