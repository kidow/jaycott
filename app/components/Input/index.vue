<template>
  <el-input
    placeholder="통합검색"
    v-model="search"
    class="input-with-select"
    suffix-icon="el-icon-search"
  >
    <el-select v-model="select" slot="prepend" placeholder="모두">
      <el-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></el-option>
    </el-select>
  </el-input>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Input',
  data: _ => ({
    options: [
      {
        value: '모두',
        label: '모두'
      },
      {
        value: '자동차',
        label: '자동차'
      },
      {
        value: '패션',
        label: '패션'
      }
    ],
    search: '',
    select: ''
  }),
  methods: {
    onSearch() {}
  },
  watch: {
    select(val) {
      const searchSelect = this.list.filter(item => item.category === val)
      this.$store.commit('SAVE_LIST', searchSelect)
    }
  },
  computed: {
    ...mapGetters({
      list: 'GET_LIST'
    })
  }
}
</script>


<style>
.el-input-group {
  max-width: 400px;
}
.el-select .el-input {
  width: 110px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>