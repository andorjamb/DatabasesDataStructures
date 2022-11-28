
addEdge(v1, v2){
    this.adjacencyList[v1].push[v2];
    this.adjacencyList[v2].push[v1];
}
addVertex(){ }

removeEdge(v1, v2){
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        v => v !== v2)

}


let g = new Graph();
g.addVertex("Tokyo");