Ext.define('System.store.DeptGridStore', {
    extend: 'Ext.data.Store',
    alias:'store.DeptGridStore',
    requires: [
        'System.model.DeptTreeModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'System.model.DeptTreeModel',
            proxy: {
                type:'ajax',
                url :__ctxPath + '/sys/selectByPid',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});