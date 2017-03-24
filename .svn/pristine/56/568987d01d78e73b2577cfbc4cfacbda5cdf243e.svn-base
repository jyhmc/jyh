Ext.define('System.store.DemoStore', {
    extend: 'Ext.data.Store',
    alias:'store.DemoStore',
    requires: [
        'System.model.DemoModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
        	autoLoad:true,
        	//autoDestroy: true,
            pageSize:10,
            model: 'System.model.DemoModel',
            proxy: {
                type:'ajax',
                url :__ctxPath + '/test',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});