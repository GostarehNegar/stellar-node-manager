import Docker from "dockerode"
console.log("hello world");
const docker = new Docker({});


(async ()=>{

    const list = await docker.listContainers()
    console.log(list);

})();

