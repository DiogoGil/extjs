Ext.onReady(function(){
   
    Ext.tip.QuickTipManager.init();

    Ext.create('Ext.menu.Menu', {
        width: 200,
        margin: '0 0 10 0',
        floating: false,
        renderTo: 'menu1',
        allowOtherMenus: true,
        items: [{
            text: 'regular item 1',
            iconCls: 'icone'
        },{
            text: 'regular item 2'
        },{
           xtype: 'menuseparator' 
        },{
            text: 'regular item 3',
            menu: Ext.create('Ext.menu.Menu',{
                items: [{
                    text: 'submenu 1'
                },{
                    text: 'submenu 2',
                    menu: Ext.create('Ext.menu.Menu',{
                        items: [{
                            text: 'sub-submenu',
                            handler: function() {
                                Ext.Msg.alert('sub-submenu')
                            }
                        }]
                    })
                },{
                    text: 'submenu 3'
                }]
            })
        },{ 
            text: 'escolha uma data',
            menu: Ext.create('Ext.menu.DatePicker',{
                handler: function(dp, date){
                    Ext.Msg.alert('Date Selected','You selected' + Ext.Date.format(date, 'M j, Y'));
                }
            })
        },{
            text: 'escolha uma cor',
            menu: Ext.create('Ext.menu.ColorPicker',{
                value: '000000',
                listeners: {
                    select: {
                        element: 'el',
                        fn:function(menu, color, opt){
                            Ext.Msg.alert('Color Selected', 'You selected' + color)
                        }
                    }
                }
            })
        }]
    });

    Ext.create('Ext.menu.Menu', {
        width: 100,
        plain: true,
        floating: false,
        renderTo: 'menu2',
        items: [{
            text: ' plain item 1'
        },{
            text: ' plain item 2'
        },{
            text: ' plain item 3'
        }]
    });
});