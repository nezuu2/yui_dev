$(function(){
    $('#ver').text('version beta0.1');

	$("#chat-button").click(function() {
		// 値を取得
        const str = $('input:text[id="chat-input"]').val();
        $('#chat').prepend('<ul id="chat add" class="chat">' + str + '</ul>');

        if (str == 'こんにちは' || str == 'こんばんは' || str == 'おはよう') {
            $('#chat').prepend('<ul id="chat add" class="chat">' + str + '</ul>');
        } else if (str == 'Before') {
            $('#chat').prepend('<ul id="chat add" class="chat">After</ul>');
        } else if (str == 'test') {
            $('#chat').prepend('<ul id="chat add" class="chat">test</ul>');
        } else if (str == 'YUIちゃん') {
            $('#chat').prepend('<ul id="chat add" class="chat">はい どういたしましたか？</ul>');
        } else if (str == 'お話できる？') {
            $('#chat').prepend('<ul id="chat add" class="chat">ごめんなさい。体験版だと製品版よりあまりうまくお話できないの…<br>ごめんね💦。</ul>');
        } else if (str == 'アプリをダウンロードしたい') {
            $('#chat').prepend('<ul id="chat add" class="chat">承知しました!今からURLを送りますね！</ul>');
        } else if (str == '気に入った') {
            $('#chat').prepend('<ul id="chat add" class="chat">ありがとうございます!。よければ製品版でもお話してくださいね★。</ul>');
        } else if (str == 'Can you english typing?') {
            $('#chat').prepend('<ul id="chat add" class="chat">No, sorry.<br>I can only this engish typing.</ul>');
        } else if (str == 'Can you tooking to me?') {
            $('#chat').prepend('<ul id="chat add" class="chat">No, sorry.<br>Becouse is i cant understand it will english.</ul>');
        }
         else {
            $('#chat').prepend('<ul id="chat add" class="chat">？</ul>');
        }
    });
});