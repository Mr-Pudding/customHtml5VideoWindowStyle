"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/main.js?{"page":"pages%2FvideoText%2FSubNvue%2FSubNvue"} ***!
  \*******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_videoText_SubNvue_SubNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/videoText/SubNvue/SubNvue.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_videoText_SubNvue_SubNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_videoText_SubNvue_SubNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/videoText/SubNvue/SubNvue'\n        _pages_videoText_SubNvue_SubNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_videoText_SubNvue_SubNvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBNEU7QUFDNUUsUUFBUSx5RkFBRztBQUNYLFFBQVEseUZBQUc7QUFDWCxRQUFRLHlGQUFHO0FBQ1gsZ0JBQWdCLHlGQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy92aWRlb1RleHQvU3ViTnZ1ZS9TdWJOdnVlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL3ZpZGVvVGV4dC9TdWJOdnVlL1N1Yk52dWUnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/main.js?{"type":"appStyle"} ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".text-main": {
    "": {
      "color": [
        "#FB7299",
        0,
        0,
        2
      ]
    }
  },
  ".text-main-hover": {
    "": {
      "color": [
        "#d6bc52",
        0,
        0,
        3
      ]
    }
  },
  ".text-main-disabled": {
    "": {
      "color": [
        "#FB85A7",
        0,
        0,
        4
      ]
    }
  },
  ".bg-main": {
    "": {
      "backgroundColor": [
        "#FB7299",
        0,
        0,
        6
      ]
    }
  },
  ".bg-main-hover": {
    "": {
      "backgroundColor": [
        "#FB85A7",
        0,
        0,
        7
      ]
    }
  },
  ".bg-main-disabled": {
    "": {
      "backgroundColor": [
        "#FB85A7",
        0,
        0,
        8
      ]
    }
  },
  ".border-main": {
    "": {
      "borderColor": [
        "#FB7299",
        1,
        0,
        10
      ]
    }
  },
  ".line-h": {
    "": {
      "lineHeight": [
        1.2,
        0,
        0,
        12
      ]
    }
  },
  ".f-divider": {
    "": {
      "height": [
        "18rpx",
        0,
        0,
        14
      ],
      "backgroundColor": [
        "#F5F5F4",
        0,
        0,
        14
      ]
    }
  },
  ".iconfont": {
    "": {
      "fontFamily": [
        "iconfont",
        0,
        0,
        16
      ]
    }
  },
  ".view": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        17
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        17
      ],
      "color": [
        "#0E151D",
        0,
        0,
        17
      ]
    }
  },
  ".text": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        17
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        17
      ],
      "color": [
        "#0E151D",
        0,
        0,
        17
      ]
    }
  },
  ".row": {
    "": {
      "marginRight": [
        "-20rpx",
        0,
        0,
        19
      ],
      "marginLeft": [
        "-20rpx",
        0,
        0,
        19
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        19
      ],
      "flexDirection": [
        "row",
        0,
        0,
        19
      ]
    }
  },
  ".col-1": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "62.5rpx",
        0,
        0,
        32
      ]
    }
  },
  ".col-2": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "125rpx",
        0,
        0,
        31
      ]
    }
  },
  ".col-3": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "187.5rpx",
        0,
        0,
        30
      ]
    }
  },
  ".col-4": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "250rpx",
        0,
        0,
        29
      ]
    }
  },
  ".col-5": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "312.5rpx",
        0,
        0,
        28
      ]
    }
  },
  ".col-6": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "375rpx",
        0,
        0,
        27
      ]
    }
  },
  ".col-7": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "437.5rpx",
        0,
        0,
        26
      ]
    }
  },
  ".col-8": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "500rpx",
        0,
        0,
        25
      ]
    }
  },
  ".col-9": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "562.5rpx",
        0,
        0,
        24
      ]
    }
  },
  ".col-10": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "625rpx",
        0,
        0,
        23
      ]
    }
  },
  ".col-11": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "687.5rpx",
        0,
        0,
        22
      ]
    }
  },
  ".col-12": {
    "": {
      "position": [
        "relative",
        0,
        0,
        20
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        20
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        20
      ],
      "width": [
        "750rpx",
        0,
        0,
        21
      ]
    }
  },
  ".col-offset-12": {
    "": {
      "marginLeft": [
        "750rpx",
        0,
        0,
        33
      ]
    }
  },
  ".col-offset-11": {
    "": {
      "marginLeft": [
        "687.5rpx",
        0,
        0,
        34
      ]
    }
  },
  ".col-offset-10": {
    "": {
      "marginLeft": [
        "625rpx",
        0,
        0,
        35
      ]
    }
  },
  ".col-offset-9": {
    "": {
      "marginLeft": [
        "562.5rpx",
        0,
        0,
        36
      ]
    }
  },
  ".col-offset-8": {
    "": {
      "marginLeft": [
        "500rpx",
        0,
        0,
        37
      ]
    }
  },
  ".col-offset-7": {
    "": {
      "marginLeft": [
        "437.5rpx",
        0,
        0,
        38
      ]
    }
  },
  ".col-offset-6": {
    "": {
      "marginLeft": [
        "375rpx",
        0,
        0,
        39
      ]
    }
  },
  ".col-offset-5": {
    "": {
      "marginLeft": [
        "312.5rpx",
        0,
        0,
        40
      ]
    }
  },
  ".col-offset-4": {
    "": {
      "marginLeft": [
        "250rpx",
        0,
        0,
        41
      ]
    }
  },
  ".col-offset-3": {
    "": {
      "marginLeft": [
        "187.5rpx",
        0,
        0,
        42
      ]
    }
  },
  ".col-offset-2": {
    "": {
      "marginLeft": [
        "125rpx",
        0,
        0,
        43
      ]
    }
  },
  ".col-offset-1": {
    "": {
      "marginLeft": [
        "62.5rpx",
        0,
        0,
        44
      ]
    }
  },
  ".col-offset-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        45
      ]
    }
  },
  ".flex": {
    "": {
      "flexDirection": [
        "row",
        0,
        0,
        47
      ]
    }
  },
  ".flex-row": {
    "": {
      "flexDirection": [
        "row",
        1,
        0,
        48
      ]
    }
  },
  ".flex-column": {
    "": {
      "flexDirection": [
        "column",
        1,
        0,
        49
      ]
    }
  },
  ".flex-row-reverse": {
    "": {
      "flexDirection": [
        "row-reverse",
        1,
        0,
        50
      ]
    }
  },
  ".flex-column-reverse": {
    "": {
      "flexDirection": [
        "column-reverse",
        1,
        0,
        51
      ]
    }
  },
  ".flex-wrap": {
    "": {
      "flexWrap": [
        "wrap",
        0,
        0,
        52
      ]
    }
  },
  ".flex-nowrap": {
    "": {
      "flexWrap": [
        "nowrap",
        0,
        0,
        53
      ]
    }
  },
  ".justify-start": {
    "": {
      "justifyContent": [
        "flex-start",
        0,
        0,
        54
      ]
    }
  },
  ".justify-end": {
    "": {
      "justifyContent": [
        "flex-end",
        0,
        0,
        55
      ]
    }
  },
  ".justify-between": {
    "": {
      "justifyContent": [
        "space-between",
        0,
        0,
        56
      ]
    }
  },
  ".justify-center": {
    "": {
      "justifyContent": [
        "center",
        0,
        0,
        57
      ]
    }
  },
  ".align-center": {
    "": {
      "alignItems": [
        "center",
        0,
        0,
        58
      ]
    }
  },
  ".align-stretch": {
    "": {
      "alignItems": [
        "stretch",
        0,
        0,
        59
      ]
    }
  },
  ".align-start": {
    "": {
      "alignItems": [
        "flex-start",
        0,
        0,
        60
      ]
    }
  },
  ".align-end": {
    "": {
      "alignItems": [
        "flex-end",
        0,
        0,
        61
      ]
    }
  },
  ".flex-1": {
    "": {
      "flex": [
        1,
        0,
        0,
        62
      ]
    }
  },
  ".flex-2": {
    "": {
      "flex": [
        2,
        0,
        0,
        63
      ]
    }
  },
  ".flex-3": {
    "": {
      "flex": [
        3,
        0,
        0,
        64
      ]
    }
  },
  ".flex-4": {
    "": {
      "flex": [
        4,
        0,
        0,
        65
      ]
    }
  },
  ".flex-5": {
    "": {
      "flex": [
        5,
        0,
        0,
        66
      ]
    }
  },
  ".container": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        67
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        67
      ]
    }
  },
  ".m-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        69
      ],
      "marginRight": [
        0,
        0,
        0,
        69
      ],
      "marginBottom": [
        0,
        0,
        0,
        69
      ],
      "marginLeft": [
        0,
        0,
        0,
        69
      ]
    }
  },
  ".m-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        70
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        70
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        70
      ],
      "marginLeft": [
        "10rpx",
        0,
        0,
        70
      ]
    }
  },
  ".m-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        71
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        71
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        71
      ],
      "marginLeft": [
        "20rpx",
        0,
        0,
        71
      ]
    }
  },
  ".m-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        72
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        72
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        72
      ],
      "marginLeft": [
        "30rpx",
        0,
        0,
        72
      ]
    }
  },
  ".m-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        73
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        73
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        73
      ],
      "marginLeft": [
        "40rpx",
        0,
        0,
        73
      ]
    }
  },
  ".m-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        74
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        74
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        74
      ],
      "marginLeft": [
        "50rpx",
        0,
        0,
        74
      ]
    }
  },
  ".mt-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        75
      ]
    }
  },
  ".mt-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        76
      ]
    }
  },
  ".mt-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        77
      ]
    }
  },
  ".mt-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        78
      ]
    }
  },
  ".mt-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        79
      ]
    }
  },
  ".mt-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        80
      ]
    }
  },
  ".mb-0": {
    "": {
      "marginBottom": [
        0,
        0,
        0,
        81
      ]
    }
  },
  ".mb-1": {
    "": {
      "marginBottom": [
        "10rpx",
        0,
        0,
        82
      ]
    }
  },
  ".mb-2": {
    "": {
      "marginBottom": [
        "20rpx",
        0,
        0,
        83
      ]
    }
  },
  ".mb-3": {
    "": {
      "marginBottom": [
        "30rpx",
        0,
        0,
        84
      ]
    }
  },
  ".mb-4": {
    "": {
      "marginBottom": [
        "40rpx",
        0,
        0,
        85
      ]
    }
  },
  ".mb-5": {
    "": {
      "marginBottom": [
        "50rpx",
        0,
        0,
        86
      ]
    }
  },
  ".ml-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        87
      ]
    }
  },
  ".ml-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        88
      ]
    }
  },
  ".ml-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        89
      ]
    }
  },
  ".ml-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        90
      ]
    }
  },
  ".ml-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        91
      ]
    }
  },
  ".ml-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        92
      ]
    }
  },
  ".mr-0": {
    "": {
      "marginRight": [
        0,
        0,
        0,
        93
      ]
    }
  },
  ".mr-1": {
    "": {
      "marginRight": [
        "10rpx",
        0,
        0,
        94
      ]
    }
  },
  ".mr-2": {
    "": {
      "marginRight": [
        "20rpx",
        0,
        0,
        95
      ]
    }
  },
  ".mr-3": {
    "": {
      "marginRight": [
        "30rpx",
        0,
        0,
        96
      ]
    }
  },
  ".mr-4": {
    "": {
      "marginRight": [
        "40rpx",
        0,
        0,
        97
      ]
    }
  },
  ".mr-5": {
    "": {
      "marginRight": [
        "50rpx",
        0,
        0,
        98
      ]
    }
  },
  ".my-0": {
    "": {
      "marginTop": [
        0,
        0,
        0,
        99
      ],
      "marginBottom": [
        0,
        0,
        0,
        99
      ]
    }
  },
  ".my-1": {
    "": {
      "marginTop": [
        "10rpx",
        0,
        0,
        100
      ],
      "marginBottom": [
        "10rpx",
        0,
        0,
        100
      ]
    }
  },
  ".my-2": {
    "": {
      "marginTop": [
        "20rpx",
        0,
        0,
        101
      ],
      "marginBottom": [
        "20rpx",
        0,
        0,
        101
      ]
    }
  },
  ".my-3": {
    "": {
      "marginTop": [
        "30rpx",
        0,
        0,
        102
      ],
      "marginBottom": [
        "30rpx",
        0,
        0,
        102
      ]
    }
  },
  ".my-4": {
    "": {
      "marginTop": [
        "40rpx",
        0,
        0,
        103
      ],
      "marginBottom": [
        "40rpx",
        0,
        0,
        103
      ]
    }
  },
  ".my-5": {
    "": {
      "marginTop": [
        "50rpx",
        0,
        0,
        104
      ],
      "marginBottom": [
        "50rpx",
        0,
        0,
        104
      ]
    }
  },
  ".mx-0": {
    "": {
      "marginLeft": [
        0,
        0,
        0,
        105
      ],
      "marginRight": [
        0,
        0,
        0,
        105
      ]
    }
  },
  ".mx-1": {
    "": {
      "marginLeft": [
        "10rpx",
        0,
        0,
        106
      ],
      "marginRight": [
        "10rpx",
        0,
        0,
        106
      ]
    }
  },
  ".mx-2": {
    "": {
      "marginLeft": [
        "20rpx",
        0,
        0,
        107
      ],
      "marginRight": [
        "20rpx",
        0,
        0,
        107
      ]
    }
  },
  ".mx-3": {
    "": {
      "marginLeft": [
        "30rpx",
        0,
        0,
        108
      ],
      "marginRight": [
        "30rpx",
        0,
        0,
        108
      ]
    }
  },
  ".mx-4": {
    "": {
      "marginLeft": [
        "40rpx",
        0,
        0,
        109
      ],
      "marginRight": [
        "40rpx",
        0,
        0,
        109
      ]
    }
  },
  ".mx-5": {
    "": {
      "marginLeft": [
        "50rpx",
        0,
        0,
        110
      ],
      "marginRight": [
        "50rpx",
        0,
        0,
        110
      ]
    }
  },
  ".p-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        111
      ],
      "paddingRight": [
        0,
        0,
        0,
        111
      ],
      "paddingBottom": [
        0,
        0,
        0,
        111
      ],
      "paddingLeft": [
        0,
        0,
        0,
        111
      ]
    }
  },
  ".p": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        112
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        112
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        112
      ],
      "paddingLeft": [
        "5rpx",
        0,
        0,
        112
      ]
    }
  },
  ".p-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        113
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        113
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        113
      ],
      "paddingLeft": [
        "10rpx",
        0,
        0,
        113
      ]
    }
  },
  ".p-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        114
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        114
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        114
      ],
      "paddingLeft": [
        "20rpx",
        0,
        0,
        114
      ]
    }
  },
  ".p-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        115
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        115
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        115
      ],
      "paddingLeft": [
        "30rpx",
        0,
        0,
        115
      ]
    }
  },
  ".p-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        116
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        116
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        116
      ],
      "paddingLeft": [
        "40rpx",
        0,
        0,
        116
      ]
    }
  },
  ".p-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        117
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        117
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        117
      ],
      "paddingLeft": [
        "50rpx",
        0,
        0,
        117
      ]
    }
  },
  ".pt-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        118
      ]
    }
  },
  ".pt": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        119
      ]
    }
  },
  ".pt-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        120
      ]
    }
  },
  ".pt-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        121
      ]
    }
  },
  ".pt-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        122
      ]
    }
  },
  ".pt-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        123
      ]
    }
  },
  ".pt-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        124
      ]
    }
  },
  ".pb-0": {
    "": {
      "paddingBottom": [
        0,
        0,
        0,
        125
      ]
    }
  },
  ".pb-1": {
    "": {
      "paddingBottom": [
        "10rpx",
        0,
        0,
        126
      ]
    }
  },
  ".pb": {
    "": {
      "paddingBottom": [
        "5rpx",
        0,
        0,
        127
      ]
    }
  },
  ".pb-2": {
    "": {
      "paddingBottom": [
        "20rpx",
        0,
        0,
        128
      ]
    }
  },
  ".pb-3": {
    "": {
      "paddingBottom": [
        "30rpx",
        0,
        0,
        129
      ]
    }
  },
  ".pb-4": {
    "": {
      "paddingBottom": [
        "40rpx",
        0,
        0,
        130
      ]
    }
  },
  ".pb-5": {
    "": {
      "paddingBottom": [
        "50rpx",
        0,
        0,
        131
      ]
    }
  },
  ".pl-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        132
      ]
    }
  },
  ".pl": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        133
      ]
    }
  },
  ".pl-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        134
      ]
    }
  },
  ".pl-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        135
      ]
    }
  },
  ".pl-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        136
      ]
    }
  },
  ".pl-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        137
      ]
    }
  },
  ".pl-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        138
      ]
    }
  },
  ".pr-0": {
    "": {
      "paddingRight": [
        0,
        0,
        0,
        139
      ]
    }
  },
  ".pr": {
    "": {
      "paddingRight": [
        "5rpx",
        0,
        0,
        140
      ]
    }
  },
  ".pr-1": {
    "": {
      "paddingRight": [
        "10rpx",
        0,
        0,
        141
      ]
    }
  },
  ".pr-2": {
    "": {
      "paddingRight": [
        "20rpx",
        0,
        0,
        142
      ]
    }
  },
  ".pr-3": {
    "": {
      "paddingRight": [
        "30rpx",
        0,
        0,
        143
      ]
    }
  },
  ".pr-4": {
    "": {
      "paddingRight": [
        "40rpx",
        0,
        0,
        144
      ]
    }
  },
  ".pr-5": {
    "": {
      "paddingRight": [
        "50rpx",
        0,
        0,
        145
      ]
    }
  },
  ".py-0": {
    "": {
      "paddingTop": [
        0,
        0,
        0,
        146
      ],
      "paddingBottom": [
        0,
        0,
        0,
        146
      ]
    }
  },
  ".py": {
    "": {
      "paddingTop": [
        "5rpx",
        0,
        0,
        147
      ],
      "paddingBottom": [
        "5rpx",
        0,
        0,
        147
      ]
    }
  },
  ".py-1": {
    "": {
      "paddingTop": [
        "10rpx",
        0,
        0,
        148
      ],
      "paddingBottom": [
        "10rpx",
        0,
        0,
        148
      ]
    }
  },
  ".py-2": {
    "": {
      "paddingTop": [
        "20rpx",
        0,
        0,
        149
      ],
      "paddingBottom": [
        "20rpx",
        0,
        0,
        149
      ]
    }
  },
  ".py-3": {
    "": {
      "paddingTop": [
        "30rpx",
        0,
        0,
        150
      ],
      "paddingBottom": [
        "30rpx",
        0,
        0,
        150
      ]
    }
  },
  ".py-4": {
    "": {
      "paddingTop": [
        "40rpx",
        0,
        0,
        151
      ],
      "paddingBottom": [
        "40rpx",
        0,
        0,
        151
      ]
    }
  },
  ".py-5": {
    "": {
      "paddingTop": [
        "50rpx",
        0,
        0,
        152
      ],
      "paddingBottom": [
        "50rpx",
        0,
        0,
        152
      ]
    }
  },
  ".px-0": {
    "": {
      "paddingLeft": [
        0,
        0,
        0,
        153
      ],
      "paddingRight": [
        0,
        0,
        0,
        153
      ]
    }
  },
  ".px-1": {
    "": {
      "paddingLeft": [
        "10rpx",
        0,
        0,
        154
      ],
      "paddingRight": [
        "10rpx",
        0,
        0,
        154
      ]
    }
  },
  ".px": {
    "": {
      "paddingLeft": [
        "5rpx",
        0,
        0,
        155
      ],
      "paddingRight": [
        "5rpx",
        0,
        0,
        155
      ]
    }
  },
  ".px-2": {
    "": {
      "paddingLeft": [
        "20rpx",
        0,
        0,
        156
      ],
      "paddingRight": [
        "20rpx",
        0,
        0,
        156
      ]
    }
  },
  ".px-3": {
    "": {
      "paddingLeft": [
        "30rpx",
        0,
        0,
        157
      ],
      "paddingRight": [
        "30rpx",
        0,
        0,
        157
      ]
    }
  },
  ".px-4": {
    "": {
      "paddingLeft": [
        "40rpx",
        0,
        0,
        158
      ],
      "paddingRight": [
        "40rpx",
        0,
        0,
        158
      ]
    }
  },
  ".px-5": {
    "": {
      "paddingLeft": [
        "50rpx",
        0,
        0,
        159
      ],
      "paddingRight": [
        "50rpx",
        0,
        0,
        159
      ]
    }
  },
  ".font-smaller": {
    "": {
      "fontSize": [
        "15rpx",
        0,
        0,
        161
      ]
    }
  },
  ".font-small": {
    "": {
      "fontSize": [
        "20rpx",
        0,
        0,
        162
      ]
    }
  },
  ".font-sm": {
    "": {
      "fontSize": [
        "25rpx",
        0,
        0,
        163
      ]
    }
  },
  ".font": {
    "": {
      "fontSize": [
        "30rpx",
        1,
        0,
        164
      ]
    }
  },
  ".font-md": {
    "": {
      "fontSize": [
        "35rpx",
        1,
        0,
        165
      ]
    }
  },
  ".font-lg": {
    "": {
      "fontSize": [
        "40rpx",
        0,
        0,
        166
      ]
    }
  },
  ".h1": {
    "": {
      "fontSize": [
        "80rpx",
        0,
        0,
        167
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        167
      ]
    }
  },
  ".h2": {
    "": {
      "fontSize": [
        "60rpx",
        0,
        0,
        168
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        168
      ]
    }
  },
  ".h3": {
    "": {
      "fontSize": [
        "45rpx",
        0,
        0,
        169
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        169
      ]
    }
  },
  ".h4": {
    "": {
      "fontSize": [
        "32rpx",
        0,
        0,
        170
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        170
      ]
    }
  },
  ".h5": {
    "": {
      "fontSize": [
        "30rpx",
        0,
        0,
        171
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        171
      ]
    }
  },
  ".h6": {
    "": {
      "fontSize": [
        "28rpx",
        0,
        0,
        172
      ],
      "lineHeight": [
        1.8,
        0,
        0,
        172
      ]
    }
  },
  ".text-through": {
    "": {
      "textDecoration": [
        "line-through",
        0,
        0,
        175
      ]
    }
  },
  ".text-left": {
    "": {
      "textAlign": [
        "left",
        0,
        0,
        177
      ]
    }
  },
  ".text-right": {
    "": {
      "textAlign": [
        "right",
        0,
        0,
        178
      ]
    }
  },
  ".text-center": {
    "": {
      "textAlign": [
        "center",
        0,
        0,
        179
      ]
    }
  },
  ".text-ellipsis": {
    "": {
      "lines": [
        1,
        0,
        0,
        181
      ]
    }
  },
  ".font-weight-light": {
    "": {
      "fontWeight": [
        "300",
        0,
        0,
        183
      ]
    }
  },
  ".font-weight-lighter": {
    "": {
      "fontWeight": [
        "100",
        0,
        0,
        185
      ]
    }
  },
  ".font-weight-normal": {
    "": {
      "fontWeight": [
        "400",
        0,
        0,
        187
      ]
    }
  },
  ".font-weight-bold": {
    "": {
      "fontWeight": [
        "700",
        0,
        0,
        189
      ]
    }
  },
  ".font-weight-bolder": {
    "": {
      "fontWeight": [
        "bold",
        0,
        0,
        191
      ]
    }
  },
  ".font-italic": {
    "": {
      "fontStyle": [
        "italic",
        0,
        0,
        193
      ]
    }
  },
  ".text-white": {
    "": {
      "color": [
        "#ffffff",
        0,
        0,
        196
      ]
    }
  },
  ".text-primary": {
    "": {
      "color": [
        "#007bff",
        0,
        0,
        197
      ]
    }
  },
  ".text-hover-primary": {
    "": {
      "color": [
        "#0056b3",
        0,
        0,
        198
      ]
    }
  },
  ".text-secondary": {
    "": {
      "color": [
        "#6c757d",
        0,
        0,
        199
      ]
    }
  },
  ".text-hover-secondary": {
    "": {
      "color": [
        "#494f54",
        0,
        0,
        200
      ]
    }
  },
  ".text-success": {
    "": {
      "color": [
        "#28a745",
        0,
        0,
        201
      ]
    }
  },
  ".text-hover-success": {
    "": {
      "color": [
        "#19692c",
        0,
        0,
        202
      ]
    }
  },
  ".text-info": {
    "": {
      "color": [
        "#17a2b8",
        0,
        0,
        203
      ]
    }
  },
  ".text-hover-info": {
    "": {
      "color": [
        "#0f6674",
        0,
        0,
        204
      ]
    }
  },
  ".text-warning": {
    "": {
      "color": [
        "#ffc107",
        0,
        0,
        205
      ]
    }
  },
  ".text-hover-warning": {
    "": {
      "color": [
        "#ba8b00",
        0,
        0,
        206
      ]
    }
  },
  ".text-danger": {
    "": {
      "color": [
        "#dc3545",
        0,
        0,
        207
      ]
    }
  },
  ".text-hover-danger": {
    "": {
      "color": [
        "#a71d2a",
        0,
        0,
        208
      ]
    }
  },
  ".text-light": {
    "": {
      "color": [
        "#f8f9fa",
        0,
        0,
        209
      ]
    }
  },
  ".text-hover-light": {
    "": {
      "color": [
        "#cbd3da",
        0,
        0,
        210
      ]
    }
  },
  ".text-dark": {
    "": {
      "color": [
        "#343a40",
        0,
        0,
        211
      ]
    }
  },
  ".text-hover-dark": {
    "": {
      "color": [
        "#121416",
        0,
        0,
        212
      ]
    }
  },
  ".text-body": {
    "": {
      "color": [
        "#212529",
        0,
        0,
        213
      ]
    }
  },
  ".text-muted": {
    "": {
      "color": [
        "#6c757d",
        0,
        0,
        214
      ]
    }
  },
  ".text-light-muted": {
    "": {
      "color": [
        "#A9A5A0",
        0,
        0,
        216
      ]
    }
  },
  ".text-light-black": {
    "": {
      "color": [
        "rgba(0,0,0,0.5)",
        0,
        0,
        217
      ]
    }
  },
  ".text-light-white": {
    "": {
      "color": [
        "rgba(255,255,255,0.5)",
        0,
        0,
        218
      ]
    }
  },
  ".bg-primary": {
    "": {
      "backgroundColor": [
        "#007bff",
        0,
        0,
        220
      ]
    }
  },
  ".bg-hover-primary": {
    "": {
      "backgroundColor:hover": [
        "#0062cc",
        0,
        0,
        221
      ]
    }
  },
  ".bg-secondary": {
    "": {
      "backgroundColor": [
        "#6c757d",
        0,
        0,
        222
      ]
    }
  },
  ".bg-hover-secondary": {
    "": {
      "backgroundColor:hover": [
        "#545b62",
        0,
        0,
        223
      ]
    }
  },
  ".bg-success": {
    "": {
      "backgroundColor": [
        "#28a745",
        0,
        0,
        224
      ]
    }
  },
  ".bg-hover-success": {
    "": {
      "backgroundColor": [
        "#1e7e34",
        0,
        0,
        225
      ]
    }
  },
  ".bg-info": {
    "": {
      "backgroundColor": [
        "#17a2b8",
        0,
        0,
        226
      ]
    }
  },
  ".bg-hover-info": {
    "": {
      "backgroundColor": [
        "#117a8b",
        0,
        0,
        227
      ]
    }
  },
  ".bg-warning": {
    "": {
      "backgroundColor": [
        "#ffc107",
        0,
        0,
        228
      ]
    }
  },
  ".bg-hover-warning": {
    "": {
      "backgroundColor": [
        "#d39e00",
        0,
        0,
        229
      ]
    }
  },
  ".bg-danger": {
    "": {
      "backgroundColor": [
        "#dc3545",
        0,
        0,
        230
      ]
    }
  },
  ".bg-hover-danger": {
    "": {
      "backgroundColor": [
        "#bd2130",
        0,
        0,
        231
      ]
    }
  },
  ".bg-light": {
    "": {
      "backgroundColor": [
        "#f8f9fa",
        0,
        0,
        232
      ]
    }
  },
  ".bg-hover-light": {
    "": {
      "backgroundColor": [
        "#dae0e5",
        0,
        0,
        233
      ]
    }
  },
  ".bg-dark": {
    "": {
      "backgroundColor": [
        "#343a40",
        0,
        0,
        234
      ]
    }
  },
  ".bg-hover-dark": {
    "": {
      "backgroundColor": [
        "#1d2124",
        0,
        0,
        235
      ]
    }
  },
  ".bg-white": {
    "": {
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        236
      ]
    }
  },
  ".bg-transparent": {
    "": {
      "backgroundColor": [
        "rgba(0,0,0,0)",
        0,
        0,
        237
      ]
    }
  },
  ".border": {
    "": {
      "borderWidth": [
        "1rpx",
        0,
        0,
        239
      ],
      "borderStyle": [
        "solid",
        0,
        0,
        239
      ],
      "borderColor": [
        "#dee2e6",
        0,
        0,
        239
      ]
    }
  },
  ".border-top": {
    "": {
      "borderTopWidth": [
        "1rpx",
        0,
        0,
        240
      ],
      "borderTopStyle": [
        "solid",
        0,
        0,
        240
      ],
      "borderTopColor": [
        "#dee2e6",
        0,
        0,
        240
      ]
    }
  },
  ".border-right": {
    "": {
      "borderRightWidth": [
        "1rpx",
        0,
        0,
        241
      ],
      "borderRightStyle": [
        "solid",
        0,
        0,
        241
      ],
      "borderRightColor": [
        "#dee2e6",
        0,
        0,
        241
      ]
    }
  },
  ".border-bottom": {
    "": {
      "borderBottomWidth": [
        "1rpx",
        0,
        0,
        242
      ],
      "borderBottomStyle": [
        "solid",
        0,
        0,
        242
      ],
      "borderBottomColor": [
        "#dee2e6",
        0,
        0,
        242
      ]
    }
  },
  ".border-left": {
    "": {
      "borderLeftWidth": [
        "1rpx",
        0,
        0,
        243
      ],
      "borderLeftStyle": [
        "solid",
        0,
        0,
        243
      ],
      "borderLeftColor": [
        "#dee2e6",
        0,
        0,
        243
      ]
    }
  },
  ".border-0": {
    "": {
      "borderWidth": [
        0,
        1,
        0,
        244
      ]
    }
  },
  ".border-top-0": {
    "": {
      "borderTopWidth": [
        0,
        1,
        0,
        245
      ]
    }
  },
  ".border-right-0": {
    "": {
      "borderRightWidth": [
        0,
        1,
        0,
        246
      ]
    }
  },
  ".border-bottom-0": {
    "": {
      "borderBottomWidth": [
        0,
        1,
        0,
        247
      ]
    }
  },
  ".border-left-0": {
    "": {
      "borderLeftWidth": [
        0,
        1,
        0,
        248
      ]
    }
  },
  ".border-primary": {
    "": {
      "borderColor": [
        "#007bff",
        0,
        0,
        249
      ]
    }
  },
  ".border-secondary": {
    "": {
      "borderColor": [
        "#6c757d",
        0,
        0,
        250
      ]
    }
  },
  ".border-light-secondary": {
    "": {
      "borderColor": [
        "#E9E8E5",
        0,
        0,
        251
      ]
    }
  },
  ".border-success": {
    "": {
      "borderColor": [
        "#28a745",
        0,
        0,
        252
      ]
    }
  },
  ".border-info": {
    "": {
      "borderColor": [
        "#17a2b8",
        0,
        0,
        253
      ]
    }
  },
  ".border-warning": {
    "": {
      "borderColor": [
        "#ffc107",
        0,
        0,
        254
      ]
    }
  },
  ".border-danger": {
    "": {
      "borderColor": [
        "#dc3545",
        0,
        0,
        255
      ]
    }
  },
  ".border-light": {
    "": {
      "borderColor": [
        "#f8f9fa",
        0,
        0,
        256
      ]
    }
  },
  ".border-dark": {
    "": {
      "borderColor": [
        "#343a40",
        0,
        0,
        257
      ]
    }
  },
  ".border-white": {
    "": {
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        258
      ]
    }
  },
  ".rounded": {
    "": {
      "borderRadius": [
        "8rpx",
        0,
        0,
        260
      ]
    }
  },
  ".rounded-lg": {
    "": {
      "borderRadius": [
        "14rpx",
        0,
        0,
        261
      ]
    }
  },
  ".rounded-top": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        262
      ],
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        262
      ]
    }
  },
  ".rounded-top-lg": {
    "": {
      "borderTopLeftRadius": [
        "14rpx",
        0,
        0,
        263
      ],
      "borderTopRightRadius": [
        "14rpx",
        0,
        0,
        263
      ]
    }
  },
  ".rounded-right": {
    "": {
      "borderTopRightRadius": [
        "8rpx",
        0,
        0,
        264
      ],
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        264
      ]
    }
  },
  ".rounded-bottom": {
    "": {
      "borderBottomRightRadius": [
        "8rpx",
        0,
        0,
        265
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        265
      ]
    }
  },
  ".rounded-bottom-lg": {
    "": {
      "borderBottomRightRadius": [
        "14rpx",
        0,
        0,
        266
      ],
      "borderBottomLeftRadius": [
        "14rpx",
        0,
        0,
        266
      ]
    }
  },
  ".rounded-left": {
    "": {
      "borderTopLeftRadius": [
        "8rpx",
        0,
        0,
        267
      ],
      "borderBottomLeftRadius": [
        "8rpx",
        0,
        0,
        267
      ]
    }
  },
  ".rounded-circle": {
    "": {
      "borderRadius": [
        "100rpx",
        0,
        0,
        268
      ]
    }
  },
  ".rounded-0": {
    "": {
      "borderRadius": [
        0,
        0,
        0,
        269
      ]
    }
  },
  ".overflow-hidden": {
    "": {
      "overflow": [
        "hidden",
        0,
        0,
        272
      ]
    }
  },
  ".position-relative": {
    "": {
      "position": [
        "relative",
        0,
        0,
        274
      ]
    }
  },
  ".position-absolute": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        275
      ]
    }
  },
  ".position-fixed": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        276
      ]
    }
  },
  ".fixed-top": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        278
      ],
      "top": [
        0,
        0,
        0,
        278
      ],
      "right": [
        0,
        0,
        0,
        278
      ],
      "left": [
        0,
        0,
        0,
        278
      ],
      "zIndex": [
        1030,
        0,
        0,
        278
      ]
    }
  },
  ".fixed-bottom": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        280
      ],
      "right": [
        0,
        0,
        0,
        280
      ],
      "bottom": [
        0,
        0,
        0,
        280
      ],
      "left": [
        0,
        0,
        0,
        280
      ],
      "zIndex": [
        1030,
        0,
        0,
        280
      ]
    }
  },
  ".top-0": {
    "": {
      "top": [
        0,
        0,
        0,
        281
      ]
    }
  },
  ".left-0": {
    "": {
      "left": [
        0,
        0,
        0,
        282
      ]
    }
  },
  ".right-0": {
    "": {
      "right": [
        0,
        0,
        0,
        283
      ]
    }
  },
  ".bottom-0": {
    "": {
      "bottom": [
        0,
        0,
        0,
        284
      ]
    }
  },
  ".mask": {
    "": {
      "position": [
        "fixed",
        0,
        0,
        286
      ],
      "left": [
        0,
        0,
        0,
        286
      ],
      "right": [
        0,
        0,
        0,
        286
      ],
      "top": [
        0,
        0,
        0,
        286
      ],
      "bottom": [
        0,
        0,
        0,
        286
      ],
      "zIndex": [
        100,
        0,
        0,
        286
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!***********************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubNvue.nvue?vue&type=template&id=62b84046&mpType=page */ 6);\n/* harmony import */ var _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubNvue.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1f849ece\",\n  false,\n  _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoText/SubNvue/SubNvue.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQ21NO0FBQ25NLGdCQUFnQix1TUFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9TdWJOdnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiODQwNDYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJOdnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxZjg0OWVjZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlb1RleHQvU3ViTnZ1ZS9TdWJOdnVlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=template&id=62b84046&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./SubNvue.nvue?vue&type=template&id=62b84046&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=template&id=62b84046&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["bg-dark"] },
    [
      _c(
        "u-video",
        {
          ref: "video",
          staticStyle: { width: "750rpx", height: "225px" },
          attrs: {
            src: "/static/video/2a63d467-21f2-47d3-9374-ad6b6510195d.mp4",
            id: "video",
            controls: false,
            showCenterPlayBtn: "false",
            showFullscreenBtn: "false",
            showProgress: "false",
            poster:
              "https://ts1.cn.mm.bing.net/th/id/R-C.9d8a96bd65a019ba06cb59b286049cf9?rik=bs0DV1%2feLLyv0w&riu=http%3a%2f%2fhao5.qhimg.com%2ft013cdbbf054e85312e.jpg%3fsize%3d1282x818&ehk=CqVoMD2%2bobbh1kMr%2bBq6sKvDE3qiw8lnE5D3QrE6nsA%3d&risl=&pid=ImgRaw&r=0"
          },
          on: {
            fullscreenchange: _vm.fullScreenChange,
            timeupdate: _vm.timeupdate,
            play: function($event) {
              _vm.isplay = true
            },
            pause: function($event) {
              _vm.isplay = false
            }
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: [
                    "position-absolute",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  style: _vm.videoFullScreen
                },
                [
                  _c("view", {
                    staticClass: [
                      "position-absolute",
                      "",
                      "left-0",
                      "right-0",
                      "bottom-0",
                      "top-0"
                    ],
                    on: {
                      touchstart: _vm.modalTouchS,
                      touchmove: _vm.modalTouchM,
                      touchend: _vm.modalTouchE
                    }
                  }),
                  _vm.staticTime
                    ? _c(
                        "view",
                        {
                          staticClass: ["p-2", "rounded"],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.3)" }
                        },
                        [
                          _vm.promptBoxStatus.type == "time"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["font", "text-white"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatTime")(_vm.currentTime)
                                    ) +
                                      "/" +
                                      _vm._s(_vm._f("formatTime")(_vm.duration))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.promptBoxStatus.type == "message"
                            ? _c(
                                "u-text",
                                {
                                  staticClass: ["font", "text-white"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [_vm._v(_vm._s(_vm.promptBoxStatus.message))]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm.bottomOrTopControlBarShow && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-opctay-top",
                            "position-absolute",
                            "top-0",
                            "left-0",
                            "right-0"
                          ]
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: ["flex", "align-center"],
                              staticStyle: { height: "26px" }
                            },
                            [
                              _c(
                                "view",
                                {
                                  staticClass: ["video-btn"],
                                  on: {
                                    click: function($event) {
                                      _vm.fullOrExitScreen()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["iconfont"],
                                      staticStyle: {
                                        fontSize: "20px",
                                        color: "#036EB8"
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    },
                                    [_vm._v("")]
                                  )
                                ]
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex",
                                    "justify-center",
                                    "align-center"
                                  ]
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["ml-3", "text-white"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    },
                                    [_vm._v("标题sdsbajdajhbaddHSJfFBJJFfjhbh")]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.bottomOrTopControlBarShow && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-opctay-bot",
                            "position-absolute",
                            "bottom-0",
                            "left-0",
                            "right-0"
                          ]
                        },
                        [
                          _c("view", { staticStyle: { height: "88px" } }, [
                            _c(
                              "view",
                              {
                                staticClass: ["flex-1", "flex", "align-center"]
                              },
                              [
                                _c("progress", {
                                  attrs: {
                                    curTime: _vm.currentTime,
                                    duration: _vm.duration
                                  },
                                  on: {
                                    valueChange: _vm.propressValueChange,
                                    update: _vm.screenTimeUpdate
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "view",
                              {
                                staticClass: ["flex", "align-stretch"],
                                staticStyle: { height: "40px" }
                              },
                              [
                                _c(
                                  "view",
                                  {
                                    staticClass: ["video-btn"],
                                    on: {
                                      click: function($event) {
                                        _vm.videoPlayOrPaused()
                                      }
                                    }
                                  },
                                  [
                                    !_vm.isplay
                                      ? _c(
                                          "u-text",
                                          {
                                            staticClass: ["iconfont"],
                                            staticStyle: {
                                              fontSize: "30px",
                                              color: "#036EB8"
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" }
                                          },
                                          [_vm._v("")]
                                        )
                                      : _c(
                                          "u-text",
                                          {
                                            staticClass: ["iconfont"],
                                            staticStyle: {
                                              fontSize: "30px",
                                              color: "#036EB8"
                                            },
                                            appendAsTree: true,
                                            attrs: { append: "tree" }
                                          },
                                          [_vm._v("")]
                                        )
                                  ]
                                ),
                                _c(
                                  "view",
                                  {
                                    staticClass: [
                                      "flex",
                                      "align-center",
                                      "justify-center"
                                    ],
                                    staticStyle: { width: "80px" }
                                  },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["font-sm", "text-white"],
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("formatTime")(
                                              _vm.currentTime
                                            )
                                          ) +
                                            "/" +
                                            _vm._s(
                                              _vm._f("formatTime")(_vm.duration)
                                            )
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _c("view", { staticClass: ["video-btn"] }, [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["iconfont"],
                                      staticStyle: {
                                        fontSize: "30px",
                                        color: "#036EB8"
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                      on: {
                                        click: function($event) {
                                          _vm.fullOrExitScreen()
                                        }
                                      }
                                    },
                                    [_vm._v("")]
                                  )
                                ])
                              ]
                            )
                          ]),
                          _c("view", {
                            staticClass: ["flex", "align-center"],
                            staticStyle: { height: "40px" }
                          })
                        ]
                      )
                    : _vm._e(),
                  _c("view", {
                    staticClass: [
                      "position-absolute",
                      "top-0",
                      "right-0",
                      "bottom-0"
                    ],
                    staticStyle: { backgroundColor: "rgba(0,0,0,0.8)" }
                  })
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm.bottomOrTopControlBarShow && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-opctay-top",
                "position-fixed",
                "top-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c("view", { staticStyle: { height: "26px" } }),
              _c(
                "view",
                {
                  staticClass: ["flex", "align-center"],
                  staticStyle: { height: "26px" }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["video-btn"],
                      on: {
                        click: function($event) {
                          _vm.back()
                        }
                      }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["iconfont"],
                          staticStyle: { fontSize: "20px", color: "#036EB8" },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("")]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        : _vm._e(),
      _vm.bottomOrTopControlBarShow && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-opctay-bot",
                "position-fixed",
                "bottom-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c(
                "view",
                {
                  staticClass: ["flex", "align-stretch"],
                  staticStyle: { height: "40px" }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: ["video-btn"],
                      on: {
                        click: function($event) {
                          _vm.videoPlayOrPaused()
                        }
                      }
                    },
                    [
                      !_vm.isplay
                        ? _c(
                            "u-text",
                            {
                              staticClass: ["iconfont"],
                              staticStyle: {
                                fontSize: "30px",
                                color: "#036EB8"
                              },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("")]
                          )
                        : _c(
                            "u-text",
                            {
                              staticClass: ["iconfont"],
                              staticStyle: {
                                fontSize: "30px",
                                color: "#036EB8"
                              },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("")]
                          )
                    ]
                  ),
                  _c(
                    "view",
                    { staticClass: ["flex-1"] },
                    [
                      _c("progress", {
                        attrs: {
                          curTime: _vm.currentTime,
                          duration: _vm.duration
                        },
                        on: {
                          valueChange: _vm.propressValueChange,
                          update: _vm.screenTimeUpdate
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "align-center", "justify-center"],
                      staticStyle: { width: "80px" }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["font-sm", "text-white"],
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm._f("formatTime")(_vm.currentTime)) +
                              "/" +
                              _vm._s(_vm._f("formatTime")(_vm.duration))
                          )
                        ]
                      )
                    ]
                  ),
                  _c("view", { staticClass: ["video-btn"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["iconfont"],
                        staticStyle: { fontSize: "30px", color: "#036EB8" },
                        appendAsTree: true,
                        attrs: { append: "tree" },
                        on: {
                          click: function($event) {
                            _vm.fullOrExitScreen()
                          }
                        }
                      },
                      [_vm._v("")]
                    )
                  ])
                ]
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!***********************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./SubNvue.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtoQixDQUFnQixxaUJBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjQuMTguMjAyMjA2MzAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjQuMTguMjAyMjA2MzAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjQuMTguMjAyMjA2MzAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU3ViTnZ1ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _progress = _interopRequireDefault(__webpack_require__(/*! ../components/progress.vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//进度条组件引入\nvar videoCtx = null; //获取video的节点\nvar res = uni.getSystemInfoSync(); //同步获取页面的状态栏信息\nvar promptBoxStatusShowSTOut = null; //提示框的定时器\nvar controlStOut = null; //控制条显示的定时器\nvar domModule = __webpack_provided_uni_dot_requireNativePlugin('dom'); //Weex 提供 DOM.addRule 以加载自定义字体。开发者可以通过指定 font-family加载 iconfont 和 custom font。开发者可以使用下面的代码加载自定义字体：\nvar _default = { data: function data() {return { isplay: false, //播放的状态\n      statusBarHeight: 0, //状态栏的信息\n      currentTime: 0, //当前时长\n      duration: 0, //总时长\n      windowHeight: 0, windowWidth: 0, screenStatus: false, //默认不是全屏\n      staticTime: false, //屏幕中间时长拖动提示框显示与否\n      promptBoxStatus: { type: 'message', message: '提示' }, bottomOrTopControlBarShow: true, //顶部或底部控制条显示与否\n      oldTouchs: {}, oldValue: {}, dbcount: 0, //点击次数\n      touchType: null, fullScreenStatus: false //全屏状态，默认不是全屏\n    };}, provide: function provide() {//依赖注入,要和inject一起使用\n    return { v: this };}, computed: { //屏幕状态大小计算\n    videoFullScreen: function videoFullScreen() {return this.screenStatus ? \"width:\".concat(this.windowHeight, \"px; height:\").concat(this.windowWidth, \"px\") : 'width:750rpx;height:225px;'; //这里的是计算全屏后的大小，用的应该是uni.getWindowInfo(),并且宽高显示好像相反\n    } // modalStyle() {\n    // \tlet top = this.statusBarHeight + 44\n    // \treturn `top:${top}px;bottom:44px` //计算蒙板的高度\n    // }\n  }, //组件\n  components: { progress: _progress.default }, filters: { //时间过滤器，vue3.0已抛弃\n    formatTime: function formatTime(result) {var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);return result = result > 3600 ? h + ':' + m + ':' + s : m + ':' + s;} }, created: function created() {//在页面创建的时候\n    // console.log(uni.getSystemInfoSync())\n    var screen = uni.getWindowInfo();this.statusBarHeight = res.statusBarHeight;this.windowHeight = screen.screenHeight;this.windowWidth = screen.screenWidth; //400\n    domModule.addRule('fontFace', { 'fontFamily': \"iconfont\", //这里的fontfamily命名最好是和class中fontsize一致\n      'src': \"url('http://at.alicdn.com/t/c/font_2852955_of1w6jui8j.ttf')\" //阿里图标库的在线生成地址网页链接\n    });}, mounted: function mounted() {// console.log(this.$refs)this.$refs可以获取所有class被设置为ref的节点属性\n    videoCtx = this.$refs.video;}, //直接使用 ref，例如 this.$refs.video1\n  methods: { modalTouchS: function modalTouchS(e) {this.oldTouchs = e.changedTouches[0];this.oldValue = { currentTime: this.currentTime }; //旧的当前时间\n    }, //蒙版开始触摸\n    modalTouchM: function modalTouchM(e) {var newTouchs = e.changedTouches[0]; //获取新的坐标\n      if (!this.touchType) {this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'current' : null;if (this.touchType === 'current') {videoCtx.pause();}} else if (this.touchType === 'current') {this.promptBoxStatusShow({ type: \"time\", autoClose: false });this.controlBarShowStatus();var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.currentTime * 1; //核心算法拖动屏幕\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;this.currentTime = newCurrentTime;}}, //蒙版移动中\n    modalTouchE: function modalTouchE(e) {var _this = this;if (this.touchType === 'current') {videoCtx.seek(this.currentTime);videoCtx.play();} else {if (this.dbcount === 1 || this.dbcount === 0) {this.dbcount++;}if (this.dbcount > 0) {setTimeout(function () {if (_this.dbcount === 1) {// console.log(\"单击\")\n              _this.controlShowOrHide();} //单击\n            if (_this.dbcount === 2) {_this.videoPlayOrPaused(); // console.log(\"双击\")\n            } //双击\n            _this.dbcount = 0; //不论是双击还是单击最后都等于0\n          }, 250);}}this.touchType = null;this.staticTime = false; //关闭提示框\n    }, //蒙版结束，自定义单击，双击\n    //显示或隐藏控制条\n    controlShowOrHide: function controlShowOrHide() {this.bottomOrTopControlBarShow ? this.controlBarHideStatus() : this.controlBarShowStatus();}, controlBarShowStatus: function controlBarShowStatus() {var _this2 = this; // this.bottomControlBarShow = true\n      // this.topControlBarShow = true\n      this.bottomOrTopControlBarShow = true;if (controlStOut) {\n        clearTimeout(controlStOut);\n      }\n      controlStOut = setTimeout(function () {\n        _this2.controlBarHideStatus();\n        controlStOut = null;\n      }, 3000);\n    }, //控制条显示状态\n\n    controlBarHideStatus: function controlBarHideStatus() {\n      this.bottomOrTopControlBarShow = false;\n    }, //控制条隐藏状态\n\n    back: function back() {//返回\n      // uni.navigateBack({\n      // \tdelta:1\n      // })\n      uni.navigateTo({\n        url: \"/pages/index/index\" });\n\n    },\n\n    videoPlayOrPaused: function videoPlayOrPaused() {//播放停止按钮\n      this.promptBoxStatusShow({\n        message: this.isplay ? '暂停' : '播放' });\n\n\n      if (this.isplay) {\n        videoCtx.pause();\n      } else {\n        this.controlBarShowStatus(); //控制条显示状态\n        videoCtx.play();\n      }\n    },\n\n    fullScreenChange: function fullScreenChange(e) {\n      this.fullScreenStatus = e.detail.fullScreen;\n    }, //当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal\n\n    fullOrExitScreen: function fullOrExitScreen() {\n      if (this.fullScreenStatus) {\n        this.screenStatus = false;\n        videoCtx.exitFullScreen(); //退出全屏\n      } else {\n        this.screenStatus = true;\n        videoCtx.requestFullScreen(); //进入全屏\n      }\n      //requestFullScreen进入全屏，可传{direction}参数\n      //exitFullScreen退出全屏\n    }, //点击事件进入或者退出全屏\n\n\n    timeupdate: function timeupdate(e) {\n      if (!this.staticTime) {\n        this.currentTime = parseInt(e.detail.currentTime);\n        this.duration = parseInt(e.detail.duration);\n      }\n      // console.log(e.detail.currentTime, e.detail.duration)\n    }, //播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次\n\n    propressValueChange: function propressValueChange(e) {\n      videoCtx.seek(e); //api方法 seek(position)跳转到指定位置，单位 s\n      this.staticTime = false; //@touchend api在propress子组件中进度条拖动事件结束时调用\n      videoCtx.play();\n    },\n\n    screenTimeUpdate: function screenTimeUpdate(e) {//进度条变化的时候\n      videoCtx.pause();\n      this.staticTime = true; //屏幕中间时长拖动提示框显示与否\n      this.currentTime = e;\n      this.promptBoxStatusShow({\n        type: \"time\",\n        autoClose: false //\n      });\n      this.controlBarShowStatus(); //控制条显示状态\n    }, //从组件progress传来的值，e是子组件中的currtTime\n\n    promptBoxStatusShow: function promptBoxStatusShow(options) {var _this3 = this;\n      this.promptBoxStatus.type = options.type || 'message';\n      this.promptBoxStatus.message = options.message || '提示';\n      this.staticTime = true; //屏幕中间时长拖动提示框显示与否\n      if (options.autoClose !== false) {///这里的autoClose是自定义属性,这里不太明白\n        if (promptBoxStatusShowSTOut) {\n          clearTimeout(promptBoxStatusShowSTOut);\n        }\n        promptBoxStatusShowSTOut = setTimeout(function () {\n          _this3.staticTime = false;\n          promptBoxStatusShowSTOut = null;\n        }, 500); //定时器定时显示提示消失\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UZXh0L1N1Yk52dWUvU3ViTnZ1ZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSUEsa0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFHQSxvQixDQUFBO0FBRUEsa0MsQ0FBQTtBQUVBLG9DLENBQUE7QUFFQSx3QixDQUFBO0FBQ0EsK0RBQ0EsS0FEQSxFLENBQ0E7ZUFDQSxFQUVBLElBRkEsa0JBRUEsQ0FDQSxTQUNBLGFBREEsRUFDQTtBQUNBLHdCQUZBLEVBRUE7QUFDQSxvQkFIQSxFQUdBO0FBQ0EsaUJBSkEsRUFJQTtBQUNBLHFCQUxBLEVBTUEsY0FOQSxFQU9BLG1CQVBBLEVBT0E7QUFDQSx1QkFSQSxFQVFBO0FBQ0EseUJBQ0EsZUFEQSxFQUVBLGFBRkEsRUFUQSxFQWNBLCtCQWRBLEVBY0E7QUFFQSxtQkFoQkEsRUFtQkEsWUFuQkEsRUFzQkEsVUF0QkEsRUFzQkE7QUFDQSxxQkF2QkEsRUF3QkEsdUJBeEJBLENBd0JBO0FBeEJBLE1BMEJBLENBN0JBLEVBK0JBLE9BL0JBLHFCQStCQTtBQUNBLGFBQ0EsT0FEQSxHQUdBLENBbkNBLEVBcUNBLFlBQ0E7QUFDQSxtQkFGQSw2QkFFQSxDQUNBLDhHQUNBLDRCQURBLENBREEsQ0FFQTtBQUNBLEtBTEEsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQVZBLEdBckNBLEVBa0RBO0FBQ0EsZ0JBQ0EsMkJBREEsRUFuREEsRUF1REEsV0FDQTtBQUNBLGNBRkEsc0JBRUEsTUFGQSxFQUVBLENBQ0EscUdBRUEscUdBQ0EsRUFEQSxHQUNBLEVBREEsRUFHQSwrRkFDQSxvRUFDQSxDQVZBLEVBdkRBLEVBcUVBLE9BckVBLHFCQXFFQTtBQUNBO0FBQ0EscUNBQ0EsMkNBRUEsd0NBQ0Esc0NBTkEsQ0FNQTtBQUVBLG9DQUNBLHdCQURBLEVBQ0E7QUFDQSwwRUFGQSxDQUVBO0FBRkEsT0FJQSxDQWpGQSxFQW1GQSxPQW5GQSxxQkFtRkEsQ0FDQTtBQUNBLGdDQUNBLENBdEZBLEVBc0ZBO0FBRUEsYUFFQSxXQUZBLHVCQUVBLENBRkEsRUFFQSxDQUNBLHFDQUVBLGtCQUNBLDZCQURBLEdBSEEsQ0FLQTtBQUNBLEtBUkEsRUFRQTtBQUVBLGVBVkEsdUJBVUEsQ0FWQSxFQVVBLENBQ0Esb0NBREEsQ0FDQTtBQUNBLDRCQUNBLDBGQUVBLG1DQUNBLGlCQUNBLENBQ0EsQ0FOQSxNQU1BLG1DQUNBLDJCQUNBLFlBREEsRUFFQSxnQkFGQSxJQUlBLDRCQUVBLHdHQUNBLFdBREEsR0FDQSxDQURBLENBUEEsQ0FRQTtBQUVBLHlGQUVBLHlEQUVBLGtDQUNBLENBRUEsQ0FuQ0EsRUFtQ0E7QUFFQSxlQXJDQSx1QkFxQ0EsQ0FyQ0EsRUFxQ0Esa0JBQ0EsbUNBQ0EsZ0NBQ0EsZ0JBRUEsQ0FKQSxNQUlBLENBQ0EsK0NBQ0EsZUFDQSxDQUNBLHVCQUNBLHdCQUNBLDBCQUNBO0FBRUEsd0NBQ0EsQ0FMQSxDQUtBO0FBQ0Esc0NBQ0EsMEJBREEsQ0FFQTtBQUNBLGFBVEEsQ0FTQTtBQUNBLDhCQVZBLENBVUE7QUFDQSxXQVhBLEVBV0EsR0FYQSxFQVlBLENBQ0EsQ0FDQSxzQkFDQSx3QkF6QkEsQ0F5QkE7QUFDQSxLQS9EQSxFQStEQTtBQUVBO0FBQ0EscUJBbEVBLCtCQWtFQSxDQUNBLDJGQUNBLENBcEVBLEVBc0VBLG9CQXRFQSxrQ0FzRUEsb0JBQ0E7QUFDQTtBQUNBLDRDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsRUFHQSxJQUhBO0FBSUEsS0FsRkEsRUFrRkE7O0FBRUEsd0JBcEZBLGtDQW9GQTtBQUNBO0FBQ0EsS0F0RkEsRUFzRkE7O0FBRUEsUUF4RkEsa0JBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxLQS9GQTs7QUFpR0EscUJBakdBLCtCQWlHQTtBQUNBO0FBQ0EsMENBREE7OztBQUlBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQSxvQ0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLEtBNUdBOztBQThHQSxvQkE5R0EsNEJBOEdBLENBOUdBLEVBOEdBO0FBQ0E7QUFDQSxLQWhIQSxFQWdIQTs7QUFFQSxvQkFsSEEsOEJBa0hBO0FBQ0E7QUFDQTtBQUNBLGtDQUZBLENBRUE7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBLHFDQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTVIQSxFQTRIQTs7O0FBR0EsY0EvSEEsc0JBK0hBLENBL0hBLEVBK0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcklBLEVBcUlBOztBQUVBLHVCQXZJQSwrQkF1SUEsQ0F2SUEsRUF1SUE7QUFDQSx1QkFEQSxDQUNBO0FBQ0EsOEJBRkEsQ0FFQTtBQUNBO0FBQ0EsS0EzSUE7O0FBNklBLG9CQTdJQSw0QkE2SUEsQ0E3SUEsRUE2SUE7QUFDQTtBQUNBLDZCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx3QkFGQSxDQUVBO0FBRkE7QUFJQSxrQ0FSQSxDQVFBO0FBQ0EsS0F0SkEsRUFzSkE7O0FBRUEsdUJBeEpBLCtCQXdKQSxPQXhKQSxFQXdKQTtBQUNBO0FBQ0E7QUFDQSw2QkFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsR0FIQSxFQUpBLENBT0E7QUFDQTtBQUNBLEtBcktBLEVBeEZBLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImJnLWRhcmtcIj5cclxuXHRcdDx2aWRlbyBzcmM9XCIvc3RhdGljL3ZpZGVvLzJhNjNkNDY3LTIxZjItNDdkMy05Mzc0LWFkNmI2NTEwMTk1ZC5tcDRcIiBpZD1cInZpZGVvXCIgcmVmPVwidmlkZW9cIiA6Y29udHJvbHM9XCJmYWxzZVwiXHJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDsgaGVpZ2h0OjIyNXB4XCIgQGZ1bGxzY3JlZW5jaGFuZ2U9XCJmdWxsU2NyZWVuQ2hhbmdlXCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCJcclxuXHRcdFx0QHBsYXk9XCJpc3BsYXk9dHJ1ZVwiIEBwYXVzZT1cImlzcGxheT1mYWxzZVwiIHNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIiBzaG93LWZ1bGxzY3JlZW4tYnRuPVwiZmFsc2VcIlxyXG5cdFx0XHRzaG93LXByb2dyZXNzPVwiZmFsc2VcIlxyXG5cdFx0XHRwb3N0ZXI9XCJodHRwczovL3RzMS5jbi5tbS5iaW5nLm5ldC90aC9pZC9SLUMuOWQ4YTk2YmQ2NWEwMTliYTA2Y2I1OWIyODYwNDljZjk/cmlrPWJzMERWMSUyZmVMTHl2MHcmcml1PWh0dHAlM2ElMmYlMmZoYW81LnFoaW1nLmNvbSUyZnQwMTNjZGJiZjA1NGU4NTMxMmUuanBnJTNmc2l6ZSUzZDEyODJ4ODE4JmVoaz1DcVZvTUQyJTJib2JiaDFrTXIlMmJCcTZzS3ZERTNxaXc4bG5FNUQzUXJFNm5zQSUzZCZyaXNsPSZwaWQ9SW1nUmF3JnI9MFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgOnN0eWxlPVwidmlkZW9GdWxsU2NyZWVuXCI+XHJcblx0XHRcdFx0PCEtLSDlj4zlh7vkuovku7bokpnmnb8gLS0+XHJcblx0XHRcdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJtb2RhbFRvdWNoU1wiIEB0b3VjaG1vdmU9XCJtb2RhbFRvdWNoTVwiIEB0b3VjaGVuZD1cIm1vZGFsVG91Y2hFXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHRvcC0wXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5o+Q56S65qGGIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzdGF0aWNUaW1lXCIgY2xhc3M9XCJwLTIgcm91bmRlZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInByb21wdEJveFN0YXR1cy50eXBlPT0ndGltZSdcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInByb21wdEJveFN0YXR1cy50eXBlPT0nbWVzc2FnZSdcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7cHJvbXB0Qm94U3RhdHVzLm1lc3NhZ2V9fTwvdGV4dD5cclxuXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5YWo5bGP5ZCO55qE5o6n5Yi25p2hIC0tPlxyXG5cdFx0XHRcdDwhLS0g6aG26YOoIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJib3R0b21PclRvcENvbnRyb2xCYXJTaG93ICYmIGZ1bGxTY3JlZW5TdGF0dXNcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2aWRlby1vcGN0YXktdG9wIHBvc2l0aW9uLWFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wXCI+XHJcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiAyNnB4O1wiPjwvdmlldz4gLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogMjZweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuIFwiIEBjbGljaz1cImZ1bGxPckV4aXRTY3JlZW4oKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g6L+U5Zue5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MjM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g6L+Z6YeM55qEJiN4ZTYyMzvmmK/pmL/ph4zlm77moIflupPnmoTlm77lg4/lnKjnur/ku6PnoIEgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSB0ZXh05qCH562+5LiN6KaB5o2i6KGM77yM5ZyobnZ1ZeS4rem7mOiupOaNouihjOS7luS5n+aNouihjCAtLT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+PHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibWwtMyB0ZXh0LXdoaXRlXCI+5qCH6aKYc2RzYmFqZGFqaGJhZGRIU0pmRkJKSkZmamhiaDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8IS0tIOW6lemDqCAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyAmJiBmdWxsU2NyZWVuU3RhdHVzXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiIHZpZGVvLW9wY3RheS1ib3QgcG9zaXRpb24tYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiXCIgc3R5bGU9XCJoZWlnaHQ6IDg4cHg7XCI+XHJcblx0XHRcdFx0XHRcdDwhLS0g5o6n5Yi25p2h55qE5qC35byP6YWN572u77yB77yB77yB77yB6Z2e5bi46YeN6KaB77yB77yB77yBIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8cHJvZ3Jlc3MgOmN1clRpbWU9XCJjdXJyZW50VGltZVwiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgQHZhbHVlQ2hhbmdlPVwicHJvcHJlc3NWYWx1ZUNoYW5nZVwiXHJcblx0XHRcdFx0XHRcdFx0QHVwZGF0ZT1cInNjcmVlblRpbWVVcGRhdGVcIj48L3Byb2dyZXNzPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaFwiIHN0eWxlPVwiaGVpZ2h0OiA0MHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gYWxpZ24tc3RyZXRjaOaYr2NzcyBmbGV45qC35byP5LitYWxpZ24taXRlbTpzdHJldGNo5bGe5oCn77yM5L2c55So5pivXHTpu5jorqTjgILpobnnm67ooqvmi4nkvLjku6XpgILlkIjlrrnlmajjgIIgLS0+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG5cIiBAY2xpY2s9XCJ2aWRlb1BsYXlPclBhdXNlZCgpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaSreaUvuaMiemSriAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiB2LWlmPVwiIWlzcGxheVwiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTYyZjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaaguWBnOaMiemSriAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiB2LWVsc2Ugc3R5bGU9XCJmb250LXNpemU6IDMwcHg7IGNvbG9yOiMwMzZFQjhcIj4mI3hlNjI2OzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPjx0ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9udC1zbSB0ZXh0LXdoaXRlXCI+e3tjdXJyZW50VGltZXxmb3JtYXRUaW1lfX0ve3tkdXJhdGlvbnxmb3JtYXRUaW1lfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PjwhLS0g5pe26Ze05paH5pys5pi+56S6IC0tPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLWJ0biBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDwhLS0g5pS+5aSn5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwiZnVsbE9yRXhpdFNjcmVlbigpXCIgY2xhc3M9XCJpY29uZm9udFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTYwZDs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBzdHlsZT1cImhlaWdodDogNDBweDtcIj5cclxuXHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTBcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcIj5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gbnZ1ZeeahOa4suafk+aYr+S7juS4iuWQkeS4i+i/m+ihjOeahOa4suafkyAgOnN0eWxl5Yqo5oCB55qE57uR5a6a5YWo5bGP5LiO5Y2V56uW5bGP55qE6auY5a69LS0+XHJcblx0XHQ8L3ZpZGVvPlxyXG5cclxuXHRcdDwhLS0gIOS4jeaYr+WFqOWxjyAtLT5cclxuXHRcdDwhLS0g6Ieq5a6a5LmJ6KeG6aKR6aG26YOoIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cImJvdHRvbU9yVG9wQ29udHJvbEJhclNob3cgJiYgIWZ1bGxTY3JlZW5TdGF0dXNcIlxyXG5cdFx0XHRjbGFzcz1cInZpZGVvLW9wY3RheS10b3AgcG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0PCEtLSA8dmlldyA6c3R5bGU9XCInaGVpZ2h0JytzdGF0dXNCYXJIZWlnaHQrJ3B4J1wiPjwvdmlldz4gLS0+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiAyNnB4O1wiPjwvdmlldz5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDI2cHg7XCIgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuIFwiIEBjbGljaz1cImJhY2soKVwiPlxyXG5cdFx0XHRcdFx0PCEtLSDov5Tlm57mjInpkq4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgc3R5bGU9XCJmb250LXNpemU6IDIwcHg7IGNvbG9yOiMwMzZFQjhcIj4mI3hlNjIzOzwvdGV4dD5cclxuXHRcdFx0XHRcdDwhLS0g6L+Z6YeM55qEJiN4ZTYyMzvmmK/pmL/ph4zlm77moIflupPnmoTlm77lg4/lnKjnur/ku6PnoIEgLS0+XHJcblx0XHRcdFx0XHQ8IS0tIHRleHTmoIfnrb7kuI3opoHmjaLooYzvvIzlnKhudnVl5Lit6buY6K6k5o2i6KGM5LuW5Lmf5o2i6KGMIC0tPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDwhLS0g6Ieq5a6a5LmJ6KeG6aKR5bqV6YOoLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyAmJiAhZnVsbFNjcmVlblN0YXR1c1wiXHJcblx0XHRcdGNsYXNzPVwiIHZpZGVvLW9wY3RheS1ib3QgcG9zaXRpb24tZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLXN0cmV0Y2hcIiBzdHlsZT1cImhlaWdodDogNDBweDtcIj5cclxuXHRcdFx0XHQ8IS0tIGFsaWduLXN0cmV0Y2jmmK9jc3MgZmxleOagt+W8j+S4rWFsaWduLWl0ZW06c3RyZXRjaOWxnuaAp++8jOS9nOeUqOaYr1x06buY6K6k44CC6aG555uu6KKr5ouJ5Ly45Lul6YCC5ZCI5a655Zmo44CCIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuXCIgQGNsaWNrPVwidmlkZW9QbGF5T3JQYXVzZWQoKVwiPlxyXG5cdFx0XHRcdFx0PCEtLSDmkq3mlL7mjInpkq4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgdi1pZj1cIiFpc3BsYXlcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MmY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSDmmoLlgZzmjInpkq4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgdi1lbHNlIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTYyNjs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5o6n5Yi25p2h55qE5qC35byP6YWN572u77yB77yB77yB77yB6Z2e5bi46YeN6KaB77yB77yB77yBIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xXCI+XHJcblx0XHRcdFx0XHQ8cHJvZ3Jlc3MgOmN1clRpbWU9XCJjdXJyZW50VGltZVwiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgQHZhbHVlQ2hhbmdlPVwicHJvcHJlc3NWYWx1ZUNoYW5nZVwiXHJcblx0XHRcdFx0XHRcdEB1cGRhdGU9XCJzY3JlZW5UaW1lVXBkYXRlXCI+PC9wcm9ncmVzcz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+PHRleHRcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb250LXNtIHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+PCEtLSDml7bpl7TmlofmnKzmmL7npLogLS0+XHJcblxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuIFwiPlxyXG5cdFx0XHRcdFx0PCEtLSDmlL7lpKfmjInpkq4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuKClcIiBjbGFzcz1cImljb25mb250XCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9XCJmb250LXNpemU6IDMwcHg7IGNvbG9yOiMwMzZFQjhcIj4mI3hlNjBkOzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvL+i/m+W6puadoee7hOS7tuW8leWFpVxyXG5cdGltcG9ydCBwcm9ncmVzcyBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9ncmVzcy52dWVcIlxyXG5cclxuXHRsZXQgdmlkZW9DdHggPSBudWxsIC8v6I635Y+WdmlkZW/nmoToioLngrlcclxuXHJcblx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpIC8v5ZCM5q2l6I635Y+W6aG16Z2i55qE54q25oCB5qCP5L+h5oGvXHJcblxyXG5cdGxldCBwcm9tcHRCb3hTdGF0dXNTaG93U1RPdXQgPSBudWxsIC8v5o+Q56S65qGG55qE5a6a5pe25ZmoXHJcblxyXG5cdGxldCBjb250cm9sU3RPdXQgPSBudWxsIC8v5o6n5Yi25p2h5pi+56S655qE5a6a5pe25ZmoXHJcblx0Y29uc3QgZG9tTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oXHJcblx0XHQnZG9tJykgLy9XZWV4IOaPkOS+myBET00uYWRkUnVsZSDku6XliqDovb3oh6rlrprkuYnlrZfkvZPjgILlvIDlj5HogIXlj6/ku6XpgJrov4fmjIflrpogZm9udC1mYW1pbHnliqDovb0gaWNvbmZvbnQg5ZKMIGN1c3RvbSBmb25044CC5byA5Y+R6ICF5Y+v5Lul5L2/55So5LiL6Z2i55qE5Luj56CB5Yqg6L296Ieq5a6a5LmJ5a2X5L2T77yaXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNwbGF5OiBmYWxzZSwgLy/mkq3mlL7nmoTnirbmgIFcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsIC8v54q25oCB5qCP55qE5L+h5oGvXHJcblx0XHRcdFx0Y3VycmVudFRpbWU6IDAsIC8v5b2T5YmN5pe26ZW/XHJcblx0XHRcdFx0ZHVyYXRpb246IDAsIC8v5oC75pe26ZW/XHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLFxyXG5cdFx0XHRcdHNjcmVlblN0YXR1czogZmFsc2UsIC8v6buY6K6k5LiN5piv5YWo5bGPXHJcblx0XHRcdFx0c3RhdGljVGltZTogZmFsc2UsIC8v5bGP5bmV5Lit6Ze05pe26ZW/5ouW5Yqo5o+Q56S65qGG5pi+56S65LiO5ZCmXHJcblx0XHRcdFx0cHJvbXB0Qm94U3RhdHVzOiB7XHJcblx0XHRcdFx0XHR0eXBlOiAnbWVzc2FnZScsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiAn5o+Q56S6J1xyXG5cdFx0XHRcdH0sXHJcblxyXG5cdFx0XHRcdGJvdHRvbU9yVG9wQ29udHJvbEJhclNob3c6IHRydWUsIC8v6aG26YOo5oiW5bqV6YOo5o6n5Yi25p2h5pi+56S65LiO5ZCmXHJcblxyXG5cdFx0XHRcdG9sZFRvdWNoczoge1xyXG5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9sZFZhbHVlOiB7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZGJjb3VudDogMCwgLy/ngrnlh7vmrKHmlbBcclxuXHRcdFx0XHR0b3VjaFR5cGU6IG51bGwsXHJcblx0XHRcdFx0ZnVsbFNjcmVlblN0YXR1czogZmFsc2UsIC8v5YWo5bGP54q25oCB77yM6buY6K6k5LiN5piv5YWo5bGPXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0cHJvdmlkZSgpIHsgLy/kvp3otZbms6jlhaUs6KaB5ZKMaW5qZWN05LiA6LW35L2/55SoXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0djogdGhpc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8v5bGP5bmV54q25oCB5aSn5bCP6K6h566XXHJcblx0XHRcdHZpZGVvRnVsbFNjcmVlbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zY3JlZW5TdGF0dXMgPyBgd2lkdGg6JHt0aGlzLndpbmRvd0hlaWdodH1weDsgaGVpZ2h0OiR7dGhpcy53aW5kb3dXaWR0aH1weGAgOlxyXG5cdFx0XHRcdFx0J3dpZHRoOjc1MHJweDtoZWlnaHQ6MjI1cHg7JyAvL+i/memHjOeahOaYr+iuoeeul+WFqOWxj+WQjueahOWkp+Wwj++8jOeUqOeahOW6lOivpeaYr3VuaS5nZXRXaW5kb3dJbmZvKCks5bm25LiU5a696auY5pi+56S65aW95YOP55u45Y+NXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyBtb2RhbFN0eWxlKCkge1xyXG5cdFx0XHQvLyBcdGxldCB0b3AgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIDQ0XHJcblx0XHRcdC8vIFx0cmV0dXJuIGB0b3A6JHt0b3B9cHg7Ym90dG9tOjQ0cHhgIC8v6K6h566X6JKZ5p2/55qE6auY5bqmXHJcblx0XHRcdC8vIH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/nu4Tku7ZcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0cHJvZ3Jlc3NcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsdGVyczoge1xyXG5cdFx0XHQvL+aXtumXtOi/h+a7pOWZqO+8jHZ1ZTMuMOW3suaKm+W8g1xyXG5cdFx0XHRmb3JtYXRUaW1lKHJlc3VsdCkge1xyXG5cdFx0XHRcdHZhciBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA6IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCk7XHJcblxyXG5cdFx0XHRcdHZhciBtID0gTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpIDwgMTAgPyAnMCcgKyBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgL1xyXG5cdFx0XHRcdFx0NjAgJSA2MCkpO1xyXG5cclxuXHRcdFx0XHR2YXIgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPSByZXN1bHQgPiAzNjAwID8gKGggKyAnOicgKyBtICsgJzonICsgcykgOiBtICsgJzonICsgc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHJcblx0XHRjcmVhdGVkKCkgeyAvL+WcqOmhtemdouWIm+W7uueahOaXtuWAmVxyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKSlcclxuXHRcdFx0bGV0IHNjcmVlbiA9IHVuaS5nZXRXaW5kb3dJbmZvKClcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0XHJcblxyXG5cdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHNjcmVlbi5zY3JlZW5IZWlnaHRcclxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHNjcmVlbi5zY3JlZW5XaWR0aCAvLzQwMFxyXG5cclxuXHRcdFx0ZG9tTW9kdWxlLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJpY29uZm9udFwiLCAvL+i/memHjOeahGZvbnRmYW1pbHnlkb3lkI3mnIDlpb3mmK/lkoxjbGFzc+S4rWZvbnRzaXpl5LiA6Ie0XHJcblx0XHRcdFx0J3NyYyc6IFwidXJsKCdodHRwOi8vYXQuYWxpY2RuLmNvbS90L2MvZm9udF8yODUyOTU1X29mMXc2anVpOGoudHRmJylcIiAvL+mYv+mHjOWbvuagh+W6k+eahOWcqOe6v+eUn+aIkOWcsOWdgOe9kemhtemTvuaOpVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy4kcmVmcyl0aGlzLiRyZWZz5Y+v5Lul6I635Y+W5omA5pyJY2xhc3Pooqvorr7nva7kuLpyZWbnmoToioLngrnlsZ7mgKdcclxuXHRcdFx0dmlkZW9DdHggPSB0aGlzLiRyZWZzLnZpZGVvXHJcblx0XHR9LCAvL+ebtOaOpeS9v+eUqCByZWbvvIzkvovlpoIgdGhpcy4kcmVmcy52aWRlbzFcclxuXHJcblx0XHRtZXRob2RzOiB7XHJcblxyXG5cdFx0XHRtb2RhbFRvdWNoUyhlKSB7XHJcblx0XHRcdFx0dGhpcy5vbGRUb3VjaHMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXHJcblxyXG5cdFx0XHRcdHRoaXMub2xkVmFsdWUgPSB7XHJcblx0XHRcdFx0XHRjdXJyZW50VGltZTogdGhpcy5jdXJyZW50VGltZVxyXG5cdFx0XHRcdH0gLy/ml6fnmoTlvZPliY3ml7bpl7RcclxuXHRcdFx0fSwgLy/okpnniYjlvIDlp4vop6bmkbhcclxuXHJcblx0XHRcdG1vZGFsVG91Y2hNKGUpIHtcclxuXHRcdFx0XHRsZXQgbmV3VG91Y2hzID0gZS5jaGFuZ2VkVG91Y2hlc1swXSAvL+iOt+WPluaWsOeahOWdkOagh1xyXG5cdFx0XHRcdGlmICghdGhpcy50b3VjaFR5cGUpIHtcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpID4gMjAgPyAnY3VycmVudCcgOiBudWxsXHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudCcpIHtcclxuXHRcdFx0XHRcdFx0dmlkZW9DdHgucGF1c2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50Jykge1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9tcHRCb3hTdGF0dXNTaG93KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ0aW1lXCIsXHJcblx0XHRcdFx0XHRcdGF1dG9DbG9zZTogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2xCYXJTaG93U3RhdHVzKClcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV3Q3VycmVudFRpbWUgPSAobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpIC8gMjUwICogdGhpcy5kdXJhdGlvbiAqIDIgKyB0aGlzLm9sZFZhbHVlXHJcblx0XHRcdFx0XHRcdC5jdXJyZW50VGltZSAqIDEgLy/moLjlv4Pnrpfms5Xmi5bliqjlsY/luZVcclxuXHJcblx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbiA/IHRoaXMuZHVyYXRpb24gOiBuZXdDdXJyZW50VGltZVxyXG5cclxuXHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gbmV3Q3VycmVudFRpbWUgPCAwID8gMCA6IG5ld0N1cnJlbnRUaW1lXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSwgLy/okpnniYjnp7vliqjkuK1cclxuXHJcblx0XHRcdG1vZGFsVG91Y2hFKGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50Jykge1xyXG5cdFx0XHRcdFx0dmlkZW9DdHguc2Vlayh0aGlzLmN1cnJlbnRUaW1lKVxyXG5cdFx0XHRcdFx0dmlkZW9DdHgucGxheSgpXHJcblxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYmNvdW50ID09PSAxIHx8IHRoaXMuZGJjb3VudCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRiY291bnQrK1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZGJjb3VudCA+IDApIHtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZGJjb3VudCA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCLljZXlh7tcIilcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNvbnRyb2xTaG93T3JIaWRlKClcclxuXHRcdFx0XHRcdFx0XHR9IC8v5Y2V5Ye7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZGJjb3VudCA9PT0gMikge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy52aWRlb1BsYXlPclBhdXNlZCgpXHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIuWPjOWHu1wiKVxyXG5cdFx0XHRcdFx0XHRcdH0gLy/lj4zlh7tcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRiY291bnQgPSAwIC8v5LiN6K665piv5Y+M5Ye76L+Y5piv5Y2V5Ye75pyA5ZCO6YO9562J5LqOMFxyXG5cdFx0XHRcdFx0XHR9LCAyNTApXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gbnVsbFxyXG5cdFx0XHRcdHRoaXMuc3RhdGljVGltZSA9IGZhbHNlIC8v5YWz6Zet5o+Q56S65qGGXHJcblx0XHRcdH0sIC8v6JKZ54mI57uT5p2f77yM6Ieq5a6a5LmJ5Y2V5Ye777yM5Y+M5Ye7XHJcblxyXG5cdFx0XHQvL+aYvuekuuaIlumakOiXj+aOp+WItuadoVxyXG5cdFx0XHRjb250cm9sU2hvd09ySGlkZSgpIHtcclxuXHRcdFx0XHR0aGlzLmJvdHRvbU9yVG9wQ29udHJvbEJhclNob3cgPyB0aGlzLmNvbnRyb2xCYXJIaWRlU3RhdHVzKCkgOiB0aGlzLmNvbnRyb2xCYXJTaG93U3RhdHVzKClcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGNvbnRyb2xCYXJTaG93U3RhdHVzKCkge1xyXG5cdFx0XHRcdC8vIHRoaXMuYm90dG9tQ29udHJvbEJhclNob3cgPSB0cnVlXHJcblx0XHRcdFx0Ly8gdGhpcy50b3BDb250cm9sQmFyU2hvdyA9IHRydWVcclxuXHRcdFx0XHR0aGlzLmJvdHRvbU9yVG9wQ29udHJvbEJhclNob3cgPSB0cnVlXHJcblxyXG5cdFx0XHRcdGlmIChjb250cm9sU3RPdXQpIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dChjb250cm9sU3RPdXQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnRyb2xTdE91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250cm9sQmFySGlkZVN0YXR1cygpXHJcblx0XHRcdFx0XHRjb250cm9sU3RPdXQgPSBudWxsXHJcblx0XHRcdFx0fSwgMzAwMClcclxuXHRcdFx0fSwgLy/mjqfliLbmnaHmmL7npLrnirbmgIFcclxuXHJcblx0XHRcdGNvbnRyb2xCYXJIaWRlU3RhdHVzKCkge1xyXG5cdFx0XHRcdHRoaXMuYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyA9IGZhbHNlXHJcblx0XHRcdH0sIC8v5o6n5Yi25p2h6ZqQ6JeP54q25oCBXHJcblxyXG5cdFx0XHRiYWNrKCkgeyAvL+i/lOWbnlxyXG5cdFx0XHRcdC8vIHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdC8vIFx0ZGVsdGE6MVxyXG5cdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBcIi9wYWdlcy9pbmRleC9pbmRleFwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHZpZGVvUGxheU9yUGF1c2VkKCkgeyAvL+aSreaUvuWBnOatouaMiemSrlxyXG5cdFx0XHRcdHRoaXMucHJvbXB0Qm94U3RhdHVzU2hvdyh7XHJcblx0XHRcdFx0XHRtZXNzYWdlOiB0aGlzLmlzcGxheSA/ICfmmoLlgZwnIDogJ+aSreaUvidcclxuXHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5pc3BsYXkpIHtcclxuXHRcdFx0XHRcdHZpZGVvQ3R4LnBhdXNlKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250cm9sQmFyU2hvd1N0YXR1cygpIC8v5o6n5Yi25p2h5pi+56S654q25oCBXHJcblx0XHRcdFx0XHR2aWRlb0N0eC5wbGF5KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRmdWxsU2NyZWVuQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgPSBlLmRldGFpbC5mdWxsU2NyZWVuXHJcblx0XHRcdH0sIC8v5b2T6KeG6aKR6L+b5YWl5ZKM6YCA5Ye65YWo5bGP5pe26Kem5Y+R77yMZXZlbnQuZGV0YWlsID0ge2Z1bGxTY3JlZW4sIGRpcmVjdGlvbn3vvIxkaXJlY3Rpb27lj5bkuLogdmVydGljYWwg5oiWIGhvcml6b250YWxcclxuXHJcblx0XHRcdGZ1bGxPckV4aXRTY3JlZW4oKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZnVsbFNjcmVlblN0YXR1cykge1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JlZW5TdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0dmlkZW9DdHguZXhpdEZ1bGxTY3JlZW4oKSAvL+mAgOWHuuWFqOWxj1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcmVlblN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHRcdHZpZGVvQ3R4LnJlcXVlc3RGdWxsU2NyZWVuKCkgLy/ov5vlhaXlhajlsY9cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly9yZXF1ZXN0RnVsbFNjcmVlbui/m+WFpeWFqOWxj++8jOWPr+S8oHtkaXJlY3Rpb2595Y+C5pWwXHJcblx0XHRcdFx0Ly9leGl0RnVsbFNjcmVlbumAgOWHuuWFqOWxj1xyXG5cdFx0XHR9LCAvL+eCueWHu+S6i+S7tui/m+WFpeaIluiAhemAgOWHuuWFqOWxj1xyXG5cclxuXHJcblx0XHRcdHRpbWV1cGRhdGUoZSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5zdGF0aWNUaW1lKSB7XHJcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gcGFyc2VJbnQoZS5kZXRhaWwuY3VycmVudFRpbWUpXHJcblx0XHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gcGFyc2VJbnQoZS5kZXRhaWwuZHVyYXRpb24pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGUuZGV0YWlsLmN1cnJlbnRUaW1lLCBlLmRldGFpbC5kdXJhdGlvbilcclxuXHRcdFx0fSwgLy/mkq3mlL7ov5vluqblj5jljJbml7bop6blj5HvvIxldmVudC5kZXRhaWwgPSB7Y3VycmVudFRpbWUsIGR1cmF0aW9ufSDjgILop6blj5HpopHnjocgMjUwbXMg5LiA5qyhXHJcblxyXG5cdFx0XHRwcm9wcmVzc1ZhbHVlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHR2aWRlb0N0eC5zZWVrKGUpIC8vYXBp5pa55rOVIHNlZWsocG9zaXRpb24p6Lez6L2s5Yiw5oyH5a6a5L2N572u77yM5Y2V5L2NIHNcclxuXHRcdFx0XHR0aGlzLnN0YXRpY1RpbWUgPSBmYWxzZSAvL0B0b3VjaGVuZCBhcGnlnKhwcm9wcmVzc+WtkOe7hOS7tuS4rei/m+W6puadoeaLluWKqOS6i+S7tue7k+adn+aXtuiwg+eUqFxyXG5cdFx0XHRcdHZpZGVvQ3R4LnBsYXkoKVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c2NyZWVuVGltZVVwZGF0ZShlKSB7IC8v6L+b5bqm5p2h5Y+Y5YyW55qE5pe25YCZXHJcblx0XHRcdFx0dmlkZW9DdHgucGF1c2UoKVxyXG5cdFx0XHRcdHRoaXMuc3RhdGljVGltZSA9IHRydWUgLy/lsY/luZXkuK3pl7Tml7bplb/mi5bliqjmj5DnpLrmoYbmmL7npLrkuI7lkKZcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gZVxyXG5cdFx0XHRcdHRoaXMucHJvbXB0Qm94U3RhdHVzU2hvdyh7XHJcblx0XHRcdFx0XHR0eXBlOiBcInRpbWVcIixcclxuXHRcdFx0XHRcdGF1dG9DbG9zZTogZmFsc2UgLy9cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdHRoaXMuY29udHJvbEJhclNob3dTdGF0dXMoKSAvL+aOp+WItuadoeaYvuekuueKtuaAgVxyXG5cdFx0XHR9LCAvL+S7jue7hOS7tnByb2dyZXNz5Lyg5p2l55qE5YC877yMZeaYr+WtkOe7hOS7tuS4reeahGN1cnJ0VGltZVxyXG5cclxuXHRcdFx0cHJvbXB0Qm94U3RhdHVzU2hvdyhvcHRpb25zKSB7XHJcblx0XHRcdFx0dGhpcy5wcm9tcHRCb3hTdGF0dXMudHlwZSA9IG9wdGlvbnMudHlwZSB8fCAnbWVzc2FnZSdcclxuXHRcdFx0XHR0aGlzLnByb21wdEJveFN0YXR1cy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlIHx8ICfmj5DnpLonXHJcblx0XHRcdFx0dGhpcy5zdGF0aWNUaW1lID0gdHJ1ZSAvL+Wxj+W5leS4remXtOaXtumVv+aLluWKqOaPkOekuuahhuaYvuekuuS4juWQplxyXG5cdFx0XHRcdGlmIChvcHRpb25zLmF1dG9DbG9zZSAhPT0gZmFsc2UpIHsgLy8v6L+Z6YeM55qEYXV0b0Nsb3Nl5piv6Ieq5a6a5LmJ5bGe5oCnLOi/memHjOS4jeWkquaYjueZvVxyXG5cdFx0XHRcdFx0aWYgKHByb21wdEJveFN0YXR1c1Nob3dTVE91dCkge1xyXG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQocHJvbXB0Qm94U3RhdHVzU2hvd1NUT3V0KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cHJvbXB0Qm94U3RhdHVzU2hvd1NUT3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGljVGltZSA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdHByb21wdEJveFN0YXR1c1Nob3dTVE91dCA9IG51bGxcclxuXHRcdFx0XHRcdH0sIDUwMCkgLy/lrprml7blmajlrprml7bmmL7npLrmj5DnpLrmtojlpLFcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LnZpZGVvLWJ0biB7XHJcblx0XHR3aWR0aDogNDRweDtcclxuXHRcdGhlaWdodDogNDRweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHR9XHJcblxyXG5cdC52aWRlby1vcGN0YXktdG9wIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC40KSk7XHJcblx0fVxyXG5cclxuXHQudmlkZW8tb3BjdGF5LWJvdCB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 11 */,
/* 12 */
/*!**************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.vue?vue&type=template&id=2f40ff96& */ 13);\n/* harmony import */ var _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6b11a1ff\",\n  false,\n  _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoText/components/progress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDbU07QUFDbk0sZ0JBQWdCLHVNQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY0MGZmOTYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjQuMTguMjAyMjA2MzAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjZiMTFhMWZmXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3ZpZGVvVGV4dC9jb21wb25lbnRzL3Byb2dyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*********************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=template&id=2f40ff96& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./progress.vue?vue&type=template&id=2f40ff96& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=template&id=2f40ff96& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: ["flex", "position-relative", "align-center"],
        staticStyle: { height: "40px" },
        on: {
          touchstart: _vm.propressMoveStart,
          touchmove: _vm.propressMove,
          touchend: _vm.propressMoveEnd,
          touchcancel: _vm.interruptSpellCasting
        }
      },
      [
        _c(
          "view",
          {
            staticClass: ["flex-1", "rounded"],
            staticStyle: {
              height: "3px",
              backgroundColor: "rgba(255,255,255,0.5)"
            }
          },
          [
            _c("view", {
              staticStyle: { backgroundColor: "#036EB8", height: "3px" },
              style: _vm.propressWidth
            })
          ]
        ),
        _c("view", {
          staticClass: ["position-absolute", "rounded-circle"],
          staticStyle: {
            height: "15px",
            width: "15px",
            backgroundColor: "#036EB8"
          },
          style: _vm.propressRound
        })
      ]
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 15 */
/*!***************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./progress.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVnQixDQUFnQiwwaEJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'], //依赖注入,v:this\n  data: function data() {\n    return {\n      width: 0, //进度条的总宽度\n      left: 0, //圆点\n      moveStatus: false //用户拖动进度条\n    };\n  },\n  props: {\n    curTime: 0, //当前时间值在变化\n    duration: 0 //总时长\n  },\n\n  created: function created() {\n    this.width = this.v.windowWidth - 44 - 44 - 80 - 15; //232px,44是两边按钮的图标大小,80是文字大小\n\n    this.active();\n  },\n  //计算属性\n  computed: {\n    propressWidth: function propressWidth() {\n      return \"width:\".concat(this.left, \"px\"); //这里是left，不是width\n    },\n    propressRound: function propressRound() {\n      return \"left:\".concat(this.left, \"px\");\n    },\n\n    currentTime: function currentTime() {\n      return this.left == 0 ? 0 : this.left / this.width * this.duration;\n    } },\n\n\n  //监听器\n  watch: {\n    //监听curTime属性\n    curTime: function curTime(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.active(); //让left的值一直变化\t\n      }\n    } },\n\n\n  methods: {\n    active: function active() {\n      this.left = this.duration == 0 ? 0 : this.curTime / this.duration * this.width; //进度发生变化的计算\n    }, //当前进度条的时间变化计算\n\n    //e是api触摸事件默认的事件对象\n    propressMoveStart: function propressMoveStart(e) {\n      this.moveStatus = true;\n      var pointPropress = e.changedTouches[0].screenX - 44;\n      if (pointPropress > this.width) {\n        pointPropress = this.width;\n        this.left = pointPropress;\n      } else {\n        this.left = pointPropress;\n      }\n      // console.log(e.changedTouches[0].screenX)//44-275距离长度\n    }, //进度条拖动开始\n\n    propressMoveEnd: function propressMoveEnd(e) {\n      this.moveStatus = false;\n      //$emit子父通信\n      this.$emit(\"valueChange\", this.currentTime);\n    }, //进度条拖动结束\n\n\n    interruptSpellCasting: function interruptSpellCasting(e) {\n      this.propressMoveEnd(e);\n    }, //突然被中断，比如打电话之类的\n\n    propressMove: function propressMove(e) {\n      this.moveStatus = true;\n      var propressRround = e.changedTouches[0].screenX - 44;\n\n      if (propressRround < 0) {\n        propressRround = 0;\n      } else if (propressRround > this.width) {\n        propressRround = this.width;\n      } else {\n        this.left = propressRround;\n      }\n      this.$emit('update', this.currentTime);\n    } //进度条移动\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UZXh0L2NvbXBvbmVudHMvcHJvZ3Jlc3MudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsZUFEQSxFQUNBO0FBQ0EsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsY0FEQSxFQUNBO0FBQ0EsYUFGQSxFQUVBO0FBQ0EsdUJBSEEsQ0FHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0EsY0FEQSxFQUNBO0FBQ0EsZUFGQSxDQUVBO0FBRkEsR0FUQTs7QUFjQSxTQWRBLHFCQWNBO0FBQ0Esd0RBREEsQ0FDQTs7QUFFQTtBQUNBLEdBbEJBO0FBbUJBO0FBQ0E7QUFDQSxpQkFEQSwyQkFDQTtBQUNBLDhDQURBLENBQ0E7QUFDQSxLQUhBO0FBSUEsaUJBSkEsMkJBSUE7QUFDQTtBQUNBLEtBTkE7O0FBUUEsZUFSQSx5QkFRQTtBQUNBO0FBQ0EsS0FWQSxFQXBCQTs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsbUJBRUEsUUFGQSxFQUVBLFFBRkEsRUFFQTtBQUNBO0FBQ0Esc0JBREEsQ0FDQTtBQUNBO0FBQ0EsS0FOQSxFQWxDQTs7O0FBMkNBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBLHFGQURBLENBQ0E7QUFDQSxLQUhBLEVBR0E7O0FBRUE7QUFDQSxxQkFOQSw2QkFNQSxDQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FoQkEsRUFnQkE7O0FBRUEsbUJBbEJBLDJCQWtCQSxDQWxCQSxFQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdEJBLEVBc0JBOzs7QUFHQSx5QkF6QkEsaUNBeUJBLENBekJBLEVBeUJBO0FBQ0E7QUFDQSxLQTNCQSxFQTJCQTs7QUFFQSxnQkE3QkEsd0JBNkJBLENBN0JBLEVBNkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXpDQSxDQXlDQTtBQXpDQSxHQTNDQSxFIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJwcm9wcmVzc01vdmVTdGFydFwiIEB0b3VjaG1vdmU9XCJwcm9wcmVzc01vdmVcIiBAdG91Y2hlbmQ9XCJwcm9wcmVzc01vdmVFbmRcIlxyXG5cdFx0XHRAdG91Y2hjYW5jZWw9XCJpbnRlcnJ1cHRTcGVsbENhc3RpbmdcIiBzdHlsZT1cImhlaWdodDogNDBweDtcIiBjbGFzcz1cImZsZXggcG9zaXRpb24tcmVsYXRpdmUgYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdDwhLS0g5Lit6Ze055qE5aSW5bGC55uS5a2Q6auY5bqm6K6+572uIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSByb3VuZGVkXCIgc3R5bGU9XCIgIGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIj5cclxuXHRcdFx0XHQ8IS0tIOaOp+WItuadoeeahOmVv+W6puagt+W8jyAtLT5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMzZFQjg7IGhlaWdodDozcHg7XCIgOnN0eWxlPVwicHJvcHJlc3NXaWR0aFwiPjwvdmlldz4gPCEtLSDov5vluqbmnaHnmoTmoLflvI8gLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPVwiaGVpZ2h0OiAxNXB4OyB3aWR0aDoxNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2RUI4XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJwcm9wcmVzc1JvdW5kXCI+PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOeItuebuOWtkOe7ne+8jOi/memHjOaYr+aLieWKqOWOn+eCuSAtLT5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGluamVjdDogWyd2J10sIC8v5L6d6LWW5rOo5YWlLHY6dGhpc1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3aWR0aDogMCwgLy/ov5vluqbmnaHnmoTmgLvlrr3luqZcclxuXHRcdFx0XHRsZWZ0OiAwLCAvL+WchueCuVxyXG5cdFx0XHRcdG1vdmVTdGF0dXM6IGZhbHNlLCAvL+eUqOaIt+aLluWKqOi/m+W6puadoVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y3VyVGltZTogMCwgLy/lvZPliY3ml7bpl7TlgLzlnKjlj5jljJZcclxuXHRcdFx0ZHVyYXRpb246IDAgLy/mgLvml7bplb9cclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudi53aW5kb3dXaWR0aCAtIDQ0IC0gNDQgLSA4MCAtIDE1OyAvLzIzMnB4LDQ05piv5Lik6L655oyJ6ZKu55qE5Zu+5qCH5aSn5bCPLDgw5piv5paH5a2X5aSn5bCPXHJcblxyXG5cdFx0XHR0aGlzLmFjdGl2ZSgpXHJcblx0XHR9LFxyXG5cdFx0Ly/orqHnrpflsZ7mgKdcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHByb3ByZXNzV2lkdGgoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDoke3RoaXMubGVmdH1weGAgLy/ov5nph4zmmK9sZWZ077yM5LiN5pivd2lkdGhcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHJlc3NSb3VuZCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYGxlZnQ6JHt0aGlzLmxlZnR9cHhgXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRjdXJyZW50VGltZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0ID09IDAgPyAwIDogKHRoaXMubGVmdCAvIHRoaXMud2lkdGgpICogdGhpcy5kdXJhdGlvblxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8v55uR5ZCs5ZmoXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHQvL+ebkeWQrGN1clRpbWXlsZ7mgKdcclxuXHRcdFx0Y3VyVGltZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubW92ZVN0YXR1cykge1xyXG5cdFx0XHRcdFx0dGhpcy5hY3RpdmUoKSAvL+iuqWxlZnTnmoTlgLzkuIDnm7Tlj5jljJZcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFjdGl2ZSgpIHtcclxuXHRcdFx0XHR0aGlzLmxlZnQgPSB0aGlzLmR1cmF0aW9uID09IDAgPyAwIDogKHRoaXMuY3VyVGltZSAvIHRoaXMuZHVyYXRpb24pICogdGhpcy53aWR0aCAvL+i/m+W6puWPkeeUn+WPmOWMlueahOiuoeeul1xyXG5cdFx0XHR9LCAvL+W9k+WJjei/m+W6puadoeeahOaXtumXtOWPmOWMluiuoeeul1xyXG5cclxuXHRcdFx0Ly9l5pivYXBp6Kem5pG45LqL5Lu26buY6K6k55qE5LqL5Lu25a+56LGhXHJcblx0XHRcdHByb3ByZXNzTW92ZVN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0bGV0IHBvaW50UHJvcHJlc3MgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSA0NFxyXG5cdFx0XHRcdGlmIChwb2ludFByb3ByZXNzID4gdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdFx0cG9pbnRQcm9wcmVzcyA9IHRoaXMud2lkdGhcclxuXHRcdFx0XHRcdHRoaXMubGVmdCA9IHBvaW50UHJvcHJlc3NcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sZWZ0ID0gcG9pbnRQcm9wcmVzc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblgpLy80NC0yNzXot53nprvplb/luqZcclxuXHRcdFx0fSwgLy/ov5vluqbmnaHmi5bliqjlvIDlp4tcclxuXHJcblx0XHRcdHByb3ByZXNzTW92ZUVuZChlKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHQvLyRlbWl05a2Q54i26YCa5L+hXHJcblx0XHRcdFx0dGhpcy4kZW1pdChcInZhbHVlQ2hhbmdlXCIsIHRoaXMuY3VycmVudFRpbWUpXHJcblx0XHRcdH0sIC8v6L+b5bqm5p2h5ouW5Yqo57uT5p2fXHJcblxyXG5cclxuXHRcdFx0aW50ZXJydXB0U3BlbGxDYXN0aW5nKGUpIHtcclxuXHRcdFx0XHR0aGlzLnByb3ByZXNzTW92ZUVuZChlKVxyXG5cdFx0XHR9LCAvL+eqgeeEtuiiq+S4reaWre+8jOavlOWmguaJk+eUteivneS5i+exu+eahFxyXG5cclxuXHRcdFx0cHJvcHJlc3NNb3ZlKGUpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0bGV0IHByb3ByZXNzUnJvdW5kID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YIC0gNDRcclxuXHJcblx0XHRcdFx0aWYgKHByb3ByZXNzUnJvdW5kIDwgMCkge1xyXG5cdFx0XHRcdFx0cHJvcHJlc3NScm91bmQgPSAwXHJcblx0XHRcdFx0fSBlbHNlIGlmIChwcm9wcmVzc1Jyb3VuZCA+IHRoaXMud2lkdGgpIHtcclxuXHRcdFx0XHRcdHByb3ByZXNzUnJvdW5kID0gdGhpcy53aWR0aFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxlZnQgPSBwcm9wcmVzc1Jyb3VuZFxyXG5cdFx0XHRcdH0gXHJcblx0XHRcdFx0dGhpcy4kZW1pdCgndXBkYXRlJywgdGhpcy5jdXJyZW50VGltZSlcclxuXHRcdFx0fSAvL+i/m+W6puadoeenu+WKqFxyXG5cdFx0fVxyXG5cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 18 */
/*!*******************************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 19);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".video-btn": {
    "": {
      "width": [
        "44",
        0,
        0,
        0
      ],
      "height": [
        "44",
        0,
        0,
        0
      ],
      "display": [
        "flex",
        0,
        0,
        0
      ],
      "flexDirection": [
        "row",
        0,
        0,
        0
      ],
      "alignItems": [
        "center",
        0,
        0,
        0
      ],
      "justifyContent": [
        "center",
        0,
        0,
        0
      ]
    }
  },
  ".video-opctay-top": {
    "": {
      "backgroundImage": [
        "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4))",
        0,
        0,
        1
      ]
    }
  },
  ".video-opctay-bot": {
    "": {
      "backgroundImage": [
        "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7))",
        0,
        0,
        2
      ]
    }
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);