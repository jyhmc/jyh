Ext.define('Basedata.view.BasedataYyclView', {
	extend : 'Ext.container.Container',
	alias : 'widget.BasedataYyclView',
	width : '100%',
	height : '100%',
	region : 'center',
	layout : {
		type : 'border'
	},
	initComponent : function() {
		var me = this;
		var treestore = Ext.create("System.store.DeptTreeStore");
		var gridstore = Ext.create("Basedata.store.BasedataYyclStore");
		Ext.applyIf(me, {
			items : [ {
				xtype : 'panel',
				region : 'north',
				title : '当前位置：&nbsp;基础信息&nbsp;&gt;&nbsp;运输车辆'
			}, {
				xtype : 'container',
				region : 'center',
				layout : 'fit',
				itemId : 'SystemDeptViewContainer',
				items : [ {
					xtype : 'container',
					layout : 'border',
					itemId : 'DeptBaseContainer',
					items : [ {
						xtype : 'container',
						region : 'west',
						width : 250,
						layout : 'border',
						items : [ {
							xtype : 'treepanel',
							region : 'center',
							// title : '知识库类别',
							rootVisible : false,
							itemId : 'DeptTreepanel',
							store : treestore

						} ]
					}, {
						xtype : 'container',
						region : 'center',
						layout : 'border',
						items : [ {
							xtype : 'gridpanel',
							region : 'center',
							selType : 'checkboxmodel',
							itemId : 'YyclGridpanel',
							store : gridstore,
							columns : [ {
								xtype : 'rownumberer',
								align : 'left',
								minWidth : 50,
								text : '序号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'text',
								flex : 1,
								align : 'left',
								text : '车牌号码'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'number',
								flex : 1,
								text : '车牌颜色'
							} , {
								xtype : 'gridcolumn',
								dataIndex : 'text',
								flex : 1,
								align : 'left',
								text : '道路运输证'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'number',
								flex : 1,
								text : '运输企业'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'text',
								flex : 1,
								align : 'left',
								text : '营运证号'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'number',
								flex : 1,
								text : '车辆状态'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'text',
								flex : 1,
								align : 'left',
								text : '车辆类型'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'number',
								flex : 1,
								text : '经营范围'
							}, {
								xtype : 'gridcolumn',
								dataIndex : 'text',
								flex : 1,
								align : 'left',
								text : '发证机构'
							}],
							dockedItems : [ {
								xtype : 'toolbar',
								dock : 'top',
								// ui: 'footer',
								// defaults: {minWidth: minButtonWidth},
								items : [ {
									xtype : 'textfield',
									itemId : 'cphm',
									fieldLabel : '车牌号码',
									labelWidth : 70
									
								}, {
									xtype : 'textfield',
									itemId : 'yyzh',
									fieldLabel : '营运证号 ',
									labelWidth : 70
								}, {
									xtype : 'textfield',
									itemId : 'dlysz',
									labelWidth : 80,
									fieldLabel : '道路运输证'
								} , {
									xtype : 'button',
									itemId : 'YyclSerch',
									text: '查  询'
								} , {
									xtype : 'button',
									itemId : 'YyclRest',
									text: '重  置'
								}]
							}, {
								xtype : 'pagingtoolbar',
								itemId : 'DeptGridPagingBar',
								store : gridstore,
								dock : 'bottom',
								displayInfo : true
							} ]
						} ]
					} ]
				} ]
			} ]
		});
		me.callParent(arguments);
	}
});

/*
 * 流程监控 Ushine 2016-05-20
 */
/*Ext.define('Basedata.view.BasedataYyclView', {
			extend : 'Ext.container.Container',
			alias : 'widget.BasedataYyclView',

			height : 250,
			width : 400,
			layout : 'border',

			initComponent : function() {
				var me = this;
				Ext.applyIf(me, {
							items : [{
										xtype : 'panel',
										region : 'north',
										//height : 35,
										title : '当前位置：&nbsp;工作流管理&nbsp;&gt;&nbsp;流程监控'
									}, {
										xtype : 'panel',
										region : 'center',
										html : '<iframe width="100%" border="0" height="100%" id="" src="' + __ctxPath
												+ '/test"></iframe>'
									}]
						});
				me.callParent(arguments);
			}
		});*/