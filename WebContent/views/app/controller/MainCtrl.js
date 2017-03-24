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

		// debugger;
		Manager.create('System.controller.SystemCtlr');

	},

	loadMenu : function(th, eOpts) {
		var me = this;
		var accordion = me.getMainmenutop();

		Ext.Ajax.request({
			url : __ctxPath + "/tree",
			success : function(response, options) {
				var json = Ext.JSON.decode(response.responseText)
				// debugger;
				// alert(json);
				for (var int = 0; int < 5; int++) {

					var panel = Ext.create('Ext.panel.Panel', {
						title : '系统管理',
						xtype : 'panel',
						layout : {
							type : 'fit'
						},
					});

					for (var i = 0; i < 3; i++) {

						var tree = Ext.create('Ext.tree.Panel', {
							width : 200,
							height : 150,
							itemId : 'menuTree',
							border : false,
							rootVisible : false,
							store : Ext.create('Ext.data.TreeStore', {
								root : {
									expanded : true,
									children : [ {
										text : "案件信息",
										leaf : true
									}, {
										text : "基础信息",
										leaf : true

									} ]

								}
							})
						});
						panel.add(tree);
					}
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
				afterrender : this.loadMenu
			}

		});
	},

	// 页面渲染完成后执行的事件，设置所有ajax请求的方式为 post
	onLaunch : function() {
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
