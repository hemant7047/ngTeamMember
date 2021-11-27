import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName='';
  members:string[]=[];
  errorMessage='';
  numberOfTeams:number | ''='';
  teams:string[][]=[]
  


  onInput(member:string){
    this.newMemberName=member;
    // console.log(this.newMemberName)
  }

  onNumberOfTeamsInput(value:string){
    this.numberOfTeams=Number(value);
  }

   addMember(){
    if(!this.newMemberName){
      this.errorMessage=("Name can't be empty");
      return;
    }
    
    this.members.push(this.newMemberName);
    this.newMemberName='';
    this.errorMessage=("");
    // console.log(this.members);
    // console.log('Button Is clicked')
  }

  generateTeams(){

    if(!this.numberOfTeams || this.numberOfTeams <=0){
      return;
    }

    const allMembers=[...this.members];

    while(allMembers.length){
      
    for(let i=0;i<this.numberOfTeams;i++){
       const randomIndex =Math.floor(Math.random() * allMembers.length)
       const member =allMembers.splice(randomIndex,1)[0]

       if(this.teams[i]){
         this.teams[i].push(member);
       }else{
         this.teams[i]=[member];
           }
       }
       console.log(this.teams);
    }
    
  }

}
