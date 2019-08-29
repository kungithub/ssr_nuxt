<template>
  <div>
    <header>
      <div class="head-content">
        <section class="head-left">
          一个帮助开发者成长的社区 |
          <nuxt-link to="/"> 首页</nuxt-link>
        </section>
        <section class="head-right">
          <nuxt-link to="/user/login"> 登录</nuxt-link>
          |
          <nuxt-link to="/user/register"> 注册</nuxt-link>
        </section>
      </div>
    </header>
    <nuxt />
    <!-- <p>布局页面尾</p> -->
  </div>
</template>


<script>
import "../assets/style/common.css";

export default {};
</script>

<style lang="scss">
header {
  overflow: hidden;
  border-bottom: solid 1px #ccc;
  line-height: 40px;
  background: #fff;
  .head-content {
    margin: 0 auto;
    width: 1024px;
    .head-left {
      float: left;
    }
    .head-right {
      float: right;
    }
  }
}
</style>
