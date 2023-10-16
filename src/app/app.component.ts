import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class AppComponent {
  length: string = '';

  includeUpperCase: boolean = false;
  includeLowerCase: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  password: string = '';

  generatePassword(): void {
    const chars = this.determineCharacters();
    const len = this.parseLength();

    if (!isNaN(len) && len > 0) {
      let generatedPassword = '';

      for (let i = 0; i < len; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        generatedPassword += chars[randomNumber];
      }
      this.password = generatedPassword;
    }
  }

  private determineCharacters(): string {
    const upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCases = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-={}[]|:;"';

    let chars = '';
    if (this.includeUpperCase) {
      chars += upperCases;
    }
    if (this.includeLowerCase) {
      chars += lowerCases;
    }
    if (this.includeNumbers) {
      chars += numbers;
    }
    if (this.includeSymbols) {
      chars += symbols;
    }

    return chars;
  }

  private parseLength(): number {
    return parseInt(this.length);
  }
}
