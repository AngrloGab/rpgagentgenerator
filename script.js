
function finish(){
    var nome = document.getElementById('nome').value;
    var codnome = document.getElementById('codnome').value;
    var idade = document.getElementById('idade').value;
    var classe = document.getElementById("classe").value; 
    var background = document.getElementById("background").value;
    
    var hit_points =  document.getElementById('hit-points').innerText;
    var tipo_armadura = document.getElementById('tipo-armadura').innerText;
    var arma_distancia = document.getElementById('tipo-distancia').innerText;
    var arma_corpo_a_corpo = document.getElementById('tipo-corpoacorpo').innerText;
    var ferramentas = document.getElementById('ferramentas').innerText;
    var savingTrhow =  document.getElementById('trhows').innerText;

    var forca = document.getElementById('forca_carac').value;
    var destreza = document.getElementById('dez_carac').value;
    var constituicao = document.getElementById('con_carac').value;
    var inteligencia = document.getElementById('int_carac').value;
    var sabedoria = document.getElementById('sab_carac').value;
    var carisma = document.getElementById('car_carac').value;

    var equipamento1 = document.getElementById('equipamento1').value;
    var equipamento2 = document.getElementById('equipamento2').value;
    var equipamento3 = document.getElementById('equipamento3').value;
    var equipamento4 = document.getElementById('equipamento4').value;

    var checkboxes = document.querySelectorAll('.checkbox')
    for(var c of checkboxes){
        if(c.checked){
            alert(c.value);
        }
    }
}
    
    





function playSound(audioName){
    let audio = new Audio(audioName);
    audio.play()
}


var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
const pontos_disponiveis = document.querySelector("#pontos-disponiveis");

var pontos_para_aumentar = 15;

for(var i=0; i < incrementButton.length; i++){
    var button = incrementButton[i];
    button.addEventListener('click',function(event){
        playSound("sons\\select.wav");

        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;
        if (pontos_para_aumentar > 0){
            if(inputValue<16){
                backUp = pontos_para_aumentar;
                if(inputValue==8){
                    pontos_para_aumentar-=1;
                }
                else if(inputValue==9){
                    pontos_para_aumentar-=2;
                }
                
                
                if(inputValue==10){
                    
                    pontos_para_aumentar-=1;
                }
                else if(inputValue==11){
                    pontos_para_aumentar-=2;
                }
                else if(inputValue==12){
                    pontos_para_aumentar-=3;
                }
                else if(inputValue==13){
                    
                    pontos_para_aumentar-=5;
                }
                else if(inputValue==14){
                    pontos_para_aumentar-=7;
                }
                else if(inputValue==15){
                    pontos_para_aumentar-=10;
                }

                if(pontos_para_aumentar < 0){
                    pontos_para_aumentar = backUp
                }
                else{
                    var newValue = parseInt(inputValue) + 1;
                    input.value = newValue;
                }
                
            }
           
            
            pontos_disponiveis.innerText = pontos_para_aumentar;
        }

    })
}


for(var i=0; i < decrementButton.length; i++){
    var button = decrementButton[i];
    button.addEventListener('click',function(event){
        playSound("sons\\select.wav");

        var buttonClicked = event.target;
        var input = buttonClicked.parentElement.children[2];
        var inputValue = input.value;

        if(inputValue > 8){
            if(inputValue == 9){
                pontos_para_aumentar+=2;
            }
            else if(inputValue == 10){
                pontos_para_aumentar+=1;
            }

            var newValue = parseInt(inputValue) - 1;
            input.value = newValue;
            
        }
        pontos_disponiveis.innerText = pontos_para_aumentar;

    })
}


