import type { ColumnType } from 'kysely';
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
	? ColumnType<S, I | undefined, U>
	: ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const FriendStatus = {
	PENDING: 'PENDING',
	ACCEPTED: 'ACCEPTED',
	REJECTED: 'REJECTED',
} as const;
export type FriendStatus = (typeof FriendStatus)[keyof typeof FriendStatus];
export const PublishType = {
	PUBLIC: 'PUBLIC',
	FRIENDS: 'FRIENDS',
	FRIENDS_EXCEPT: 'FRIENDS_EXCEPT',
	ONLY_ME: 'ONLY_ME',
	SPECIFIC_FRIENDS: 'SPECIFIC_FRIENDS',
	CUSTOM: 'CUSTOM',
} as const;
export type PublishType = (typeof PublishType)[keyof typeof PublishType];
export const RoleOnGroup = {
	ADMIN: 'ADMIN',
	MOD: 'MOD',
	MEMBER: 'MEMBER',
} as const;
export type RoleOnGroup = (typeof RoleOnGroup)[keyof typeof RoleOnGroup];
export const TypeOfGroup = {
	PUBLIC: 'PUBLIC',
	PRIVATE: 'PRIVATE',
} as const;
export type TypeOfGroup = (typeof TypeOfGroup)[keyof typeof TypeOfGroup];
export const TypeOfLike = {
	LIKE: 'LIKE',
	LOVE: 'LOVE',
	CARE: 'CARE',
	HAHA: 'HAHA',
	WOW: 'WOW',
	SAD: 'SAD',
	ANGRY: 'ANGRY',
} as const;
export type TypeOfLike = (typeof TypeOfLike)[keyof typeof TypeOfLike];
export type Category = {
	id: string;
	name: string;
	icon: string | null;
	parentCategoryId: string | null;
};
export type Comment = {
	id: string;
	userId: string;
	postId: string;
	content: string;
	createdAt: Generated<Timestamp>;
	updatedAt: Timestamp;
	media: unknown | null;
};
export type FriendRequest = {
	id: string;
	senderId: string;
	receiverId: string;
	status: FriendStatus;
	createdAt: Generated<Timestamp>;
	updatedAt: Timestamp;
};
export type FriendShip = {
	id: string;
	userId: string;
	userOfId: string;
	friendSince: Generated<Timestamp>;
};
export type Group = {
	id: string;
	name: string;
	ownerId: string;
	type: TypeOfGroup;
	background: string | null;
	avatar: string | null;
	createdAt: Generated<Timestamp>;
	userId: string | null;
};
export type GroupsMembers = {
	memberId: string;
	groupId: string;
};
export type Like = {
	id: string;
	userId: string;
	postId: string;
	type: TypeOfLike;
};
export type Page = {
	id: string;
	name: string;
	description: string | null;
	avatar: string | null;
	cover: string | null;
	createdAt: Generated<Timestamp>;
	updatedAt: Timestamp;
};
export type Permission = {
	id: string;
	name: string;
};
export type Post = {
	id: string;
	userId: string | null;
	content: string | null;
	location: string | null;
	media: unknown | null;
	createdAt: Generated<Timestamp>;
	updatedAt: Timestamp;
	publishType: Generated<PublishType>;
	isDeleted: Generated<boolean>;
	pageId: string | null;
};
export type Product = {
	id: string;
	categoryId: string;
	name: string | null;
	price: number | null;
	description: string | null;
	location: string | null;
	images: unknown | null;
};
export type Role = {
	id: string;
	name: string;
};
export type RolePermission = {
	roleId: string;
	permissionId: string;
};
export type RolesOnGroup = {
	userId: string;
	groupId: string;
	role: RoleOnGroup;
};
export type ShortCut = {
	id: string;
	groupId: string;
	userId: string;
};
export type Story = {
	id: string;
	userId: string | null;
	content: string | null;
	media: string[];
	createdAt: Generated<Timestamp>;
	updatedAt: Timestamp;
};
export type User = {
	id: string;
	firstName: string | null;
	lastName: string | null;
	email: string;
	age: number | null;
	avatar: string | null;
	phone: string | null;
	password: string;
	dob: Timestamp | null;
	gender: string | null;
	school: string | null;
	background: string | null;
	workAt: string | null;
	address: string | null;
	pageId: string | null;
};
export type UserRole = {
	userId: string;
	roleId: string;
};
export type DB = {
	categories: Category;
	comments: Comment;
	friendRequests: FriendRequest;
	friendShip: FriendShip;
	groupMembers: GroupsMembers;
	groupRoles: RolesOnGroup;
	groups: Group;
	likes: Like;
	pages: Page;
	permissions: Permission;
	posts: Post;
	products: Product;
	rolePermissions: RolePermission;
	roles: Role;
	shortCuts: ShortCut;
	stories: Story;
	userRoles: UserRole;
	users: User;
};
