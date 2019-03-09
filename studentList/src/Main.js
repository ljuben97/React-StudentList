    import React, {Component} from 'react'
    import {listStudents} from './repository/studentRepository.js'
    import StudentsList from "./StudentsList.js"

    class Main extends Component{
        constructor(props){
            super(props);

            this.state={
                students: []
            }
        }

        render(){
            return (
                <div>
                    <StudentsList changeFinal={this.changeFinal} students={this.state.students}/>
                </div>
            )
        }

        componentDidMount() {
            this.setState({
                students: listStudents()
            })
        }

        changeFinal=(objekt, indeks)=>{
            let newStudents=this.state.students;
            newStudents[indeks]=objekt;
            this.setState({
                students: newStudents
            })
        }
    }

    export default Main