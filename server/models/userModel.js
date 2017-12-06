class userModel {
    constructor(data) {
        this.email = data.email;
        this.username = data.username;
        this.password = data.password;
        this.first_name = data.first_name;
        this.last_name = data.last_name;
    }
}
module.exports = userModel;