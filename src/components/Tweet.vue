<template>
  <div class="tweet-wrapper">
    <div class="tweet-content">
      <div class="tweet-content-header">
        <div
          class="user-avatar pointer"
          :style="{ backgroundImage: 'url(' + tweetData.avatar + ')' }"
          @click="
            $router.push({
              name: 'user-all-tweets',
              params: { user_id: tweetData.tweetUserId },
            })
          "
        ></div>
        <div class="user-data">
          <span
            class="user-data-name pointer"
            @click="
              $router.push({
                name: 'user-all-tweets',
                params: { user_id: tweetData.tweetUserId },
              })
            "
            >{{ tweetData.tweetUserName }}</span
          >
          <span
            class="user-data-account account pointer"
            @click="
              $router.push({
                name: 'user-all-tweets',
                params: { user_id: tweetData.tweetUserId },
              })
            "
            >{{ tweetData.tweetUserAccount }}</span
          >
        </div>
      </div>
      <div class="tweet-content-body">
        <p class="tweet-content-text">{{ tweetData.description }}</p>
        <span class="tweet-content-time">{{ tweetData.createdAt | timeFormatFilter }}</span>
      </div>
    </div>
    <div class="tweet-data">
      <span class="tweet-data-count"
        >{{ tweetData.repliedCount }} <span class="tweet-data-title">回覆</span>
      </span>
      <span class="tweet-data-count"
        >{{ tweetData.likeCount }}
        <span class="tweet-data-title">喜歡次數</span>
      </span>
    </div>
    <div class="tweet-action">
      <div
        class="btn-comment"
        @click.stop.prevent="handleReplyClicked(tweetData.TweetId)"
      >
        <svg
          class="actives-icon actives-icon__reply"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="#657786"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8461 0.241934L8.69812 0.231934H8.69612C4.32212 0.231934 0.896118 3.65893 0.896118 8.03393C0.896118 12.1319 4.08212 15.2399 8.36112 15.4039V19.2319C8.36112 19.3399 8.40512 19.5179 8.48112 19.6349C8.62312 19.8599 8.86512 19.9819 9.11312 19.9819C9.25112 19.9819 9.39012 19.9439 9.51512 19.8639C9.77912 19.6959 15.9881 15.7239 17.6031 14.3579C19.5051 12.7479 20.6431 10.3879 20.6461 8.04593V8.02893C20.6401 3.66193 17.2161 0.241933 12.8461 0.240933V0.241934ZM16.6331 13.2139C15.4991 14.1739 11.7711 16.6189 9.86112 17.8569V14.6699C9.86112 14.2559 9.52612 13.9199 9.11112 13.9199H8.71512C5.05512 13.9199 2.39712 11.4439 2.39712 8.03393C2.39712 4.49993 5.16512 1.73193 8.69712 1.73193L12.8441 1.74193H12.8461C16.3781 1.74193 19.1461 4.50793 19.1481 8.03793C19.1451 9.94793 18.2061 11.8819 16.6341 13.2139H16.6331Z"
          />
        </svg>
      </div>
      <div class="btn-like">
        <div
          v-if="tweetData.liked"
          @click="deleteLike(tweetData.TweetId)"
          class=""
        >
          <svg
            class="actives-icon actives-icon__like"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="#E0245E"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
            />
          </svg>
        </div>
        <div v-else @click="addLike(tweetData.TweetId)" class="">
          <svg
            class="actives-icon actives-icon__unlike"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="#657786"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 19.6379H10.786C8.203 19.5899 0.75 12.8559 0.75 6.47788C0.75 3.41388 3.275 0.723877 6.153 0.723877C8.443 0.723877 9.983 2.30388 10.799 3.45388C11.613 2.30588 13.153 0.723877 15.444 0.723877C18.324 0.723877 20.848 3.41388 20.848 6.47888C20.848 12.8549 13.394 19.5889 10.811 19.6359H10.8V19.6379ZM6.154 2.22488C4.074 2.22488 2.251 4.21288 2.251 6.47988C2.251 12.2199 9.285 18.0759 10.801 18.1379C12.319 18.0759 19.351 12.2209 19.351 6.47988C19.351 4.21288 17.528 2.22488 15.448 2.22488C12.92 2.22488 11.508 5.16088 11.496 5.18988C11.266 5.75188 10.34 5.75188 10.109 5.18988C10.095 5.15988 8.684 2.22488 6.155 2.22488H6.154Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tweetsAPI from "./../apis/tweets";
import { fromNowFilter, Toastification } from "../utils/mixin";

export default {
  props: {
    initTweetData: {
      type: Object,
      require: true,
    },
  },
  data() {
    return { tweetData: {} };
  },
  watch: {
    initTweetData() {
      this.fetchTweet();
    },
  },
  methods: {
    fetchTweet() {
      this.tweetData = this.initTweetData;
    },
    async addLike(id) {
      try {
        const response = await tweetsAPI.addLike(id);
        if (response.data.status !== "success") {
          throw new Error();
        }
        this.tweetData.liked = true;
        this.tweetData.likeCount += 1;
      } catch (error) {
        this.ToastError({
          title: "無法讚好推文，請稍後再試",
        });
      }
    },
    async deleteLike(id) {
      try {
        const response = await tweetsAPI.deleteLike(id);
        if (response.data.status !== "success") {
          throw new Error(response.message);
        }
        this.tweetData.liked = false;
        this.tweetData.likeCount -= 1;
      } catch (error) {
        this.ToastError({
          title: "無法取消讚好推文，請稍後再試",
        });
      }
    },
    handleReplyClicked(tweetId) {
      this.$emit("after-reply-clicked", tweetId);
    },
  },
  created() {
    const { tweet_id } = this.$route.params;
    this.fetchTweet(tweet_id);
  },
  mixins: [fromNowFilter, Toastification],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.tweet {
  &-wrapper {
    border-top: $border-setting;
    border-bottom: $border-setting;
    max-width: 600px;
    padding: 15px;
  }
  &-content {
    &-header {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      .user-avatar {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: $empty-img;
      }
      .user-data {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        font-size: 15px;
        line-height: 21.72px;
        &-name {
          font-weight: 700;
        }
      }
    }
    &-body {
      p {
        word-wrap: break-word;
        font-size: 23px;
        line-height: 34px;
        padding-right: 75px;
        margin-bottom: 15px;
      }
      span.tweet-content-time {
        color: $text-sub;
        font-size: 15px;
        line-height: 21.72px;
      }
    }
  }
  &-data {
    padding: 15px 0;
    margin-top: 15px;
    border-top: $border-setting;
    border-bottom: $border-setting;
    span {
      font-size: 19px;
    }
    span.tweet-data-count {
      font-weight: 700;
      color: $text-main;
      margin-right: 20px;
    }
    span.tweet-data-title {
      color: $text-sub;
      font-weight: 500;
    }
  }
  &-action {
    display: flex;
    align-items: center;
    padding-top: 21px;
    .btn-comment {
      margin-right: 155px;
      svg:hover {
        fill: $brand-orange;
      }
    }
    .btn-like {
      svg:hover {
        fill: #e0245e;
      }
    }
  }
}
</style>
