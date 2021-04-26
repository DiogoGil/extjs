Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 37 - Fit Layout',

    autoShow: true,

    autoScroll: true,

    layout: 'fit',

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'fit layout'
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})