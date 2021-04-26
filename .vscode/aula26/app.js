Ext.onReady(function(){
    Ext.create('Ext.Button',{
        text: 'Botão pequeno',
        renderTo: 'btn1',
        handler: function(){
            console.log('Botão pequeno')
        }
    });
    Ext.create('Ext.Button',{
        text: 'Botão médio',
        renderTo: 'btn2',
        scale: 'medium',
        handler: function(){
            console.log('Botão médio')
        }
    });
    Ext.create('Ext.Button',{
        text: 'Botão grande',
        renderTo: 'btn3',
        scale: 'large',
        handler: function(){
            console.log('Botão grande')
        }
    });
    Ext.create('Ext.Button',{
        renderTo: 'btn4',
        iconCls: 'add',
        handler: function(){
            console.log('Botão icon pequeno')
        }
    });
    Ext.create('Ext.Button',{
        renderTo: 'btn5',
        iconCls: 'add',
        scale: 'medium',
        handler: function(){
            console.log('Botão icon médio')
        }
    });
    Ext.create('Ext.Button',{
        renderTo: 'btn6',
        iconCls: 'add',
        scale: 'large',
        handler: function(){
            console.log('Botão icon grande')
        }
    });
    Ext.create('Ext.Button',{
        text: 'Botão pequeno',
        renderTo: 'btn7',
        iconCls: 'add',
        iconAlign: 'top',
        toggleHandler: function(btn, state){
            console.log(state);
        }
    });
    Ext.create('Ext.Button',{
        text: 'Botão médio',
        renderTo: 'btn8',
        iconCls: 'add',
        iconAlign: 'top',
        scale: 'medium',
        toggleHandler: function(btn, state){
            console.log(state);
        }
    });
    Ext.create('Ext.Button',{
        text: 'Botão grande',
        renderTo: 'btn9',
        iconCls: 'add',
        iconAlign: 'top',
        scale: 'large',
        toggleHandler: function(btn, state){
            console.log(state);
        }
    });

    Ext.create('Ext.button.Split', {
        renderTo: 'btn10',
        text: 'Options',
        tooltip: 'tooltip do botao',
        handler: function() {
            console.log("The Button Was Cliked");
        },
        menu: Ext.create('Ext.menu.Menu',{
            items: [
                {text: 'Item 1', handler: function(){console.log('Item 1 Was Clicked');}},
                {text: 'Item 2', handler: function(){console.log('Item 2 Was Clicked');}}
            ]
        })
    });
});