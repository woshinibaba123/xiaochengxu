<template>
  <div @click="clickHandle">
    <div class="userinfo" @click="bindViewTap">
      <!-- <img
        class="userinfo-avatar"
        v-if="userInfo.avatarUrl"
        :src="userInfo.avatarUrl"
        background-size="cover"
      > -->
      <!-- <img class="userinfo-avatar" :src="userInfo.avatarUrl" background-size="cover">

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div> -->
      <open-data type="userAvatarUrl" style="width:200rpx"></open-data>
    <open-data type="userNickName" lang="zh_CN"></open-data>
    </div>

    <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->
    <!-- <a href="/pages/counter/main">去往Vuex示例页面</a> -->
    <i-button @click="aaa">查看天气</i-button>
    <i-button @click="getInfo">上传文件</i-button>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</button>
  <camera
  :device-position="isback"
  flash="off"
  binderror="error"
  style="width: 100%; height: 300px;"
></camera>
<button type="primary" @tap="takePhoto">拍照</button>
<button type="primary" @tap="takeFan">摄像头翻转</button>
<image mode="widthFix" :src="src"></image>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      // motto: "人生第一个demo",
      userInfo: {
        nickName: "kiss you",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      src: '',
      isback: 'back'
    };
  },

  components: {
    card
  },
  mounted () {
     this.getSetting()
  },
  methods: {
    getSetting(){
      wx.getSetting({
        success: function(res){
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                // console.log(res.userInfo)
                //用户已经授权过
                console.log('用户已经授权过')
              }
            })
          }else{
            console.log('用户还未授权过')
          }
        }
      })

    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    aaa() {
      // const url = '../first/main'
      //     wx.navigateTo({ url })
      // this.getData();
      const url = '../tianqi/main'
      wx.switchTab({url})
    },
    onLaunch() {
      wx.chooseImage({
        success: function(res) {
          var tempFilePaths = res.tempFilePaths;
          wx.uploadFile({
            url: "https://example.weixin.qq.com/upload", 
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              user: "test"
            },
            success: function(res) {
              var data = res.data;
              //do something
            }
          })
        }
      })
    } ,
    /**
     * 
     * 老方法获取用户信息
     * 
     */

    getInfo(){
       wx.login({
      success: res => {
         // 发送 res.code 到后台换取 openId, sessionKey, unionId
          // 也就是发送到后端,后端通过接口发送到前端，前端接收用户信息等....
          wx.setStorageSync('code', res.code);
          console.log(wx.getStorageSync('code'))
          
        // 获取用户信息
        wx.getSetting({
          success: res => {
             if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  // 可以将 res 发送给后台解码出 unionId
                  this.userInfo = res.userInfo
                  console.log(res)

                  // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                  // 所以此处加入 callback 以防止这种情况
                  if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                 }
                }
            })
            }
          }
       })
     }
   })

    },
    takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.src = res.tempImagePath
        console.log(res)
        
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  takeFan(){
this.isback = this.isback === 'back'?'front':'back'
  }
    }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
