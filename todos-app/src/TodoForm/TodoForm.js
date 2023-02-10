import './TodoForm.scss';
import React, { useState} from 'react';

export default function TodoForm() {
  
  const [title1,setTitle1] = useState("");
  const [description1, setDescription1] = useState("");
  const [dueDate1,setDueDate1] = useState("");
  const [dueTime1,setDueTime1] = useState("");

  const [showResults, setShowResults] = useState(false);

  // Handle changes to any input
  function handleChange (event) {
        
        const target = event.target;
        if(target.name === 'title'){
          setTitle1(target.value);
        }
        else if(target.name === 'description'){
          setDescription1(target.value);
        }
        else if(target.name === 'dueDate'){
          setDueDate1(target.value);
        }
        else if(target.name === 'dueTime'){
          setDueTime1(target.value);
        }

    }

    // Function to handle Submit button
    function handleSubmit (event){
      const title = title1;
      const description = description1;

      // Set new date to populate the date
      let d = new Date();
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      let year = d.getFullYear();

        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

      const date = [month, day, year].join('/');
    //  Generate our date in mm/dd/yyyy
      let dateYear = dueDate1.slice(0,4);
      let dateMonth = dueDate1.slice(5,7);
      let dateDay = dueDate1.slice(8,10);
      const inputdate = [dateMonth, dateDay, dateYear].join('/')
      // Post Http method on submit button
      // Pass the todo values
        const url = "http://localhost:8080/todo/";
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: title,
          description: description,
          dueDate:inputdate,
          dueTime: dueTime1,
          createdDate: date,
          lastModifiedDate: date,
          isComplete:false})
        };
         fetch(url, requestOptions)
          .then(response =>{
            if(response.ok){
              console.log("SUCCESS");
              return null;
            }
            throw response;
          })
          .catch(error => {
            console.error("Error fetching data",error);
          })  
    }
    // Function to handle the form display
    function handleAddButton(){
      setShowResults(true);
    }
  return (
    <>
    <button onClick={handleAddButton} className="AddButton">Add Todo</button>
    {showResults?(<form onSubmit={handleSubmit} className="AddForm">
           <label>
             Title:
             <input type="text" name = "title" required placeholder='Enter the title' value={title1} onChange={handleChange} />
           </label>
           <label>
             Description:
             <input type="text" name = "description" required placeholder= 'Enter a description' value={description1} onChange={handleChange}/>
           </label> 
           <label>
             Due Date:
             <input type="date" name = "dueDate" required placeholder= 'Enter a Due Date' value={dueDate1} onChange={handleChange}/>
           </label> 
           <label>
             Due Time:
             <input type="time" name = "dueTime" required placeholder= 'Enter a description' value={dueTime1} onChange={handleChange}/>
           </label> 
           <input type="submit" value="Add" className="submit"/>
    </form>):<></>}
    </>
    
  )
}


// class TodoForm extends React.Component {
//     constructor(props) {
//       super(props);
//     //   console.log(props);
//       this.state = {title: '', description: ''};
//     //   this.description = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     //   this.handleFocus = this.handleFocus.bind(this);
//     }
  
//     handleChange(event) {
//     const target = event.target;
//     target.name === 'title' ? this.setState({title: target.value}) : this.setState({description: target.value});
//     }
    
  
//     handleSubmit(event) {
//     //   alert('A name was submitted: ' + this.state.title + this.state.description );
//       this.setState({title: ''})
//       this.setState({description: ''});
//       const title = this.state.title;
//       const description = this.state.description;
//     //   const date = (new Date().getDate())
//       let d = new Date();
//       let month = '' + (d.getMonth() + 1);
//       let day = '' + d.getDate();
//       let year = d.getFullYear();

//         if (month.length < 2) 
//             month = '0' + month;
//         if (day.length < 2) 
//             day = '0' + day;

//     const date = [month, day, year].join('/');
//       this.props.AddTodo([{'title':title,'description':description,'createdDate':date, 'lastModifiedDate':date}]);

//     // const [error,setError] = useState(null);    
//     //   -------------
//     useEffect(() =>{
//           const url = "http://localhost:8080/todo/";
//           const requestOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ title: 'aSSIGNMENT 100',
//             description: 'Complete the Assignment of Object Oriented design',
//             createdDate: '11/20/2022',
//             lastModifiedDate: '11/19/2022' })
//           };
      
//           fetch(url, requestOptions)
//             .then(response =>{
//               if(response.ok){
//                 console.log("SUCCESS");
//                 return null;
//                 // response.json()
//               }
//               throw response;
//             })
//             // .then(console.log("SUCCESS"))
//             .catch(error => {
//               console.error("Error fetching data",error);
//               // setError(error);
//             })
//         },[])
//         // if (error) return error; 
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Title:
//             <input type="text" name = "title" placeholder='Enter the title' value={this.state.title} onChange={this.handleChange} />
//           </label>
//           <label>
//             Description:
//             <input type="text" name = "description" placeholder= 'Enter a description' value={this.state.description} onChange={this.handleChange}/>
//           </label> 
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

  // export default TodoForm;
