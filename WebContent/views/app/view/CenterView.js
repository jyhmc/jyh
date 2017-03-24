Ext.define('yzzc.view.CenterView', {
	extend : 'Ext.container.Container',
	 alias:'widget.CenterView',
	// extend : 'Ext.tab.Panel',
	initComponent : function() {
		Ext.apply(this, {
			id : 'content-panel',
			region : 'center',
			defaults : {
				autoScroll : true
			},
			style : {
				'background-color' : '#ffffff'
			},
			layout : 'fit',
			//border : false,
			items : [
				{    
				    xtype:'chart',
				    width: 500,
				    height: 300,
				    animate: true,
				    store: Ext.create('Ext.data.JsonStore', {
				        fields: ['name', 'data'],
				        data: [
				            { 'name': 'metric one',   'data':10 },
				            { 'name': 'metric two',   'data': 7 },
				            { 'name': 'metric three', 'data': 5 },
				            { 'name': 'metric four',  'data': 7 },
				            { 'name': 'metric five',  'data':15 },
				            { 'name': 'metric six',   'data':10 },
				            { 'name': 'metric seven', 'data': 7 },
				            { 'name': 'metric three', 'data': 5 },
				            { 'name': 'metric four',  'data': 8 },
				            { 'name': 'metric five',  'data':15 },
				            { 'name': 'metric one',   'data':10 },
				            { 'name': 'metric two',   'data': 7 },
				            { 'name': 'metric three', 'data': 5 },
				            { 'name': 'metric four',  'data': 9 },
				            { 'name': 'metric five',  'data':16 },
				            { 'name': 'metric six',   'data':10 },
				            { 'name': 'metric seven', 'data': 7 },
				            { 'name': 'metric three', 'data': 5 },
				            { 'name': 'metric four',  'data': 6 }
				        ]
				    }),
				    axes: [
				        {
				            type: 'Numeric',
				            position: 'left',
				            fields: ['data'],
				            label: {
				                renderer: Ext.util.Format.numberRenderer('0,0')
				            },
				            title: 'Sample Values',
				            grid: true,
				            minimum: 0
				        },
				        {
				            type: 'Category',
				            position: 'bottom',
				            fields: ['name'],
				            title: 'Sample Metrics'
				        }
				    ],
				    series: [
				        {
				            type: 'column',
				            axis: 'left',
				            highlight: true,
				            tips: {
				              trackMouse: true,
				              width: 140,
				              height: 28,
				              renderer: function(storeItem, item) {
				                this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data') + ' $');
				              }
				            },
				            label: {
				              display: 'insideEnd',
				              'text-anchor': 'middle',
				                field: 'data',
				                renderer: Ext.util.Format.numberRenderer('0'),
				                orientation: 'vertical',
				                color: '#333'
				            },
				            xField: 'name',
				            yField: 'data'
				        }
				    ]
			}
			
		]
		});
		this.callParent(arguments);
	}
})
