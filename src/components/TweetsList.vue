<template>
  <div class="tweet-container">
    <div class="tweet">
      <!-- TODO: import user avatar -->
      <div
        class="tweet__user-avatar"
        :style="{ backgroundImage: 'url(' + tweet.avatar + ')' }"
        :class="{ pointer: !isAdmin }"
        @click.stop.prevent="toUserProfilePage(tweet.tweetUserId)"
      ></div>
      <div class="tweet__info-container">
        <div class="info">
          <span
            class="name"
            :class="{ pointer: !isAdmin }"
            @click.stop.prevent="toUserProfilePage(tweet.tweetUserId)"
            >{{ tweet.tweetUserName }}</span
          >
          <span
            class="account"
            :class="{ pointer: !isAdmin }"
            @click.stop.prevent="toUserProfilePage(tweet.tweetUserId)"
            >{{ tweet.tweetUserAccount }}・{{ tweet.createdAt | fromNow }}</span
          >
          <div class="content" :class="{ pointer: !isAdmin }" @click.stop.prevent="toTweetPage(tweet.TweetId)">
            <p>{{ tweet.description }}</p>
          </div>
          <div
            v-if="isAdmin"
            class="content"
            :class="{ 'admin-width': isAdmin }"
          >
            <p>{{ tweet.description | descriptionOverflow }}</p>
          </div>
        </div>
        <div v-if="!isAdmin" class="tweet__footer">
          <div class="tweet__footer__actives">
            <div
              class="tweet__footer__actives__reply"
              @click.stop.prevent="handleReplyClicked(tweet.TweetId)"
            >
              <svg
                class="actives-icon actives-icon__reply"
                width="12"
                height="12"
                viewBox="0 0 21 20"
                fill="#657786"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8461 0.241934L8.69812 0.231934H8.69612C4.32212 0.231934 0.896118 3.65893 0.896118 8.03393C0.896118 12.1319 4.08212 15.2399 8.36112 15.4039V19.2319C8.36112 19.3399 8.40512 19.5179 8.48112 19.6349C8.62312 19.8599 8.86512 19.9819 9.11312 19.9819C9.25112 19.9819 9.39012 19.9439 9.51512 19.8639C9.77912 19.6959 15.9881 15.7239 17.6031 14.3579C19.5051 12.7479 20.6431 10.3879 20.6461 8.04593V8.02893C20.6401 3.66193 17.2161 0.241933 12.8461 0.240933V0.241934ZM16.6331 13.2139C15.4991 14.1739 11.7711 16.6189 9.86112 17.8569V14.6699C9.86112 14.2559 9.52612 13.9199 9.11112 13.9199H8.71512C5.05512 13.9199 2.39712 11.4439 2.39712 8.03393C2.39712 4.49993 5.16512 1.73193 8.69712 1.73193L12.8441 1.74193H12.8461C16.3781 1.74193 19.1461 4.50793 19.1481 8.03793C19.1451 9.94793 18.2061 11.8819 16.6341 13.2139H16.6331Z"
                />
              </svg>
              <span class="tweet__footer__actives__count">{{
                tweet.repliedCount
              }}</span>
            </div>
            <div
              v-if="tweet.liked"
              @click="deleteLike(tweet.TweetId)"
              class="tweet__footer__actives__like"
            >
              <svg
                class="actives-icon actives-icon__like"
                width="12.5"
                height="11.8"
                viewBox="0 0 22 20"
                fill="#E0245E"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"
                />
              </svg>
              <span class="tweet__footer__actives__count liked">{{
                tweet.likeCount
              }}</span>
            </div>
            <div
              v-else
              @click="addLike(tweet.TweetId)"
              class="tweet__footer__actives__like"
            >
              <svg
                class="actives-icon actives-icon__unlike"
                width="12.5"
                height="11.8"
                viewBox="0 0 21 20"
                fill="#657786"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 19.6379H10.786C8.203 19.5899 0.75 12.8559 0.75 6.47788C0.75 3.41388 3.275 0.723877 6.153 0.723877C8.443 0.723877 9.983 2.30388 10.799 3.45388C11.613 2.30588 13.153 0.723877 15.444 0.723877C18.324 0.723877 20.848 3.41388 20.848 6.47888C20.848 12.8549 13.394 19.5889 10.811 19.6359H10.8V19.6379ZM6.154 2.22488C4.074 2.22488 2.251 4.21288 2.251 6.47988C2.251 12.2199 9.285 18.0759 10.801 18.1379C12.319 18.0759 19.351 12.2209 19.351 6.47988C19.351 4.21288 17.528 2.22488 15.448 2.22488C12.92 2.22488 11.508 5.16088 11.496 5.18988C11.266 5.75188 10.34 5.75188 10.109 5.18988C10.095 5.15988 8.684 2.22488 6.155 2.22488H6.154Z"
                />
              </svg>
              <span
                class="tweet__footer__actives__count"
                :class="{ liked: tweet.liked }"
                >{{ tweet.likeCount }}</span
              >
            </div>
          </div>
        </div>
        <div v-if="isAdmin" class="delete">
          <div
            @click="handleDeleteClicked(tweet.TweetId)"
            class="delete-icon-container"
          >
            <svg
              class="close-icon"
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="#657786"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  fromNowFilter,
  Toastification,
  descriptionOverflow,
} from "../utils/mixin";
import tweetsAPI from "./../apis/tweets";
import { mapState } from "vuex";

