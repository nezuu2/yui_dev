$(function(){
    $('#ver').text('version beta0.2');

	$("#chat-button").click(function() {
		// 値を取得
        const str = $('input:text[id="chat-input"]').val();
        $('#chat').prepend('<ul id="chat add" class="chat">' + str + '</ul>');

        if (str == 'こんにちは' || str == 'こんばんは' || str == 'おはよう') {
            $('#chat').prepend('<ul id="chat add" class="chat">' + str + '</ul>');
        } else if (str == 'Before') {
            $('#chat').prepend('<ul id="chat add" class="chat">After</ul>');
        } else if (str == 'test') {
            $('#chat').prepend('<p id="chat add" class="chat">test</p>');
        } else if (str == 'YUIちゃん') {
            $('#chat').prepend('<ul id="chat add" class="chat">はい どういたしましたか？</ul>');
        } else if (str == 'お話できる？') {
            $('#chat').prepend('<ul id="chat add" class="chat">ごめんなさい。体験版だと製品版よりあまりうまくお話できないの…<br>ごめんね💦。</ul>');
        } else if (str == 'アプリをダウンロードしたい') {
            $('#chat').prepend('<ul id="chat add" class="chat">ありがとうございます!!<br>こちらからぜひダウンロードしてください</ul><a href="https://play.google.com/store/apps/details?id=com.websarva.wings.android.yui" class="btn btn--black">アプリをダウンロード</a>');
        } else if (str == '気に入った') {
            $('#chat').prepend('<ul id="chat add" class="chat">ありがとうございます!<br>よければ製品版でもお話してくださいね★。</ul><a href="https://play.google.com/store/apps/details?id=com.websarva.wings.android.yui" class="btn btn--black">アプリをダウンロード</a>');
        } else if (str == 'Can you english typing?') {
            $('#chat').prepend('<ul id="chat add" class="chat">No, sorry.<br>I can only this engish typing.</ul>');
        } else if (str == 'Can you talk to me?') {
            $('#chat').prepend('<ul id="chat add" class="chat">No, sorry.<br>Becouse is I cant understand it will english.</ul>');
        }
         else {
            $('#chat').prepend('<ul id="chat add" class="chat">？</ul>');
        }
    });

    $("#mic-button").click(function() {
		var rec = new webkitSpeechRecognition();
        rec.continuous = false; // 後述
        rec.interimResults = true; // trueにすると認識途中の結果も返す
        rec.lang = 'ja-JP'; // 言語を指定する
        rec.maxAlternatives = 1; // 結果候補の最大数(デフォルトは1)
        rec.onresult = e => {
        // 認識結果がSpeechRecognitionEventインスタンスとして渡されます
        // 認識した言葉を表示
        $('input:text[id="chat-input"]').prepend(e.results[0][0].transcript);
        rec.stop() // 認識が完了したら終了する
        }
        rec.start() // 認識を開始します
    });

    $(function speech(text) {
        var u = new SpeechSynthesisUtterance();
        u.text = document.querySelector('.input-text').value; // 発話する内容を指定する
        u.lang = 'ja-JP'; // 言語を指定する
        u.rate = 1.0; // 発話速度を指定する
        speechSynthesis.speak(u); // 喋らせる
    });
});