<template>
  <div class="chat-room-container">
    <div class="chat-room-header">
      <div class="header-title-page">{{ title }}</div>
      <div class="header-title-tweet" v-show="isPrivateMessage">
        {{ user.account }} 
      </div>
    </div>
    <div class="chat-room-content">
      <div v-for="message in messageList" :key="message.id">
        <div class="onOffline" v-if="message.type === 'online'">
          <span>{{ message.userName }} 上線</span>
        </div>
        <div class="onOffline" v-if="message.type === 'offline'">
          <span>{{ message.userName }} 離線</span>
        </div>
        <div class="message" v-if="message.type === 'message'">
          <div class="message-container" v-if="!message.isUser">
            <div
              class="message-avatar"
              :style="{ backgroundImage: 'url(' + message.user.avatar + ')' }"
            ></div>
            <div class="message-content">
              <p>
                {{ message.message }}
              </p>
              <span class="message-content-time">12:33</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 1. Online / Offline -->
      <!-- 2. Chat Bubble -->
    </div>
    <div class="chat-room-footer">
      <input
        type="text"
        class="footer-input"
        placeholder="輸入訊息..."
        v-model="message"
      />
      <div class="footer-btn" style="height: 20px; width: 20px">
        <img src="../assets/icon/chatroom_send.svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
const dummyMessageList = [
  {
    id: 1,
    type: "online",
    action: "online",
    userName: "123",
  },
  {
    id: 2,
    type: "message",
    isUser: false,
    user: {
      avatar: "https://i.imgur.com/OdItn5D.jpeg",
    },
    message: "hello",
    createdAt: "123",
  },
  {
    id: 3,
    type: "message",
    isUser: true,
    userAvatar: "img...",
    message: "hello",
    createdAt: "123",
  },
  { id: 4, type: "offline", action: "offline", userName: "cat" },
];

export default {
  data() {
    return {
      user: {
        name: "Apple",
        account: "apple",
      },
      title: "公開聊天室",
      message: "",
      messageList: [],
    };
  },
  methods: {
    fetehMessageList() {
      this.messageList = dummyMessageList;
    },
  },
  created() {
    this.fetehMessageList();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.chat-room {
  &-container {
    border-left: $border-setting;
    display: flex;
    flex-flow: column nowrap;
  }

  &-header {
    height: 55px;
    display: flex;
    align-items: center;
    border-bottom: $border-setting;

    .header-title {
      &-page {
        font-size: 19px;
        font-weight: 700;
        color: $text-main;
        margin-left: 23px;
      }
    }
  }

  &-content {
    flex-grow: 1;
  }

  &-footer {
    border-top: $border-setting;
    bottom: 0;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .footer {
      &-input {
        border: 0;
        background: $border-color;
        border-radius: 50px;
        flex-grow: 1;
        padding: 3px 16px;
        font-size: 16px;
        &::placeholder {
          font-size: 16px;
          color: #9197a3;
        }
      }
      &-btn {
        height: 20px;
        width: 20px;
        margin-left: 18.5px;
      }
    }
  }
}

.chat-room-content {
  padding: 16px;
  .onOffline {
    font-size: 15px;
    color: $text-sub;
    font-weight: 500;
    display: flex;
    justify-content: center;
    span {
      background: #e5e5e5;
      padding: 3px 10px;
      border-radius: 50px;
    }
  }
  .message {
    &-container {
      display: flex;
    }
    &-avatar {
      width: 40px;
      height: 40px;
      background-color: $empty-img;
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
    }
    &-content {
      position: relative;
      margin-left: 10px;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      background-color: $border-color;
      border-radius: 50px 50px 50px 0;
      p {
        font-size: 15px;
      }
      &-time {
        position: absolute;
        top: 100%;
      }
    }
  }
}
</style>
