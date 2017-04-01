Ext.ux = Ext.ux || {};
Ext.ux.Toast = function() {
	var msgCt;
	var m;
	function showMsg(title, format, secondnum) {
		if (!msgCt) {
			msgCt = Ext.core.DomHelper.insertFirst(document.body, {
						id : 'msg-div'
					}, true);
		}
		var s = Ext.String.format.apply(String, Array.prototype.slice.call(
						arguments, 1));
		var g = createBox(title, s);
		m = Ext.core.DomHelper.append(msgCt, g, true);
		m.hide();
		secondnum = secondnum ? secondnum * 1000 : 3000;
		m.slideIn('t').ghost("t", {
					delay : secondnum,
					remove : true
				});

	}
	function createBox(t, s) {
		// return ['<div class="msg">',
		// '<div class="x-box-tl"><div class="x-box-tr"><div
		// class="x-box-tc"></div></div></div>',
		// '<div class="x-box-ml"><div class="x-box-mr"><div
		// class="x-box-mc"><h3>', t, '</h3>', s, '</div></div></div>',
		// '<div class="x-box-bl"><div class="x-box-br"><div
		// class="x-box-bc"></div></div></div>',
		// '</div>'].join('');
		return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
	}
	return {
		msg : function(title, format, second) {
			// var x = Ext.get("msg-div");
			showMsg(title, format, second);
			// if (x == null) {
			// showMsg(title, format);
			// } else {
			// m.destroy();
			// showMsg(title, format);
			// }
		},

		init : function() {
			// var t = Ext.get('exttheme');
			// if(!t){ // run locally?
			// return;
			// }
			// var theme = Cookies.get('exttheme') || 'aero';
			// if(theme){
			// t.dom.value = theme;
			// Ext.getBody().addClass('x-'+theme);
			// }
			// t.on('change', function(){
			// Cookies.set('exttheme', t.getValue());
			// setTimeout(function(){
			// window.location.reload();
			// }, 250);
			// });
			//
			// var lb = Ext.get('lib-bar');
			// if(lb){
			// lb.show();
			// }
		}
	};
}();


MustVal = function(a, b) {
	if (b) {
		return '*&nbsp;&nbsp;' + a
	} else {
		return '&nbsp;&nbsp;&nbsp;&nbsp;' + a
	}
}

checkchangeListner = function(node, checked) {
	node.expand(true, function(pnd) {/* 展开当前节点! */
				if (pnd == null) {
					return;
				}
				for (var j = 0; j < pnd.length; j++) {
					var childNode = pnd[j];
					childNode.set("checked", checked);
				    checkchangeListner(childNode, checked);
				}
			});
}

