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
            x:  10 -10,
            y: 10,
            html: 'conteúdo do painel 1',
        },{
            xtype: 'panel',
            title: 'Painel 2',
            x: 50 -50,
            y: 70,
            html: 'conteúdo do painel 2',
        }//,{
        //     xtype: 'panel',
        //     title: 'Painel 3',
        // }
    ]
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})