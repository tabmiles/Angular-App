import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPets'
})
export class SearchPetsPipe implements PipeTransform {

  transform(pipeData:any, pipeModifier:any): any {
    return pipeData.filter((eachItem: { [x: string]: string; }) => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
        eachItem['breed'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}