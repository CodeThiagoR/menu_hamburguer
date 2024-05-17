$(document).ready(function(){
    $('#carousel-f1car').slick({ //iniciar o carrossel
        autoplay:true,
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle(); //verifica se o slide está abaixado ou levantando
    })
    
    $('#telefone').mask('(00) 00000-0000') //aqui vai a máscara de números

    $('form').validate({ //validação dos campos tem que ter NAME e não ID
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Por Favor, insira o seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} Campos Incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoDeInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})