function mkUniv (num: number) {
    Uni = []
    for (let index = 0; index < num * num; index++) {
        if (randint(0, 10) > 6) {
            Uni.push(randint(2, 6))
        } else {
            Uni.push(0)
        }
    }
}
function spot (xx: number, yy: number) {
    return xx + yy * Diam
}
let Uni: number[] = []
let Diam = 0
Diam = 40
mkUniv(Diam)
let X = 0
let Y = 0
