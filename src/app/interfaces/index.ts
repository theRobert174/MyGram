
export interface MyGram {
    Comments: { 
        [key: string]: { 
            [key: string]: Comment 
        } 
    };
    Feed:     { 
        [key: string]: boolean 
    };
    Posts:    { 
        [key: string]: Post 
    };
    Users:    { 
        [key: string]: User 
    };
}

export interface Comment {
    Comment:   string;
    idComment: string;
    uid:       string;
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

export interface User {
    bio:       string;
    followers: string;
    following: string;
    posts:     string;
    uPic:      string;
    uid:       string;
    userName:  string;
}

export interface AuthUID {
    uid:            string;
    email:          string;
    displayName:    string;
    photoURL:       string;
    emailVerified: boolean;
}

export interface LogData {
    email:      string,
    password:   string
}
