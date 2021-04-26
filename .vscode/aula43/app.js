Ext.onReady(function() {
    Ext.create('Ext.container.Viewport',{
        layout: 'border',
        items: [{
            region: 'north',
            html: <h1 class="x-panel-header">Page Title</h1>,
            border: false,
            margins: '0 0 5 0'
        },{
            region: 'west',
            collapsible: true,
            title: 'Navigation',
            width: 150
        },{
            region: 'south',
            title: 'South Panel',
            collapsible: true,
            html: 'Information goes here',
            split: true,
            height: 100,
            minHeight: 100,
        },{
            region: 'east',
            title: 'East Panel',
            collapsible: true,
            split: true,
            width: 150,
        },{
            region: 'center',
            xtype: 'tabpanel',
            activeTab: 0,
            items: {
                title: 'Default Table',
                html :'The first tab\'s content. Others may be added dynamically.',
            }
        }]
    })
})