interface Query {
	hero: Character | null;
	hero2: Character | null;
	reviews: Review[] | null;
	search: SearchResult[] | null;
	character: Character | null;
	droid: Droid | null;
	human: Human | null;
	starship: Starship | null;
}

interface Mutation {
	createReview: Review | null;
}

interface Human {
	id: string;
	name: string;
	homePlanet: string | null;
	height: number | null;
	mass: number | null;
	friends: Character[] | null;
	friendsConnection: FriendsConnection;
	appearsIn: Episode[];
	starships: Starship[] | null;
}

interface Droid {
	id: string;
	name: string;
	friends: Character[] | null;
	friendsConnection: FriendsConnection;
	appearsIn: Episode[];
	primaryFunction: string | null;
}

interface FriendsConnection {
	totalCount: number | null;
	edges: FriendsEdge[] | null;
	friends: Character[] | null;
	pageInfo: PageInfo;
}

interface FriendsEdge {
	cursor: string;
	node: Character | null;
}

interface PageInfo {
	startCursor: string | null;
	endCursor: string | null;
	hasNextPage: boolean;
}

interface Review {
	stars: number;
	commentary: string | null;
}

interface Starship {
	id: string;
	name: string;
	length: number | null;
	coordinates: number[][];
}