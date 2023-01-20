
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
        descClass.innerText = "O Hacker é visto através de seu trabalho mais do que qualquer outro agente. Portas travadas eletricamente abrem em um capricho, os oleodutos explodem e os computadores concedem acesso com algumas linhas de código. Eles sentem seu caminho para sistemas de computador com a mesma facilidade com que o infiltrador se infiltra em áreas restritas e pode causar ainda mais danos.";
        
        hitPoints.innerText = "1d6 + modificador de constituição";
        tipoArmadura.innerText = "Armadura leve";
        armaDistancia.innerText = "Armas de distância simples";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Ferramentas de hacking";
        savingTrhow.innerText = "Inteligência e carisma";
        veicles.innerHTML = "<strong>Veículo </strong>(apenas um)<strong>:</strong> <br> <input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\" class=\"checkbox\">  <label for=\"veiculo1\"> motos </label> <input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\" class=\"checkbox\"> <label for=\"veiculo2\"> carros </label>"
        skills.innerHTML = "<strong>Skills </strong>(quatro)<strong>:</strong> <br> <input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Deception\" class=\"checkbox\"> <label for=\"skill1\"> Deception </label> <input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Espionage\" class=\"checkbox\"> <label for=\"skill2\"> Espionage </label> <input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\" class=\"checkbox\"> <label for=\"skill3\"> Infiltration </label> <input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"infotech\" class=\"checkbox\"><label for=\"skill4\"> Infotech </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Mechanics\" class=\"checkbox\"><label for=\"skill5\"> Mechanics </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Persuasion\" class=\"checkbox\"><label for=\"skill6\"> Persuasion </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Persuasion\" class=\"checkbox\"> <label for=\"skill7\"> Sleigth of hand </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Stealth\" class=\"checkbox\"><label for=\"skill8\"> Stealth </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong> <br> equipamento1: <select id= \"equipamento1\"> <option selected disabled value=\"\">Selecione</option> <option>laptop</option> <option>tablet</option></select><br>equipamento2:<select id=\"equipamento2\"><option selected disabled value=\"\">Selecione</option><option>Taser</option><option>Bastão</option></select><br>equipamento3:<select id=\"equipamento3\"><option>Roupa acolchoada/roupa de couro</option></select><br>equipamento4:<select id=\"equipamento4\"><option selected disabled value=\"\">Selecione</option><option>Pack de trabalho a prova de água</option><option>pack de investigação</option></select>";
    }



    else if(selectedValue == "Infiltrador"){
        document.getElementById('imgfundo').src="classes\\infiltrador.png";
        descClass.innerText = "Um Infiltrador é exatamente como o nome sugere - uma sombra. Um sopro ao vento. Uma voz mortal de trás. Esses agentes são excelentes em furtividade e missões de infiltração, entrando em áreas restritas invisíveis e exfiltrando com a mesma facilidade quando a missão é completa.";
        hitPoints.innerText = "1d8 + modificador de constituição";
        tipoArmadura.innerText = "Armadura leve e média";
        armaDistancia.innerText = "Armas de distância simples e explosivos";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Escolha duas entre ferramentas de fraude, hacking ou de ladrões";
        savingTrhow.innerText = "Inteligência e carisma";

        veicles.innerHTML = " <strong>Veículo </strong>(dois)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\" class=\"checkbox\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\" class=\"checkbox\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"aviões\" class=\"checkbox\"><label for=\"veiculo3\"> aviões </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"helicopteros\" class=\"checkbox\"><label for=\"veiculo4\"> helicopteros </label><input type=\"checkbox\" id=\"veiculo5\" name=\"veiculo5\" value=\"não-tripulado\" class=\"checkbox\"><label for=\"veiculo5\"> não-tripulado </label>";
        skills.innerHTML =  "<strong>Skills </strong>(quatro)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Atlhetics\" class=\"checkbox\"><label for=\"skill2\"> Atlhetics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Deception\" class=\"checkbox\"><label for=\"skill3\"> Deception </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Infiltration\" class=\"checkbox\"><label for=\"skill4\"> Infiltration </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Infotech\" class=\"checkbox\"><label for=\"skill5\"> Infotech </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Perception\" class=\"checkbox\"><label for=\"skill6\"> Perception </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Persuasion\" class=\"checkbox\"><label for=\"skill7\"> Persuasion </label><input type=\"checkbox\" id=\"skill8\" name=\"skill8\" value=\"Stealth\" class=\"checkbox\"><label for=\"skill8\"> Stealth </label><input type=\"checkbox\" id=\"skill9\" name=\"skill9\" value=\"Sleigth of hands\" class=\"checkbox\"><label for=\"skill9\"> Sleigth of hands </label><input type=\"checkbox\" id=\"skill10\" name=\"skill10\" value=\"Tatics\" class=\"checkbox\"><label for=\"skill10\"> Tatics </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>bastão</option>    <option>garrote</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Taser</option>    <option>Arco composto com 20 flechas</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de infiltração</option>    <option>Pacote de disfarce</option>    <option>wet work pack</option></select><br>equipamento4:<select id=\"equipamento4\">    <option>armadura de couro, duas facas, e ferramenta de ladrão</option></select>";
    } 



    else if(selectedValue == "Artista Marcial"){
        document.getElementById('imgfundo').src="classes\\artistaMarcial.png";
        descClass.innerText = "Os Artistas Marciais são mestres de seus corpos e dos seus arredores. Eles empregam uma variedade de combate corpo a corpo e movimentos para bater com força e desferir golpes precisos de maneiras que confundem a maioria dos espectadores usando uma variedade de técnicas para desarmar, desabilitar e destruir quaisquer ameaças"
        hitPoints.innerText = "1d10 + modificador de constituição";
        tipoArmadura.innerText = "Armadura leve";
        armaDistancia.innerText = "Armas de distância simples";
        armaPerto.innerText = "corpo-a-corpo simples e tradicionais";
        ferramentas.innerText = "Escolha uma entre qualquer um dos tipos de ferramentas";
        savingTrhow.innerText = "Força e destreza";
        
        
        veicles.innerHTML =  "<strong>Veículo </strong>(dois)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\" class=\"checkbox\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\" class=\"checkbox\"><label for=\"veiculo2\"> carros </label>";
        skills.innerHTML = "<strong>Skills </strong>(duas)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Atlhetics\"><label for=\"skill2\"> Atlhetics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Insigth\"><label for=\"skill4\"> Insight </label><input type=\"checkbox\" id=\"skill5\" name=\"skill7\" value=\"Stealth\"><label for=\"skill5\"> Stealth </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Arma de distância tradicional</option>    <option>Arma corpo-a-corpo tradicional</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de infiltração</option>    <option>Pacote de sobrevivência</option></select>";
    }



    else if(selectedValue == "Médico"){
        document.getElementById('imgfundo').src="classes\\médico.png";
        descClass.innerText = "Agentes médicos cobrem todas as carreiras de cirurgiões de campo a especialistas em bioquímica e tudo mais. Eles são bem treinados em sua área de atuação, com as mãos estáveis e atitudes calmas quando necessário."
        hitPoints.innerText = "1d8 + modificador de constituição";
        tipoArmadura.innerText = "Armadura leve e média";
        armaDistancia.innerText = "Armas de distância simples";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Kit de primeiros socorros e kit forense ou ferramentas de cirurgia";
        savingTrhow.innerText = "Inteligência e sabedoria";
        veicles.innerHTML = "<strong>Veículo </strong>(apenas um)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"Carros\"><label for=\"veiculo1\"> Carros </label>";
        skills.innerHTML = "<strong>Skills </strong>(três)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Athletics\"><label for=\"skill1\"> Athletics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Infiltration\"><label for=\"skill2\"> Infiltration </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infotech\"><label for=\"skill3\"> Infotech </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Medicine\"><label for=\"skill4\"> Medicine </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Persuasion\"><label for=\"skill5\"> Persuasion </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Survival\"><label for=\"skill6\"> Survival </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Submachine gun</option>    <option>Pistola leve e faca</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Colete</option>    <option>Colete contra faca faca</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote médico</option>    <option>Ferramentas forenses</option></select><br>equipamento4:<select id=\"equipamento4\">    <option>Kit de primeiros socorros</option></select>";
    }



    else if(selectedValue == "Ranger"){
        document.getElementById('imgfundo').src="classes\\ranger.png";
        descClass.innerText = "Rangers são alguns dos agentes mais durões que existem. Eles usam seu treinamento e talento em campo e configurações ambientais para se tornarem especialistas em sobrevivência e seus arredores, e pode ter um cachorro como pet."
        hitPoints.innerText = "1d10 + modificador de constituição";
        tipoArmadura.innerText = "Armadura leve e média";
        armaDistancia.innerText = "Armas de distância simples e militares";
        armaPerto.innerText = "corpo-a-corpo simples e tradicionais";
        ferramentas.innerText = "Ferramentas de escalada";
        savingTrhow.innerText = "Destreza e constituição";
        veicles.innerHTML = " <strong>Veículo </strong><strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos,carros, carros pesados\"><label for=\"veiculo1\"> motos,carros, carros pesados </label>";
        skills.innerHTML = " <strong>Skills </strong>(três)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Athletics\"><label for=\"skill2\"> Athletics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Infiltration\"><label for=\"skill4\"> Infiltration </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Medicine\"><label for=\"skill5\"> Medicine </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Perception\"><label for=\"skill6\"> Perception </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Survival\"><label for=\"skill7\"> Survival </label><input type=\"checkbox\" id=\"skill8\" name=\"skill8\" value=\"Stealth\"><label for=\"skill8\"> Stealth </label><input type=\"checkbox\" id=\"skill9\" name=\"skill9\" value=\"Tatics\"><label for=\"skill9\"> Tatics </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Machete</option>    <option>Lança</option>    <option>Machado de mão</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola pesada</option>    <option>Arco composto</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Roupa de ouro acolchoado</option>    <option>Colete contra faca</option></select><br>equipamento4:<select id=\"equipamento4\">    <option>Kit de sobrevivencia e uma faca</option></select>";
    
    }


    else if(selectedValue == "Soldado"){
        document.getElementById('imgfundo').src="classes\\soldado.png";
        descClass.innerText = "Soldados são um dos tipos mais adaptáveis ​​de agentes. Seu treinamento se estende a todos os aspectos do combate e guerra, desde habilidade de tiro de longo alcance e pontaria até combates brutais de corpo a corpo e brigando."
        hitPoints.innerText = "1d12 + modificador de constituição";
        tipoArmadura.innerText = "Todas as armaduras e escudos";
        armaDistancia.innerText = "Todas armas a distância e granadas";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Kit de primeiros socorros";
        savingTrhow.innerText = "Força e constituição";
        veicles.innerHTML = "<strong>Veículo </strong>(apenas dois)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"Veículos de carga pesados\"><label for=\"veiculo3\"> Veículos de carga pesados </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"Não-tripulados\"><label for=\"veiculo4\"> Não-tripulados </label>";
        skills.innerHTML = "<strong>Skills </strong>(três)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Athletics\"><label for=\"skill2\"> Athletics </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Insigth\"><label for=\"skill3\"> Insigth </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Insigth\"><label for=\"skill4\"> Insight </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Intimidation\"><label for=\"skill5\"> Intimidation </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Perception\"><label for=\"skill6\"> Perception </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Survival\"><label for=\"skill7\"> Survival </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Tatics\"><label for=\"skill8\"> Tatics </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Armadura tatica</option>    <option>Colete contra faca e taser</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Machine pistol e escudo</option>    <option>Carabina</option>    <option>Rifle de atirador</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola leve</option>    <option>Qualquer corpo-a-corpo simples</option></select><br>equipamento4:<select id=\"equipamento4\">    <option selected disabled value=\"\">Selecione</option>    <option>Kit de sobrevivencia</option>    <option>Kit a prova de água</option></select>";
    }



    else if(selectedValue == "Técnico"){
        document.getElementById('imgfundo').src="classes\\mecanico.png";
        descClass.innerText = "Os técnicos são milagreiros da modernidade. Eles podem criar microfones e bugs de objetos domésticos comuns; eles podem construir drones flutuantes ou desconstruir tecnologias militares inquebráveis, eles podem aquecer tanques de arame e fazer baldes de ferrugem virarem veículos de corrida."
        hitPoints.innerText = "1d8 + modificador de constituição";
        tipoArmadura.innerText = "Todas as armaduras";
        armaDistancia.innerText = "Todas armas a distância e explosivos";
        armaPerto.innerText = "corpo-a-corpo simples";
        ferramentas.innerText = "Escolha dois dentre: ferramentas de eletricista, ferramentas de mecânicos,ferramentas de hackers ou ferramentas de ladrões";
        savingTrhow.innerText = "Destreza e Inteligência";
        veicles.innerHTML = "<strong>Veículo </strong>(apenas quatro)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"Caminhões\"><label for=\"veiculo3\"> Caminhões </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"helicopteros\"><label for=\"veiculo4\"> helicopteros </label><input type=\"checkbox\" id=\"veiculo5\" name=\"veiculo5\" value=\"Aviões\"><label for=\"veiculo5\"> Aviões </label><input type=\"checkbox\" id=\"veiculo6\" name=\"veiculo6\" value=\"Tanks\"><label for=\"veiculo6\"> Tanks </label><input type=\"checkbox\" id=\"veiculo7\" name=\"veiculo7\" value=\"Barcos\"><label for=\"veiculo7\"> Barcos </label><input type=\"checkbox\" id=\"veiculo8\" name=\"veiculo8\" value=\"Não-tripulados\"><label for=\"veiculo8\"> Não-tripulados </label>";
        skills.innerHTML = " <strong>Skills </strong>(quatro)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Acrobatics\"><label for=\"skill1\"> Acrobatics </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Espionage\"><label for=\"skill2\"> Espionage </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Infiltration\"><label for=\"skill4\"> Infiltration </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Infotech\"><label for=\"skill5\"> Infotech </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Mechanics\"><label for=\"skill6\"> Mechanics </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Sleigth of hand\"><label for=\"skill7\"> Sleigth of hand </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Medicine\"><label for=\"skill8\"> Medicine </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola pesada</option>    <option>taser</option>    <option>machine gun</option></select><br>equipamento2:<select id=\"equipamento2\">    <option>Qualquer arma corpo-a-corpo simples</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Ferramentas de eletricista</option>    <option>Ferramentas de mecânico</option>    <option>Ferramentas de Ladrão</option>    <option>Tablet</option></select><br>equipamento4:<select id=\"equipamento4\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de infiltração</option>    <option>Pacote a prova de água</option></select>";
    }



    else{
        document.getElementById('imgfundo').src="classes\\duascaras.png";
        descClass.innerText = "Mestre da manipulação/enganação. Se sentem em casa estando no centro das atenções, blefando para entrar no interior de um círculo. Eles desaparecem no fundo tão perfeitamente que são quase invisíveis. Duas caras é um camaleão em seu estilo escolhido, escondido à vista ou comandando com pura bravata";
        
        hitPoints.innerText = "1d8 + modificador de constituição";
        tipoArmadura.innerText = "Armadura leve";
        armaDistancia.innerText = "Armas de distância simples";
        armaPerto.innerText = "Armas de corpo-a-corpo simples";
        ferramentas.innerText = "kits de disfarce e kits de fraude";
        savingTrhow.innerText = "destreza e carisma";
        veicles.innerHTML = "<strong>Veículo </strong>(apenas um)<strong>:</strong><br><input type=\"checkbox\" id=\"veiculo1\" name=\"veiculo1\" value=\"motos\"><label for=\"veiculo1\"> motos </label><input type=\"checkbox\" id=\"veiculo2\" name=\"veiculo2\" value=\"carros\"><label for=\"veiculo2\"> carros </label><input type=\"checkbox\" id=\"veiculo3\" name=\"veiculo3\" value=\"aviões\"><label for=\"veiculo3\"> aviões </label><input type=\"checkbox\" id=\"veiculo4\" name=\"veiculo4\" value=\"helicopteros\"><label for=\"veiculo4\"> helicopteros </label>";
        skills.innerHTML = "<strong>Skills </strong>(três)<strong>:</strong><br><input type=\"checkbox\" id=\"skill1\" name=\"veiculo1\" value=\"Deception\"><label for=\"skill1\"> Deception </label><input type=\"checkbox\" id=\"skill2\" name=\"skill2\" value=\"Espionage\"><label for=\"skill2\"> Espionage </label><input type=\"checkbox\" id=\"skill3\" name=\"skill3\" value=\"Infiltration\"><label for=\"skill3\"> Infiltration </label><input type=\"checkbox\" id=\"skill4\" name=\"skill4\" value=\"Insigth\"><label for=\"skill4\"> Insight </label><input type=\"checkbox\" id=\"skill5\" name=\"skill5\" value=\"Perseption\"><label for=\"skill5\"> Perseption </label><input type=\"checkbox\" id=\"skill6\" name=\"skill6\" value=\"Persuasion\"><label for=\"skill6\"> Persuasion </label><input type=\"checkbox\" id=\"skill7\" name=\"skill7\" value=\"Sleigth of hand\"><label for=\"skill7\"> Sleigth of hand </label><input type=\"checkbox\" id=\"skill8\" name=\"skill7\" value=\"Stealth\"><label for=\"skill8\"> Stealth </label>";
        equipamento.innerHTML = "<strong>Equipamento: </strong><br>equipamento1:<select id=\"equipamento1\">    <option selected disabled value=\"\">Selecione</option>    <option>Pistola leve</option>    <option>faca</option>    <option>garrote</option></select><br>equipamento2:<select id=\"equipamento2\">    <option selected disabled value=\"\">Selecione</option>    <option>Colete</option>    <option>Jaqueta de couro</option></select><br>equipamento3:<select id=\"equipamento3\">    <option selected disabled value=\"\">Selecione</option>    <option>Pacote de diplomata</option>    <option>Pacote de disfarce</option></select><br>equipamento4:<select id=\"equipamento4\">    <option selected disabled value=\"\">Selecione</option>    <option>Kit de disfarce</option>    <option>Kit de fraude</option></select>";
    }
})




