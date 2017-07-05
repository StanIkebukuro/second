/**
 * 更新処理
 * 1フレームごとに実行される更新処理
 *
 * @license MIT
 * @copyright 2017 YuTanaka@AmuseOne
 */
function update() {

    game.physics.arcade.overlap(dude, stars, pickStar, null, this);
  // let hit = game.physics.arcade.collide(dude,stars);
/*    //dude.x++;
  for (let i = 0; i<3; i++) {
　if(star[i].input.pointerOver()) {

    star[i].kill();
}
} */
 dude.x = game.input.x;
 dude.y = game.input.y;

 if (dude.body.velocity.x >=0) {
     dude.animations.play("right");
 }
 else {
     dude.animations.play("left");
 }


if(game.input.mousePointer.isDown)
{
    hoge.x = (game.input.x - dude.x);
    hoge.y = (game.input.y - dude.y);
}

/*star.forEach(function(st, index, ar) {
    let hit = game.physics.arcade.collide(dude,st); */

    if(st.input.pointOver()) {

        st.kill();

    }
}

//dudeに、最初に設定したスプライト、starに、次に設定したグループ内のスプライトが渡せる
function pickStar(dude, star) {
   dude.kill();
}
