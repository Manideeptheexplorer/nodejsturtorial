const eventEmitter=require('events')

const evetn=new eventEmitter()

evetn.on('kusuma',()=>{
    console.log('it was you that takes my breath away');

})
evetn.emit('kusuma')