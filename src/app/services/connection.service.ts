import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Connection } from '../interfaces/connection';
import { Group } from '../interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  // json-server url
  private serverUrl: string = `http://localhost:9000`;

  constructor(private httpClient: HttpClient) { }

  // GET All Connections
  public getAllConnections(): Observable<Connection[]> {
  let dataURL: string = `${this.serverUrl}/connections`;
  return this.httpClient.get<Connection[]>(dataURL).pipe(catchError(this.handleError));
  }

  //GET A Single Connection
  public getConnection(connectionId: string): Observable<Connection>{
    let dataURL: string = `${this.serverUrl}/connections/${connectionId}`;
    return this.httpClient.get<Connection>(dataURL).pipe(catchError(this.handleError));
  }

  // ADD or CREATE a Connection
  public addConnection(connection: Connection): Observable<Connection> {
    let dataURL: string = `${this.serverUrl}/connections`;
    return this.httpClient.post<Connection>(dataURL, connection).pipe(catchError(this.handleError));
  }

  // UPDATE a Connection
  public updateConnection(connection: Connection, connectionId: string): Observable<Connection>{
    let dataURL: string = `${this.serverUrl}/connections/${connectionId}`;
    return this.httpClient.put<Connection>(dataURL, connection).pipe(catchError(this.handleError));
  }

  // DELETE a Connection
  public deleteConnection(connectionId: string): Observable<{}> {
  let dataURL: string = `${this.serverUrl}/connections/${connectionId}`;
  return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
}

// GET ALL Groups
public getAllGroups(): Observable<Group[]> {
  let dataURL: string = `${this.serverUrl}/groups`;
  return this.httpClient.get<Group[]>(dataURL).pipe(catchError(this.handleError));
  }

  //GET a Single Group
  public getGroup(connection: Connection): Observable<Group>{
    let dataURL: string = `${this.serverUrl}/groups/${connection.groupId}`;
    return this.httpClient.get<Group>(dataURL).pipe(catchError(this.handleError));
  }

  // Handling error
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent){
      // client error
      errorMessage = `Error: ${error.error.message}`
    } else {
      // server error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
