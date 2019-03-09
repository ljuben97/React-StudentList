import React, {Component} from "react"
import StudentItem from './StudentItem.js'
import EditStudentDetails from "./EditStudentDetails.js"

class StudentsList extends Component{
    constructor(props){
        super(props);
        this.state={
            editItemShow:[false, false, false]
        }
    }

    render(){
        var self=this;
        var students=this.props.students.map(function (item, index) {
            return <div>
                        <StudentItem indeks={index} onShow={self.onShow} student={item} key={index}/>
                        {self.state.editItemShow[index]? <EditStudentDetails onChange={self.onChange} indeks={index} student={item} key={index+5}/>: null}
                   </div>
          });
        return(
              <div>
                  <ul>
                      {students}
                  </ul>
              </div>
        )
    }

    onShow=(indeks)=>{
        var newEditShow=this.state.editItemShow;
        newEditShow[indeks]=true;
        this.setState({
            editItemShow: newEditShow
        })
    }

    onChange=(name, lastName, indeks, nasoka, brojIndeks)=>{
        var novObjekt=this.props.students[brojIndeks];
        novObjekt.name=name;
        novObjekt.lastName=lastName;
        novObjekt.indeks=indeks;
        novObjekt.studyProgram=nasoka;
        this.props.changeFinal(novObjekt, brojIndeks);
        var noviEditShows=this.state.editItemShow;
        noviEditShows[brojIndeks]=false;
        this.setState({
            editItemShow: noviEditShows
        })
    }
}

export default StudentsList