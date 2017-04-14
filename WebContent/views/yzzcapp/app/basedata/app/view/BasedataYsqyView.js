Ext.define('Basedata.view.BasedataYsqyView', {
	extend : 'Ext.container.Container',
	alias : 'widget.BasedataYsqyView',
	width : '100%',
	height:'100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore= Ext.create("System.store.DeptTreeStore");
		var gridstore= Ext.create("Basedata.store.BasedataYsqyStore");
		Ext.applyIf(me, {
			items : [{
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;基础信息&nbsp;&gt;&nbsp;运输企业'
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
						width : 250,
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
							itemId : 'YsqyGridpanel',
							store : gridstore,
							columns : [{
										xtype : 'rownumberer',
										align : 'left',
										minWidth : 50,
										text : '序号'
									},{
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '业户名称'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '营运证号'
									},{
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '业户地址'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '经营范围'
									},{
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '业户状态'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '发证机构'
									},{
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '有效始日期'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '有效止日期'
									}],
									dockedItems: [{
										xtype : 'toolbar',
										dock : 'top',
										// ui: 'footer',
										// defaults: {minWidth: minButtonWidth},
										items : [ {
											xtype : 'textfield',
											itemId:'yhmc',
											fieldLabel : '业户名称',
											labelWidth : 70
										}, {
											xtype : 'textfield',
											itemId:'yhbh',
											fieldLabel : '业户编号',
											labelWidth : 70
										}, {
											xtype : 'textfield',
											itemId:'yyzh',
											labelWidth : 70,
											fieldLabel : '营运证号'
										} , {
											xtype : 'button',
											itemId:'YsqySerch',
											text: '查  询'
										} , {
											xtype : 'button',
											itemId:'YsqyRest',
											text: '重  置'
										}]
									}, {
										xtype : 'pagingtoolbar',
										itemId : 'GridPagingBar',
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