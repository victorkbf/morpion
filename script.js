var tour=0;
var score_j1=0, score_j2=0;
var victoire=0;
var grille=[[0,0,0],[0,0,0],[0,0,0]];

var couleur_j1="#A0D5B4";
var couleur_j2="#467C89";

//fonction de selection d'une case
function validate(ligne, colonne) {
    //alert("Ligne : " + ligne + " Colonne : " + colonne);
    if (victoire!=0) {
        alert("La partie est terminée, relancez une partie");
    }
    else if (grille[ligne-1][colonne-1]!=0) {
        alert("Vous ne pouvez pas jouer dans une case déjà marquée");
    }
    else {
        grille[ligne-1][colonne-1]=tour%2+1;
        tour=tour+1;
        document.getElementById("statut_de_la_partie").innerHTML = "C'est au joueur "+ Number(tour%2+1) +" de jouer";
    }
    maj_grille_score(grille);
    test_victoire();
}

//fonction d'affichage du tableau ainsi que de l'information sur le jeu
function maj_grille_score() {
    for (let ligne=0; ligne<3; ligne++) {
        for (let colonne=0; colonne<3; colonne++) {
            if (grille[ligne][colonne]==0) {
                document.getElementById(Number(ligne+1)+"_"+Number(colonne+1)).style.background = "white";
            }
            if (grille[ligne][colonne]==1) {
                document.getElementById(Number(ligne+1)+"_"+Number(colonne+1)).style.background = couleur_j1;
            }
            if (grille[ligne][colonne]==2) {
                document.getElementById(Number(ligne+1)+"_"+Number(colonne+1)).style.background = couleur_j2;
            }
            console.log(ligne+colonne);
        } 
    }
    document.getElementById("score_joueur_1").innerHTML = score_j1;
    document.getElementById("score_joueur_2").innerHTML = score_j2;
}

//fonction appelée en cliquant sur le bouton de lancement d'une nouvelle partie. Reinitialise la grille, le tour, l'indicateur de victoire et réaffiche une grille vierge.
function nouvelle_partie() {
    grille=[[0,0,0],[0,0,0],[0,0,0]]
    maj_grille_score();
    tour=0;
    victoire=0;
    document.getElementById("statut_de_la_partie").innerHTML = "C'est au joueur "+ Number(tour%2+1) +" de jouer";
    document.getElementById("status_bar").style.background = "none";
}

//fonction de test des différents scénarios de victoire
function test_victoire() {
    if (victoire==0) {
        for (let ligne=0; ligne<3; ligne++) {
            if (grille[ligne][0]==grille[ligne][1] && grille[ligne][1]==grille[ligne][2] && grille[ligne][0]!=0) victoire=grille[ligne][0];
        }
        for (let colonne=0; colonne<3; colonne++) {
            if (grille[0][colonne]==grille[1][colonne] && grille[1][colonne]==grille[2][colonne] && grille[0][colonne]!=0) victoire=grille[0][colonne];
        }
        if (grille[0][0]==grille[1][1] && grille[1][1]==grille[2][2] && grille[2][2]!=0) victoire=grille[0][0];
        if (grille[0][2]==grille[1][1] && grille[1][1]==grille[2][0] && grille[2][0]!=0) victoire=grille[0][2];

        if (victoire==1) {
            document.getElementById("statut_de_la_partie").innerHTML = "Victoire du joueur 1<br>Bravo !";
            score_j1=score_j1+1
            maj_grille_score()
            document.getElementById("status_bar").style.background = "white";
        }

        if (victoire==2) {
            document.getElementById("statut_de_la_partie").innerHTML = "Victoire du joueur 2<br>Bravo !";
            score_j2=score_j2+1
            maj_grille_score()
            document.getElementById("status_bar").style.background = "white";
        }
    }
}