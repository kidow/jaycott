<template>
  <div style="padding: 3rem 0;">
    <el-row>
      <el-col :lg="3" :sm="2" :xs="1">
        <div style="min-height: 1px" />
      </el-col>
      <el-col :lg="18" :sm="20" :xs="22">
        <vue-header />
        <nuxt />
        <el-divider />
        <vue-footer />
      </el-col>
      <el-col :lg="3" :sm="2" :xs="1" />
    </el-row>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import VueHeader from '~/components/Header'
import VueFooter from '~/components/Footer'
export default {
  components: {
    VueHeader,
    VueFooter
  }
}
</script>