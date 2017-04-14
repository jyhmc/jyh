Ext.define('Basedata.store.BasedataYyclStore', {
    extend: 'Ext.data.Store',
    alias:'store.BasedataYyclStore',
    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Basedata.model.BasedataYyclModel',
            proxy: {
                type:'ajax',
                url :__ctxPath + '/base/selectYycl',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});