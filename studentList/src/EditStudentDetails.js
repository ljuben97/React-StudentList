import React,{Component} from "react"

class EditStudentDetails extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div>
                <input className={"name"+this.props.indeks} type="text" defaultValue={this.props.student.name}/>
                <input className={"lastName"+this.props.indeks} type="text" defaultValue={this.props.student.lastName}/>
                <input className={"indeks"+this.props.indeks} type="text" defaultValue={this.props.student.indeks}/>
                <input className={"nasoka"+this.props.indeks} type="text" defaultValue={this.props.student.studyProgram}/>
                <input type="button" value="Edit" onClick={this.Edit}/>
            </div>
        )
    }

    Edit=()=>{
        var name=document.getElementsByClassName("name"+this.props.indeks)[0].value;
        var lastName=document.getElementsByClassName("lastName"+this.props.indeks)[0].value;
        var indeks=document.getElementsByClassName("indeks"+this.props.indeks)[0].value;
        var nasoka=document.getElementsByClassName("nasoka"+this.props.indeks)[0].value;
        this.props.onChange(name, lastName, indeks, nasoka, this.props.indeks);
    }
}

export default EditStudentDetails