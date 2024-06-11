/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Commentaires = "commentaires",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CommentairesRecord = {
	commentairePost?: RecordIdString
	commentaireUtilisateur?: RecordIdString
	texteCommentaire?: string
}

export enum PostsTypePostsOptions {
	"Reminder" = "Reminder",
	"Weekly" = "Weekly",
}
export type PostsRecord = {
	commentaireNb?: number
	createur?: RecordIdString
	datePost?: IsoDateString
	favoriNb?: number
	hiddenPost?: boolean
	imagePost?: string
	statutLike?: number
	textePost?: string
	typePosts?: PostsTypePostsOptions
}

export enum UsersBannerUtilisateurOptions {
	"banner1" = "banner1",
	"banner2" = "banner2",
	"banner3" = "banner3",
}
export type UsersRecord = {
	amiStatut?: RecordIdString[]
	bannerUtilisateur?: UsersBannerUtilisateurOptions
	biographie?: string
	chrologiaPlus?: boolean
	cookies?: boolean
	dataUtilisation?: boolean
	dateDeNaissance?: IsoDateString
	nbLikeTotal?: number
	nbPosts?: number
	nom?: string
	photoProfil?: string
	prenom?: string
	telephone?: number
}

// Response types include system fields and match responses from the PocketBase API
export type CommentairesResponse<Texpand = unknown> = Required<CommentairesRecord> & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	commentaires: CommentairesRecord
	posts: PostsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	commentaires: CommentairesResponse
	posts: PostsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'commentaires'): RecordService<CommentairesResponse>
	collection(idOrName: 'posts'): RecordService<PostsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
