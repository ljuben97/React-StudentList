import React,{Component} from 'react'

class StudentItem extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        let self=this;
        return(
            <li onClick={self.HandleShow}>{this.props.student.name} {this.props.student.lastName} {this.props.student.indeks} {this.props.student.studyProgram}</li>
        )
    }

    HandleShow=()=>{
        this.props.onShow(this.props.indeks);
    }
}

export default StudentItem