<template>
  <div>
    <vmenu type="info" />
    <div class="info-container">
      <div class="info-title">热门信息</div>
      <ul class="info-content">
        <li v-for="item in list" :key="item.title">
          <section class="info-content-r">{{ item.publishDate }}</section>
          <section class="info-content-l">{{ item.title }}</section>
        </li>
      </ul>
      <vpage :count="count" url="info" :pageIndex="pageIndex" />
    </div>
  </div>
</template>

<script>
import axios from "../../common/http";
import Menu from "~/components/Menu.vue";
import page from "~/components/Page.vue";

export default {
  async asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    let data = await axios.post(`/api/news/list`);
    return { ...data.data };
  },
  components: {
    vmenu: Menu,
    vpage: page
  },
  data() {
    return {
      pageIndex: 1
    };
  },
  async created() {
    // let data = await axios.get(`/api/data`);
    // console.log("返回:", data);
    // this.data = '嘻嘻嘻嘻嘻爱';
  }
};
</script>

<style lang="scss">
.info-container {
  width: 1024px;
  margin: 30px auto;
  background: #fff;
  border: solid 1px #cccccc5c;
  border-radius: 10px;
  .info-title {
    height: 50px;
    background: #f2f9ff;
    color: #33a3ff;
    font-size: 24px;
    line-height: 50px;
    text-indent: 10px;
    font-weight: bold;
  }
  .info-content {
    padding: 10px;
    li {
      padding: 20px;
      border-bottom: solid 1px #f1f1f1;
      font-size: 16px;
      .info-content-r {
        float: right;
      }
      .info-content-l {
        overflow: hidden;
      }
      &::before {
        display: block;
        content: "";
        width: 6px;
        height: 6px;
        background: #33a3ff;
        border-radius: 50%;
        margin-right: 10px;
        float: left;
        margin-top: 10px;
      }
    }
  }
}
</style>
