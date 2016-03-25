$(function(){
    var wordAudio = $("<audio autoplay='autoplay' src='#'></audio>");
    var body = $("body");
    var reg = /[a-zA-Z]/g;
    body.append(wordAudio);
    body.on("click",".choices a",function(){
        var word = $("#questionContainer").find("strong").eq(0).text();
        console.log("word is : " + word + ", test result is : " + !reg.test(word));
        if(!reg.test(word)){
            word = $(this).text();
        }
        playAudio(word);

    });
    function playAudio(word) {
        var src = "https://dict.youdao.com/dictvoice?audio="+ word +"&type=2";
        var oSrc = wordAudio.attr("src");
        if(src == oSrc) {
            wordAudio[0].play();
        }else {
            wordAudio.attr("src",src);
        }
    }
});