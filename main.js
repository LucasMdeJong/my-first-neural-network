class Neural{
    constructor(){
        this.weight0=Math.random(),
        this.weight1=Math.random(),
        this.weight2=Math.random(),
        this.weight3=Math.random();
    }
    train(input,output,num) {
        let err=[];
        let tentative=undefined;
        let values=[];
        for(let i=0;i<num;i++){
            tentative=this.think(input);
            err=[];
            for(let j=0; j<input.length;j++){
                err[j]=output[j]-tentative[j];
            }
;
            let adj=[];
            for(let j=0;j<=3;j++){
                adj[j]=0;
                for(let k=0; k<input.length;k++){
                    adj[j]+=2*err[k]*input[k]**j/1000;
                };
            };
            this.weight0+=adj[0];
            this.weight1+=adj[1];
            this.weight2+=adj[2];
            this.weight3+=adj[3];
        }
    }
    
    think(input) {
        let out=[];
        for(let i=0;i<input.length;i++){
            out[i]=this.weight0+this.weight1*input[i]+this.weight2*input[i]**2+this.weight3*input[i]**3;
        };
        return out;
    }
    
}

window.onload = function(){
    let training=document.getElementById("train");
    training.addEventListener("click",myTraining);
    let aRes=document.getElementById("a res");
    let bRes=document.getElementById("b res");
    let cRes=document.getElementById("c res");
    let dRes=document.getElementById("d res");
    //let trainRes=document.getElementById("tr res");
    let result=document.getElementById("result");
    let subm=document.getElementById("submit");
    subm.addEventListener("click",inputPoints);
    let training2=document.getElementById("train2");
    training2.addEventListener("click",myTraining2);
    let aRes2=document.getElementById("a res2");
    let bRes2=document.getElementById("b res2");
    let cRes2=document.getElementById("c res2");
    let dRes2=document.getElementById("d res2");
    
    
    let neuron=new Neural();
    
    function myTraining(){
        let a= + document.getElementById("a").value; //we convert it to a number
        let b= + document.getElementById("b").value;
        let c= + document.getElementById("c").value;
        let d= + document.getElementById("d").value;
        let p= + document.getElementById("p").value;
        let n= + document.getElementById("n").value;
        let input=[];
        let output=[];
        for(i=0;i<p;i++){
            input[i]=Math.random()*2-1;
            output[i]=a+b*input[i]+c*input[i]**2+d*input[i]**3;
        };
            
        
        neuron.train(input,output,n);
     
        aRes.innerHTML=Math.round(100*neuron.weight0)/100;
        bRes.innerHTML=Math.round(100*neuron.weight1)/100===1 ? "" : Math.round(100*neuron.weight1)/100===-1 ? "-" : Math.round(100*neuron.weight1)/100;
        cRes.innerHTML=Math.round(100*neuron.weight2)/100===1 ? "" : Math.round(100*neuron.weight2)/100===-1 ? "-" : Math.round(100*neuron.weight2)/100;
        dRes.innerHTML=Math.round(100*neuron.weight3)/100===1 ? "" : Math.round(100*neuron.weight3)/100===-1 ? "-" : Math.round(100*neuron.weight3)/100;
    }
    
    let thinking=document.getElementById("think");
    thinking.addEventListener("click",myThinking);
    
    function myThinking(){
        let point=[document.getElementById("point").value];
        
        result.innerHTML="f(X)= "+Math.round(100*neuron.think(point))/100;
        
        
    }
    
    function inputPoints(){
        let p2= + document.getElementById("p2").value;
        let pointsPar=document.getElementById("points par");
        pointsPar.innerHTML="";
        let points = [];
        for(let i=0; i<p2; i++){
            points[i] = document.createElement(`p_${i.toString()}`);
            points[i].innerHTML = '<br/>x:<input type="number", id='+`x_${i.toString()}`+' placeholder='+`x_${i.toString()}`+' /> y:<input type="number", id='+`y_${i.toString()}`+' placeholder='+`y_${i.toString()}`+' /> <br/>';
            pointsPar.appendChild(points[i]);
        };
    }
    
    function myTraining2(){
        let p2= + document.getElementById("p2").value;
        let n2= + document.getElementById("n2").value;
        let input=[];
        let output=[];
        for(let i=0;i<p2;i++){
            input[i]= + document.getElementById(`x_${i.toString()}`).value;
            output[i]= + document.getElementById(`y_${i.toString()}`).value;
        };
        
        
        neuron.train(input,output,n2);
     
        aRes2.innerHTML=Math.round(100*neuron.weight0)/100;
        bRes2.innerHTML=Math.round(100*neuron.weight1)/100===1 ? "" : Math.round(100*neuron.weight1)/100===-1 ? "-" : Math.round(100*neuron.weight1)/100;
        cRes2.innerHTML=Math.round(100*neuron.weight2)/100===1 ? "" : Math.round(100*neuron.weight2)/100===-1 ? "-" : Math.round(100*neuron.weight2)/100;
        dRes2.innerHTML=Math.round(100*neuron.weight3)/100===1 ? "" : Math.round(100*neuron.weight3)/100===-1 ? "-" : Math.round(100*neuron.weight3)/100;
    }
    
    let thinking2=document.getElementById("think2");
    thinking2.addEventListener("click",myThinking2);
    
    function myThinking2(){
        let point2=[document.getElementById("point2").value];
        
        result2.innerHTML="f(X)= "+Math.round(100*neuron.think(point2))/100;
        
        
    }
    
};
