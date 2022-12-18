<template>
  <div>
    <div class="user-details">
      <a href="/"
        ><img class="back-btn-img" src="../assets/back-btn.png" alt=""
      /></a>
      <img
        class="user-img"
        :src="getUserDetails.avatar_url || showDefaultImg"
        @error="showDefaultImg"
        alt="User"
      />
      <p class="user-name">{{ getUserDetails.name }}</p>
      <div class="repo-container">
        <div class="repo-details" v-for="repo in getRepoList" :key="repo.id">
          <a :href="repo.html_url"
            ><p class="repo-name">{{ repo.name }}</p></a
          >
          <div class="repo-statistics">
            <p class="stats-data">
              <img class="icon" src="../assets/watcher.png" alt="" /><span>{{
                repo.watchers_count
              }}</span>
            </p>
            <p class="stats-data">
              <img class="icon" src="../assets/star.png" alt="" /><span>{{
                repo.stargazers_count
              }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-else class="no-user-data">No User Data Found</div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUserDetails", "getRepoList"]),
  },
  methods: {
    ...mapActions(["fetchUserDetails", "fetchRepoList"]),
    fetchData() {
      let userId = this.$route.params.username;
      this.fetchUserDetails({ userId: userId });
      this.fetchRepoList({ userId: userId });
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route() {
      this.fetchData();
    },
  },
};
</script>

<style scoped lang = "scss">
@import "../styles/colors.scss";

.user-img {
  height: 30vh;
  max-height: 300px;
  border-radius: 50%;
  max-height: 300px;
}
.user-name {
  font-weight: 800;
  font-size: 30px;
}
.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  position: relative;
}
table {
  width: 100%;
  margin-top: 20px;
}
.icon {
  height: 20px;
  margin-right: 10px;
}
.repo-container {
  display: flex;
  flex-direction: column;
  width: 90%;
  min-width: 400px;
}
.repo-details {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.repo-statistics {
  display: flex;
  width: 40%;
  white-space: nowrap;
  text-align: left;
}
.repo-name {
  margin-top: 5px;
  margin-bottom: 5px;
  color: $black_color;
  cursor: default;
}
a {
  cursor: default;
}
.repo-name:hover {
  text-decoration: underline;
  color: $blue_color;
}
.stats-data {
  margin-top: 5px;
}
.stats-data:first-child {
  width: 5vw;
  margin-right: 50px;
  max-width: 150px;
}
.icon {
  height: 15px;
}
.back-btn-img {
  height: 35px;
  position: absolute;
  left: 0;
}
a {
  text-decoration: none;
}
.no-user-data {
  padding: 30%;
  background-color: red($color: #000000);
}
</style>