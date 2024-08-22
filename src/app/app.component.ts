import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: Event){
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@£$%^&*()';

    let validChar = '';
    if (this.includeLetters){
      validChar += letters;
    }

    if (this.includeNumbers){
      validChar += numbers;
    }

    if (this.includeSymbols){
      validChar += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChar.length);
      generatedPassword += validChar[index];
    }

    this.password = generatedPassword;
  }
}
