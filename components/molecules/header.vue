<template>
  <header class="header">
    <nav class="container">
      <ul class="header__content row justify-content-between align-items-center">
        <li>
          <h4>hola</h4>
        </li>
        <li>
          <menu-btn/>
        </li>
        <!-- <logo/> -->
        <!-- <menu-button/> -->
      </ul>
    </nav>
  </header>
</template>
<script>
import MenuBtn from "components/atoms/menu-btn.vue";

export default {
  components: {
    MenuBtn
  }
};
</script>

<style lang="scss" scoped>
.header__content {
  @include padding(2, top);
  @include padding(2, bottom);

  pointer-events: none;

  & > li {
    pointer-events: all;
  }
}
</style>
