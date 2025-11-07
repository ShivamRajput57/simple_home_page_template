homeListItems = document.querySelector('.index');
homeListItems.addEventListener('click', function(e) {
    console.log(e.target );
    if (e.target.innerText=="Index"){
        content_side_bar = document.querySelector('.main_list');
        importantList = document.querySelector('.important');
        all_index_list_items = document.querySelectorAll('.all_index_list');
        console.log(all_index_list_items);
        console.log(importantList);
        console.log('clicked');
        content = document.querySelectorAll('.index_content');
        importantList.classList.toggle('seen');
        content.forEach(function(item) {
            item.classList.toggle('seen');
            item.addEventListener('click', function(e) {
                console.log('content clicked');
            });
        });

        
        todo_screen = document.querySelector('.todo_screen');
        todo_screen.innerHTML = `<h1> ALL Tasks</h1>`;
    }else if(e.target.classList.contains('index_content')){
        console.log('content clicked');
        todo_screen = document.querySelector('.todo_screen');
        todo_screen.innerHTML = `<h1>${e.target.innerText} Tasks</h1>`;
    }

});

side_bar = document.querySelector('.side_bar');
