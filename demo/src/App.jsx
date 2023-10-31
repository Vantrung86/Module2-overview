import React from 'react'
// import Header from './components/Header'
// import Body from './components/Body'
// import Footer from './components/Footer'
// import Bai1 from './components/Baitap1/Bai1'
// import Bai2 from './components/Baitap2/Bai2'
// import Bai3 from './components/Baitap3/Bai3'
// import Bai4 from './components/Baitap4/Bai4'
// import Bai5 from './components/Baitap5/Bai5'
import Bai6 from './components/Baitap6/Bai6'

export default function App() {
  // const fullName = "trung";
  // const age = 19;
  // let students = ["minh", "hong", "hue"];
  // let address = [
  //   {
  //     name: "minh",
  //     address: "chi linh",
  //     id:1
  //   },
  //   {
  //     name: "thuan",
  //     address: "hai duong",
  //     id:2
  //   },
  //   {
  //     name: "trung",
  //     address: "ninh binh",
  //     id:3
  //   }
  // ]
  return (
    // <>
    //   <p>xin chao {fullName}, {age} tuoi</p>
    //   {/* <div>Hello Word</div>
    //   <div>react</div> */}
    //   <ul>
    //       {students.map((item, index) => (
    //           <li key={index}>{item}</li>
    //       ))}
    //   </ul>

    //   <table>
    //         <thead>
    //           <tr>
    //             <th>Stt</th>
    //             <th>name</th>
    //             <th>id</th>
    //             <th>address</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {address.map((item,index)=>(
    //             <tr key={item.id}>
    //               <td>{index+1}</td>
    //               <td>{item.name}</td>
    //               <td>{item.id}</td>
    //               <td>{item.address}</td> 
    //             </tr>
    //           ))}
    //         </tbody>
    //   </table>
    // </>
    <>
      {/* <Header></Header>
      <Body></Body>
      <Footer></Footer> */}
      {/* <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5> */}
      <Bai6></Bai6>
    </>
  )
}

//1. function component: rfc
//2. class: rcc(react function component) {gio bo roi}
//https://transform.tools/html-to-jsx: chuyen html --> jsx

//reactjs-facebook: thu vien gom nhieu components, virtual-dom(dom ao), tao UI(user interface), data-oneway-binding:dl 1 chieu
//angular-google : framework
//vuejs -trung quoc: framework