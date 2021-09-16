import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public options = {}

  public froalaOptions = {
  toolbarButtons:['bold', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting', 'alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote', 'markdown', 'trackChanges'],
  events: {
    "initialized": () => {
      console.log('initialized');
    },
    "contentChanged": function(){
      document.getElementById('preview').innerHTML = this.html.get();
    },
    'focus': function () {
      console.log("focus", this);
    }
  }
}
  constructor() {

  }

}
