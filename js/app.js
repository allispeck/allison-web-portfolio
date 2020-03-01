// Filter Buttons
(function(){

    // Grab each button and project card
    const buttons = document.querySelectorAll('.filter-btn');
    const storeItems = document.querySelectorAll('.store-item');

    buttons.forEach((button)=> {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            
            storeItems.forEach((item)=> {
                if (filter === 'all'){
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)){
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

})();

//wire up filter search box
(function(){

    const searchBox = document.querySelector('#search-item');
    const storeItems = document.querySelectorAll('.store-item');
//storeItems.forEach(item=>{console.log(item.textContent)});

    searchBox.addEventListener('keyup', (e) => {
    
        const searchFilter = e.target.value.toLowerCase().trim();
        //display only items that contain filter input
console.log(searchFilter);
        storeItems.forEach((item) => {
            if (item.textContent.toLowerCase().trim().includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    })

})();


// toasty message
$(document).ready(function () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: "#090613",
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });
    const url   = new URL(window.location.href);

    if (url.searchParams.get('email-sent')) {
        Toast.fire({
            icon: 'success',
            title: 'Message Sent!',
            background: "#a2a4b1",
            fontColor: "white",
        });

    }
});