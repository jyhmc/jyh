Ext.define('Basedata.store.BasedataYtqyStore', {
    extend: 'Ext.data.Store',
    alias:'store.BasedataYtqyStore',
    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Basedata.model.BasedataYtqyModel',
            proxy: {
                type:'ajax',
                url :__ctxPath + '/base/selectByPid',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});