const $checkbox = document.querySelector('#classe');
$checkbox.addEventListener('change', function(){
    var selectedValue = document.getElementById("classe").value;
    
    playSound("sons\\select.wav");

    const descClass = document.querySelector("#descricao-c");
    const hitPoints = document.querySelector("#hit-points");
    const tipoArmadura = document.querySelector("#tipo-armadura");
    const armaDistancia = document.querySelector("#tipo-distancia");
    const armaPerto = document.querySelector("#tipo-corpoacorpo");
    const ferramentas = document.querySelector("#ferramentas");
    const savingTrhow = document.querySelector("#trhows");
    const veicles = document.querySelector("#Veiculos");
    const skills = document.querySelector("#Skills");
    const equipamento = document.querySelector("#Equipamento");

    if (selectedValue == "Hacker"){
        document.getElementById('imgfundo').src="classes\\hacker.png";
        descClass.innerText = "O Hacker ?? visto atrav??s de seu trabalho mais do que qualquer outro agente. Portas travadas eletricamente abrem em um capricho, os oleodutos explodem e os computadores concedem acesso com algumas linhas de c??digo. Eles sentem seu caminho para sistemas de computador com a mesma facilidade com que o infiltrador se infiltra em ??reas restritas e pode causar ainda mais danos.";
        
        hitPoints.innerText = "1d6 + modificador de constitui????o";
        tipoArmadura.innerText = "Armadura leve";
        armaDistancia.innerText = "Armas de dist??ncia simples";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Ferramentas de hacking";
        savingTrhow.innerText = "Intelig??ncia e carisma";
        veicles.innerHTML = "<strong>Ve??culo </strong>(apenas um)<strong>:</strong> <br> <input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\" class=\"checkbox\">  <label for=\"veiculo1\"> motos </label> <input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\" class=\"checkbox\"> <label for=\"veiculo2\"> carros </label>"
        skills.innerHTML = "<strong>Skills </strong>(quatro)<strong>:</strong> <br> <input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Deception\" class=\"checkbox\"> <label for=\"skill1\"> Deception </label> <input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Espionage\" class=\"checkbox\"> <label for=\"skill2\"> Espionage </label> <input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\" class=\"checkbox\"> <label for=\"skill3\"> Infiltration </label> <input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"infotech\" class=\"checkbox\"><label for=\"skill4\"> Infotech </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Mechanics\" class=\"checkbox\"><label for=\"skill5\"> Mechanics </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Persuasion\" class=\"checkbox\"><label for=\"skill6\"> Persuasion </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Persuasion\" class=\"checkbox\"> <label for=\"skill7\"> Sleigth of hand </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Stealth\" class=\"checkbox\"><label for=\"skill8\"> Stealth </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong> <br> equipamento1: <select id= \"equipamento1\"> <option selected disabled value=\"\">Selecione</option> <option>laptop</option> <option>tablet</option></select><br>equipamento2:<select id=\"equipamento2\"><option selected disabled value=\"\">Selecione</option><option>Taser</option><option>Bast??o</option></select><br>equipamento3:<select id=\"equipamento3\"><option>Roupa acolchoada/roupa de couro</option></select><br>equipamento4:<select id=\"equipamento4\"><option selected disabled value=\"\">Selecione</option><option>Pack de trabalho a prova de ??gua</option><option>pack de investiga????o</option></select>";
    }



    else if(selectedValue == "Infiltrador"){
        document.getElementById('imgfundo').src="classes\\infiltrador.png";
        descClass.innerText = "Um Infiltrador ?? exatamente como o nome sugere - uma sombra. Um sopro ao vento. Uma voz mortal de tr??s. Esses agentes s??o excelentes em furtividade e miss??es de infiltra????o, entrando em ??reas restritas invis??veis e exfiltrando com a mesma facilidade quando a miss??o ?? completa.";
        hitPoints.innerText = "1d8 + modificador de constitui????o";
        tipoArmadura.innerText = "Armadura leve e m??dia";
        armaDistancia.innerText = "Armas de dist??ncia simples e explosivos";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Escolha duas entre ferramentas de fraude, hacking ou de ladr??es";
        savingTrhow.innerText = "Intelig??ncia e carisma";

        veicles.innerHTML = " <strong>Ve??culo </strong>(dois)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\" class=\"checkbox\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\" class=\"checkbox\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"avi??es\" class=\"checkbox\"><label for=\"veiculo3\"> avi??es </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"helicopteros\" class=\"checkbox\"><label for=\"veiculo4\"> helicopteros </label><input type=\"checkbox\" id=\"veiculo5\" name=\"veiculo5\" value=\"n??o-tripulado\" class=\"checkbox\"><label for=\"veiculo5\"> n??o-tripulado </label>";
        skills.innerHTML =  "<strong>Skills </strong>(quatro)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Atlhetics\" class=\"checkbox\"><label for=\"skill2\"> Atlhetics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Deception\" class=\"checkbox\"><label for=\"skill3\"> Deception </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Infiltration\" class=\"checkbox\"><label for=\"skill4\"> Infiltration </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Infotech\" class=\"checkbox\"><label for=\"skill5\"> Infotech </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Perception\" class=\"checkbox\"><label for=\"skill6\"> Perception </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Persuasion\" class=\"checkbox\"><label for=\"skill7\"> Persuasion </label><input type=\"checkbox\" id=\"skill8\" name=\"skill8\" value=\"Stealth\" class=\"checkbox\"><label for=\"skill8\"> Stealth </label><input type=\"checkbox\" id=\"skill9\" name=\"skill9\" value=\"Sleigth of hands\" class=\"checkbox\"><label for=\"skill9\"> Sleigth of hands </label><input type=\"checkbox\" id=\"skill10\" name=\"skill10\" value=\"Tatics\" class=\"checkbox\"><label for=\"skill10\"> Tatics </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>bast??o</option>    <option>garrote</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Taser</option>    <option>Arco composto com 20 flechas</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de infiltra????o</option>    <option>Pacote de disfarce</option>    <option>wet work pack</option></select><br>equipamento4:<select id=\"equipamento4\">    <option>armadura de couro, duas facas, e ferramenta de ladr??o</option></select>";
    } 



    else if(selectedValue == "Artista Marcial"){
        document.getElementById('imgfundo').src="classes\\artistaMarcial.png";
        descClass.innerText = "Os Artistas Marciais s??o mestres de seus corpos e dos seus arredores. Eles empregam uma variedade de combate corpo a corpo e movimentos para bater com for??a e desferir golpes precisos de maneiras que confundem a maioria dos espectadores usando uma variedade de t??cnicas para desarmar, desabilitar e destruir quaisquer amea??as"
        hitPoints.innerText = "1d10 + modificador de constitui????o";
        tipoArmadura.innerText = "Armadura leve";
        armaDistancia.innerText = "Armas de dist??ncia simples";
        armaPerto.innerText = "corpo-a-corpo simples e tradicionais";
        ferramentas.innerText = "Escolha uma entre qualquer um dos tipos de ferramentas";
        savingTrhow.innerText = "For??a e destreza";
        
        
        veicles.innerHTML =  "<strong>Ve??culo </strong>(dois)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\" class=\"checkbox\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\" class=\"checkbox\"><label for=\"veiculo2\"> carros </label>";
        skills.innerHTML = "<strong>Skills </strong>(duas)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Atlhetics\"><label for=\"skill2\"> Atlhetics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Insigth\"><label for=\"skill4\"> Insight </label><input type=\"checkbox\" id=\"skill5\" name=\"skill7\" value=\"Stealth\"><label for=\"skill5\"> Stealth </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Arma de dist??ncia tradicional</option>    <option>Arma corpo-a-corpo tradicional</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de infiltra????o</option>    <option>Pacote de sobreviv??ncia</option></select>";
    }



    else if(selectedValue == "M??dico"){
        document.getElementById('imgfundo').src="classes\\m??dico.png";
        descClass.innerText = "Agentes m??dicos cobrem todas as carreiras de cirurgi??es de campo a especialistas em bioqu??mica e tudo mais. Eles s??o bem treinados em sua ??rea de atua????o, com as m??os est??veis e atitudes calmas quando necess??rio."
        hitPoints.innerText = "1d8 + modificador de constitui????o";
        tipoArmadura.innerText = "Armadura leve e m??dia";
        armaDistancia.innerText = "Armas de dist??ncia simples";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Kit de primeiros socorros e kit forense ou ferramentas de cirurgia";
        savingTrhow.innerText = "Intelig??ncia e sabedoria";
        veicles.innerHTML = "<strong>Ve??culo </strong>(apenas um)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"Carros\"><label for=\"veiculo1\"> Carros </label>";
        skills.innerHTML = "<strong>Skills </strong>(tr??s)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Athletics\"><label for=\"skill1\"> Athletics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Infiltration\"><label for=\"skill2\"> Infiltration </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infotech\"><label for=\"skill3\"> Infotech </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Medicine\"><label for=\"skill4\"> Medicine </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Persuasion\"><label for=\"skill5\"> Persuasion </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Survival\"><label for=\"skill6\"> Survival </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Submachine gun</option>    <option>Pistola leve e faca</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Colete</option>    <option>Colete contra faca faca</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote m??dico</option>    <option>Ferramentas forenses</option></select><br>equipamento4:<select id=\"equipamento4\">    <option>Kit de primeiros socorros</option></select>";
    }



    else if(selectedValue == "Ranger"){
        document.getElementById('imgfundo').src="classes\\ranger.png";
        descClass.innerText = "Rangers s??o alguns dos agentes mais dur??es que existem. Eles usam seu treinamento e talento em campo e configura????es ambientais para se tornarem especialistas em sobreviv??ncia e seus arredores, e pode ter um cachorro como pet."
        hitPoints.innerText = "1d10 + modificador de constitui????o";
        tipoArmadura.innerText = "Armadura leve e m??dia";
        armaDistancia.innerText = "Armas de dist??ncia simples e militares";
        armaPerto.innerText = "corpo-a-corpo simples e tradicionais";
        ferramentas.innerText = "Ferramentas de escalada";
        savingTrhow.innerText = "Destreza e constitui????o";
        veicles.innerHTML = " <strong>Ve??culo </strong><strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos,carros, carros pesados\"><label for=\"veiculo1\"> motos,carros, carros pesados </label>";
        skills.innerHTML = " <strong>Skills </strong>(tr??s)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Athletics\"><label for=\"skill2\"> Athletics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Infiltration\"><label for=\"skill4\"> Infiltration </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Medicine\"><label for=\"skill5\"> Medicine </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Perception\"><label for=\"skill6\"> Perception </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Survival\"><label for=\"skill7\"> Survival </label><input type=\"checkbox\" id=\"skill8\" name=\"skill8\" value=\"Stealth\"><label for=\"skill8\"> Stealth </label><input type=\"checkbox\" id=\"skill9\" name=\"skill9\" value=\"Tatics\"><label for=\"skill9\"> Tatics </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Machete</option>    <option>Lan??a</option>    <option>Machado de m??o</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola pesada</option>    <option>Arco composto</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Roupa de ouro acolchoado</option>    <option>Colete contra faca</option></select><br>equipamento4:<select id=\"equipamento4\">    <option>Kit de sobrevivencia e uma faca</option></select>";
    
    }


    else if(selectedValue == "Soldado"){
        document.getElementById('imgfundo').src="classes\\soldado.png";
        descClass.innerText = "Soldados s??o um dos tipos mais adapt??veis ??????de agentes. Seu treinamento se estende a todos os aspectos do combate e guerra, desde habilidade de tiro de longo alcance e pontaria at?? combates brutais de corpo a corpo e brigando."
        hitPoints.innerText = "1d12 + modificador de constitui????o";
        tipoArmadura.innerText = "Todas as armaduras e escudos";
        armaDistancia.innerText = "Todas armas a dist??ncia e granadas";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Kit de primeiros socorros";
        savingTrhow.innerText = "For??a e constitui????o";
        veicles.innerHTML = "<strong>Ve??culo </strong>(apenas dois)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"Ve??culos de carga pesados\"><label for=\"veiculo3\"> Ve??culos de carga pesados </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"N??o-tripulados\"><label for=\"veiculo4\"> N??o-tripulados </label>";
        skills.innerHTML = "<strong>Skills </strong>(tr??s)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Athletics\"><label for=\"skill2\"> Athletics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Insigth\"><label for=\"skill3\"> Insigth </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Insigth\"><label for=\"skill4\"> Insight </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Intimidation\"><label for=\"skill5\"> Intimidation </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Perception\"><label for=\"skill6\"> Perception </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Survival\"><label for=\"skill7\"> Survival </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Tatics\"><label for=\"skill8\"> Tatics </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Armadura tatica</option>    <option>Colete contra faca e taser</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Machine pistol e escudo</option>    <option>Carabina</option>    <option>Rifle de atirador</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola leve</option>    <option>Qualquer corpo-a-corpo simples</option></select><br>equipamento4:<select id=\"equipamento4\">    <option selected disabled value=\"\">Selecione</option>    <option>Kit de sobrevivencia</option>    <option>Kit a prova de ??gua</option></select>";
    }



    else if(selectedValue == "T??cnico"){
        document.getElementById('imgfundo').src="classes\\mecanico.png";
        descClass.innerText = "Os t??cnicos s??o milagreiros da modernidade. Eles podem criar microfones e bugs de objetos dom??sticos comuns; eles podem construir drones flutuantes ou desconstruir tecnologias militares inquebr??veis, eles podem aquecer tanques de arame e fazer baldes de ferrugem virarem ve??culos de corrida."
        hitPoints.innerText = "1d8 + modificador de constitui????o";
        tipoArmadura.innerText = "Todas as armaduras";
        armaDistancia.innerText = "Todas armas a dist??ncia e explosivos";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Escolha dois dentre: ferramentas de eletricista, ferramentas de mec??nicos,ferramentas de hackers ou ferramentas de ladr??es";
        savingTrhow.innerText = "Destreza e Intelig??ncia";
        veicles.innerHTML = "<strong>Ve??culo </strong>(apenas quatro)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"Caminh??es\"><label for=\"veiculo3\"> Caminh??es </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"helicopteros\"><label for=\"veiculo4\"> helicopteros </label><input type=\"checkbox\" id=\"veiculo5\" name=\"veiculo5\" value=\"Avi??es\"><label for=\"veiculo5\"> Avi??es </label><input type=\"checkbox\" id=\"veiculo6\" name=\"veiculo6\" value=\"Tanks\"><label for=\"veiculo6\"> Tanks </label><input type=\"checkbox\" id=\"veiculo7\" name=\"veiculo7\" value=\"Barcos\"><label for=\"veiculo7\"> Barcos </label><input type=\"checkbox\" id=\"veiculo8\" name=\"veiculo8\" value=\"N??o-tripulados\"><label for=\"veiculo8\"> N??o-tripulados </label>";
        skills.innerHTML = " <strong>Skills </strong>(quatro)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Espionage\"><label for=\"skill2\"> Espionage </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Infiltration\"><label for=\"skill4\"> Infiltration </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Infotech\"><label for=\"skill5\"> Infotech </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Mechanics\"><label for=\"skill6\"> Mechanics </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Sleigth of hand\"><label for=\"skill7\"> Sleigth of hand </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Medicine\"><label for=\"skill8\"> Medicine </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola pesada</option>    <option>taser</option>    <option>machine gun</option></select><br>equipamento2:<select id=\"equipamento2\">    <option>Qualquer arma corpo-a-corpo simples</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Ferramentas de eletricista</option>    <option>Ferramentas de mec??nico</option>    <option>Ferramentas de Ladr??o</option>    <option>Tablet</option></select><br>equipamento4:<select id=\"equipamento4\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de infiltra????o</option>    <option>Pacote a prova de ??gua</option></select>";
    }



    else{
        document.getElementById('imgfundo').src="classes\\duascaras.png";
        descClass.innerText = "Mestre da manipula????o/engana????o. Se sentem em casa estando no centro das aten????es, blefando para entrar no interior de um c??rculo. Eles desaparecem no fundo t??o perfeitamente que s??o quase invis??veis. Duas caras ?? um camale??o em seu estilo escolhido, escondido ?? vista ou comandando com pura bravata";
        
        hitPoints.innerText = "1d8 + modificador de constitui????o";
        tipoArmadura.innerText = "Armadura leve";
        armaDistancia.innerText = "Armas de dist??ncia simples";
        armaPerto.innerText = "Armas de corpo-a-corpo simples";
        ferramentas.innerText = "kits de disfarce e kits de fraude";
        savingTrhow.innerText = "destreza e carisma";
        veicles.innerHTML = "<strong>Ve??culo </strong>(apenas um)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"avi??es\"><label for=\"veiculo3\"> avi??es </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"helicopteros\"><label for=\"veiculo4\"> helicopteros </label>";
        skills.innerHTML = "<strong>Skills </strong>(tr??s)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Deception\"><label for=\"skill1\"> Deception </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Espionage\"><label for=\"skill2\"> Espionage </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Insigth\"><label for=\"skill4\"> Insight </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Perseption\"><label for=\"skill5\"> Perseption </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Persuasion\"><label for=\"skill6\"> Persuasion </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Sleigth of hand\"><label for=\"skill7\"> Sleigth of hand </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Stealth\"><label for=\"skill8\"> Stealth </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola leve</option>    <option>faca</option>    <option>garrote</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Colete</option>    <option>Jaqueta de couro</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de diplomata</option>    <option>Pacote de disfarce</option></select><br>equipamento4:<select id=\"equipamento4\">    <option selected disabled value=\"\">Selecione</option>    <option>Kit de disfarce</option>    <option>Kit de fraude</option></select>";
    }
})




