<template>
  <el-input placeholder="통합검색" v-model="search" class="input-with-select">
    <el-select v-model="select" slot="prepend" placeholder="모두">
      <el-option
        v-for="option in options"
        :key="option.id"
        :label="option.label"
        :value="option.id"
      ></el-option>
    </el-select>
  </el-input>
</template>

<script>
export default {
  name: 'Input',
  data: _ => ({
    options: [
      {
        id: 0,
        label: '모두'
      },
      {
        id: 1,
        label: '자동차'
      },
      {
        id: 2,
        label: '패션'
      }
    ],
    search: '',
    select: ''
  }),
  methods: {
    onSearch() {
      console.log(this.search)
    }
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