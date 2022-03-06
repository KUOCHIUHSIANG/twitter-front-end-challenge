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
        <!-- <div class="onOffline" v-if="message.type === 'online'">
          <span>{{ message.userName }} 上線</span>
        </div>
        <div class="onOffline" v-if="message.type === 'offline'">
          <span>{{ message.userName }} 離線</span>
        </div> -->
        <div class="message" v-if="message.type === 'message'">
          <div class="message-container" v-if="!message.isUser">
            <div
              class="message-avatar"
              :style="{ backgroundImage: 'url(' + message.user.avatar + ')' }"
            ></div>
            <div class="message-content-wrapper">
              <div class="message">
                <p>
                  {{ message.message }}
                </p>
              </div>
              <span class="time">12:33</span>
            </div>
          </div>
          <div class="message-container message-container-myself" v-else>
            <div class="message-content-wrapper">
              <div class="message">
                <p>
                  {{ message.message }}
                </p>
              </div>
              <span class="time">12:33</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-room-footer">
      <input
        type="text"
        class="footer-input"
        placeholder="輸入訊息..."
        v-model="message"
      />
      <div class="footer-btn" style="height: 20px; width: 20px" @click="sendMessage">
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
  props: {
    historyMessage: {
      type: Array,
    },
  },
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
    sendMessage() {
      this.$emit('submit-message', this.message)
    }
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
      margin-bottom: 20px;
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
    &-content-wrapper {
      margin-left: 10px;
      display: flex;
      flex-flow: column nowrap;
      .message {
        margin-bottom: 0;
        display: flex;
        align-items: center;
        background-color: $border-color;
        border-radius: 50px 50px 50px 0;
        padding: 5px 10px;
        font-size: 15px;
      }
      .time {
        margin-top: 0;
        color: $text-sub;
        font-size: 13px;
      }

      &-myself {
        border-radius: 50px 50px 0 50px;
        background-color: $brand-orange;
      }
    }
    &-container-myself {
      justify-content: flex-end;
      text-align: left;
      .message-content-myself {
        align-items: flex-end;
      }
      .message {
        background-color: $brand-orange;
        border-radius: 50px 50px 0 50px;
        color: #fff;
      }
      .time {
        margin-top: 0;
        color: $text-sub;
        font-size: 13px;
        // text-align: left;
      }
    }
  }
}
</style>
