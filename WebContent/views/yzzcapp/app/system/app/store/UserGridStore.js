Ext.define('System.store.UserGridStore', {
    extend: 'Ext.data.Store',
    alias:'store.UserGridStore',
    requires: [
        'System.model.UserGridModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'System.model.UserGridModel',
            proxy: {
                type:'ajax',
                url :__ctxPath + '/sys/selectByDeptId',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});