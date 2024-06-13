import { allUtilisateurs } from "./backend.mjs";
import { allPostsByUtilisateursId } from "./backend.mjs";
import { commentairesPosts } from "./backend.mjs";
import { addNewUsers } from "./backend.mjs";
import { addNewPosts } from "./backend.mjs";
import { addNewCommentaires } from "./backend.mjs";
import { deleteUsersById } from "./backend.mjs";
import { deletePostsById } from "./backend.mjs";
import { deleteCommentairesById } from "./backend.mjs";
import { updateUsers } from "./backend.mjs";
import { updatePosts } from "./backend.mjs";
import { updateCommentaires } from "./backend.mjs";
import { allReminderByUtilisateursId } from "./backend.mjs";
import { allWeeklyByUtilisateursId } from "./backend.mjs";
import { allAmisByUtilisateursId } from "./backend.mjs";

try { 
    const amisUtilisateurs = await allAmisByUtilisateursId('8ylzmsj53ovzxt0');
    console.log(JSON.stringify(amisUtilisateurs,null,2));
} catch (e) {
    console.log(e); 
}

/*
//tous les utilisateurs
try {
    const records = await allUtilisateurs() ;
     console.log(JSON.stringify(records, null, 2)) ;
} catch (e) {
     console.log(e) ;  
}

//tous les posts par utilisateurs
try { 
    const postsByUtilisateursId = await allPostsByUtilisateursId('8ylzmsj53ovzxt0');
    console.log(JSON.stringify(postsByUtilisateursId,null,2));
} catch (e) {
    console.log(e); 
}

//tous les commentaires par posts
try { 
    const commentairePost = await commentairesPosts('ocyvbm5nu007dbc');
    console.log(JSON.stringify(commentairePost,null,2));
} catch (e) {
    console.log(e); 
}


//ajouter un nouvel utilisateur
try {
    const newUsers = {
        "username": "Lulu",
        "email": "lulu@example.com",
        "emailVisibility": true,
        "password": "123456hugh",
        "passwordConfirm": "123456hugh",
        "nom": "Diaz",
        "prenom": "Sean",
        "dateDeNaissance": "2000-01-01",
        "telephone": "0601020304",
        "nbLikeTotal": 0,
        "biographie": "Je suis un acteur américain.",
        "bannerUtilisateur": "banner1",
        "cookies": true,
        "chrologiaPlus": false,
        "dataUtilisation": true,
        "nbPosts": 0,
        "amiStatut": "8ylzmsj53ovzxt0",

    };
    await addNewUsers(newUsers);
} catch (e) {
    console.error(e);
}

//ajouter un nouveau post
try {
    const newPosts = {
        "textePost": "Je suis un acteur américain.",
        "favoriNb": 0,
        "commentaireNb": 0,
        "hiddenPost": false,
        "statutLike": 0,
        "typePosts": "Weekly",
        "createur": "6nc3c6ptunkazl3",
    };
    await addNewPosts(newPosts);
} catch (e) {
    console.error(e);
}


//ajouter un nouveau commentaire
try {
    const newCommentaires = {
        "texteCommentaire": "Trop bien.",
        "commentairePost": "42ezo6nhjbrsb6p",
        "commentaireUtilisateur": "6nc3c6ptunkazl3",
    };
    await addNewCommentaires(newCommentaires);
} catch (e) {
    console.error(e);


//supprimer un utilisateur par id
try {
    await deleteUsersById('bha30p3l9f0eunc');
    console.log('Utilisateur deleted successfully');
} catch (e) {
    console.error(e);
}

//supprimer un post par id
try {
    await deletePostsById('pn2p7j20lz0gi66');
    console.log('Post deleted successfully');
} catch (e) {
    console.error(e);
}

//supprimer un commentaire par id
try {
    await deleteCommentairesById('wepn150apx6p522');
    console.log('Commentaire deleted successfully');
} catch (e) {
    console.error(e);
}

//modifier un utilisateur
try {

    const dataupdateUsers = {
        "username": "Yasuo",
    };

    await updateUsers('6nc3c6ptunkazl3',dataupdateUsers) ;
} catch (e) {
    console.error(e) ;
}

//modifier un post
try {

    const dataupdatePosts = {
        "textePost": "J'adore Lol'.",
    };

    await updatePosts('42ezo6nhjbrsb6p',dataupdatePosts) ;
} catch (e) {
    console.error(e) ;
}

//modifier un commentaire
try {

    const dataupdateCommentaires = {
        "texteCommentaire": "Génial !",
    };

    await updateCommentaires('c3bo1jr22gayxmq',dataupdateCommentaires) ;
} catch (e) {
    console.error(e) ;
}

//tous les reminder par utilisateurs
try { 
    const reminderByUtilisateursId = await allReminderByUtilisateursId('6nc3c6ptunkazl3');
    console.log(JSON.stringify(reminderByUtilisateursId,null,2));
} catch (e) {
    console.log(e); 
}

//tous les weekly par utilisateurs
try { 
    const weeklyByUtilisateursId = await allWeeklyByUtilisateursId('6nc3c6ptunkazl3');
    console.log(JSON.stringify(weeklyByUtilisateursId,null,2));
} catch (e) {
    console.log(e); 
}
*/