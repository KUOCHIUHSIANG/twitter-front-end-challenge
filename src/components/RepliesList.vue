<template>
  <div class="tweet-container">
    <div class="tweet">
      <div
        class="tweet__user-avatar pointer"
        :style="{ backgroundImage: 'url(' + reply.commentUser.avatar + ')' }"
        @click.stop.prevent="toUserProfilePage(reply.commentUser.id)"
      ></div>
      <div class="tweet__info-container">
        <div class="info">
          <span
            class="name pointer"
            @click.stop.prevent="toUserProfilePage(reply.commentUser.id)"
          >
            {{ reply.commentUser.name }}</span
          >
          <span
            class="account pointer"
            @click.stop.prevent="toUserProfilePage(reply.commentUser.id)"
            >{{ reply.commentUser.account }}</span
          >
          <span class="time">・{{ reply.createdAt | fromNow }}</span>
          <div class="reply-account">
            回覆
            <span
              class="reply-account"
              @click.stop.prevent="toUserProfilePage(reply.tweetUserId)"
            >
              {{ reply.tweetUserAccount }}</span
            >
          </div>
          <div
            class="content"
            :class="{ pointer: $route.name === 'user-all-replies' }"
            @click.stop.prevent="toTweetPage(reply.TweetId)"
          >
            <p>{{ reply.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixin";

export default {
  props: {
    reply: {
      type: Object,
      require: true,
    },
  },
  methods: {
    toUserProfilePage(userId) {
      this.$router.push({
        name: "user-all-tweets",
        params: { user_id: userId },
      });
    },
    toTweetPage(tweetId) {
      if (this.$route.name !== "user-all-replies") return;
      this.$router.push({
        name: "user-tweet",
        params: { tweet_id: tweetId },
      });
    },
  },
  mixins: [fromNowFilter],
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
    div.reply-account {
      color: $text-sub;
    }
    .time {
      color: $text-sub;
    }
    .content {
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
      span {
        &::before {
          position: absolute;
          top: 11px;
          right: 19px;
          content: "\2717";
          color: $text-sub;
        }
        &:hover::before {
          color: $brand-orange;
        }
      }
    }
  }
}
</style>
