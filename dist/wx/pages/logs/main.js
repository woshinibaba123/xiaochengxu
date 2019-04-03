require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(118);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_63d89576_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(122);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(119)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_63d89576_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\logs\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63d89576", Component.options)
  } else {
    hotAPI.reload("data-v-63d89576", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 119:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 120:
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

var _require = __webpack_require__(121),
    $Message = _require.$Message;


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      novelList: [],
      novelName: "",
      //小程序没有refs，所以只能用动态布尔值控制关闭
      actions: [{
        name: "详情",
        color: "#fff",
        fontsize: "20",
        width: 100,
        icon: "like",
        background: "#ed3f14"
      }, {
        name: "返回",
        width: 100,
        color: "#80848f",
        fontsize: "20",
        icon: "undo"
      }]
    };
  },

  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  onLoad: function onLoad() {
    this.getList();

    // console.log(options.name);
  },
  methods: {
    getList: function getList() {
      var _this = this;

      this.$wxhttp.get({
        url: "https://www.apiopen.top/novelApi"
      }).then(function (res) {
        _this.novelList = res.data;
        console.log(res);
      });
    },
    handlerButton: function handlerButton(e) {
      if (e.mp._relatedInfo.anchorTargetText === "详情") {
        //   const url = '../tianqi/main?name='+
        // wx.switchTab({url})
        console.log(e);
      } else {
        console.log("不好意思点错了");
      }
    },
    handleclick: function handleclick(e) {
      var url = "../novelinfo/main?name=" + e;
      wx.navigateTo({ url: url });
    }
  }
});

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function getCtx (selector) {
    const pages = getCurrentPages();
    const ctx = pages[pages.length - 1];

    const componentCtx = ctx.selectComponent(selector);

    if (!componentCtx) {
        console.error('无法找到对应的组件，请按文档说明使用组件');
        return null;
    }
    return componentCtx;
}

function Toast(options) {
    const { selector = '#toast' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

Toast.hide = function (selector = '#toast') {
    const ctx = getCtx(selector);

    ctx.handleHide();
};

function Message(options) {
    const { selector = '#message' } = options;
    const ctx = getCtx(selector);

    ctx.handleShow(options);
}

module.exports = {
    $Toast: Toast,
    $Message: Message
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._l((_vm.novelList), function(item, index) {
    return _c('i-swipeout', {
      key: index,
      attrs: {
        "i-class": "i-swipeout-demo-item",
        "actions": _vm.actions,
        "eventid": '0_' + index,
        "mpcomid": '1_' + index
      },
      on: {
        "click": _vm.handlerButton
      }
    }, [_c('view', {
      slot: "content"
    }, [_c('i-cell', {
      attrs: {
        "i-class": "i-cell-padding",
        "title": item.bookname,
        "label": item.book_info,
        "mpcomid": '0_' + index
      }
    })], 1)])
  }), _vm._v(" "), _c('ul', {
    staticClass: "novelList"
  }, _vm._l((_vm.novelList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "novelListItem",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleclick(item.bookname)
        }
      }
    }, [_c('img', {
      staticClass: "novelimg",
      attrs: {
        "src": item.book_cover,
        "alt": ""
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "novelInfo"
    }, [_c('card', {
      attrs: {
        "text": item.bookname,
        "i-class": "cardname",
        "mpcomid": '2_' + index
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "bookinfo"
    }, [_vm._v(_vm._s(item.book_info))])], 1)])
  }))], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-63d89576", esExports)
  }
}

/***/ })

},[117]);