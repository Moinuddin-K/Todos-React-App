import mongoose from 'mongoose';


// Create a schema to be used by our system
const schema = new mongoose.Schema({
    title:{
        type: String,
        required: 'The title field is required.',
    },
    description:{
        type: String,
        required: 'The description field is required.'
    },
    dueDate:{
        type:String,
        required : 'The due date is required',
    },
    dueTime:{
        type:String,
        required : 'The due time is required',
    },
    createdDate:{
        type: String,
        required: 'The createdDate field is required.'
    },
    lastModifiedDate:{
        type: String,
        required: 'The lastModifiedDate field is required.'
    },
    isComplete:{
        type:Boolean,
    }
}, {versionKey: false });

// Creating a model from our schema
const model = mongoose.model('todo', schema);

// Exporting the model as default
export default model;