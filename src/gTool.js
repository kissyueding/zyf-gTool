/** 个人js类库gTool.js（方法、插件集合）
 *  @version 1.1.0
 *  @author zyf
 *  @update 2022/06/18
 */
 (function(g, fn) {
	g.gTool = fn(g);
	if(typeof define === 'function' && define.amd) {
		define(function() {
			return fn(g)
		})
	} else if(typeof module !== 'undefined' && module.exports) {
		module.exports = fn(g)
	} else {
		g.$ === undefined && (g.$ = fn(g));
	}
})(typeof window !== 'undefined' ? window : this, function(g) {
	'use strict';
	var gTool = (function() {
		//定义gTool类
		var G = function(selector, context) {}
		//定义extend扩展方法，方便为gTool扩展插件
		G.extend = function(obj) {
			var args = arguments;
			if(args.length < 2) {
				for(var k in obj) {
					this[k] = obj[k]
				}
				return
			} else {
				var temp = G.cloneObj(args[0]); //调用复制对象方法
				for(var n = 1, len = args.length; n < len; n++) {
					for(var i in args[n]) {
						temp[i] = args[n][i]
					}
				}
				return temp
			}
		};
		if(typeof window === 'undefined') {
			return;
		}
		//内部基础公用方法、属性
		G.public = {
			
		};
		//常用工具
		G.extend({
            cloneObj: function(oldObj) {
                if(typeof oldObj !== 'string') {
                    return oldObj
                }
                var newObj = {};
                for(var i in oldObj) {
                    newObj[i] = G.cloneObj(oldObj[i])
                }
                return newObj
            },
		})
		return G
	})();
	g.gTool = gTool;
	g.$ === undefined && (g.$ = gTool);
	return gTool;
})