<template>
  <div>
    <TweetNew class="tweet-new" />
    <div class="tweets-wrapper">
      <TweetsList
        v-for="tweet in tweetsData"
        :key="tweet.id"
        :init-tweet-data="tweet"
        @after-reply-clicked="showReplyModal"
      />
      <TweetModal
        :init-reply-tweet="replyTweet"
        v-if="modalVisibility"
        @after-close-modal="afterCloseModal"
      />
    </div>
  </div>
</template>

<script>
import TweetNew from "@/components/TweetNew.vue";
import TweetsList from "@/components/TweetsList.vue";
import TweetModal from "@/components/TweetModal.vue";
import tweetsAPI from "./../apis/tweets";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: {
    TweetNew,
    TweetsList,
    TweetModal,
  },
  data() {
    return {
      tweetsData: [],
      modalVisibility: false,
      replyTweet: {},
    };
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await tweetsAPI.getAllTweets();

        this.tweetsData = response.data;
      } catch (error) {
        this.ToastError({
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async fetchTweet(tweetId) {
      try {
        const response = await tweetsAPI.getTweet(tweetId);

        this.replyTweet = response.data;
      } catch (error) {
        this.ToastError({
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    showReplyModal(tweetId) {
      this.fetchTweet(tweetId);
      this.modalVisibility = true;
    },
    afterCloseModal() {
      this.modalVisibility = false;
    },
  },
  created() {
    this.fetchTweets();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.tweet-new {
  border-top: $border-setting;
  border-bottom: 10px solid $border-color;
}
.tweets-wrapper {
  max-width: 600px;
  max-height: 80%;
  overflow-x: scroll;
}
</style>
