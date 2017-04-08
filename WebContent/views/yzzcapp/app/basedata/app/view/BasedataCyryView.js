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
		var gridstore= Ext.create("System.store.DeptGridStore");
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
						border:false,
						flex : 5,
						layout : {
							type : 'border'
						},
						items : [{/*
									xtype : 'toolbar',
									layout : 'table',
									border:false,
									region: 'north',
								//	bodyPadding : 10,
									height: 33,
									items : [{
												xtype : 'textfield',
												width : 220,
												fieldLabel : '产品名称',
												dataIndex : 'productName',
												itemId : 'productName',
												labelWidth : 70
											}, {
												xtype : 'textfield',
												width : 220,
												fieldLabel : '产品编码',
												dataIndex : 'productCode',
												itemId : 'productCode',
												labelWidth : 70
											},  {
												xtype : 'button',
												itemId : 'btnProduct_search',
												text : '查询'
												
											}, {
												xtype : 'button',
												text : '清空',
												itemId : 'button-clear'
											}]
								*/}, {
									xtype : 'gridpanel',
									border:false,
									//store : store,
									itemId : 'productListGrid',
									selType : 'checkboxmodel',
									autoScroll : true,
									region: 'center',
									columns : [
										{
											xtype : 'rownumberer',
											width : 70,
											text : '序号'
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'productCode',
											text : '产品编码',
											flex: 1,
											renderer:function(value){
												return value.link("#");
											}
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'productName',
											flex: 1,
											text : '产品名称'
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'productVersion',
											flex: 1,
											hidden:true,
											text : ' 版本'
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'productStyle',
											flex: 1,
												hidden:true,
											text : '规格型号'
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'assetCode',
											flex: 1,
												hidden:true,
											text : '资产编号'
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'productSymbol',
											flex: 1,
											text : '产品代号 '
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'pictureNo',
											flex: 1,
											hidden:true,
											text : '图号'
										}, 
										{
											xtype : 'gridcolumn',
											dataIndex : 'remark',
											flex: 1,
											text : '备注'
										}],
									dockedItems : [{
										xtype : 'toolbar',
										dock : 'top',
										// ui: 'footer',
										// defaults: {minWidth: minButtonWidth},
										items : [ {
											xtype : 'textfield',
											name : 'name',
											fieldLabel : 'Name',
											labelWidth : 80,
											allowBlank : false
										}, {
											xtype : 'textfield',
											name : 'email',
											fieldLabel : 'Email ',
											labelWidth : 80,
											vtype : 'email' 
										}, {
											xtype : 'textfield',
											name : 'name',
											labelWidth : 80,
											fieldLabel : 'Name',
											allowBlank : false
										} , {
											xtype : 'button',
											name : 'name',
											text: '查  询',
											allowBlank : false
										} , {
											xtype : 'button',
											name : 'name',
											text: '重  置',
											allowBlank : false
										}]
									}, {
										xtype : 'pagingtoolbar',
										itemId : 'productsPagingBar',
										//store : store,
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