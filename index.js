const nedb= require('nedb');

const db= new nedb({filename:'emp.db', autoload:true});
console.log('db created');

db.insert({ name:'Fred Flintstone'}, function(err, newDoc){
                if(err) {
                    console.log('error',err);
                } else {
                    console.log('document inserted',newDoc);
                }
 }); 
 
 db.insert({ name:'Jane Doe'}, function(err, newDoc){
    if(err) {
        console.log('error',err);
    } else {
        console.log('document inserted',newDoc);
    }
});

db.insert({ name:'Allan Grey'}, function(err, newDoc){
    if(err) {
        console.log('error',err);
    } else {
        console.log('document inserted',newDoc);
    }
});
db.insert({ name:'John Brown'}, function(err, newDoc){
    if(err) {
        console.log('error',err);
    } else {
        console.log('document inserted',newDoc);
    }
});

db.find({},function(err,docs){
    if(err){
        console.log('error');
    }
        else{ console.log('documents retrieved: ',docs);
    }
})

db.find({name:'Fred Flintstone'},function(err,docs){
    if(err){
        console.log('error');
    }
        else{ console.log('documents retrieved: ',docs);
    }
})

db.update({name:'Fred Flintstone'},{$set:{'name':'Wilma Flintstone'} },{},function(err,docs){
    if(err){
         console.log('error updating documents',err);
    } else {
        console.log(docs,'documents updated')
    }
})

db.remove({name:'Jane Doe'},{}, function(err,docsRem){
    if(err){
        console.log('error deleting document');
    } else {
        console.log(docsRem, 'document removed from database')
    }
})

db.find({},function(err,docs){
    if(err){
        console.log('error');
    }
        else{ console.log('documents retrieved: ',docs);
    }
})