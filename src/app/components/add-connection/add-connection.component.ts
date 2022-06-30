import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Connection } from 'src/app/interfaces/connection';
import { Group } from 'src/app/interfaces/group';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-add-connection',
  templateUrl: './add-connection.component.html',
  styleUrls: ['./add-connection.component.css']
})
export class AddConnectionComponent implements OnInit {

  public loading: boolean = false;
  public connection: Connection = {} as Connection;
  public errorMessage: string | null = null;
  public groups: Group[] = [] as Group[];

  constructor(private connectionService: ConnectionService,
              private router: Router) {

   }

  ngOnInit(): void {
    this.connectionService.getAllGroups().subscribe((data) => {
      this.groups = data;
    }, (error)=> {
      this.errorMessage = error;
    })
  }

  public addSubmit() {
    this.connectionService.addConnection(this.connection).subscribe((data) => {
      this.router.navigate( ['/']).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate( ['/connections/add']).then();
    });

  }

}
