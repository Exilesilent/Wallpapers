require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(89);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f8e6ee22_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(94);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(90)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_f8e6ee22_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\category\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f8e6ee22", Component.options)
  } else {
    hotAPI.reload("data-v-f8e6ee22", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 90:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);


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
      img: [],
      images: [{
        id: 36,
        name: '4K专区',
        url: 'http://p19.qhimg.com/bdm/683_422_0/t0153352fb3735ab24a.jpg'
      }, {
        id: 9,
        name: '风景大片',
        url: 'http://p18.qhimg.com/bdm/683_422_0/t01674af4a0c9d2b6da.jpg'
      }, {
        id: 10,
        name: '炫酷时尚',
        url: 'http://p19.qhimg.com/bdm/341_210_0/t016993db2def404f58.jpg'
      }, {
        id: 5,
        name: '游戏壁纸',
        url: 'http://p19.qhimg.com/bdm/341_210_0/t01b779f0f138d0d381.jpg'
      }, {
        id: 26,
        name: '动漫卡通',
        url: 'http://p16.qhimg.com/bdm/341_210_0/t012c72977098ebb457.jpg'
      }, {
        id: 16,
        name: '劲爆体育',
        url: 'http://p18.qhimg.com/bdm/683_422_0/t01e1386a4a8e69d951.jpg'
      }, {
        id: 15,
        name: '小清新',
        url: 'http://p17.qhimg.com/bdm/341_210_0/t0134e7ef35f1a9debd.jpg'
      }, {
        id: 14,
        name: '萌宠动物',
        url: 'http://p16.qhimg.com/bdm/341_210_0/t0138079a813656e7c1.jpg'
      }],
      imagess: [{
        id: 36,
        name: '4K专区',
        url: 'http://p19.qhimg.com/bdm/683_422_0/t0153352fb3735ab24a.jpg'
      }, {
        id: 9,
        name: '风景大片',
        url: 'http://p18.qhimg.com/bdm/683_422_0/t01674af4a0c9d2b6da.jpg'
      }, {
        id: 10,
        name: '炫酷时尚',
        url: 'http://p19.qhimg.com/bdm/341_210_0/t016993db2def404f58.jpg'
      }, {
        id: 5,
        name: '游戏壁纸',
        url: 'http://p19.qhimg.com/bdm/341_210_0/t01b779f0f138d0d381.jpg'
      }, {
        id: 26,
        name: '动漫卡通',
        url: 'http://p16.qhimg.com/bdm/341_210_0/t012c72977098ebb457.jpg'
      }, {
        id: 16,
        name: '劲爆体育',
        url: 'http://p18.qhimg.com/bdm/683_422_0/t01e1386a4a8e69d951.jpg'
      }, {
        id: 15,
        name: '小清新',
        url: 'http://p17.qhimg.com/bdm/341_210_0/t0134e7ef35f1a9debd.jpg'
      }, {
        id: 14,
        name: '萌宠动物',
        url: 'http://p16.qhimg.com/bdm/341_210_0/t0138079a813656e7c1.jpg'
      }, {
        id: 22,
        name: '军事天地 ',
        url: 'http://p15.qhimg.com/bdm/683_422_0/t015abeaa023dfd2495.jpg'
      }, {
        id: 6,
        name: '美女模特',
        url: 'http://p17.qhimg.com/bdm/341_210_0/t01376b4835ce9371ed.jpg'
      }, {
        id: 30,
        name: '爱情美图',
        url: 'http://p17.qhimg.com/bdm/341_210_0/t01853651e4cc5ed4ef.jpg'
      }, {
        id: 12,
        name: '汽车天下',
        url: 'http://p15.qhimg.com/bdm/341_210_0/t011e1a7d92933bac30.jpg'
      }, {
        id: 35,
        name: '文字控',
        url: 'http://p18.qhimg.com/bdm/341_210_0/t01226a759fa1293f9d.jpg'
      }, {
        id: 18,
        name: 'BABY秀',
        url: 'http://p17.qhimg.com/bdm/341_210_0/t016395617044ed8e60.jpg'
      }, {
        id: 11,
        name: '明星风尚',
        url: 'http://p18.qhimg.com/bdm/341_210_0/t010b54ead9ceb5baff.jpg'
      }, {
        id: 29,
        name: '月历壁纸',
        url: 'http://p15.qhimg.com/bdm/341_210_0/t01b993e6c32ca1b865.jpg'
      }, {
        id: 7,
        name: '影视剧照',
        url: 'http://p17.qhimg.com/bdm/341_210_0/t01cba8a6185f2f8e03.jpg'
      }, {
        id: 13,
        name: '节日美图',
        url: 'http://p19.qhimg.com/bdm/341_210_0/t018eaacc0f419fc0cc.jpg'
      }]
    };
  },
  created: function created() {
    this.img = this.images;
  },

  methods: {
    _getRegisterInfo: function _getRegisterInfo() {
      wx.showLoading({
        title: '玩命加载中'
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 1000);
      this.img = this.imagess;
    },
    stop: function stop() {
      wx.showLoading({
        title: '努力刷新中'
      });
      setTimeout(function () {
        wx.hideLoading();
      }, 1000);
      this.img = this.images;
    }
  },
  // 上拉加载
  onReachBottom: function onReachBottom() {
    // 执行上拉执行的功能
    this._getRegisterInfo();
  },
  // 停止下拉刷新
  onPullDownRefresh: function onPullDownRefresh() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.stop();
              wx.stopPullDownRefresh();

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }))();
  }
});

/***/ }),

/***/ 94:
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
      "id": "main"
    }
  }, [_c('ul', _vm._l((_vm.img), function(item, index) {
    return _c('li', {
      key: item.id
    }, [_c('navigator', {
      attrs: {
        "url": '/pages/categoryList/main?id=' + item.id
      }
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": item.url
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "p"
    }, [_c('i', [_vm._v(_vm._s(item.name))])], 1)], 1)], 1)
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f8e6ee22", esExports)
  }
}

/***/ })

},[88]);