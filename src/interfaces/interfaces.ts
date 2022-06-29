export interface IForAllUser {
    readonly avatar_url: string
    readonly public_repos: number

    readonly id: string
    readonly login: string
}

export interface IUserInfo { 
    readonly id: number
    readonly login: string
    readonly avatar_url: string
    readonly public_repos: number
    readonly followers: number
    readonly following: number
    readonly email: string
    readonly location: string
    readonly name: string
    readonly bio: string
    readonly join_date: string
    readonly html_url: string
}