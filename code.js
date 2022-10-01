//Add a background color at itens
(function backgroundItem(){
    let itens = document.getElementsByClassName("item")
    for(let i = 1; i < itens.length; i++){
        if(i % 2){
            itens[i].style.backgroundColor = "#f2f2f4"
            itens[i].style.boxShadow = "-300px 0 13px #f2f2f4, -300px 0 30px #f2f2f4"
        }
    }
})()


/*
function makeMoviment(){
    let couch = document.getElementsByClassName("couchMove")[0]
    let topC = 0
    let leftC = 180 
    let intenciti = 1
    let intenciti2 = 1
    let turn = 1


    let loop = setInterval(() => {
        if(leftC > 0 && topC < 180 && turn == 1){
            if(topC < 90){
                console.log("kn");
                intenciti2++
                couch.style.top = (topC += intenciti2) + "px"
                couch.style.left = (leftC -= intenciti2) + "px"
            }else{
                if(intenciti2 > 1)
                intenciti2--
                couch.style.left = (leftC -= intenciti2) + "px"
                couch.style.top = (topC += intenciti2) + "px"

            }
        }else if(turn == 1) turn++

        else if(leftC >= -180 && topC <= 180 && turn == 2){
            if(topC < 90){
                console.log("kn");
                intenciti2++
                couch.style.top = (topC -= intenciti2) + "px"
                couch.style.left = (leftC -= intenciti2) + "px"
            }else{
                if(intenciti2 > 1)
                intenciti2--
                couch.style.left = (leftC -= intenciti2) + "px"
                couch.style.top = (topC -= intenciti2) + "px"

            }
            couch.style.top = (topC -= intenciti) + "px"
            couch.style.left = (leftC -= intenciti) + "px"
        }else if(turn == 2) turn++

        else if(leftC >= -181 && topC >= -180 && leftC <= 0 &&turn == 3){
            couch.style.top = (topC -= intenciti) + "px"
            couch.style.left = (leftC += intenciti) + "px"
        }else if(turn == 3) turn++

        else if(leftC >= -1 && topC >= -181 && topC <=0 && turn == 4){
            couch.style.top = (topC += intenciti) + "px"
            couch.style.left = (leftC += intenciti) + "px"
        }else if(turn == 4){
            turn = 1
            topC = 0
            leftC = 180 
        }
        
    },50)

    
}

makeMoviment()
*/