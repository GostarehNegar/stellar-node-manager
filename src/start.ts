import Docker from "dockerode"
import {Node} from '@gostarehnegar/js-stellar-node-connector'
console.log("hello world");
const docker = new Docker({});


(async ()=>{

    let node = new Node(false,{
        
    });
    const list = await docker.listContainers()
    console.log(list);

})();

