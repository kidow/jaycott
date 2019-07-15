<template>
  <div>
    <div class="card__list">
      <div class="card__container" v-for="(item, i) in list" :key="i">
        <div
          class="card__image"
          :style="{ backgroundImage: `url(${item.src})` }"
          @click="cardClick(item)"
        ></div>
        <div class="card__title">
          <div class="card__text">{{ item.title }}</div>
          <div class="card__category">{{ item.category }}</div>
        </div>
      </div>
    </div>
    <el-dialog top="30px" :visible.sync="visible" :width="dialogWidth">
      <span slot="title" style="font-size: 28px; font-weight: bold">{{ item.title }}</span>
      <p>네무</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">닫기</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data: _ => ({
    list: [
      {
        title: '유니클로',
        src:
          'https://seeklogo.com/images/U/uniqlo-logo-BDEC351EFB-seeklogo.com.png',
        category: '의류'
      },
      {
        title: '도요타',
        src:
          'https://cdn.pixabay.com/photo/2016/08/15/18/19/toyota-1596082_1280.png',
        category: '자동차'
      },
      {
        title: '닛산',
        src:
          'https://seeklogo.com/images/N/Nissan-logo-4B3C580C8A-seeklogo.com.png',
        category: '자동차'
      },
      {
        title: '혼다',
        src:
          'https://seeklogo.com/images/H/honda-silver-logo-E810C6A8A4-seeklogo.com.jpg',
        category: '자동차'
      }
    ],
    visible: false,
    item: {}
  }),
  methods: {
    cardClick(item) {
      this.item = item
      this.visible = true
    }
  },
  computed: {
    dialogWidth() {
      return this.$device.isMobile ? '90%' : '50%'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~open-color/open-color';
@import '~include-media/dist/include-media';

$breakpoints: (
  phone: 420px,
  tablet: 768px,
  desktop: 1024px,
  wide: 1280px,
  grand: 1350px
);

.card__list {
  display: flex;
  flex-wrap: wrap;
  .card__container {
    width: 200px;
    background: white;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    box-shadow: 2 2px 12px 0 rgba(0, 0, 0, 0.1);
    @include media('<desktop') {
      width: 150px;
    }
    @include media('<phone') {
      width: 130px;
    }
    .card__image {
      padding: 1rem;
      padding-top: 1.2rem;
      border-bottom: 1px solid $oc-gray-1;
      background: $oc-gray-0;
      color: $oc-gray-3;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      @include media('<desktop') {
        height: 150px;
      }
      @include media('<phone') {
        height: 130px;
      }
      cursor: pointer;
      background-position: center;
      background-size: cover;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      opacity: 0.7;
      &:hover {
        opacity: 1;
        transition: 0.2s;
      }
    }
    .card__title {
      padding: 1rem;
      height: 7rem;
      @include media('<phone') {
        height: 5.5rem;
      }
      .card__text {
        display: block;
        font-size: 1.4rem;
        color: #495057;
        text-decoration: none;
        @include media('<phone') {
          font-size: 1.1rem;
        }
      }
      .card__category {
        margin-top: 0.5rem;
        color: $oc-gray-5;
        font-size: 0.9rem;
        @include media('<phone') {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>