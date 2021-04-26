Ext.onReady(function(){

    Ext.create('Ext.Button', {
        text: 'Alert',
        renderTo: 'btnAlert',
        handler: function() {
            Ext.messageBox.alert('Alerta', 'Simples Alerta', function(btn){
                console.log('Apertou o Botão ' + btn)
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Confirm',
        renderTo: 'btnConfirm',
        handler: function() {
            Ext.messageBox.confirm('Confirmação', 'Simples Confirmação', function(btn){
                console.log('Apertou o Botão ' + btn);
                if(btn == 'yes') {
                    Ext.messageBox.alert('Mensagem', 'Registro deletado com sucesso!');
                }
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Prompt',
        renderTo: 'btnPrompt',
        handler: function() {
            Ext.messageBox.prompt('Prompt', 'Qual seu nome?', function(btn, text){
                console.log('Apertou o Botão ' + btn);
                console.log('Inseriu texto: ' + text)
                if(btn == 'ok') {
                    Ext.messageBox.alert('Mensagem', 'Bem Vindo(a) ' + text);
                }
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Prompt',
        renderTo: 'btnPromptMult',
        handler: function() {
            Ext.messageBox.prompt('Prompt', 'Qual seu nome?', function(btn, text){
                console.log('Apertou o Botão ' + btn);
                console.log('Inseriu texto: ' + text)
                if(btn == 'ok') {
                    Ext.messageBox.alert('Mensagem', 'Bem Vindo(a) ' + text);
                }
            },this, true, 'Descreva seus gostos...');
        }
    });
    Ext.create('Ext.Button', {
        text: 'Icone - ERROR',
        renderTo: 'btnError',
        handler: function() {
            Ext.messageBox.show({
                title: 'Error!',
                msg: 'Simples Erro',
                icon: Ext.messageBox.ERROR
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Icone - INFO',
        renderTo: 'btnInfo',
        handler: function() {
            Ext.messageBox.show({
                title: 'Info!',
                msg: 'Registro Deletado com Sucesso!',
                icon: Ext.messageBox.INFO
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Icone - QUESTION',
        renderTo: 'btnQuest',
        handler: function() {
            Ext.messageBox.show({
                title: 'Question!',
                msg: 'Tem Certeza do Que Está Fazendo?!',
                icon: Ext.messageBox.QUESTION
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Icone - WARNING',
        renderTo: 'btnWarn',
        handler: function() {
            Ext.messageBox.show({
                title: 'Warning!',
                msg: 'Tem Certeza do Que Está Fazendo? Esta Operação Não poderá ser Desfeita!',
                icon: Ext.messageBox.WARNING
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - CANCEL',
        renderTo: 'btnCancel',
        handler: function() {
            Ext.messageBox.show({
                title: 'Cancel!',
                msg: 'Tem Certeza do Que Está Fazendo?!',
                buttons: Ext.MessageBox.CANCEL,
                fn: function(btn) {console.log('Apertou o botão' + btn)}
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - NO',
        renderTo: 'btnNo',
        handler: function() {
            Ext.messageBox.show({
                title: 'NO!',
                msg: 'Tem Certeza do Que Está Fazendo?!',
                buttons: Ext.MessageBox.NO,
                fn: function(btn) {console.log('Apertou o botão' + btn)}
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - OK',
        renderTo: 'btnOk',
        handler: function() {
            Ext.messageBox.show({
                title: 'OK!',
                msg: 'melhor fala do lol?',
                buttons: Ext.MessageBox.OK,
                fn: function(btn) {console.log('Apertou o botão' + btn)}
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - OKCANCEL',
        renderTo: 'btnOkcancel',
        handler: function() {
            Ext.messageBox.show({
                title: 'OKCANCEL!',
                msg: 'Deseja cancelar a operação?',
                buttons: Ext.MessageBox.OKCANCEL,
                fn: function(btn) {
                    console.log('Apertou o botão' + btn);
                    if(btn == 'ok'){
                        Ext.messageBox.alert('operação cancelada')
                    } else if(btn == 'cancel'){
                        Ext.messageBox.alert('operação cancelada')
                    }
                }
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - YES',
        renderTo: 'btnYes',
        handler: function() {
            Ext.messageBox.show({
                title: 'YES!',
                msg: 'Qual sua Idade?',
                buttons: Ext.MessageBox.YES,
                fn: function(btn) {console.log('Apertou o botão' + btn)}
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - YESNO',
        renderTo: 'btnYesno',
        handler: function() {
            Ext.messageBox.show({
                title: 'YESNO!',
                msg: 'Qual sua Idade?',
                buttons: Ext.MessageBox.YESNO,
                fn: function(btn) {
                    console.log('Apertou o botão' + btn);
                    if (btn == 'yes'){
                        Ext.messageBox.alert('Yes!')
                    } else if (btn == 'no'){
                        Ext.messageBox.alert('No!')
                    }
                }
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - YESNOCANCEL',
        renderTo: 'btnYesnocancel',
        handler: function() {
            Ext.messageBox.show({
                title: 'YESNOCANCEL!',
                msg: 'Deseja cancelar a operação?',
                buttons: Ext.MessageBox.YESNOCANCEL,
                fn: function(btn) {
                    console.log('Apertou o botão' + btn);
                    if (btn == 'yes'){
                        Ext.messageBox.alert('Operação cancelada!')
                    } else if (btn == 'no'){
                        Ext.messageBox.alert('Ok, Operação cancelada')
                    } else if (btn == 'cancel'){
                        Ext.messageBox.alert('Operação cancelada')
                    }
                }
            });
        }
    });
    Ext.create('Ext.Button', {
        text: 'SHOW - PROGRESS',
        renderTo: 'btnProgress',
        handler: function() {
            Ext.messageBox.show({
                title: 'Progresso',
                msg: 'Loading Data',
                progressText: 'Carregando...',
                progress: true,
                closable: false,
                width: 300,
            });
            var f = function(v){
                return function(){
                    if(v == 12){
                        Ext.messageBox.hide();
                        Ext.messageBox.alert('Show!', 'Dados Carregados!');
                    } else {
                        var i = v/11;
                        Ext.messageBox.updateProgress(i, Math.round(100*i) + '%')
                    }
                };
            }
            for(var i=1; i<13; i++){
                setTimeout(f(i),i*500);
            }
        }
    });
    Ext.create('Ext.Button', {
        text: 'SHOW - WAIT',
        renderTo: 'btnWait',
        handler: function() {
            Ext.messageBox.show({
                title: 'Aguarde',
                msg: 'Saving Data',
                wait: true,
                waitConfig: {interval: 200},
                closable: false,
                width: 300,
            });
            setTimeout(function(){
                Ext.messageBox.hide;
                Ext.messageBox.alert('Show!', 'Os Dados Foram Salvos!');
            }, 8000);        
        }
    });
    Ext.create('Ext.Button', {
        text: 'Botão - CUSTOM',
        renderTo: 'btnYesnocancelcustom',
        handler: function() {
            Ext.messageBox.show({
                title: 'CUSTOM!',
                msg: 'Deseja cancelar a operação?',
                buttons: Ext.MessageBox.YESNOCANCEL,
                buttonText: {
                    yes: 'Sim',
                    no: 'Não',
                    cancel: 'Cancelar'
                },
                fn: function(btn) {
                    console.log('Apertou o botão' + btn);
                    if (btn == 'yes'){
                        Ext.messageBox.alert('Operação cancelada!')
                    } else if (btn == 'no'){
                        Ext.messageBox.alert('Ok, Operação cancelada')
                    } else if (btn == 'cancel'){
                        Ext.messageBox.alert('Operação cancelada')
                    }
                }
            });
        }
    });
});