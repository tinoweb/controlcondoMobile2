// LOGIN USUARIO DEVICE (VALIDA O LOGIN PELO ID DO DISPOSITIVO)
function login_user_device(){
    //alert('teste');
    if(navigator.connection.type != 'none'){
        //alert('teste2');
        if(device.uuid == null){
            var UUID = '1234567890';
        }else{
            var UUID = device.uuid;
        }
        //alert(UUID);
        $.ajax({
            type       : "POST",
            //url        : "https://leo.controlcondo.com.br/controlcondo/appweb/login.php",
            url        : localStorage.getItem('DOMINIO')+"appweb/login.php",
            crossDomain: true,
            beforeSend : function() { },
            complete   : function() { },
            //data       : {uuid : '123456'}, //local
            data       : {uuid : UUID}, //APP
            dataType   : 'json',
            success    : function(retorno) {
                //alert('teste3');
                if(retorno[0]['error'] == 0){
                    
                    if(retorno[0]['perfil'] > 1){
                        //alert('teste4');
                        afed('#login_perfil,#troca_perfil','#login_ini','','',3,'perfil_login');
                        carrega_user_perfil(retorno[0]['id_usuario']);
   
                        $( "#DADOS #ID_USER_L" ).val(retorno[0]['id_usuario']);
                    }else{
                        if(retorno[0]['usar_control_condo'] == 1){
                            //alert('Perfil:'+retorno[0]['usar_control_condo']);
                            $( "#DADOS #ID_USER" ).val(retorno[0]['id_usuario_condominio']);
                            $( "#DADOS #ID_USER_L" ).val(retorno[0]['id_usuario']);
                            $( "#DADOS #ID_MORADOR" ).val(retorno[0]['id_referencia']);
                            $( "#DADOS #ID_UNIDADE" ).val(retorno[0]['id_unidade']);
                            $( "#DADOS #ID_CONDOMINIO" ).val(retorno[0]['id_condominio']);
                            //alert($( "#DADOS #ID_CONDOMINIO" ).val());                    
                            $( "#DADOS #CONDOMINIO" ).val(retorno[0]['nome_condominio']);
                            if(retorno[0]['GRUPOS'].indexOf("Morador") != -1){ $( "#DADOS #GRUPO_MOR" ).val(1); $( "#gmor" ).css("display","block"); }
                            if(retorno[0]['GRUPOS'].indexOf("Síndico") != -1){ $( "#DADOS #GRUPO_SIN" ).val(1); $( "#gsin" ).css("display","block"); }
                            if(retorno[0]['GRUPOS'].indexOf("Administração") != -1){ $( "#DADOS #GRUPO_ADM" ).val(1); $( "#gadm" ).css("display","block"); }
                            if(retorno[0]['GRUPOS'].indexOf("Administradora") != -1){ $( "#DADOS #GRUPO_ADM2" ).val(1); $( "#gadm2" ).css("display","block"); }
                            if(retorno[0]['GRUPOS'].indexOf("Diretoria") != -1){ $( "#DADOS #GRUPO_DIR" ).val(1); $( "#gdir" ).css("display","block"); }
                            $( "#DADOS #MHOME" ).val(retorno[0]['perfil']);
                            $( "#DADOS #MCOMUNICADOS" ).val(retorno[0]['MHOME']);
                            $( "#DADOS #MLUNICA" ).val(retorno[0]['MLUNICA']);
                            $( "#DADOS #MLRECORRENTE" ).val(retorno[0]['MLRECORRENTE']);
                            $( "#DADOS #MRESERVA" ).val(retorno[0]['MRESERVA']);
                            $( "#DADOS #MENTREGAS" ).val(retorno[0]['MENTREGAS']);
                            $( "#DADOS #MFALE" ).val(retorno[0]['MFALE']);
                            $( "#DADOS #MENQUENTE" ).val(retorno[0]['MENQUENTE']);
                            $( "#DADOS #MDOCUMENTOS" ).val(retorno[0]['MDOCUMENTOS']);
                            $( "#DADOS #MRELATORIOS" ).val(retorno[0]['MRELATORIOS']);
                            $( "#DADOS #CCOMUNICADOS" ).val(retorno[0]['CCOMUNICADOS']);
                            $( "#DADOS #CUNIDADES" ).val(retorno[0]['CUNIDADES']);
                            $( "#DADOS #CMORADORES" ).val(retorno[0]['CMORADORES']);
                            $( "#DADOS #CRESERVA" ).val(retorno[0]['CRESERVA']);
                            $( "#DADOS #CENQUETE" ).val(retorno[0]['CENQUETE']);
                            $( "#DADOS #CDOCUMENTOS" ).val(retorno[0]['CDOCUMENTOS']);
                            $( "#DADOS #NOME_MORADOR" ).val(retorno[0]['nome']);
                            $( "#DADOS #QUADRA" ).val(retorno[0]['rquadra']+' '+retorno[0]['quadra']);
                            $( "#DADOS #LOTE" ).val(retorno[0]['rlote']+' '+retorno[0]['lote']);
                            MORADOR_NOME = retorno[0]['nome'];
                            localStorage.setItem('MORADOR_NOME',MORADOR_NOME);
                            $( "#DADOS #PARENTESCO" ).val(retorno[0]['parentesco']);
                            MORADOR_SEXO = retorno[0]['masculino'];
                            QUADRA = retorno[0]['rquadra']+' '+retorno[0]['quadra'];
							
                            LOTE = retorno[0]['rlote']+' '+retorno[0]['lote'];

                            localStorage.setItem('ROTULO_QUADRA',retorno[0]['rotulo_quadra']);
                            localStorage.setItem('ROTULO_LOTE' ,retorno[0]['rlote']);

                            $( '.user_foto' ).css("background-image", "url(data:image/jpeg;base64,"+retorno[0]['foto']+")");

                            localStorage.setItem('CHAT_EMAIL',retorno[0]['CHAT_EMAIL']);
                            localStorage.setItem('CHAT_TOCA' ,retorno[0]['CHAT_TOCA']);
                            localStorage.setItem('CHAT_VIBRA',retorno[0]['CHAT_VIBRA']);
                            localStorage.setItem('CHAT_MSG'  ,retorno[0]['CHAT_MSG']);

                            localStorage.setItem('COM_EMAIL',retorno[0]['COM_EMAIL']);
                            localStorage.setItem('COM_TOCA' ,retorno[0]['COM_TOCA']);
                            localStorage.setItem('COM_VIBRA',retorno[0]['COM_VIBRA']);
                            localStorage.setItem('COM_MSG'  ,retorno[0]['COM_MSG']);

                            localStorage.setItem('DOC_EMAIL',retorno[0]['DOC_EMAIL']);
                            localStorage.setItem('DOC_TOCA' ,retorno[0]['DOC_TOCA']);
                            localStorage.setItem('DOC_VIBRA',retorno[0]['DOC_VIBRA']);
                            localStorage.setItem('DOC_MSG'  ,retorno[0]['DOC_MSG']);

                            localStorage.setItem('ENQ_EMAIL',retorno[0]['ENQ_EMAIL']);
                            localStorage.setItem('ENQ_TOCA',retorno[0]['ENQ_TOCA']);
                            localStorage.setItem('ENQ_VIBRA',retorno[0]['ENQ_VIBRA']);
                            localStorage.setItem('ENQ_MSG',retorno[0]['ENQ_MSG']);

                            localStorage.setItem('COR_EMAIL',retorno[0]['COR_EMAIL']);
                            localStorage.setItem('COR_TOCA',retorno[0]['COR_TOCA']);
                            localStorage.setItem('COR_VIBRA',retorno[0]['COR_VIBRA']);
                            localStorage.setItem('COR_MSG',retorno[0]['COR_MSG']);

                            afed('#home','#login_ini','','',3,'home');
                            
                            afed('.smenu,#perfil_abre,#perfil','#perfil_edit,#perfil_fecha','','',2);

                            $( ".perfil_condominio" ).html(retorno[0]['nome_condominio']);
                            $( ".perfil_nome" ).html(MORADOR_NOME);
                            $( "#bloco" ).html(QUADRA);
                            $( "#apto" ).html(LOTE);
        //					$( '.user_foto' ).css("background-image", "url("+SERVIDOR_CAMINHO+"appweb/foto_morador.php?id="+ID_MORADOR+"&sexo="+MORADOR_SEXO+")");
                            if($( "<strong>#DADOS #PARENTESCO</strong>" ).val() == 1){ $( "#edit_moradores" ).css("display","block"); }
                            //carrega_notificacoes(1);
                            carrega_notificacoes(0);
                            carrega_chat();
                            inicia(0);
                            localStorage.setItem('TELA_ATUAL','home');	
                            //carrega_liberacao(0);
                        }else{
                            notifica('Perfil/Perfil usuário inválido/Fechar',0,0);
                        }
                                              
                    }
                }else{
                    
                }
            },
            error      : function() {
                notifica('Aviso/Erro ao logar automático/Fechar',0,0);
                  
            }
        }); 
    }
}

