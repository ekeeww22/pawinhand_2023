// 1. 모바일 메뉴 숨기기
// 객체 = 모바일 메뉴 m_nav_open
// 속성 = style.display = 'none'
// 2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
// 객체 = 햄버거 메뉴 m_nav , 모바일 메뉴 m_nav_open
// 속성 = 보이기
// 이벤트 = 클릭
// 메소드 
// 3. X 버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = X 버튼 close, 모바일 메뉴 m_nav_open
// 속성 = 숨기기
// 이벤트 = 클릭
// 메소드 
// 변수생성
const m_nav_open = document.querySelector('.m_nav_open');
const m_nav = document.querySelector('.m_nav');
const close = document.querySelector('#close');
// 정상출력확인 -> 에러메시지 또는 null , undefined 표시주의
console.log(m_nav_open, m_nav, close);
// 1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
// 2-1. 햄버거 메뉴 클릭시 모바일 메뉴 보이기(객체.메소드(이벤트,함수))
// 객체.이벤트 
m_nav.addEventListener('click',function(){
    // 2-2. 모바일 메뉴 보이기 (객체.속성.속성=값))
    m_nav_open.style.display = 'block';
});
// 3. X 버튼 클릭 시
close.addEventListener('click',function(){
    // 모바일 메뉴 숨기기
    m_nav_open.style.display = 'none';
});

// main-swiper-slide
// const 변수명 = new Swiper('적용대상');
// const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:1000, // 슬라이드 간격(밀리초) 기본 3초
        disableOnInteraction:false, // 버튼 클릭 후 자동재생유지
    }, // 자동재생
    loop:true, // 마지막 슬라이드 -> 첫 번째 슬라이드로 자연스러운 변경
    effect:'fade',// 제자리 변경 효과
    // direction:'vertical' // 수직방향
    navigation: {
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',} 
    
});
const new_slide = new Swiper('#second_slide',{
    autoplay:{delay:1000, disableOnInteraction:false}, loop:true,
    navigation: {
        // next, prev 객체 연결 시 부모를 안 적으면
        // body 안에 있는 모든 swiper-next,prev 를 인식하기 때문에 
        // 개별인식가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#second_slide .swiper-button-next',
        prevEl: '#second_slide .swiper-button-prev',} 
    
});