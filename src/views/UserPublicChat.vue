<template>
  <div class="page-container">
    <div class="users-list">
      <span>123</span>
      <div v-for="user in users" :key="user.id" @click.stop.prevent="toUserProfilePage(user.id)" class="user">
        <div class="user-avatar bg-empty" :style="{ backgroundImage: 'url(' + user.avatar + ')' }"></div>
        <div class="user-info">
          <span class="user-name">{{ user.name }}</span>
          <span class="account user-account">{{ user.account }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="chat-room-container">
      <div class="chat-room-header-title">
      <div class="header-title-page">{{ title }}</div>
    </div> -->
    <!-- </div> -->
    <!-- <ChatRoom /> -->
    <br>
    <input type="text" v-model="content" placeholder="輸入訊息...">
    <br>
    <button @click="send">send</button>
    <br>
    <div id="show"></div>
    <!-- <div class="users"> {{ users }} </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import ChatRoom from '../components/ChatRoom.vue'

export default {
  components: {
    // ChatRoom
  },
  data() {
    return {
      content: '',
      users: [],
      onlineCount: 0,
      title: '公開聊天室',
      historyMessage: ""
    }
  },
  methods: {
    send() {
      this.$socket.emit('sendMessage',{
        content: this.content,
      });
      this.content = "";
    },
    addUser() {
      this.$socket.emit('addUser',({
        id: this.currentUser.id,
        name: this.currentUser.name,
        account: this.currentUser.account,
        avatar: this.currentUser.avatar
      }));
    },
    toUserProfilePage(userId) {
      this.$router.push({
        name: "user-all-tweets",
        params: { user_id: userId },
      });
    },
  },
  created() {
    this.addUser()
  },
  destroyed() {
    this.$socket.emit('leavingChatroom')
  },
  sockets: {
    connect() {
      console.log("connect!")
    },
    onlineUser(data) {
      this.users = data.onlineUser
      this.onlineCount = data.numUsers
    },
    userJoin(data) {
      function push(array, item) {
        if (!array.find(({id}) => id === item.id)) {
          array.push(item)
        }
      }
      push(this.users, data)
    },
    newMessage(data) {
      var p = document.createElement("p")
      p.innerHTML= data.content+"\r\n"
      var showDiv = document.getElementById("show");
      showDiv.append(p)
    },
    historyMessage(data) {
      console.log('historyM',data)
    },
    userLeave(data) {
      console.log('userLeave',data)
    }
  },
  computed: {
    ...mapState(["currentUser"]),
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

div.users-list {
  max-width: 414px;
  min-width: 300px;
  border-top: $border-setting;
  .user{
    display: flex;
    align-items: center;
    border-bottom: $border-setting;
    padding: 15px;
    &-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    &-info {
      span {
        font-size: 16px;
      }
      span.user-name {
        margin-right: 5px;
        font-weight: 700;
      }
      span.user-account {
        font-weight: 400;
      }
    }
    &:hover {
      cursor: pointer;
      background-color: $border;
    }
  }
}


.bg-empty{
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $empty-img;
}
</style>