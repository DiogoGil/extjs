Ext.define('Curso.Grid',{
    extend: 'Ext.panel.Grid',

    heigth: 400,
    width: 500,
    title: 'Aula 43',

    autoShow: true,

    // autoScroll: true,

    layout: {
        type: 'table'/*,
        align: 'stretch'*/
    },
    
    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Hbox 1',
            width: '200',
            flex: 1,
        },{
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Hbox 2',
            width: '400',
            flex: 1,
        },{
            xtype: 'panel',
            title: 'Painel 3',
            html: 'Hbox 3',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'Next'
                }]
            }],
            width: '100%',
            flex: 1,
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})