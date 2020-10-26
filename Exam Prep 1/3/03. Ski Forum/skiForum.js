class Forum {
    
    constructor() {
        this.users = [];
        this.questions = [];
        this.id = 1;
        this.loggedInUsers = [];
    }

    register(username, password, repeatPassword, email) {
        
        if (!username || !password || !repeatPassword || !email) {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }

        if (this.users.find(user => user.username === username) || 
            this.users.find(user => user.email === email)) {
                
                throw new Error('This user already exists!');
        }
        
        let newUser = {
            username: username, 
            password: password, 
            email: email
        };

        this.users.push(newUser);

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        
        if (!this.users.find(user => user.username === username)) {
            throw new Error('There is no such user');
        }

        let user = this.users.find(user => user.username === username && user.password === password);

        if (user) {
            this.loggedInUsers.push(user);
            return `Hello! You have logged in successfully`;
        }
        
    }

    logout(username, password) {
        
        if (!this.users.find(user => user.username === username)) {
            throw new Error('There is no such user');
        }

        let loggedInUser = this.loggedInUsers.find(user => user.username === username && user.password === password);

        if (loggedInUser) {
            
            this.loggedInUsers = this.loggedInUsers.filter(user => user.username !== username);
            
            return `You have logged out successfully`;
        }
    }

    postQuestion(username, question) {
        
        if (!this.users.find(user => user.username = username) || 
            !this.loggedInUsers.find(user => user.username = username)) {

                throw new Error('You should be logged in to post questions');

        }

        if (!question) {
            throw new Error('Invalid question');
        }
        
        let q = {
            id: this.id++, 
            user: username, 
            question: question, 
            answers: []
        }

        this.questions.push(q);

        return `Your question has been posted successfully`;
    }

    postAnswer(username, questionId, answer) { 

        if (!this.users.find(user => user.username = username) || 
            !this.loggedInUsers.find(user => user.username = username)) {

                throw new Error('You should be logged in to post answers');

        }
        
        if (!answer) {
            throw new Error('Invalid answer');
        }

        let question = this.questions.find(question => question.id === questionId);

        if (!question) {

            throw new Error('There is no such question');

        } else {

            let ans = {
                user: username, 
                answer: answer
            };

            question.answers.push(ans);
            
            return `Your answer has been posted successfully`;

        }


    }

    showQuestions() {

        let result = '';

        this.questions.forEach(question => {
            result += `Question ${question.id} by ${question.user}: ${question.question}`;
            question.answers.forEach(answer => {
                result += `\n---${answer.user}: ${answer.answer}`;
            })
            result += `\n`;
        })

        return result.trim();
    }
}