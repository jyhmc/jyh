Ext.define('System.store.DeptTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias:'store.DeptTreeStore',
    requires: [
        'System.model.DeptTreeModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	autoLoad:true,
            model: 'System.model.DeptTreeModel',
            defaultRootId :0,
            root : {
				text : '组织机构',
				expanded:true
			},
            proxy: {
                type:'ajax',
                url :__ctxPath + '/sys/selectByLogin',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});