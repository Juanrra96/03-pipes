import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, par:boolean = true ): string {
    
 
    if (par == true){
    let contra = value.replace(/./g, '*');
    return contra;
    }else {
      return value;
    }
  }

}
