import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipieDetails:any[],searchKey:string): any[] {

    const result: any= []

    if(!recipieDetails || searchKey ==""){
      return recipieDetails
    }
    recipieDetails.forEach((item=>{
      if(item.cuisine?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
      if(item.name?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
        result.push(item)
      }
    }))

    return result;
  }

}
