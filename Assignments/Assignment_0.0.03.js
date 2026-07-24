


//Object created
const social=
{
    "Username":"Iush Sub",
    "mail":"xyz@gmail.com",
    "likes":100,
    "Comments":[

    ],
    "friends":[

    ]

}

function welcome(){
    console.log(" ***Welcome to Profile of Iush The Great.*** \n")
    console.log("Name: "+ social.Username+"\n")
    console.log("Mail: "+ social.mail+"\n")
    console.log("likes: "+ social.likes+"\n")
    console.log("Coments: "+ social.Comments+"\n")
    console.log("Friends: "+ social.friends+"\n")
    update()

}

welcome()

function update(){
    const a = read.question("@@@ Press 1 to update @@@")
    if(a==1){
        
    }

}





function likes(){
    social.likes++;
}


