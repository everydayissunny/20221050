$(document).ready(function() {
    $('.button').click(function() {
        $(this).toggleClass('active');
    });
});

$(document).ready(function() {
    $('.sidenav a').click(function() {
        // Remove 'active' class from all links
        $('.sidenav a').removeClass('active');
        
        // Add 'active' class to the clicked link
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    // 에스프레소 샷, 에스프레소 옵션, 프라푸치노 로스트에 대한 버튼 클릭 이벤트
    $('.addEspressoShot_line .button, .CoffeeCustom_line .button, .Roast_line .button').click(function() {
        // 현재 칼로리 값을 가져오고, 5를 더함
        var currentCalories = parseInt($('#calorie-count').text());
        currentCalories += 5;

        // 업데이트된 칼로리 값을 화면에 표시
        $('#calorie-count').text(currentCalories);
    });
});