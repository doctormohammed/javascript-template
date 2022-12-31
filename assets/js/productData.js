let productsD = [
    
    {id :1,size:"large" ,quantity:1 ,name:"mouse" , p:"good"     ,imgurl:"../../assets/images/chair4.jpg",isMe:"N"},
    {id :2,size:"small" ,quantity:1 ,name:"lap"   , p:"beatufil" ,imgurl:"../../assets/images/chair3.jpg",isMe:"N"},
    {id :3,size:"tiny"  ,quantity:1 ,name:"scarf" , p:"nice"     ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"},
    {id :4,size:"large" ,quantity:1 ,name:"chair" , p:"awsome"   ,imgurl:"../../assets/images/chair1.jpg",isMe:"N"},
    {id :5,size:"medium",quantity:1 ,name:"table" , p:"haky"     ,imgurl:"../../assets/images/chair4.jpg",isMe:"N"},
    {id :6,size:"large" ,quantity:1 ,name:"lap2"  , p:"nice"     ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"},
    {id :7,size:"tiny"  ,quantity:1 ,name:"lap3"  , p:"beautiful",imgurl:"../../assets/images/chair2.jpg",isMe:"N"},
    {id :8,size:"small" ,quantity:1 ,name:"lap3"  , p:"nice"     ,imgurl:"../../assets/images/chair2.jpg",isMe:"N"}
];


localStorage.setItem("productsData" , JSON.stringify(productsD))