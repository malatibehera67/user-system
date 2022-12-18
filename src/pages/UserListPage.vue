<template>
  <div class="user-list">
    <h2>Top Users</h2>
    <section v-if="filteredUserList.length" class="list-container">
      <div class="user" v-for="user in filteredUserList" :key="user.id">
        <img
          class="user-avatar"
          :src="user.avatar_url || showDefaultImg"
          @error="showDefaultImg"
          alt="avatar"
        />
        <p class="user-name" @click="gotoUserDeatils(user.login)">
          {{ user.login }}
        </p>
        <a :href="user.html_url">
          <div class="link-wrapper">
            <img
              class="user-link-img"
              src="../assets/link-img.png"
              alt="link-img"
            />
            <span class="github">github</span>
          </div>
        </a>
      </div>
    </section>
    <div v-else class="not-found-msg">Users not found</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      pageSize: 20,
      searchText: "",
    };
  },
  computed: {
    ...mapGetters(["getUserList", "getSearchText"]),
    filteredUserList: function () {
      if (
        this.getUserList &&
        this.getUserList.length > 0 &&
        this.getSearchText
      ) {
        return this.getUserList.filter((user) =>
          user.login.toUpperCase().includes(this.getSearchText.toUpperCase())
        );
      } else {
        return this.getUserList;
      }
    },
  },
  methods: {
    ...mapActions(["fetchUserList"]),
    gotoUserDeatils(userId) {
      this.$router.push("/" + userId);
      console.log("Hello " + userId);
    },
  },
  created() {
    this.fetchUserList({ pageSize: this.pageSize });
  },
};
</script>

<style scoped lang="scss">
@import "../styles/colors.scss";

.user-list {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list-container {
  display: flex;
  flex-wrap: wrap;
}
.user {
  position: relative;
  width: 25%;
  min-width: 100px;
  margin-top: 5%;
}
.user-avatar {
  width: 50%;
  border-radius: 50%;
  object-fit: contain;
}
.user-link-img {
  height: 2vh;
}
.link-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-name {
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 800;
  font-size: 20px;
  cursor: default;
}
.user-name:hover {
  text-decoration: underline;
}
.github {
  font-size: 12px;
  color: $blue_color;
  font-weight: 400;
}
.not-found-msg {
  margin-top: 20px;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
}
</style>