<template>
  <header class="header">
    <div class="logo-name-wrapper">
      <a href="/"
        ><img class="site-logo" src="../assets/logo1.png" alt="logo"
      /></a>
      <span class="site-name">Github Userboard</span>
    </div>
    <div v-if="isHomePage" class="search-wrapper">
      <img class="search-icon" src="../assets/search-icon.png" alt="" />
      <input class="search-input" type="text" @input="improvedSearch" />
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isHomePage: true,
    };
  },
  methods: {
    ...mapActions(["storeSearchText"]),
    debounceSearch(searchFn, delay = 300) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          searchFn.apply(this, args);
        }, delay);
      };
    },
    search(event) {
      this.storeSearchText({ searchText: event.target.value });
    },
  },
  created() {
    this.improvedSearch = this.debounceSearch(this.search, 300);
    if (this.$route.path === "/") {
      this.isHomePage = true;
    } else {
      this.isHomePage = false;
    }
  },
  watch: {
    $route() {
      console.log(" route header ", this.$route);
      if (this.$route.path === "/") {
        this.isHomePage = true;
      } else {
        this.isHomePage = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/colors.scss";

.header {
  height: 10vh;
  background-color: $black_color;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 1;
  justify-content: space-between;
  box-sizing: border-box;
  .logo-name-wrapper {
    display: flex;
    align-items: center;
    .site-logo {
      height: 30px;
      margin-right: 10px;
    }
    .site-name {
      color: #ffffff;
      font-weight: 700;
      font-size: 15px;
    }
  }
  .search-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    .search-icon {
      position: absolute;
      left: 10px;
      width: 1.5vw;
    }

    .search-input {
      height: 5vh;
      width: 12vw;
      padding-left: 3vw;
      padding-right: 10px;
      outline: none;
      border-radius: 12px;
      border: none;
      min-width: 200px;
    }
  }
}
</style>