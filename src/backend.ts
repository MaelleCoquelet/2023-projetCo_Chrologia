import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

//tous les utilisateurs
export async function allUtilisateurs() {
    const records = await pb.collection('users').getFullList() ;
    return records ;    
}

//un utilisateur
export async function oneUtilisateur(id:string) {
    const records = await pb.collection('users').getOne(id) ;
    return records ;    
}

//tous les posts par utilisateurs
export async function allPostsByUtilisateursId (id:string) {
    const sortedRecordsUtilisateurs = await pb.collection('posts').getFullList ({
        filter:`createur.id = '${id}' `,
        expand: 'createur',
    })
    return sortedRecordsUtilisateurs;
}

//tous les commentaires par posts
export async function commentairesPosts (id:string) {
    const sortedRecordsCommentaires = await pb.collection('commentaires').getFullList ({
        filter:`commentairePost.id = '${id}' `,
        expand: 'commentairePost',
    })
    return sortedRecordsCommentaires;
}

//ajouter un nouvel utilisateur
export async function addNewUsers (newUsers:any) {
    await pb.collection('users').create(newUsers);
}

//ajouter un nouveau post
export async function addNewPosts(newPosts:any) {
    await pb.collection('posts').create(newPosts);
}

//ajouter un nouveau commentaire
export async function addNewCommentaires(newCommentaires:any) {
    await pb.collection('commentaires').create(newCommentaires);
}

//supprimer un utilisateur par id
export async function deleteUsersById(id:string) {
    await pb.collection('users').delete(id);
}

//supprimer un post par id
export async function deletePostsById(id:string) {
    await pb.collection('posts').delete(id);
}

//supprimer un commentaire par id
export async function deleteCommentairesById(id:string) {
    await pb.collection('commentaires').delete(id);
}

//modifier un utilisateur
export async function updateUsers(idUsers:string, data:any) {
    await pb.collection('users').update(idUsers, data) ;
}
//modifier un post
export async function updatePosts(idPosts:string, data:any) {
    await pb.collection('posts').update(idPosts, data) ;
}

//modifier un commentaire
export async function updateCommentaires(idCommentaires:string, data:any) {
    await pb.collection('commentaires').update(idCommentaires, data) ;
}

//tous les reminder
export async function allReminder() {
    const sortedReminders = await pb.collection('posts').getFullList ({
        filter:`typePosts ='Reminder' `,
        expand: 'createur',
        sort:'created',
    })
    return sortedReminders;
}

//tous les reminder par utilisateurs
export async function allReminderByUtilisateursId (id:string) {
    const sortedRemindersUtilisateurs = await pb.collection('posts').getFullList ({
        filter:`createur.id = '${id}' && typePosts ='Reminder' `,
        expand: 'createur',
    })
    return sortedRemindersUtilisateurs;
}

//tous les weekly
export async function allWeekly () {
    const sortedWeeklys = await pb.collection('posts').getFullList ({
        filter:`typePosts = 'Weekly'`,
        expand: 'createur',
        sort:'created',
    })
    return sortedWeeklys;
}

//tous les weekly par utilisateurs
export async function allWeeklyByUtilisateursId (id:string) {
    const sortedWeeklysUtilisateurs = await pb.collection('posts').getFullList ({
        filter:`createur.id = '${id}' && typePosts = 'Weekly' `,
        expand: 'createur',
    })
    return sortedWeeklysUtilisateurs;
}

export async function allAmisByUtilisateursId(id:string) {
    const sortedRecordsAmisUtilisateurs = await pb.collection('users').getFullList({
        filter: id = '${id}',
        expand: 'amiStatut',
    });
    return sortedRecordsAmisUtilisateurs;
}