// FUNCAO LOGIN USUARIO (LOGIN POR EMAIL/SENHA)
function login_user() {
	if(navigator.connection.type != 'none'){
		var dados = $( "#form_login" ).serialize();
        if(device.uuid == null){
            var UUID = '1234567890';
        }else{
            var UUID = device.uuid;
        }
		//alert(device.uuid);
		//alert("Device: "+device.model+' sistema='+device.platform+' uuid='+UUID+' versao='+device.version+' id_notificacao='+localStorage.getItem('registrationId'));
		
		$.ajax({
			type: 'POST',
			url: localStorage.getItem('DOMINIO')+'appweb/login.php',
            crossDomain: true,
            beforeSend : function() { },
            complete   : function() { },
            dataType   : 'json',
			//data: dados+'&nome=local&sistema=windows&uuid=123456&versao=10', //local
			data: dados+'&nome='+device.model+'&sistema='+device.platform+'&uuid='+UUID+'&versao='+device.version+'&id_notificacao='+localStorage.getItem('registrationId'), //APP
			success: function(retorno){
                console.log(retorno);
				if(retorno[0]['error'] == 1){
					notifica('Falha ao Entrar/Usu\u00e1rio ou senha inv\u00e1lida/Fechar',0,0);
				}else{
					//alert(retorno);
					login_user_device();	
				}
			},
            error: function(){
                notifica('Aviso/Erro de conexão com o servidor/Fechar',0,0);
            }
		});
	}else{
		notifica('Internet/Sem conex\u00e3o com a Internet/Fechar',2000,0)
	}
}

