const commentForm = document.getElementById("comment");
const comment_main = document.querySelector(".comment_main");

function send(){
    axios.get("php/auth/create.php",{params:{comment:document.querySelector(".input_comment").value}}).
    then(res => setComments(res.data))
    .catch(res => console.log(res));
    document.querySelector(".input_comment").value = "";
};
getComments();

// test
async function getComments(){
   await axios.get("php/auth/get.php")
    .then(res => {
        if(res.data !== ""){
            setComments(res.data)
        }
    })
    .catch(res => console.log(res));
}

function setComments(comments){
    let innerHTMLComment = "";
    for(let i = 0; i < comments.length;i++){
        innerHTMLComment += `
        <div class="comment">
            <img src=${comments[i].avatar} style="width:40px;height:40px;border-radius:50%;vertical-align:middle;" alt="">
            <div class="displayGrid">
                <h3 class="commentText">${comments[i].name}</h3>
                <p class="commentText">${comments[i].comment}</p>
            </div>
        </div>`;
    }
    comment_main.innerHTML = innerHTMLComment;
}