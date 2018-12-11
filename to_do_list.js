// --------- AFTERNOON CHALLENGE ----------

// retrieve any list items from local storage
let itemsArray = []
// define global selectors
let $taskList = $('#task-list')

$(document).ready(function () {
    if (localStorage.getItem('items')) {
        itemsArray = JSON.parse(localStorage.getItem('items'))
    }
    // populate list with items in itemsArray (from local storage)
    for (item of itemsArray) {
        createListItem(item.name, item.id, item.completed)
    }
})

// set initial task count
$('#task-number').html(totalTasks())

// add event for form submit
$('#task-form').on('submit', addListtask)

// create event for adding tasks
function addListtask(event) {
    event.preventDefault()
    let $newtask = $('#new-task').val()
    let dataID = itemsArray[itemsArray.length - 1] ? (itemsArray[itemsArray.length - 1].id + 1) : 1
    createListItem($newtask, dataID)

    // push new list item to local storage
    itemsArray.push({
        name: $newtask,
        id: dataID
    })
    localStorage.setItem('items', JSON.stringify(itemsArray))

    // reset text field
    $('#new-task').val("")
}

// calculates total number of todo tasks
function totalTasks() {
    return $taskList.children('li').length
}

// calculates percentage completion of todo tasks
function calculateProgress() {
    let completedItems = Array.from($taskList.children('li')).filter(task => $(task).hasClass('done')).length
    return completedItems / totalTasks() * 100
}

// add toggle for completed items
function toggleDone(event) {
    // console.log(event)
    if ($(event.target).hasClass('list-item')) {
        $(event.target).toggleClass('done')

        // update local storage
        let itemID = $(event.target).data('id')
        let selectedItemIndex = itemsArray.findIndex(function (item) {
            return item.id == itemID
        })
        // let selectedItem = itemsArray.find(function (item) {
        //     return item.id == itemID
        // })
        let selectedItem = itemsArray[selectedItemIndex]
        if (selectedItem.completed) {
            delete selectedItem.completed
        } else {
            selectedItem.completed = "done"
        }
        let selectedItemIndex = itemsArray.findIndex(function (item) {
            return item.id == itemID
        })
        itemsArray.splice(selectedItemIndex, 1, selectedItem)
        localStorage.setItem('items', JSON.stringify(itemsArray))
    }

    // update view
    updateView()
}

function deleteListItem(event) {
    // console.log(event.target)    
    if ($(event.target).hasClass('delete')) {

        // remove item from local storage
        let itemID = $(event.target).parent().data('id')

        let selectedItemIndex = itemsArray.findIndex(function (item) {
            return item.id == itemID
        })

        itemsArray.splice(selectedItemIndex, 1)

        localStorage.setItem('items', JSON.stringify(itemsArray))

        // remove item from DOM
        $(event.target).parent().remove()

        // update view
        updateView()
    }
}

function updateView() {
    // update total tasks
    $('#task-number').html(totalTasks())
    // update progress bar
    $('.progress-bar').css('width', calculateProgress() + '%')
}

function createListItem(item, id, completed) {
    let $li = $('<li data-id="' + id + '" class="list-item">' + item + '</li>')
    $li.addClass(completed)
    $taskList.append($li)

    // add 'completed'toggle to list item
    $li.on('click', toggleDone)

    // add delete button
    let $deleteButton = $('<button class="delete">X</button>')
    $li.append($deleteButton)
    $li.on('click', deleteListItem)

    updateView()
}



// ---------- BEAST MODE ----------
// added to above code:
// completed functionality
// progress bar
// delete button

// ---------- BEAST MODE ++ ----------
// NOT DONE
// psuedo code:
// Add search capability of task items as user types:
// convert input to lowercase
// watch traversy DOM video 4, 14:30 ->