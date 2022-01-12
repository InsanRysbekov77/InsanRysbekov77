import Expense from './components/Expenses/Expense';
import Card from './components/UI/Card'
function App(){
  const expenses = [
    {
      id: 'e1',
      title: 'Toiler proper',
      amount: 200,
      date: new Date (2021, 7, 14)
    },
    {
      id: 'e2',
      title: 'Car surance',
      amount: 400,
      date: new Date (2020, 10, 21)
    },
    {
      id: 'e3',
      title: 'Washing Machine',
      amount: 500,
      date: new Date (2020, 2, 29)
    },
    {
      id: 'e1',
      title: 'A vacuum cleaner',
      amount: 350,
      date: new Date (2021, 3, 5)
    }
  ]
    return (
      <Card>
        <h2>Let's get started!</h2>
         <Expense  data={expenses}/>
      </Card>
    )
}

export default App;



// import { Card }  from "./Components/Card.jsx" 
// import "./Components/Card.css"
// import logo from './Components/img/logo.jpeg'
// import logo2 from './Components/img/insan.jpg'
// import logo3 from './Components/img/nurs.jpg'
// import logo4 from './Components/img/kudaibergen.jpg'
// import MyComponents from './Components/MyComponents'
// function App() {
//   return (
//     <div className="App">
//       <Card name="Aigerim" age="20" edu="PeakSoft" email="aigerim09@mail.com" img={logo}/>
//       <Card name="Insan" age="18" edu="инструктор" email="insanrysbecov@mail.com" img={logo2}/>
//       <Card name="Nursultan" age="18" edu="разработчик" email="nurs0709@mail.com" img={logo3}/>
//       <Card name="Kudaibergen" age="18" edu="ментор" email="abdukalievk03@mail.com" img={logo4}/>
//       <MyComponents />
//     </div>
//   );
// }

// export default App;