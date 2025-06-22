import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProfileIcon } from '../profile-icon/profile-icon';
import { PrimaryDetails } from "../primary-details/primary-details";
import { ContactSocialDetails } from "../contact-social-details/contact-social-details";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatGridListModule, ProfileIcon, PrimaryDetails, ContactSocialDetails],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {

}
