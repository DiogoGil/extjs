Ext.create('Ext.data.Store',{
    storeId: 'simpsonsStore',
    fields: ['name', 'email', 'phone'],
    data: {'itens': [
        {'name': 'Lisa', 'email': 'lisa@simpsons.com', 'phone':'555-222-111'},
        {'name': 'Bart', 'email': 'bart@simpsons.com', 'phone':'555-222-111'},
        {'name': 'Homer', 'email': 'homer@simpsons.com', 'phone':'555-222-111'},
        {'name': 'Marge', 'email': 'marge@simpsons.com', 'phone':'555-222-111'}
    ]},
    proxy: {type: 'memory',
    reader:{
        type: 'json',
        root: 'items'
    }}
})

Ext.define('Curso.Grid',{
    extend: 'Ext.panel.Grid',

    title: 'Aula 43',
    store: Ext.data.StoreManager.lookup('simpsonsStore'),
    columns: [
        {text: 'Name', dataIndex: 'name'},
        {text: 'Email', dataIndex: 'email',flex: 1},
        {text: 'Phone', dataIndex: 'phone'}
    ],
    height: 200,
    width: 400,
    renderTo: Ext.getBody(),
});

Ext.onReady(function(){
    Ext.create('Curso.Janela');
})