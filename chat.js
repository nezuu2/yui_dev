$(function(){
	$("#chat-button").click(function() {
		// 値を取得
        const str1 = $('input:text[id="chat-input"]').val();
        $('#chat2').text(str1);
        $('input:text[id="chat-input"]').val(""); //クリア

        if (str1 == 'こんにちは' || str1 == 'こんばんは' || str1 == 'おはよう') {
            $('#chat3').text('😊');
        } else {
            $('#chat3').text('');
        }
    });
});