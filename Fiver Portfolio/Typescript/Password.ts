const inputUsername = (document.getElementById('input1') as HTMLInputElement).value;
const inputPassword = (document.getElementById('input2') as HTMLInputElement).value;

const validUsername:string[]=['nabilhazmi','aisya','balqis']
const validPassword:any[]=['720530','123456','4flat']

document.addEventListener('keydown',function(){
    redirect()
})

function redirect(){
    if(validUsername.includes(inputUsername) && validPassword.includes(inputPassword)){
        window.open('C:\Data\OneDrive\Nabil Hazmi\VS Code\Nabil\Mini Project\Fiver Portfolio\Html\HomePage.html')
    }
    else return
}