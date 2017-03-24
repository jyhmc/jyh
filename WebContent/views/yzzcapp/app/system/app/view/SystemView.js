Ext.define('System.view.SystemView', {
	extend : 'Ext.container.Container',
	alias : 'widget.SystemView',
	requires : ['Ext.form.field.ComboBox', 'Ext.button.Button',
			'Ext.grid.Panel', 'Ext.  .column.Number', 'Ext.grid.column.Date',
			'Ext.grid.column.Boolean', 'Ext.grid.View', 'Ext.toolbar.Paging'],
	width : '100%',
	height:'100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var store= Ext.create("System.store.DemoStore");
		Ext.applyIf(me, {
					bodyStyle : {
						color : 'red'
					},
					items : [{
								xtype : 'form',
								itemId : 'ProjectsQueryParamsForm',
								height : 120,
								region : 'north',
								width : '100%',
								layout : 'column',
								bodyBorder : true,
								title : '当前位置：数据上传  >数据上传',
								dockedItems : [{
											xtype : 'toolbar',
											dock : 'bottom',
											ui : 'footer',
											layout : {
												pack : 'center'
											},
											items : [{
														minWidth : 80,
														itemId : 'btnQuery',
														text : '查询'
													}, {
														minWidth : 80,
														itemId : 'btnRest',
														text : '重置'
													}]
										}],
								items : [ {
											xtype : 'textfield',
											itemId : 'chkmach',
											padding : '10 0 5 5',
											// width : 200,
											fieldLabel : '设备编号',
											// labelAlign: 'right',
											labelWidth : 70,
											autoSizeColumn : true
										}, {
											xtype : 'combo',
											itemId : 'taskStatus',
											padding : '10 0 5 5',
											// width : 200,
											fieldLabel : '任务状态',
											displayField : 'text',
											valueField : 'value',
											editable : false,
											store : new Ext.data.ArrayStore({
														fields : ['text',
																'value'],
														data : [['未上传', 0],
																['已上传', 1]]
													}),
											labelWidth : 70,
											autoSizeColumn : true
										}]
							}, {
								xtype : 'gridpanel',
								itemId : 'DataUploadListGrid',
								title : '',
								height : 500,
								region : 'center',
								//selType : 'checkboxmodel',
								bodyStyle : "width:'100%'",
								autoSizeColumns : true,
								autoScroll : true,
								store : store,
								columns : [{
											xtype : 'rownumberer',
											minWidth : 60,
											align : 'center',
											text : '序号'
										}, {
											xtype : 'gridcolumn',
											dataIndex : 'id',
											align : 'center',
											//hidden : true,
											text : 'id'
										}, {
											xtype : 'gridcolumn',
											dataIndex : 'name',
											flex : 1,
											align : 'center',
											text : '姓名'
										}, {
											xtype : 'gridcolumn',
											dataIndex : 'age',
											align : 'center',
											flex : 1,
											text : '年齡'

										}]
								
							}]
				});

		me.callParent(arguments);
	}

});