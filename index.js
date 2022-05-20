console.log('Welcome to Estate Web page');
console.log(window.screen.width);
const clients_idea = [{
        client: `   <p id="client-msg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        i am muhammad irshad
    </p>
    <div id="client-img">
        <img src="/Images/Clients/m uzair.jpg" alt="error">
    </div>`
    },
    {
        client: `   <p id="client-msg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        i am muhammad suliman
    </p>
    <div id="client-img">
        <img src="/Images/Clients/m uzair.jpg" alt="error">
    </div>`
    },
    {
        client: `   <p id="client-msg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        i am wajid ali
    </p>
    <div id="client-img">
        <img src="/Images/Clients/m uzair.jpg" alt="error">
    </div>`
    },
    {
        client: `   <p id="client-msg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        i am inam ullah khan
    </p>
    <div id="client-img">
        <img src="/Images/Clients/m uzair.jpg" alt="error">
    </div>`
    },

    {
        client: `   <p id="client-msg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        i am saad ur rehman
    </p>
    <div id="client-img">
        <img src="/Images/Clients/m uzair.jpg" alt="error">
    </div>`
    },
    {
        client: `   <p id="client-msg">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab
        dignissimos. Atque nemo necessitatibus aut facilis.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi explicabo consectetur voluptas
        fugiat ab 
        dignissimos. Atque nemo necessitatibus aut facilis. 
        my name is muhammad uziar 
    </p>
    <div id="client-img">
        <img src="/Images/Clients/m uzair.jpg" alt="error">
    </div>`
    }
]

// for(client  in  clients_idea){
//     console.log(clients_idea[client]);
// }

console.log(clients_idea.length);
let clients = document.getElementById('client-idea');
clients.innerHTML = clients_idea[0].client;

let LeftArrow = document.getElementById('Left-Arrow');
let RightArrow = document.getElementById('right-Arrow');
// index var is using to move to  next object;
let index = 0;
// this method is using to move to next client msg. 
function Next_Client() {

    if (index < clients_idea.length - 1) {

        clients.innerHTML = clients_idea[++index].client;
        console.log(clients.innerHTML);
    } else {
        clients.innerHTML = clients_idea[index].client;
    }

}
// this method is using to move to previous client msg.
function Previous_Client() {
    if (index == 0) {
        clients.innerHTML = clients_idea[index].client;
    } else {
        clients.innerHTML = clients_idea[--index].client;
    }
}
// calling event listner;
RightArrow.addEventListener('click', Next_Client);
LeftArrow.addEventListener('click', Previous_Client);


// now Hous images slider

