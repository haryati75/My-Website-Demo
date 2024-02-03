// use browser's Inspect -> Console to see the console.log output
console.log('Hey, this will output to the browser\'s console.');

// logic to hide posts according to Filter click
// ----------------------------------------------
// get the list of categories
const filterList = document.querySelectorAll('#categories li');

// add click event to each category (loop through the list)
filterList.forEach(item => {
  item.addEventListener('click', (e) => {
    // get the category name
    const filterName = e.target.innerText.toLowerCase();
    console.log('clicked', filterName);

    // remove the selected class from all categories
    filterList.forEach(item => {
      item.classList.remove('selected-category-item');
    });
    // add the selected class to the clicked category
    e.target.classList.add('selected-category-item');

    // hide or display the posts according to the category
    const posts = document.querySelectorAll('#posts article');
    posts.forEach(post => {
      // check if the post has the same category as the clicked category
      if (post.getAttribute('data-category') === filterName || filterName === 'show all') {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});