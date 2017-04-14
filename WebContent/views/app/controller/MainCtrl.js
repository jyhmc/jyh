Ext.define('yzzc.controller.MainCtrl', {
	extend : 'Ext.app.Controller',
	requires : [ 'Ext.tip.QuickTip' ],
	/* views : [ 'MenuView','CenterView'], */
	/* 映射的页面对象 */
	refs : [ {
		ref : 'centerpanel',
		selector : '#content-panel'
	}, {
		ref : 'mainmenutop',
		selector : '#mainMenutop'
	}

	],

	/**
	 * 菜单单击事件，切换菜单
	 */
	treeMenuClick : function(th, record, item, index, e, eOpts) {
            
			Manager.create(record.data.url);
		
	},

	loadMenu : function(th, eOpts) {
		var me = this;
		var accordion = me.getMainmenutop();
		var model= Ext.define('User', {
		     extend: 'Ext.data.Model',
		     fields: [
		         {name: 'id', type: 'int'},
		         {name: 'text',  type: 'string'},
		         {name: 'leaf',   type: 'boolean'},
		         {name: 'url',  type: 'string'}
		     ]
		 });
		Ext.Ajax.request({
			url : __ctxPath + "/sys/tree",
			success : function(response, options) {
				var json = Ext.JSON.decode(response.responseText)

				for (var int = 0; int < json.result.length; int++) {
                    //创建顶层菜单
					var panel = Ext.create('Ext.panel.Panel', {
						title : json.result[int].text,
						xtype : 'panel',
						layout : {
							type : 'fit'
						},
					});
                   //创建子菜单
					var tree = Ext.create('Ext.tree.Panel', {
						width : 200,
						height : 150,
						itemId : 'menuTree',
						border : false,
						rootVisible : false,
						store : Ext.create('Ext.data.TreeStore', {
						    model:model,
							root : {
								expanded : true,
								children : json.result[int].children
							}
						})
					});
					panel.add(tree);
					accordion.add(panel);
				}
			},
			failure : function(response, options) {
			}
		});
	},

	// 事件注册
	init : function() {
		this.control({
			'#mainMenutop  treepanel[itemId=menuTree]' : {
				itemclick : this.treeMenuClick
			},
			'#mainMenutop' : {
				beforerender : this.loadMenu
			}

		});
	},

	// 页面渲染完成后执行的事件，设置所有ajax请求的方式为 post
	onLaunch : function() {
		
		//this.loadMenu();
		
		Ext.override(Ext.data.proxy.Ajax, {
			actionMethods : {
				create : 'POST',
				read : 'POST',
				update : 'POST',
				destroy : 'POST'
			}
		});
		Ext.QuickTips.init();
		Ext.BLANK_IMAGE_URL = __ctxPath + "/images/default/s.gif";
	}

});
