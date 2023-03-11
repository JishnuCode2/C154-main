AFRAME.registerComponent("flying-birds",{
    init: function(){
      for (var i =1; i<=20; i++){
        //create id
        var id = `bird${i}`

        //position
        var posX = (Math.random() * 3000 + (-1000))
        var posY = (Math.random() * 2 + (-1))
        var posZ = (Math.random() * 3000 + (-1000))
        var position = {x: posX, y: posY, z:posZ}
        
        //call function
        this.createBirds(id,position)
      }
    },
    createBirds: (id, position)=>{
        
        // creating the brid model entity
        var birdEl = document.createElement("a-entity")
        birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        
        //animated models
        birdEl.setAttribute("animation-mixer", {})

        //set attributes
        birdEl.setAttribute("id",id)
        birdEl.setAttribute("position", position)
        birdEl.setAttribute("scale",{x: 500 , y: 500, z: 500})

        //get the terrain element
        var terrainEl = document.querySelector("#terrain")
        
        //append to terrain as child entity
        terrainEl.appendChild(birdEl)
    }
})