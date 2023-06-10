function myfun(){
    fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
    .then(response=>response.json())
    .then(objectData=>{
        console.log(objectData);
        let tableData="";
        document.getElementById("tid").innerHTML=`<tr>
        <th>Name</th>
        <th>office</th>
        <th>position</th>
        <th>salary</th>
        </tr>`;

        objectData.data.map((values)=>{
        tableData+=`<tr><td>${values.name}</td>
                    <td>${values.office}</td>
                    <td>${values.position}</td>
                    <td>${values.salary}</td></tr>`;
        });
        document.getElementById("table_body").innerHTML=tableData;
    })
    .catch(error=>{
        console.log(error);
    })
}
