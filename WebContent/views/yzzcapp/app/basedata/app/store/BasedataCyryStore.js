Ext.define('Basedata.store.BasedataCyryStore', {
    extend: 'Ext.data.Store',
    alias:'store.BasedataCyryStore',
    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'Basedata.model.BasedataCyryModel',
            proxy: {
                type:'ajax',
                url :__ctxPath + '/base/selectCyry',
                reader:{
                	type:'json',
                	root:'result'
                }
            }
        }, cfg)]);
    }
});