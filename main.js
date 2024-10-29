$(document).ready(function () {

    $('form').submit(function(e){
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');

        novoItem.text(novaTarefa);
        $(novoItem).appendTo('ul');

        $('#nova-tarefa').val('');

        $('ul').on('click', 'li', function(){
            $(this).css('text-decoration', 'line-through');
        })

        $('ul').on('dblclick','li', function(){
            $(this).css('text-decoration', 'none');
        })

        $('#bt-reset').on('click', function(){
            $('li').remove();
        })
    })
})