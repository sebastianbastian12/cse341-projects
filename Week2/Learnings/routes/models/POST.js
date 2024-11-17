const mongoose =  require('mongoose');

const PostSchema = mongoose.Schema
({
    firstName: 
    {
        type: String,
        require: true
    },
    lastName:
    {
        type: String,
        require: true
    },
    email:
    {
        type: String,
        require: true
    },
    favoriteColor:
    {
        type: String,
        require: true
    },
    birthday:
    {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);