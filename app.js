//slider code
let flag = 0

function controller(x) {
  flag = flag + x;
  slider(flag);
  console.log("clicked");
}

function slider(num) {
  let slide = document.getElementsByClassName('slide');
  let para = document.getElementsByClassName('para');
  for (let y of slide) {
    y.style.display = "none";
  }
  for (let z of para) {
    z.style.display = 'none'
  }

  if (flag == slide.length) {
    flag = 0;
    num = 0;
  }
  if (flag < 0) {
    flag = slide.length - 1;
    num = slide.length - 1;
  }

  slide[num].style.display = "block";
  para[num].style.display = "block";
  console.log("clla")
}
slider(flag);


//navbar

let navbtn = document.getElementsByClassName('bars')[0];
let navbar = document.getElementsByClassName('nav')[0];
let closebtn = document.getElementById('close');
navbtn.addEventListener('click', function () {
  //ul
  navbar.classList.toggle('active');
  //color
  // navbtn.classList.toggle('active');
  closebtn.style.display = 'block';
  navbtn.style.display = 'none'
})

closebtn.addEventListener('click', () => {
  navbar.classList.remove('active');
  navbtn.style.display = 'block'
  closebtn.style.display = 'none'
})

