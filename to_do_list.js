// --------- AFTERNOON CHALLENGE ----------

// define global selectors
let $taskList = $('#task-list')

// set initial task count
$('#task-number').html(totalTasks())

// add event for form submit
$('#task-form').on('submit', addListtask)

// create event for adding tasks
function addListtask(event) {
    event.preventDefault()
    let $newtask = $('#new-task').val()
    let $li = $('<li>' + $newtask + '</li>')
    $taskList.append($li)
    $li.on('click', toggleDone)


    // add delete button
    let $deleteButton = $('<button class="delete">X</button>')
    $li.append($deleteButton)
    $li.on('click', deleteListItem)

    // reset text field
    $('#new-task').val("")
    // update total tasks
    $('#task-number').html(totalTasks())
    // update progress bar    
    $('.progress-bar').css('width', calculateProgress() + '%')

}

// calculates total number of todo tasks
function totalTasks() {
    return $taskList.children('li').length
}

// calculates percentage completion of todo tasks
function calculateProgress() {
    let completedItems = Array.from($taskList.children('li')).filter(task => task.classList.contains('done')).length
    return completedItems / totalTasks() * 100
}

// add toggle for completed items
function toggleDone(event) {
    event.target.classList.toggle('done')
    // update progress bar
    $('.progress-bar').css('width', calculateProgress() + '%')
}

function deleteListItem(event) {
    if (event.target.classList.contains('delete')) {
        let li = event.target.parentElement
        li.remove()
        // update total tasks
        $('#task-number').html(totalTasks())
        // update progress bar
        $('.progress-bar').css('width', calculateProgress() + '%')
    }
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