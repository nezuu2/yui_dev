$(function(){
    $('#ver').text('version beta3.0');

	$(".chat-button").click(function() {
		// 値を取得
        const str = $('input:text[id="chat-input"]').val();
        //自分が送ったメッセージを表示
        $('#field').prepend('<ul id="chat" class="chat" style="width:10em">' + str + '</ul>');

        if (str == 'こんにちは' || str == 'こんばんは' || str == 'おはよう') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em">' + str + '</ul>');
        } else if (str == 'Before') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em">After</ul>');
        } else if (str == 'test') {
            $('#field').prepend('<p id="chat" class="chat" style="width:10em">test</p>');
        } else if (str == 'YUIちゃん') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em">はい どういたしましたか？</ul>');
        } else if (str == 'お話できる？') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em">ごめんなさい。体験版だと製品版よりあまりうまくお話できないの…<br>ごめんね💦。</ul>');
        } else if (str == 'アプリをダウンロードしたい') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em">ありがとうございます!!<br>こちらからぜひダウンロードしてください</ul><a href="https://play.google.com/store/apps/details?id=com.websarva.wings.android.yui" class="btn btn--black">アプリをダウンロード</a>');
        } else if (str == '気に入った') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em;float:right">ありがとうございます!<br>よければ製品版でもお話してくださいね★。</ul><a href="https://play.google.com/store/apps/details?id=com.websarva.wings.android.yui" class="btn btn--black">アプリをダウンロード</a>');
        } else if (str == 'Can you english?') {
            $('#field').prepend('<ul id="chat" class="chat" style="width:10em;float:right;">No, sorry.<br>I cant english</ul>');
        }
         else {
            $('#field').prepend('<ul id="chat" class="chat">？</ul>');
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

    $('.chat-button').click(function() {
        var u = new SpeechSynthesisUtterance();
        u.text = $('input:text[id="chat-input"]').val(); // 発話する内容を指定する
        u.lang = 'ja_JP'; // 言語を指定する
        u.rate = 1.1; // 発話速度を指定する
        speechSynthesis.speak(u); // 喋らせる
      });
});