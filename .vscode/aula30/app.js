Ext.define('Blog.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    aklias: 'widget.minhaToolbar',
    //renderTo: Document.body,
    width: 500,
    items: [
        {xtype: 'tbfill'},
        {text: 'Button'},
        {xtype: 'tbspacer', width: 20},
        {xtype: 'splitbutton', text: 'splitbutton'},
        {xtype: 'tbspacer'},
        {xtype: 'tbseparator'},
        {xtype: 'tbspacer'},
        {xtype: 'button', text: 'B'},
        {xtype: 'button', text: 'I'},
        {xtype: 'button', text: 'U'}
    ]
})

Ext.onReady(function(){

    Ext.create('Ext.panel.Panel', {
        title: 'aula 30 - extjs4',
        width: 400,
        heigth: 400,
        renderTo: Ext.getBody(),
        hmtl: 'any content',
        dockedItems: [
            {xtype: 'minhaToolbat', dock: top},
        ]
    });
});