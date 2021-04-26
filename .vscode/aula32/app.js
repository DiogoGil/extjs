Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 32 - Auto Layout',

    autoShow: true,

    autoScroll: true,

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            heigth: 100
        },{
            xtype: 'panel',
            title: 'Painel 2',
            heigth: 150,
            width: 400
        },{
            xtype: 'panel',
            title: 'Painel 3',
            heigth: 120,
            width: 450,
        },{
            xtype: 'panel',
            title: 'Painel 4',
            heigth: 50
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})