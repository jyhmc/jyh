Ext.define('System.controller.SystemRoleCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.SystemRoleCtlr',
	store : [ 'MenuTreeByRoleStore' ],
	views : [ 'SystemRoleView' ],
	refs : [ {
		ref : 'RoleGridpanel',
		selector : 'SystemRoleView gridpanel[itemId=RoleGridpanel]'
	}, {
		ref : 'RoleMenuTreepanel',
		selector : 'SystemRoleView treepanel[itemId=RoleMenuTreepanel]'
	}, {
		ref : 'SysRoleMenuTreeWin',
		selector : 'SystemRoleMenuView treepanel[itemId=SysRoleMenuTreeWin]'
	} ],

	onDeptTreepanelItemClick : function(is, record, item, index, e, eOpts) {
		var me = this;
		var store = me.getUserGridpanel().getStore();
		var node = record.data.id;
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'deptId' : node
			});
		});
		store.loadPage(1);
	},

	onSysRoleAddClick : function() {
		var me = this;
		var win = Ext.create('System.view.SystemRoleAddWin');
		win.show();

	},

	onSysRoleEditClick : function() {
		var me = this;
		var selection = me.getRoleGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}

		var win = Ext.create('System.view.SystemRoleEditWin');
		win.down('form').loadRecord(selection[0]);
		win.show();

	},

	onSysRoleDelClick : function() {
		var me = this;
		var selection = me.getRoleGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}
		var store = me.getRoleGridpanel().getStore();
		Ext.Msg.show({
			title : '提示',
			msg : '确认要操作选中的信息？',
			buttons : Ext.Msg.YESNO,
			fn : function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : __ctxPath + "/sys/roleDel",
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

	onSysRoleRefClick : function() {
		var me = this;
		var store = me.getRoleGridpanel().getStore();
		store.loadPage(1);

	},

	onSysRoleMenuClick : function() {
		var me = this;
		var selection = me.getRoleGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}

		var store = Ext.create("System.store.RoleMenuTreeStore");
		store.on('beforeload', function() {
			Ext.apply(store.proxy.extraParams, {
				"roleid" : selection[0].get('id')
			});
		});
		var win = Ext.create('System.view.SystemRoleMenuView', {
			treestore : store
		});
		win.down('displayfield[itemId=sysRoleMenurolename]').setValue(
				selection[0].get('rolename'));
		win.down('displayfield[itemId=sysRoleMenuroleid]').setValue(
				selection[0].get('id'));
		win.show();

	},

	onSysRoleGridpanelcellClick : function(th, td, cellIndex, record, tr,
			rowIndex, e, eOpts) {
		var me = this;

		var store = me.getRoleMenuTreepanel().getStore();
		var roleid = record.get('id');
		store.on("beforeload", function() {
			Ext.apply(store.proxy.extraParams, {
				'roleid' : roleid
			});
		});
		store.load();

	},

	onSysRoleMenuSaveClick : function(btn) {
		var me = this;
		var view = btn.ownerCt.ownerCt;
		var roleid = view.down('displayfield[itemId=sysRoleMenuroleid]')
				.getValue();
		var records = me.getSysRoleMenuTreeWin().getView().getChecked();
		if (records.length < 1) {
			Ext.ux.Toast.msg("提示", "请选择要分配的权限菜单");
			return;
		}

		var menus = [];
		Ext.Array.each(records, function(rec) {
			menus.push(rec.get('id'));
		});
		Ext.Msg.show({
			title : '提示',
			msg : '确认要操作选中的信息？',
			buttons : Ext.Msg.YESNO,
			fn : function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : __ctxPath + "/sys/roleMenuAdd",
						params : {
							roleid : roleid,
							menus : menus
						},
						success : function(response, options) {
							var json = Ext.JSON.decode(response.responseText)
							Ext.ux.Toast.msg("提示", "操作成功！");
							view.destroy();
						},
						failure : function(response, options) {
							Ext.ux.Toast.msg("提示", "操作失败！");
						}
					});
				}
			},
			icon : Ext.Msg.QUESTION
		});

	},

	onRoleMenuCancelClick : function(btn) {
		var me = this;
		var view = btn.ownerCt.ownerCt;
		view.destroy();
	},

	onSystemRoleAddWinSubmit : function() {
		var me = this;
		var store = me.getRoleGridpanel().getStore();
		store.loadPage(1);
	},

	onSystemRoleEditWinSubmit : function() {
		var me = this;
		var store = me.getRoleGridpanel().getStore();
		store.loadPage(1);
	},

	checkedParentNode : function(node) {
		var mm = this;
		if (node.hasChildNodes()) {
			node.set("checked", false);
			var childLength = node.childNodes.length;
			var checked = false;
			var l;
			for (l = 0; l < childLength; l++) {
				var childNode = node.childNodes[l];
				if (childNode.data.checked) {
					node.set("checked", true);
					checked = true;
					if (node && (!node.parentNode.isRoot())) {
						mm.checkedParentNode(node.parentNode);
					}
					break;
				}
			}
			if (!checked) {
				node.set("checked", false);
				if (node && (!node.parentNode.isRoot())) {
					this.checkedParentNode(node.parentNode);
				}
			}
		}
	},

	onCheckchangeListner : function(node, checked) {
		var childTextStr = ",";
		if (node && (!node.isLeaf())) {
			checkchangeListner(node, checked);
		}
		if (node && (!node.parentNode.isRoot())) {
			this.checkedParentNode(node.parentNode);
		}
	},

	onSysURoleAddrolenameBlur : function() {
		var me = this;
		debugger;

	},

	onSysRoleEditrolenamechange : function() {
		var me = this;
		debugger;

	},

	init : function(application) {
		this.control({
			"SystemRoleView  treepanel[itemId=MenuTreepanel]" : {
				itemclick : this.onMenuTreepanelItemClick
			},
			"SystemRoleView  button[itemId=SysRoleAdd]" : {
				click : this.onSysRoleAddClick
			},
			"SystemRoleView  button[itemId=SysRoleEdit]" : {
				click : this.onSysRoleEditClick
			},
			"SystemRoleView  button[itemId=SysRoleDel]" : {
				click : this.onSysRoleDelClick
			},
			"SystemRoleView  button[itemId=SysRoleRef]" : {
				click : this.onSysRoleRefClick
			},
			"SystemRoleView  button[itemId=SysRoleMenu]" : {
				click : this.onSysRoleMenuClick
			},
			"SystemRoleView  gridpanel[itemId=RoleGridpanel]" : {
				cellclick : this.onSysRoleGridpanelcellClick
			},
			"SystemRoleMenuView  button[itemId=sysRoleMenuSave]" : {
				click : this.onSysRoleMenuSaveClick
			},
			"SystemRoleMenuView  button[itemId=sysRoleMenuCancel]" : {
				click : this.onRoleMenuCancelClick
			},
			"SystemRoleAddWin" : {
				submit : this.onSystemRoleAddWinSubmit
			},
			"SystemRoleEditWin" : {
				submit : this.onSystemRoleEditWinSubmit
			},
			"SystemRoleMenuView treepanel[itemId=SysRoleMenuTreeWin]" : {
				checkchange : this.onCheckchangeListner
			},

			"SystemRoleAddWin   textfield[itemId=RoleAddrolename]" : {
				blur : this.onSysURoleAddrolenameBlur
			},
			"SystemRoleEditWin  textfield[itemId=RoleEditrolename]" : {
				change : this.onSysRoleEditrolenamechange
			}

		});
	}
});