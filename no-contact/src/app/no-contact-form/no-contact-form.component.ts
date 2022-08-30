import { OnInit, Component } from '@angular/core';
import { NoContactFormService } from './no-contact-form.service';

@Component({
  selector: 'app-no-contact-form',
  templateUrl: './no-contact-form.component.html',
  styleUrls: ['./no-contact-form.component.scss'],
  providers: [ NoContactFormService ]
})
export class NoContactFormComponent implements OnInit {

  constructor(private noContactFormService: NoContactFormService) { 
  }

  ngOnInit(): void {
    this.noContactFormService.getNCAPDetails().subscribe();

  }

}
