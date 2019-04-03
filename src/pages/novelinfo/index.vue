<template>
  <div>
      <img :src="novelinfo.cover" alt="" class="infoimg">
      <span class="spname">{{ novelinfo.title }}</span>
      <p>作者:<span>{{ novelinfo.author }}</span></p>
      <i-tag 
    class="i-tags"
    name="标签一" 
    color="green"
    type="border">
    标签一
</i-tag>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      novelinfo: {}
    };
  },
  onLoad: function(options) {
    this.name = options.name;
    this.getData();
     wx.setNavigationBarTitle({  
      title:'小说详情'  
    })  
  },
  methods: {
    getData() {
      this.$wxhttp
        .get({
          url: "https://www.apiopen.top/novelInfoApi?name=" + this.name
        })
        .then(res => {
          // this.motto = res.data.music;
          this.novelinfo = res.data.aladdin
          console.log(this.novelinfo);
        });
    }
  }
};
</script>
<style>
.infoimg{
    width: 400rpx;
    height: 500rpx;
    display: block;
    margin: auto
}
.spname{
    display:block;
    color: rgb(119, 12, 219);
    font-size: 35rpx;
    text-align: center;
    margin-top: 25rpx
}
p{
    padding: 20rpx
}
</style>

