$(function () {
  // Enterを押せなくする
  $(document).on("keypress", "input:not(.allow_submit)", function (event) {
    return event.which !== 13;
  });

  trials = 0;
  ran = Math.round(Math.random() * 9);

  $('.jquery-form [name=input-number]').change(function () {

    // 試行回数
    trials++;
    $('.trials').html(trials);

    const VAL_NUMBER = $(this).val();
    // NaNのとき0にする
    let val = Number(VAL_NUMBER) || 0;
    //数字がどのぐらい離れているか
    const RESULT = Math.abs(val - ran);

    //判定処理
    if (val < 0 || val > 9) {
      $('.result-text').html("範囲内で入力してね！");
    } else if (RESULT == 0) {
      $('.result-text').html("正解!");
    } else if (RESULT <= 2) {
      $('.result-text').html("惜しいね！");
    } else {
      $('.result-text').html("違うよ！");
    }
  });
})