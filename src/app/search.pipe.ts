import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(connectionNames: string[], searchInput: string): any[]{
      if(!searchInput) {
        return connectionNames;
        }
       searchInput = searchInput.toLowerCase();
       return connectionNames.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
    }