// FUNCAO CARREGA PERFIL
function carrega_user_perfil(id) {
    var dados = '';
	if(navigator.connection.type != 'none'){
		$.ajax({
			type: 'POST',
			url: localStorage.getItem('DOMINIO')+'appweb/login.php',
            crossDomain: true,
            beforeSend : function() { },
            complete   : function() { },
            data       : {id_usuario : id},
            dataType   : 'json',
			success: function(retorno){
                for (x in retorno) {
                    var dado = '<option value="'+retorno[x]['id_usuario_condominio']+'">'+retorno[x]['nome_condominio']+'</option>';
                    dados = dados + dado;
                }
                //alert(dados);
                $('#perfil_login').html(dados);
			}
		});
	}else{
		notifica('Internet/Sem conex\u00e3o com a Internet/Fechar',2000,0);
	}
}

// FUNCAO LOGIN TROCA USUARIO
function select_user(id_usuario_condominio=0) {
	if(navigator.connection.type != 'none'){
        if(id_usuario_condominio == 0){
            var dados = $( "#form_perfil" ).serialize();
        }else{
            var dados = 'perfil='+id_usuario_condominio;
        }
		
		$.ajax({
			type: 'POST',
			url: localStorage.getItem('DOMINIO')+'appweb/login.php',
			data: dados,
			success: function(retorno){
                if(retorno[0]['usar_control_condo'] == 1){
                    $( "#DADOS #ID_USER" ).val(retorno[0]['id_usuario_condominio']);
                    $( "#DADOS #ID_USER_L" ).val(retorno[0]['id_usuario']);
                    $( "#DADOS #ID_MORADOR" ).val(retorno[0]['id_referencia']);
                    $( "#DADOS #ID_UNIDADE" ).val(retorno[0]['id_unidade']);
                    $( "#DADOS #ID_CONDOMINIO" ).val(retorno[0]['id_condominio']);
                    //alert($( "#DADOS #ID_CONDOMINIO" ).val());
                    $( "#DADOS #CONDOMINIO" ).val(retorno[0]['nome_condominio']);
                    if(retorno[0]['GRUPOS'].indexOf("Morador") != -1){ $( "#DADOS #GRUPO_MOR" ).val(1); $( "#gmor" ).css("display","block"); }
                    if(retorno[0]['GRUPOS'].indexOf("Síndico") != -1){ $( "#DADOS #GRUPO_SIN" ).val(1); $( "#gsin" ).css("display","block"); }
                    if(retorno[0]['GRUPOS'].indexOf("Administração") != -1){ $( "#DADOS #GRUPO_ADM" ).val(1); $( "#gadm" ).css("display","block"); }
                    if(retorno[0]['GRUPOS'].indexOf("Administradora") != -1){ $( "#DADOS #GRUPO_ADM2" ).val(1); $( "#gadm2" ).css("display","block"); }
                    if(retorno[0]['GRUPOS'].indexOf("Diretoria") != -1){ $( "#DADOS #GRUPO_DIR" ).val(1); $( "#gdir" ).css("display","block"); }
                    $( "#DADOS #MHOME" ).val(retorno[0]['perfil']);
                    $( "#DADOS #MCOMUNICADOS" ).val(retorno[0]['MHOME']);
                    $( "#DADOS #MLUNICA" ).val(retorno[0]['MLUNICA']);
                    $( "#DADOS #MLRECORRENTE" ).val(retorno[0]['MLRECORRENTE']);
                    $( "#DADOS #MRESERVA" ).val(retorno[0]['MRESERVA']);
                    $( "#DADOS #MENTREGAS" ).val(retorno[0]['MENTREGAS']);
                    $( "#DADOS #MFALE" ).val(retorno[0]['MFALE']);
                    $( "#DADOS #MENQUENTE" ).val(retorno[0]['MENQUENTE']);
                    $( "#DADOS #MDOCUMENTOS" ).val(retorno[0]['MDOCUMENTOS']);
                    $( "#DADOS #MRELATORIOS" ).val(retorno[0]['MRELATORIOS']);
                    $( "#DADOS #CCOMUNICADOS" ).val(retorno[0]['CCOMUNICADOS']);
                    $( "#DADOS #CUNIDADES" ).val(retorno[0]['CUNIDADES']);
                    $( "#DADOS #CMORADORES" ).val(retorno[0]['CMORADORES']);
                    $( "#DADOS #CRESERVA" ).val(retorno[0]['CRESERVA']);
                    $( "#DADOS #CENQUETE" ).val(retorno[0]['CENQUETE']);
                    $( "#DADOS #CDOCUMENTOS" ).val(retorno[0]['CDOCUMENTOS']);
                    $( "#DADOS #NOME_MORADOR" ).val(retorno[0]['nome']);
                    $( "#DADOS #QUADRA" ).val(retorno[0]['rquadra']+' '+retorno[0]['quadra']);
                    $( "#DADOS #LOTE" ).val(retorno[0]['rlote']+' '+retorno[0]['lote']);
                    MORADOR_NOME = retorno[0]['nome'];
                    $( "#DADOS #PARENTESCO" ).val(retorno[0]['parentesco']);
                    MORADOR_PARENTESCO = retorno[0]['parentesco'];
                    MORADOR_SEXO = retorno[0]['masculino'];
                    QUADRA = retorno[0]['rquadra']+' '+retorno[0]['quadra'];
                    LOTE = retorno[0]['rlote']+' '+retorno[0]['lote'];

                    localStorage.setItem('ROTULO_QUADRA',retorno[0]['rotulo_quadra']);
                    localStorage.setItem('ROTULO_LOTE' ,retorno[0]['rlote']);

                    $( '.user_foto' ).css("background-image", "url(data:image/jpeg;base64,"+retorno[0]['foto']+")");
                    localStorage.setItem('CHAT_EMAIL',retorno[0]['CHAT_EMAIL']);
                    localStorage.setItem('CHAT_TOCA',retorno[0]['CHAT_TOCA']);
                    localStorage.setItem('CHAT_VIBRA',retorno[0]['CHAT_VIBRA']);
                    localStorage.setItem('CHAT_MSG',retorno[0]['CHAT_MSG']);

                    localStorage.setItem('COM_EMAIL',retorno[0]['COM_EMAIL']);
                    localStorage.setItem('COM_TOCA',retorno[0]['COM_TOCA']);
                    localStorage.setItem('COM_VIBRA',retorno[0]['COM_VIBRA']);
                    localStorage.setItem('COM_MSG',retorno[0]['COM_MSG']);

                    localStorage.setItem('DOC_EMAIL',retorno[0]['DOC_EMAIL']);
                    localStorage.setItem('DOC_TOCA',retorno[0]['DOC_TOCA']);
                    localStorage.setItem('DOC_VIBRA',retorno[0]['DOC_VIBRA']);
                    localStorage.setItem('DOC_MSG',retorno[0]['DOC_MSG']);

                    localStorage.setItem('ENQ_EMAIL',retorno[0]['ENQ_EMAIL']);
                    localStorage.setItem('ENQ_TOCA',retorno[0]['ENQ_TOCA']);
                    localStorage.setItem('ENQ_VIBRA',retorno[0]['ENQ_VIBRA']);
                    localStorage.setItem('ENQ_MSG',retorno[0]['ENQ_MSG']);

                    localStorage.setItem('COR_EMAIL',retorno[0]['COR_EMAIL']);
                    localStorage.setItem('COR_TOCA',retorno[0]['COR_TOCA']);
                    localStorage.setItem('COR_VIBRA',retorno[0]['COR_VIBRA']);
                    localStorage.setItem('COR_MSG',retorno[0]['COR_MSG']);
                    afed('#home','#login_perfil','','',3,'home');
                 

                    $( ".perfil_condominio" ).html(retorno[0]['nome_condominio']);
                    $( ".perfil_nome" ).html(MORADOR_NOME);
                    $( "#bloco" ).html(QUADRA);
                    $( "#apto" ).html(LOTE);
    //					$( '.user_foto' ).css("background-image", "url("+SERVIDOR_CAMINHO+"appweb/foto_morador.php?id="+ID_MORADOR+"&sexo="+MORADOR_SEXO+")");
                    if(MORADOR_PARENTESCO == 1){ $( "#edit_moradores" ).css("display","block"); }
                    //carrega_notificacoes(1);
                    carrega_notificacoes(0);
                    carrega_chat();
                    inicia(0);
                    localStorage.setItem('TELA_ATUAL','home');	
                    //carrega_liberacao(0);
                }else{
                    notifica('Perfil/Perfil usuário inválido/Fechar',0,0);
                }
             
			}
		});
	}else{
		notifica('Internet/Sem conex\u00e3o com a Internet/Fechar',2000,0);
	}
}

