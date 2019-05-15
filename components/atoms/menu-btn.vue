<template>
  <button class="menu-btn">
    <span class="menu-btn__text">Open menu</span>
  </button>
</template>
<style lang="scss" scoped>
.menu-btn {
  vertical-align: baseline;
  display: flex;
  position: relative;
  margin: -10px auto;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  outline: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: #000;
  }

  &::before {
    top: 16px;
    left: 10px;
  }

  &::after {
    left: 10px;
    bottom: 16px;
  }
}

.menu-btn__text {
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
}
</style>
