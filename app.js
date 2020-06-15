document.addEventListener('DOMContentLoaded', function () {
    // Delete Event With Event Bubbling
    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', function (e) {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            // li.parentNode.removeChild(li);
            list.removeChild(li);
        }
    });


    //Add Books Event
    const addForm = document.forms['add-book'];
    addForm.addEventListener('submit', function (e) {
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

    //Hide Books
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function (e) {
        if (hideBox.checked) {
            list.style.display = "none";
        }
        else {
            list.style.display = "initial";
        }
    });

    //Search Books
    const searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function (e) {
        const term = e.target.value.toLowerCase();
        const books = list.getElementsByTagName('li');
        Array.from(books).forEach(function (book) {
            const title = book.firstElementChild.textContent;
            if (title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            }
            else {
                book.style.display = 'none';
            }
        });
    });

    //Tabbed Content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', (e) => {
        if (e.target.tagName == 'LI') {
            const targetPanel = document.querySelector(e.target.dataset.target);
            Array.from(panels).forEach((panel) => {
                if (panel == targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
});