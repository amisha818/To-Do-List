$(() => {
    let btnadd = $('#btnadd')
    let btnclear = $('#btnclear')
    let newtask = $('#newtask')
    let ultask = $('#ultask')
    let btndlt = $('#btndlt')
    let btnsort = $('#btnsort')

    function add() {
        let listitem = $('<li>', {
            'class': 'list-group-item',
            text: newtask.val()
        })
        listitem.click(() => {
            listitem.toggleClass('done')
        })
        ultask.append(listitem)
        newtask.val('')
    }
    btnadd.click(add)
    newtask.keypress((e) => {

        if (e.which == '13') {
            add()
        }
    })
    btnclear.click(() => {

        newtask.val('')
    })
    btndlt.click(() => {
        $('#ultask .done').remove()
    })
    btnsort.click(() => {

        $('#ultask .done').appendTo(ultask)
    })
})
