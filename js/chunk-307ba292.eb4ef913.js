(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-307ba292"],{"312e":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tweet-container"},[a("div",{staticClass:"tweet"},[a("div",{staticClass:"tweet__user-avatar pointer",style:{backgroundImage:"url("+t.reply.commentUser.avatar+")"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.reply.commentUser.id)}}}),a("div",{staticClass:"tweet__info-container"},[a("div",{staticClass:"info"},[a("span",{staticClass:"name pointer",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.reply.commentUser.id)}}},[t._v(" "+t._s(t.reply.commentUser.name))]),a("span",{staticClass:"account pointer",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.reply.commentUser.id)}}},[t._v(t._s(t.reply.commentUser.account))]),a("span",{staticClass:"time"},[t._v("・"+t._s(t._f("fromNow")(t.reply.createdAt)))]),a("div",{staticClass:"reply-account"},[t._v(" 回覆 "),a("span",{staticClass:"reply-account",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toUserProfilePage(t.reply.tweetUserId)}}},[t._v(" "+t._s(t.reply.tweetUserAccount))])]),a("div",{staticClass:"content",class:{pointer:"user-all-replies"===t.$route.name},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toTweetPage(t.reply.TweetId)}}},[a("p",[t._v(t._s(t.reply.comment))])])])])])])},r=[],n=(a("b0c0"),a("ac0d")),i={props:{reply:{type:Object,require:!0}},methods:{toUserProfilePage:function(t){this.$router.push({name:"user-all-tweets",params:{user_id:t}})},toTweetPage:function(t){"user-all-replies"===this.$route.name&&this.$router.push({name:"user-tweet",params:{tweet_id:t}})}},mixins:[n["c"]]},c=i,o=(a("fca7"),a("2877")),l=Object(o["a"])(c,s,r,!1,null,"ee7ddfd0",null);e["a"]=l.exports},3452:function(t,e,a){"use strict";a("c348")},c348:function(t,e,a){},d641:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Tweet",{attrs:{"init-tweet-data":t.tweetsData},on:{"after-reply-clicked":t.showReplyModal}}),t.isEmptyData?a("div",{staticClass:"empty-data"},[t._v("目前尚無回覆")]):t._e(),t._l(t.replies,(function(t){return a("RepliesList",{key:t.commentId,attrs:{reply:t}})})),t.modalVisibility?a("TweetModal",{attrs:{"init-reply-tweet":t.tweetsData},on:{"after-close-modal":t.afterCloseModal}}):t._e()],2)},r=[],n=a("1da1"),i=(a("96cf"),a("d9e2"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tweet-wrapper"},[a("div",{staticClass:"tweet-content"},[a("div",{staticClass:"tweet-content-header"},[a("div",{staticClass:"user-avatar pointer",style:{backgroundImage:"url("+t.tweetData.avatar+")"},on:{click:function(e){return t.$router.push({name:"user-all-tweets",params:{user_id:t.tweetData.tweetUserId}})}}}),a("div",{staticClass:"user-data"},[a("span",{staticClass:"user-data-name pointer",on:{click:function(e){return t.$router.push({name:"user-all-tweets",params:{user_id:t.tweetData.tweetUserId}})}}},[t._v(t._s(t.tweetData.tweetUserName))]),a("span",{staticClass:"user-data-account account pointer",on:{click:function(e){return t.$router.push({name:"user-all-tweets",params:{user_id:t.tweetData.tweetUserId}})}}},[t._v(t._s(t.tweetData.tweetUserAccount))])])]),a("div",{staticClass:"tweet-content-body"},[a("p",{staticClass:"tweet-content-text"},[t._v(t._s(t.tweetData.description))]),a("span",{staticClass:"tweet-content-time"},[t._v(t._s(t._f("timeFormatFilter")(t.tweetData.createdAt)))])])]),a("div",{staticClass:"tweet-data"},[a("span",{staticClass:"tweet-data-count"},[t._v(t._s(t.tweetData.repliedCount)+" "),a("span",{staticClass:"tweet-data-title"},[t._v("回覆")])]),a("span",{staticClass:"tweet-data-count"},[t._v(t._s(t.tweetData.likeCount)+" "),a("span",{staticClass:"tweet-data-title"},[t._v("喜歡次數")])])]),a("div",{staticClass:"tweet-action"},[a("div",{staticClass:"btn-comment",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleReplyClicked(t.tweetData.TweetId)}}},[a("svg",{staticClass:"actives-icon actives-icon__reply",attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"#657786",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M12.8461 0.241934L8.69812 0.231934H8.69612C4.32212 0.231934 0.896118 3.65893 0.896118 8.03393C0.896118 12.1319 4.08212 15.2399 8.36112 15.4039V19.2319C8.36112 19.3399 8.40512 19.5179 8.48112 19.6349C8.62312 19.8599 8.86512 19.9819 9.11312 19.9819C9.25112 19.9819 9.39012 19.9439 9.51512 19.8639C9.77912 19.6959 15.9881 15.7239 17.6031 14.3579C19.5051 12.7479 20.6431 10.3879 20.6461 8.04593V8.02893C20.6401 3.66193 17.2161 0.241933 12.8461 0.240933V0.241934ZM16.6331 13.2139C15.4991 14.1739 11.7711 16.6189 9.86112 17.8569V14.6699C9.86112 14.2559 9.52612 13.9199 9.11112 13.9199H8.71512C5.05512 13.9199 2.39712 11.4439 2.39712 8.03393C2.39712 4.49993 5.16512 1.73193 8.69712 1.73193L12.8441 1.74193H12.8461C16.3781 1.74193 19.1461 4.50793 19.1481 8.03793C19.1451 9.94793 18.2061 11.8819 16.6341 13.2139H16.6331Z"}})])]),a("div",{staticClass:"btn-like"},[t.tweetData.liked?a("div",{on:{click:function(e){return t.deleteLike(t.tweetData.TweetId)}}},[a("svg",{staticClass:"actives-icon actives-icon__like",attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"#E0245E",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M11 19.6381H10.986C8.40295 19.5901 0.949951 12.8561 0.949951 6.47812C0.949951 3.41412 3.47495 0.724121 6.35295 0.724121C8.64295 0.724121 10.183 2.30412 10.999 3.45412C11.813 2.30612 13.353 0.724121 15.644 0.724121C18.524 0.724121 21.048 3.41412 21.048 6.47912C21.048 12.8551 13.594 19.5891 11.011 19.6361H11V19.6381Z"}})])]):a("div",{on:{click:function(e){return t.addLike(t.tweetData.TweetId)}}},[a("svg",{staticClass:"actives-icon actives-icon__unlike",attrs:{width:"25",height:"25",viewBox:"0 0 25 25",fill:"#657786",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M10.8 19.6379H10.786C8.203 19.5899 0.75 12.8559 0.75 6.47788C0.75 3.41388 3.275 0.723877 6.153 0.723877C8.443 0.723877 9.983 2.30388 10.799 3.45388C11.613 2.30588 13.153 0.723877 15.444 0.723877C18.324 0.723877 20.848 3.41388 20.848 6.47888C20.848 12.8549 13.394 19.5889 10.811 19.6359H10.8V19.6379ZM6.154 2.22488C4.074 2.22488 2.251 4.21288 2.251 6.47988C2.251 12.2199 9.285 18.0759 10.801 18.1379C12.319 18.0759 19.351 12.2209 19.351 6.47988C19.351 4.21288 17.528 2.22488 15.448 2.22488C12.92 2.22488 11.508 5.16088 11.496 5.18988C11.266 5.75188 10.34 5.75188 10.109 5.18988C10.095 5.15988 8.684 2.22488 6.155 2.22488H6.154Z"}})])])])])])}),c=[],o=a("6783"),l=a("ac0d"),u={props:{initTweetData:{type:Object,require:!0}},data:function(){return{tweetData:{}}},watch:{initTweetData:function(){this.fetchTweet()}},methods:{fetchTweet:function(){this.tweetData=this.initTweetData},addLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].addLike(t);case 3:if(s=a.sent,"success"===s.data.status){a.next=6;break}throw new Error;case 6:e.tweetData.liked=!0,e.tweetData.likeCount+=1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.ToastError({title:"無法讚好推文，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},deleteLike:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].deleteLike(t);case 3:if(s=a.sent,"success"===s.data.status){a.next=6;break}throw new Error(s.message);case 6:e.tweetData.liked=!1,e.tweetData.likeCount-=1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.ToastError({title:"無法取消讚好推文，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},handleReplyClicked:function(t){this.$emit("after-reply-clicked",t)}},created:function(){var t=this.$route.params.tweet_id;this.fetchTweet(t)},mixins:[l["c"],l["a"]]},p=u,w=(a("3452"),a("2877")),d=Object(w["a"])(p,i,c,!1,null,"521ae672",null),v=d.exports,f=a("312e"),h=a("4287"),m={mixins:[l["a"]],components:{Tweet:v,RepliesList:f["a"],TweetModal:h["a"]},data:function(){return{tweetsData:{},replies:[],modalVisibility:!1,isEmptyData:!1}},methods:{getReplies:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].getReplies(t);case 3:if(s=a.sent,"OK"===s.statusText){a.next=6;break}throw new Error(s.message);case 6:e.replies=s.data,e.isEmptyData=!e.replies.length,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),e.ToastError({title:"無法取得回覆清單，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},fetchTweet:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].getTweet(t);case 3:s=a.sent,e.tweetsData=s.data,a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),e.ToastError({title:"無法取得推文，請稍後再試"});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},showReplyModal:function(t){this.fetchTweet(t),this.modalVisibility=!0},afterCloseModal:function(){this.modalVisibility=!1;var t=this.$route.params.tweet_id;this.getReplies(t),this.fetchTweet(t)}},created:function(){var t=this.$route.params.tweet_id;this.getReplies(t),this.fetchTweet(t)},beforeRouteUpdate:function(t,e,a){var s=t.params.tweet_id;this.fetchTweet(s),this.getReplies(s),a()}},C=m,_=Object(w["a"])(C,s,r,!1,null,null,null);e["default"]=_.exports},d954:function(t,e,a){},fca7:function(t,e,a){"use strict";a("d954")}}]);
//# sourceMappingURL=chunk-307ba292.eb4ef913.js.map