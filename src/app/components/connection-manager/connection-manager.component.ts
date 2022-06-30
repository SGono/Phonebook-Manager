import { Component, OnInit } from '@angular/core';
import { Connection } from 'src/app/interfaces/connection';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-connection-manager',
  templateUrl: './connection-manager.component.html',
  styleUrls: ['./connection-manager.component.css']
})
export class ConnectionManagerComponent implements OnInit {

  title = 'instant-search';

  public searchInput = '';
  public names = [
    'Stella','Lawrence','Moses','Madala','Newman',
    'Emmanuel','Bryan','Aubrey'
 ]

  public loading: boolean = false;
  public connections: Connection[] = [];
  public errorMessage: string | null = null;


  constructor(private connectionService: ConnectionService) { }

  ngOnInit(): void {
    //when the page is loading
   this.getAllContactsFromServer();
  }

  public getAllContactsFromServer(){
    this.loading = true;
    this.connectionService.getAllConnections().subscribe((data) => {
    this.connections = data;
    this.loading = false;
  }, (error) => {
    this.errorMessage = error;
    this.loading = false;
  });
  }

  public deleteConnection(connectionId: string | undefined) {
    if(connectionId) {
      this.connectionService.deleteConnection(connectionId).subscribe((data) => {
        this.getAllContactsFromServer();
      }, (error) => {
        this.errorMessage = error;
      });
    }
  }

}
