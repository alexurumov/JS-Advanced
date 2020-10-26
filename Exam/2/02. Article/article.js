class Article{

    constructor(title, creator) {
        this.title = title,
        this.creator = creator, 
        this.comments = [], 
        this._likes = [], 
        this.id = 1
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`;
    }

    like (username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same article twice!`);
        }

        if (this.creator === username) {
            throw new Error(`You can't like your own articles!`);
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike (username) {

        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this article!`);
        }

        this._likes = this._likes.filter(x => x !== username);
        return `${username} disliked ${this.title}`;
    }

    comment (username, content, id) {
        
        if (!id || !this.comments.find(c => c.id === id)) {
            let comment = {
                id: this.id++, 
                username, 
                content, 
                replies: []
            };
            this.comments.push(comment);
            return `${username} commented on ${this.title}`;
        }

        let comment = this.comments.find(c => c.id === id);
        if (comment) {
            let reply = {
                id: `${comment.id}.${comment.replies.length + 1}`, 
                username, 
                content
            }
            comment.replies.push(reply);

            return `You replied successfully`;
        }

    }

    toString(sortingType) {

        let result = '';
        result += `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += 'Comments:';

        if (sortingType === 'asc') {
            this.comments.sort((a, b) => a.id - b.id);
            this.comments.forEach(comment => {
                comment.replies.sort((a, b) => a.id - b.id);
            })
        }

        if (sortingType === 'desc') {
            this.comments.sort((a, b) => b.id - a.id);
            this.comments.forEach(comment => {
                comment.replies.sort((a, b) => b.id - a.id);
            })
        }

        if (sortingType === 'username') {
            this.comments.sort((a, b) => a.username.localeCompare(b.username));
            this.comments.forEach(comment => {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            })
        }
        
        this.comments.forEach(comment => {
            result += `\n-- ${comment.id}. ${comment.username}: ${comment.content}`;
            comment.replies.forEach(reply => {
                result += `\n--- ${reply.id}. ${reply.username}: ${reply.content}`;
            })
        });

        return result;
    }

}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));