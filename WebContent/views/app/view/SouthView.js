Ext.define('yzzc.view.SouthView', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.SouthView',
	initComponent : function() {
		Ext.apply(this, {
			id : "mainSouth",
			region : 'south',
			height : 30,
			titleAlign : 'center',
			title : '版权所有 © 2015-2018 陕西安裕智能科技有限公司 陕ICP备14009770号-1'
		});
		this.callParent(arguments);
	}
})
