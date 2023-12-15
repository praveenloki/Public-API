var res = fetch("https://jsonplaceholder.typicode.com/users");
res.then((data) => data.json()).then((value) => bar(value))

var container = document.createElement("div");
container.setAttribute = container

var row = document.createElement("div");
row.setAttribute("class","row1")
container.append(row);


function bar(value) {
    console.log(value)
    for (var i = 0; i < value.length; i++) {
    
          row.innerHTML +=
         
        `<div class="col-md-3">
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
                
                <div class="card-body text-secondary">
                   
                    <p class="card-text">Name:${value[i].name}</p>
                    <p class="card-text">Email:${value[i].email}</p>
                   
                </div>
            </div>
            </div>`

    }
 
    document.body.append(container);
}
