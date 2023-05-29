$(function () {
    $('#carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    $(".menu-hamburguer").click(function () {
        $("nav").slideToggle();
    })

    $("#campo-telefone").mask('(00) 00000-0000')

    $("form").validate({
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
            veicInteresse: {
                required: true
            },
            mensagem: {
                required: false
            },
        },
        // MUDA A MENSAGEM PADRÃO DE ERRO PARA A MENSAGEM ABAIXO
        messages: {
            nome: ' Por favor, insira o seu nome.',
            telefone: ' Por favor, insira o seu número de telefone/celular.',
            email: ' Por favor, insira um email valido.',
            veicInteresse: ' Por favor, insira o nome do seu carro de interesse.',
        },
        
        invalidHandler: function (evento, validador) {
            let CamposInvalidos = validador.numberOfInvalids();
            if (CamposInvalidos) {
                alert(`Existem ${CamposInvalidos} campos incorretos.`)
            }
        }
    })


    //ADICIONAR O NOME DO CARRO E A MENSAGEM NO FORMS
    $('.lista-veiculos button').click(function () {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veicInteresse').val(nomeVeiculo);
        $('#mensagem').val('Estou interessado neste carro! ');

        //ROLA A TELA ATÉ O FORMS
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})