export default {
  props: {
    initTweetData: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      tweet: {},
      // TODO: import vuex control components
      isUserPage: true,
      isLike: false,
    };
  },
  computed: {
    ...mapState(["isAdmin"]),
  },
  methods: {
    fetchTweet() {
      this.tweet = this.initTweetData;
    },
    async addLike(tweetId) {
      try {
        const response = await tweetsAPI.addLike(tweetId);
        if (response.data.status !== "success") {
          throw new Error(response.message);
        }
        this.tweet.liked = true;
        this.tweet.likeCount += 1;
      } catch (error) {
        this.ToastError({
          title: "無法讚好推文，請稍後再試",
        });
      }
    },
    async deleteLike(tweetId) {
      try {
        const response = await tweetsAPI.deleteLike(tweetId);
        if (response.data.status !== "success") {
          throw new Error(response.message);
        }
        this.tweet.liked = false;
        this.tweet.likeCount -= 1;
      } catch (error) {
        this.ToastError({
          title: "無法取消讚好推文，請稍後再試",
        });
      }
    },
    handleReplyClicked(tweetId) {
      this.$emit("after-reply-clicked", tweetId);
    },
    handleDeleteClicked(tweetId) {
      let result = confirm(`確定要刪除TweetId為：${tweetId} 此篇推文？`);
      if (result) {
        this.$emit("after-delete-clicked", tweetId);
      } else {
        // TODO: confirm this message
        alert("你按了取消按鈕");
      }
    },
    toUserProfilePage(userId) {
      if (this.isAdmin) return;

      this.$router.push({
        name: "user-all-tweets",
        params: { user_id: userId },
      });
    },
    toTweetPage(tweetId) {
      if (this.isAdmin) return;
      this.$router.push({
        name: "user-tweet",
        params: { tweet_id: tweetId },
      });
    },
  },
  created() {
    this.fetchTweet();
  },
  watch: {
    initTweetData() {
      this.fetchTweet();
    },
  },
  mixins: [fromNowFilter, Toastification, descriptionOverflow],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
div.tweet {
  position: relative;
  display: flex;
  padding: 12px 15px;
  text-align: left;
  color: $text-main;
  font-size: 15px;
  border-bottom: 1px solid $border;
  span.name {
    margin-right: 5px;
    font-weight: 700;
  }
  &__user-avatar {
    border-radius: 50%;
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    background-color: $empty-img;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  &__info-container {
    padding-left: 15px;
    div.content {
      max-width: 510px;
      &.admin-width {
        width: 70%;
      }
      p {
        word-break: break-all;
      }
    }
    div.tweet__footer__actives {
      display: flex;
      svg.actives-icon {
        margin-right: 11px;
        &__like {
          margin-right: 3.5px;
        }
      }
      span {
        color: $text-sub;
        &.liked {
          color: #e0245e;
        }
      }
      &__reply {
        margin-right: 51px;
        &:hover {
          span {
            color: $brand-orange;
          }
          svg.actives-icon {
            fill: $brand-orange;
            stroke: $brand-orange;
          }
        }
      }
      &__like {
        &:hover {
          span {
            color: #e0245e;
          }
          svg.actives-icon {
            stroke: #e0245e;
          }
        }
      }
    }
    div.delete {
      position: absolute;
      top: 11px;
      right: 19px;
      svg:hover {
        fill: $brand-orange;
      }
    }
  }
}
</style>
