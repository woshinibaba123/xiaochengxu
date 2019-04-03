<template>
  <div class="city">
    <input type="text" v-model="tianqi" class="tianinp" placeholder="请输入城市">
    <i-button @click="handletian">查询天气</i-button>
    <ul class="tianList">
      <h1 class="citytitle">{{ city }}</h1>
      <li v-for="(item,index) in tianqiList" :key="index">
        <h1>{{ item.date }}</h1>
        <span>{{ item.type }}</span>
        <span>{{ item.high }} {{ item.low }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tianqi: "",
      tianqiList: [],
      city: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    handletian() {
      var _this = this
      wx.showModal({
        title: "提示",
        content: "查询天气",
        success(res) {
          if (res.confirm) {
            _this.getData();
            // console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    },
    getData() {
      this.$wxhttp
        .get({
          url: "https://www.apiopen.top/weatherApi?city=" + this.tianqi
        })
        .then(res => {
          // this.motto = res.data.music;
          this.tianqiList = res.data.forecast;
          this.city = res.data.city;
          console.log(this.tianqiList);
        });
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.city {
  text-align: center;
  line-height: 40px;
}
.citytitle {
  text-align: left;
}
.tianList {
  width: 90%;
  margin: auto;
}
.tianList li {
  border-bottom: 1px black solid;
}
</style>