// FUNCAO lOGOUT 
function logout(){
	inicia2(0);

	$.ajax({
		type: 'POST',
		url: localStorage.getItem('DOMINIO')+'appweb/logout.php',
		data: 'id='+$( "#DADOS #ID_USER_L" ).val(),
		success: function(retorno){
			afed('#login_ini','#home','','',2,'tela_login');
          

		}
	});
}

function perfil_notificacao(id_condominio){
	$.ajax({
		type: 'POST',
		url: localStorage.getItem('DOMINIO')+'appweb/usuario_perfil_get.php',
		data: 'id_usuario='+$( "#DADOS #ID_USER_L" ).val()+'&id_condominio='+id_condominio,
        crossDomain: true,
        beforeSend : function() { },
        complete   : function() { },
        dataType   : 'json',
		success: function(retorno){
            //alert(retorno[0]['id_usuario_condominio']);
            select_user(retorno[0]['id_usuario_condominio']);
            var id_reg    = localStorage.getItem("NOT_ID");
            var tipo      = localStorage.getItem("NOT_TYPE");
            window.setTimeout(function() {
                if(id_reg > 0){
                    if(tipo==1){
                        carrega_comunicado(id_reg);
                    }else if(tipo==2){
                        carrega_documentos(0);
                    }else if(tipo==3){
                        carrega_enquete(id_reg);
                    }else if(tipo==4){
                        inicia2(1);
                        carrega_chat();
                    }
                }
            }, 500);
            clearInterval(intervalo);
		}
	});
}