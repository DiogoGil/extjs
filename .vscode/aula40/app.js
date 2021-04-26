Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 40 - Hbox Layout',

    autoShow: true,

    // autoScroll: true,

    layout: {
        type: 'hbox',
        //align: 'stretchmax'
    },
    
    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Hbox 1',
            flex: 1,
        },{
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Hbox 2',
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
            heigth: 300,
            flex: 1,
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})