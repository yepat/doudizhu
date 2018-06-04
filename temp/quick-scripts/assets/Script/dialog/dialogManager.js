(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/dialog/dialogManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4b867ajR6hL6KpFRRVm3Qvl', 'dialogManager', __filename);
// Script/dialog/dialogManager.js

"use strict";

var commonControl = require("commonControl");

var dialogManager = cc.Class({
    extends: cc.Component,
    statics: {
        showDialog: function showDialog(prefabUrl, mControl, args) {
            cc.loader.loadRes(prefabUrl, function (err, prefab) {
                if (err) {
                    console.log(err);
                    return;
                }
                var newNode = cc.instantiate(prefab);
                cc.director.getScene().addChild(newNode);
                if (mControl) newNode.getComponent(mControl).show(args);
            });
        },
        showCommonDialog: function showCommonDialog(title, content, enterClick, cancelClick) {
            var args = {};
            args.arg1 = title;
            args.arg2 = content;
            args.arg3 = enterClick;
            args.arg4 = cancelClick;
            this.showDialog("prefab/commonDialog", commonControl, args);
        },
        showBagDialog: function showBagDialog() {
            this.showDialog("prefab/bagDialog");
        },
        showEmailDialog: function showEmailDialog() {
            this.showDialog("prefab/emailDialog");
        },
        showExchangeDialog: function showExchangeDialog() {
            this.showDialog("prefab/exchangeDialog");
        },
        showFanKuiDialog: function showFanKuiDialog() {
            this.showDialog("prefab/fankuiDialog");
        },
        showGameResultDialog: function showGameResultDialog(isWin) {
            if (isWin) {
                this.showDialog("prefab/gameResultWin");
            } else {
                this.showDialog("prefab/gameResultLose");
            }
        },
        showSetDialog: function showSetDialog() {
            this.showDialog("prefab/setDialog");
        },
        showTaskDialog: function showTaskDialog() {
            this.showDialog("prefab/taskDialog");
        },


        //牌桌操作界面
        showOpratCallLord: function showOpratCallLord() {
            this.showDialog("prefab/opratCallLord");
        },
        showOpratDouble: function showOpratDouble() {
            this.showDialog("prefab/opratDouble");
        },
        showOpratOutCard: function showOpratOutCard() {
            this.showDialog("prefab/opratOutCard");
        },
        showOpratShowCard: function showOpratShowCard() {
            this.showDialog("prefab/opratShowCard");
        },
        showCancelDelegate: function showCancelDelegate() {
            this.showDialog("prefab/CancelDelegate");
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=dialogManager.js.map
        