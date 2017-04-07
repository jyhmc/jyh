Ext.define('Basedata.view.BasedataYtqyView', {
	extend : 'Ext.container.Container',
	alias : 'widget.BasedataYtqyView',
	width : '100%',
	height:'100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore= Ext.create("System.store.DeptTreeStore");
		var gridstore= Ext.create("System.store.DeptGridStore");
		Ext.applyIf(me, {
			items : [{
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;基础信息&nbsp;&gt;&nbsp;源头企业'
			}, {
				xtype : 'container',
				region : 'center',
				layout : 'fit',
				itemId : 'SystemDeptViewContainer',
				items : [{
					xtype : 'container',
					layout : 'border',
					itemId : 'DeptBaseContainer',
					items : [{
						xtype : 'container',
						region : 'west',
						width : 300,
						layout : 'border',
						items : [{
							xtype : 'treepanel',
							region : 'center',
							//title : '知识库类别',
							rootVisible : false,
							itemId : 'DeptTreepanel',
							store : treestore

						}]
					}, {
						xtype : 'container',
						region : 'center',
						layout : 'border',
						items : [{
							xtype : 'gridpanel',
							region : 'center',
							selType : 'checkboxmodel',
							itemId : 'DeptGridpanel',
							store : gridstore,
							columns : [{
										xtype : 'rownumberer',
										align : 'left',
										minWidth : 50,
										text : '序号'
									},  {
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '组织名称'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '组织机构代码'
									}],
									dockedItems: [{
									    xtype: 'toolbar',
									    dock: 'top',
									    //ui: 'footer',
									  //  defaults: {minWidth: minButtonWidth},
									    items: [
									    	{
									            xtype: 'textfield',
									            name: 'name',
									            fieldLabel: 'Name',
									            allowBlank: false  // requires a non-empty value
									        }, {
									            xtype: 'textfield',
									            name: 'email',
									            fieldLabel: 'Email Address',
									            vtype: 'email'  // requires value to be a valid email address format
									        },{
									            xtype: 'textfield',
									            name: 'name',
									            fieldLabel: 'Name',
									            allowBlank: false  // requires a non-empty value
									        }, {
									            xtype: 'textfield',
									            name: 'email',
									            fieldLabel: 'Email Address',
									            vtype: 'email'  // requires value to be a valid email address format
									        }
									    ]
									}, {
										xtype : 'pagingtoolbar',
										itemId : 'DeptGridPagingBar',
										store : gridstore,
										dock : 'bottom',
										displayInfo : true
									}]
						}]
					}]
				}]
			}]
});
		me.callParent(arguments);
	}
});