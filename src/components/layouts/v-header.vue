<template>
  <div class="v-header">
    <div class="header__logo">
      <img src="../../assets/logo.svg" alt="">
    </div>
    <nav class="header__navigation">
      <ul class="navigation">
        <li><a href="#">NavItem1</a></li>
        <li><a href="#">NavItem2</a></li>
        <li><a href="#">NavItem3</a></li>
      </ul>
      <div class="btn"><a href="#">Button</a></div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "v-header",
  props: {},
  data() {
    return {
    };
  }
}
</script>

<style lang="scss">
.v-header {
  height: 160px;
  display: flex;
  align-items: center;
  margin: 0 84px 0 87px;

  .header__navigation {
    margin-left: 65px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navigation {
      display: flex;
      column-gap: 46px;
    }

    .btn {
      cursor: pointer;
      width: $width-link-btn;
      height: $height-link-btn;
      background: $main-color;
      box-shadow: 0px 8px 16px rgba(0, 195, 104, 0.4);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: white;
      }
    }

    ul {
      li {
        cursor: pointer;
        width: $width-link-btn;
        height: $height-link-btn;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;

        &:hover {
          background: $main-color;
          box-shadow: 0px 8px 16px rgba(0, 195, 104, 0.4);
          border-radius: 8px;

          a {
            color: #FFFFFF;
          }
        }

        a {
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: $alter-color-text;
        }
      }
    }
  }
}
</style>