// gerer affichage
let gerer_user = document.querySelector(".gr")
let gerer_pièce = document.querySelector(".gp1")
let gerer_appareil = document.querySelector(".ga1")
// Bouton affichage
let btn_gr = document.querySelector(".gr1")
let btn_ga = document.querySelector(".ga")
let btn_gp = document.querySelector(".gp")
// Bouton ajout
let btn_p = document.getElementById("btn_p")
let btn_us = document.getElementById("btn_us")
let btn_ap = document.getElementById("btn_ap")


gerer_appareil.classList.add("dspn")
gerer_pièce.classList.add("dspn")
gerer_user.classList.add("dspn")
btn_gr.addEventListener("click", function () {
    gerer_user.classList.add("dspb")
    gerer_user.classList.remove("dspn")
    gerer_pièce.classList.remove("dspb")
    gerer_pièce.classList.add("dspn")
    gerer_appareil.classList.add("dspn")
    gerer_appareil.classList.remove("dspb")
    console.log("lol")
})
btn_ga.addEventListener("click", function () {
    gerer_user.classList.remove("dspb")
    gerer_user.classList.add("dspn")
    gerer_pièce.classList.remove("dspb")
    gerer_pièce.classList.add("dspn")
    gerer_appareil.classList.remove("dspn")
    gerer_appareil.classList.add("dspb")
    console.log("lol")
})
btn_gp.addEventListener("click", function () {
    gerer_user.classList.remove("dspb")
    gerer_user.classList.add("dspn")
    gerer_pièce.classList.add("dspb")
    gerer_pièce.classList.remove("dspn")
    gerer_appareil.classList.add("dspn")
    gerer_appareil.classList.remove("dspb")
    console.log("lol")

})
// ajout piéce
let nom_p = document.getElementById("name")
let add_p = document.getElementById("add_p")
let supr_p = document.getElementById("su_p")
let adj = document.getElementById("adp1")
// ajout piece
adj.classList.add("dspn")
nom_p.addEventListener("input", function labo(e) {
    console.log(e.target.value)


    btn_p.addEventListener("click", function labo() {
        add_p.innerHTML = e.target.value
        adj.classList.remove("dspn")
        adj.classList.add("dspb")
    })
    supr_p.addEventListener("click", function labo() {
        add_p.innerHTML = ""
        adj.classList.add("dspn")
        adj.classList.remove("dspb")
    })

})
// ajout user
let nom_u = document.getElementById("uname")
let add_u = document.getElementById("add_u")
let supr_u = document.getElementById("su_u")
let adu = document.getElementById("adu1")
//button ajout
adu.classList.add("dspn")
nom_u.addEventListener("input", function labo(e) {
    console.log(e.target.value)
    btn_us.addEventListener("click", function labo() {
        add_u.innerHTML = e.target.value
        adu.classList.remove("dspn")
        adu.classList.add("dspb")
    })
    supr_u.addEventListener("click", function labo() {
        add_u.innerHTML = ""
        adu.classList.add("dspn")
        adu.classList.remove("dspb")
    })

})
// ajout appareil
let nom_ap = document.getElementById("namep")
let add_ap = document.getElementById("add_ap")
let supr_ap = document.getElementById("su_ap")
let adap = document.getElementById("adap1")
//button ajout
adap.classList.add("dspn")
nom_ap.addEventListener("input", function labo(e) {
    console.log(e.target.value)
    btn_ap.addEventListener("click", function labo() {
        add_ap.innerHTML = e.target.value
        adap.classList.remove("dspn")
        adap.classList.add("dspb")
    })
    supr_ap.addEventListener("click", function labo() {
        add_ap.innerHTML = ""
        adap.classList.add("dspn")
        adap.classList.remove("dspb")
    })

})