const house_images = [{
        house: `
        <div class="imgs" id="image1">
        <img src="/Images/Houses/image1.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p> </div>

        <div class="imgs" id="image2">
        <img src="/Images/Houses/image2.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p> </div>
        
        <div class="imgs" id="image3">
        <img src="/Images/Houses/image3.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p> </div>

        <div class="imgs" id="image4">
        <img src="/Images/Houses/image4.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p> </div>
        `
    },
    {
        house: `
        <div class="imgs" id="image2">
        <img src="/Images/Houses/image2.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>

        <div class="imgs" id="image3">
        <img src="/Images/Houses/image3.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image4">
        <img src="/Images/Houses/image4.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image5">
        <img src="/Images/Houses/image5.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    
    `
    },
    {
        house: `
        <div class="imgs" id="image3">
        <img src="/Images/Houses/image3.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    
        <div class="imgs" id="image4">
        <img src="/Images/Houses/image4.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    
        <div class="imgs" id="image5">
        <img src="/Images/Houses/image5.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    
        <div class="imgs" id="image6">
        <img src="/Images/Houses/image6.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    
    `
    },

    {
        house: `
        <div class="imgs" id="image4">
        <img src="/Images/Houses/image4.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image5">
        <img src="/Images/Houses/image5.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image6">
        <img src="/Images/Houses/image6.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image7">
        <img src="/Images/Houses/image7.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },

    {
        house: `
       <div class="imgs" id="image5">
        <img src="/Images/Houses/image5.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
       <div class="imgs" id="image6">
        <img src="/Images/Houses/image6.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
       <div class="imgs" id="image7">
        <img src="/Images/Houses/image7.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
       <div class="imgs" id="image8">
        <img src="/Images/Houses/image8.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },

    {
        house: `
        <div class="imgs" id="image6">
        <img src="/Images/Houses/image6.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image7">
        <img src="/Images/Houses/image7.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image8">
        <img src="/Images/Houses/image8.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image9">
        <img src="/Images/Houses/image9.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },

    {
        house: `
        <div class="imgs" id="image7">
        <img src="/Images/Houses/image7.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image8">
        <img src="/Images/Houses/image8.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image9">
        <img src="/Images/Houses/image9.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image10">
        <img src="/Images/Houses/image10.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },

    {
        house: `
        <div class="imgs" id="image8">
        <img src="/Images/Houses/image8.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image9">
        <img src="/Images/Houses/image9.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image10">
        <img src="/Images/Houses/image10.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image11">
        <img src="/Images/Houses/image11.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },
    {
        house: `
        <div class="imgs" id="imag9">
        <img src="/Images/Houses/image9.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image10">
        <img src="/Images/Houses/image10.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image11">
        <img src="/Images/Houses/image11.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },
    {
        house: `
        <div class="imgs" id="image10">
        <img src="/Images/Houses/image10.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
        <div class="imgs" id="image11">
        <img src="/Images/Houses/image11.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    },
    {
        house: `
        <div class="imgs" id="image11">
        <img src="/Images/Houses/image11.jpg" alt="Error">
        <p>$300000</p>
        <p>4beds |1ketchen| 1geust house|4000x5000 feets|</p>
    </div>
    `
    }
    
]

let container = document.getElementById('properties-pictures');
let Next_Image = document.getElementById('next');
let Prev_Image = document.getElementById('prev');
let slider = -1;

container.innerHTML = house_images[++slider].house;
// this method show next image
function Image_Slider_Forword_Move() {
    if (slider < house_images.length - 1) {
        container.innerHTML = house_images[++slider].house;
        // console.log("Forword function execcuted")
    } else {

    }
    // console.log("Slider value : ", slider);
}
// show next previouse image
function Image_Slider_Backword_Move() {
    // console.log("Slider value : ", slider);
    if (slider > 0) {


        container.innerHTML = house_images[--slider].house;
        // console.log("Backword function executed")
    } else {

    }
}
// event listener
Next_Image.addEventListener('click', Image_Slider_Forword_Move);
Prev_Image.addEventListener('click', Image_Slider_Backword_Move);


// contact form validation

const form_elements = {
    Name: document.getElementById('name'),
    Email: document.getElementById('email')
};

let Validation = {
    Name: false,
    Email: false,
};

function Name_Validation() {
    // console.log('Name Event is Blured');
    regex = /^[a-zA-Z]([0-9a-zA-Z]){0,20}/;
    let str = form_elements.Name.value;

    if (regex.test(str)) {
        // console.log("Name is Valid");
        Validation.Name = true;
    } else {

        let error = document.getElementById('nameerror');
        let msg = '*invalid name please correct it';
        error.innerHTML = msg;
        error.style.display = 'block';
        form_elements.Name.style.border = '2px solid red';
        // console.log("invalid name");
        form_elements.Name.addEventListener('click', () => {
            form_elements.Name.style.border = '2px solid black';
            error.style.display = 'none';
        });
        Validation.Name = false;
    }
}

function Email_Validation() {
    // console.log('Email Event is Blured');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = form_elements.Email.value;

    if (regex.test(str)) {
        // console.log("Email is Valid");
        Validation.Email = true;
    } 
    else {
        let error = document.getElementById('emailerror');
        let msg = '*Invalid Email please correct it';
        error.innerHTML = msg;
        error.style.display = 'block';
        form_elements.Email.style.border = '2px solid red';
        // console.log("invalid Email");
        form_elements.Email.addEventListener('click', () => {
            form_elements.Email.style.border = '2px solid black';
            error.style.display = 'none';
        });
        Validation.Email = false;
    }
}


form_elements.Name.addEventListener('blur', Name_Validation);
form_elements.Email.addEventListener('blur', Email_Validation);


// subscirption email validation
let subscribe = document.getElementById('email-id');
function Sub_Email_Validation() {
    // console.log('Email Event is Blured');
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = subscribe.value;

    if (regex.test(str)) {
        // console.log("Email is Valid");
    } 
    else {

        let error = document.getElementById('email-error');
        let msg = '*Invalid Email please correct it';
        error.innerHTML = msg;
        error.style.display = 'block';
        subscribe.style.border = '2px solid red';
        // console.log("invalid Email");
        subscribe.addEventListener('click', () => {
            subscribe.style.border = '2px solid black';
            error.style.display = 'none';
        });
    }
}
// form success or alert msg;
function Success_Failure() {
    // console.log('success_failure function called');
    let msg = document.getElementById('msg');
    if(Validation.Name === true && Validation.Email === true) {
       
        // console.log("Success")
        msg.innerHTML = `<div><p>Successfully Submitted</p> </div>
        <div id ="Cross"><p>X</p></div> 
       `;
        msg.style.display = 'block';
        msg.style.display = 'flex';
        msg.style.backgroundColor = 'lightgreen';
      
    }
    else{
        // console.log('fail');
        msg.innerHTML = `<div><p>Invalid data <\p> </div>
        <div id ="Cross"><p>X</p></div> `;
        msg.style.display = 'block';
        msg.style.display = 'flex';
        msg.style.backgroundColor = 'pink';

    }


    setTimeout(() => {
           msg.style.display = 'none';
           if(Validation.Name === true && Validation.Email === true){
               location.reload();
           }

    }, 5000);
    let cross = document.getElementById('Cross');
    console.log(cross);
    cross.addEventListener('click' , ()=>{
        msg.style.display = 'none';
        if(Validation.Name === true && Validation.Email === true){
            location.reload();
        }
    });
}

let submitform = document.getElementById('submitbtn');
// console.log(submitform);
submitform.addEventListener('click' , Success_Failure);


subscribe.addEventListener('blur' , Sub_Email_Validation);

// navigation menu for phone

let menuicon = document.getElementById('icon');
// console.log(menuicon);
let menu = document.getElementById('navigation');
// console.log(menu);

menuicon.addEventListener('click', () => {
    // console.log("Event fired");
    
    if(menu.style.display === 'block') {
        menu.style.display = 'none';
        // console.log("Display none")
    }
    else{
        menu.style.display = 'block';
        // console.log("Display block")
      
    }
});

window.addEventListener('resize' , () => {
    console.log("Window resizing event listener is fired");
    let width = window.innerWidth;
    if(width > 1000) {
        menu.style.display = 'flex';
    }
    else{
        menu.style.display = 'none';
    }

})

 