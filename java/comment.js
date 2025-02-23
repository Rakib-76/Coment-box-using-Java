// 1st step : Set an event handler to the button
document.getElementById("make-comment")
.addEventListener('click', function (){
    // 2nd step: get the text wriiten in the comment box;
    const commentBox = document.getElementById("comment-box");
    // here i want to check comment box comming 
    // console.log(commentBox);
    const newComment = commentBox.value;
    // here i want to check that it works properly;
    // console.log(newComment);

    // 3rd step : get the parrent that where i want to set the new commment ;
    const commentContainer = document.getElementById("comment-container");
     // here i want to check that it works properly;
    // console.log(commentContainer);

    // 4th step: create a new tag p and set the inner text;
    const commentElement = document.createElement("p");
    // here i added the css class in the new comment. be careful that it set before the new comment
    commentElement.classList.add("comment");
    commentElement.innerText = newComment;
     
    // 5th step : append the new comment p to the parrent node 
    commentContainer.appendChild(commentElement);

    // 6th step: clean the text from the text box;
    commentBox.value = '';
})
