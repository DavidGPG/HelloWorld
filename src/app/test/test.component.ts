import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  //templateUrl: './test.component.html',
  //styleUrls: ['./test.component.css']
  template : `
  <h2>Inline template without calling a HTML</h2>   
  <!--<div>
      <h2>Inline template without calling a HTML</h2>     
  </div>
   <h1>Welcome {{Name}}</h1>
<h2>{{Name.length}}</h2>
<h2>{{getFullName()}}</h2>
<h2>SiteUrl={{Location}}</h2> -->
<!-- 
<input type="text" value="Text">
<input type="checkbox" bind-checked="IsChecked">

<h2 class="text-success">Success by class</h2>
<h2 class="text-danger">Danger text</h2>
<h2 class="text-special">Especial text</h2>

<h2 [class]="Success">Success by Propery</h2>

<h2 [class.text-danger]="hasError">hasError by Propery</h2>
<h2 [ngClass]="TextClasess">hasError by multiclasses</h2>-->


<h2 [style.color]="hasError ? 'red' : 'green'">Style by conditional</h2>
<h2 [ngStyle]="styles">Style by multiclasses</h2> 

<input type="checkbox" bind-checked="IsChecked">

<button (click)="onClick($event)">Welcome</button> {{getFullName()}}

<button (click)="onClick($event)">Welcome</button> {{getFullName()}}

  `,
  styles: [`
.text-success{
    color: green;
  }
.text-danger{
  color:red;
}
.text-special{
  font-style: italic;
}

  `]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public Name = "David"
  private LastName = "Perez"
  public Location=window.location.href
  
  public IsChecked=true

  public Success = "text-success"

  public hasError = false

 public TextClasess = {
    "text-success" : !this.hasError,
    "text-danger": this.hasError,
    "text-special" : false
 }

 public styles= {
color: this.hasError ? "green" : "gray",
fontStyle : "italic",
fontSize : "12"

 }

public getFullName()
{
return this.Name + ' '+ this.LastName 

}

 onClick(event: { type: any; }) {
  //alert("Welcome to angular "+ this.getFullName());
  console.log('clicking button');
  console.log(event.type);
  
}

}
