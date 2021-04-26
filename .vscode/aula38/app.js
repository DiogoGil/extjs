Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 38 - card Layout',

    autoShow: true,

    autoScroll: true,

    layout: 'card',

    activeItem: 0,

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Card 1',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'Next',
                    handler: function(btn, e, eOpts) {
                        var win = btn.up('window');
                        win.getLayout().setActiveItem(1);
                    }
                }]
            }]
        },{
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Card 2',
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                items: [{
                    text: 'voltar',
                    handler: function(btn, e, eOpts) {
                        var win = btn.up('window');
                        win.getLayout().setActiveItem(0);
                    }
                }]
            }]
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})