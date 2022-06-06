const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            Unique: true,
            Required: 'You need to make a USERNAME!',
            trim: true
        },
        email: {
            type: String,
            Unique: true,
            Required: 'You need to type in your email!',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address!']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // Place friends(array of _id values self-referncing User model)
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Get total count of user's friends

const User = model('User', UserSchema);

module.exports = User;