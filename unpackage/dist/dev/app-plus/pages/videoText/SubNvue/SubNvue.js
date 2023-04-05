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
      _c("u-video", {
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
          fullscreenchange: _vm.fullscreenchange,
          timeupdate: _vm.timeupdate,
          play: function($event) {
            _vm.isplay = true
          },
          pause: function($event) {
            _vm.isplay = false
          }
        }
      }),
      _c(
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
      ),
      _c(
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
                          staticStyle: { fontSize: "30px", color: "#036EB8" },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("")]
                      )
                    : _c(
                        "u-text",
                        {
                          staticClass: ["iconfont"],
                          staticStyle: { fontSize: "30px", color: "#036EB8" },
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
                    attrs: { curTime: _vm.currentTime, duration: _vm.duration },
                    on: { valueChange: _vm.propressValueChange }
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
              _vm._m(0)
            ]
          )
        ]
      )
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["video-btn"] }, [
      _c(
        "u-text",
        {
          staticClass: ["iconfont"],
          staticStyle: { fontSize: "30px", color: "#036EB8" },
          appendAsTree: true,
          attrs: { append: "tree" }
        },
        [_vm._v("")]
      )
    ])
  }
]
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
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _progress = _interopRequireDefault(__webpack_require__(/*! ../components/progress.vue */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//进度条组件引入\nvar videoCtx = null; //获取video的节点\nvar domModule = __webpack_provided_uni_dot_requireNativePlugin('dom'); //Weex 提供 DOM.addRule 以加载自定义字体。开发者可以通过指定 font-family加载 iconfont 和 custom font。开发者可以使用下面的代码加载自定义字体：\nvar _default = { data: function data() {return { isplay: false, //播放的状态\n      statusBarHeight: 0, //状态栏的信息\n      currentTime: 0, //当前时长\n      duration: 0, //总时长\n      windowHeight: 0, windowWidth: 0 };}, provide: function provide() {//依赖注入,要和inject一起使用\n    return { v: this };}, //组件\n  components: { progress: _progress.default }, filters: { //时间过滤器\n    formatTime: function formatTime(result) {var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);return result = result > 3600 ? h + ':' + m + ':' + s : m + ':' + s;} }, created: function created() {//在页面创建的时候\n    // console.log(uni.getSystemInfoSync())\n    var res = uni.getSystemInfoSync(); //同步获取页面的状态栏信息\n    this.statusBarHeight = res.statusBarHeight;this.windowHeight = res.windowHeight;this.windowWidth = res.windowWidth; //400\n    domModule.addRule('fontFace', { 'fontFamily': \"iconfont\", //这里的fontfamily命名最好是和class中fontsize一致\n      'src': \"url('http://at.alicdn.com/t/c/font_2852955_of1w6jui8j.ttf')\" //阿里图标库的在线生成地址网页链接\n    });}, mounted: function mounted() {// console.log(this.$refs)this.$refs可以获取所有class被设置为ref的节点属性\n    videoCtx = this.$refs.video;}, //直接使用 ref，例如 this.$refs.video1\n  methods: { back: function back() {//返回\n      // uni.navigateBack({\n      // \tdelta:1\n      // })\n      uni.navigateTo({ url: \"/pages/index/index\" });}, videoPlayOrPaused: function videoPlayOrPaused() {//播放停止按钮\n      if (this.isplay) {videoCtx.pause();\n      } else {\n        videoCtx.play();\n      }\n    },\n\n    fullscreenchange: function fullscreenchange(e) {\n      // console.log(e)\n    }, //当视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction取为 vertical 或 horizontal\n\n    timeupdate: function timeupdate(e) {\n      this.currentTime = parseInt(e.detail.currentTime);\n      this.duration = parseInt(e.detail.duration);\n\n      // console.log(e.detail.currentTime, e.detail.duration)\n    }, //播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次\n\n    propressValueChange: function propressValueChange(e) {\n      videoCtx.seek(e); //seek(position)跳转到指定位置，单位 s\n      __f__(\"log\", e, \" at pages/videoText/SubNvue/SubNvue.nvue:147\");\n      __f__(\"log\", this.currentTime, \" at pages/videoText/SubNvue/SubNvue.nvue:148\");\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 10)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 19)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UZXh0L1N1Yk52dWUvU3ViTnZ1ZS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBLGtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQUdBLG9CLENBQUE7QUFDQSwrREFDQSxLQURBLEUsQ0FDQTtlQUNBLEVBRUEsSUFGQSxrQkFFQSxDQUNBLFNBQ0EsYUFEQSxFQUNBO0FBQ0Esd0JBRkEsRUFFQTtBQUNBLG9CQUhBLEVBR0E7QUFDQSxpQkFKQSxFQUlBO0FBQ0EscUJBTEEsRUFNQSxjQU5BLEdBU0EsQ0FaQSxFQWNBLE9BZEEscUJBY0E7QUFDQSxhQUNBLE9BREEsR0FHQSxDQWxCQSxFQW9CQTtBQUNBLGdCQUNBLDJCQURBLEVBckJBLEVBeUJBLFdBQ0E7QUFDQSxjQUZBLHNCQUVBLE1BRkEsRUFFQSxDQUNBLHFHQUVBLHFHQUNBLEVBREEsR0FDQSxFQURBLEVBR0EsK0ZBQ0Esb0VBQ0EsQ0FWQSxFQXpCQSxFQXNDQSxPQXRDQSxxQkFzQ0E7QUFDQTtBQUNBLHNDQUZBLENBRUE7QUFDQSwrQ0FFQSxxQ0FDQSxtQ0FOQSxDQU1BO0FBRUEsb0NBQ0Esd0JBREEsRUFDQTtBQUNBLDBFQUZBLENBRUE7QUFGQSxPQUlBLENBbERBLEVBb0RBLE9BcERBLHFCQW9EQSxDQUNBO0FBQ0EsZ0NBQ0EsQ0F2REEsRUF1REE7QUFFQSxhQUNBLElBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFDQSx5QkFEQSxJQUdBLENBUkEsRUFVQSxpQkFWQSwrQkFVQTtBQUNBLHdCQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBOztBQWtCQSxvQkFsQkEsNEJBa0JBLENBbEJBLEVBa0JBO0FBQ0E7QUFDQSxLQXBCQSxFQW9CQTs7QUFFQSxjQXRCQSxzQkFzQkEsQ0F0QkEsRUFzQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0EzQkEsRUEyQkE7O0FBRUEsdUJBN0JBLCtCQTZCQSxDQTdCQSxFQTZCQTtBQUNBLHVCQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FqQ0EsRUF6REEsRSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiYmctZGFya1wiPlxyXG5cdFx0PHZpZGVvIHNyYz1cIi9zdGF0aWMvdmlkZW8vMmE2M2Q0NjctMjFmMi00N2QzLTkzNzQtYWQ2YjY1MTAxOTVkLm1wNFwiIGlkPVwidmlkZW9cIiByZWY9XCJ2aWRlb1wiIDpjb250cm9scz1cImZhbHNlXCJcclxuXHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4OyBoZWlnaHQ6MjI1cHhcIiBAZnVsbHNjcmVlbmNoYW5nZT1cImZ1bGxzY3JlZW5jaGFuZ2VcIiBAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIlxyXG5cdFx0XHRAcGxheT1cImlzcGxheT10cnVlXCIgQHBhdXNlPVwiaXNwbGF5PWZhbHNlXCIgc2hvdy1jZW50ZXItcGxheS1idG49XCJmYWxzZVwiIHNob3ctZnVsbHNjcmVlbi1idG49XCJmYWxzZVwiXHJcblx0XHRcdHNob3ctcHJvZ3Jlc3M9XCJmYWxzZVwiXHJcblx0XHRcdHBvc3Rlcj1cImh0dHBzOi8vdHMxLmNuLm1tLmJpbmcubmV0L3RoL2lkL1ItQy45ZDhhOTZiZDY1YTAxOWJhMDZjYjU5YjI4NjA0OWNmOT9yaWs9YnMwRFYxJTJmZUxMeXYwdyZyaXU9aHR0cCUzYSUyZiUyZmhhbzUucWhpbWcuY29tJTJmdDAxM2NkYmJmMDU0ZTg1MzEyZS5qcGclM2ZzaXplJTNkMTI4Mng4MTgmZWhrPUNxVm9NRDIlMmJvYmJoMWtNciUyYkJxNnNLdkRFM3FpdzhsbkU1RDNRckU2bnNBJTNkJnJpc2w9JnBpZD1JbWdSYXcmcj0wXCI+PC92aWRlbz5cclxuXHJcblx0XHQ8IS0tICDkuI3mmK/lhajlsY8gLS0+XHJcblx0XHQ8IS0tIOiHquWumuS5ieinhumikemhtumDqCAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tb3BjdGF5LXRvcCBwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHQ8IS0tIDx2aWV3IDpzdHlsZT1cIidoZWlnaHQnK3N0YXR1c0JhckhlaWdodCsncHgnXCI+PC92aWV3PiAtLT5cclxuXHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDI2cHg7XCI+PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogMjZweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ2aWRlby1idG4gXCIgQGNsaWNrPVwiYmFjaygpXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/lOWbnuaMiemSriAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIiBzdHlsZT1cImZvbnQtc2l6ZTogMjBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MjM7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSDov5nph4znmoQmI3hlNjIzO+aYr+mYv+mHjOWbvuagh+W6k+eahOWbvuWDj+WcqOe6v+S7o+eggSAtLT5cclxuXHRcdFx0XHRcdDwhLS0gdGV4dOagh+etvuS4jeimgeaNouihjO+8jOWcqG52dWXkuK3pu5jorqTmjaLooYzku5bkuZ/mjaLooYwgLS0+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblxyXG5cdFx0PCEtLSDoh6rlrprkuYnop4bpopHlupXpg6gtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwiIHZpZGVvLW9wY3RheS1ib3QgcG9zaXRpb24tZml4ZWQgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLXN0cmV0Y2hcIiBzdHlsZT1cImhlaWdodDogNDBweDtcIj5cclxuXHRcdFx0XHQ8IS0tIGFsaWduLXN0cmV0Y2jmmK9jc3MgZmxleOagt+W8j+S4rWFsaWduLWl0ZW06c3RyZXRjaOWxnuaAp++8jOS9nOeUqOaYr1x06buY6K6k44CC6aG555uu6KKr5ouJ5Ly45Lul6YCC5ZCI5a655Zmo44CCIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidmlkZW8tYnRuXCIgQGNsaWNrPVwidmlkZW9QbGF5T3JQYXVzZWQoKVwiPlxyXG5cdFx0XHRcdFx0PCEtLSDmkq3mlL7mjInpkq4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgdi1pZj1cIiFpc3BsYXlcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDsgY29sb3I6IzAzNkVCOFwiPiYjeGU2MmY7PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSDmmoLlgZzmjInpkq4gLS0+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250XCIgdi1lbHNlIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTYyNjs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5o6n5Yi25p2h55qE5qC35byP6YWN572u77yB77yB77yB77yB6Z2e5bi46YeN6KaB77yB77yB77yBIC0tPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xXCI+XHJcblx0XHRcdFx0XHQ8cHJvZ3Jlc3MgOmN1clRpbWU9XCJjdXJyZW50VGltZVwiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgQHZhbHVlQ2hhbmdlPVwicHJvcHJlc3NWYWx1ZUNoYW5nZVwiPjwvcHJvZ3Jlc3M+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPjx0ZXh0XHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9udC1zbSB0ZXh0LXdoaXRlXCI+e3tjdXJyZW50VGltZXxmb3JtYXRUaW1lfX0ve3tkdXJhdGlvbnxmb3JtYXRUaW1lfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PjwhLS0g5pe26Ze05paH5pys5pi+56S6IC0tPlxyXG5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInZpZGVvLWJ0biBcIj5cclxuXHRcdFx0XHRcdDwhLS0g5pS+5aSn5oyJ6ZKuIC0tPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udFwiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjojMDM2RUI4XCI+JiN4ZTYwZDs8L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Ly/ov5vluqbmnaHnu4Tku7blvJXlhaVcclxuXHRpbXBvcnQgcHJvZ3Jlc3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZ3Jlc3MudnVlXCJcclxuXHJcblx0bGV0IHZpZGVvQ3R4ID0gbnVsbCAvL+iOt+WPlnZpZGVv55qE6IqC54K5XHJcblx0Y29uc3QgZG9tTW9kdWxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oXHJcblx0XHQnZG9tJykgLy9XZWV4IOaPkOS+myBET00uYWRkUnVsZSDku6XliqDovb3oh6rlrprkuYnlrZfkvZPjgILlvIDlj5HogIXlj6/ku6XpgJrov4fmjIflrpogZm9udC1mYW1pbHnliqDovb0gaWNvbmZvbnQg5ZKMIGN1c3RvbSBmb25044CC5byA5Y+R6ICF5Y+v5Lul5L2/55So5LiL6Z2i55qE5Luj56CB5Yqg6L296Ieq5a6a5LmJ5a2X5L2T77yaXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNwbGF5OiBmYWxzZSwgLy/mkq3mlL7nmoTnirbmgIFcclxuXHRcdFx0XHRzdGF0dXNCYXJIZWlnaHQ6IDAsIC8v54q25oCB5qCP55qE5L+h5oGvXHJcblx0XHRcdFx0Y3VycmVudFRpbWU6IDAsIC8v5b2T5YmN5pe26ZW/XHJcblx0XHRcdFx0ZHVyYXRpb246IDAsIC8v5oC75pe26ZW/XHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAwLFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiAwLFxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRwcm92aWRlKCkgeyAvL+S+nei1luazqOWFpSzopoHlkoxpbmplY3TkuIDotbfkvb/nlKhcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR2OiB0aGlzXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/nu4Tku7ZcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0cHJvZ3Jlc3NcclxuXHRcdH0sXHJcblxyXG5cdFx0ZmlsdGVyczoge1xyXG5cdFx0XHQvL+aXtumXtOi/h+a7pOWZqFxyXG5cdFx0XHRmb3JtYXRUaW1lKHJlc3VsdCkge1xyXG5cdFx0XHRcdHZhciBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA6IE1hdGguZmxvb3IocmVzdWx0IC8gMzYwMCk7XHJcblxyXG5cdFx0XHRcdHZhciBtID0gTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpIDwgMTAgPyAnMCcgKyBNYXRoLmZsb29yKChyZXN1bHQgLyA2MCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgL1xyXG5cdFx0XHRcdFx0NjAgJSA2MCkpO1xyXG5cclxuXHRcdFx0XHR2YXIgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPSByZXN1bHQgPiAzNjAwID8gKGggKyAnOicgKyBtICsgJzonICsgcykgOiBtICsgJzonICsgc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZWQoKSB7IC8v5Zyo6aG16Z2i5Yib5bu655qE5pe25YCZXHJcblx0XHRcdC8vIGNvbnNvbGUubG9nKHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpKVxyXG5cdFx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkgLy/lkIzmraXojrflj5bpobXpnaLnmoTnirbmgIHmoI/kv6Hmga9cclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0XHJcblxyXG5cdFx0XHR0aGlzLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcclxuXHRcdFx0dGhpcy53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aC8vNDAwXHJcblxyXG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcImljb25mb250XCIsIC8v6L+Z6YeM55qEZm9udGZhbWlseeWRveWQjeacgOWlveaYr+WSjGNsYXNz5LitZm9udHNpemXkuIDoh7RcclxuXHRcdFx0XHQnc3JjJzogXCJ1cmwoJ2h0dHA6Ly9hdC5hbGljZG4uY29tL3QvYy9mb250XzI4NTI5NTVfb2YxdzZqdWk4ai50dGYnKVwiIC8v6Zi/6YeM5Zu+5qCH5bqT55qE5Zyo57q/55Sf5oiQ5Zyw5Z2A572R6aG16ZO+5o6lXHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLiRyZWZzKXRoaXMuJHJlZnPlj6/ku6Xojrflj5bmiYDmnIljbGFzc+iiq+iuvue9ruS4unJlZueahOiKgueCueWxnuaAp1xyXG5cdFx0XHR2aWRlb0N0eCA9IHRoaXMuJHJlZnMudmlkZW9cclxuXHRcdH0sIC8v55u05o6l5L2/55SoIHJlZu+8jOS+i+WmgiB0aGlzLiRyZWZzLnZpZGVvMVxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0YmFjaygpIHsgLy/ov5Tlm55cclxuXHRcdFx0XHQvLyB1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHQvLyBcdGRlbHRhOjFcclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogXCIvcGFnZXMvaW5kZXgvaW5kZXhcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR2aWRlb1BsYXlPclBhdXNlZCgpIHsgLy/mkq3mlL7lgZzmraLmjInpkq5cclxuXHRcdFx0XHRpZiAodGhpcy5pc3BsYXkpIHtcclxuXHRcdFx0XHRcdHZpZGVvQ3R4LnBhdXNlKClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmlkZW9DdHgucGxheSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZnVsbHNjcmVlbmNoYW5nZShlKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZSlcclxuXHRcdFx0fSwgLy/lvZPop4bpopHov5vlhaXlkozpgIDlh7rlhajlsY/ml7bop6blj5HvvIxldmVudC5kZXRhaWwgPSB7ZnVsbFNjcmVlbiwgZGlyZWN0aW9ufe+8jGRpcmVjdGlvbuWPluS4uiB2ZXJ0aWNhbCDmiJYgaG9yaXpvbnRhbFxyXG5cclxuXHRcdFx0dGltZXVwZGF0ZShlKSB7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHBhcnNlSW50KGUuZGV0YWlsLmN1cnJlbnRUaW1lKVxyXG5cdFx0XHRcdHRoaXMuZHVyYXRpb24gPSBwYXJzZUludChlLmRldGFpbC5kdXJhdGlvbilcclxuXHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZS5kZXRhaWwuY3VycmVudFRpbWUsIGUuZGV0YWlsLmR1cmF0aW9uKVxyXG5cdFx0XHR9LCAvL+aSreaUvui/m+W6puWPmOWMluaXtuinpuWPke+8jGV2ZW50LmRldGFpbCA9IHtjdXJyZW50VGltZSwgZHVyYXRpb259IOOAguinpuWPkemikeeOhyAyNTBtcyDkuIDmrKFcclxuXHRcdFx0XHJcblx0XHRcdHByb3ByZXNzVmFsdWVDaGFuZ2UoZSl7XHJcblx0XHRcdFx0dmlkZW9DdHguc2VlayhlKS8vc2Vlayhwb3NpdGlvbinot7PovazliLDmjIflrprkvY3nva7vvIzljZXkvY0gc1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jdXJyZW50VGltZSlcclxuXHRcdFx0fSxcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LnZpZGVvLWJ0biB7XHJcblx0XHR3aWR0aDogNDRweDtcclxuXHRcdGhlaWdodDogNDRweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHR9XHJcblxyXG5cdC52aWRlby1vcGN0YXktdG9wIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC40KSk7XHJcblx0fVxyXG5cclxuXHQudmlkZW8tb3BjdGF5LWJvdCB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuNykpO1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

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
          touchend: _vm.propressMoveEnd
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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'], //依赖注入,v:this\n  data: function data() {\n    return {\n      width: 0, //进度条的总宽度\n      left: 0, //圆点\n      moveStatus: false //用户拖动进度条\n    };\n  },\n  props: {\n    curTime: 0, //当前时间值在变化\n    duration: 0 //总时长\n  },\n\n  created: function created() {\n    this.width = this.v.windowWidth - 44 - 44 - 80 - 15; //232px,44是两边按钮的图标大小,80是文字大小\n\n    this.active();\n  },\n  //计算属性\n  computed: {\n    propressWidth: function propressWidth() {\n      return \"width:\".concat(this.left, \"px\"); //这里是left，不是width\n    },\n    propressRound: function propressRound() {\n      return \"left:\".concat(this.left, \"px\");\n    },\n\n    currentTime: function currentTime() {\n      return this.left == 0 ? 0 : this.left / this.width * this.duration;\n    } },\n\n\n  //监听器\n  watch: {\n    //监听curTime属性\n    curTime: function curTime(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.active(); //让left的值一直变化\t\n      }\n    } },\n\n\n  methods: {\n    active: function active() {\n      this.left = this.duration == 0 ? 0 : this.curTime / this.duration * this.width; //进度发生变化的计算\n    }, //当前进度条的时间变化计算\n\n    propressMoveStart: function propressMoveStart(e) {\n      this.moveStatus = true;\n      var pointPropress = e.changedTouches[0].screenX - 44;\n      if (pointPropress > this.width) {\n        pointPropress = this.width;\n        this.left = pointPropress;\n      } else {\n        this.left = pointPropress;\n      }\n      // console.log(e.changedTouches[0].screenX)//44-275距离长度\n    }, //进度条拖动开始\n\n    propressMoveEnd: function propressMoveEnd(e) {\n      this.moveStatus = false;\n      //$emit子父通信\n      this.$emit(\"valueChange\", this.currentTime);\n    }, //进度条拖动结束\n\n\n    propressMove: function propressMove(e) {\n      this.moveStatus = true;\n      var propressRround = e.changedTouches[0].screenX - 44;\n\n      if (propressRround < 0) {\n        propressRround = 0;\n      } else if (propressRround > this.width) {\n        propressRround = this.width;\n      } else {\n        this.left = propressRround;\n      }\n    } //进度条移动\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdmlkZW9UZXh0L2NvbXBvbmVudHMvcHJvZ3Jlc3MudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0EsZUFEQSxFQUNBO0FBQ0EsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsY0FEQSxFQUNBO0FBQ0EsYUFGQSxFQUVBO0FBQ0EsdUJBSEEsQ0FHQTtBQUhBO0FBS0EsR0FSQTtBQVNBO0FBQ0EsY0FEQSxFQUNBO0FBQ0EsZUFGQSxDQUVBO0FBRkEsR0FUQTs7QUFjQSxTQWRBLHFCQWNBO0FBQ0Esd0RBREEsQ0FDQTs7QUFFQTtBQUNBLEdBbEJBO0FBbUJBO0FBQ0E7QUFDQSxpQkFEQSwyQkFDQTtBQUNBLDhDQURBLENBQ0E7QUFDQSxLQUhBO0FBSUEsaUJBSkEsMkJBSUE7QUFDQTtBQUNBLEtBTkE7O0FBUUEsZUFSQSx5QkFRQTtBQUNBO0FBQ0EsS0FWQSxFQXBCQTs7O0FBaUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsbUJBRUEsUUFGQSxFQUVBLFFBRkEsRUFFQTtBQUNBO0FBQ0Esc0JBREEsQ0FDQTtBQUNBO0FBQ0EsS0FOQSxFQWxDQTs7O0FBMkNBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBLHFGQURBLENBQ0E7QUFDQSxLQUhBLEVBR0E7O0FBRUEscUJBTEEsNkJBS0EsQ0FMQSxFQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZkEsRUFlQTs7QUFFQSxtQkFqQkEsMkJBaUJBLENBakJBLEVBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQkEsRUFxQkE7OztBQUdBLGdCQXhCQSx3QkF3QkEsQ0F4QkEsRUF3QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQW5DQSxDQW1DQTtBQW5DQSxHQTNDQSxFIiwiZmlsZSI6IjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgQHRvdWNoc3RhcnQ9XCJwcm9wcmVzc01vdmVTdGFydFwiIEB0b3VjaG1vdmU9XCJwcm9wcmVzc01vdmVcIiBAdG91Y2hlbmQ9XCJwcm9wcmVzc01vdmVFbmRcIlxyXG5cdFx0XHRzdHlsZT1cImhlaWdodDogNDBweDtcIiBjbGFzcz1cImZsZXggcG9zaXRpb24tcmVsYXRpdmUgYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdDwhLS0g5Lit6Ze055qE5aSW5bGC55uS5a2Q6auY5bqm6K6+572uIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSByb3VuZGVkXCIgc3R5bGU9XCIgIGhlaWdodDogM3B4OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSlcIj5cclxuXHRcdFx0XHQ8IS0tIOaOp+WItuadoeeahOmVv+W6puagt+W8jyAtLT5cclxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMzZFQjg7IGhlaWdodDozcHg7XCIgOnN0eWxlPVwicHJvcHJlc3NXaWR0aFwiPjwvdmlldz4gPCEtLSDov5vluqbmnaHnmoTmoLflvI8gLS0+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPVwiaGVpZ2h0OiAxNXB4OyB3aWR0aDoxNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM2RUI4XCJcclxuXHRcdFx0XHQ6c3R5bGU9XCJwcm9wcmVzc1JvdW5kXCI+PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOeItuebuOWtkOe7ne+8jOi/memHjOaYr+aLieWKqOWOn+eCuSAtLT5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGluamVjdDogWyd2J10sIC8v5L6d6LWW5rOo5YWlLHY6dGhpc1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3aWR0aDogMCwgLy/ov5vluqbmnaHnmoTmgLvlrr3luqZcclxuXHRcdFx0XHRsZWZ0OiAwLCAvL+WchueCuVxyXG5cdFx0XHRcdG1vdmVTdGF0dXM6IGZhbHNlLCAvL+eUqOaIt+aLluWKqOi/m+W6puadoVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y3VyVGltZTogMCwgLy/lvZPliY3ml7bpl7TlgLzlnKjlj5jljJZcclxuXHRcdFx0ZHVyYXRpb246IDAgLy/mgLvml7bplb9cclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy53aWR0aCA9IHRoaXMudi53aW5kb3dXaWR0aCAtIDQ0IC0gNDQgLSA4MCAtIDE1OyAvLzIzMnB4LDQ05piv5Lik6L655oyJ6ZKu55qE5Zu+5qCH5aSn5bCPLDgw5piv5paH5a2X5aSn5bCPXHJcblxyXG5cdFx0XHR0aGlzLmFjdGl2ZSgpXHJcblx0XHR9LFxyXG5cdFx0Ly/orqHnrpflsZ7mgKdcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHByb3ByZXNzV2lkdGgoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDoke3RoaXMubGVmdH1weGAgLy/ov5nph4zmmK9sZWZ077yM5LiN5pivd2lkdGhcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJvcHJlc3NSb3VuZCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYGxlZnQ6JHt0aGlzLmxlZnR9cHhgXHJcblx0XHRcdH0sXHJcbiAgICAgICAgICBcclxuXHRcdFx0Y3VycmVudFRpbWUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCA9PSAwID8gMCA6ICh0aGlzLmxlZnQgLyB0aGlzLndpZHRoKSAqIHRoaXMuZHVyYXRpb25cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvL+ebkeWQrOWZqFxyXG5cdFx0d2F0Y2g6IHtcclxuXHRcdFx0Ly/nm5HlkKxjdXJUaW1l5bGe5oCnXHJcblx0XHRcdGN1clRpbWUobmV3VmFsdWUsIG9sZFZhbHVlKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLm1vdmVTdGF0dXMpIHtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlKCkgLy/orqlsZWZ055qE5YC85LiA55u05Y+Y5YyWXHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhY3RpdmUoKSB7XHJcblx0XHRcdFx0dGhpcy5sZWZ0ID0gdGhpcy5kdXJhdGlvbiA9PSAwID8gMCA6ICh0aGlzLmN1clRpbWUgLyB0aGlzLmR1cmF0aW9uKSAqIHRoaXMud2lkdGggLy/ov5vluqblj5HnlJ/lj5jljJbnmoTorqHnrpdcclxuXHRcdFx0fSwgLy/lvZPliY3ov5vluqbmnaHnmoTml7bpl7Tlj5jljJborqHnrpdcclxuXHJcblx0XHRcdHByb3ByZXNzTW92ZVN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLm1vdmVTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0bGV0IHBvaW50UHJvcHJlc3MgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSA0NFxyXG5cdFx0XHRcdGlmIChwb2ludFByb3ByZXNzID4gdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdFx0cG9pbnRQcm9wcmVzcyA9IHRoaXMud2lkdGhcclxuXHRcdFx0XHRcdHRoaXMubGVmdCA9IHBvaW50UHJvcHJlc3NcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5sZWZ0ID0gcG9pbnRQcm9wcmVzc1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblgpLy80NC0yNzXot53nprvplb/luqZcclxuXHRcdFx0fSwgLy/ov5vluqbmnaHmi5bliqjlvIDlp4tcclxuXHJcblx0XHRcdHByb3ByZXNzTW92ZUVuZChlKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHQvLyRlbWl05a2Q54i26YCa5L+hXHJcblx0XHRcdFx0dGhpcy4kZW1pdChcInZhbHVlQ2hhbmdlXCIsdGhpcy5jdXJyZW50VGltZSlcclxuXHRcdFx0fSwgLy/ov5vluqbmnaHmi5bliqjnu5PmnZ9cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRwcm9wcmVzc01vdmUoZSkge1xyXG5cdFx0XHRcdHRoaXMubW92ZVN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHRsZXQgcHJvcHJlc3NScm91bmQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSA0NFxyXG5cclxuXHRcdFx0XHRpZiAocHJvcHJlc3NScm91bmQgPCAwKSB7XHJcblx0XHRcdFx0XHRwcm9wcmVzc1Jyb3VuZCA9IDBcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHByb3ByZXNzUnJvdW5kID4gdGhpcy53aWR0aCkge1xyXG5cdFx0XHRcdFx0cHJvcHJlc3NScm91bmQgPSB0aGlzLndpZHRoXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMubGVmdCA9IHByb3ByZXNzUnJvdW5kXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IC8v6L+b5bqm5p2h56e75YqoXHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

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

/***/ }),
/* 19 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ })
/******/ ]);