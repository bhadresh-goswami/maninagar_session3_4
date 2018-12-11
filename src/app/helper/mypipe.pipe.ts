import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: number, args?: string): string {

    if ( args == "Eve")
    {
      if(value%2==0)
      {
        return `yes! ${value} is Even.`;//"yes it is even!";
      }
      return `no! ${value} is not Even.`;
    }
    else if ( args == "Odd")
    {
      if(value%2!=0)
      {
        return `yes! ${value} is Odd.`;;
      }
      return `No! ${value} is not Odd.`;
    }

    return "Please Enter Odd or Eve in Argument!";
  }

}
