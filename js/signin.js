const googleBtn = document.getElementById('custom-google-btn');
const signin = document.querySelector(".signin");
const signout = document.querySelector(".signout");
const comment = document.getElementById("comment");
refresh();
googleBtn.addEventListener('click', onClickGoogle);

function onClickGoogle () {
    document.querySelector('.g_id_signin div[role=button]').click();
}
async function handleCredentialResponse(googleUser) {
    let userData = await axios.get("php/auth/login.php",{ params: { token: googleUser.credential } }).then(res => {
        return res.data;
    });
    signin.innerHTML = `
    <img src=${userData.user.picture} style="width:40px;height:40px;border-radius:50%;vertical-align:middle;" alt="avatar">
   `;
    signout.innerHTML = `
    <a onclick="logout()">Выйти</a>
    `;
    comment.innerHTML = `<input type="text" name="comment" class="input_comment" placeholder="Введите комментарий" style="font-size:20px;width: 400px;background-color: rgba(0,0,0,0);border: 0px;border-bottom: 2px solid gray;" />
         <button class="button_comment" onclick="send()">Отправить</button>`;
}

async function refresh(){
    let userData = await axios.get("php/auth/refresh.php").then(res => {
        return res.data;
    });
    if(userData.code > 200){
        signin.innerHTML = `
            <a href="#" id="custom-google-btn" onclick="onClickGoogle()" class="active">
                <i class="fa fa-google" aria-hidden="true"></i> 
                Войти
            </a>
        `;
        signout.innerHTML = "";
        comment.innerHTML = ``;

    }else{
        signin.innerHTML = `
         <img src=${userData.user.picture} style="width:40px;height:40px;border-radius:50%;vertical-align:middle;" alt="avatar">
        `;
         signout.innerHTML = `
             <a onclick="logout()">Выйти</a>
         `;
         comment.innerHTML = `<input type="text" name="comment" class="input_comment" value="" style="font-size:20px;width: 400px;background-color: rgba(0,0,0,0);border: 0px;border-bottom: 2px solid gray;" placeholder="Введите комментарий" />
         <button class="button_comment" onclick="send()">Отправить</button>`;
    }
}

async function logout(){
    await axios.get("php/auth/logout.php");
    signin.innerHTML = `
    <a href="#" id="custom-google-btn" class="active">
        <i class="fa fa-google" aria-hidden="true"></i> 
        Войти
    </a>
   `;
    signout.innerHTML = "";
    comment.innerHTML = ``;
}