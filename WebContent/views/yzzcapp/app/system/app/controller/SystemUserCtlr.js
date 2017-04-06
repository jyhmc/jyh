Ext.define('System.controller.SystemUserCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.SystemUserCtlr',
	views : [ 'SystemUserView' ],
	refs : [ {
		ref : 'UserGridpanel',
		selector : 'SystemUserView gridpanel[itemId=UserGridpanel]'
	}, {
		ref : 'DeptTreepanel',
		selector : 'SystemUserView treepanel[itemId=DeptTreepanel]'
	}, {
		ref : 'SysUserRoleGrid',
		selector : 'SystemUserRoleWin gridpanel[itemId=sysUserRoleGrid]'
	}, {
		ref : 'SysUserRoleUserid',
		selector : 'SystemUserRoleWin displayfield[itemId=SysUserRoleUserid]'
	}
	, {
		ref : 'SysUserDetailFormId',
		selector : 'SystemUserShowView textfield[itemId=UserDetailFormId]'
	}, {
		ref : 'UserImage',
		selector : 'SystemUserShowView image[itemId=UserImage]'
	}, 

	],

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

	onSysUserAddClick : function() {
		var me = this;
		var selection = me.getDeptTreepanel().getSelectionModel()
				.getSelection();
		if (selection.length == 0) {
			Ext.ux.Toast.msg("提示", "请选择单位！");
			return;
		}

		var win = Ext.create('System.view.SystemUserAddWin');
		win.down('textfield[itemId=UserAdddeptId]').setValue(
				selection[0].data.id);
		win.down('textfield[itemId=UserAdddeptname]').setValue(
				selection[0].data.text);
		win.show();

	},

	onSysUserEditClick : function() {
		var me = this;
		var selection = me.getUserGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}

		var win = Ext.create('System.view.SystemUserEditWin');
		win.down('form').loadRecord(selection[0]);
		win.show();

	},

	onSysUserDelClick : function() {
		var me = this;
		var selection = me.getUserGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}
		var store = me.getUserGridpanel().getStore();
		Ext.Msg.show({
			title : '提示',
			msg : '确认要操作选中的信息？',
			buttons : Ext.Msg.YESNO,
			fn : function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : __ctxPath + "/sys/userDel",
						params : {
							id : selection[0].get('userid')
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

	onSysUserRefClick : function() {
		var me = this;
		var store = me.getUserGridpanel().getStore();
		store.loadPage(1);

	},
	

	onSysSysUserShowClick : function() {
		var me = this;
		var selection = me.getUserGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}
		var win = Ext.create('System.view.SystemUserShowView');
		win.down('form[itemId=UserDetailForm]').loadRecord(selection[0]);
		win.show();
	},

	onSysUserRoleClick : function() {
		var me = this;
		var selection = me.getUserGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}

		var win = Ext.create('System.view.SystemUserRoleWin');
		win.down('displayfield[itemId=SysUserRoleUserid]').setValue(
				selection[0].get('userid'));
		win.show();
	},

	onSysUserResetPasswordClick : function() {
		var me = this;
		var selection = me.getUserGridpanel().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}
		var store = me.getUserGridpanel().getStore();
		Ext.Msg.show({
			title : '提示',
			msg : '确认要操作选中的信息？',
			buttons : Ext.Msg.YESNO,
			fn : function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : __ctxPath + "/sys/userRestPwd",
						success : function(response, options) {
							var json = Ext.JSON.decode(response.responseText)
							Ext.ux.Toast.msg("提示", "重置成功！");
							store.loadPage(1);
						},
						failure : function(response, options) {
							Ext.ux.Toast.msg("提示", "重置失敗！");
						}
					});
				}
			},
			icon : Ext.Msg.QUESTION
		});
	},

	onSysSubmitRoleBtnClick : function(btn) {
		var me = this;
		var selection = me.getSysUserRoleGrid().getSelectionModel()
				.getSelection();
		if (selection.length != 1) {
			Ext.ux.Toast.msg("提示", "请选择一条信息！");
			return;
		}
		var userid = me.getSysUserRoleUserid().getValue();
		var view = btn.ownerCt.ownerCt;
		Ext.Msg.show({
			title : '提示',
			msg : '确认要操作选中的信息？',
			buttons : Ext.Msg.YESNO,
			fn : function(btn) {
				if (btn == 'yes') {
					Ext.Ajax.request({
						url : __ctxPath + "/sys/userRole",
						params : {
							userid : userid,
							roleid : selection[0].get('id')
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

	onSysCancelRoleBtnClick : function(btn) {
		var view = btn.ownerCt.ownerCt;
		view.destroy();
	},

	onSystemUserEditWinSubmit : function() {
		var me = this;
		var store = me.getUserGridpanel().getStore();
		store.loadPage(1);

	},

	onSystemUserAddWinSubmit : function() {
		var me = this;
		var store = me.getUserGridpanel().getStore();
		store.loadPage(1);
	},

	onSystemUserAddWinBlur : function() {
		var me = this;
		debugger;
	},

	onSystemUserEditWinBlur : function() {
		var me = this;
		debugger;
	},
	
	onUploadSuccess : function(obj, file, serverData) {
		var me = this;
		var resObj = Ext.JSON.decode(serverData);
		if (resObj.success) {
			me.getUserImage().setSrc(__ctxPath + '/images?filename=' + resObj.filename);
		}
	},
	
	onSetPostParams : function(obj) {
		var me = this;
		obj.setPostParams({
					userid : me.getSysUserDetailFormId().getValue()
				});
		return true;
	},
	

	init : function(application) {
		this.control({
			"SystemUserView  treepanel[itemId=DeptTreepanel]" : {
				itemclick : this.onDeptTreepanelItemClick
			},
			"SystemUserView  button[itemId=SysUserAdd]" : {
				click : this.onSysUserAddClick
			},
			"SystemUserView  button[itemId=SysUserEdit]" : {
				click : this.onSysUserEditClick
			},
			"SystemUserView  button[itemId=SysUserDel]" : {
				click : this.onSysUserDelClick
			},
			"SystemUserView  button[itemId=SysUserRef]" : {
				click : this.onSysUserRefClick
			},
			"SystemUserView  button[itemId=SysUserShow]" : {
				click : this.onSysSysUserShowClick
			},
			"SystemUserView  button[itemId=SysUserRole]" : {
				click : this.onSysUserRoleClick
			},
			"SystemUserView  button[itemId=SysUserResetPassword]" : {
				click : this.onSysUserResetPasswordClick
			},

			"SystemUserRoleWin  button[itemId=SubmitRoleBtn]" : {
				click : this.onSysSubmitRoleBtnClick
			},
			"SystemUserRoleWin  button[itemId=CancelRoleBtn]" : {
				click : this.onSysCancelRoleBtnClick
			},

			"SystemUserAddWin" : {
				submit : this.onSystemUserAddWinSubmit
			},

			"SystemUserEditWin" : {
				submit : this.onSystemUserEditWinSubmit
			},
			"SystemUserAddWin   textfield[itemId=UserAddusername]" : {
				blur : this.onSystemUserAddWinBlur
			},
			"SystemUserEditWin  textfield[itemId=UserEditusername]" : {
				blur : this.onSystemUserEditWinBlur
			},
			"SystemUserShowView uploadButtonPanel[itemId=PhotoUploadButton]" : {
				setPostParams : this.onSetPostParams,
				onUploadSuccess : this.onUploadSuccess
			},

		});
	}
});