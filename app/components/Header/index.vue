<template>
  <header>
    <h1>일본 브랜드, 얼마나 알고 계신가요?</h1>
    <vue-input />
  </header>
</template>

<script>
import VueInput from '~/components/Input'
export default {
  components: {
    VueInput
  }
}
</script>

<style lang="scss" scoped>
header {
  text-align: center;
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
  h1 {
    font-size: 2rem;
    color: #495057;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 420px) {
      font-size: 19px;
    }
  }
}
</style>