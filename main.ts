enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Ghhghggg
}
function Idle_anim () {
    Idle_var = animation.createAnimation(ActionKind.Idle, 100)
    Idle_var.addAnimationFrame(img`
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
        `)
    Idle_var.addAnimationFrame(img`
        . . . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 4 4 f 4 . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 4 4 f 4 . . . . . . . 
        . . . . . . . f f 4 4 . . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . . f 4 4 f . . . . . . . 
        . . . . . . . f . . f . . . . . . . 
        . . . . . . . f . . f . . . . . . . 
        . . . . . . . f . . f . . . . . . . 
        `)
    Idle_var.addAnimationFrame(img`
        . . . . . . . . 4 4 . . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 4 f 4 4 . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 4 4 4 4 . . . . . . . 
        . . . . . . . 4 f 4 4 . . . . . . . 
        . . . . . . . f 4 4 4 . . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . f 4 4 4 4 f . . . . . . 
        . . . . . . . f 4 4 f . . . . . . . 
        . . . . . . . f . . f . . . . . . . 
        . . . . . . . f . . f . . . . . . . 
        . . . . . . . f . . f . . . . . . . 
        `)
    for (let index = 0; index < 10; index++) {
        Idle_var.addAnimationFrame(img`
            . . . . . . . . 4 4 . . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . . . 
            . . . . . . . f 4 4 4 . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . . . 
            . . . . . . . f 4 4 4 . . . . . . . 
            . . . . . . . 4 4 4 4 . . . . . . . 
            . . . . . . f 4 4 4 4 f . . . . . . 
            . . . . . . f 4 4 4 4 f . . . . . . 
            . . . . . . f 4 4 4 4 f . . . . . . 
            . . . . . . f 4 4 4 4 f . . . . . . 
            . . . . . . f 4 4 4 4 f . . . . . . 
            . . . . . . . f 4 4 f . . . . . . . 
            . . . . . . . f . . f . . . . . . . 
            . . . . . . . f . . f . . . . . . . 
            . . . . . . . f . . f . . . . . . . 
            `)
    }
}
let Idle_var: animation.Animation = null
let Sausage = sprites.create(img`
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
Idle_anim()
animation.setAction(Sausage, ActionKind.Idle)
