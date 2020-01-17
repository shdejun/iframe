webpackJsonp([3],{

/***/ "01QC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5Dcv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "67pc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "BAlG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "GEfE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "T8EF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hw76":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "mUtA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./examples/App.vue
//
//
//
//
//
//
/* harmony default export */ var App = ({
  name: 'App'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2a46de10","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./examples/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_examples_App = (esExports);
// CONCATENATED MODULE: ./examples/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("5Dcv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_examples_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var examples_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// CONCATENATED MODULE: ./examples/router/index.js


vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [{
    path: '/actionSheet',
    name: 'actionSheet',
    component: function component(r) {
      return __webpack_require__.e/* require.ensure */(1).then((function () {
        return r(__webpack_require__("UxZx"));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }, {
    path: '/button',
    name: 'button',
    component: function component(r) {
      return __webpack_require__.e/* require.ensure */(0).then((function () {
        return r(__webpack_require__("J2t+"));
      }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
    }
  }]
}));
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.index-of.js
var es_array_index_of = __webpack_require__("XvIX");
var es_array_index_of_default = /*#__PURE__*/__webpack_require__.n(es_array_index_of);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("YY9M");
var es_function_name_default = /*#__PURE__*/__webpack_require__.n(es_function_name);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/plateNumber/components/selectProvince.vue
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
/* harmony default export */ var selectProvince = ({
  name: "selectProvince",
  props: {},
  data: function data() {
    return {
      visible: true,
      provinceLine1: ['京', '湘', '津', '鄂', '沪', '粤', '渝', '琼'],
      isActiveLine1: null,
      provinceLine2: ['翼', '川', '晋', '贵', '辽', '云', '吉', '陕'],
      isActiveLine2: null,
      provinceLine3: ['黑', '甘', '苏', '青', '浙', '皖', '藏', '闽'],
      isActiveLine3: null,
      provinceLine4: ['蒙', '赣', '桂', '鲁', '宁', '豫', '新'],
      isActiveLine4: null
    };
  },
  methods: {
    selectFirstWord: function selectFirstWord(e) {
      this.visible = false;
      this.$emit('onWord', e.target.innerText);
    },
    startTouch: function startTouch(e, cont) {
      this._data['isActiveLine' + cont] = e;
    },
    endTouch: function endTouch(e, cont) {
      this._data['isActiveLine' + cont] = 'cancel';
    },
    //遮罩层点击事件
    clickOverlay: function clickOverlay() {
      this.$emit('onWord');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ab4e4842","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/plateNumber/components/selectProvince.vue
var selectProvince_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('van-action-sheet',{attrs:{"id":"selectProvince","get-container":"body","round":false},on:{"click-overlay":_vm.clickOverlay},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('div',{staticClass:"first-word-wraps"},[_c('div',{staticClass:"first-word"},_vm._l((_vm.provinceLine1),function(province,index){return _c('div',{key:index,staticClass:"word",on:{"click":_vm.selectFirstWord,"touchstart":function($event){return _vm.startTouch(index,1)},"touchend":function($event){return _vm.endTouch(index,1)}}},[_c('span',{class:{'active':_vm.isActiveLine1==index}},[_vm._v(_vm._s(province))])])}),0),_vm._v(" "),_c('div',{staticClass:"first-word"},_vm._l((_vm.provinceLine2),function(province,index){return _c('div',{key:index,staticClass:"word",on:{"click":_vm.selectFirstWord,"touchstart":function($event){return _vm.startTouch(index,2)},"touchend":function($event){return _vm.endTouch(index,2)}}},[_c('span',{class:{'active':_vm.isActiveLine2==index}},[_vm._v("\n          "+_vm._s(province)+"\n        ")])])}),0),_vm._v(" "),_c('div',{staticClass:"first-word"},_vm._l((_vm.provinceLine3),function(province,index){return _c('div',{key:index,staticClass:"word",on:{"click":_vm.selectFirstWord,"touchstart":function($event){return _vm.startTouch(index,3)},"touchend":function($event){return _vm.endTouch(index,3)}}},[_c('span',{class:{'active':_vm.isActiveLine3==index}},[_vm._v("\n          "+_vm._s(province)+"\n        ")])])}),0),_vm._v(" "),_c('div',{staticClass:"first-word"},_vm._l((_vm.provinceLine4),function(province,index){return _c('div',{key:index,staticClass:"word last-line",on:{"click":_vm.selectFirstWord,"touchstart":function($event){return _vm.startTouch(index,4)},"touchend":function($event){return _vm.endTouch(index,4)}}},[_c('span',{class:{'active':_vm.isActiveLine4==index}},[_vm._v("\n          "+_vm._s(province)+"\n        ")])])}),0)])])],1)}
var selectProvince_staticRenderFns = []
var selectProvince_esExports = { render: selectProvince_render, staticRenderFns: selectProvince_staticRenderFns }
/* harmony default export */ var components_selectProvince = (selectProvince_esExports);
// CONCATENATED MODULE: ./packages/plateNumber/components/selectProvince.vue
function selectProvince_injectStyle (ssrContext) {
  __webpack_require__("01QC")
}
var selectProvince_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var selectProvince___vue_template_functional__ = false
/* styles */
var selectProvince___vue_styles__ = selectProvince_injectStyle
/* scopeId */
var selectProvince___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var selectProvince___vue_module_identifier__ = null
var selectProvince_Component = selectProvince_normalizeComponent(
  selectProvince,
  components_selectProvince,
  selectProvince___vue_template_functional__,
  selectProvince___vue_styles__,
  selectProvince___vue_scopeId__,
  selectProvince___vue_module_identifier__
)

/* harmony default export */ var plateNumber_components_selectProvince = (selectProvince_Component.exports);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("oLfA");
var es_array_join_default = /*#__PURE__*/__webpack_require__.n(es_array_join);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("XEfP");
var es_regexp_exec_default = /*#__PURE__*/__webpack_require__.n(es_regexp_exec);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("388n");
var es_string_split_default = /*#__PURE__*/__webpack_require__.n(es_string_split);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/plateNumber/components/numberAndEnglish.vue



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
/* harmony default export */ var numberAndEnglish = ({
  name: "numberAndEnglish",
  props: {
    // 是否为第一字
    isFristWord: {
      type: Boolean,
      default: false
    },
    //大小写
    isNeedCase: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      allKeyWord: {
        _1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        _2: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        _3: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        _4: ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
      },
      isCase: true,
      exportWord: '',
      visible: true,
      isNumber: true,
      isActiveLine1: null,
      isActiveLine2: null,
      isActiveLine3: null,
      isActiveLine4: null,
      isActiveLine5: null
    };
  },
  computed: {},
  methods: {
    //大小写转换
    toggleCase: function toggleCase() {
      if (!this.isNeedCase) return;

      if (this.isCase) {
        for (var key in this.allKeyWord) {
          if (key != '_1') {
            this.$set(this.allKeyWord, key, this.allKeyWord[key].join(',').toLowerCase().split(','));
          }
        }

        this.isCase = false;
      } else {
        for (var key in this.allKeyWord) {
          if (key != '_1') {
            this.$set(this.allKeyWord, key, this.allKeyWord[key].join(',').toUpperCase().split(','));
          }
        }

        this.isCase = true;
      }
    },
    selectWrod: function selectWrod(e, num) {
      //禁止I,O字幕
      if (num == 'num' && this.isFristWord || !this.isFristWord && (num == 'O' || num == 'I')) return;
      this.$emit('onWord', e.target.innerText);
    },
    delLastWord: function delLastWord() {
      this.$emit('onDelete');
    },
    startTouch: function startTouch(e, cont) {
      this._data['isActiveLine' + cont] = e;
    },
    endTouch: function endTouch(e, cont) {
      this._data['isActiveLine' + cont] = 'cancel';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-74b0bfd6","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/plateNumber/components/numberAndEnglish.vue
var numberAndEnglish_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('van-action-sheet',{staticClass:"number-and-english",attrs:{"get-container":"body","overlay":false,"round":false},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}},[_c('div',{staticClass:"first-word-wrap"},[_c('div',{staticClass:"number-list"},_vm._l((_vm.allKeyWord._1),function(item,index){return _c('div',{key:index,staticClass:"num-eng-item",class:{'disable-item':_vm.isFristWord,'active':_vm.isActiveLine1==index&&!_vm.isFristWord},on:{"touchstart":function($event){return _vm.startTouch(index,1)},"touchend":function($event){return _vm.endTouch(index,1)},"click":function($event){return _vm.selectWrod($event,'num')}}},[_vm._v("\n          "+_vm._s(item)+"\n        ")])}),0),_vm._v(" "),_c('div',{staticClass:"english-list"},[_c('div',{staticClass:"english-cell"},_vm._l((_vm.allKeyWord._2),function(item,index){return _c('div',{key:index,staticClass:"num-eng-item",class:{'disable-item':!_vm.isFristWord&&(item=='O'||item=='I'),'active':_vm.isActiveLine2==index},on:{"touchstart":function($event){return _vm.startTouch(index,2)},"touchend":function($event){return _vm.endTouch(index,2)},"click":function($event){return _vm.selectWrod($event,item)}}},[_vm._v("\n        "+_vm._s(item)+"\n        ")])}),0),_vm._v(" "),_c('div',{staticClass:"english-cell pad-x-10"},_vm._l((_vm.allKeyWord._3),function(item,index){return _c('div',{key:index,staticClass:"num-eng-item",class:{'active':_vm.isActiveLine3==index},on:{"touchstart":function($event){return _vm.startTouch(index,3)},"touchend":function($event){return _vm.endTouch(index,3)},"click":_vm.selectWrod}},[_vm._v(_vm._s(item))])}),0),_vm._v(" "),_c('div',{staticClass:"english-cell"},[_c('div',{staticClass:"num-eng-item",class:!_vm.isNeedCase?'disable-item':'',on:{"click":_vm.toggleCase}},[_c('van-icon',{attrs:{"name":"upgrade"}})],1),_vm._v(" "),_vm._l((_vm.allKeyWord._4),function(item,index){return _c('div',{key:index,staticClass:"num-eng-item",class:{'active':_vm.isActiveLine4==index},on:{"touchstart":function($event){return _vm.startTouch(index,4)},"touchend":function($event){return _vm.endTouch(index,4)},"click":_vm.selectWrod}},[_vm._v(_vm._s(item))])}),_vm._v(" "),_c('div',{staticClass:"num-eng-item",class:{'active':_vm.isActiveLine5=='delete'},on:{"touchstart":function($event){return _vm.startTouch('delete',5)},"touchend":function($event){return _vm.endTouch('delete',5)},"click":_vm.delLastWord}},[_c('van-icon',{attrs:{"name":"close"}})],1)],2)])])])],1)}
var numberAndEnglish_staticRenderFns = []
var numberAndEnglish_esExports = { render: numberAndEnglish_render, staticRenderFns: numberAndEnglish_staticRenderFns }
/* harmony default export */ var components_numberAndEnglish = (numberAndEnglish_esExports);
// CONCATENATED MODULE: ./packages/plateNumber/components/numberAndEnglish.vue
function numberAndEnglish_injectStyle (ssrContext) {
  __webpack_require__("67pc")
}
var numberAndEnglish_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var numberAndEnglish___vue_template_functional__ = false
/* styles */
var numberAndEnglish___vue_styles__ = numberAndEnglish_injectStyle
/* scopeId */
var numberAndEnglish___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var numberAndEnglish___vue_module_identifier__ = null
var numberAndEnglish_Component = numberAndEnglish_normalizeComponent(
  numberAndEnglish,
  components_numberAndEnglish,
  numberAndEnglish___vue_template_functional__,
  numberAndEnglish___vue_styles__,
  numberAndEnglish___vue_scopeId__,
  numberAndEnglish___vue_module_identifier__
)

/* harmony default export */ var plateNumber_components_numberAndEnglish = (numberAndEnglish_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/plateNumber/components/specialPlate.vue
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
/* harmony default export */ var specialPlate = ({
  name: "specialPlate",
  data: function data() {
    return {
      visible: true,
      actions: [{
        name: '小车'
      }, {
        name: '大车'
      }, {
        name: '教练'
      }, {
        name: '香港'
      }, {
        name: '澳门'
      }]
    };
  },
  computed: {},
  methods: {
    onSelect: function onSelect(e) {
      this.$emit('onSelect', e);
      this.visible = false;
    },
    onCancel: function onCancel() {
      this.$emit('onCancel');
    },
    clickOverlay: function clickOverlay() {
      this.$emit('onCancel');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fecbc520","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/plateNumber/components/specialPlate.vue
var specialPlate_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"specialPlate"}},[_c('van-action-sheet',{attrs:{"get-container":"body","actions":_vm.actions,"cancel-text":"取消","round":false},on:{"select":_vm.onSelect,"cancel":_vm.onCancel,"click-overlay":_vm.clickOverlay},model:{value:(_vm.visible),callback:function ($$v) {_vm.visible=$$v},expression:"visible"}})],1)}
var specialPlate_staticRenderFns = []
var specialPlate_esExports = { render: specialPlate_render, staticRenderFns: specialPlate_staticRenderFns }
/* harmony default export */ var components_specialPlate = (specialPlate_esExports);
// CONCATENATED MODULE: ./packages/plateNumber/components/specialPlate.vue
function specialPlate_injectStyle (ssrContext) {
  __webpack_require__("T8EF")
}
var specialPlate_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var specialPlate___vue_template_functional__ = false
/* styles */
var specialPlate___vue_styles__ = specialPlate_injectStyle
/* scopeId */
var specialPlate___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var specialPlate___vue_module_identifier__ = null
var specialPlate_Component = specialPlate_normalizeComponent(
  specialPlate,
  components_specialPlate,
  specialPlate___vue_template_functional__,
  specialPlate___vue_styles__,
  specialPlate___vue_scopeId__,
  specialPlate___vue_module_identifier__
)

/* harmony default export */ var plateNumber_components_specialPlate = (specialPlate_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/plateNumber/src/plateNumber.vue


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



/* harmony default export */ var plateNumber = ({
  name: "plate-number",
  props: {
    error: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'error',
    event: 'returnError'
  },
  data: function data() {
    return {
      isProvince: false,
      isShowNumEng: true,
      isSpecial: false,
      isPreventBlur: false,
      formData: {
        num0: '湘',
        num2: '',
        num3: '小车'
      }
    };
  },
  components: {
    numberAndEnglish: plateNumber_components_numberAndEnglish,
    selectProvince: plateNumber_components_selectProvince,
    specialPlate: plateNumber_components_specialPlate
  },
  methods: {
    //选择省份
    clickFirstWrap: function clickFirstWrap() {
      this.isProvince = !this.isProvince;
    },
    getProvince: function getProvince(e) {
      this.isProvince = false;
      if (!e) return;
      this.$set(this.formData, 'num0', e);
    },
    //选择具体车牌
    onWord: function onWord(e) {
      this.$emit('returnError', false);

      if (this.formData.num2.length > 7) {
        return;
      }

      this.$set(this.formData, 'num2', this.formData.num2 + e);
    },
    onDelete: function onDelete(e) {
      this.$emit('returnError', false);
      this.$set(this.formData, 'num2', this.formData.num2.substring(0, this.formData.num2.length - 1));
    },
    //特殊字段click
    clickSpecialWrap: function clickSpecialWrap() {
      this.isSpecial = true;
    },
    onCancelSpecial: function onCancelSpecial() {
      this.isSpecial = false;
    },
    onSelectSpecial: function onSelectSpecial(e) {
      this.isSpecial = false;

      if ((e.name == '香港' || e.name == '澳门') && this.formData.num2.length <= 1) {
        this.$set(this.formData, 'num0', '粤');
        this.$set(this.formData, 'num2', 'Z');
      }

      this.$set(this.formData, 'num3', e.name);
    },
    getSpecialNum: function getSpecialNum(word) {
      var resWord = '';

      switch (word) {
        case '小车':
          resWord = '';
          break;

        case '大车':
          resWord = '';
          break;

        case '教练':
          resWord = '学';
          break;

        case '香港':
          resWord = '港';
          break;

        case '澳门':
          resWord = '澳';
          break;
      }

      return resWord;
    }
  },
  mounted: function mounted() {
    var _this = this;

    document.body.addEventListener('click', function (e) {
      var className = e.target.className;
      var classArr = ['num-eng-item', 'num-eng-item disable-item', 'number-and-english', 'van-icon van-icon-close', 'van-icon van-icon-upgrade', 'plate-number-center media-middle', 'plate-number-inner', 'first-word-wrap'];

      if (classArr.indexOf(className) != -1) {
        _this.isShowNumEng = true;
      } else {
        _this.isShowNumEng = false;
        console.log(e, 'false');
      }
    });
  },
  watch: {
    formData: {
      handler: function handler(n, o) {
        var plateNumber = n.num0 + n.num2 + this.getSpecialNum(n.num3);
        this.$emit('onExportPlateNumber', plateNumber);
      },
      deep: true
    }
  },
  destroyed: function destroyed() {
    document.removeEventListener('click');
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-f21ad47c","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/plateNumber/src/plateNumber.vue
var plateNumber_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"plateNumber"}},[_c('div',{staticClass:"plate-number-title"},[_vm._v("车牌号码")]),_vm._v(" "),_c('div',{staticClass:"num0 media-middle mg-right-10",on:{"click":_vm.clickFirstWrap}},[_c('span',[_vm._v(_vm._s(_vm.formData.num0))])]),_vm._v(" "),_c('em',{staticClass:"spot"}),_vm._v(" "),_c('button',{staticClass:"plate-number-center media-middle",attrs:{"type":"default","size":"mini"},on:{"focus":function($event){_vm.isShowNumEng=true}}},[_c('div',{staticClass:"plate-number-inner",class:{'is-border-show':!_vm.isShowNumEng,'error-hint':_vm.error},on:{"click":function($event){_vm.isShowNumEng=true}}},[_vm._v("\n      "+_vm._s(_vm.formData.num2)+"\n    ")])]),_vm._v(" "),_c('div',{staticClass:"special-title"},[_vm._v("\n    "+_vm._s(_vm.getSpecialNum(_vm.formData.num3))+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"special-plate media-middle"},[_c('span',{staticClass:"special-plate-inner"},[_c('span',{staticClass:"media-middle",on:{"click":_vm.clickSpecialWrap}},[_vm._v(_vm._s(_vm.formData.num3))])])]),_vm._v(" "),_c('div'),_vm._v(" "),(_vm.isProvince)?_c('select-province',{on:{"onWord":_vm.getProvince}}):_vm._e(),_vm._v(" "),(_vm.isShowNumEng)?_c('number-and-english',{ref:"numEngs",attrs:{"isFristWord":_vm.formData.num2.length==0?true:false},on:{"onWord":_vm.onWord,"onDelete":_vm.onDelete}}):_vm._e(),_vm._v(" "),(_vm.isSpecial)?_c('special-plate',{on:{"onCancel":_vm.onCancelSpecial,"onSelect":_vm.onSelectSpecial}}):_vm._e()],1)}
var plateNumber_staticRenderFns = []
var plateNumber_esExports = { render: plateNumber_render, staticRenderFns: plateNumber_staticRenderFns }
/* harmony default export */ var src_plateNumber = (plateNumber_esExports);
// CONCATENATED MODULE: ./packages/plateNumber/src/plateNumber.vue
function plateNumber_injectStyle (ssrContext) {
  __webpack_require__("hw76")
}
var plateNumber_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var plateNumber___vue_template_functional__ = false
/* styles */
var plateNumber___vue_styles__ = plateNumber_injectStyle
/* scopeId */
var plateNumber___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var plateNumber___vue_module_identifier__ = null
var plateNumber_Component = plateNumber_normalizeComponent(
  plateNumber,
  src_plateNumber,
  plateNumber___vue_template_functional__,
  plateNumber___vue_styles__,
  plateNumber___vue_scopeId__,
  plateNumber___vue_module_identifier__
)

/* harmony default export */ var plateNumber_src_plateNumber = (plateNumber_Component.exports);

// CONCATENATED MODULE: ./packages/plateNumber/index.js


plateNumber_src_plateNumber.install = function (Vue) {
  Vue.component(plateNumber_src_plateNumber.name, plateNumber_src_plateNumber);
};

/* harmony default export */ var packages_plateNumber = (plateNumber_src_plateNumber);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/buttton/src/yjButton.vue
//
//
//
//
//
/* harmony default export */ var yjButton = ({
  name: 'yjButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1c8403c7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/buttton/src/yjButton.vue
var yjButton_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"yj-button yj-button-normal",class:[_vm.type?("yj-button-" + _vm.type):"yj-button-default",{'yj-button--plain':_vm.plain}]},[_vm._t("default")],2)}
var yjButton_staticRenderFns = []
var yjButton_esExports = { render: yjButton_render, staticRenderFns: yjButton_staticRenderFns }
/* harmony default export */ var src_yjButton = (yjButton_esExports);
// CONCATENATED MODULE: ./packages/buttton/src/yjButton.vue
function yjButton_injectStyle (ssrContext) {
  __webpack_require__("GEfE")
}
var yjButton_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var yjButton___vue_template_functional__ = false
/* styles */
var yjButton___vue_styles__ = yjButton_injectStyle
/* scopeId */
var yjButton___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var yjButton___vue_module_identifier__ = null
var yjButton_Component = yjButton_normalizeComponent(
  yjButton,
  src_yjButton,
  yjButton___vue_template_functional__,
  yjButton___vue_styles__,
  yjButton___vue_scopeId__,
  yjButton___vue_module_identifier__
)

/* harmony default export */ var buttton_src_yjButton = (yjButton_Component.exports);

// CONCATENATED MODULE: ./packages/buttton/index.js

/* harmony default export */ var buttton = (buttton_src_yjButton);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./packages/actionSheet/src/actionSheet.vue
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
/* harmony default export */ var actionSheet = ({
  name: 'actionSheet',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    //标题
    title: {
      type: String,
      default: ''
    },
    actions: {
      type: Array,
      default: function _default() {
        return [{
          name: '选项一'
        }, {
          name: '选项二'
        }];
      }
    }
  },
  model: {
    prop: 'show',
    event: 'onShow'
  },
  mounted: function mounted() {
    console.log(this.title, 'title111');
  },
  methods: {
    closeMask: function closeMask() {
      this.$emit('onShow', false);
    },
    selectItem: function selectItem(item) {
      this.$emit('onSelected', item);
      this.$emit('onShow', false);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-714b222d","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./packages/actionSheet/src/actionSheet.vue
var actionSheet_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"actionSheet"},[_c('div',{staticClass:"yj-overlayer",on:{"click":_vm.closeMask}}),_vm._v(" "),_c('div',{staticClass:"action-sheet-box"},[_c('div',{staticClass:"action-sheet-title"},[_vm._t("title",[_c('div',[_vm._v(_vm._s(_vm.title))])])],2),_vm._v(" "),_vm._l((_vm.actions),function(item,index){return _c('div',{key:index,staticClass:"action-sheet-innner",on:{"click":function($event){return _vm.selectItem(item)}}},[_c('div',[_vm._v(_vm._s(item.name))])])})],2)]):_vm._e()}
var actionSheet_staticRenderFns = []
var actionSheet_esExports = { render: actionSheet_render, staticRenderFns: actionSheet_staticRenderFns }
/* harmony default export */ var src_actionSheet = (actionSheet_esExports);
// CONCATENATED MODULE: ./packages/actionSheet/src/actionSheet.vue
function actionSheet_injectStyle (ssrContext) {
  __webpack_require__("BAlG")
}
var actionSheet_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var actionSheet___vue_template_functional__ = false
/* styles */
var actionSheet___vue_styles__ = actionSheet_injectStyle
/* scopeId */
var actionSheet___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var actionSheet___vue_module_identifier__ = null
var actionSheet_Component = actionSheet_normalizeComponent(
  actionSheet,
  src_actionSheet,
  actionSheet___vue_template_functional__,
  actionSheet___vue_styles__,
  actionSheet___vue_scopeId__,
  actionSheet___vue_module_identifier__
)

/* harmony default export */ var actionSheet_src_actionSheet = (actionSheet_Component.exports);

// CONCATENATED MODULE: ./packages/actionSheet/index.js

/* harmony default export */ var packages_actionSheet = (actionSheet_src_actionSheet);
// CONCATENATED MODULE: ./packages/index.js



const components = {
  yjButton: buttton,
  actionSheet: packages_actionSheet
  // plateNumber
}
const install = Vue => {
  //注册全局组件
  Object.keys(components).forEach(cpt=>{Vue.component(components[cpt].name,components[cpt])})
}
/* harmony default export */ var packages_0 = ({
  install
});
// CONCATENATED MODULE: ./examples/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue_esm["a" /* default */].config.productionTip = false;
vue_esm["a" /* default */].use(packages_0);
/* eslint-disable no-new */

new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  components: {
    App: examples_App
  },
  template: '<App/>'
});

/***/ })

},["mUtA"]);
//# sourceMappingURL=app.87ff21ef3d9ff7ff2d1c.js.map