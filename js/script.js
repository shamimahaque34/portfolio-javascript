var header = document.getElementById('header');
var menu = document.getElementById('menu');
var mainContent= document.getElementById('mainContent');
var footer = document.getElementById('footer');

var img1 = document.createElement('img');

img1.setAttribute('src','img/shamima1.JPG');
img1.setAttribute('alt','Image Name');
img1.style.height = '150px';
img1.style.width = '19%';
img1.style.float ='left';
img1.style.border ='1px solid black';


header.append(img1);

var img2 = document.createElement('img');

img2.setAttribute('src','img/ete9.jpg');
img2.setAttribute('alt','Image Name');
img2.style.height = '150px';
img2.style.width = '79%';
img2.style.float ='left';
img2.style.border ='1px solid black';


header.append(img2);


var a = document.createElement('a');
a.innerHTML ="Home";
a.setAttribute('href','home');
a.setAttribute('id','homeBtn');
a.style.textDecoration ='none';
a.style.color ='red';
a.style.float ='left';
a.style.margin ='50px';
a.style.padding ='8px';
a.style.fontSize ='25px';
a.style.border ='1px solid black'
//a.setAttribute('class','d-none');



menu.append(a);

homeBtn.onclick =function()
{
    event.preventDefault();
}


var a = document.createElement('a');
a.innerHTML ="About";
a.setAttribute('href','about');
a.setAttribute('id','aboutBtn');
a.style.textDecoration ='none';
a.style.color ='red';
a.style.float ='left';
a.style.margin ='50px';
a.style.padding ='8px';
a.style.fontSize ='25px';
a.style.border ='1px solid black';



menu.append(a);

aboutBtn.onclick =function()
{
    event.preventDefault();
}

var a = document.createElement('a');
a.innerHTML ="Portfolio";
a.setAttribute('href','portfolio');
a.setAttribute('id','portfolioBtn');
a.style.textDecoration ='none';
a.style.color ='red';
a.style.float ='left';
a.style.margin ='50px';
a.style.padding ='8px';
a.style.fontSize ='25px';
a.style.border ='1px solid black';



menu.append(a);

portfolioBtn.onclick =function()
{
    event.preventDefault();
}


var a = document.createElement('a');
a.innerHTML ="Gallery";
a.setAttribute('href','gallery');
a.setAttribute('id','galleryBtn');
a.style.textDecoration ='none';
a.style.color ='red';
a.style.float ='left';
a.style.margin ='50px';
a.style.padding ='8px';
a.style.fontSize ='25px';
a.style.border ='1px solid black';



menu.append(a);

galleryBtn.onclick =function()
{
    event.preventDefault();
}

var a = document.createElement('a');
a.innerHTML ="Contact";
a.setAttribute('href','contact');
a.setAttribute('id','contactBtn');
a.style.textDecoration ='none';
a.style.color ='red';
a.style.float ='left';
a.style.margin ='50px';
a.style.padding ='8px';
a.style.fontSize ='25px';
a.style.border ='1px solid black';



menu.append(a);

contactBtn.onclick =function()
{
    event.preventDefault();
}



var a = document.createElement('a');
a.innerHTML ="Registration";
a.setAttribute('href','registration');
a.setAttribute('id','registrationBtn');
a.style.textDecoration ='none';
a.style.color ='red';
a.style.float ='left';
a.style.margin ='50px';
a.style.padding ='8px';
a.style.fontSize ='25px';
a.style.border ='1px solid black';



menu.append(a);

registrationBtn.onclick =function()
{
    event.preventDefault();
}


var h1 = document.createElement('h1');
h1.innerHTML ="Information about me...";

h1.style.margin ='50px';
h1.style.textAlign ='center';

mainContent.append(h1);


var img1 = document.createElement('img');

img1.setAttribute('src','img/shamima1.JPG');
img1.setAttribute('alt','Image Name');
img1.style.height = '150px';
img1.style.width = '19%';
img1.style.border ='1px solid black';
img1.style.borderRadius ='20px';
//img1.style.margin ='20px';


mainContent.append(img1);

var p = document.createElement('p');
p.innerHTML ="Shamima Haque";

p.style.margin ='20px';
//p.style.textAlign ='center';
//p.style.fontStyle ='italic';

mainContent.append(p);


var p = document.createElement('p');
p.innerHTML ="I am shamima Haque and I am a web developer.I am a creative thinker and problem solver.I trive in a fast paced,over changing-environment where I am continiously learning and expanding my horizons. I am honest and always try to help others.I am a ambisious person .I'm of a very competitive nature but love to find good in everything I see. According to me, there are many things that make us depressed or upset, but that doesn't mean that we stop living.I love to motivate the depressed, help the impoverished. I try to make those smile who have lost hopes, became hopeless, who wish to end up living. I wish to make them live lively again"



p.style.margin ='20px';

p.style.fontFamily='sans-serif';

mainContent.append(p);




var p = document.createElement('p');
p.innerHTML ="© Design and developed by shamima haque.";

p.style.margin ='60px';
p.style.textAlign ='center'

footer.append(p);














