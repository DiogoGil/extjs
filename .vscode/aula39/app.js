Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 39 - column Layout',

    autoShow: true,

    autoScroll: true,

    layout: 'column',

    activeItem: 0,

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'Card 1',
            columnWidth: 0.5,
        },{
            xtype: 'panel',
            title: 'Painel 2',
            html: 'Card 2',
            columnWidth: 0.5,
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})