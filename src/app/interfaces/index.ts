export interface MyGram {
    feed:  Feed[];
    users: User[];
}

export interface Feed {
    id: string;
}

export interface User {
    bio:       string;
    followers: string;
    following: string;
    post:      Post[];
    posts:     string;
    uPic:      string;
    uid:       string;
    userName:  string;
}

export interface Post {
    caption: string;
    date:    string;
    id:      string;
    likes:   string;
    pImg:    string;
    time:    string;
    uid:     string;
}
