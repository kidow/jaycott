<template>
  <footer>
    <ul>
      <li>
        Email
        <el-divider direction="vertical" />wcgo2ling@gmail.com
      </li>
      <li>
        <nuxt-link target="_blank" to="https://github.com/kidow/jaycott">Github</nuxt-link>
      </li>
    </ul>
    <p>사실과 다르거나 추가 및 수정이 필요한 정보 및 아이디어가 있다면 이메일로 문의바랍니다.</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  color: #868e96;
  ul {
    padding: 0;
    li {
      list-style: none;
      line-height: 1.5;
      a {
        color: #868e96;
      }
    }
  }
  p {
    word-break: keep-all;
  }
}
</style>
