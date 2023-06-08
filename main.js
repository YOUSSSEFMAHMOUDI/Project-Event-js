  var click1=document.getElementById("Home");
  var img=document.getElementById("images");
  function fun1Hom(){
      img.innerHTML="<h4>PHOTOS</h4> <p>im blue appel</p> <img src='images/img1.jpg' width=350px height=250px >"
  };
  click1.addEventListener('click',fun1Hom);

  var click2=document.getElementById("Contact");
  var img2=document.getElementById("images");
  function fun2contact(){
      img2.innerHTML="<h4>PHOTOS</h4> <p>im appel</p> <img src='images/img2.jpg' width=350px height=250px >"
  };
  click2.addEventListener('click',fun2contact);

  var click3=document.getElementById("Reservation");
  var img3=document.getElementById("images");
  function fun3Reser(){
      img3.innerHTML="<h4>PHOTOS</h4> <p>im green appel</p> <img src='images/img3.jpg' width=350px height=250px >"
  };
  click3.addEventListener('click',fun3Reser);

  var click4=document.getElementById("Boutique");
  var img4=document.getElementById("images");
  function fun4Bout(){
      img4.innerHTML="<h4>PHOTOS</h4> <p>im fruits</p> <img src='images/img4.jpg' width=350px height=250px >"
  };
  click4.addEventListener('click',fun4Bout);

