require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9dfc92e0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(108);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9dfc92e0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9dfc92e0", Component.options)
  } else {
    hotAPI.reload("data-v-9dfc92e0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_swiper__ = __webpack_require__(104);


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
  components: { Swiper: __WEBPACK_IMPORTED_MODULE_2__components_swiper__["a" /* default */] },
  data: function data() {
    return {
      img: [],
      page: 12,
      images: [{
        id: 1,
        url: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'
      }, {
        id: 2,
        url: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201306/2013062320262198.jpg'
      }, {
        id: 3,
        url: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201406/2014063021281300.gif'
      }],
      items: [],
      pageNum: '',
      pageSize: 8
    };
  },
  created: function created() {
    this.getImaData(this.pageSize);
    this.getSwiper();
  },

  methods: {
    getImaData: function getImaData(pageSize) {
      var _this = this;

      this.$axios.get('/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=' + pageSize + '&from=360chrome').then(function (res) {
        _this.items = res.data.data;
      });
    },
    _getRegisterInfo: function _getRegisterInfo() {
      var _this2 = this;

      wx.showLoading({
        title: '玩命加载中'
      });
      this.pageSize = this.pageSize + 8;
      this.$axios.get('/index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=0&count=' + this.pageSize + '&from=360chrome').then(function (res) {
        _this2.items = res.data.data;
        setTimeout(function () {
          wx.hideLoading();
        }, 1000);
      });
    },
    stop: function stop() {
      wx.showLoading({
        title: '努力刷新中'
      });
      this.page = Math.floor(Math.random() * 20);
      this.getSwiper();
      this.getImaData(8);
      setTimeout(function () {
        wx.hideLoading();
      }, 1000);
    },

    // 获取轮播图的请求
    getSwiper: function getSwiper() {
      var _this3 = this;

      this.$axios.get('index.php?c=WallPaper&a=getAppsByOrder&order=create_time&start=' + this.page + '&count=3&from=360chrome').then(function (res) {
        _this3.img = res.data.data;
      });
    }
  },
  // 上拉加载
  onReachBottom: function onReachBottom() {
    // 执行上拉执行的功能
    this._getRegisterInfo();
  },
  // 停止下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    var _this4 = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this4.stop();
              wx.stopPullDownRefresh();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this4);
    }))();
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_232c3544_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-232c3544"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_232c3544_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\swiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-232c3544", Component.options)
  } else {
    hotAPI.reload("data-v-232c3544", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    images: {
      type: Array
    }
  },
  data: function data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 500
    };
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('swiper', {
    staticClass: "swiper",
    attrs: {
      "indicator-dots": _vm.indicatorDots,
      "circular": "",
      "autoplay": _vm.autoplay,
      "interval": _vm.interval,
      "duration": _vm.duration
    }
  }, _vm._l((_vm.images), function(item, index) {
    return _c('block', {
      key: index
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('navigator', {
      attrs: {
        "url": '/pages/list/main?id=' + item.id + '&url=' + item.url + '&tag=' + item.utag + '&create=' + item.create_time + '&update=' + item.update_time
      }
    }, [_c('image', {
      staticClass: "slide-image",
      attrs: {
        "src": item.url_mobile,
        "mode": "aspectFill"
      }
    })])], 1)], 1)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-232c3544", esExports)
  }
}

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    attrs: {
      "id": "top"
    }
  }, [_c('a', {
    attrs: {
      "id": "search",
      "href": "/pages/search/main"
    }
  }, [_c('img', {
    attrs: {
      "src": "../../../static/img/search@3x.png"
    }
  }), _vm._v(" "), _c('h3', [_vm._v("搜索主题、图片")])], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "slide"
    }
  }, [_c('Swiper', {
    attrs: {
      "images": _vm.img,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    attrs: {
      "id": "main"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      staticClass: "list",
      attrs: {
        "eventid": '0_' + index
      },
      model: {
        value: (_vm.items),
        callback: function($$v) {
          _vm.items = $$v
        },
        expression: "items"
      }
    }, [_c('navigator', {
      staticClass: "link",
      attrs: {
        "url": '/pages/list/main?id=' + item.id + '&url=' + item.url + '&tag=' + item.utag + '&create=' + item.create_time + '&update=' + item.update_time
      }
    }, [_c('img', {
      key: item.id,
      attrs: {
        "src": item.url
      }
    })])], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9dfc92e0", esExports)
  }
}

/***/ })

},[100]);