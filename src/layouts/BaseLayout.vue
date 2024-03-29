<template>
  <div class="page-container">
    <Navbar
      class="container-left"
      :is-current-user-page="isCurrentUserPage"
      @after-show-modal="afterShowModal"
    />
    <div class="container-middle">
      <Header /><router-view
        class="container-middle-main"
        :message-to-submit="messageToSubmit"
        @after-follow-change="afterFollowChange"
        @get-history-message="getHistoryMessage"
        @get-new-message="getNewMessage"
      />
    </div>
    <PopularUsers
      class="container-popular-users"
      v-if="
        !isAdmin &&
        currentPathName !== 'user-setting' &&
        currentPathName !== 'user-public-chat' &&
        currentPathName !== 'user-private-message'
      "
      :need-update-popular-user="needUpdatePopularUser"
    />
    <ChatRoom
      class="container-chatroom"
      v-if="currentPathName === 'user-public-chat'"
      :history-message="historyMessage"
      :new-message="newMessage"
      @submit-message="afterSubmitMessage"
    />
    <TweetModal v-if="modalVisibility" @after-close-modal="afterCloseModal" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import PopularUsers from "@/components/PopularUsers.vue";
import ChatRoom from "@/components/ChatRoom.vue";
import TweetModal from "@/components/TweetModal.vue";
import { mapState } from "vuex";

export default {
  components: {
    Navbar,
    Header,
    PopularUsers,
    TweetModal,
    ChatRoom,
  },
  data() {
    return {
      modalVisibility: false,
      isCurrentUserPage: false,
      needUpdatePopularUser: false,
      historyMessage: [],
      newMessage: {},
      messageToSubmit: ''
    };
  },
  computed: {
    ...mapState(["isAdmin", "currentUser", "currentPathName"]),
  },
  methods: {
    afterShowModal() {
      this.modalVisibility = true;
    },
    afterCloseModal() {
      this.modalVisibility = false;
    },
    afterFollowChange() {
      this.needUpdatePopularUser = !this.needUpdatePopularUser;
    },
    getHistoryMessage(data) {
      this.historyMessage = data
    },
    getNewMessage(data) {
      this.newMessage = data
  },
  afterSubmitMessage(message) {
    this.messageToSubmit = message
  },
  beforeRouteUpdate(to, from, next) {
    this.isCurrentUserPage = Number(to.params.user_id) === this.currentUser.id;
    next();
  },
  }
}

</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.page-container {
  display: flex;
  flex-flow: row nowrap;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  .container {
    &-left {
      flex-basis: 379px;
      height: 100vh;
    }
    &-middle {
      flex-grow: 1;
      max-height: 100vh;
      min-height: 100vh;
      &-main {
        height: 93vh;
      }
    }
    &-popular-users {
      flex-basis: 463px;
      height: 100vh;
    }
    &-chatroom {
      flex-basis: 712px;
      height: 100vh;
    }
  }
}
</style>
