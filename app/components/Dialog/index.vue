<template>
  <el-dialog :title="item.title" :visible.sync="visible" width="30%">
    <div>{{ item.description }}</div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">Cancel</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: _ => {}
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>