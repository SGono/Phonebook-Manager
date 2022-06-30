import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Connection } from 'src/app/interfaces/connection';
import { Group } from 'src/app/interfaces/group';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-edit-connection',
  templateUrl: './edit-connection.component.html',
  styleUrls: ['./edit-connection.component.css']
})
export class EditConnectionComponent implements OnInit {

  public loading: boolean = false;
  public connectionId: string | null = null;
  public connection: Connection = {} as Connection;
  public errorMessage: string | null = null;
  public groups: Group[] = [] as Group[];

  constructor(private connectionService: ConnectionService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
   }

  ngOnInit(): void {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe((param) => {
      this.connectionId = param.get('connectionId');
    });
    if(this.connectionId){
      this.connectionService.getConnection(this.connectionId).subscribe((data) => {
        this.connection = data;
        this.loading = false;
        this.connectionService.getAllGroups().subscribe((data) => {
          this.groups = data;
        });
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      })
    }
  }

  submitUpdate() {
    if(this.connectionId){
    this.connectionService.updateConnection(this.connection, this.connectionId).subscribe((data) => {
      this.router.navigate( ['/']).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate( [`/connections/edit/${this.connectionId}`]).then();
    });
  }
 }
}
