/**
 * 作成処理
 * ゲームにアセットを追加するなどの生成処理を行う
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
var dude;
//配列に変更
var stars;
//var star = array


function create() {
     //dudeとstarsグループ内のすべての星が衝突するようになる
     stars = game.add.group();

     //新規グループ内のオブジェクトに物理挙動を有にする
        stars.enableBody = true;



    //配列の最後
    for(let i = 0; i < 25; i++) {
      let star = stars.create(game.rnd.integerInRange(80,560), game.rnd.integerInRange (80, 280), 'star');



    star.inputEnabled = true;//入力を受ける
    star.body.collideWorldBounds = true;
    star.body.velocity.x = game.rnd.realInRange(-100, 100);
    star.body.velocity.y = game.rnd.realInRange(-100, 100);
    star.body.bounce.x = 1;
    star.body.bounce.y = 1;

}
 /*star.forEach(function(st, index, ar) {
     game.physics.arcade.enable(st);

     st.inputEnabled = true;//入力を受ける
     st.body.collideWorldBounds = true;
     st.body.bounce.x = 1;
     st.body.bounce.y = 1;


     st.body.velocity.x = game.rnd.realInRange(-200, 200);
     st.body.velocity.y = game.rnd.realInRange(-200, 200);


 })*/

    dude = game.add.sprite(50,69,'dude');
    dude.frame = 2;
    dude.animations.add('left', [.0,1,2,3,], 10, true);
    dude.animations.add('right', [4,5,6,7,8],10,true);
    dude.animations.play('right');

    dude.anchor = new Phaser.Point(0.5,1);

//物理エンジンをdudeが使う
//ARCADE物理エンジン=速度が近い
    game.physics.arcade.enable(dude);


//物理エンジンを有効にすると、
//velocity=速度。秒度ピクセルで指定
//dude.body.velocity.x = game.rnd.realInRange(-200, 200);
//dude.body.velocity.y = game.rnd.realInRange(-200, 200);
dude.body.collideWorldBounds = true;
dude.body.bounce.x = 1;
dude.body.bounce.y = 1;






}
