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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubNvue.nvue?vue&type=template&id=62b84046&mpType=page */ 6);\n/* harmony import */ var _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubNvue.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 17).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 17).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _SubNvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1f849ece\",\n  false,\n  _SubNvue_nvue_vue_type_template_id_62b84046_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoText/SubNvue/SubNvue.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG9FQUE0RDtBQUNoSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsb0VBQTREO0FBQ3JIOztBQUVBOztBQUVBO0FBQ21NO0FBQ25NLGdCQUFnQix1TUFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9TdWJOdnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJiODQwNDYmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9TdWJOdnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL1N1Yk52dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxZjg0OWVjZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy92aWRlb1RleHQvU3ViTnZ1ZS9TdWJOdnVlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

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
                  _vm.fullScreenStatus &&
                  (_vm.bottomOrTopControlBarShow || _vm.lockScreenStatus)
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "align-center",
                            "justify-center"
                          ],
                          staticStyle: { width: "100px" }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "rounded-lg",
                                "flex",
                                "align-center",
                                "justify-center"
                              ],
                              staticStyle: {
                                width: "50px",
                                height: "50px",
                                backgroundColor: "rgba(0,0,0,0.4)"
                              },
                              on: { click: _vm.lockScreen }
                            },
                            [
                              _vm.lockScreenStatus
                                ? _c(
                                    "u-text",
                                    {
                                      staticClass: ["iconfont"],
                                      staticStyle: {
                                        color: "#036EB8",
                                        fontSize: "30px"
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    },
                                    [_vm._v("")]
                                  )
                                : _c(
                                    "u-text",
                                    {
                                      staticClass: ["iconfont"],
                                      staticStyle: {
                                        color: "#036EB8",
                                        fontSize: "30px"
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    },
                                    [_vm._v("")]
                                  )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
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
                                staticClass: ["flex-1"],
                                staticStyle: {
                                  paddingLeft: "15px",
                                  paddingRight: "15px"
                                }
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
                                staticClass: [
                                  "flex",
                                  "align-stretch",
                                  "justify-between"
                                ],
                                staticStyle: { height: "40px" }
                              },
                              [
                                _c("view", { staticClass: ["flex"] }, [
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
                                          staticClass: [
                                            "font-sm",
                                            "text-white"
                                          ],
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
                                                _vm._f("formatTime")(
                                                  _vm.duration
                                                )
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
                                      [_vm._v("")]
                                    )
                                  ])
                                ]),
                                _c("view", { staticClass: ["flex"] }, [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "40px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v("选集")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "40px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" }
                                        },
                                        [_vm._v("清晰度")]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "40px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" },
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                          on: {
                                            click: function($event) {
                                              _vm.openPopupShow("speed")
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.rate) + "X")]
                                      )
                                    ]
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
                  _vm.fullScreenStatus && _vm.popUpFrame
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "flex-column"
                          ],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.8)" }
                        },
                        [
                          _vm.popUpFrameType === "speed"
                            ? _c(
                                "view",
                                {
                                  staticClass: ["flex-1", "flex-column"],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.rateList, function(
                                  rateChange,
                                  index
                                ) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex",
                                        "flex-1",
                                        "justify-center",
                                        "align-center"
                                      ]
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          style:
                                            rateChange === _vm.rate
                                              ? "color: #036EB8;"
                                              : "color: white;",
                                          appendAsTree: true,
                                          attrs: { append: "tree" },
                                          on: {
                                            click: function($event) {
                                              _vm.speedChange(rateChange)
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(rateChange))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e()
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
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _progress = _interopRequireDefault(__webpack_require__(/*! ../components/progress.vue */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//进度条组件引入\nvar videoCtx = null; //获取video的节点\nvar res = uni.getSystemInfoSync(); //同步获取页面的状态栏信息\nvar promptBoxStatusShowSTOut = null; //提示框的定时器\nvar controlStOut = null; //控制条显示的定时器\nvar domModule = __webpack_provided_uni_dot_requireNativePlugin('dom'); //Weex 提供 DOM.addRule 以加载自定义字体。开发者可以通过指定 font-family加载 iconfont 和 custom font。开发者可以使用下面的代码加载自定义字体：\nvar _default = { data: function data() {return { isplay: false, //播放的状态\n      statusBarHeight: 0, //状态栏的信息\n      currentTime: 0, //当前时长\n      duration: 0, //总时长\n      windowHeight: 0, windowWidth: 0, screenStatus: false, //默认不是全屏\n      staticTime: false, //屏幕中间时长拖动提示框显示与否\n      promptBoxStatus: { type: 'message', message: '提示' }, bottomOrTopControlBarShow: true, //顶部或底部控制条显示与否\n      oldTouchs: {}, oldValue: {}, dbcount: 0, //点击次数\n      touchType: null, fullScreenStatus: false, //全屏状态，默认不是全屏\n      popUpFrame: false, //弹框\n      popUpFrameType: \"speed\", //弹框标志，抽屉\n      rate: '1.0', //当前速度\n      rateList: ['2.0', '1.5', '1.25', '1.0', '0.8', '0.5'], //速度选择\n      lockScreenStatus: false //屏幕状态\n    };}, provide: function provide() {//依赖注入,要和inject一起使用\n    return { v: this };}, computed: { //屏幕状态大小计算\n    videoFullScreen: function videoFullScreen() {return this.screenStatus ? \"width:\".concat(this.windowHeight, \"px; height:\").concat(this.windowWidth, \"px\") : 'width:750rpx;height:225px;'; //这里的是计算全屏后的大小，用的应该是uni.getWindowInfo(),并且宽高显示好像相反\n    } // modalStyle() {\n    // \tlet top = this.statusBarHeight + 44\n    // \treturn `top:${top}px;bottom:44px` //计算蒙板的高度\n    // }\n  }, //组件\n  components: { progress: _progress.default }, filters: { //时间过滤器，vue3.0已抛弃\n    formatTime: function formatTime(result) {var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);return result = result > 3600 ? h + ':' + m + ':' + s : m + ':' + s;} }, created: function created() {//在页面创建的时候\n    // console.log(uni.getSystemInfoSync())\n    var screen = uni.getWindowInfo();this.statusBarHeight = res.statusBarHeight;this.windowHeight = screen.screenHeight;this.windowWidth = screen.screenWidth; //400\n    domModule.addRule('fontFace', { 'fontFamily': \"iconfont\", //这里的fontfamily命名最好是和class中fontsize一致\n      'src': \"url('http://at.alicdn.com/t/c/font_2852955_kgdgy1oi2a.ttf')\" //阿里图标库的在线生成地址网页链接\n    });}, mounted: function mounted() {// console.log(this.$refs)this.$refs可以获取所有class被设置为ref的节点属性\n    videoCtx = this.$refs.video;}, //直接使用 ref，例如 this.$refs.video1\n  methods: { //锁屏或者解除锁屏\n    lockScreen: function lockScreen() {this.lockScreenStatus = !this.lockScreenStatus;if (this.lockScreenStatus) {this.controlBarHideStatus(); //隐藏状态栏\n      } else {this.controlBarShowStatus();}}, //修改速度\n    speedChange: function speedChange(change) {this.rate = change;videoCtx.playbackRate(this.rate);uni.showToast({ title: \"\\u5F53\\u524D\\u901F\\u5EA6\\u5DF2\\u4FEE\\u6539\\u4E3A:\".concat(this.rate, \"\\u500D\\u6570\"), icon: 'none' });this.popUpFrame = false;}, //api接口,uni.createVideoContext(videoId, this)\n    openPopupShow: function openPopupShow(type) {this.popUpFrameType = type;this.popUpFrame = true; //显示抽屉\n    }, modalTouchS: function modalTouchS(e) {this.oldTouchs = e.changedTouches[0];this.oldValue = { currentTime: this.currentTime }; //旧的当前时间\n    }, //蒙版开始触摸\n    modalTouchM: function modalTouchM(e) {if (this.lockScreenStatus) {return;}var newTouchs = e.changedTouches[0]; //获取新的坐标\n      if (!this.touchType) {this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'current' : null;if (this.touchType === 'current') {videoCtx.pause();}} else if (this.touchType === 'current') {this.promptBoxStatusShow({ type: \"time\", autoClose: false });this.controlBarShowStatus();var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.currentTime * 1; //核心算法拖动屏幕\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;this.currentTime = newCurrentTime;}}, //蒙版移动中\n    modalTouchE: function modalTouchE(e) {var _this = this;if (this.lockScreenStatus) {return;}if (this.touchType === 'current') {videoCtx.seek(this.currentTime);videoCtx.play();} else {if (this.dbcount === 1 || this.dbcount === 0) {this.dbcount++;}if (this.dbcount > 0) {setTimeout(function () {if (_this.dbcount === 1) {// console.log(\"单击\")\n              _this.popUpFrame = false;_this.controlShowOrHide();} //单击\n            if (_this.dbcount === 2) {_this.videoPlayOrPaused(); // console.log(\"双击\")\n            } //双击\n            _this.dbcount = 0; //不论是双击还是单击最后都等于0\n          }, 250);}}this.touchType = null;this.staticTime = false; //关闭提示框\n    }, //蒙版结束，自定义单击，双击\n    //显示或隐藏控制条\n    controlShowOrHide: function controlShowOrHide() {this.bottomOrTopControlBarShow ? this.controlBarHideStatus() : this.controlBarShowStatus();}, controlBarShowStatus: function controlBarShowStatus() {var _this2 = this; // this.bottomControlBarShow = true\n      // this.topControlBarShow = true\n      this.bottomOrTopControlBarShow = true;if (controlStOut) {clearTimeout(controlStOut);}controlStOut = setTimeout(function () {_this2.controlBarHideStatus();controlStOut = null;}, 3000);}, //控制条显示状态\n    controlBarHideStatus: function controlBarHideStatus() {this.bottomOrTopControlBarShow = false;}, //控制条隐藏状态\n    back: function back() {//返回\n      // uni.navigateBack({\n      // \tdelta:1\n      // })\n      uni.navigateTo({ url: \"/pages/index/index\" });},\n    videoPlayOrPaused: function videoPlayOrPaused() {//播放停止按钮\n      this.promptBoxStatusShow({\n        message: this.isplay ? '暂停' : '播放' });\n\n\n      if (this.isplay) {\n        videoCtx.pause();\n      } else {\n        this.controlBarShowStatus(); //控制条显示状态\n        videoCtx.play();\n      }\n    },\n\n    fullScreenChange: function fullScreenChange(e) {\n      this.fullScreenStatus = e.detail.fullScreen;\n    }, //当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal\n\n    fullOrExitScreen: function fullOrExitScreen() {\n      if (this.fullScreenStatus) {\n        this.screenStatus = false;\n        videoCtx.exitFullScreen(); //退出全屏\n      } else {\n        this.screenStatus = true;\n        videoCtx.requestFullScreen(); //进入全屏\n      }\n      //requestFullScreen进入全屏，可传{direction}参数\n      //exitFullScreen退出全屏\n    }, //点击事件进入或者退出全屏\n\n\n    timeupdate: function timeupdate(e) {\n      if (!this.staticTime) {\n        this.currentTime = parseInt(e.detail.currentTime);\n        this.duration = parseInt(e.detail.duration);\n      }\n      // console.log(e.detail.currentTime, e.detail.duration)\n    }, //播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次\n\n    propressValueChange: function propressValueChange(e) {\n      videoCtx.seek(e); //api方法 seek(position)跳转到指定位置，单位 s\n      this.staticTime = false; //@touchend api在propress子组件中进度条拖动事件结束时调用\n      videoCtx.play();\n    },\n\n    screenTimeUpdate: function screenTimeUpdate(e) {//进度条变化的时候\n      videoCtx.pause();\n      this.staticTime = true; //屏幕中间时长拖动提示框显示与否\n      this.currentTime = e;\n      this.promptBoxStatusShow({\n        type: \"time\",\n        autoClose: false //\n      });\n      this.controlBarShowStatus(); //控制条显示状态\n    }, //从组件progress传来的值，e是子组件中的currtTime\n\n    promptBoxStatusShow: function promptBoxStatusShow(options) {var _this3 = this;\n      this.promptBoxStatus.type = options.type || 'message';\n      this.promptBoxStatus.message = options.message || '提示';\n      this.staticTime = true; //屏幕中间时长拖动提示框显示与否\n      if (options.autoClose !== false) {///这里的autoClose是自定义属性,这里不太明白\n        if (promptBoxStatusShowSTOut) {\n          clearTimeout(promptBoxStatusShowSTOut);\n        }\n        promptBoxStatusShowSTOut = setTimeout(function () {\n          _this3.staticTime = false;\n          promptBoxStatusShowSTOut = null;\n        }, 500); //定时器定时显示提示消失\n      }\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UZXh0L1N1Yk52dWUvU3ViTnZ1ZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErS0Esa0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFHQSxvQixDQUFBO0FBRUEsa0MsQ0FBQTtBQUVBLG9DLENBQUE7QUFFQSx3QixDQUFBO0FBQ0EsK0RBQ0EsS0FEQSxFLENBQ0E7ZUFDQSxFQUVBLElBRkEsa0JBRUEsQ0FDQSxTQUNBLGFBREEsRUFDQTtBQUNBLHdCQUZBLEVBRUE7QUFDQSxvQkFIQSxFQUdBO0FBQ0EsaUJBSkEsRUFJQTtBQUNBLHFCQUxBLEVBTUEsY0FOQSxFQU9BLG1CQVBBLEVBT0E7QUFDQSx1QkFSQSxFQVFBO0FBQ0EseUJBQ0EsZUFEQSxFQUVBLGFBRkEsRUFUQSxFQWNBLCtCQWRBLEVBY0E7QUFFQSxtQkFoQkEsRUFtQkEsWUFuQkEsRUFzQkEsVUF0QkEsRUFzQkE7QUFDQSxxQkF2QkEsRUF3QkEsdUJBeEJBLEVBd0JBO0FBQ0EsdUJBekJBLEVBeUJBO0FBQ0EsNkJBMUJBLEVBMEJBO0FBRUEsaUJBNUJBLEVBNEJBO0FBQ0EsMkRBN0JBLEVBNkJBO0FBQ0EsNkJBOUJBLENBOEJBO0FBOUJBLE1BZ0NBLENBbkNBLEVBcUNBLE9BckNBLHFCQXFDQTtBQUNBLGFBQ0EsT0FEQSxHQUdBLENBekNBLEVBMkNBLFlBQ0E7QUFDQSxtQkFGQSw2QkFFQSxDQUNBLDhHQUNBLDRCQURBLENBREEsQ0FFQTtBQUNBLEtBTEEsQ0FPQTtBQUNBO0FBQ0E7QUFDQTtBQVZBLEdBM0NBLEVBd0RBO0FBQ0EsZ0JBQ0EsMkJBREEsRUF6REEsRUE2REEsV0FDQTtBQUNBLGNBRkEsc0JBRUEsTUFGQSxFQUVBLENBQ0EscUdBRUEscUdBQ0EsRUFEQSxHQUNBLEVBREEsRUFHQSwrRkFDQSxvRUFDQSxDQVZBLEVBN0RBLEVBMkVBLE9BM0VBLHFCQTJFQTtBQUNBO0FBQ0EscUNBQ0EsMkNBRUEsd0NBQ0Esc0NBTkEsQ0FNQTtBQUVBLG9DQUNBLHdCQURBLEVBQ0E7QUFDQSwwRUFGQSxDQUVBO0FBRkEsT0FJQSxDQXZGQSxFQXlGQSxPQXpGQSxxQkF5RkEsQ0FDQTtBQUNBLGdDQUNBLENBNUZBLEVBNEZBO0FBRUEsYUFDQTtBQUNBLGNBRkEsd0JBRUEsQ0FDQSwrQ0FDQSw0QkFDQSw0QkFEQSxDQUNBO0FBQ0EsT0FGQSxNQUVBLENBQ0EsNEJBQ0EsQ0FDQSxDQVRBLEVBWUE7QUFDQSxlQWJBLHVCQWFBLE1BYkEsRUFhQSxDQUNBLG1CQUNBLGlDQUNBLGdCQUNBLDRGQURBLEVBRUEsWUFGQSxJQUlBLHdCQUNBLENBckJBLEVBcUJBO0FBRUEsaUJBdkJBLHlCQXVCQSxJQXZCQSxFQXVCQSxDQUNBLDJCQUNBLHVCQUZBLENBRUE7QUFFQSxLQTNCQSxFQTZCQSxXQTdCQSx1QkE2QkEsQ0E3QkEsRUE2QkEsQ0FDQSxxQ0FFQSxrQkFDQSw2QkFEQSxHQUhBLENBS0E7QUFDQSxLQW5DQSxFQW1DQTtBQUVBLGVBckNBLHVCQXFDQSxDQXJDQSxFQXFDQSxDQUNBLDRCQUNBLE9BQ0EsQ0FDQSxvQ0FKQSxDQUlBO0FBQ0EsNEJBQ0EsMEZBRUEsbUNBQ0EsaUJBQ0EsQ0FDQSxDQU5BLE1BTUEsbUNBQ0EsMkJBQ0EsWUFEQSxFQUVBLGdCQUZBLElBSUEsNEJBRUEsd0dBQ0EsV0FEQSxHQUNBLENBREEsQ0FQQSxDQVFBO0FBRUEseUZBRUEseURBRUEsa0NBQ0EsQ0FFQSxDQWpFQSxFQWlFQTtBQUVBLGVBbkVBLHVCQW1FQSxDQW5FQSxFQW1FQSxrQkFDQSw0QkFDQSxPQUNBLENBRUEsbUNBQ0EsZ0NBQ0EsZ0JBRUEsQ0FKQSxNQUlBLENBQ0EsK0NBQ0EsZUFDQSxDQUNBLHVCQUNBLHdCQUNBLDBCQUNBO0FBQ0EsdUNBQ0EsMEJBQ0EsQ0FMQSxDQUtBO0FBQ0Esc0NBQ0EsMEJBREEsQ0FFQTtBQUNBLGFBVEEsQ0FTQTtBQUNBLDhCQVZBLENBVUE7QUFDQSxXQVhBLEVBV0EsR0FYQSxFQVlBLENBQ0EsQ0FDQSxzQkFDQSx3QkE3QkEsQ0E2QkE7QUFDQSxLQWpHQSxFQWlHQTtBQUVBO0FBQ0EscUJBcEdBLCtCQW9HQSxDQUNBLDJGQUNBLENBdEdBLEVBd0dBLG9CQXhHQSxrQ0F3R0Esb0JBQ0E7QUFDQTtBQUNBLDRDQUVBLG1CQUNBLDJCQUNBLENBQ0EsdUNBQ0EsOEJBQ0Esb0JBQ0EsQ0FIQSxFQUdBLElBSEEsRUFJQSxDQXBIQSxFQW9IQTtBQUVBLHdCQXRIQSxrQ0FzSEEsQ0FDQSx1Q0FDQSxDQXhIQSxFQXdIQTtBQUVBLFFBMUhBLGtCQTBIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUNBLHlCQURBLElBR0EsQ0FqSUE7QUFtSUEscUJBbklBLCtCQW1JQTtBQUNBO0FBQ0EsMENBREE7OztBQUlBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQSxvQ0FEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUlBOztBQWdKQSxvQkFoSkEsNEJBZ0pBLENBaEpBLEVBZ0pBO0FBQ0E7QUFDQSxLQWxKQSxFQWtKQTs7QUFFQSxvQkFwSkEsOEJBb0pBO0FBQ0E7QUFDQTtBQUNBLGtDQUZBLENBRUE7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBLHFDQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTlKQSxFQThKQTs7O0FBR0EsY0FqS0Esc0JBaUtBLENBaktBLEVBaUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdktBLEVBdUtBOztBQUVBLHVCQXpLQSwrQkF5S0EsQ0F6S0EsRUF5S0E7QUFDQSx1QkFEQSxDQUNBO0FBQ0EsOEJBRkEsQ0FFQTtBQUNBO0FBQ0EsS0E3S0E7O0FBK0tBLG9CQS9LQSw0QkErS0EsQ0EvS0EsRUErS0E7QUFDQTtBQUNBLDZCQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSx3QkFGQSxDQUVBO0FBRkE7QUFJQSxrQ0FSQSxDQVFBO0FBQ0EsS0F4TEEsRUF3TEE7O0FBRUEsdUJBMUxBLCtCQTBMQSxPQTFMQSxFQTBMQTtBQUNBO0FBQ0E7QUFDQSw2QkFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsR0FIQSxFQUpBLENBT0E7QUFDQTtBQUNBLEtBdk1BLEVBOUZBLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImJnLWRhcmtcIj5cclxuXHRcdDx2aWRlbyBzcmM9XCIvc3RhdGljL3ZpZGVvLzJhNjNkNDY3LTIxZjItNDdkMy05Mzc0LWFkNmI2NTEwMTk1ZC5tcDRcIiBpZD1cInZpZGVvXCIgcmVmPVwidmlkZW9cIiA6Y29udHJvbHM9XCJmYWxzZVwiXHJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDsgaGVpZ2h0OjIyNXB4XCIgQGZ1bGxzY3JlZW5jaGFuZ2U9XCJmdWxsU2NyZWVuQ2hhbmdlXCIgQHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCJcclxuXHRcdFx0QHBsYXk9XCJpc3BsYXk9dHJ1ZVwiIEBwYXVzZT1cImlzcGxheT1mYWxzZVwiIHNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIiBzaG93LWZ1bGxzY3JlZW4tYnRuPVwiZmFsc2VcIlxyXG5cdFx0XHRzaG93LXByb2dyZXNzPVwiZmFsc2VcIlxyXG5cdFx0XHRwb3N0ZXI9XCJodHRwczovL3RzMS5jbi5tbS5iaW5nLm5ldC90aC9pZC9SLUMuOWQ4YTk2YmQ2NWEwMTliYTA2Y2I1OWIyODYwNDljZjk/cmlrPWJzMERWMSUyZmVMTHl2MHcmcml1PWh0dHAlM2ElMmYlMmZoYW81LnFoaW1nLmNvbSUyZnQwMTNjZGJiZjA1NGU4NTMxMmUuanBnJTNmc2l6ZSUzZDEyODJ4ODE4JmVoaz1DcVZvTUQyJTJib2JiaDFrTXIlMmJCcTZzS3ZERTNxaXc4bG5FNUQzUXJFNm5zQSUzZCZyaXNsPSZwaWQ9SW1nUmF3JnI9MFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgOnN0eWxlPVwidmlkZW9GdWxsU2NyZWVuXCI+XHJcblx0XHRcdFx0PCEtLSDlj4zlh7vkuovku7bokpnmnb8gLS0+XHJcblx0XHRcdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJtb2RhbFRvdWNoU1wiIEB0b3VjaG1vdmU9XCJtb2RhbFRvdWNoTVwiIEB0b3VjaGVuZD1cIm1vZGFsVG91Y2hFXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wIHRvcC0wXCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8IS0tIOS+p+i+uemUgeWxjyAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJmdWxsU2NyZWVuU3RhdHVzJiYoYm90dG9tT3JUb3BDb250cm9sQmFyU2hvd3x8bG9ja1NjcmVlblN0YXR1cylcIiAgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogMTAwcHg7IFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJsb2NrU2NyZWVuXCIgY2xhc3M9XCJyb3VuZGVkLWxnIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogNTBweDsgaGVpZ2h0OjUwcHg7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCB2LWlmPVwibG9ja1NjcmVlblN0YXR1c1wiIGNsYXNzPVwiaWNvbmZvbnRcIiAgc3R5bGU9XCJjb2xvcjojMDM2RUI4OyBmb250LXNpemU6MzBweCBcIiA+JiN4ZTZmNjs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgdi1lbHNlIGNsYXNzPVwiaWNvbmZvbnRcIiAgc3R5bGU9XCJjb2xvcjojMDM2RUI4OyBmb250LXNpemU6MzBweCBcIiA+JiN4ZTcwNzs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwhLS0g5o+Q56S65qGGIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzdGF0aWNUaW1lXCIgY2xhc3M9XCJwLTIgcm91bmRlZFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInByb21wdEJveFN0YXR1cy50eXBlPT0ndGltZSdcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgdi1pZj1cInByb21wdEJveFN0YXR1cy50eXBlPT0nbWVzc2FnZSdcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQgdGV4dC13aGl0ZVwiPnt7cHJvbXB0Qm94U3RhdHVzLm1lc3NhZ2V9fTwvdGV4dD5cclxuXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5YWo5bGP5ZCO55qE5o6n5Yi25p2hIC0tPlxyXG5cdFx0XHRcdDwhLS0g6aG26YOoIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJib3R0b21PclRvcENvbnRyb2xCYXJTaG93ICYmIGZ1bGxTY3JlZW5TdGF0dXNcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2aWRlby1vcGN0YXktdG9wIHBvc2l0aW9uLWFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wXCI+XHJcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiAyNnB4O1wiPjwvdmlldz4gLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogMjZweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuIFwiIEBjbGljaz1cImZ1bGxPckV4aXRTY3JlZW4oKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g6L+U5Zue5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MjM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0g6L+Z6YeM55qEJiN4ZTYyMzvmmK/pmL/ph4zlm77moIflupPnmoTlm77lg4/lnKjnur/ku6PnoIEgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSB0ZXh05qCH562+5LiN6KaB5o2i6KGM77yM5ZyobnZ1ZeS4rem7mOiupOaNouihjOS7luS5n+aNouihjCAtLT5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCI+PHRleHRcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibWwtMyB0ZXh0LXdoaXRlXCI+5qCH6aKYc2RzYmFqZGFqaGJhZGRIU0pmRkJKSkZmamhiaDwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8IS0tIOW6lemDqCAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyAmJiBmdWxsU2NyZWVuU3RhdHVzXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiIHZpZGVvLW9wY3RheS1ib3QgcG9zaXRpb24tYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA4OHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOaOp+WItuadoeeahOagt+W8j+mFjee9ru+8ge+8ge+8ge+8gemdnuW4uOmHjeimge+8ge+8ge+8gSAtLT5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIiBzdHlsZT1cInBhZGRpbmctbGVmdDogMTVweDsgcGFkZGluZy1yaWdodDoxNXB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxwcm9ncmVzcyA6Y3VyVGltZT1cImN1cnJlbnRUaW1lXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIiBAdmFsdWVDaGFuZ2U9XCJwcm9wcmVzc1ZhbHVlQ2hhbmdlXCJcclxuXHRcdFx0XHRcdFx0XHRcdEB1cGRhdGU9XCJzY3JlZW5UaW1lVXBkYXRlXCI+PC9wcm9ncmVzcz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLXN0cmV0Y2gganVzdGlmeS1iZXR3ZWVuXCIgc3R5bGU9XCJoZWlnaHQ6IDQwcHg7XCI+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSBcdOW6lemDqOWwj+Wbvuagh+eahOaOkuWIl++8jOWkluWxgmp1c3RpZmZ5LWJldHdlZW7kuKTovrnliIbmlaMgLS0+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSBhbGlnbi1zdHJldGNo5pivY3NzIGZsZXjmoLflvI/kuK1hbGlnbi1pdGVtOnN0cmV0Y2jlsZ7mgKfvvIzkvZznlKjmmK9cdOm7mOiupOOAgumhueebruiiq+aLieS8uOS7pemAguWQiOWuueWZqOOAgiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOW3pui+ueeahOWbvuagh+mbhuWQiCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuXCIgQGNsaWNrPVwidmlkZW9QbGF5T3JQYXVzZWQoKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaSreaUvuaMiemSriAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHYtaWY9XCIhaXNwbGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MmY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIOaaguWBnOaMiemSriAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHYtZWxzZSBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MjY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPjx0ZXh0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmb250LXNtIHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz48IS0tIOaXtumXtOaWh+acrOaYvuekuiAtLT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLWJ0biBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PCEtLSDlvLnluZXmjInpkq4gLS0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cImZ1bGxPckV4aXRTY3JlZW4oKVwiIGNsYXNzPVwiaWNvbmZvbnRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTY2NTs8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIOWPs+i+ueeahOWbvuagh+mbhuWQiCAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDogNDBweDsgcGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4IDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+6YCJ6ZuGPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDogNDBweDsgcGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4IDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+5riF5pmw5bqmPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDogNDBweDsgcGFkZGluZy1sZWZ0OjE1cHg7cGFkZGluZy1yaWdodDoxNXB4IDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgQGNsaWNrPVwib3BlblBvcHVwU2hvdygnc3BlZWQnKVwiIGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPnt7cmF0ZX19WDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHJcblxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIHN0eWxlPVwiaGVpZ2h0OiA0MHB4O1wiPlxyXG5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8IS0tIOW8ueahhiAtLT5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiZnVsbFNjcmVlblN0YXR1cyAmJiBwb3BVcEZyYW1lXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGZsZXgtY29sdW1uXCJcclxuXHRcdFx0XHRcdHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1wiPlxyXG5cdFx0XHRcdFx0PCEtLSDpgJ/luqYgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWlmPVwicG9wVXBGcmFtZVR5cGU9PT0nc3BlZWQnXCIgY2xhc3M9XCJmbGV4LTEgZmxleC1jb2x1bW4gXCIgIHN0eWxlPVwid2lkdGg6IDEwMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LTEganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCIgdi1mb3I9XCIocmF0ZUNoYW5nZSxpbmRleCkgaW4gcmF0ZUxpc3RcIiA6a2V5PVwiaW5kZXhcIj4gXHJcblx0XHRcdFx0XHRcdCAgPHRleHQgQGNsaWNrPVwic3BlZWRDaGFuZ2UocmF0ZUNoYW5nZSlcIiA6c3R5bGU9XCJyYXRlQ2hhbmdlID09PXJhdGU/ICdjb2xvcjogIzAzNkVCODsnIDogJ2NvbG9yOiB3aGl0ZTsnXCI+e3tyYXRlQ2hhbmdlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdCAgPC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwhLS0gbnZ1ZeeahOa4suafk+aYr+S7juS4iuWQkeS4i+i/m+ihjOeahOa4suafk++8jOWGmeWcqOS4i+mdoueahOa4suafk+mAn+W6pumrmOS6juS4iumdoiA6c3R5bGXliqjmgIHnmoTnu5HlrprlhajlsY/kuI7ljZXnq5blsY/nmoTpq5jlrr0tLT5cclxuXHRcdDwvdmlkZW8+XHJcblxyXG5cdFx0PCEtLSAg5LiN5piv5YWo5bGPIC0tPlxyXG5cdFx0PCEtLSDoh6rlrprkuYnop4bpopHpobbpg6ggLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyAmJiAhZnVsbFNjcmVlblN0YXR1c1wiXHJcblx0XHRcdGNsYXNzPVwidmlkZW8tb3BjdGF5LXRvcCBwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHQ8IS0tIDx2aWV3IDpzdHlsZT1cIidoZWlnaHQnK3N0YXR1c0JhckhlaWdodCsncHgnXCI+PC92aWV3PiAtLT5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDI2cHg7XCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogMjZweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG4gXCIgQGNsaWNrPVwiYmFjaygpXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/lOWbnuaMiemSriAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MjM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSDov5nph4znmoQmI3hlNjIzO+aYr+mYv+mHjOWbvuagh+W6k+eahOWbvuWDj+WcqOe6v+S7o+eggSAtLT5cclxuXHRcdFx0XHRcdDwhLS0gdGV4dOagh+etvuS4jeimgeaNouihjO+8jOWcqG52dWXkuK3pu5jorqTmjaLooYzku5bkuZ/mjaLooYwgLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PCEtLSDoh6rlrprkuYnop4bpopHlupXpg6gtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJib3R0b21PclRvcENvbnRyb2xCYXJTaG93ICYmICFmdWxsU2NyZWVuU3RhdHVzXCJcclxuXHRcdFx0Y2xhc3M9XCIgdmlkZW8tb3BjdGF5LWJvdCBwb3NpdGlvbi1maXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaFwiIHN0eWxlPVwiaGVpZ2h0OiA0MHB4O1wiPlxyXG5cdFx0XHRcdDwhLS0gYWxpZ24tc3RyZXRjaOaYr2NzcyBmbGV45qC35byP5LitYWxpZ24taXRlbTpzdHJldGNo5bGe5oCn77yM5L2c55So5pivXHTpu5jorqTjgILpobnnm67ooqvmi4nkvLjku6XpgILlkIjlrrnlmajjgIIgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG5cIiBAY2xpY2s9XCJ2aWRlb1BsYXlPclBhdXNlZCgpXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOaSreaUvuaMiemSriAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiB2LWlmPVwiIWlzcGxheVwiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTYyZjs8L3RleHQ+XHJcblx0XHRcdFx0XHQ8IS0tIOaaguWBnOaMiemSriAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiB2LWVsc2Ugc3R5bGU9XCJmb250LXNpemU6IDMwcHg7IGNvbG9yOiMwMzZFQjhcIj4mI3hlNjI2OzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDmjqfliLbmnaHnmoTmoLflvI/phY3nva7vvIHvvIHvvIHvvIHpnZ7luLjph43opoHvvIHvvIHvvIEgLS0+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTFcIj5cclxuXHRcdFx0XHRcdDxwcm9ncmVzcyA6Y3VyVGltZT1cImN1cnJlbnRUaW1lXCIgOmR1cmF0aW9uPVwiZHVyYXRpb25cIiBAdmFsdWVDaGFuZ2U9XCJwcm9wcmVzc1ZhbHVlQ2hhbmdlXCJcclxuXHRcdFx0XHRcdFx0QHVwZGF0ZT1cInNjcmVlblRpbWVVcGRhdGVcIj48L3Byb2dyZXNzPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgc3R5bGU9XCJ3aWR0aDogODBweDtcIj48dGV4dFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvbnQtc20gdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz48IS0tIOaXtumXtOaWh+acrOaYvuekuiAtLT5cclxuXHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG4gXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOaUvuWkp+aMiemSriAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IEBjbGljaz1cImZ1bGxPckV4aXRTY3JlZW4oKVwiIGNsYXNzPVwiaWNvbmZvbnRcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MGQ7PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8v6L+b5bqm5p2h57uE5Lu25byV5YWlXHJcblx0aW1wb3J0IHByb2dyZXNzIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2dyZXNzLnZ1ZVwiXHJcblxyXG5cdGxldCB2aWRlb0N0eCA9IG51bGwgLy/ojrflj5Z2aWRlb+eahOiKgueCuVxyXG5cclxuXHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkgLy/lkIzmraXojrflj5bpobXpnaLnmoTnirbmgIHmoI/kv6Hmga9cclxuXHJcblx0bGV0IHByb21wdEJveFN0YXR1c1Nob3dTVE91dCA9IG51bGwgLy/mj5DnpLrmoYbnmoTlrprml7blmahcclxuXHJcblx0bGV0IGNvbnRyb2xTdE91dCA9IG51bGwgLy/mjqfliLbmnaHmmL7npLrnmoTlrprml7blmahcclxuXHRjb25zdCBkb21Nb2R1bGUgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbihcclxuXHRcdCdkb20nKSAvL1dlZXgg5o+Q5L6bIERPTS5hZGRSdWxlIOS7peWKoOi9veiHquWumuS5ieWtl+S9k+OAguW8gOWPkeiAheWPr+S7pemAmui/h+aMh+WumiBmb250LWZhbWlseeWKoOi9vSBpY29uZm9udCDlkowgY3VzdG9tIGZvbnTjgILlvIDlj5HogIXlj6/ku6Xkvb/nlKjkuIvpnaLnmoTku6PnoIHliqDovb3oh6rlrprkuYnlrZfkvZPvvJpcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRpc3BsYXk6IGZhbHNlLCAvL+aSreaUvueahOeKtuaAgVxyXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCwgLy/nirbmgIHmoI/nmoTkv6Hmga9cclxuXHRcdFx0XHRjdXJyZW50VGltZTogMCwgLy/lvZPliY3ml7bplb9cclxuXHRcdFx0XHRkdXJhdGlvbjogMCwgLy/mgLvml7bplb9cclxuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IDAsXHJcblx0XHRcdFx0d2luZG93V2lkdGg6IDAsXHJcblx0XHRcdFx0c2NyZWVuU3RhdHVzOiBmYWxzZSwgLy/pu5jorqTkuI3mmK/lhajlsY9cclxuXHRcdFx0XHRzdGF0aWNUaW1lOiBmYWxzZSwgLy/lsY/luZXkuK3pl7Tml7bplb/mi5bliqjmj5DnpLrmoYbmmL7npLrkuI7lkKZcclxuXHRcdFx0XHRwcm9tcHRCb3hTdGF0dXM6IHtcclxuXHRcdFx0XHRcdHR5cGU6ICdtZXNzYWdlJyxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6ICfmj5DnpLonXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0Ym90dG9tT3JUb3BDb250cm9sQmFyU2hvdzogdHJ1ZSwgLy/pobbpg6jmiJblupXpg6jmjqfliLbmnaHmmL7npLrkuI7lkKZcclxuXHJcblx0XHRcdFx0b2xkVG91Y2hzOiB7XHJcblxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b2xkVmFsdWU6IHtcclxuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkYmNvdW50OiAwLCAvL+eCueWHu+asoeaVsFxyXG5cdFx0XHRcdHRvdWNoVHlwZTogbnVsbCxcclxuXHRcdFx0XHRmdWxsU2NyZWVuU3RhdHVzOiBmYWxzZSwgLy/lhajlsY/nirbmgIHvvIzpu5jorqTkuI3mmK/lhajlsY9cclxuXHRcdFx0XHRwb3BVcEZyYW1lOiBmYWxzZSwgLy/lvLnmoYZcclxuXHRcdFx0XHRwb3BVcEZyYW1lVHlwZTogXCJzcGVlZFwiLCAvL+W8ueahhuagh+W/l++8jOaKveWxiVxyXG5cclxuXHRcdFx0XHRyYXRlOiAnMS4wJywgLy/lvZPliY3pgJ/luqZcclxuXHRcdFx0XHRyYXRlTGlzdDogWycyLjAnLCAnMS41JywgJzEuMjUnLCAnMS4wJywgJzAuOCcsICcwLjUnXSwvL+mAn+W6pumAieaLqVxyXG5cdFx0XHRcdGxvY2tTY3JlZW5TdGF0dXM6ZmFsc2UsLy/lsY/luZXnirbmgIFcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRwcm92aWRlKCkgeyAvL+S+nei1luazqOWFpSzopoHlkoxpbmplY3TkuIDotbfkvb/nlKhcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR2OiB0aGlzXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Ly/lsY/luZXnirbmgIHlpKflsI/orqHnrpdcclxuXHRcdFx0dmlkZW9GdWxsU2NyZWVuKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNjcmVlblN0YXR1cyA/IGB3aWR0aDoke3RoaXMud2luZG93SGVpZ2h0fXB4OyBoZWlnaHQ6JHt0aGlzLndpbmRvd1dpZHRofXB4YCA6XHJcblx0XHRcdFx0XHQnd2lkdGg6NzUwcnB4O2hlaWdodDoyMjVweDsnIC8v6L+Z6YeM55qE5piv6K6h566X5YWo5bGP5ZCO55qE5aSn5bCP77yM55So55qE5bqU6K+l5pivdW5pLmdldFdpbmRvd0luZm8oKSzlubbkuJTlrr3pq5jmmL7npLrlpb3lg4/nm7jlj41cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8vIG1vZGFsU3R5bGUoKSB7XHJcblx0XHRcdC8vIFx0bGV0IHRvcCA9IHRoaXMuc3RhdHVzQmFySGVpZ2h0ICsgNDRcclxuXHRcdFx0Ly8gXHRyZXR1cm4gYHRvcDoke3RvcH1weDtib3R0b206NDRweGAgLy/orqHnrpfokpnmnb/nmoTpq5jluqZcclxuXHRcdFx0Ly8gfVxyXG5cdFx0fSxcclxuXHJcblx0XHQvL+e7hOS7tlxyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRwcm9ncmVzc1xyXG5cdFx0fSxcclxuXHJcblx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdC8v5pe26Ze06L+H5ruk5Zmo77yMdnVlMy4w5bey5oqb5byDXHJcblx0XHRcdGZvcm1hdFRpbWUocmVzdWx0KSB7XHJcblx0XHRcdFx0dmFyIGggPSBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApIDwgMTAgPyAnMCcgKyBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApIDogTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKTtcclxuXHJcblx0XHRcdFx0dmFyIG0gPSBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAvXHJcblx0XHRcdFx0XHQ2MCAlIDYwKSk7XHJcblxyXG5cdFx0XHRcdHZhciBzID0gTWF0aC5mbG9vcigocmVzdWx0ICUgNjApKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcigocmVzdWx0ICUgNjApKSA6IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9IHJlc3VsdCA+IDM2MDAgPyAoaCArICc6JyArIG0gKyAnOicgKyBzKSA6IG0gKyAnOicgKyBzXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdGNyZWF0ZWQoKSB7IC8v5Zyo6aG16Z2i5Yib5bu655qE5pe25YCZXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpKVxyXG5cdFx0XHRsZXQgc2NyZWVuID0gdW5pLmdldFdpbmRvd0luZm8oKVxyXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHJlcy5zdGF0dXNCYXJIZWlnaHRcclxuXHJcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gc2NyZWVuLnNjcmVlbkhlaWdodFxyXG5cdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gc2NyZWVuLnNjcmVlbldpZHRoIC8vNDAwXHJcblxyXG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcImljb25mb250XCIsIC8v6L+Z6YeM55qEZm9udGZhbWlseeWRveWQjeacgOWlveaYr+WSjGNsYXNz5LitZm9udHNpemXkuIDoh7RcclxuXHRcdFx0XHQnc3JjJzogXCJ1cmwoJ2h0dHA6Ly9hdC5hbGljZG4uY29tL3QvYy9mb250XzI4NTI5NTVfa2dkZ3kxb2kyYS50dGYnKVwiIC8v6Zi/6YeM5Zu+5qCH5bqT55qE5Zyo57q/55Sf5oiQ5Zyw5Z2A572R6aG16ZO+5o6lXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLiRyZWZzKXRoaXMuJHJlZnPlj6/ku6Xojrflj5bmiYDmnIljbGFzc+iiq+iuvue9ruS4unJlZueahOiKgueCueWxnuaAp1xyXG5cdFx0XHR2aWRlb0N0eCA9IHRoaXMuJHJlZnMudmlkZW9cclxuXHRcdH0sIC8v55u05o6l5L2/55SoIHJlZu+8jOS+i+WmgiB0aGlzLiRyZWZzLnZpZGVvMVxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly/plIHlsY/miJbogIXop6PpmaTplIHlsY9cclxuXHRcdFx0bG9ja1NjcmVlbigpe1xyXG5cdFx0XHRcdHRoaXMubG9ja1NjcmVlblN0YXR1cz0hdGhpcy5sb2NrU2NyZWVuU3RhdHVzXHJcblx0XHRcdFx0aWYodGhpcy5sb2NrU2NyZWVuU3RhdHVzKXtcclxuXHRcdFx0XHRcdHRoaXMuY29udHJvbEJhckhpZGVTdGF0dXMoKS8v6ZqQ6JeP54q25oCB5qCPXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2xCYXJTaG93U3RhdHVzKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Ly/kv67mlLnpgJ/luqZcclxuXHRcdFx0c3BlZWRDaGFuZ2UoY2hhbmdlKXtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJhdGU9Y2hhbmdlXHJcblx0XHRcdFx0IHZpZGVvQ3R4LnBsYXliYWNrUmF0ZSh0aGlzLnJhdGUpXHJcblx0XHRcdFx0IHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdCBcdHRpdGxlOmDlvZPliY3pgJ/luqblt7Lkv67mlLnkuLo6JHt0aGlzLnJhdGV95YCN5pWwYCxcclxuXHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0IH0pXHJcblx0XHRcdFx0IHRoaXMucG9wVXBGcmFtZT1mYWxzZVxyXG5cdFx0XHR9LC8vYXBp5o6l5Y+jLHVuaS5jcmVhdGVWaWRlb0NvbnRleHQodmlkZW9JZCwgdGhpcylcclxuXHRcdFx0XHJcblx0XHRcdG9wZW5Qb3B1cFNob3codHlwZSl7XHJcblx0XHRcdFx0dGhpcy5wb3BVcEZyYW1lVHlwZT10eXBlXHJcblx0XHRcdFx0dGhpcy5wb3BVcEZyYW1lPXRydWUvL+aYvuekuuaKveWxiVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0bW9kYWxUb3VjaFMoZSkge1xyXG5cdFx0XHRcdHRoaXMub2xkVG91Y2hzID0gZS5jaGFuZ2VkVG91Y2hlc1swXVxyXG5cclxuXHRcdFx0XHR0aGlzLm9sZFZhbHVlID0ge1xyXG5cdFx0XHRcdFx0Y3VycmVudFRpbWU6IHRoaXMuY3VycmVudFRpbWVcclxuXHRcdFx0XHR9IC8v5pen55qE5b2T5YmN5pe26Ze0XHJcblx0XHRcdH0sIC8v6JKZ54mI5byA5aeL6Kem5pG4XHJcblxyXG5cdFx0XHRtb2RhbFRvdWNoTShlKSB7XHJcblx0XHRcdFx0aWYodGhpcy5sb2NrU2NyZWVuU3RhdHVzKXtcclxuXHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgbmV3VG91Y2hzID0gZS5jaGFuZ2VkVG91Y2hlc1swXSAvL+iOt+WPluaWsOeahOWdkOagh1xyXG5cdFx0XHRcdGlmICghdGhpcy50b3VjaFR5cGUpIHtcclxuXHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpID4gMjAgPyAnY3VycmVudCcgOiBudWxsXHJcblxyXG5cdFx0XHRcdFx0aWYgKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudCcpIHtcclxuXHRcdFx0XHRcdFx0dmlkZW9DdHgucGF1c2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50Jykge1xyXG5cdFx0XHRcdFx0dGhpcy5wcm9tcHRCb3hTdGF0dXNTaG93KHtcclxuXHRcdFx0XHRcdFx0dHlwZTogXCJ0aW1lXCIsXHJcblx0XHRcdFx0XHRcdGF1dG9DbG9zZTogZmFsc2VcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2xCYXJTaG93U3RhdHVzKClcclxuXHJcblx0XHRcdFx0XHRsZXQgbmV3Q3VycmVudFRpbWUgPSAobmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVgpIC8gMjUwICogdGhpcy5kdXJhdGlvbiAqIDIgKyB0aGlzLm9sZFZhbHVlXHJcblx0XHRcdFx0XHRcdC5jdXJyZW50VGltZSAqIDEgLy/moLjlv4Pnrpfms5Xmi5bliqjlsY/luZVcclxuXHJcblx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbiA/IHRoaXMuZHVyYXRpb24gOiBuZXdDdXJyZW50VGltZVxyXG5cclxuXHRcdFx0XHRcdG5ld0N1cnJlbnRUaW1lID0gbmV3Q3VycmVudFRpbWUgPCAwID8gMCA6IG5ld0N1cnJlbnRUaW1lXHJcblxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0fSwgLy/okpnniYjnp7vliqjkuK1cclxuXHJcblx0XHRcdG1vZGFsVG91Y2hFKGUpIHtcclxuXHRcdFx0XHRpZih0aGlzLmxvY2tTY3JlZW5TdGF0dXMpe1xyXG5cdFx0XHRcdFx0cmV0dXJuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLnRvdWNoVHlwZSA9PT0gJ2N1cnJlbnQnKSB7XHJcblx0XHRcdFx0XHR2aWRlb0N0eC5zZWVrKHRoaXMuY3VycmVudFRpbWUpXHJcblx0XHRcdFx0XHR2aWRlb0N0eC5wbGF5KClcclxuXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmRiY291bnQgPT09IDEgfHwgdGhpcy5kYmNvdW50ID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGJjb3VudCsrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodGhpcy5kYmNvdW50ID4gMCkge1xyXG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kYmNvdW50ID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcIuWNleWHu1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcFVwRnJhbWU9ZmFsc2VcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY29udHJvbFNob3dPckhpZGUoKVxyXG5cdFx0XHRcdFx0XHRcdH0gLy/ljZXlh7tcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5kYmNvdW50ID09PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvUGxheU9yUGF1c2VkKClcclxuXHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwi5Y+M5Ye7XCIpXHJcblx0XHRcdFx0XHRcdFx0fSAvL+WPjOWHu1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGJjb3VudCA9IDAgLy/kuI3orrrmmK/lj4zlh7vov5jmmK/ljZXlh7vmnIDlkI7pg73nrYnkuo4wXHJcblx0XHRcdFx0XHRcdH0sIDI1MClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBudWxsXHJcblx0XHRcdFx0dGhpcy5zdGF0aWNUaW1lID0gZmFsc2UgLy/lhbPpl63mj5DnpLrmoYZcclxuXHRcdFx0fSwgLy/okpnniYjnu5PmnZ/vvIzoh6rlrprkuYnljZXlh7vvvIzlj4zlh7tcclxuXHJcblx0XHRcdC8v5pi+56S65oiW6ZqQ6JeP5o6n5Yi25p2hXHJcblx0XHRcdGNvbnRyb2xTaG93T3JIaWRlKCkge1xyXG5cdFx0XHRcdHRoaXMuYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyA/IHRoaXMuY29udHJvbEJhckhpZGVTdGF0dXMoKSA6IHRoaXMuY29udHJvbEJhclNob3dTdGF0dXMoKVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Y29udHJvbEJhclNob3dTdGF0dXMoKSB7XHJcblx0XHRcdFx0Ly8gdGhpcy5ib3R0b21Db250cm9sQmFyU2hvdyA9IHRydWVcclxuXHRcdFx0XHQvLyB0aGlzLnRvcENvbnRyb2xCYXJTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuYm90dG9tT3JUb3BDb250cm9sQmFyU2hvdyA9IHRydWVcclxuXHJcblx0XHRcdFx0aWYgKGNvbnRyb2xTdE91dCkge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KGNvbnRyb2xTdE91dClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29udHJvbFN0T3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2xCYXJIaWRlU3RhdHVzKClcclxuXHRcdFx0XHRcdGNvbnRyb2xTdE91dCA9IG51bGxcclxuXHRcdFx0XHR9LCAzMDAwKVxyXG5cdFx0XHR9LCAvL+aOp+WItuadoeaYvuekuueKtuaAgVxyXG5cclxuXHRcdFx0Y29udHJvbEJhckhpZGVTdGF0dXMoKSB7XHJcblx0XHRcdFx0dGhpcy5ib3R0b21PclRvcENvbnRyb2xCYXJTaG93ID0gZmFsc2VcclxuXHRcdFx0fSwgLy/mjqfliLbmnaHpmpDol4/nirbmgIFcclxuXHJcblx0XHRcdGJhY2soKSB7IC8v6L+U5ZueXHJcblx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0Ly8gXHRkZWx0YToxXHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IFwiL3BhZ2VzL2luZGV4L2luZGV4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dmlkZW9QbGF5T3JQYXVzZWQoKSB7IC8v5pKt5pS+5YGc5q2i5oyJ6ZKuXHJcblx0XHRcdFx0dGhpcy5wcm9tcHRCb3hTdGF0dXNTaG93KHtcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IHRoaXMuaXNwbGF5ID8gJ+aaguWBnCcgOiAn5pKt5pS+J1xyXG5cdFx0XHRcdH0pXHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmlzcGxheSkge1xyXG5cdFx0XHRcdFx0dmlkZW9DdHgucGF1c2UoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRyb2xCYXJTaG93U3RhdHVzKCkgLy/mjqfliLbmnaHmmL7npLrnirbmgIFcclxuXHRcdFx0XHRcdHZpZGVvQ3R4LnBsYXkoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZ1bGxTY3JlZW5DaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHRoaXMuZnVsbFNjcmVlblN0YXR1cyA9IGUuZGV0YWlsLmZ1bGxTY3JlZW5cclxuXHRcdFx0fSwgLy/lvZPop4bpopHov5vlhaXlkozpgIDlh7rlhajlsY/ml7bop6blj5HvvIxldmVudC5kZXRhaWwgPSB7ZnVsbFNjcmVlbiwgZGlyZWN0aW9ufe+8jGRpcmVjdGlvbuWPluS4uiB2ZXJ0aWNhbCDmiJYgaG9yaXpvbnRhbFxyXG5cclxuXHRcdFx0ZnVsbE9yRXhpdFNjcmVlbigpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5mdWxsU2NyZWVuU3RhdHVzKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcmVlblN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0XHR2aWRlb0N0eC5leGl0RnVsbFNjcmVlbigpIC8v6YCA5Ye65YWo5bGPXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2NyZWVuU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdFx0dmlkZW9DdHgucmVxdWVzdEZ1bGxTY3JlZW4oKSAvL+i/m+WFpeWFqOWxj1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvL3JlcXVlc3RGdWxsU2NyZWVu6L+b5YWl5YWo5bGP77yM5Y+v5Lyge2RpcmVjdGlvbn3lj4LmlbBcclxuXHRcdFx0XHQvL2V4aXRGdWxsU2NyZWVu6YCA5Ye65YWo5bGPXHJcblx0XHRcdH0sIC8v54K55Ye75LqL5Lu26L+b5YWl5oiW6ICF6YCA5Ye65YWo5bGPXHJcblxyXG5cclxuXHRcdFx0dGltZXVwZGF0ZShlKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLnN0YXRpY1RpbWUpIHtcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBwYXJzZUludChlLmRldGFpbC5jdXJyZW50VGltZSlcclxuXHRcdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBwYXJzZUludChlLmRldGFpbC5kdXJhdGlvbilcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZS5kZXRhaWwuY3VycmVudFRpbWUsIGUuZGV0YWlsLmR1cmF0aW9uKVxyXG5cdFx0XHR9LCAvL+aSreaUvui/m+W6puWPmOWMluaXtuinpuWPke+8jGV2ZW50LmRldGFpbCA9IHtjdXJyZW50VGltZSwgZHVyYXRpb259IOOAguinpuWPkemikeeOhyAyNTBtcyDkuIDmrKFcclxuXHJcblx0XHRcdHByb3ByZXNzVmFsdWVDaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHZpZGVvQ3R4LnNlZWsoZSkgLy9hcGnmlrnms5Ugc2Vlayhwb3NpdGlvbinot7PovazliLDmjIflrprkvY3nva7vvIzljZXkvY0gc1xyXG5cdFx0XHRcdHRoaXMuc3RhdGljVGltZSA9IGZhbHNlIC8vQHRvdWNoZW5kIGFwaeWcqHByb3ByZXNz5a2Q57uE5Lu25Lit6L+b5bqm5p2h5ouW5Yqo5LqL5Lu257uT5p2f5pe26LCD55SoXHJcblx0XHRcdFx0dmlkZW9DdHgucGxheSgpXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzY3JlZW5UaW1lVXBkYXRlKGUpIHsgLy/ov5vluqbmnaHlj5jljJbnmoTml7blgJlcclxuXHRcdFx0XHR2aWRlb0N0eC5wYXVzZSgpXHJcblx0XHRcdFx0dGhpcy5zdGF0aWNUaW1lID0gdHJ1ZSAvL+Wxj+W5leS4remXtOaXtumVv+aLluWKqOaPkOekuuahhuaYvuekuuS4juWQplxyXG5cdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBlXHJcblx0XHRcdFx0dGhpcy5wcm9tcHRCb3hTdGF0dXNTaG93KHtcclxuXHRcdFx0XHRcdHR5cGU6IFwidGltZVwiLFxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlOiBmYWxzZSAvL1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhpcy5jb250cm9sQmFyU2hvd1N0YXR1cygpIC8v5o6n5Yi25p2h5pi+56S654q25oCBXHJcblx0XHRcdH0sIC8v5LuO57uE5Lu2cHJvZ3Jlc3PkvKDmnaXnmoTlgLzvvIxl5piv5a2Q57uE5Lu25Lit55qEY3VycnRUaW1lXHJcblxyXG5cdFx0XHRwcm9tcHRCb3hTdGF0dXNTaG93KG9wdGlvbnMpIHtcclxuXHRcdFx0XHR0aGlzLnByb21wdEJveFN0YXR1cy50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdtZXNzYWdlJ1xyXG5cdFx0XHRcdHRoaXMucHJvbXB0Qm94U3RhdHVzLm1lc3NhZ2UgPSBvcHRpb25zLm1lc3NhZ2UgfHwgJ+aPkOekuidcclxuXHRcdFx0XHR0aGlzLnN0YXRpY1RpbWUgPSB0cnVlIC8v5bGP5bmV5Lit6Ze05pe26ZW/5ouW5Yqo5o+Q56S65qGG5pi+56S65LiO5ZCmXHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuYXV0b0Nsb3NlICE9PSBmYWxzZSkgeyAvLy/ov5nph4znmoRhdXRvQ2xvc2XmmK/oh6rlrprkuYnlsZ7mgKcs6L+Z6YeM5LiN5aSq5piO55m9XHJcblx0XHRcdFx0XHRpZiAocHJvbXB0Qm94U3RhdHVzU2hvd1NUT3V0KSB7XHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChwcm9tcHRCb3hTdGF0dXNTaG93U1RPdXQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRwcm9tcHRCb3hTdGF0dXNTaG93U1RPdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0aWNUaW1lID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0cHJvbXB0Qm94U3RhdHVzU2hvd1NUT3V0ID0gbnVsbFxyXG5cdFx0XHRcdFx0fSwgNTAwKSAvL+WumuaXtuWZqOWumuaXtuaYvuekuuaPkOekuua2iOWksVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQudmlkZW8tYnRuIHtcclxuXHRcdHdpZHRoOiA0NHB4O1xyXG5cdFx0aGVpZ2h0OiA0NHB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG5cdH1cclxuXHJcblx0LnZpZGVvLW9wY3RheS10b3Age1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjQpKTtcclxuXHR9XHJcblxyXG5cdC52aWRlby1vcGN0YXktYm90IHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC43KSk7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

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
/* 11 */
/*!**************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.vue?vue&type=template&id=2f40ff96& */ 12);\n/* harmony import */ var _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress.vue?vue&type=script&lang=js& */ 14);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"6b11a1ff\",\n  false,\n  _progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/videoText/components/progress.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDbU07QUFDbk0sZ0JBQWdCLHVNQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY0MGZmOTYmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC4zLjQuMTguMjAyMjA2MzAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjZiMTFhMWZmXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3ZpZGVvVGV4dC9jb21wb25lbnRzL3Byb2dyZXNzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*********************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=template&id=2f40ff96& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./progress.vue?vue&type=template&id=2f40ff96& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_template_id_2f40ff96___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
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
/* 14 */
/*!***************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./progress.vue?vue&type=script&lang=js& */ 15);\n/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVnQixDQUFnQiwwaEJBQUcsRUFBQyIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMy40LjE4LjIwMjIwNjMwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjMuNC4xOC4yMDIyMDYzMC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/components/progress.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'], //依赖注入,v:this\n  data: function data() {\n    return {\n      width: 0, //进度条的总宽度\n      left: 0, //圆点\n      moveStatus: false, //用户拖动进度条\n      leftDistance: 0 };\n\n  },\n  props: {\n    curTime: 0, //当前时间值在变化\n    duration: 0 //总时长\n  },\n\n  created: function created() {\n    if (!this.v.fullScreenStatus) {\n      this.leftDistance = 44;\n      this.width = this.v.windowWidth - 44 - 44 - 80 - 15; //232px,44是两边按钮的图标大小,80是文字大小\n    } else {\n      this.leftDistance = 15;\n      this.width = this.v.windowHeight - 30 - 15; //232px,44是两边按钮的图标大小,80是文字大小\n\n    }\n\n\n\n    this.active();\n  },\n  //计算属性\n  computed: {\n    propressWidth: function propressWidth() {\n      return \"width:\".concat(this.left, \"px\"); //这里是left，不是width\n    },\n    propressRound: function propressRound() {\n      return \"left:\".concat(this.left, \"px\");\n    },\n\n    currentTime: function currentTime() {\n      return this.left == 0 ? 0 : this.left / this.width * this.duration;\n    } },\n\n\n  //监听器\n  watch: {\n    //监听curTime属性\n    curTime: function curTime(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.active(); //让left的值一直变化\t\n      }\n    } },\n\n\n  methods: {\n    active: function active() {\n      this.left = this.duration == 0 ? 0 : this.curTime / this.duration * this.width; //进度发生变化的计算\n    }, //当前进度条的时间变化计算\n\n    //e是api触摸事件默认的事件对象\n    propressMoveStart: function propressMoveStart(e) {\n      this.moveStatus = true;\n      var pointPropress = e.changedTouches[0].screenX - this.leftDistance;\n      if (pointPropress > this.width) {\n        pointPropress = this.width;\n        this.left = pointPropress;\n      } else {\n        this.left = pointPropress;\n      }\n      // console.log(e.changedTouches[0].screenX)//44-275距离长度\n    }, //进度条拖动开始\n\n    propressMoveEnd: function propressMoveEnd(e) {\n      this.moveStatus = false;\n      //$emit子父通信\n      this.$emit(\"valueChange\", this.currentTime);\n    }, //进度条拖动结束\n\n\n    interruptSpellCasting: function interruptSpellCasting(e) {\n      this.propressMoveEnd(e);\n    }, //突然被中断，比如打电话之类的\n\n    propressMove: function propressMove(e) {\n      this.moveStatus = true;\n      var propressRround = e.changedTouches[0].screenX - leftDistance;\n\n      if (propressRround < 0) {\n        propressRround = 0;\n      } else if (propressRround > this.width) {\n        propressRround = this.width;\n      } else {\n        this.left = propressRround;\n      }\n      this.$emit('update', this.currentTime);\n    } //进度条移动\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UZXh0L2NvbXBvbmVudHMvcHJvZ3Jlc3MudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsZUFEQSxFQUNBO0FBQ0EsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsY0FEQSxFQUNBO0FBQ0EsYUFGQSxFQUVBO0FBQ0EsdUJBSEEsRUFHQTtBQUNBLHFCQUpBOztBQU1BLEdBVEE7QUFVQTtBQUNBLGNBREEsRUFDQTtBQUNBLGVBRkEsQ0FFQTtBQUZBLEdBVkE7O0FBZUEsU0FmQSxxQkFlQTtBQUNBO0FBQ0E7QUFDQSwwREFGQSxDQUVBO0FBQ0EsS0FIQSxNQUdBO0FBQ0E7QUFDQSxpREFGQSxDQUVBOztBQUVBOzs7O0FBSUE7QUFDQSxHQTVCQTtBQTZCQTtBQUNBO0FBQ0EsaUJBREEsMkJBQ0E7QUFDQSw4Q0FEQSxDQUNBO0FBQ0EsS0FIQTtBQUlBLGlCQUpBLDJCQUlBO0FBQ0E7QUFDQSxLQU5BOztBQVFBLGVBUkEseUJBUUE7QUFDQTtBQUNBLEtBVkEsRUE5QkE7OztBQTJDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLG1CQUVBLFFBRkEsRUFFQSxRQUZBLEVBRUE7QUFDQTtBQUNBLHNCQURBLENBQ0E7QUFDQTtBQUNBLEtBTkEsRUE1Q0E7OztBQXFEQTtBQUNBLFVBREEsb0JBQ0E7QUFDQSxxRkFEQSxDQUNBO0FBQ0EsS0FIQSxFQUdBOztBQUVBO0FBQ0EscUJBTkEsNkJBTUEsQ0FOQSxFQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBLEVBZ0JBOztBQUVBLG1CQWxCQSwyQkFrQkEsQ0FsQkEsRUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXRCQSxFQXNCQTs7O0FBR0EseUJBekJBLGlDQXlCQSxDQXpCQSxFQXlCQTtBQUNBO0FBQ0EsS0EzQkEsRUEyQkE7O0FBRUEsZ0JBN0JBLHdCQTZCQSxDQTdCQSxFQTZCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F6Q0EsQ0F5Q0E7QUF6Q0EsR0FyREEsRSIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDx2aWV3IEB0b3VjaHN0YXJ0PVwicHJvcHJlc3NNb3ZlU3RhcnRcIiBAdG91Y2htb3ZlPVwicHJvcHJlc3NNb3ZlXCIgQHRvdWNoZW5kPVwicHJvcHJlc3NNb3ZlRW5kXCJcclxuXHRcdFx0QHRvdWNoY2FuY2VsPVwiaW50ZXJydXB0U3BlbGxDYXN0aW5nXCIgc3R5bGU9XCJoZWlnaHQ6IDQwcHg7XCIgY2xhc3M9XCJmbGV4IHBvc2l0aW9uLXJlbGF0aXZlIGFsaWduLWNlbnRlclwiPlxyXG5cdFx0XHQ8IS0tIOS4remXtOeahOWkluWxguebkuWtkOmrmOW6puiuvue9riAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgcm91bmRlZFwiIHN0eWxlPVwiICBoZWlnaHQ6IDNweDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpXCI+XHJcblx0XHRcdFx0PCEtLSDmjqfliLbmnaHnmoTplb/luqbmoLflvI8gLS0+XHJcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2RUI4OyBoZWlnaHQ6M3B4O1wiIDpzdHlsZT1cInByb3ByZXNzV2lkdGhcIj48L3ZpZXc+IDwhLS0g6L+b5bqm5p2h55qE5qC35byPIC0tPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZC1jaXJjbGVcIiBzdHlsZT1cImhlaWdodDogMTVweDsgd2lkdGg6MTVweDsgYmFja2dyb3VuZC1jb2xvcjogIzAzNkVCOFwiXHJcblx0XHRcdFx0OnN0eWxlPVwicHJvcHJlc3NSb3VuZFwiPjwvdmlldz5cclxuXHRcdFx0PCEtLSDniLbnm7jlrZDnu53vvIzov5nph4zmmK/mi4nliqjljp/ngrkgLS0+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRpbmplY3Q6IFsndiddLCAvL+S+nei1luazqOWFpSx2OnRoaXNcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0d2lkdGg6IDAsIC8v6L+b5bqm5p2h55qE5oC75a695bqmXHJcblx0XHRcdFx0bGVmdDogMCwgLy/lnIbngrlcclxuXHRcdFx0XHRtb3ZlU3RhdHVzOiBmYWxzZSwgLy/nlKjmiLfmi5bliqjov5vluqbmnaFcclxuXHRcdFx0XHRsZWZ0RGlzdGFuY2U6MCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGN1clRpbWU6IDAsIC8v5b2T5YmN5pe26Ze05YC85Zyo5Y+Y5YyWXHJcblx0XHRcdGR1cmF0aW9uOiAwIC8v5oC75pe26ZW/XHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmICghdGhpcy52LmZ1bGxTY3JlZW5TdGF0dXMpIHtcclxuXHRcdFx0XHR0aGlzLmxlZnREaXN0YW5jZT00NFxyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93V2lkdGggLSA0NCAtIDQ0IC0gODAgLSAxNTsgLy8yMzJweCw0NOaYr+S4pOi+ueaMiemSrueahOWbvuagh+Wkp+Wwjyw4MOaYr+aWh+Wtl+Wkp+Wwj1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmxlZnREaXN0YW5jZT0xNVxyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93SGVpZ2h0IC0gMzAgLSAxNTsgLy8yMzJweCw0NOaYr+S4pOi+ueaMiemSrueahOWbvuagh+Wkp+Wwjyw4MOaYr+aWh+Wtl+Wkp+Wwj1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRcdHRoaXMuYWN0aXZlKClcclxuXHRcdH0sXHJcblx0XHQvL+iuoeeul+WxnuaAp1xyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0cHJvcHJlc3NXaWR0aCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYHdpZHRoOiR7dGhpcy5sZWZ0fXB4YCAvL+i/memHjOaYr2xlZnTvvIzkuI3mmK93aWR0aFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcm9wcmVzc1JvdW5kKCkge1xyXG5cdFx0XHRcdHJldHVybiBgbGVmdDoke3RoaXMubGVmdH1weGBcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGN1cnJlbnRUaW1lKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxlZnQgPT0gMCA/IDAgOiAodGhpcy5sZWZ0IC8gdGhpcy53aWR0aCkgKiB0aGlzLmR1cmF0aW9uXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/nm5HlkKzlmahcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdC8v55uR5ZCsY3VyVGltZeWxnuaAp1xyXG5cdFx0XHRjdXJUaW1lKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5tb3ZlU3RhdHVzKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZSgpIC8v6K6pbGVmdOeahOWAvOS4gOebtOWPmOWMllx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YWN0aXZlKCkge1xyXG5cdFx0XHRcdHRoaXMubGVmdCA9IHRoaXMuZHVyYXRpb24gPT0gMCA/IDAgOiAodGhpcy5jdXJUaW1lIC8gdGhpcy5kdXJhdGlvbikgKiB0aGlzLndpZHRoIC8v6L+b5bqm5Y+R55Sf5Y+Y5YyW55qE6K6h566XXHJcblx0XHRcdH0sIC8v5b2T5YmN6L+b5bqm5p2h55qE5pe26Ze05Y+Y5YyW6K6h566XXHJcblxyXG5cdFx0XHQvL2XmmK9hcGnop6bmkbjkuovku7bpu5jorqTnmoTkuovku7blr7nosaFcclxuXHRcdFx0cHJvcHJlc3NNb3ZlU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHRsZXQgcG9pbnRQcm9wcmVzcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWCAtIHRoaXMubGVmdERpc3RhbmNlXHJcblx0XHRcdFx0aWYgKHBvaW50UHJvcHJlc3MgPiB0aGlzLndpZHRoKSB7XHJcblx0XHRcdFx0XHRwb2ludFByb3ByZXNzID0gdGhpcy53aWR0aFxyXG5cdFx0XHRcdFx0dGhpcy5sZWZ0ID0gcG9pbnRQcm9wcmVzc1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxlZnQgPSBwb2ludFByb3ByZXNzXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGUuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWCkvLzQ0LTI3Nei3neemu+mVv+W6plxyXG5cdFx0XHR9LCAvL+i/m+W6puadoeaLluWKqOW8gOWni1xyXG5cclxuXHRcdFx0cHJvcHJlc3NNb3ZlRW5kKGUpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdC8vJGVtaXTlrZDniLbpgJrkv6FcclxuXHRcdFx0XHR0aGlzLiRlbWl0KFwidmFsdWVDaGFuZ2VcIiwgdGhpcy5jdXJyZW50VGltZSlcclxuXHRcdFx0fSwgLy/ov5vluqbmnaHmi5bliqjnu5PmnZ9cclxuXHJcblxyXG5cdFx0XHRpbnRlcnJ1cHRTcGVsbENhc3RpbmcoZSkge1xyXG5cdFx0XHRcdHRoaXMucHJvcHJlc3NNb3ZlRW5kKGUpXHJcblx0XHRcdH0sIC8v56qB54S26KKr5Lit5pat77yM5q+U5aaC5omT55S16K+d5LmL57G755qEXHJcblxyXG5cdFx0XHRwcm9wcmVzc01vdmUoZSkge1xyXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHRsZXQgcHJvcHJlc3NScm91bmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSBsZWZ0RGlzdGFuY2VcclxuXHJcblx0XHRcdFx0aWYgKHByb3ByZXNzUnJvdW5kIDwgMCkge1xyXG5cdFx0XHRcdFx0cHJvcHJlc3NScm91bmQgPSAwXHJcblx0XHRcdFx0fSBlbHNlIGlmIChwcm9wcmVzc1Jyb3VuZCA+IHRoaXMud2lkdGgpIHtcclxuXHRcdFx0XHRcdHByb3ByZXNzUnJvdW5kID0gdGhpcy53aWR0aFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmxlZnQgPSBwcm9wcmVzc1Jyb3VuZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGUnLCB0aGlzLmN1cnJlbnRUaW1lKVxyXG5cdFx0XHR9IC8v6L+b5bqm5p2h56e75YqoXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
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
/* 17 */
/*!*******************************************************************************************************************************!*\
  !*** F:/uniappStudent/uniapp-01/SubNvueTest/pages/videoText/SubNvue/SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../HBuilderX.3.4.18.20220630/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./SubNvue.nvue?vue&type=style&index=0&lang=css&mpType=page */ 18);
/* harmony import */ var _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_3_4_18_20220630_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_SubNvue_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
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