var slideIndex = 1;

function plusDivs(n) {
    var images = document.querySelectorAll(".main-img img");
    slideIndex += n;

    if (slideIndex < 1) {
        slideIndex = images.length;
    } else if (slideIndex > images.length) {
        slideIndex = 1;
    }

    changeSlide(slideIndex);
}

function currentDiv(n) {
  
    changeSlide(slideIndex = n);
}

function changeSlide(slideNumber) {
	// Ẩn tất cả các hình ảnh
	var images = document.querySelectorAll(".main-img img");
	images.forEach(function (img) {
		img.style.display = "none";
	});

	// Hiển thị hình ảnh tương ứng với thẻ a được nhấn
	var selectedImage = document.getElementById("slide-" + slideNumber);
	selectedImage.style.display = "block";
}


// auto chay anh
var myIndex = 0;
auto();

function auto() {
    var i;
    var images = document.querySelectorAll(".main-img img");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > images.length) {
        myIndex = 1;
    }
    var selectedImage = document.getElementById("slide-" + myIndex);
    if (selectedImage) {
        selectedImage.style.display = "block";
    }
    setTimeout(auto, 4000); // Chuyển slide mỗi 2,5 giây
}

const toggleBtn = document.querySelector(".Header-menu-button ");

document.addEventListener("DOMContentLoaded", function () {
  var openButton = document.getElementById("open-button");
  var dropmenu = document.querySelector(".dropppp");
  var overlay = document.querySelector(".overlay");

  openButton.addEventListener("click", function () {
      dropmenu.classList.toggle("active");
      overlay.classList.toggle("active");
  });

  document.body.addEventListener("click", function (event) {
      if (!dropmenu.contains(event.target) && event.target !== openButton) {
          dropmenu.classList.remove("active");
          overlay.classList.remove("active");
      }
  });

  var mediaQuery = window.matchMedia("(max-width: 1122px)");

  mediaQuery.addListener(function (mediaQueryList) {
      if (mediaQueryList.matches) {
          dropmenu.classList.remove("active");
          overlay.classList.remove("active");
      }
  });
});

