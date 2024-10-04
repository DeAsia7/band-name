let data= [];

function enterInputs(){

    let songname= inputsongName.value;
    let artistname= inputartistname.value;
    let songduration= inputnumber.value
    

    let temp= {
        songname,
        artistname,
        songduration,
    }
    data.push(temp)
    renderTable()
}



function renderTable(){

let tableLayout= 
`<tr>
<th>songName</th>
<th>artistname</th>
<th>songduration</th>
</tr>`


for (let i=0; i<data.length; i++){
    tableLayout+= 
`<tr>
<td>${data[i].songname}</td>
<td>${data[i].artistname}</td>
<td>${data[i].songduration}</td>

</tr>`
}
formTable.innerHTML= tableLayout
}


