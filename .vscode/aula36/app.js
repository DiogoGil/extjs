Ext.define('Curso.Janela',{
    extend: 'Ext.window.Window',

    heigth: 400,
    width: 500,
    title: 'Aula 36 - Border Layout',

    autoShow: true,

    autoScroll: true,

    layout: 'border',

    items: [
        {
            xtype: 'panel',
            title: 'Painel 1',
            html: 'centro',
            region: 'center',
        },{
            xtype: 'panel',
            title: 'Painel 2',
            html: 'oeste',
            region: 'west',
            width: '10%',
            collapsible: true,
            split: true,
        },{
            xtype: 'panel',
            title: 'Painel 3',
            html: 'leste',
            region: 'east',
            width: '10%',
            collapsible: true,
            split: true,
        },{
            xtype: 'panel',
            title: 'Painel 4',
            html: 'norte',
            region: 'north',
            width: '10%',
            collapsible: true,
            split: true,
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})