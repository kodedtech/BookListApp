//  ADD BOOK

const addBtn = document.forms['add-book'];
addBtn.addEventListener('submit', (evt) => {
    evt.preventDefault();


    const addBook = addBtn.querySelector('#addedBook').value;
    // console.log(addBook)

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    
    bookName.textContent = addBook;
    deleteBtn.textContent = 'delete';


    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    // APPEND TO UL
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    UL.appendChild(li);

});

const UL = document.querySelector('#lastDay');
UL.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.className === 'delete') {
        // console.log(e.target);
        const abort = e.target.parentElement;
        abort.remove(abort) 
    } else if (e.target.className === 'deleteAll') {
        const abortion = e.currentTarget.parentElement;
        abortion.remove(abortion)
    }

});

// HIDE
const hideBook = document.getElementById('hide');
hideBook.addEventListener('click', (event) => {
    if(hideBook.checked) {
        UL.style.display = 'none';
    } else {
        UL.style.display = 'initial';
    }
});

// FILTER BOOKS
const filterBook = document.forms['search-books'].querySelector('input')
filterBook.addEventListener('keyup', (e) => {
let blah =  e.target.value.toLowerCase();

    const books = UL.querySelectorAll('li');
    books.forEach(book => {
        const title = book.firstElementChild.textContent
        if (title.toLowerCase().indexOf(blah) != -1) {
        book.style.display = 'block';
        } else {
            book.style.display = 'none'
        }
    });
});