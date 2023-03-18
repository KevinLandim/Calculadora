let dadosDev=[]
const form = document.getElementById('devForm')
form.addEventListener('submit',function(ev){
    ev.preventDefault()
   
    const nome = document.querySelector('input[name="name"]').value
    let tempoExp = []
    document.querySelectorAll('input[type="radio"]:checked').forEach(function(elemento){
    tempoExp.push(elemento.value)
    })
    

   let tecnologiaETemp=""
   document.querySelectorAll('input[name="tecnologia"]').forEach(function(elemento,index){
    tecnologiaETemp+= "-" + elemento.value  +
     "(" + tempoExp[index] + ")"
   
   })
   dadosDev.push({
    nome,
    tecnologiaETemp,
   }
   )

  document.querySelector("form").reset();


  
    
    console.log(dadosDev)

})

const addTec=document.getElementById('addTec')
addTec.addEventListener('click',function(){
   //criando inputs
    const tecSection = document.createElement('section')
    tecSection.id='tecSection'
    const sectionContainer=document.getElementById('sectionContainer')
    const inputTec = document.createElement('input')
    inputTec.type='text'
    inputTec.name='tecnologia'
    inputTec.id='inputTec'
    const labelTec= document.createElement('label')
    labelTec.for='inputTec'
    labelTec.innerText="\n\nNome da tecnologia\n" 

    const tempExp = document.createElement('label')
    tempExp.for='tempExp'
    tempExp.innerText="\nTempo de experiência: \n"

    //criando radio inputs

    //radio 0 a2
    const inputRadio0a2Anos=document.createElement('input')
    inputRadio0a2Anos.type='radio'
    inputRadio0a2Anos.id='0a2Anos'
    inputRadio0a2Anos.value='0-2 anos'
    // inputRadio0a2Anos.name='radio'

    const labelRadio0a2Anos=document.createElement('label')
    labelRadio0a2Anos.for='0a2Anos'
    labelRadio0a2Anos.innerText="0-2 Anos"
    //radio 3 a 5
    const inputRadio3a5Anos=document.createElement('input')
    inputRadio3a5Anos.type='radio'
    inputRadio3a5Anos.id='3-5Anos'
    inputRadio3a5Anos.value="3-5 Anos"

   
    // inputRadio3a5Anos.name='radio'


    const labelRadio3a5Anos=document.createElement('label')
    labelRadio3a5Anos.for='3a5Anos'
    labelRadio3a5Anos.innerText="3-5 Anos"

    //radio 5+
    const inputRadio5Anos=document.createElement('input')
    inputRadio5Anos.type='radio'
    inputRadio5Anos.id='5Anos'
    inputRadio5Anos.value='5+ anos'
    // inputRadio5Anos.name="radio"

    const labelRadio5Anos=document.createElement('label')
    labelRadio5Anos.for='5Anos'
    labelRadio5Anos.innerText="5+ Anos \n"

    //criando button de remover linha
    const buttonDelete =document.createElement('button')
    buttonDelete.type="button"
    buttonDelete.innerText='Remover linha'

    buttonDelete.addEventListener('click',function(ev){
        const tecSection = ev.currentTarget.parentNode
        const sectionContainer=document.getElementById('sectionContainer')
        sectionContainer.removeChild(tecSection)
        

    })



    tecSection.append(labelTec,inputTec,tempExp,inputRadio0a2Anos,labelRadio0a2Anos,inputRadio3a5Anos,labelRadio3a5Anos,inputRadio5Anos,labelRadio5Anos,buttonDelete)
    sectionContainer.appendChild(tecSection)


})