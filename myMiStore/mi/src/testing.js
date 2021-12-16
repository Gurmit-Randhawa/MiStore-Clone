const datas = [{Name:"gurmit",
                Class:6,
                 Subject:"Computer"},
                 {Name:"akash",
                 Class:6,
                  Subject:"Computer"}]


const getData = () => {
    setTimeout(() => {
        let output = [];
        datas.forEach((data)=>{
            output += `<li>${data.Name}</li>`;
            })
            document.body.innerHTML = output;
            
    }, 1000);
}

const createData =  (a) => {
     setTimeout(() => {
       datas.push(a);

    }, 2000);
};


const startData = async () => {
    await createData({Name:'Shabeer', Class:"2", Subject:'english'});
    getData();

};

startData();

