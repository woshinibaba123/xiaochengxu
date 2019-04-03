require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(102);



// add this to handle exception
// Vue.config.errorHandler = function (err) {
//   if (console && console.error) {
//     console.error(err)
//   }
// }

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_359ab0fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(105);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-359ab0fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_359ab0fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-359ab0fe", Component.options)
  } else {
    hotAPI.reload("data-v-359ab0fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
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
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  mounted: function mounted() {
    this.getSetting();
  },

  methods: {
    getSetting: function getSetting() {
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function success(res) {
                // console.log(res.userInfo)
                //用户已经授权过
                console.log('用户已经授权过');
              }
            });
          } else {
            console.log('用户还未授权过');
          }
        }
      });
    },
    bindViewTap: function bindViewTap() {
      var url = "../logs/main";
      if (global.mpvuePlatform === "wx") {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    aaa: function aaa() {
      // const url = '../first/main'
      //     wx.navigateTo({ url })
      // this.getData();
      var url = '../tianqi/main';
      wx.switchTab({ url: url });
    },
    onLaunch: function onLaunch() {
      wx.chooseImage({
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          wx.uploadFile({
            url: "https://example.weixin.qq.com/upload",
            filePath: tempFilePaths[0],
            name: "file",
            formData: {
              user: "test"
            },
            success: function success(res) {
              var data = res.data;
              //do something
            }
          });
        }
      });
    },

    /**
     * 
     * 老方法获取用户信息
     * 
     */

    getInfo: function getInfo() {
      var _this = this;

      wx.login({
        success: function success(res) {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          // 也就是发送到后端,后端通过接口发送到前端，前端接收用户信息等....
          wx.setStorageSync('code', res.code);
          console.log(wx.getStorageSync('code'));

          // 获取用户信息
          wx.getSetting({
            success: function success(res) {
              if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({
                  success: function success(res) {
                    // 可以将 res 发送给后台解码出 unionId
                    _this.userInfo = res.userInfo;
                    console.log(res);

                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (_this.userInfoReadyCallback) {
                      _this.userInfoReadyCallback(res);
                    }
                  }
                });
              }
            }
          });
        }
      });
    },
    takePhoto: function takePhoto() {
      var _this2 = this;

      var ctx = wx.createCameraContext();
      ctx.takePhoto({
        quality: 'high',
        success: function success(res) {
          _this2.src = res.tempImagePath;
          console.log(res);
        }
      });
    },
    error: function error(e) {
      console.log(e.detail);
    },
    takeFan: function takeFan() {
      this.isback = this.isback === 'back' ? 'front' : 'back';
    }
  }
});

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.clickHandle
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [_c('open-data', {
    staticStyle: {
      "width": "200rpx"
    },
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('open-data', {
    attrs: {
      "type": "userNickName",
      "lang": "zh_CN",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('i-button', {
    attrs: {
      "eventid": '1',
      "mpcomid": '2'
    },
    on: {
      "click": _vm.aaa
    }
  }, [_vm._v("查看天气")]), _vm._v(" "), _c('i-button', {
    attrs: {
      "eventid": '2',
      "mpcomid": '3'
    },
    on: {
      "click": _vm.getInfo
    }
  }, [_vm._v("上传文件")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '3'
    },
    on: {
      "getuserinfo": _vm.bindGetUserInfo,
      "click": _vm.getUserInfo1
    }
  }, [_vm._v("获取权限")]), _vm._v(" "), _c('camera', {
    staticStyle: {
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "device-position": _vm.isback,
      "flash": "off",
      "binderror": "error",
      "mpcomid": '4'
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '4'
    },
    on: {
      "tap": _vm.takePhoto
    }
  }, [_vm._v("拍照")]), _vm._v(" "), _c('button', {
    attrs: {
      "type": "primary",
      "eventid": '5'
    },
    on: {
      "tap": _vm.takeFan
    }
  }, [_vm._v("摄像头翻转")]), _vm._v(" "), _c('image', {
    attrs: {
      "mode": "widthFix",
      "src": _vm.src
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-359ab0fe", esExports)
  }
}

/***/ })

},[101]);