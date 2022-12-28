let productsD = [
    
    {id :1,quantity:1 ,name:"mouse" , size:"large", p:"good"    ,imgurl:"../../assets/images/chair4.jpg",isMe:"N"},
    {id :2,quantity:1 ,name:"lap"   , size:"small", p:"beatufil",imgurl:"../../assets/images/chair3.jpg",isMe:"N"},
    {id :3,quantity:1 ,name:"scarf" , size:"small", p:"nice"    ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"},
    {id :4,quantity:1 ,name:"chair" , size:"large", p:"awsome"  ,imgurl:"../../assets/images/chair1.jpg",isMe:"N"},
    {id :5,quantity:1 ,name:"table" , size:"tiny" , p:"haky"    ,imgurl:"../../assets/images/chair4.jpg",isMe:"N"},
    {id :6,quantity:1 ,name:"lap2" , size:"small" , p:"nice"    ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"},
    {id :7,quantity:1 ,name:"lap3" , size:"large" , p:"beautiful"    ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"},
    {id :8,quantity:1 ,name:"lap3" , size:"small" , p:"nice"    ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"}
];


localStorage.setItem("productsData" , JSON.stringify(productsD))