<template>
  <div>
    <i-swipeout
      v-for="(item,index) in novelList"
      :key="index"
      i-class="i-swipeout-demo-item"
      :actions="actions"
      @click="handlerButton"
    >
      <view slot="content">
        <i-cell i-class="i-cell-padding" :title="item.bookname" :label="item.book_info"></i-cell>
      </view>
    </i-swipeout>
    <ul class="novelList">
      <li
        v-for="(item,index) in novelList"
        :key="index"
        class="novelListItem"
        @click="handleclick(item.bookname)"
      >
        <img :src="item.book_cover" alt class="novelimg">
        <div class="novelInfo">
          <card :text="item.bookname" i-class="cardname"></card>
          <p class="bookinfo">{{ item.book_info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
const { $Message } = require("../../../static/dist/base/index");
import card from "@/components/card";
export default {
  data() {
    return {
      novelList: [],
      novelName: "",
      //小程序没有refs，所以只能用动态布尔值控制关闭
      actions: [
        {
          name: "详情",
          color: "#fff",
          fontsize: "20",
          width: 100,
          icon: "like",
          background: "#ed3f14"
        },
        {
          name: "返回",
          width: 100,
          color: "#80848f",
          fontsize: "20",
          icon: "undo"
        }
      ]
    };
  },
  components: {
    card
  },
   onLoad: function() {
this.getList()

    // console.log(options.name);
    },
  methods: {
    getList() {
      this.$wxhttp
        .get({
          url: "https://www.apiopen.top/novelApi"
        })
        .then(res => {
          this.novelList = res.data;
          console.log(res);
        });
    },
    handlerButton(e) {
      if (e.mp._relatedInfo.anchorTargetText === "详情") {
        //   const url = '../tianqi/main?name='+
        // wx.switchTab({url})
        console.log(e);
      } else {
        console.log("不好意思点错了");
      }
    },
    handleclick(e) {
      const url = "../novelinfo/main?name=" + e;
      wx.navigateTo({ url });
    }
  }
};
</script>

<style>
.novelList {
  padding: 15px 20px;
}
.novelimg {
  width: 200rpx;
  height: 300rpx;
}
.novelInfo {
  /* margin-left: 40rpx */
  width: 440rpx;
  float: right;
}
.novelListItem {
  /* display: flex; */
  margin: 10px 0;
}
.card {
  font-size: 30rpx;
  padding: 0rpx 0rpx 20rpx;
}
.bookinfo {
  font-size: 25rpx;
  color: #aaa;
  height: 197rpx;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: keep-all;
  text-overflow: ellipsis;
}
</style>
