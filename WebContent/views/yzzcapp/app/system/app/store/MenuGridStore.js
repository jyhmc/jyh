Ext.define('System.store.MenuGridStore', {
    extend: 'Ext.data.Store',
    alias:'store.MenuGridStore',
    requires: [
        'System.model.MenuGridModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'System.model.MenuGridModel',
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