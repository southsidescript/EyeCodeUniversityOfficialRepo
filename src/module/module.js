// Данные про учеников 


let result_data = [
    {   id:1,
        name:'Тимофей Столяров',
        codeQuantity:10,
        creativity:8,
        percent:100,
        status:true,
        english:8
    },
    {
        id:2,
        name:'Вадим Болотников',
        codeQuantity:10,
        creativity:5,
        percent:100,
        status:true,
        english:8
    },
    {
        id:3,
        name:'Алек Ефремов',
        codeQuantity:8,
        creativity:8,
        percent:90,
        status:true,
        english:2
    },
    {
        id:4,
        name:'Платон Захаров',
        codeQuantity:7,
        creativity:10,
        percent:95,
        status:true,
        english:6
    },
    {
        id:5,
        name:'Михаил Третьяк',
        codeQuantity:0,
        creativity:0,
        percent:0,
        status:false,
        english:8
    },
    {
        id:6,
        name:'Радионов Михаил',
        codeQuantity:0,
        creativity:0,
        percent:0,
        status:false,
        english:6
    },
    {
        id:7,
        name:'Радионов Данил',
        codeQuantity:0,
        creativity:0,
        percent:0,
        status:false,
        english:8
    },
    {
        id:8,
        name:'Чингиз',
        codeQuantity:10,
        creativity:10,
        percent:100,
        status:true,
        english:9
    },
    {
        id:9,
        name:'Арон',
        codeQuantity:8,
        creativity:7,
        percent:90,
        status:true,
        english:6
    },
    {
        id:10,
        name:'Мухаммед Намазов  ',
        codeQuantity:9,
        creativity:9,
        percent:100,
        status:true,
        english:6
    },
    {
        id:11,
        name:'Михаил Ортлиб',
        codeQuantity:0,
        creativity:0,
        percent:0,
        status:false,
        english:6
    },
    {
        id:12,
        name:'Чибисов Стас',
        codeQuantity:10,
        creativity:10,
        percent:80,
        status:true,
        english:7
    },
    {
        id:13,
        name:'Рауль',
        codeQuantity:0,
        creativity:0,
        percent:0,
        status:false,
        english:10
    },
    {
        id:14,
        name:'Андрей',
        codeQuantity:10,
        creativity:8,
        percent:100,
        status:true,
        english:5
    },
    {
        id:15,
        name:'Сергей',
        codeQuantity:7,
        creativity:9,
        percent:100,
        status:true,
        english:5
    },
    {
        id:16,
        name:'Александр Штейнле',
        codeQuantity:10,
        creativity:6,
        percent:100,
        status:true,
        english:4
    },
    {
        id:17,
        name:'Имран',
        codeQuantity:5,
        creativity:3,
        percent:90,
        status:true,
        english:5
    }
]



function setTotalCalc(a,b,c,d){
     let result = (a + b + c + d) / arguments.length;
     console.log(result)
    return result;
}


  module.exports = {
   result_data,
   setTotalCalc
  }




