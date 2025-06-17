$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true, // Isso é crucial para exibição horizontal e largura dinâmica
        loop: true,       // Faz o slider girar continuamente
        onSliderLoad: function() {
            // Remove a classe 'cs-hidden' assim que o slider é carregado
            // Isso evita um "flash de conteúdo sem estilo" (FOUC).
            $('#autoWidth').removeClass('cs-hidden');
        },
        // Opcional: Adicione controles se você quiser setas de navegação
        controls: true,
        // Opcional: Adicione pager (pontos) se você quiser indicadores de paginação
        pager: true,
        // Configurações responsivas para diferentes tamanhos de tela (exemplo)
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
    });
});
