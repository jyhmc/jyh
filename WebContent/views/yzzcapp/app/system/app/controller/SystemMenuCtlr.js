Ext.define('System.controller.SystemMenuCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.SystemMenuCtlr',
	views : [ 'SystemMenuView' ],
	refs : [ {
		ref : 'MenuGridpanel',
		selector : 'SystemMenuView gridpanel[itemId=MenuGridpanel]'
	}, {
		ref : 'MenuTreepanel',
		selector : 'SystemMenuView treepanel[itemId=MenuTreepanel]'
	} ],

	onMenuTreepanelItemClick : function(is, record, item, index, e, eOpts) {
		var me = this;
		var store = me.getMenuGridpanel().getStore();
		var node = record.data.id;
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'node' : node
			});
		});
		store.loadPage(1);
	},

	onSysMenuAddClick : function() {
		var me = this;
		var selection = me.getMenuTreepanel().getSelectionModel()
				.getSelection();
		if (selection.length == 0) {
			Ext.ux.Toast.msg("提示", "请选择父节点！");
			return;
		}

		var win = Ext.create('System.view.SystemMenuAddWin');
		win.down('textfield[itemId=MenuAddPid]').setValue(
				selection[0].data.id);
		win.down('textfield[itemId=MenuAddPname]').setValue(
				selection[0].data.text);
		win.show();

	},

	onSysMenuEditClick : function() {
		var me = this;
		var selection = me.getMenuGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}

		var win = Ext.create('System.view.SystemMenuEditWin');
		win.down('form').loadRecord(selection[0]);
		win.show();

	},

	onSysMenuDelClick : function() {
		var me = this;
		var selection = me.getMenuGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}
		var store = me.getMenuGridpanel().getStore();
		Ext.Msg.show({
			title : '提示',
			msg : '确认要操作选中的信息？',
			buttons : Ext.Msg.YESNO,
			fn : function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : __ctxPath + "/sys/menuDel",
						params : {
							id : selection[0].get('id')
						},
						success : function(response, options) {
							var json = Ext.JSON.decode(response.responseText)
							Ext.ux.Toast.msg("提示", "删除成功！");
							store.loadPage(1);
						},
						failure : function(response, options) {
							Ext.ux.Toast.msg("提示", "删除成功！");
						}
					});
				}
			},
			icon : Ext.Msg.QUESTION
		});

	},

	onSysMenuRefClick : function() {
		var me = this;
		var store = me.getMenuGridpanel().getStore();
		store.loadPage(1);

	},
	
	onSystemMenuAddWinSubmit:function(){
		var me = this;
		var store = me.getMenuGridpanel().getStore();
		store.loadPage(1);

		
	},
	
	
	onSystemMenuEditWinSubmit:function(){
		var me = this;
		var store = me.getMenuGridpanel().getStore();
		store.loadPage(1);
		
	},
	

	init : function(application) {
		this.control({
			"SystemMenuView  treepanel[itemId=MenuTreepanel]" : {
				itemclick : this.onMenuTreepanelItemClick
			},
			"SystemMenuView  button[itemId=SysMenuAdd]" : {
				click : this.onSysMenuAddClick
			},
			"SystemMenuView  button[itemId=SysMenuEdit]" : {
				click : this.onSysMenuEditClick
			},
			"SystemMenuView  button[itemId=SysMenuDel]" : {
				click : this.onSysMenuDelClick
			},
			"SystemMenuView  button[itemId=SysMenuRef]" : {
				click : this.onSysMenuRefClick
			},
			"SystemMenuAddWin" : {
				submit : this.onSystemMenuAddWinSubmit
			},
			"SystemMenuEditWin" : {
				submit : this.onSystemMenuEditWinSubmit
			}
		});
	}
});