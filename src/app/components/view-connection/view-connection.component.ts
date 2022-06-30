import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Connection } from 'src/app/interfaces/connection';
import { Group } from 'src/app/interfaces/group';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-view-connection',
  templateUrl: './view-connection.component.html',
  styleUrls: ['./view-connection.component.css']
})
export class ViewConnectionComponent implements OnInit {

  public loading: boolean = false;
  public connection:Connection = {} as Connection;
  public errorMessage: string | null = null;
  public connectionId: string | null = null;
  public group:Group = {} as Group;

  // use activatedRoute to get any parameter data
  constructor(private activatedRoute: ActivatedRoute,
              private connectionService: ConnectionService) {

   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.connectionId = param.get('connectionId');
    });
    if (this.connectionId) {
      this.loading = true;
      this.connectionService.getConnection(this.connectionId).subscribe((data) => {
        this.connection = data;
        this.loading = false;
        this.connectionService.getGroup(data).subscribe((data) => {
          this.group = data;
        })
      }, (error) => {
        this.errorMessage = error;
        this.loading = false;
      });

    }
  }

  public isNotEmpty() {
    return Object.keys(this.connection).length > 0 && Object.keys(this.group).length > 0;
  }

}
