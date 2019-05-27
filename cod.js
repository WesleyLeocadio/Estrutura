
//----------------------------INICIO DA ARVORE BINARIA-----------------------------------------
function Node(key,frequencia) {
    this.key = key;
    this.frequencia= frequencia;
    this.dir = null;
    this.esq = null;
}

function BinarySearchTree() {
    let vetor = [];
    let table = [];

    let root = null;


    this.ordenarVetor = function () {
        for (i = 0; i < vetor.length; i++) {
            for (j = i + 1; j < vetor.length; j++) {
                if (vetor[i] < vetor[j]) {
                    //troca vetor de números
                    aux = vetor[i];
                    vetor[i] = vetor[j];
                    vetor[j] = aux;
                }
            }
        }
    }
    

    this.mostrarVetor = function () {
        for (i = 0; i < vetor.length; i++) {
            console.log(vetor[i]);
        }
    }

    this.insert = function (freq) {


      
        var vetorCaracter=[]
        var vetorFreq=[]

        for (var i in freq) {
           //console.log(([freq[i], i]));
            vetorCaracter.push(freq[i][1]);
            vetorFreq.push(freq[i][0]);
            console.log(vetorCaracter[i])
        }
       
        for (let i = 0; i < vetorFreq.length; i++) {
            vetor[i]=new Node(vetorFreq[i],vetorCaracter[i]);
            
        }
       
        let node3 ;
        while(vetor.length>1){
            
            theRest = vetor.slice(2, vetor.length);
            //console.log(theRest);  
            combFreq = vetor[0].key + vetor[1].key;
            //console.log(combFreq);  
            //console.log(vetor)
             node3 = new Node(combFreq);
            this.insertNode(node3,vetor[0]);
            this.insertNode(node3,vetor[1]);
            vetor = theRest;

  
          // console.log(" Node3: "+node3.key+"  Esquerda: "+node3.esq.key+" Direita: "+node3.nodeValue)
            vetor.push(node3)
            //console.log(tuples);  
            vetor.sort();
            
          
        }
        //console.log(vetor)
            //console.log(vetor);
            root = vetor[0];
           // console.log("filho: "+root.dir.dir.frequencia);

           // this.preOrderNode(node3);
           this.createTable();
           for(i = 0; i < vetorCaracter.length; i++){  
            console.log("letra = "+vetorCaracter[i] +" valor = "+ table[vetorCaracter[i]]);
        }
    }

    this.createTable = function (){
        this.fillTable(root, '');
    }

    this.fillTable = function(node, code){

        if(node.frequencia != undefined){
            console.log("keu"+node.frequencia);
            table[node.frequencia] = code;
          // console.log("tabela "+ table[node.key] )
        }else{
            this.fillTable(node.esq, code+'0');
            this.fillTable(node.dir, code+'1');
        }
        
       // console.log(table[node.esq.key])
    }
    



    this.insertNode = function (node, newNode){
        if (newNode.key < node.key){
           if(node.esq===null)
            node.esq = newNode;
            else
            node.dir=newNode
           
        } else{
            node.dir = newNode;
            
        }
    }


    this.printNode = function(node){
        if (node !== null) {
            this.printNode(node.esq);
            console.log(node.key);
            this.printNode(node.dir);
        }
    }

    


this.remove = function (key) {
    root = this.removeNode(root, key);
}

this.findMinNode = function (node) {
    while (node && node.esq !== null) {
        node = node.esq;
    }

    return node;
}

this.removeNode = function (node, key) {

    if (node === null) {
        return null;
    }

    if (key < node.key) {
        node.esq = this.removeNode(node.esq, key);
        return node;
    } else if (key > node.key) {
        node.dir = this.removeNode(node.dir, key);
        return node;
    } else {

        //caso 1
        if (node.esq === null && node.dir === null) {
            node = null;
            return node;
        }

        //caso 2
        if (node.esq === null) {
            node = node.dir;
            return node;
        } else if (node.dir === null) {
            node = node.esq;
            return node;
        }

        //caso 3

        var aux = this.findMinNode(node.dir);
        node.key = aux.key;
        node.dir = this.removeNode(node.dir, aux.key);
        return node;
    }
}


this.height = function () {
    if (root === null) {
        console.log("é nula");
        return -1; // altura da árvore vazia
    } else {
        return this.heightNode(root);
    }
}

this.heightNode = function (raiz) {
    if (raiz === null)
        return -1; // altura da árvore vazia
    else {
        altura_esquerda = this.heightNode(raiz.esq);
        altura_direita = this.heightNode(raiz.dir);
        if (altura_esquerda < altura_direita) {
            return altura_direita + 1;
        } else {
            return altura_esquerda + 1;
        }
    }
}

this.preOrder = function () {
    this.preOrderNode(root);
}

this.preOrderNode = function (node) {
    if (node !== null) {
        console.log( node.frequencia+'|'+node.key);
        this.preOrderNode(node.esq);
        this.preOrderNode(node.dir);
    }
}

this.inOrder = function () {
    this.inOrderNode(root);
}

this.inOrderNode = function (node) {
    if (node !== null) {
        this.inOrderNode(node.esq);
        console.log(node.key);
        this.inOrderNode(node.dir);
    }
}

this.posOrder = function () {
    this.posOrderNode(root);
}

this.posOrderNode = function (node) {
    if (node !== null) {
        this.posOrderNode(node.esq);
        this.posOrderNode(node.dir);
        console.log(node.key);
    }
}

}

//------------------------------------ FIM DA ARVORE BINARIA----------------------------------

















function HuffmanEncoding(str) {
    this.texto = str;

    var freq = {};
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] in freq)
            freq[texto[i]]++;
        else
            freq[texto[i]] = 1;

    }
    return freq;
}
//var a= "wesley";
//HuffmanEncoding(a)



function ordenarFrequencias(freq) {
    var matriz = [];
    let vetorCaracter = []
    let vetorFreq = []
    for (var i in freq) {
        matriz.push([freq[i], i]);
        vetorCaracter.push([i]);
        vetorFreq.push(freq[i]);

    }
    vetorCaracter.sort();
    vetorFreq.sort();
    //console.log(vetorCaracter)
    //console.log(vetorFreq)


    return matriz;
}

function buildTree(tuples) {
    while (tuples.length > 1) {
        leastTwo = [tuples[0][1], tuples[1][1]]
        //console.log(leastTwo);  
        theRest = tuples.slice(2, tuples.length);
        //console.log(theRest);  
        combFreq = tuples[0][0] + tuples[1][0];
        //console.log(combFreq);  
        tuples = theRest;
        end = [combFreq, leastTwo];
        tuples.push(end);
        //console.log(tuples);  
        tuples.sort();
        //console.log(tuples);  
    }
    return tuples[0][1];

}

//=====================================================================================================









w = HuffmanEncoding("aabbcc");
//console.log(ordenarFrequencias(w));
//console.log(buildTree(ordenarFrequencias(w)));


b = new BinarySearchTree();
v = ordenarFrequencias(w)
//console.log(v)
b.insert(v)
b.preOrder();