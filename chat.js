$(function(){
	$("#chat-button").click(function() {
		// 値を取得
        const str1 = $('input:text[id="chat-input"]').val();
        $('#chat2').text(str1);
        $('input:text[id="chat-input"]').val(""); //クリア
    });
});