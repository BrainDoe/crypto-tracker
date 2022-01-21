import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}

  // transform(html: any): unknown {
  //   return this.domSanitizer.bypassSecurityTrustHtml(html);
  // }

  transform(html: any, styleSelector: any, styleValue: any): SafeHtml {
    const style = ` style = "${styleSelector}: ${styleValue};"`;
    const indexPosition = html.indexOf('>');
    const newHtml = [html.slice(0, indexPosition), style, html.slice(indexPosition)].join('');
    return this.domSanitizer.bypassSecurityTrustHtml(newHtml);
}

}
