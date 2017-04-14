Ext.define('Basedata.view.BasedataCyryView', {
	extend : 'Ext.container.Container',
	alias : 'widget.BasedataCyryView',
	width : '100%',
	height:'100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore= Ext.create("System.store.DeptTreeStore");
		var gridstore= Ext.create("Basedata.store.BasedataCyryStore");
		Ext.applyIf(me, {
			items : [{
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;基础信息&nbsp;&gt;&nbsp;从业人员'
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
							itemId : 'CyryGridpanel',
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
										text : '姓名'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '资格证号'
									},  {
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '身份证号'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '发证机构'
									},  {
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '状态'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '资格证类型'
									},  {
										xtype : 'gridcolumn',
										dataIndex : 'text',
										flex : 1,
										align : 'left',
										text : '发证日期'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '年审日期'
									}, {
										xtype : 'gridcolumn',
										dataIndex : 'number',
										flex : 1,
										text : '驾照类型'
									}],
									dockedItems: [{
										xtype : 'toolbar',
										dock : 'top',
										// ui: 'footer',
										// defaults: {minWidth: minButtonWidth},
										items : [ {
											xtype : 'textfield',
											itemId:'jsyxm',
											fieldLabel : '驾驶员姓名',
											labelWidth : 80
										}, {
											xtype : 'textfield',
											itemId:'sfzh',
											fieldLabel : '身份证号 ',
											labelWidth : 70
										}, {
											xtype : 'textfield',
											name : 'jszh',
											labelWidth : 70,
											fieldLabel : '驾驶证号'
										} , {
											xtype : 'button',
											itemId:'CyrySerch',
											text: '查  询'
										} , {
											xtype : 'button',
											itemId:'CyryRest',
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