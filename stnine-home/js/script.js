$(function(){
    $('.lnb').hover(function(){
        $(this).find('i').toggleClass('fa-bars fa-minus')
    });


    
    // 1. 변수와 초기 설정
    let slideCount = 0;
    const slideWidth = $('.slidebox').width();
    const totalSlides = $('.slide-in img').length; // length는 속성! 괄호 없음!
    let slideInterval;
    
    const firstClone = $('.slide-in img').first().clone();
    const lastClone = $('.slide-in img').last().clone();

    $('.slide-in').append(firstClone);
    $('.slide-in').prepend(lastClone);
    $('.slide-in').css('left', -slideWidth + 'px');

    // 2. 슬라이드 이동 함수 (자동/수동 공통)
    function moveSlide(direction){
        // direction 변수를 문자열로 비교
        if(direction === 'next'){ 
            slideCount++;
        }else if(direction === 'prev'){
            slideCount--;
        }

        $('.slide-in').stop().animate({
            left: -(slideCount + 1) * slideWidth + "px"
        }, 1000, function(){
            // 무한 슬라이드 로직
            if(slideCount >= totalSlides){
                slideCount = 0;
                $('.slide-in').css('left', -slideWidth + 'px');
            } else if (slideCount < 0) {
                slideCount = totalSlides - 1;
                $('.slide-in').css('left', -(totalSlides) * slideWidth + 'px');
            }
        });
    }

    // 3. 자동 슬라이드 시작/중지 함수
    function startSlide() {
        slideInterval = setInterval(function() {
            moveSlide('next');
        }, 3000);
    }

    function stopSlide() {
        clearInterval(slideInterval);
    }

    // 4. 버튼에 클릭 이벤트 추가
    $('.rightbtn').on('click', function() {
        stopSlide();
        moveSlide('next');
        startSlide();
    });

    $('.leftbtn').on('click', function() {
        stopSlide();
        moveSlide('prev');
        startSlide();
    });

    // 5. 페이지 로드 시 자동 슬라이드 시작
    startSlide();

    // lnb 메뉴 기능은 따로 분리
    $('.lnb').hover(function(){
        $(this).find('i').toggleClass('fa-bars fa-minus');
    });


    
    


});//jquery