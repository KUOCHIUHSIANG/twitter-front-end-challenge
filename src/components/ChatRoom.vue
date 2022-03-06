<template>
  <div class="chat-room-container">
    <div class="chat-room-header-title">
      <div class="header-title-page">{{ title }}</div>
      <div class="header-title-tweet" v-show="isPrivateMessage">
        {{ user.account }} 
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        name: Apple,
        account: apple
      },
      title: "公開聊天室"
    }
  }
}
</script>