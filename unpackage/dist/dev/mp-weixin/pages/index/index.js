"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello uni-app",
      indicatorDots: true,
      autoplay: true,
      pictures: [
        { "id": 1, "url": "/static/123.jpg" },
        { "id": 2, "url": "/static/logo.png" },
        { "id": 3, "url": "/static/e21a2a7fe1ea3f94469f8bb2bda79e3d.jgeg" }
      ]
    };
  },
  onLoad() {
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.f($data.pictures, (p, k0, i0) => {
      return {
        a: p.url,
        b: p.id
      };
    }),
    c: $data.indicatorDots,
    d: $data.autoplay
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/tangliqi/Desktop/个人代码/uni-app/uni-app-learn/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
