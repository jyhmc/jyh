Ext.define('System.controller.SystemCtlr', {
	extend : 'Ext.app.Controller',
	alias : 'controller.SystemCtlr',
	views : ['SystemView'],
	refs : [{
				ref : 'SystemListGrid',
				selector : 'SystemView gridpanel[itemId=DataUploadListGrid]'
			}

	],
	

	
	onTaskDataDeleteBtnclick : function() {
		var me = this;
		Ext.Ajax.request({
					method : 'POST',
					url : __ctxPath + '/dataupload/deleteTaskData.do',
					params : {
						"taskId" : '',
						"cabin" : ''
					},
					success : function(response) {
						Ext.ux.Toast.msg("提示", "操作成功！");
					}
				});

	},


	init : function(application) {
		this.control({
					"DataUploadView" : {
		               // afterrender : this.onDataUploadViewAfterrender
					}
					
				});
	}
});