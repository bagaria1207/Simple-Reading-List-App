// Delete Books From List
// var btns = document.querySelectorAll('#book-list .delete');
// Array.from(btns).forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentElement.removeChild(li);
//     });
// });


// Delete Event With Event Bubbling
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        list.removeChild(li);
    }
});


//Add Books Event
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //Create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //Add Content to Elements
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //Add Respective Class To Elements Created
    deleteBtn.classList.add('delete');
    bookName.classList.add('name');

    //Append Child to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});