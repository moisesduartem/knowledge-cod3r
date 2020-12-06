module.exports = app => {
    app.route("/users")
        .post(app.resources.user.save)
    ;
};
