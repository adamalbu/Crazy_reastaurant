enum ActionKind {
    Walking,
    Idle,
    Jumping
}
function Idle () {
    let Idle2: animation.Animation = null
    animation.attachAnimation(Sausage, Idle2)
}
let Sausage: Sprite = null
Sausage = sprites.create(img`
    . . . . . . . . 4 4 . . . . . . . . 
    . . . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . f 4 4 f . . . . . . . 
    . . . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . f 4 4 f . . . . . . . 
    . . . . . . . 4 f f 4 . . . . . . . 
    . . . . . . f 4 4 4 4 f . . . . . . 
    . . . . . . f 4 4 4 4 f . . . . . . 
    . . . . . . f 4 4 4 4 f . . . . . . 
    . . . . . . f 4 4 4 4 f . . . . . . 
    . . . . . . f 4 4 4 4 f . . . . . . 
    . . . . . . . f 4 4 f . . . . . . . 
    . . . . . . . f . . f . . . . . . . 
    . . . . . . . f . . f . . . . . . . 
    . . . . . . . f . . f . . . . . . . 
    `, SpriteKind.Player)
