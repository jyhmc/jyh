Ext.define('System.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias:'store.MenuTreeStore',
    requires: [
        'System.model.MenuTreeModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	autoLoad:true,
            model: 'System.model.MenuTreeModel',
            defaultRootId :0,
            root : {
				text : '功能权限',
				expanded:true
			},
            proxy: {
                type:'ajax',
                url :__ctxPath + '/sys/selectMenu',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});