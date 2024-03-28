import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UpdateProfileComponent } from "../../update-profile/update-profile.component";
import { MatDialog } from "@angular/material/dialog";
import { formatDate } from "@angular/common";

@Component({
  selector: 'app-profile-keeper',
  templateUrl: './profile-keeper.component.html',
  styleUrls: ['./profile-keeper.component.css']
})
export class ProfileKeeperComponent {
  name: string;
  lastName: string;
  birthdate: Date;
  phone: string;
  email: string;

  constructor(private router: Router, private dialog: MatDialog) {
    this.name = 'Alejandro';
    this.lastName = 'Soto';
    this.birthdate = new Date(2002, 1, 28);
    this.phone = '959458748';
    this.email = 'ale12@gmail.com';
  }

  getFormattedBirthdate(): string {
    return formatDate(this.birthdate, 'dd-MM-yyyy', 'en-US');
  }

  goToKeeper() {
    this.router.navigateByUrl('/home-keeper');
  }
  goToFindHouse() {
    this.router.navigateByUrl('/find-house');
  }
  goToMessenger() {
    this.router.navigateByUrl('/messenger-keeper');
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  openUpdateDialog(): void {
    const formattedBirthdate = this.getFormattedBirthdate();
    const dialogRef = this.dialog.open(UpdateProfileComponent, {
      width: '500px',
      data: { name: this.name, lastName: this.lastName, birthdate: this.birthdate, phone: this.phone, email: this.email }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.name = result.name;
        this.lastName = result.lastName;
        this.birthdate = result.birthdate;
        this.phone = result.phone;
        this.email = result.email;
      }
    });
  }
  signOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.router.navigate(['']).then();
    console.log("Signed Out");
  }
}
