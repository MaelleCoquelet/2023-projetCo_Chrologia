import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

//tous les utilisateurs
export async function allUtilisateurs() {
    const records = await pb.collection('users').getFullList() ;
    return records ;    
}

//tous les posts par utilisateurs
export async function allPostsByUtilisateursId (id) {
    const sortedRecordsUtilisateurs = await pb.collection('posts').getFullList ({
        filter:`createur.id = '${id}' `,
        expand: 'createur',
    })
    return sortedRecordsUtilisateurs;
}

//tous les commentaires par posts
export async function commentairesPosts (id) {
    const sortedRecordsCommentaires = await pb.collection('commentaires').getFullList ({
        filter:`commentairePost.id = '${id}' `,
        expand: 'commentairePost',
    })
    return sortedRecordsCommentaires;
}

//ajouter un nouvel utilisateur
export async function addNewUsers (newUsers) {
    await pb.collection('users').create(newUsers);
}

//ajouter un nouveau post
export async function addNewPosts(newPosts) {
    await pb.collection('posts').create(newPosts);
}

//ajouter un nouveau commentaire
export async function addNewCommentaires(newCommentaires) {
    await pb.collection('commentaires').create(newCommentaires);
}

//supprimer un utilisateur par id
export async function deleteUsersById(id) {
    await pb.collection('users').delete(id);
}

//supprimer un post par id
export async function deletePostsById(id) {
    await pb.collection('posts').delete(id);
}

//supprimer un commentaire par id
export async function deleteCommentairesById(id) {
    await pb.collection('commentaires').delete(id);
}

//modifier un utilisateur
export async function updateUsers(idUsers, data) {
    await pb.collection('users').update(idUsers, data) ;
}
//modifier un post
export async function updatePosts(idPosts, data) {
    await pb.collection('posts').update(idPosts, data) ;
}

//modifier un commentaire
export async function updateCommentaires(idCommentaires, data) {
    await pb.collection('commentaires').update(idCommentaires, data) ;
}

//tous les reminder par utilisateurs
export async function allReminderByUtilisateursId (id) {
    const sortedRemindersUtilisateurs = await pb.collection('posts').getFullList ({
        filter:`createur.id = '${id}' `,
        filter:`typePosts = 'Reminder' `,
        expand: 'createur',
    })
    return sortedRemindersUtilisateurs;
}

//tous les weekly par utilisateurs
export async function allWeeklyByUtilisateursId (id) {
    const sortedWeeklysUtilisateurs = await pb.collection('posts').getFullList ({
        filter:`createur.id = '${id}' `,
        filter:`typePosts = 'Weekly' `,
        expand: 'createur',
    })
    return sortedWeeklysUtilisateurs;
}

export async function allAmisByUtilisateursId(id) {
    const sortedRecordsAmisUtilisateurs = await pb.collection('users').getFullList({
        filter: `id ='${id}'`,
        expand: 'amiStatut',
    });
    return sortedRecordsAmisUtilisateurs;
}