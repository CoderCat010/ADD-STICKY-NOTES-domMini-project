let conatiner2 = document.getElementById('container2');
let container3 = document.getElementById('container3');
let textNotes = document.getElementById('noteText');
let checkBtn = document.getElementById('checkBtn');
let crossBtn = document.getElementById('crossBtn');
var random_margin = ["-5px", "1px", "5px", "10px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];


// add create note button to add sticky notes
document.getElementById('createNote').addEventListener('click', function(){
    // show note container when button is clicked
    container3.style.display = 'block'; 
})

// add new sticky note when check icon is clicked
checkBtn.addEventListener('click', function(){
    if(!textNotes.value){
        return alert('Please write something...');
    }else{
        // create new div container
        const divContent = document.createElement('div');

        // random color, margin, rotation
        const randomColor = random_colors[Math.floor(Math.random() * random_colors.length)];
        const randomMargin = random_margin[Math.floor(Math.random() * random_margin.length)];
        const randomRotate = random_degree[Math.floor(Math.random() * random_degree.length)];
        divContent.style.background = randomColor;
        divContent.style.margin = randomMargin;
        divContent.style.marginTop = '10px';
        divContent.style.transform = randomRotate;
        divContent.style.width = '250px';
        divContent.style.height = '250px';
        divContent.style.padding = '25px';
        divContent.style.fontSize = '26px';
        divContent.style.overflow= 'hidden';
        divContent.style.boxShadow = '0px 10px 24px 0px rgba(0,0,0,0.70)';
        divContent.innerText = textNotes.value;
        conatiner2.appendChild(divContent);
        textNotes.value = '';
    }
})

// remove note container when cross icon is clicked
crossBtn.addEventListener('click', function(){
    container3.style.display = 'none'; 
})

