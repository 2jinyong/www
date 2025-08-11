$(function(){

   $('.nav-item').hover(function(){
     $(this).find('ul.lnb').fadeToggle();
   });

   $('.category').hover(function(){
      const w = $('.container').width();  //container의 가로크기를 읽어 옴
      $('.categorybox').css('width', w+"px"); //categorybox의 가로 크기로 설정함.
      $(this).find('.categorybox').fadeToggle();
   });

   $('.best-cart').mouseenter(function(){
       $(this).find('i').removeClass('ri-shopping-bag-4-line').addClass('ri-shopping-bag-4-fill');
   }).mouseleave(function(){
       $(this).find('i').removeClass('ri-shopping-bag-4-fill').addClass('ri-shopping-bag-4-line');
   });

   $('.best-heart').mouseenter(function(){
       $(this).find('i').removeClass('ri-heart-line').addClass('ri-heart-fill');
   }).mouseleave(function(){
       $(this).find('i').removeClass('ri-heart-fill').addClass('ri-heart-line');
   });

   $(window).on('scroll', function(){
      const navigation = $('.navigation').offset().top;
      if($(this).scrollTop() > 220){
         $('.navigation').css({
            position : 'fixed',
            top: '45px',
            width: '100%'
         });
      }else{
         $('.navigation').css({
            position: 'static'
         })
      }
   });

  setInterval(bestSlide, 8000);

   let wrapperWidth = 0;
   let pgCount = 0;
   const totalPage = 3;

   //페이지버튼 생성
   for(let i=0; i < totalPage; i++){
      if(i==0){ 
              $('#page').append(`<li data-index="${i}" class="active"></li>`);
      }else{
              $('#page').append(`<li data-index="${i}"></li>`);
      }       
   }

 
     function updatePage(){
        $('#page li').removeClass('active')
                     .eq(pgCount).addClass('active');
     }

     function bestSlide(){
        pgCount++;
        if(pgCount == totalPage){
            pgCount = 0;
        }
        updatePage();
   
        $(".slide-wrapper-in").animate({
            left: -wrapperWidth + "px"
        }, 300, function(){
            //1. 첫 번째 슬라이드 복제 후 뒤로 이동
            const first = $('.slide-wrapper-in .slide-page').first();
            first.clone().appendTo('.slide-wrapper-in');
            first.remove();
            $('.slide-wrapper-in').css('left', 0);
        });
     }


    function preBestSlide(){
        pgCount--;
        if(pgCount < 0) {
            pgCount = totalPage - 1;
        }
        updatePage();

        const last = $('.slide-wrapper-in .slide-page').last();
        last.clone().prependTo('.slide-wrapper-in');
        last.remove();

        //css 이용해서 왼쪽으로 미리 이동
        $('.slide-wrapper-in').css('left', -wrapperWidth + "px");

        //slide 애니메이션을 거꾸로 
        $('.slide-wrapper-in').animate({
            left: '0px',
        }, 300, function(){

        });
    }

     $("#prev").on("click", function(){
        preBestSlide();
     });

     $("#next").on("click", function(){
        bestSlide();
     });


fetch("./js/best.json")
.then(res => res.json())
.then(rs => {

   let slidePage = "";
   let colPage = "";
   for(let i = 0; i < 3; i++) {
      colPage = "";

      for(let j =0; j < 8; j++) {
         const index = i * 8 + j;
         const data = rs[index];
         
         //색상처리
         let colorHtml = "";
         data.color.forEach(co => {
            colorHtml += `<span class="${co}"></span>`;
         });

         //상품목록 만들기
         colPage += `
            <div class="col-md-3 my-3">
                        <a href="#" class="img-best-box">
                            <img src="${data.img}" alt="${data.alt}">
                            <div class="pd-best-box text-center">
                                <div class="pd-color">
                                    ${colorHtml}
                                </div>
                                <div class="best-title">${data.title}</div>
                                <div class="pd-best-pay">
                                <del>${data.cost}원</del>
                                <span class="sail">${data.sale}</span>
                                <span class="money">${data.price}원</span>
                                </div>
                            </div>
                            <div class="btn-box">
                                    <button type="button" class="best-cart">
                                        <i class="ri-shopping-bag-4-line"></i>
                                    </button>
                                    <button type="button" class="best-heart">
                                        <i class="ri-heart-line"></i>
                                    </button>
                            </div>
                        </a>
                    </div>
         `;
        }
      slidePage += `<div class="row slide-page">${colPage}</div>`;

    }


     document.querySelector(".slide-wrapper-in").innerHTML = slidePage;

        const pageHeight = $('.slide-page:first-child').outerHeight(true);
        $('.slide-wrapper').css('height', pageHeight+"px");
        wrapperWidth = $(".slide-wrapper").width();
     
})
.catch(err=> console.error("🤢 데이터 로딩에 실패했습니다.", err));

fetch("./js/main.json")
.then(res => res.json())
.then(list => {
    // 1. 상품 카드 HTML 생성
    const productHtmlArr = list.map(data => {
        const colorHtml = data.color.map(co => `<span class="${co}"></span>`).join("");
        return `
            <div class="col-md-3 col-12 mb-5">
                <div class="card" style="width: 18rem">
                    <a href="#" class="mycard" data-toggle="modal" data-target="#myModal${data.id}">
                        <div class="card-img">
                            <img src="./${data.img}" alt="${data.alt}">
                            <div class="btn-box">
                                <button type="button" class="best-cart"><i class="ri-shopping-bag-4-line"></i></button>
                                <button type="button" class="best-heart"><i class="ri-heart-line"></i></button>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="pd-color">${colorHtml}</div>
                            <div>${data.title}</div>
                            <div>
                                <del>${data.cost}원</del>
                                <span class="sail">${data.sale}</span>
                                <span class="money">${data.price}원</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });

    // 2. 모달 HTML 생성
    const modalHtmlArr = list.map(data => {
        const colorHtml = data.color.map(co => `<span class="${co}"></span>`).join("");
        return `
            <div class="modal fade" id="myModal${data.id}">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">${data.title}</h3>
                            <button type="button" class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <div class="pd-color">${colorHtml}</div>
                            <div>
                                <del>${data.cost}원</del>
                                <span class="sail">${data.sale}</span>
                                <span class="money">${data.price}원</span>
                            </div>
                            <lable for="size">사이즈</lable>
                            <select name="size" id="size">
                                <option>xxs</option>
                                <option>xs</option>
                                <option>s</option>
                                <option>m</option>
                                <option>l</option>
                                <option>xl</option>
                                <option>xxl</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // 3. 각각 다른 컨테이너에 삽입
    document.getElementById("list-item").innerHTML = productHtmlArr.join("");
    document.getElementById("modal-container").innerHTML = modalHtmlArr.join("");
})
.catch(err => console.error("🤢 데이터 로딩에 실패했습니다.", err));

}); //jquery

let slideIndex = 1;
showSlides(slideIndex);

setInterval( function(){
    pushSlides(1)
}, 5000);

const input = document.getElementById("searchInput");
const form = document.getElementById("search");

input.addEventListener("focus", function(){
   form.classList.add('focus');
});

input.addEventListener("blur", function(){
    form.classList.remove("focus");
});

function pushSlides(n){
    showSlides(slideIndex += n);
}
function currentSlides(n){
    showSlides(slideIndex -= n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {
        slideIndex = 1;
    }
    for(i =0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}