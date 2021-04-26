Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 34 - Acordion Layout',

    autoShow: true,

    autoScroll: true,

    layout: 'accordion',

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
        },{
            xtype: 'panel',
            title: 'Painel 2',
        },{
            xtype: 'panel',
            title: 'Painel 3',
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})